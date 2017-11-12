'use strict';

function collect_min_number(collection) {
    var small = collection[0];
    for(var i =1;i<collection.length;i++)
    {
        if(collection[i]<small)
            small = collection[i];
    }
    return small;
}

module.exports = collect_min_number;

