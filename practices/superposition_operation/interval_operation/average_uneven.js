'use strict';

function average_uneven(collection) {
    var sum = 0;
    var count = 0;
    for(var i =0;i<collection.length;i++)
    {
        if(collection[i]%2===1)
        {
            sum+=collection[i];
            count+=1;
        }
    }
    sum = sum/count;
    return sum;
}

module.exports = average_uneven;
