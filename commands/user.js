const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
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
			`User <@!${message.author.id}> sent a message in channel <#${historyData[`${message.author.id}`]}>`,
			message.author.displayAvatarURL())
		channel.send({embeds: [embed]})
	},
};
