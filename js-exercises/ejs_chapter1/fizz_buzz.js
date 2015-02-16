for (var num = 1; num <= 100; num += 1){
	switch (0){
		case ((num % 5) + (num % 3)):
			print("FizzBuzz");
			break;
		case (num % 3):
			print("Fizz");
			break;
		case (num % 5):
			print("Buzz");
			break;
		default:
			print(num);		
			break;
	}	
}
for (var inum = 1;  inum <= 100; inum += 1){
	
	if ((inum % 5 + inum % 3) === 0){
		print("FrizzBrazz");
	}
	else if(inum % 3 === 0){
		print("Frizz");
	}
	else if(inum % 5 === 0){
		print("Brazz");		
	}
	else{		
		print(inum);			
	}
	
}

