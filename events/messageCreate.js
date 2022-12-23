const { Events, EmbedBuilder } = require('discord.js');
require("dotenv").config();
historyData = {}

// Catches every message created.
module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		if (message.author.bot) return;
		client = message.client
        channel = await client.channels.cache.get(message.channelId)
		historyData[`${message.author.id}`] = message.channelId
		console.log(historyData)
		const embed = new EmbedBuilder()
			.setTitle(`Message Interaction!`)
			.setDescription(`User <@!${message.author.id}> sent a message in channel <#${historyData[`${message.author.id}`]}>`)
		channel.send({embeds: [embed]})

	},
};
