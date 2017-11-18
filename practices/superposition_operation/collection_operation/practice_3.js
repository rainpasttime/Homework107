'use strict';

function hybrid_operation_to_uneven(collection) {
    var sum =0;
    var tem;
    for(var i =0;i<collection.length;i++)
    {
        if(collection[i]%2===1)
        {
            tem  =collection[i]*3+5;
            sum+=tem;
        }
    }
    return sum;
}

module.exports = hybrid_operation_to_uneven;

