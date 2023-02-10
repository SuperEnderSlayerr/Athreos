// Picks a random number between 1 and dSize without explosions.
module.exports = (dSize) => {
	dSize = Number(dSize);
	const rollData = {};
	rollData.total = 1 + Math.floor(Math.random() * (dSize));
	rollData.explosions = 0;
	return rollData;
};
