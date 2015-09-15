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
	  // Turn your strings into dates, and then subtract them
	  // to get a value that is either negative, positive, or zero.
	  return new Date(b.createdAt) - new Date(a.createdAt);
	});

    return weights;
};

sort_by = function(field, reverse, primer){

   var key = primer ? 
       function(x) {return primer(x[field])} : 
       function(x) {return x[field]};

   reverse = !reverse ? 1 : -1;

   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     } 
};