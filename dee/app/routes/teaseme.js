import Ember from 'ember';

var TeaseMeRoute =  Ember.Route.extend({
	
	model: function() {
		return this.store.find('teaseme');
	},
	tmpText: "Grmpf",
	text: "Mrpmpff"
});


export default TeaseMeRoute;
