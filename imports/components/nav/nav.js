Template.Nav.events({
	"submit .navSearch": function(event,template) {
		event.preventDefault();
		let search = template.find("#spellname").value;
	},
	"click #login": function(event,template) {
		document.getElementById("entryModal").style.display = "block";
	}
})