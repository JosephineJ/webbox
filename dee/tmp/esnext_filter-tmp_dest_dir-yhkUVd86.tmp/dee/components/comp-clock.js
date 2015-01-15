import Ember from 'ember';

export default Ember.Component.extend({
	focalTime: new Date().toLocaleTimeString(),
    /*init: function() {
        // Update the time.
        this.updateTime();
    },
 
    updateTime: function() {
        var _this = this;
 
        // Update the time every second.
        Ember.run.later(function() {
            _this.set('focalTime', new Date().toLocaleTimeString());
            _this.updateTime();
        }, 1000);
    },*/
	

	
});
