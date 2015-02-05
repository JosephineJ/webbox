import Ember from 'ember';

var ContactSendFormView = Ember.View.extend({
	init: function(){
		this._super();
		//this.set('contactButtonText','Defend');	
	},
	messageSent: false,
	click: function(e){
		//e.preventDefault();
		//alert("MyStyle!");
		this.set('messageSent',true);
		this.get('controller').send('sendMessage');
		
		e.stopImmediatePropagation();
	}
});

export default ContactSendFormView;
