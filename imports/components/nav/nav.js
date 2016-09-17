Template.Nav.onCreated(function() {
	
});	

Template.Nav.helpers({
	
});

Template.Nav.events({
	"click .displaySearchModal": function(event, template) {
		$('#searchModal').modal('show');
	},
	"click #login": function(event, template) {
		$('#entryModal').modal('show');
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
