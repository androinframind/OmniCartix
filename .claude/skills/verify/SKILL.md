---
name: verify
description: Launch and drive the Omnicartix Vite site in a browser for runtime verification.
---

# Verify Omnicartix runtime behavior

Use this skill when product source changes need browser-observable verification.

## Launch

1. Start the Vite app from the repo root:

```bash
npm run dev -- --host 127.0.0.1 --port 5173
```

2. If Vite reports that `5173` is busy, use the `Local:` URL it prints, commonly `http://127.0.0.1:5174/`.

## Browser handle

On Windows, Microsoft Edge can be driven headlessly through the Chrome DevTools Protocol:

```bash
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" \
  --headless=new \
  --remote-debugging-port=9223 \
  --disable-gpu \
  --no-first-run \
  --no-default-browser-check \
  --user-data-dir="C:\\Users\\andro\\AppData\\Local\\Temp\\omni-edge-verify" \
  about:blank
```

Then use Node's built-in `fetch` and `WebSocket` to connect to `http://127.0.0.1:9223/json`, navigate to the Vite URL, inspect DOM/computed styles, and capture screenshots via `Page.captureScreenshot`.

## Useful checks for loader work

- Capture the initial state on every full page refresh: `.page-loader` exists, body has `loader-active`, 10 `.page-loader__panel` elements fill the viewport.
- Capture the mid-reveal state: panels have transform matrices with negative Y offsets and `will-change: transform`.
- Capture the complete state: `.page-loader` is gone, body class is empty, header/hero/CTA are visible.
- Reload the page and confirm the loader appears again, because the current desired behavior is to replay on every refresh/open.
