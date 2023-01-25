const { EmbedBuilder } = require('discord.js');


function defembed(title,description,thumbnail,author,fields,image,interaction){
	console.log(interaction)
	if (interaction === undefined){
		icon = client.user.displayAvatarURL()
	}
	else if (interaction !== undefined){
		icon = interaction.client.user.displayAvatarURL()
	};
	const embed = new EmbedBuilder()
    	.setTitle(title)
    	.setDescription(description)
    	.setColor([11, 118, 70])
    	.setFooter({
    		text: `Athreos by Ender and Clara`,
    		iconURL: icon
    	})
    	.setTimestamp(new Date())
	if (image !== undefined){
		embed.setImage(image)
	};
	if (author !== undefined){
		embed.setAuthor({
			name: author[0],
			iconURL: author[1]
		})
	};
	if (thumbnail !== undefined){
		embed.setThumbnail(thumbnail)
	};
	if (fields !== undefined){
		embed.addFields(fields)
	}
    
}

module.exports = { defembed }