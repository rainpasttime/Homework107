'use strict';
var single_element = function(collection){
    var tem = [];
    var result = [];
    var i;
    var j;
    var tag;
    for(i =1;i<collection.length;i+=2)
    {
            tem.push(collection[i]);

    }

    for(i=0;i<tem.length;i++)
    {
        tag = true;
        for(j= 0;j<tem.length;j++)
        {
            if(i!==j && tem[i]===tem[j])
            {
                tag = false;
                break;
            }

        }
        if(tag ===true)
            result.push(tem[i]);
    }
    return result;
};
module.exports = single_element;
