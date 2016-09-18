import { SpellDatabase } from '/imports/collections/spellDatabase.js';

Template.Search.onCreated(function() {

});	

Template.Search.helpers({
	'searchReturn': function() {
		let name = Session.get("spelltest");
		Meteor.subscribe('spells.search', name);
		return  SpellDatabase.findOne({title: name});
	}
});

Template.Search.events({
	"click .close": function(event, template) {
		$('#searchModal').modal('hide');
	},
});


