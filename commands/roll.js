const { SlashCommandBuilder } = require('discord.js');
// const roll = require("../data/random/random-roll");
const postHandler = require("../data/random/postHandler");
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
		postHandler(preData, interaction);
	},
};
