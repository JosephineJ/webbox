import Ember from 'ember';

var TeaseMeController = Ember.ArrayController.extend({
	
	/*genename: function() {

		return 'Gene Name: ' + !Ember.isEmpty(this.get('model.geneName'));
		
	},
	
	init: function() {
        this.typing();
    },
 
    typing: function() {
        var _this = this;
 
        Ember.run.later(function() {
            _this.set('genecode', _this.geneName);
            _this.typing();
        }, 2000);
    },
	
	
	genecode: new Date().toLocaleTimeString()*/
});

export default TeaseMeController;
