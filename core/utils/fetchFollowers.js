const { kickUsername } = require("../../config.json");
const puppeteer = require("puppeteer");

module.exports = {
    fetchFollowerCount: async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        await page.setUserAgent(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        );

        try {
            await page.goto(`https://kick.com/${kickUsername}/about`, { waitUntil: "domcontentloaded" });

            // Dinamik içerik için bekleme
          

            const followerCount = await page.evaluate(() => {
                const element = document.querySelector(
                    '.flex.max-w-full.shrink-0.flex-wrap.items-center.gap-x-3 span.text-primary span[title]'
                );
                return element ? parseInt(element.getAttribute("title"), 10) : 0;
            });

            await browser.close();
            return followerCount;
        } catch (error) {
            console.error("Hata:", error.message);
            await browser.close();
            return 0;
        }
    }
};