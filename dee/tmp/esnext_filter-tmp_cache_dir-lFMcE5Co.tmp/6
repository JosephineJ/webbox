import Ember from 'ember';

var NewsController = Ember.ArrayController.extend({
	
	//model: 'news',
	
	"public": function() {
		return this.filterBy('isPublic', true).get('length');
		}.property('@each.isPublic'), 

	"private": function() {
		return this.filterBy('isPublic', false).get('length');
		}.property('@each.isPublic')

});

export default NewsController;
