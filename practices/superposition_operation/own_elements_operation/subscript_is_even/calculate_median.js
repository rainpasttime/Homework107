'use strict';
var calculate_median = function(collection){
    var collectionA = [];
    for(var i =1;i<collection.length;i+=2)
    {
        collectionA.push(collection[i]);
    }
    collectionA = desc(collectionA);
    var start = 0;
    var end = collectionA.length-1;
    for(;start<end;start++,end--)
    {
        if(start+1===end)
            return (collectionA[start]+collectionA[end])/2;
    }
    return collectionA[start];
};
module.exports = calculate_median;

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
