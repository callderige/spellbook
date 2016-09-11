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
	"click .modalOpacity": function(event, template) {
		document.getElementById("searchModal").style.display = "none";
	},
	"click .close": function(event, template) {
		document.getElementById("searchModal").style.display = "none";
	},
	"click .btn-close": function(event, template) {
		document.getElementById("searchModal").style.display = "none";
	},
	"submit .spellSearchForm": function(event, template) {
		event.preventDefault();
		let search = template.find(".spellName").value;
		template.searchedSpell.set(search);
	}
});


