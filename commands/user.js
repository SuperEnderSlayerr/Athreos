const { SlashCommandBuilder } = require('discord.js');
const { defembed } = require('../functions/defaultembed');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		const embed = defembed({
			title: `Message Interaction!`,
			description: `User <@!${interaction.user.id}> sent a message in channel <#${interaction.channelId}>`,
			thumbnail: interaction.user.displayAvatarURL(),
			author: {name: 'Athreos', iconURL: interaction.client.user.displayAvatarURL()},
			fields: ({name: "Creators!",value: "Ender and Clara"},{name: "Testing",value: "Yeet",inline: true},{name: "Yeet",value: "Value!",inline: true}),
			interaction: interaction})
		await interaction.reply({embeds: [embed]})
	},
};
