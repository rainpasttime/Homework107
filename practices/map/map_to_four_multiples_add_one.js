'use strict';
var map_to_four_multiples_add_one = function(collection){
  var result = [];
  for(var i =0;i<collection.length;i++)
  {
    var j = collection[i]*4+1;
    result.push(j);
  }
  return result;
};

module.exports = map_to_four_multiples_add_one;
