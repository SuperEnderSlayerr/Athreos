// Picks a random number between 1 and dSize with explosions.
module.exports = (dSize) => {
	dSize = Number(dSize);
	const rollData = {};
	let loop = true;
	rollData.total = 0;
	rollData.explosions = 0;
	let currentRoll = 0;
	let i = 0;
	const explodeCap = 100;
	while (loop) {
		currentRoll = 1 + Math.floor(Math.random() * (dSize));
		rollData.total += currentRoll;
		if (currentRoll !== dSize) loop = false;
		i++;
		if (i >= explodeCap) loop = false;
		if (loop) rollData.explosions = i;
	}
	return rollData;
};
