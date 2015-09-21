var MENU_KEY = 'menuOpen';
Session.setDefault(MENU_KEY, false);

Template.appLayout.helpers({
	menuOpen: function() {
    	return Session.get(MENU_KEY) && 'menu-open';
	},
});

Template.header.events({
	'click .icon-menu': function() {
		event.preventDefault();
    	Session.set(MENU_KEY, ! Session.get(MENU_KEY));
    },
});

Template.sidebar.events({
	'click .icon-weight': function() {
		event.preventDefault();
    	Session.set(MENU_KEY, ! Session.get(MENU_KEY));
	},
	'click .icon-logout': function() {
		event.preventDefault();
    	Meteor.logout();
	},
});