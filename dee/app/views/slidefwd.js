import Ember from 'ember';

var slideFwdView =  Ember.View.extend({
	/*current: function(){
		var currentPos = Ember.$(".slide-roll").css("top");
		console.log(currentPos);
		return currentPos;		
	}, */
	i: 1,
	click: function() {
//Ember.$(".slide-roll").css({"top":"-100%"});
		//alert("ClickableView was clicked!");
		var current = Ember.$(".slide-roll").css("top");
		if (current == "0px"){
			current = "-100%";
		}
		else{
			current = Ember.$(".slide-roll").style.top;
		}
		//var current = -100;
		var i = this.get('i');
		console.log(current + ' ' + i);
		var top = i * parseInt(current);
		//Ember.$(".slide-roll").css({"top": function(current) { return (parseInt(current) - 100 + "%" || 100 + "%"); }});
		Ember.$(".slide-roll").css({"top": top + "%" });
		this.incrementProperty('i');
		console.log(top);
	}
	
});

export default slideFwdView;
