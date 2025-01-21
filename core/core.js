const {renderHTML} = require("./utils/htmlData.js")
const fetch = require("./utils/fetchFollowers.js")
module.exports = {
    renderHTML: async (variables) => {
        try {
            const html = await renderHTML(variables);
            return html;
        } catch (error) {
            console.error("There's an error creating HTML:", error.message);
            throw error;
        }
    },
     fetchFollowers: async () => {
        try {
            const followerCount = await fetch.fetchFollowerCount();
            return followerCount;
        } catch (error) {
            console.error("Follower Count Error:", error.message);
            return 0; 
        }
    }
}
