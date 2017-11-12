'use strict';

function compute_chain_median(collection) {
  var number =[];
  var i;
  var j;
  var tem;
  for(i=0;i<collection.length;i++)
  {
      var n = collection[i];
      while(i+1<collection.length &&collection[i+1]!=='-')
      {
          i++;
          n+=collection[i];
      }
      tem = change(n);
      number.push(tem);
      i+=2;
  }
  //排序
    for(i =0;i<number.length;i++)
    {
        var big = number[i];
        var locate = i;
        for(j = i+1;j<number.length;j++)
        {
            if(number[j]>big)
            {
                locate = j;
                big = number[j];
            }
        }
        if(locate!==i)
        {
            tem = number[i];
            number[i] = big;
            number[locate] = tem;
        }
    }
  //计算中值
  var w =0;
  var k=number.length-1;
  for(;w<k;w++,k--)
  {
      if(w+1===k)
          return (number[w]+number[k])/2;
  }
  return number[w+1];

}

function change(n)
{
    var i;
    var number=0;
    for(var k =0;k<n.length;k++)
    {
        i = 0;
        while(i!=n[k])
        {
            i++;
        }
        number = number*10+i
    }
    return number;
}

module.exports = compute_chain_median;
