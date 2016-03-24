/* arrayToList will create a nested set of objects (list) from an array as an input parameter*/

function arrayToList(arr){
  var list = null;
  for (var i = arr.length - 1; i >= 0; i -= 1){
    list = { value: arr[i], rest: list};
    //print(" list: " + JSON.stringify(list));
  }
  return JSON.stringify(list);
}
var myArray = [10,20];
print("Input Array to arrayToList function: " + myArray);
print("New List: " + arrayToList(myArray)); // turn object into string with command line print command

