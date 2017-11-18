function create_updated_collection(collection_a, object_b) {
    var i=[];
    for(var t = 0;t<collection_a.length;t++)
    {
        var tag = -1;
        for(var k =0;k<i.length;k++)
        {
            if(collection_a[t]==i[k].key)
            {
                tag = k;
                break;
            }
        }
        if(tag==-1)
        {
            var tem={};
            tem.key= collection_a[t];
            tem.count = 1;
            i.push(tem);
        }
        else
        {
            i[tag].count =i[tag].count+1;
        }
    }
    var sub = object_b.value;
    for(var j =0;j<sub.length;j++)
    {
        var tem = sub[j];
        for(var w =0;w<i.length;w++)
        {
            var key = i[w].key;
            if(key==tem)
            {
                if(i[w].count>=3)
                {
                    var tt = i[w].count;
                    tt = Math.floor(tt/3);
                    i[w].count-=tt;
                }
                break;
            }
        }
    }
    return i;
}

module.exports = create_updated_collection;
