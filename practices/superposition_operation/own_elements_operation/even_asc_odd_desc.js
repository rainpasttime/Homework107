'use strict';
var even_asc_odd_desc = function(collection){
    var even = [];
    var odd = [];
    var result = [];
    var i;
    for(i=0;i<collection.length;i++)
    {
        if(collection[i]%2===0)
            even.push(collection[i]);
        else
            odd.push(collection[i]);
    }
    even = increase(even);
    odd = decrease(odd);
    for(i=0;i<even.length;i++)
        result.push(even[i]);
    for(i=0;i<odd.length;i++)
        result.push(odd[i]);
    return result;
};
module.exports = even_asc_odd_desc;

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

function decrease(collection)
{
    var big;
    var locate;
    for(var i = 0;i<collection.length;i++)
    {
        big = collection[i];
        for(var j =i+1;j<collection.length;j++)
        {
            if(collection[j]>big)
            {
                big=collection[j];
                locate = j;
            }
        }
        if(big!==collection[i])
        {
            collection[locate]=collection[i];
            collection[i] = big;
        }
    }
    return collection;
}
