function count_same_elements(collection) {
    var i=[];
    for(var t = 0;t<collection.length;t++)
    {
        var tag = -1;
        for(var k =0;k<i.length;k++)
        {
            if(collection[t]===i[k].key)
            {
                tag = k;
                break;
            }
        }
        if(tag===-1)
        {
            var tem={};
            tem.key= collection[t];
            tem.count = 1;
            i.push(tem);
        }
        else
        {
            i[tag].count =i[tag].count+1;
        }
    }
    return i;
}

module.exports = count_same_elements;
