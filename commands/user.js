const { SlashCommandBuilder } = require('discord.js');
const { defembed } = require('../functions/defaultembed');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		const embed = defembed(
			`Message Interaction!`,
			`User <@!${interaction.user.id}> sent a message in channel <#${interaction.channelId}>`,
			interaction.user.displayAvatarURL(),
			interaction);
		await interaction.reply({ embeds: [embed] });
	},
};
