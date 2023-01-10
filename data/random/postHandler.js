const rollHandler = require("./rollHandler");

module.exports = async (preData, interaction) => {
	const postData = rollHandler(preData);
	console.log(preData);
	console.log(postData);
	await interaction.reply(`Ability Score Roll ${preData["abRoll"]} **(${postData["abRoll"]})** + Proficiency Roll ${preData["profRoll"]} **(${postData["profRoll"]})** + Advantage Roll ${preData["adv"]} **(${postData["adv"]})** - Disadvantage Roll ${preData["dis"]} **(${postData["dis"]})** + Modifier **(${preData["bonus"]})** = Total: **${postData.total}**`);
};
