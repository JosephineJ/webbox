import Ember from 'ember';

var ghostTyperComponent = Ember.Component.extend({
	
	init: function() {
        this.typing(this.text);
    },
 
    typing: function(text) {
        var _this = this;
        var i = 0;
        var currentLetter ="";
        var len = text.length;
        //var rod = document.getElementById("typing-rod");
        //console.log(rod);
        console.log(text.length);
 
        Ember.run.later(function() {
			if (i < len){
					currentLetter = text.substring(i,i+1);
					console.log(currentLetter);
					i++;
					_this.set('tmpText', currentLetter);
					return currentLetter;
			}
			else{
					console.log("else statement");
					return false;				
			}
            _this.typing();
        }, 1000);
    }

 	
});

export default ghostTyperComponent;
