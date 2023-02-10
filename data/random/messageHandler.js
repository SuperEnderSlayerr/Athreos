const rollHandler = require("./rollHandler");
const voodooHandler = require("./voodooHandler");

module.exports = async (preData) => {
	// Grab some variables that change each time this is called.
	const client = require("../../index");
	const { historyData } = require("../../events/messageCreate");
	const postData = rollHandler(preData);
	const message = `Ability Score Roll ${preData["abRoll"]} **(${postData.abRollData.total})** + Proficiency Roll ${preData.profRoll} **(${postData.profRollData.total})** + Advantage Roll ${preData.adv} **(${postData.advData.total})** - Disadvantage Roll ${preData.dis} **(${postData.disData.total})** + bonus **(${preData.bonus})** = Total: **${postData.total}**`;
	const channelId = historyData[`${preData.discordId}`];
	await client.channels.cache.get(channelId).send(message);
	for (const attribute in postData) {
		if (postData[`${attribute}`].total !== undefined) {
			if (postData[`${attribute}`].explosions !== 0) client.channels.cache.get(channelId).send(`${JSON.stringify(attribute)} die Exploded ${JSON.stringify(postData[`${attribute}`].explosions)} times!`);
		}
	}

	// Don't worry about this part, it's after the message has been posted so it doesn't slow anything down lol.
	voodooHandler(preData, postData);
};
