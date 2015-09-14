Meteor.subscribe("weights");
Template.home.helpers({
    weights: function () {
      return Weights.find({});
    },
    createdAtFormatted: function () {
      return moment(this.createdAt).format('DD-MM-YYYY');
    }
});

Template.home.events({
    "submit .new-weight": function (event) {
    	event.preventDefault();
     	var weight = event.target.weight.value;
     	Meteor.call("addWeight", weight);
     	event.target.weight.value = "";
    },
    "click #Test": function(event) {
    	event.preventDefault();
    	console.log("test");
    }
});