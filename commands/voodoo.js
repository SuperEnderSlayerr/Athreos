const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('voodoo')
		.setDescription('Check your "luck", such a waste of time.'),
	async execute(interaction) {
		const voodooData = JSON.parse(fs.readFileSync("./data/random/voodooData.txt", (err) => {
			if (err) throw err;
		}));
		const userVoodoo = voodooData[`${interaction.user.id}`];
		let voodooTotal = 0;
		const voodooLength = userVoodoo.length;
		for (const index in userVoodoo) {
			voodooTotal += userVoodoo[index];
		}
		const voodooFinal = voodooTotal / voodooLength;
		interaction.reply(String(voodooFinal));
	},
};
