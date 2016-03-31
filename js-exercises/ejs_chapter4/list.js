/* arrayToList will create a nested set of objects (list) from an array as an input parameter*/

function arrayToList(arr){
  var list = null;
  for (var i = arr.length - 1; i >= 0; i -= 1){
    list = { value: arr[i], rest: list};
    //print(" list: " + JSON.stringify(list));
  }
  //return JSON.stringify(list);
  return list;
}
var myArray = [10,20,30,40];
print("Input Array to arrayToList function: " + myArray);
print("New List: " + JSON.stringify(arrayToList(myArray))); // turn object into string with command line print command

/* List to Array function turns nest set of objects back into an array */

function listToArray(list){
  var arr = [];
  for (var node = list; node; node = node.rest){
	arr.push(node.value);
	}
  return arr;
}
print("Reverse Back to Array: " + listToArray(arrayToList(myArray)));

/* prepend an input value in front of an input list */

function prepend(newval,list){
	newlist = {value: newval, rest: list};
	return newlist;
}
print("prepend to list: prepend(10, prepend(20, null)");
print(JSON.stringify(prepend(10, prepend(20, null))));

/* nth return element at nth position in a list or undefined if there is no such */
function nth(list, pos){
	var i = 0;
	for (var node = list; node; node = node.rest){
		if (i === pos){
			return node.value;
		}
		i += 1;
	}
	return undefined;
}
print("nth value of a list:");
print(nth(arrayToList([10,20,30]), 1));

