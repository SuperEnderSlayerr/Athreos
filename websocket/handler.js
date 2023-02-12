const messageHandler = require("../data/random/messageHandler");

module.exports = (data) => {
	const strData = String(data);
	const useData = JSON.parse(strData);
	messageHandler(useData);
};