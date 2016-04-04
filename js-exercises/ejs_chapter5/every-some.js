function every(array, predicate){
  function valCheck(a, b){
    return a && b;
  }
  return array.map(function(el){
    return predicate(el);
  }).reduce(valCheck);
}

function some(array, predicate){
  for (var i = 0; i < array.length; i += 1){
    if (predicate(array[i])){
      return true;
    }
  }
  return false;
}

print(every([NaN, NaN, NaN], isNaN));
// → true
print(every([NaN, NaN, 4], isNaN));
// → false
print(some([NaN, 3, 4], isNaN));
// → true
print(some([2, 3, 4], isNaN));
// → false



