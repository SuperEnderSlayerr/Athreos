const { SlashCommandBuilder } = require('discord.js');
const messageHandler = require("../data/random/messageHandler");
const preData = {
	discordId: false,
	abName: "Body",
	abRoll: "d8",
	profName: "Blades",
	profRoll: "d10",
	bonus: "4",
	adv: "d6",
	dis: "d4",
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Roll a variable sided die'),
	async execute(interaction) {
		preData.discordId = interaction.user.id;
		interaction.reply("Rolling...");
		messageHandler(preData, interaction);
	},
};
