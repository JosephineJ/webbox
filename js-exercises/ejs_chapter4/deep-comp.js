function deepEqual(obj1,obj2){
	
	if (obj1 === obj2){
		print("valuecheck...");		
		return true;
	}

	if (typeof obj1 !== "object" || obj1 === null || typeof obj2 !== "object" || obj2 === null){
		print("typecheck...");
		return false;
	}
	
	var props1 = 0,
	props2 = 0;

	for (var prop in obj2){
		props1 += 1;
	}
	for (var prop in obj1){
		props2 += 1;
		if (!(prop in obj2) || !deepEqual(obj1[prop], obj2[prop])){
			print("check prop name in both objects");
			return false;
		}
	}
	print("lengthcheck...");
	return props1 === props2;	
 
}
print("Do deep comparison:");
var obj = {here: {is: "an"}, object: 2};
//print("deepEqual(obj,obj): " + deepEqual(obj,obj));
//print("deepEqual(obj, ...anotherobj): " + deepEqual(obj, {here: 1, object: 2}));
print("deepEqual(obj, a third obj):" + deepEqual(obj, {here: {is: "an"}, object: 2}));
//print("deepEqual(obj,3): " + deepEqual(obj,3));
