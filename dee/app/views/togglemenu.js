import Ember from 'ember';

export default Ember.View.extend({
	tagName: 'div',
	classNameBindings: ['clippedDown','headerview'],
	clippedDown: false,
	headerview: true,
	click: function(){
		this.set('clippedDown', !this.get('clippedDown'));
		Ember.$('.main-nav').slideToggle(320);
	},
	didInsertElement: function(){
		Ember.run.later(function(){
			Ember.$('.main-nav').slideToggle(320);
		}, 1200);
		//jQuery('.main-nav .menu').slideToggle(320);
	}
	
});
