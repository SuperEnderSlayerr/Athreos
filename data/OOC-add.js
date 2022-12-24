const fs = require('node:fs');

module.exports = function OOC(newChannel) {
	// Grabs the array.
	const channelData = JSON.parse(fs.readFileSync("./data/OOC-channel-data.txt", (err) => {
		if (err) throw err;
	}));
	channelData.push(newChannel);
	console.log(channelData);
	// Re-writes the array with the new channel added.
	fs.writeFile("./data/OOC-channel-data.txt", JSON.stringify(channelData), (err) => {
		if (err) throw err;
	});

};