(function(exports){
  var directions = {
    "n":  new Vector( 0, -1),
    "ne": new Vector( 1, -1),
    "e":  new Vector( 1,  0),
    "se": new Vector( 1,  1),
    "s":  new Vector( 0,  1),
    "sw": new Vector(-1,  1),
    "w":  new Vector(-1,  0),
    "nw": new Vector(-1, -1)
  };
  var directionNames = "n ne e se s sw w nw".split(" ");
  exports.Vector = function(x, y){
    this.x = x;
    this.y = y;
  }
  exports.Vector.prototype.plus = function(other){
    return new Vector(other.x + this.x, other.y + y);
  }
  exports.Grid = function(width, height){
    this.space = new Array(width * height);
    this.width = width;
    this.height = height;
  };
  exports.Grid.prototype.get = function(vector){
    return this.space[vector.x + this.width * vector.y];
  };
  exports.Grid.prototype.set = function(vector, value){
    this.space[vector.x + this.width * vector.y] = value;
  };
  exports.Grid.prototype.forEach = function(f, context){
    for (var y = 0; y < this.height; y += 1){
      for (var x = 0; x < this.width; x += 1){
        var value = this.space[x + y * this.width];
        if (value != null){
          f.call(context, value, new Vector(x, y));
        }
      }
    }
  };
})(this.grid = {});


(function(exports){
  exports.randomElement = function(array){
    return array[Math.floor(Math.random() * array.length)];
  };
  exports.elementFromChar = function(legend, ch){
    if (ch === " "){
      return null;
    }
    var element = new legend[ch]();
    element.originChar = ch;
    return element;
  };
  exports.charFromElement = function(element){
    if (element == null){
      return " ";
    }
    else {
      return element.originChar;
    }
  };
  exports.World = function(map, legend){
    var grid = new Grid(map[0].length, map.length);
    this.grid = grid;
    this.legend = legend;

    map.forEach(function(line, y){
      for (var x = 0; x < line.length; x += 1){
        grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
      }
    });
  };
  exports.World.prototype.toString = function(){
    var output = " ";
    for (var y = 0; y < this.grid.height; y += 1){
      for (var x = 0; x < this.grid.width; x += 1){
        var element = this.grid.get(new Vector(x, y));
        output += charFromElement(element);
      }
      output += "\n";
    }
    return output;
  };
  exports.Wall = function(){
    
  };
})(this.world = {});

(function(exports){

})(this.simple_ecosystem = {});

(function(exports){

})(this.ecosystem = {});