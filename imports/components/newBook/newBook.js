Template.NewBook.events({
	"submit #createNewSpellbook": function(event, template) {
		event.preventDefault();

		let spellbookName = template.find("#spellbookName").value;
		console.log(spellbookName);
		Router.go('/');
	}
})