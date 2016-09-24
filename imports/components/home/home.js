import { Meteor } from 'meteor/meteor';
import { SpellBooks } from '/imports/collections/spellBooks.js';

Template.Home.onCreated(function() {
	Meteor.subscribe('spellbooks');
})

Template.Home.helpers({
	"userBooks": function() {
		let userId = Meteor.userId();
		return SpellBooks.find({userId: userId});
	}
});

Template.Home.events({
	"click .delete": function(event, template) {
		Meteor.call('spellbooks.delete', this._id);
	}
	//The spell database will be empty unless you uncomment this along with "<button class="import">import</button>" in the home.html file.
	/*"click .import": function() {
		HTTP.call(  'GET', 'https://spreadsheets.google.com/feeds/list/1dlVIAzj5EuCdikbu2hglMDSd8WOZG73lC6yBtkKlak8/od6/public/values?alt=json', {}, function( error, response ) {
			let spells = response.data.feed;
			let key = []
			key = Object.keys(spells.entry[0]);
			let spellData = {};

		   	if(error) {
		      	console.log(error);
		   	} else {
		   		for(let k = 0; k < spells.entry.length; k++) {
		    		for (let i = 0; i < key.length; i++) {
						let spellInfo = spells.entry[k][key[i]]['$t'];
						let spellKey = key[i];

						if(key[i] == "title") {
							spellInfo = spellInfo.toLowerCase();
							spellInfo = spellInfo.replace(/\s/g, "");
						}

						spellData[spellKey] = spellInfo;

						let para = document.createElement("P");       
						let node = document.createTextNode(spellInfo);      
						para.appendChild(node);                                
						document.body.appendChild(para); 
					}
					Meteor.call('addSpell',spellData);
				}
		   	}
		});
	}*/
});