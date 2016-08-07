Template.Nav.events({
	"submit .navSearch": function(event, template) {
		event.preventDefault();
		let search = template.find("#spellname").value;
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
})