Template.weightDifference.helpers({
	startWeight: function () {
    	return getSingleWeight(Weights, 1);
	},
	currentWeight: function () {
    	return getSingleWeight(Weights, -1);
	},
    totalDifference: function () {
		var totalDifference = (getSingleWeight(Weights, -1)-getSingleWeight(Weights, 1)).toFixed(1);
		return totalDifference > 0 ? "+" + totalDifference : totalDifference;
    }
});