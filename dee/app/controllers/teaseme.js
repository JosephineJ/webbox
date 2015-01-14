import Ember from 'ember';

var TeaseMeController = Ember.ArrayController.extend({
	
	init: function() {
		this._super();
        this.chooseLetter();
    },
    _growingCode: "",
   /* growingCode: Ember.computed(
		function(){
			//var modell = this.get('model.nts');
			return this.set('growingCode');
		}
    ), */
    i: 0,
    /*seqData: function(){
		var seq = this.get('model.nts');
		return seq;
	},*/
    nts: "GTATCTATCTATCTGTGCTCGATGATATATA", 
    /*len: function(){
		this._super();
		return 3;
		//return "GTATATCTCT";
	}.property('nts'),*/
	len: 7,
    currentLetter: "", 
    chooseLetter: function() {
		var tthis = this;
		//var seqData = tthis.seqData;
		var seqData = tthis.nts;
		if (tthis.i <= tthis.len){
			console.log(tthis.i);
			tthis.currentLetter = seqData.substring(tthis.i,tthis.i+1); 
			//code.innerText = code.textContent +=  currentLetter;
			console.log(tthis.currentLetter);
			tthis._growingCode += tthis.currentLetter;
			console.log(tthis._growingCode);
			this.set('growingCode',tthis._growingCode);
			//tthis.set('_growingCode',"A");
			tthis.i++;	
			Ember.run.later(function(){tthis.chooseLetter();}, 400);		
		}
		else{
			return false;
		}
	},
});

export default TeaseMeController;


