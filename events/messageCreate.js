const { Events } = require('discord.js');
const backup = require('../data/historyData-backup');
const historyDataInit = require("../data/historyData-init.js");
const historyData = historyDataInit();
const oocChannelInit = require("../data/OOC-channel-init.js");
const oocChannels = oocChannelInit();

// Catches every message created.
module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		if (message.author.bot) return;
		if (oocChannels.includes(message.channelId)) return;
		historyData[`${message.author.id}`] = message.channelId;
		backup(historyData);
	},
	varData: historyData,
};
