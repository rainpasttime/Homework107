'use strict';

function double_to_one(collection) {
    var result = [];
    for(var i =0;i<collection.length;i++)
    {
        var tem = collection[i];
        if(typeof(tem.length)==='undefined')
        {
            result.push(collection[i]);
            continue;
        }
        for(var j = 0;j<tem.length;j++)
        {
            result.push(collection[i][j]);
        }
    }
    return result;
}

module.exports = double_to_one;
