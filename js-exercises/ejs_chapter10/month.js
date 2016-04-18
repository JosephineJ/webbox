// Your code here.
(function(exports){

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  exports.name = function(num){ 
    return months[num];
  }

  exports.number = function(mon){
    return months.indexOf(mon);
  }

})(this.month = {});


print(month.name(2));
// → March
print(month.number("November"));
// → 10