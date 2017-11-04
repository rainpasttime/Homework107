'use strict';

function get_letter_interval_2(number_a, number_b) {
  var letter = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var a1 = number_a/26;
  var a2 = number_a%27;
  var b1 = number_b/26;
  var b2 = number_b%27;
  var result = [];
  if(a1<=b1)
  {
    for(;a1<=b1;a1++)
    {
      if(a2===26)
      {
        var tem = letter[a1-1];
        if(a1>=2)
          result.push(tem+'z');
        else
          result.push('z');
        a2 = 0;
      }
      else
      {
        var t = letter[a1];
        for(;a2<26;a2++)
        {
          result.push(t+letter[a2+1]);
        }
        a2 = 0;
      }
    }
  }
  else
  {
    for(;a1>b1;a1--)
    {
      if(a2===26)
      {
        var tem = letter[a1-1];
        if(a1>=2)
          result.push(tem+'z');
        else
          result.push('z');
        a2 = 0;
      }
      else
      {
        var t = letter[a1];
        for(;a2<26;a2++)
        {
          result.push(t+letter[a2+1]);
        }
        a2 = 0;
      }
    }
  }
}

console.log(get_letter_interval_2(26, 27));

