import Ember from 'ember';

var TeaseMeController = Ember.Controller.extend({
	genename: function() {

		return 'Gene Name: ' + this.get('geneName');

	}.property('geneName'),
	
	init: function() {
        this.typing();
    },
 
    typing: function() {
        var _this = this;
 
        Ember.run.later(function() {
            _this.set('genecode', 'model.nts');
            _this.typing();
        }, 2000);
    },
	
	
	genecode: new Date().toLocaleTimeString()
});

export default TeaseMeController;
