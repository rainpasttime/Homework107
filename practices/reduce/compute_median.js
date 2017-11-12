'use strict';

function compute_median(collection) {
    var result = desc(collection);
    var end = result.length-1;
    var start = 0;
    for(;start<end;start++,end--)
    {
        if(start+1===end)
          return (result[start]+result[end])/2;
    }
    return result[start];
}

module.exports = compute_median;

//递增排序
function desc(collection)
{
    for(var i =0;i<collection.length;i++)
    {
        var big = collection[i];
        var locate = i;
        for(var j = i+1;j<collection.length;j++)
        {
            if(collection[j]<big)
            {
                locate = j;
                big = collection[j];
            }
        }
        if(locate!==i)
        {
            var tem = collection[i];
            collection[i] = big;
            collection[locate] = tem;
        }
    }
    return collection;
}

//获得元素互异的集合
function different(collection)
{
    var result = [];
    result[0] = collection[0];
    var j = 0;
    for(var i=1;i<collection.length;i++)
    {
        if(collection[j]!==collection[i])
            result[++j] = collection[i];
    }
    return result;
}


