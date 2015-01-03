import Ember from 'ember';

var TeaseMeRoute =  Ember.Route.extend({
	
	model: function() {
		return this.store.find('teaseme');
	}
});


export default TeaseMeRoute;
