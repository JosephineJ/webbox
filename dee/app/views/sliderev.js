import Ember from 'ember';

var slideRevView =  Ember.View.extend({
	
	click: function(event) {
		var curSlide = Ember.$(event.target).closest(".intro-slide").index() - 1;
		if (curSlide === -1){
			console.log("First Slide reached.");
			return false;
		}
		else{
			var top = (curSlide) * -100;
			console.log(top);
			var val = top + "%";
			console.log(val);
			Ember.$(".slide-roll").css({"top": val });
		}
	}
	
});
	

export default slideRevView ;
