const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ooc')
		.setDescription('Adds this channel to the list of out of character chennels.'),
	async execute(interaction) {
		await interaction.deferReply()
        await wait(4000)
        await interaction.editReply("That should have been slow.")
        await interaction.followUp("And this quickly after.")
	},
};
