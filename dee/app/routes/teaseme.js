import Ember from 'ember';

var TeaseMeRoute =  Ember.Route.extend({
	
	model: function() {
		return this.store.find('teaseme');
		//return ['red', 'yellow', 'blue'];
	}
	
	/*setupController: function(controller, genes) {
    controller.set('model', genes.get('nts'));
	}*/
});


export default TeaseMeRoute;
