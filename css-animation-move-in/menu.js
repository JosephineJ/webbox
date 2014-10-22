
var menuname = "nav-page";
var conname = "caput";

var elements = document.getElementsByClassName(menuname);
var first = elements[0];
console.log(elements);
console.log(first);
var i = 0;
var corpus = document.getElementsByClassName("corpus");

var pagestep = new Object();
var slidestep = new Object();
var variableDynamic =  i;







function showText(e){
	
	var i = 0;
	var nodechecker = e.target.parentNode.parentNode;
	for (i; i < elements.length; i++){
		elements[i].className = elements[i].className.replace(/\btext-shown\b/,'');
	}
	console.log(elements);
	console.log(nodechecker);

	console.log(e.target);
	console.log(e);
	console.log("Menuname " + menuname);
	nodechecker.className = nodechecker.className + " text-shown";
	variableDynamic = nodechecker.className.replace(/\D+/g,'');
	pagestep['page' + variableDynamic] = 'nav-page'+variableDynamic;
	slidestep['page' + variableDynamic] = 'page'+variableDynamic;
	console.log("dynamic "+variableDynamic + " something....");
	console.log("nodechecker classname "+ nodechecker.className);
	console.log("pagestep "+ pagestep['page' + variableDynamic]);
	
	if ((' ' + nodechecker.className + ' ').indexOf(' ' + pagestep['page' + variableDynamic] + ' ') > -1){
		corpus[0].className = corpus[0].className.replace(/\bpage[0-9]\b/,'');
		corpus[0].className = corpus[0].className +" "+  slidestep['page' + variableDynamic];
		console.log(pagestep);
		console.log(variableDynamic);
		console.log(pagestep['page' + variableDynamic]);
	}
	console.log(nodechecker);
	console.log(e.target.className);
}


/*function showText(){
	
	var i = 0;
	var nodechecker = elements[i];
	for (i; i < elements.length; i++){
		elements[i].className = elements[i].className.replace(/\btext-shown\b/,'');
	}
	console.log(elements);
	console.log(nodechecker);

	console.log("Menuname " + menuname);
	nodechecker.className = nodechecker.className + " text-shown";
	variableDynamic = nodechecker.className.replace(/\D+/g,'');
	pagestep['page' + variableDynamic] = 'nav-page'+variableDynamic;
	slidestep['page' + variableDynamic] = 'page'+variableDynamic;
	console.log("dynamic "+variableDynamic + " something....");
	console.log("nodechecker classname "+ nodechecker.className);
	console.log("pagestep "+ pagestep['page' + variableDynamic]);
	
	if ((' ' + nodechecker.className + ' ').indexOf(' ' + pagestep['page' + variableDynamic] + ' ') > -1){
		corpus[0].className = corpus[0].className.replace(/\bpage[0-9]\b/,'');
		corpus[0].className = corpus[0].className +" "+  slidestep['page' + variableDynamic];
		console.log(pagestep);
		console.log(variableDynamic);
		console.log(pagestep['page' + variableDynamic]);
	}
	console.log(nodechecker);
	console.log(e.target.className);
}

/* function showText(e){
		
	console.log(elements);
	console.log("Menuname " + menuname);
	this.className = this.className + " text-shown";
	console.log(this.className);
}
* 
* */



for (i; i < elements.length; i++){
elements[i].addEventListener("click", showText, false);
}
