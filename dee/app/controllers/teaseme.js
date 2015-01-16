import Ember from 'ember';

var TeaseMeController = Ember.ArrayController.extend({
	
	init: function() {
		this._super();
		this.growingCode = "C";
        this.chooseLetter();
    },
    _growingCode: "",
    i: 0,
    nnts:  function(){
		var model = "";
		this.get('content').forEach(function(item){
			model += item.get('nts');
		});
		return model;
	}.property('content'),
	len: function(){
		var slen = this.get('nnts');
			return slen.length;
	}.property('nnts'),
    currentLetter: "", 
    chooseLetter: function() {
		var tthis = this;
		var seqData = this.get('nnts');
		var lenn = this.get('len');
		var i = this.get('i');
		var currentLetter = "";
		var growingCode = this.get('growingCode');
		console.log("model obj: " + this.get('content'));
		console.log("sequence: " + seqData);
		if (i <= lenn){
			console.log(i);
			currentLetter = seqData.substring(i,i+1); 
			console.log(currentLetter);
			growingCode += currentLetter;
			console.log(growingCode);
			this.set('growingCode', growingCode);
			this.incrementProperty('i');
			//this.set('i', this.get('i')+1);
			Ember.run.later(function(){tthis.chooseLetter();}, 200);		
		}
		else{
			return false;
		}
	},
});

export default TeaseMeController;


