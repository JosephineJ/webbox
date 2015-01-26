import Ember from 'ember';

var typerView =  Ember.View.extend({
	
	click: function() {
		console.log("ClickableView was clicked!");
		this.get('controller').send('chooseLetter');
	},
	name: "Bob"
	
});

export default typerView;
