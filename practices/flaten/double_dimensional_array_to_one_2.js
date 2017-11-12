'use strict';

function double_to_one(collection) {
    var temresult = [];
    for(var i =0;i<collection.length;i++)
    {
        var tem = collection[i];
        if(typeof(tem.length)==='undefined')
        {
            temresult.push(collection[i]);
            continue;
        }
        for(var j = 0;j<tem.length;j++)
        {
            temresult.push(collection[i][j]);
        }
    }
    var result = [];
    for(var l = 0;l<temresult.length;l++)
    {
        if(result.indexOf(temresult[l])===-1)
            result.push(temresult[l]);
    }
    return result;
}

module.exports = double_to_one;
