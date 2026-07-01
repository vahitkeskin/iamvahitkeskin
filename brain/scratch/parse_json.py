import re
import json

with open("/Users/vahitkeskin/.gemini/antigravity-ide/brain/a6058b40-f625-4d3e-88da-0525c10053d7/scratch/play_store.html", "r", encoding="utf-8") as f:
    html = f.read()

scripts = re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL)
script_text = scripts[21]

package_names = [
    'com.vahitkeskin.hatirlaticim',
    'com.vahitkeskin.blumesh',
    'com.vahitkeskin.equatix',
    'org.vahitkeskin.activenote',
    'com.vahitkeskin.iradix',
    'com.vahitkeskin.golgemeclisi',
    'com.vahitkeskin.letswapp',
    'com.vahitkeskin.yolculukdefterim',
    'com.vahitkeskin.fencecalculator'
]

for pkg in package_names:
    print(f"\n--- Searching for {pkg} ---")
    idx = script_text.find(pkg)
    if idx != -1:
        # Get a chunk of 4000 chars around the package name
        chunk = script_text[max(0, idx-2000):min(len(script_text), idx+2000)]
        
        # In Google Play script data, an icon image URL usually appears before or after the package name.
        # Let's search for the logo URL patterns
        urls = re.findall(r'https://play-lh\.googleusercontent\.com/[a-zA-Z0-9_\-=]+', chunk)
        # Filter for URLs that are likely to be app icons (usually they don't have =w416-h235-rw which is screenshot,
        # but rather =s64 or no width parameters, or we can just list them all)
        icon_candidates = [u for u in urls if '=w' not in u]
        
        # Let's search for the title string
        # A title is usually a string within quotes that matches standard text and appears close to the package name.
        # Let's extract any words in Turkish/English that are capitalized or have length > 3
        # Let's print the unique list of matches
        print("Icon Candidates:", list(set(icon_candidates))[:5])
        print("All play-lh URLs:", list(set(urls))[:8])
        
        # Let's find strings in quotes in the immediate surrounding (within 500 chars)
        close_chunk = script_text[max(0, idx-500):min(len(script_text), idx+500)]
        strings = re.findall(r'"([^"]{3,50})"', close_chunk)
        print("Surrounding Strings:", list(set(strings)))
