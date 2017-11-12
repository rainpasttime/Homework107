'use strict';
var rank_asc = function(collection){
    for(var i =0;i<collection.length;i++)
    {
        var big = collection[i];
        var locate = i;
        for(var j = i+1;j<collection.length;j++)
        {
            if(collection[j]>big)
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
};
module.exports = rank_asc;
