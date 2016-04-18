(function(exports){
  exports.Vector = function(x, y){
    this.x = x;
    this.y = y;
  }
  exports.Vector.prototype.plus = function(other){
    return new Vector(other.x + this.x, other.y + y);
  }
})(this.grid = {});