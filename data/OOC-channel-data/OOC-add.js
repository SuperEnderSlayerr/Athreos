const fs = require('node:fs');

module.exports = function OOCAdd(newChannel) {
	// Grabs the array.
	const channelData = JSON.parse(fs.readFileSync("./data/OOC-channel-data/OOC-channel-data.txt", (err) => {
		if (err) throw err;
	}));
	console.log(channelData);
	if (channelData.includes(newChannel)) return true;
	channelData.push(newChannel);
	// Re-writes the array with the new channel added.
	fs.writeFile("./data/OOC-channel-data/OOC-channel-data.txt", JSON.stringify(channelData), (err) => {
		if (err) throw err;
	});
	return false;

};