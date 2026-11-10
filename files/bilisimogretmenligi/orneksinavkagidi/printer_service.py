# -*- coding: utf-8 -*-
"""
Printer Service for macOS CUPS & System Printers
Queries local, network and AirPrint printers, handles printer listing, and dispatches print jobs.
"""

import os
import re
import subprocess
import tempfile

def list_system_printers():
    """
    Returns a list of detected printers with name, status, and default flag.
    """
    printers = []
    default_printer = None

    # 1. Try lpstat -p -d
    try:
        proc = subprocess.run(["lpstat", "-d"], capture_output=True, text=True, timeout=3)
        if proc.returncode == 0 and proc.stdout:
            m = re.search(r"system default destination:\s*(.+)", proc.stdout)
            if not m:
                m = re.search(r"sistemin varsayılan hedefi:\s*(.+)", proc.stdout)
            if m:
                default_printer = m.group(1).strip()
    except Exception:
        pass

    try:
        proc = subprocess.run(["lpstat", "-p"], capture_output=True, text=True, timeout=3)
        if proc.returncode == 0 and proc.stdout:
            for line in proc.stdout.splitlines():
                # e.g.: printer HP_LaserJet is idle. enabled since ...
                m = re.match(r"printer\s+([^\s]+)\s+(.+)", line)
                if not m:
                    m = re.match(r"yazıcı\s+([^\s]+)\s+(.+)", line)
                if m:
                    p_name = m.group(1)
                    p_status = m.group(2)
                    printers.append({
                        "name": p_name,
                        "description": p_status,
                        "is_default": (p_name == default_printer),
                        "type": "CUPS"
                    })
    except Exception:
        pass

    # 2. Try system_profiler SPPrintersDataType if empty
    if not printers:
        try:
            proc = subprocess.run(["system_profiler", "SPPrintersDataType"], capture_output=True, text=True, timeout=5)
            if proc.returncode == 0 and proc.stdout:
                current_p = None
                for line in proc.stdout.splitlines():
                    line_s = line.strip()
                    if line.startswith("    ") and not line.startswith("      ") and line_s.endswith(":"):
                        if current_p:
                            printers.append(current_p)
                        current_p = {
                            "name": line_s[:-1],
                            "description": "macOS Sistem Yazıcısı",
                            "is_default": False,
                            "type": "System"
                        }
                    elif current_p and "Default: Yes" in line_s:
                        current_p["is_default"] = True
                if current_p:
                    printers.append(current_p)
        except Exception:
            pass

    return {
        "printers": printers,
        "default_printer": default_printer,
        "count": len(printers),
        "message": "Yazıcılar başarıyla listelendi." if printers else "Sistemde tanımlı fiziksel CUPS yazıcısı bulunamadı. Tarayıcının yerleşik yazdırma penceresi (AirPrint/Ağ/PDF) ile anında çıktı alabilirsiniz."
    }

def print_file(printer_name, file_path, copies=1):
    """
    Submits a print job via lp command.
    """
    try:
        copies = max(1, int(copies))
        cmd = ["lp"]
        if printer_name:
            cmd.extend(["-d", printer_name])
        cmd.extend(["-n", str(copies), file_path])
        
        proc = subprocess.run(cmd, capture_output=True, text=True, timeout=10)
        if proc.returncode == 0:
            return {
                "success": True,
                "message": f"{copies} adet kopya '{printer_name or 'varsayılan yazıcıya'}' başarıyla gönderildi.",
                "output": proc.stdout
            }
        else:
            return {
                "success": False,
                "message": f"Yazdırma hatası: {proc.stderr or proc.stdout}",
                "error": proc.stderr
            }
    except Exception as e:
        return {
            "success": False,
            "message": f"Yazdırma servisi hatası: {str(e)}"
        }

