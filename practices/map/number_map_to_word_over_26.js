'use strict';
var number_map_to_word_over_26 = function(collection){
    var result = [];
    for(var l = 0;l<collection.length;l++)
    {
      var number = collection[l];
      var s = "a";
      var r = "a";
      if (number <= 26)
      {
          number = number-1;
          r = String.fromCharCode(s.charCodeAt(0) + number);
      }
      else
      {
          while(number>0)
          {
              if (number <= 26)
              {
                  number = number-1;
                  r += String.fromCharCode(s.charCodeAt(0) + number);
                  number = number/26;
              }
              else
              {
                  var t = Math.floor(number/26);
                  t = t-1;
                  r = String.fromCharCode(s.charCodeAt(0) + t);
                  number = number%26;
              }
          }
      }
      result.push(r);
    }
  return result;
};

module.exports = number_map_to_word_over_26;
