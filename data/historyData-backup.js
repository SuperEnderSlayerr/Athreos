const fs = require('node:fs');

module.exports = function backup(currentData) {
	fs.writeFile("./data/historyData-backup.txt", JSON.stringify(currentData), (err) => {
		if (err) throw err;
	});
};