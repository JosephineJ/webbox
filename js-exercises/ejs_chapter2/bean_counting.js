var countBs = function(str){
	
	var count = 0;
	for (var num = 0; num < str.length -1; num += 1){
		
		if (str.charAt(num) === "B"){
			count += 1;
		}
		
	}
	
	return count;

}
var countChar = function(str,letter){
	
	var count = 0;
	for (var num = 0; num < str.length -1; num += 1){
		
		if (str.charAt(num) === letter){
			count += 1;
		}
		
	}
	
	return count;

}
print(countChar("BBigtaBstic","t"));


