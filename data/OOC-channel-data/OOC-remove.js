const fs = require('node:fs');
let sucBool = null;

module.exports = function OOCRemove(oldChannel) {
	// Grabs the array.
	const channelData = JSON.parse(fs.readFileSync("./data/OOC-channel-data/OOC-channel-data.txt", (err) => {
		if (err) throw err;
	}));
	const index = channelData.indexOf(oldChannel);
	if (index > -1) {
		channelData.splice(index, 1);
		sucBool = true;
	} else {
		sucBool = false;
	}
	// Re-writes the array with the new channel added.
	fs.writeFile("./data/OOC-channel-data/OOC-channel-data.txt", JSON.stringify(channelData), (err) => {
		if (err) throw err;
	});
	return sucBool;

};