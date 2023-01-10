// Picks a random number between 1 and the dSize.
module.exports = function roll(dSize) {
	return 1 + Math.floor(Math.random() * (dSize));
};
