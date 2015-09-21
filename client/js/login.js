var ERRORS_KEY = 'error';
var REG_KEY = 'registerOpen';

Session.setDefault(ERRORS_KEY, false);
Session.setDefault(REG_KEY, false);

Template.login.helpers({
	errorsExist: function() {
    	return Session.get(ERRORS_KEY);
	},
	userNotFound: function() {
		if (Session.get(ERRORS_KEY) == "User not found"){
			return "loginwarning";
		}
	},
	incorrectPassword: function() {
		if(Session.get(ERRORS_KEY) == "Incorrect password"){
			return "loginwarning";
		}
	},
	menuOpen: function() {
    	return Session.get(REG_KEY) && 'menu-open';
	},
});

Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
    	var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Accounts.createUser({
    		email: emailVar,
    		password: passwordVar
    	});
    },
    'click .icon-register': function() {
		event.preventDefault();
    	Session.set(REG_KEY, ! Session.get(REG_KEY));
	},
});

Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
    	var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        event.target.loginPassword.value = "";
        Meteor.loginWithPassword(emailVar, passwordVar, function(error) {
      		if (error) {
        		console.log(error.reason);
        		Session.set(ERRORS_KEY, error.reason);
        		console.log(Session.get(ERRORS_KEY));
      		} else {
      			Session.set(ERRORS_KEY, false);
      		}
    	});
    },
});