const { EmbedBuilder } = require('discord.js');


function defembed(title,description,thumbnail,interaction){
	console.log(interaction)
	if (interaction === undefined){
		const embed = new EmbedBuilder()
    		.setTitle(title)
    		.setDescription(description)
    		.setColor('Red')
    		.setFooter({
    			text: `Athreos by Clara and Ender`,
    			iconURL: client.user.displayAvatarURL()
    		})
    		.setAuthor({
    			name: 'Athreos',
    			iconURL: client.user.displayAvatarURL()
    		})
    		.setThumbnail(thumbnail)
    		.setTimestamp(new Date())
    	return embed
	};
	if (interaction !== undefined){
    const embed = new EmbedBuilder()
    		.setTitle(title)
    		.setDescription(description)
    		.setColor('Red')
    		.setFooter({
    			text: `Athreos by Clara and Ender`,
    			iconURL: interaction.client.user.displayAvatarURL()
    		})
    		.setAuthor({
    			name: 'Athreos',
    			iconURL: interaction.client.user.displayAvatarURL()
    		})
    		.setThumbnail(thumbnail)
    		.setTimestamp(new Date())
    return embed
	};
}

module.exports = { defembed }