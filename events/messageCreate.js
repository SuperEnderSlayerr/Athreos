const { Events } = require('discord.js');
const backup = require('../data/historyData/historyData-backup');
const historyDataInit = require("../data/historyData/historyData-init.js");
const historyData = historyDataInit();
const oocChannelGet = require("../data/OOC-channel-data/OOC-channel-init.js");

// Catches every message created.
module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		if (message.author.bot) return;
		const oocChannels = oocChannelGet();
		if (oocChannels.includes(message.channelId)) return;
		historyData[`${message.author.id}`] = message.channelId;
		backup(historyData);
	},
	historyData: historyData,
};
