function deepEqual(obj1,obj2){

	if (typeof obj1 === "object" && obj1 !== null || typeof obj2 === "object" && obj2 !== null){
		// do recursive shit
        print("do recursive shit");
		if (Object.keys(obj1).length !== Object.keys(obj2).length){
			return false;
			print("object length");
		}
		else {
			for (var prop in obj1){
				if (prop in obj2){
					print("check prop name in both objects");
					deepEqual(obj1[prop], obj2[prop]);
				}
				else {
					return false;				
				}
			}	
		}
	}
	else {
		("compare the values");
		return obj1 === obj2;
	} 
}
print("Do deep comparison:");
var obj = {here: {is: "an"}, object: 2};
print("deepEqual(obj,obj): " + deepEqual(obj,obj));
//print("deepEqual(obj,3): " + deepEqual(obj,3));
