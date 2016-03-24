/* reverseArray  takes an array as an argument  and produces a NEW array that has the same elements 
 * as the original array in inverse order*/
function reverseArray(arr) {
	arrInversed = new Array();
	for (var i = arr.length - 1; i >= 0; i -= 1) {
		arrInversed.push(arr[i]);
	}
	return arrInversed;
}
/* reverseArrayInPlace modifies the given array to reverse its elements without creating a new
 * array - it should do the same as Array.prototype.reverse method */
function reverseArrayInPlace (arr) {
	var initLen = Math.floor(arr.length / 2),
		removeIndex,
                valStore;
                print("Number of Iterations: " + initLen);
	for (var i = 0; i < initLen; i += 1) {
                valStore = arr[i]; // 1
		arr[i] = arr[arr.length - 1 - i]; // 5 to front
                arr[arr.length - 1 - i] = valStore;
                print("current array length: " + arr.length);
                print("Iteration " + i);
                print("Array: " + arr);
	}
	return arr;
}

print("array inversed: ");
print(reverseArray([1,8,3,4,5]));
print("array inversed in same array instance: ");
print(reverseArrayInPlace([1,2,3,4,5,6,7,8,9]));
