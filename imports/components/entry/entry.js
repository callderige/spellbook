Template.Entry.events({
	"click .close": function(event, template) {
		$('#entryModal').modal('hide');
	},
	"submit .registerUser": function(event,template) {
		event.preventDefault();
		let registerUser = template.find("#registerUser").value;
		let registerPassword = template.find("#registerPassword").value;
		let confirmPassword = template.find("#confirmPassword").value;

		if(registerPassword == confirmPassword) {
			Accounts.createUser({
				username: registerUser,
				password: registerPassword
			});

			Meteor.loginWithPassword(registerUser, registerPassword , function(err) { 
				if (err) {
					window.alert("Incorrect information, please try again");
				} else {
					template.find("#registerUser").value = "";
					template.find("#registerPassword").value = "";
					template.find("#confirmPassword").value = "";
					template.find("#user").value = "";
					template.find("#password").value = "";
					$('#entryModal').modal('hide');
				}
			});
		} else {
			window.alert("Passwords must match");
		}
	},
	"submit .loginUser": function(event, template) {
		event.preventDefault();
		let user = template.find("#user").value;
		let password = template.find("#password").value;

		Meteor.loginWithPassword(user, password , function(err) { 
			if (err) {
				window.alert("Incorrect information, please try again");
			} else {
				template.find("#registerUser").value = "";
				template.find("#registerPassword").value = "";
				template.find("#confirmPassword").value = "";
				template.find("#user").value = "";
				template.find("#password").value = "";
				$('#entryModal').modal('hide');
			}
		});
	}
})