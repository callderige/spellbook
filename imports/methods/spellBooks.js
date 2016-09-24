import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SpellBooks } from '/imports/collections/spellBooks.js';

Meteor.methods({
	'spellbooks.add': function(spellBookObject) {
		SpellBooks.insert(spellBookObject);
	},
	'spellbooks.delete': function(spellbookId) {
		SpellBooks.remove(spellbookId);
	},
	'spellbooks.edit': function(spellbookId) {
		
	}
});