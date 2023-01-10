const { SlashCommandBuilder } = require('discord.js');
const roll = require("../data/random/roll");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Roll a variable sided die')
		.addStringOption(option => option.setName('dsize')
			.setDescription(`The size of the die to roll, it doesn't have to be a real die size.`)),
	async execute(interaction) {
		const dSize = interaction.options.getString('dsize');
		if (dSize) return interaction.reply(`${roll(dSize)}`);
		return interaction.reply(`${roll(20)}`);
	},
};
