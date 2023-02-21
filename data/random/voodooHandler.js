const fs = require('node:fs');
const { exploAverage } = require("./exploAverage");
const { flatAverage } = require("./flatAverage");

module.exports = (preData, postData) => {
	const voodooData = JSON.parse(fs.readFileSync("./data/random/voodooData.txt", (err) => {
		if (err) throw err;
	}));
	if (voodooData[`${preData.discordId}`] === undefined) voodooData[`${preData.discordId}`] = [];
	voodooData[`${preData.discordId}`].push(postData.abRoll - exploAverage(Number(preData.abRoll.replace("d", ""))));
	voodooData[`${preData.discordId}`].push(postData.profRoll - exploAverage(Number(preData.profRoll.replace("d", ""))));
	if (preData.adv !== "") voodooData[`${preData.discordId}`].push(postData.adv - exploAverage(Number(preData.adv.replace("d", ""))));
	if (preData.dis !== "") voodooData[`${preData.discordId}`].push(postData.dis - flatAverage(Number(preData.dis.replace("d", ""))));
	fs.writeFile("./data/random/voodooData.txt", JSON.stringify(voodooData), (err) => {
		if (err) throw err;
	});
};
