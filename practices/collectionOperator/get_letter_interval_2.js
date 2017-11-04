'use strict';

function get_letter_interval_2(number_a, number_b) {
  var letter = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var a1 = number_a/27;
  var b1 = number_b/27;
  var a2 = number_a%27;
  var b2 = number_b%27;
  var result = [];
  if(number_a<=number_b)
  {
    for(;a1<=b1;a1++)
    {
      if(a1>0)
        var t = letter[a1];
      else
        var t = "\0";
      if(a1<b1)
      {
        var k = a2;
        for(;k<=26;k++)
          result.push(t+letter[k]);
        a2 = 1;
      }
      else
      {
        k = 1;
        for(;k<=b2;k++)
          result.push(t+letter[k]);
      }
    }
  }
  else
  {
    for(;a1>=b1;a1--)
    {
      if(a1>0)
        var t = letter[a1];
      else
        var t;
      if(a1>b1)
      {
        var k ;
        for(k = a2;k>0;k--)
          result.push(t+letter[k]);
        a2 = 26;
      }
      else
      {
        for(var k =a2;k>=b2;k--)
          result.push(t+t[k]);
      }
    }
  }
  return result;
}

module.exports = get_letter_interval_2;

