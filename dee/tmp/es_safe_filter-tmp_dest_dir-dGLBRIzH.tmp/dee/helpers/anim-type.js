import Ember from 'ember';

export function animType(inpt) {
	
	var i = 0;
	var currentLetter ="";
	//var textPlacement = document.getElementById("typing-rod");
	console.log(inpt.length);
	
	function addChars(){
		if (i < inpt.length){
			currentLetter = inpt.substring(i,i+1);
			console.log(currentLetter);
			i++;
			//textPlacement.before(currentLetter);
			repeat();
			return currentLetter;
		}
		else{
				console.log("else statement");
				return false;
				
		}
	}
	
	function repeat(){
		window.setTimeout(addChars, 1000, true);
	}
	
	repeat();
	
	//console.log("function end");
	return false;
}

var animTypeHelper = Ember.Handlebars.makeBoundHelper(animType);

export default animTypeHelper;




 

