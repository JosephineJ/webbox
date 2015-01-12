import Ember from 'ember';

var slideFwdView =  Ember.View.extend({
	
	click: function() {
		alert("ClickableView was clicked!");
	}
	
});

export default slideFwdView;
