var countdownGenerator = function (x) {
  /* your code here */
  var countdown = x + 1;
  return function(){
    var result = '';
    countdown -= 1;
    if(countdown == 0){
      result = 'Blast Off';
    }
    if(countdown < 0){
      result = 'Rockets already gone, bub!';
    }
    if(countdown > 0){
      result = 'T-minus ' + countdown;
    }
    return console.log(result);
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
