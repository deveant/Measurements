Meteor.publish('weights', function(){
	return Weights.find();
});