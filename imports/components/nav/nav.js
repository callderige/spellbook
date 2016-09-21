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
		Router.go('/');
	},
	"submit .searchSpellForm": function(event, template) {
		event.preventDefault();
		let search = template.find(".searchedSpellTest").value;
		search = search.toLowerCase();
		search = search.replace(/\s/g, "");
		Session.set("spelltest", search);
		$('#searchModal').modal('show');
	}
});
