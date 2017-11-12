'use strict';
function map_to_even(collection){
  var result = [];
  for(var i =0;i<collection.length;i++)
  {
    var j = collection[i]*2;
    result.push(j);
  }
  return result;
}
module.exports = map_to_even;
