const fs = require('node:fs');

module.exports = (preData, postData) => {
	const voodooData = JSON.parse(fs.readFileSync("./data/random/voodooData.txt", (err) => {
		if (err) throw err;
	}));
	if (voodooData[`${preData.discordId}`] === undefined) voodooData[`${preData.discordId}`] = [];
	voodooData[`${preData.discordId}`].push(postData.abRoll - ((Number(preData.abRoll.replace("d", "")) + 1) / 2));
	voodooData[`${preData.discordId}`].push(postData.profRoll - ((Number(preData.profRoll.replace("d", "")) + 1) / 2));
	if (preData.adv !== "") voodooData[`${preData.discordId}`].push(postData.adv - ((Number(preData.adv.replace("d", "")) + 1) / 2));
	if (preData.dis !== "") voodooData[`${preData.discordId}`].push(postData.dis - ((Number(preData.dis.replace("d", "")) + 1) / 2));
	fs.writeFile("./data/random/voodooData.txt", JSON.stringify(voodooData), (err) => {
		if (err) throw err;
	});
};
