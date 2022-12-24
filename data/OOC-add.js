const fs = require('node:fs');

module.exports = function OOC(channelData) {
    fs.writeFile("./data/OOC-channel-data.txt", JSON.stringify(channelData), (err) => {
        if (err) throw err;
    })
}