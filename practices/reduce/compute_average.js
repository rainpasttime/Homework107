'use strict';

function compute_average(collection) {
  var sum = 0;
  for(var i =0;i<collection.length;i++)
  {
      sum+=collection[i];
  }
  sum/=collection.length;
  return sum;
}

module.exports = compute_average;

