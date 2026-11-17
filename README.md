# Keydex Landing Page & VIP Waitlist

The official high-converting marketing landing page and VIP waitlist system for **Keydex**, built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, and PWA support.

---

## 🚀 Quick Start (Local Development)

From the project root:
```bash
npm run dev --prefix landing
```
Open [http://localhost:3000](http://localhost:3000) to view the landing page.

To build for production:
```bash
npm run build --prefix landing
npm run start --prefix landing
```

---

## 📊 Connecting Your Google Sheet

To receive waitlist submissions directly into your own Google Sheet:

1. Open Google Sheets and create a blank sheet called **"Keydex VIP Waitlist"**.
2. Click **Extensions → Apps Script**.
3. Replace any code with this exact snippet:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Auto-setup column headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Email", "Platform", "Device/UserAgent", "Referrer"]);
    }
    
    sheet.appendRow([
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.email,
      data.platform || "ios",
      data.userAgent || "Web",
      data.referrer || "Direct"
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Deploy → New deployment**.
   * Select type: **Web app**
   * Execute as: **Me**
   * Who has access: **Anyone**
5. Copy the generated **Web App URL** (e.g. `https://script.google.com/macros/s/.../exec`).
6. In `landing/.env.local`, set:
   ```env
   GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/.../exec"
   ```

*Note: In development without a webhook URL, the API gracefully mocks success so you can test the UI and confetti animation freely.*

---

## 📱 PWA Features

* **Installable:** Configured with `app/manifest.ts` and Apple touch headers. Mobile visitors can tap *"Add to Home Screen"* on iOS Safari and Android Chrome.
* **100% Light Theme:** Clean porcelain white (`#FFFFFF` / `#F8FAFC`) with Keydex signature Electric Blue (`#007AFF`).
* **Inter Typography Tightening:** Implements our Universal Design System's optical tracking rules:
  * Display & H1: `-0.04em` (Heavily tightened)
  * Section Titles: `-0.03em` (`-0.7px`)
  * Body copy: `+0.015em` (`+0.2px` opened for legibility)
  * Navigation pills: `-0.01em` (`-0.1px`)
  * Prices & Counters: `tabular-nums`

