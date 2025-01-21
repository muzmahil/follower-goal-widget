const puppeteer = require("puppeteer");
const express = require("express");
const core = require("./core/core.js")
const config = require("./config.json")
const app = express();
const PORT = config.port;

let currentFollowerCount = 0;
app.use(express.static("public"));

setInterval(async () => {
    currentFollowerCount = await core.fetchFollowers();
    console.log(`Updated Follower Count: ${currentFollowerCount}`);
}, config.refreshInterval); 


app.get("/", async (req, res) => {
    try {
        const percentage = Math.min((currentFollowerCount / config.followerGoal) * 100, 100);
        const html = await core.renderHTML({
            ...config,
            currentFollowerCount: currentFollowerCount,
            percentage: percentage.toFixed(2),
            refreshValue: config.refreshInterval + 5000
        });
        res.send(html);
    } catch (error) {
        res.status(500).send("Error: " + error.message);
    }
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}.`);
});
