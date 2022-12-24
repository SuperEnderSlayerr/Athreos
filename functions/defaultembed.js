const { EmbedBuilder } = require('discord.js');


function defembed(title, description, thumbnail) {
	const embed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor('Red')
		.setFooter({
			text: `Athreos by Ender and Clara`,
			iconURL: client.user.displayAvatarURL(),
		})
		.setAuthor({
			name: 'Athreos',
			iconURL: client.user.displayAvatarURL(),
		})
		.setThumbnail(thumbnail)
		.setTimestamp(new Date());
	return embed;
}

module.exports = { defembed };