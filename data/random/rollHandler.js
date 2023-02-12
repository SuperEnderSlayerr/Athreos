const exploRoll = require("./explo-random-roll");
const flatRoll = require("./flat-random-roll");

module.exports = (preData) => {
	const postData = {};
	postData.abRollData = exploRoll(preData.abRoll.replace("d", ""));
	postData.abRollData.string = "Ability Die Roll";
	postData.profRollData = exploRoll(preData.profRoll.replace("d", ""));
	postData.profRollData.string = "Proficiency Die Roll";
	postData.advData = exploRoll(preData.adv.replace("d", ""));
	postData.advData.string = "Advantage Die Roll";
	postData.disData = flatRoll(preData.dis.replace("d", ""));
	postData.disData.string = "Disadvantage Die Roll";
	postData.total = postData.abRollData.total + postData.profRollData.total + postData.advData.total - postData.disData.total + Number(preData.bonus);
	return postData;
};
