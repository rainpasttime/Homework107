'use strict';
function rank_by_two_large_one_small(collection){
  var result=[];
  result = increase(collection);
  for(var i =0;i<result.length;i+=3)
  {
      var j;
      j = i+2;
      if(j<result.length)
      {
          var tem = result[i];
          result[i] = result[i+1];
          result[i+1]=result[i+2];
          result[i+2]=tem;
      }
  }
  return result;
}
module.exports = rank_by_two_large_one_small;

function increase(collection)
{
    var small;
    var locate;
    for(var i = 0;i<collection.length;i++)
    {
        small = collection[i];
        for(var j =i+1;j<collection.length;j++)
        {
            if(collection[j]<small)
            {
                small=collection[j];
                locate = j;
            }
        }
        if(small!==collection[i])
        {
            collection[locate]=collection[i];
            collection[i] = small;
        }
    }
    return collection;
}
