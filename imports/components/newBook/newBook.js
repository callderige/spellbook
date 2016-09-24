import { SpellBooks } from '/imports/collections/spellBooks.js';

Template.NewBook.onCreated(function() {
	Meteor.subscribe('spellbooks');
})

Template.NewBook.helpers({
	"userBooks": function() {
		let userId = Meteor.userId();
		return SpellBooks.find({userId: userId});
	}
});

Template.NewBook.events({
	"submit #createNewSpellbook": function(event, template) {
		event.preventDefault();

		let spellbookName = template.find("#spellbookName").value;
		let spellbookClass = template.find("#spellbookClass").value;
		let meteorUserId = Meteor.userId();
		let newSpellbook = { 
			userId: meteorUserId,
			spellbookName: spellbookName,
			spellbookClass: spellbookClass 
		}

		Meteor.call('addSpellbook', newSpellbook);
		Router.go('/');
	}
});
