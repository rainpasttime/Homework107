'use strict';

function get_letter_interval(number_a, number_b) {
  var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var result = [];
  if(number_a<=number_b)
  {
    for(var i =number_a-1;i<number_b;i++)
    {
      result.push(letter[i]);
    }
  }
  else
  {
    for(var i = number_a-1;i>=number_b-1;i--)
    {
      result.push(letter[i]);
    }
  }
  return result;
}

module.exports = get_letter_interval;
