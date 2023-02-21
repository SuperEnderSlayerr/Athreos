// This is the equation for the average of exploding dice.
// const q = dSize * (dSize + 1) / (2 * (dSize - 1));
function exploAverage(dSize) {
	return dSize * (dSize + 1) / (2 * (dSize - 1));
}

exports.exploAverage = exploAverage;
