const messageHandler = require("../data/random/messageHandler");

module.exports = (data) => {
	const strData = String(data);
	const useData = JSON.parse(strData);
	if (useData.discordId === '') console.log("Discord ID is empty.");
	messageHandler(useData);
};