Template.Entry.events({
	"click .modalOpacity": function(event, template) {
		document.getElementById("entryModal").style.display = "none";
	},
	"click .close": function(event, template) {
		document.getElementById("entryModal").style.display = "none";
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
					let modal = document.getElementById('entry');
					document.getElementById("entryModal").style.display = "none";	
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
					let modal = document.getElementById('entry');
					document.getElementById("entryModal").style.display = "none";	
				}
			});
	}
})