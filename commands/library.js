const { SlashCommandBuilder } = require('discord.js');

//This is a placeholder for the time being until I can build this command properly

//module.exports = {
//	data: new SlashCommandBuilder()
//		.setName('avatar')
//		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
//		.addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
//	async execute(interaction) {
//		const user = interaction.options.getUser('target');
//		if (user) return interaction.reply(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
//		return interaction.reply(`Your avatar: ${interaction.user.displayAvatarURL()}`);
//	},
//};