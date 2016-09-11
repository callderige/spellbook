import { Meteor } from 'meteor/meteor'

export const SpellDatabase = new Mongo.Collection('spellDatabase');

if(Meteor.isServer) {
	Meteor.publish('spells.search', function(name) {
		return SpellDatabase.find({title:name});
	});
}