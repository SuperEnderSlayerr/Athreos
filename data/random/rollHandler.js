const roll = require("./random-roll");

module.exports = (preData) => {
	const postData = {};
	postData.abRoll = roll(preData.abRoll.replace("d", ""));
	postData.profRoll = roll(preData.profRoll.replace("d", ""));
	postData.adv = roll(preData.adv.replace("d", ""));
	postData.dis = roll(preData.dis.replace("d", ""));
	postData.total = 0;
	for (const key in postData) {
		postData.total += parseInt(postData[key]);
	}
	return postData;
};
