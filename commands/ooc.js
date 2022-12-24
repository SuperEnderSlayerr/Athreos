const { SlashCommandBuilder } = require('discord.js');
const add = require('../data/OOC-add');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ooc')
		.setDescription('Adds this channel to the list of out of character chennels.'),
	async execute(interaction) {
		await interaction.deferReply();
		add(interaction.channelId);
		await interaction.editReply("Successfully added this channel to the list of OOC channels!");
	},
};
