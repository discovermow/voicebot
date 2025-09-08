import sys, json, urllib.request
try:
    with urllib.request.urlopen("http://127.0.0.1:8000/health", timeout=2) as r:
        ok = (r.status == 200 and json.loads(r.read().decode()).get("ok") is True)
        sys.exit(0 if ok else 1)
except Exception:
    sys.exit(1)
