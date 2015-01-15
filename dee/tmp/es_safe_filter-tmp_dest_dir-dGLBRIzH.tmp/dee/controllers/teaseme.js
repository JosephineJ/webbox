import Ember from 'ember';

var TeaseMeController = Ember.ArrayController.extend({
	
	init: function() {
		this._super();
        this.chooseLetter();
    },
    _growingCode: "",
    i: 0,
    //nnts: "GTATCTATCTATCTGTGCTCGATGATATATA", 
    nnts:  function(){
		var model =  this.get('model.nts');
		return model;
	}.property('model.nts'),
	len: function(){
		var slen = this.set('nnts');
			return slen.length;
	}.property('nnts'),
    currentLetter: "", 
    chooseLetter: function() {
		var tthis = this;
		console.log(this.get('model'));
		console.log("sequence" + tthis.nnts);
		var seqData = this.get('nnts');
		var lenn = this.get('len');
		if (tthis.i <= lenn){
			console.log(tthis.i);
			tthis.currentLetter = seqData.substring(tthis.i,tthis.i+1); 
			console.log(tthis.currentLetter);
			tthis._growingCode += tthis.currentLetter;
			console.log(tthis._growingCode);
			this.set('growingCode',tthis._growingCode);
			tthis.i++;	
			Ember.run.later(function(){tthis.chooseLetter();}, 200);		
		}
		else{
			return false;
		}
	},
});

export default TeaseMeController;


