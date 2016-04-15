function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  for (;;){
    try {
      print("Here we go: " + primitiveMultiply(a,b));
      break;
    } catch(e){
      print("Well, we tried..." + e);
    }
  }
}

print(reliableMultiply(8, 8));
// → 64