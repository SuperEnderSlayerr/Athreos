const { Events } = require('discord.js');
const backup = require('../data/historyData-backup');
const historyDataInit = require("../data/historyData-init.js")
var historyData = historyDataInit()
console.log(historyData)

// Catches every message created.
module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		if (message.author.bot) return;
		client = message.client
        channel = await client.channels.cache.get(message.channelId)
		historyData[`${message.author.id}`] = message.channelId
		console.log(historyData)
		backup(historyData)
		channel.send(`${historyData[`${message.author.id}`]}, ${message.author.id}`)

	},
};
