import { Meteor } from 'meteor/meteor'

export const SpellBooks = new Mongo.Collection('spellBooks');

if(Meteor.isServer) {
	Meteor.publish('spellbooks', function() {
		return SpellBooks.find({});
	});
}