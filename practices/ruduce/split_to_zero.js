'use strict';

function spilt_to_zero(number, interval) {
  var result =[];
  var i = number;
  result.push(i);
  for(;number>0;)
  {
      number = number-interval;
      i = parseFloat(number).toFixed(1);
      number = parseFloat(i);
      result.push(number);
  }
  return result;
}

module.exports = spilt_to_zero;
