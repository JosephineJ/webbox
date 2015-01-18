import Ember from 'ember';

var slideRevView =  Ember.View.extend({
	
	click: function() {
		Ember.$(".slide-roll").css({"top":"0%"});
	}
	
});

export default slideRevView ;
