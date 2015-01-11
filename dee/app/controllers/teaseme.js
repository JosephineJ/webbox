import Ember from 'ember';

var TeaseMeController = Ember.ArrayController.extend({
	
	init: function() {
		this._super();
        this.chooseLetter();
    },
    seqData: "GTCTCTA",
    i: 0,
    /*seqData: function(){
		var seq = this.get('model.nts');
		return seq;
	},*/
    len:  6,
    currentLetter: "",  
    actions: { 
    chooseLetter: function() {
		var tthis = this;
		var seqData = tthis.seqData;
		if (tthis.i <= tthis.len){
			console.log(tthis.i);
			console.log(seqData);
			tthis.currentLetter = seqData.substring(tthis.i,tthis.i+1); 
			//code.innerText = code.textContent +=  currentLetter;
			console.log(tthis.currentLetter);
			tthis.i++;	
			Ember.run.later(function(){tthis.chooseLetter();}, 300);		
		}
		else{
			return false;
		}
		}
    },
});

export default TeaseMeController;


