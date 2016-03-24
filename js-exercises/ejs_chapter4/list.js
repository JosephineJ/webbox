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
print("New List: " + arrayToList(myArray)); // turn object into string with command line print command

/* List to Array function turns nest set of objects back into an array */

function listToArray(list){
  var arr = [];
  for (var key in list){
    print("OUTER list value " + key +  ": " + list["value"]);
    arr.push(list["value"]);
    for (var prop in list["rest"]){
      print("inner list value "  +  ": " + list["rest"]["value"]);
      arr.push(list["rest"]["value"]);
    }
  }
  return arr;
}
print("Reverse Back to Array: " + listToArray(arrayToList(myArray)));

