'use strict';

function hybrid_operation(collection) {
    var sum = 0;
    var tem;
    for(var i =0;i<collection.length;i++)
    {
        tem = collection[i];
        tem = tem*3+2;
        sum+=tem;
    }
    return sum;
}

module.exports = hybrid_operation;

