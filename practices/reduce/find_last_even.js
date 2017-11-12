'use strict';

function find_last_even(collection) {
    var locate;
    for(var i =0;i<collection.length;i++)
    {
        if(collection[i]%2===0)
        {
            locate = i;
        }
    }
    return collection[locate];
}

module.exports = find_last_even;
