import Ember from 'ember';

var slideFwdView =  Ember.View.extend({
	click: function(event) {
		var curSlide = Ember.$(event.target).closest(".intro-slide").index() +1;
		var maxSlides = Ember.$(".intro-slide").length;
		if (curSlide === maxSlides){
			console.log("Last Slide reached.");
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

export default slideFwdView;
