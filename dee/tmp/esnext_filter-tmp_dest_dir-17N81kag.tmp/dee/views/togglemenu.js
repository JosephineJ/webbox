import Ember from 'ember';

export default Ember.View.extend({
	tagName: 'div',
	classNameBindings: ['clippedDown'],
	clippedDown: false,
	click: function() {
		this.set('clippedDown', !this.get('clippedDown'));
		jQuery('.main-nav').slideToggle(320);
	},
	didInsertElement: function() {
		Ember.run.later(function() {
			jQuery('.main-nav').slideToggle(320);
		}, 1200);
		//jQuery('.main-nav .menu').slideToggle(320);
	}
	
});
