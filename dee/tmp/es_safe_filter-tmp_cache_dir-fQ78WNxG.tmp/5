import Ember from 'ember';

var ContactFormController = Ember.Controller.extend({
	contactButtonText: "Send",
	messageSent: false,
	actions: { 
		sendMessage: function(){
			//var fthis = this;
			var link ="";
			var spamcheck = encodeURI(document.getElementById('spamchecker').value);
			if (spamcheck === ""){
				link = "mailto:josephinej.fe.dev@gmail.com" +
				"?subject=" + encodeURI(document.getElementById('myname').value) + 
				" sent a message via Dee: " + encodeURI(document.getElementById('mysubject').value) +
				"&body=" + encodeURI(document.getElementById('mymessage').value);
			}
			else{
				link = "mailto:foo@bar.com";
			}
			window.location.href = link;
			this.set('messageSent',true);
			//alert("Sended message");
			//this.changeButtonText("Yeah!");
			this.send('changeButtonText','Generated e-mail in your mail client.');
		},
		changeButtonText: function(buttontext){
			this.set('contactButtonText',buttontext);
		}
	}
});
export default ContactFormController;
