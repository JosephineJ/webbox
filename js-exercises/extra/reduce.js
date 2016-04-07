function getMaxWidth(row){
  return row.reduce(function(max,item){
    /* print("max: " + JSON.stringify(max));
    print("item: " + JSON.stringify(item)); */
    print("item.width: " + item.width);
    print("calc max: " + Math.max(max, parseInt(item.width, 10)));
    return Math.max(max, parseInt(item.width, 10));
    //return Math.max(max, item); --> Example for primitive integer values
  }, 0);
}
var myRow = [],
    id = 1,
    obj = {},
    num;
    
for (var i = 0; i < 8; i += 1){
  obj.id = i;
  obj.width = Math.floor(Math.random() * 12);
  print(i + ". object pushed: " + JSON.stringify(obj));
  myRow.push(obj); 
 /*  num = Math.floor(Math.random() * 12);
  print("pushed num: " + num);
  myRow.push(num); */
}

var res = getMaxWidth(myRow);
print("Result: " + res);