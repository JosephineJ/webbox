var cname = "canvas";
var ccname = "caput";
var flowleft = " flow-left";
var flowright = " flow-right";


function arrive (){
	
	console.log("start...");
	var canvas =	document.getElementsByClassName(cname);
	var caput  =	document.getElementsByClassName(ccname);
	
	/*if (document.URL.indexOf("two") > -1 || document.URL.indexOf("one")  > -1 || document.URL.indexOf("index")  > -1 ) {*/
		
	
	canvas[0].className = canvas[0].className.replace(/\bflow-\w*\b/,'');
	caput[0].className =	caput[0].className.replace(/\bflow-\w*\b/,'');
	canvas[0].className += flowright;
	caput[0].className += flowright;
	/*}
	else{
		return;
	}*/
	
}

window.onload = arrive;


