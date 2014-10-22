function alertt(){
	alert("ha!");
}

function loadSidebar(){
	var sidebarc = document.getElementsByTagName('template').content;

    var a = sidebarc.getElementsByTagName('a');
    var alen = a.length;
    for (i = 0; i < alen; i++){
		a[i].textContent = i;
	}
    document.getElementsByClassName('.sidebar')[0].appendChild(
        document.importNode(sidebarc, true));
	
}

//document.onload = alertt();
document.onload = loadSidebar();
