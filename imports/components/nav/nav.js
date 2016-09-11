Template.Nav.onCreated(function() {
	
});	

Template.Nav.helpers({
	
});

Template.Nav.events({
	"click .displaySearchModal": function(event, template) {
		document.getElementById("searchModal").style.display = "block";
	},
	"click #login": function(event, template) {
		document.getElementById("entryModal").style.display = "block";
	},
	"click #logout": function(event, template) {
		event.preventDefault();

		Meteor.logout(function(err) {
			if(err) {
				window.alert("An error occured while logging out.")
			}
		});
	}
});
