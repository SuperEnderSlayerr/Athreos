const fs = require('node:fs');

module.exports = function init() {
	const data = JSON.parse(fs.readFileSync("./data/OOC-channel-data/OOC-channel-data.txt", (err) => {
		if (err) throw err;
	}));
	return data;
};