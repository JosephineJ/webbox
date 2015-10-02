function range (start, end, step) {
	var rangenums = new Array();
	step = step || 1;
	var i = start;
	if (step > 0){
		while (i <= end){
			rangenums.push(i);
			i += step;
		}
	}
	else {
		while (i >= end){
			rangenums.push(i);
			i += step;
		}		
	}
	return rangenums;
}

function sum (rangearr) {
	var total = 0;
	for (var i = 0; i < rangearr.length; i++) {
		total += rangearr[i];
	}
	return total;
}
print("range array: " +  range(5,2,-1));
print("sum of range: ");
print(sum(range(1,10)));

