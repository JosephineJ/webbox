var arrays = [[1,2,3],[4,5],[6]];
var res = arrays.reduce(function(a, b){
	return a.concat(b);
},[]);
print(res);
