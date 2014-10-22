var pagelink = "pagelink";
var cname = "canvas";
var ccname = "caput";
var gotonew = 	document.getElementsByClassName(pagelink);
var flowleft = " flow-left";
var i = 0;
var fpath = "diff/html/";
/*the transit */
var name = "";
	var testString = "";
	var testLen = 0;
	var baseUrlPlace = 0;
	var urlLength = 0;
	var testdiff = urlLength - baseUrlPlace;


function transit (e){
	
	var canvas =	document.getElementsByClassName(cname);
	var caput  =	document.getElementsByClassName(ccname);
	
	e.preventDefault();
	console.log(e);
	name = e.target.className.replace(/\bpagelink\b/,'');
	name = name.replace(/[ \t]+$/,'');
	
	canvas[0].className = canvas[0].className.replace(/\bflow-\w*\b/,'');
	caput[0].className =	caput[0].className.replace(/\bflow-\w*\b/,'');
		
	canvas[0].className += flowleft;
	caput[0].className += flowleft;
	console.log(canvas[0].className);
	console.log(caput[0].className);
	testString = "opentech";
	testLen = testString.length;
	baseUrlPlace = document.URL.indexOf(testString);
	urlLength = document.URL.length;
	testdiff = urlLength - baseUrlPlace;

    document.addEventListener("transitionend", redirrrect, false);
	
}

function redirrrect(){
	
	
	
	         console.log("redirect start....");
			if (document.URL.indexOf("index.htm") > -1 || testdiff <= testLen + 1){
				window.location.href = fpath + name + ".htm";
			}
			else{
			window.location.href = name + ".htm";  //replace this name with the respective page title
			}	
	
}

/*
 * var x = 5;

function incrementX(){
	
	x += 1;
	
}

function printX(){
	console.log(x);
}
*/

for (i; i < gotonew.length; i++){
gotonew[i].addEventListener("click", transit, false);
}





