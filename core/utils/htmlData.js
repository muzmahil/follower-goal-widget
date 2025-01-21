const fs = require('fs');
const path = require('path');
const config = require("../../config.json");
const htmlFilePath = path.join(__dirname, '../../html/app.html');

module.exports = {
    renderHTML:  (variables) =>{
        return new Promise((resolve, reject) => {
        const filePath = path.join(__dirname, '../../html/app.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject("Can't read HTML File:" + err);
                return;
            }
            let renderedHTML = data;
            for (const [key, value] of Object.entries(variables)) {
                const placeholder = new RegExp(`\\$\\{${key}\\}`, 'g'); 
                renderedHTML = renderedHTML.replace(placeholder, value);
            }

            resolve(renderedHTML);
        });
        })
    }
}
