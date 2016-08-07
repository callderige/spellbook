Template.Home.helpers({
	
});

Template.Home.events({
	"click .import": function() {
		HTTP.call( 'GET', 'https://spreadsheets.google.com/feeds/list/1dlVIAzj5EuCdikbu2hglMDSd8WOZG73lC6yBtkKlak8/od6/public/values?alt=json', {}, function( error, response ) {
			let spells = response.data.feed;
			let key = []
			key = Object.keys(spells.entry[0]);

		   	if (error) {
		      	console.log(error);
		   	} else {
		    	for (let i = 0; i < key.length; i++) {
					let info = key[i] + " : " + spells.entry[0][key[i]]['$t'];
					if(key[i] == "title") {
						info = info.toLowerCase();
						info = info.replace(/\s/g, "");
					}
					let para = document.createElement("P");       
					let node = document.createTextNode(info);      
					para.appendChild(node);                                
					document.body.appendChild(para); 
				}
		   	}
		});
	}
});