Weights = new Mongo.Collection("weights");

Meteor.methods({
	addWeight: function (weight) {
	    Weights.insert({
	      weight: weight,
	      createdAt: new Date()
	    });
	  },
});