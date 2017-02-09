var wrapLog = function (callback, name) {
  return function(a, b){
    // console.log('Function name: ' + name);
    // console.log('Function parameters: ' + a + ' ' + b);
    // console.log('Function result: ' + callback(a, b));
    console.log(name + '(' + a + ',' + b + ')' + '=>' + callback(a, b));
  }
};


var sum = function (a,b) {
  return a + b; }
  ;

var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5
