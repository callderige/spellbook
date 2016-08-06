Template.Entry.events({
	"click .modalOpacity": function(event, template) {
		document.getElementById("entryModal").style.display = "none";
	},
	"click .close": function(event, template) {
		document.getElementById("entryModal").style.display = "none";
	},
	"submit .registerUser": function(event,template) {
		event.preventDefault();
	},
	"submit .loginUser": function(event, template) {
		event.preventDefault();
	}
})