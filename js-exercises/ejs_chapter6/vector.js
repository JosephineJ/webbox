function Vector(x,y){
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(vx){
  return {
    x: this.x + vx.x,
    y: this.y + vx.y
  }
}
Vector.prototype.minus = function(vx){
  return {
    x: this.x - vx.x,
    y: this.y - vx.y
  }
}
print(JSON.stringify(new Vector(1, 2).plus(new Vector(2, 3))));
// → Vector{x: 3, y: 5}
print(JSON.stringify(new Vector(1, 2).minus(new Vector(2, 3))));
// → Vector{x: -1, y: -1}
print(new Vector(3, 4).length);
// → 5