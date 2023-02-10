const exploRoll = require("./explo-random-roll");
const flatRoll = require("./flat-random-roll");

module.exports = (preData) => {
	const postData = {};
	postData.abRollData = exploRoll(preData.abRoll.replace("d", ""));
	postData.profRollData = exploRoll(preData.profRoll.replace("d", ""));
	postData.advData = exploRoll(preData.adv.replace("d", ""));
	postData.disData = flatRoll(preData.dis.replace("d", ""));
	postData.total = postData.abRollData.total + postData.profRollData.total + postData.advData.total - postData.disData.total + Number(preData.bonus);
	return postData;
};
