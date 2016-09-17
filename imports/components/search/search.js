import { SpellDatabase } from '/imports/collections/spellDatabase.js';

Template.Search.onCreated(function() {
	this.searchedSpell = new ReactiveVar(null);

});	

Template.Search.helpers({
	'searchReturn': function() {
		let name = Template.instance().searchedSpell.get();
		Meteor.subscribe('spells.search', name);
		return  SpellDatabase.findOne({title: name});
	}
});

Template.Search.events({
	"click .close": function(event, template) {
		$('#searchModal').modal('hide');
	},
	"submit .spellSearchForm": function(event, template) {
		event.preventDefault();
		let search = template.find(".spellName").value;
		search = search.toLowerCase();
		search = search.replace(/\s/g, "");
		template.searchedSpell.set(search);
	}
});


