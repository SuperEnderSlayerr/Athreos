// Picks a random number between 1 and dSize, now with explosions.
module.exports = (dSize) => {
	dSize = Number(dSize);
	let loop = true;
	let total = 0;
	let currentRoll = 0;
	let i = 0;
	const explodeCap = 100;
	while (loop) {
		currentRoll = 1 + Math.floor(Math.random() * (dSize));
		total += currentRoll;
		if (currentRoll !== dSize) loop = false;
		i++;
		if (i >= explodeCap) loop = false;
	}
	return total;
};
