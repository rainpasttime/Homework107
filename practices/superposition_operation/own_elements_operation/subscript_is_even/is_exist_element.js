'use strict';
var is_exist_element = function(collection,element){
    for(var i =0;i<collection.length;i+=2)
    {
        if(collection[i]===element)
            return true;
    }
    return false;
};
module.exports = is_exist_element;
