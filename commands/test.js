const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Testing my WebSocket connection.')
		.addStringOption(option => option.setName('message')
			.setDescription('The message to send to the server console.')
			.setRequired(true)),
	async execute(interaction) {
		const message = interaction.options.getString('message');
		interaction.reply(`Sending the following message to the server's console: ${message}`);
		await interaction.client.ws.send(message);
		console.log("Got through the sending.");
	},
};
