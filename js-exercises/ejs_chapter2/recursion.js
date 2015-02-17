var isEven = function(num){

	if (num === 0){
		return true;
	}
	else if (num === 1){
		return false;
	}
	else{
		if (num > 0){
			num -= 2;
		}
		else{
			num += 2;
		}
		print("Next check for evenness: " + num);
		return isEven(num);
	}

}
print(isEven(50));
print(isEven(75));
print(isEven(-20));

