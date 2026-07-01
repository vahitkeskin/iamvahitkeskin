import urllib.request
import re
import json
import time
import html

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

apps_data = []

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7'
}

for pkg in package_names:
    url = f"https://play.google.com/store/apps/details?id={pkg}"
    print(f"Fetching {pkg}...")
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            page_content = response.read().decode('utf-8')
            
            # Extract title tag and clean it
            title_match = re.search(r'<title[^>]*>(.*?)</title>', page_content, re.I)
            if title_match:
                title_raw = html.unescape(title_match.group(1).strip())
                # Remove " - Google Play'de Uygulamalar" or " - Apps on Google Play"
                title = re.split(r' - Google Play| - Apps', title_raw)[0].strip()
            else:
                title = pkg
            
            # Extract icon from og:image
            icon_match = re.search(r'<meta property="og:image" content="([^"]+)"', page_content)
            if icon_match:
                icon = icon_match.group(1).strip()
            else:
                icon = ""
            
            # Clean icon size parameters
            if icon:
                icon = re.sub(r'=[sSwWhH0-9\-rw]+$', '', icon)
                icon += "=s180-rw"
            
            # Extract description from og:description or description
            desc_match = re.search(r'<meta name="description" property="og:description" content="([^"]+)"', page_content)
            if not desc_match:
                desc_match = re.search(r'<meta itemprop="description" content="([^"]+)"', page_content)
            if not desc_match:
                desc_match = re.search(r'<meta name="description" content="([^"]+)"', page_content)
                
            desc = html.unescape(desc_match.group(1).strip()) if desc_match else ""

            print(f"Title: {title}")
            print(f"Icon: {icon}")
            print(f"Desc: {desc}")
            print("-" * 50)
            
            apps_data.append({
                "id": pkg,
                "title": title,
                "icon": icon,
                "description": desc,
                "url": url
            })
            
    except Exception as e:
        print(f"Failed to fetch {pkg}: {e}")
    time.sleep(1)

with open("/Users/vahitkeskin/Documents/GitHub/iamvahitkeskin/brain/scratch/scraped_apps.json", "w", encoding="utf-8") as f:
    json.dump(apps_data, f, indent=2, ensure_ascii=False)

print("\nFinished scraping details!")
