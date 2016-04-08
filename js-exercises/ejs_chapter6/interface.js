function ArraySeq(arr){
  this.seq = arr;
  this.pos = -1;
}
ArraySeq.prototype.next = function(){
  if (this.pos >= this.seq.length - 1){
    return false;
  }
  this.pos += 1;
  return true;
};
ArraySeq.prototype.current = function(){
  return this.seq[this.pos];
};
function RangeSeq(from, to){
  this.pos = from - 1;
  this.to = to;
};
RangeSeq.prototype.next = function(){
  if (this.pos >= this.to){
    return false;
  }
  this.pos += 1;
  return true;
};
RangeSeq.prototype.current = function(){
  return this.pos;
};
function logFive(seq){
  for (var i = 0; i < 5; i += 1){
    if (!seq.next()){
      break;
    }
    print(seq.current());
  }
}
/* Object.defineProperty(ArraySeq.prototype, "currentItem", {
  get: function(){
    return this.seq[this.counter];
  }
});
Object.defineProperty(ArraySeq.prototype, "increaseCount", {
  set: function(){
    this.counter = this.counter += 1;
  }
}); 
ArraySeq.prototype.seqLength = function(){
  return this.seq.length;
} */
var array = new ArraySeq([1,2,3]);

print("return value of new ArraySeq(): " + JSON.stringify(array));

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104