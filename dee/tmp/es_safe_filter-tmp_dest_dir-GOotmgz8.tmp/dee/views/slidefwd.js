import Ember from 'ember';

var slideFwdView =  Ember.View.extend({
	click: function(event) { // function moves viewport to next slide...
		var curSlide = Ember.$(event.target).closest(".intro-slide");
		var curSlideInx = curSlide.index() +1;
		var maxSlides = Ember.$(".intro-slide").length;
		if (curSlideInx === maxSlides){
			console.log("Last Slide reached.");
			return false;
		}
		else{		
			Ember.$(".clip").click(function(){
				Ember.$(".slide-roll").css({"top": "0" });
			});
			/*Ember.$("intro-slide").removeClass("active");
			Ember.$("intro-slide:eq(1)").addClass("active");*/
			var top = (curSlideInx) * -100;
			console.log(top);
			var val = top + "%";
			console.log(val);
			//Ember.$(".ghost-lines:eq(0)").addClass("wipe-up");
			Ember.$(".slide-roll").css({"top": val });
		}
		
		
	}
	
});

export default slideFwdView;
