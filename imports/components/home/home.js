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

Template.Spellbook.onCreated(function() {
	this.editingBook = new ReactiveVar(false);
});

Template.Spellbook.helpers({
	"editable": function() {
		return Template.instance().editingBook.get();
	}
});

Template.Spellbook.events({
	"click #save": function(event, template) {
		let spellbookName = template.find('.spellbookNameValue').value;
		let spellbookClass = template.find('.spellbookClassValue').value;

		let checker = false;
		if(spellbookName.replace(/\s/g, "").length > 0 && spellbookClass.replace(/\s/g, "").length > 0) {
			checker = true;
		}

		if(checker == true) {
			Meteor.call('spellbooks.edit', this._id, spellbookName, spellbookClass);
			template.editingBook.set(false);
		} else {
			window.alert("a field is empty");
		}
	},
	"click #delete": function(event, template) {
		Meteor.call('spellbooks.delete', this._id);
	},
	"click #edit": function(event, template) {
		template.editingBook.set(true);
	}
});

