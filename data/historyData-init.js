const fs = require('node:fs');
  
module.exports = function init() {
    data = fs.readFileSync("./data/historyData-backup.txt", (err) => {
        if (err) throw err;
    })
    return JSON.parse(data)
}