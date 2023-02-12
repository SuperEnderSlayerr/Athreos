const fs = require('node:fs');

module.exports = function init() {
	const data = JSON.parse(fs.readFileSync("./data/historyData/historyData-backup.txt", (err) => {
		if (err) throw err;
	}));
	return data;
};