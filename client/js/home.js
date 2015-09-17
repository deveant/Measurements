Meteor.subscribe("weights");

Template.home.helpers({
    weights: function () {
      return Weights.find({});
    },
    extendedWeights: function(){
      return extendWeights(Weights.find({}).fetch());
    },
});

Template.home.events({
    "submit .new-weight": function (event) {
    	event.preventDefault();
     	var weight = event.target.weight.value;
     	Meteor.call("addWeight", weight);
     	event.target.weight.value = "";
    },
});