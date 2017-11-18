'use strict';

function hybrid_operation_to_uneven(collection) {
    var tem;
    var result = [];
    for(var i =0;i<collection.length;i++)
    {
        if(collection[i]%2===1)
        {
            tem = collection[i]*3+2;
            result.push(tem);
        }
    }
    return result;
}

module.exports = hybrid_operation_to_uneven;

