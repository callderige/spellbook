import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SpellDatabase } from '/imports/collections/spellDatabase.js';

Meteor.methods({
	'addSpell': function(spellContent) {
		console.log(SpellDatabase.insert(spellContent));
		SpellDatabase.insert(spellContent);
	}
});
