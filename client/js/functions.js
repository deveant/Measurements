extendWeights = function(weights) {
	lastWeight = 0;
	$.each(weights, function(key, value){
		if (lastWeight == 0 || lastWeight == weights[key]['weight']){
			weights[key]['change'] = 'neutral';
		} else if (lastWeight > weights[key]['weight']) {
			weights[key]['change'] = 'negative';
		} else {
			weights[key]['change'] = 'positive';
		}
		weights[key]['difference'] = (lastWeight == 0 ? 0 :  (weights[key]['weight'] - lastWeight).toFixed(1));
		lastWeight = weights[key]['weight'];
	});
	weights.sort(function(a,b){
	  return new Date(b.createdAt) - new Date(a.createdAt);
	});
    return weights;
};

getSingleWeight = function(weights, order){
	var Record = Weights.find({}, {sort: {createdAt: order}}).fetch();
	return Record[0]['weight'];
};