import Ember from 'ember';

var TeaseMeRoute =  Ember.Route.extend({
	
	/*model: function() {
		return this.store.find('teaseme');
	}*/
	
	setupController: function(controller, gene) {
		controller.set('model', gene);
	}
  /*startWatchingTime: function(controller){
    var self = this;
    controller.set('currentTime', 'newTimeSet');
    Ember.run.later(function(){
      self.startWatchingTime(controller);
    }, 1000);
  }*/
});


export default TeaseMeRoute;
