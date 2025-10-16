document.addEventListener("DOMContentLoaded", () => {
  const redirectBtn = document.getElementById("redirectBtn");
  const freediumCheck = document.getElementById("freediumCheck");

  redirectBtn.addEventListener("click", async () => {
    try {
      const tabs = await browser.tabs.query({ active: true, currentWindow: true });
      const tab = tabs[0];
      if (!tab || !tab.url) return;

      const useFreedium = freediumCheck.checked;
      const base = useFreedium
        ? "https://freedium.cfd/"
        : "https://live.dinesh049.shop/";

      const redirectUrl = `${base}${tab.url}`;

      await browser.tabs.create({ url: redirectUrl });

      window.close(); // close popup after opening tab
    } catch (err) {
      console.error("Redirect failed:", err);
    }
  });
});
