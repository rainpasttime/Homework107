'use strict';
var map_to_three_multiples = function(collections){
  var result = [];
  for(var i =0;i<collections.length;i++)
  {
    var j = collections[i]*3;
    result.push(j);
  }
  return result;
};

module.exports = map_to_three_multiples;
