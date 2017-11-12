'use strict';

function collect_max_number(collection) {
    var big = collection[0];
    for(var i =1;i<collection.length;i++)
    {
        if(collection[i]>big)
            big = collection[i];
    }
    return big;
}

module.exports = collect_max_number;
