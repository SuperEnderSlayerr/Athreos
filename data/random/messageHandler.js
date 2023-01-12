const rollHandler = require("./rollHandler");

module.exports = async (preData) => {
	// Grab some variables that change each time this is called.
	const client = require("../../index");
	const { historyData } = require("../../events/messageCreate");
	const postData = rollHandler(preData);
	const message = `Ability Score Roll ${preData["abRoll"]} **(${postData["abRoll"]})** + Proficiency Roll ${preData["profRoll"]} **(${postData["profRoll"]})** + Advantage Roll ${preData["adv"]} **(${postData["adv"]})** - Disadvantage Roll ${preData["dis"]} **(${postData["dis"]})** + bonus **(${preData["bonus"]})** = Total: **${postData.total}**`;
	const channelId = historyData[`${preData.discordId}`];
	await client.channels.cache.get(channelId).send(message);

	// Don't worry about this part, it's after the message has been posted so it doesn't slow anything down lol.
};
