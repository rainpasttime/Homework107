'use strict';

function calculate_elements_sum(collection, element) {
  var locate;
  for(var i =0;i<collection.length;i++)
  {
      if(collection[i]===element)
      {
          locate = i;
      }
  }
  return locate;
}

module.exports = calculate_elements_sum;
