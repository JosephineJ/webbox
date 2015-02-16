var str = "";
var size = 11;
for (var row = 0; row < size; row += 1){
	for (var col = 0; col < size; col += 1){
		if ((row % 2) + (col % 2) === 0 || ((row % 2) !== 0 && (col % 2) !== 0)){
			str += "#";
		}
		else{
			str += " ";
		}
	}

	str += "\n";
}
print(str);

