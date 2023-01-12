const roll = require("./random-roll");

module.exports = (preData) => {
	const postData = {};
	postData.abRoll = roll(preData.abRoll.replace("d", ""));
	postData.profRoll = roll(preData.profRoll.replace("d", ""));
	postData.adv = roll(preData.adv.replace("d", ""));
	postData.dis = roll(preData.dis.replace("d", ""));
	postData.total = postData.abRoll + postData.profRoll + postData.adv - postData.dis + Number(preData.bonus);
	return postData;
};
