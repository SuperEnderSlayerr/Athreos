const fs = require('node:fs');
// This is the equation for the average of exploding dice.
// const q = dSize * (dSize + 1) / (2 * (dSize - 1));

function exploAverage(dSize) {
	return dSize * (dSize + 1) / (2 * (dSize - 1));
}

module.exports = (preData, postData) => {
	const voodooData = JSON.parse(fs.readFileSync("./data/random/voodooData.txt", (err) => {
		if (err) throw err;
	}));
	if (voodooData[`${preData.discordId}`] === undefined) voodooData[`${preData.discordId}`] = [];
	voodooData[`${preData.discordId}`].push(postData.abRoll - exploAverage(Number(preData.abRoll.replace("d", ""))));
	voodooData[`${preData.discordId}`].push(postData.profRoll - exploAverage(Number(preData.profRoll.replace("d", ""))));
	if (preData.adv !== "") voodooData[`${preData.discordId}`].push(postData.adv - exploAverage(Number(preData.adv.replace("d", ""))));
	if (preData.dis !== "") voodooData[`${preData.discordId}`].push(postData.dis - exploAverage(Number(preData.dis.replace("d", ""))));
	fs.writeFile("./data/random/voodooData.txt", JSON.stringify(voodooData), (err) => {
		if (err) throw err;
	});
};
