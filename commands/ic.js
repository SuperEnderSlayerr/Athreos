const { SlashCommandBuilder } = require('discord.js');
const remove = require('../data/OOC-remove');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ic')
		.setDescription('Removes this channel from the list of out of character chennels.'),
	async execute(interaction) {
		await interaction.deferReply();
		const sucBool = remove(interaction.channelId);
		if (sucBool) await interaction.editReply("Successfully removed this channel from the list of out of character channels!");
		else await interaction.editReply("This channel was not in the list of out of character channels.");
	},
};
