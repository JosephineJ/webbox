import Ember from 'ember';

var TeaseMeController = Ember.ArrayController.extend({
	
	init: function() {
		this._super();
        this.chooseLetter();
    },
    i: 0,
    seqData: "GTCTCTATAC",
    len: 8,
    currentLetter: "",   
    chooseLetter: function() {
		var tthis = this;
		if (tthis.i <= tthis.len){
			console.log(tthis.i);
			tthis.currentLetter = tthis.seqData.substring(tthis.i,tthis.i+1); 
			//code.innerText = code.textContent +=  currentLetter;
			console.log(tthis.currentLetter);
			tthis.i++;	
			Ember.run.later(function(){tthis.chooseLetter();}, 300);		
		}
		else{
			return false;
		}
    },
});

export default TeaseMeController;


