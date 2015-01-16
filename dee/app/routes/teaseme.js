import Ember from 'ember';

var TeaseMeRoute =  Ember.Route.extend({
	
	/*model: function() {
		return this.store.find('teaseme');
	},*/
	model:  function(){
		return this.store.find("teaseme");
		
	},
	setupController: function(controller, model) {
		this._super(controller, model);
		//controller.set("nts", model.nts);
		//controller.set('model.nts',this.get('nts'));
	}
});


export default TeaseMeRoute;
