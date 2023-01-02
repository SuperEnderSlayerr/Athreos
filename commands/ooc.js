const { SlashCommandBuilder } = require('discord.js');
const add = require('../data/OOC-add');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ooc')
		.setDescription('Adds this channel to the list of out of character chennels.'),
	async execute(interaction) {
		await interaction.deferReply();
		const sucBool = add(interaction.channelId);
		if (sucBool) await interaction.editReply("This channel was already in the list of out of character channels.");
		else await interaction.editReply("Successfully added this channel to the list of out of character channels!\n\nRemember to reset the bot before this will take effect.");
	},
};
