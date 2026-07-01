import urllib.request
import re

url = "https://play.google.com/store/apps/details?id=com.vahitkeskin.iradix"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7'
}
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        # Print the title tag
        title_match = re.search(r'<title[^>]*>(.*?)</title>', html, re.I)
        print("TITLE TAG:", title_match.group(1) if title_match else "NONE")
        
        # Print first 20 lines that contain "meta"
        meta_tags = re.findall(r'<meta[^>]+>', html)
        print("META TAGS:")
        for tag in meta_tags[:25]:
            if 'description' in tag or 'title' in tag or 'name' in tag or 'og:' in tag:
                print(tag)
except Exception as e:
    print("Error:", e)
