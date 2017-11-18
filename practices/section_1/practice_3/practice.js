function collect_same_elements(collection_a, object_b) {
    var i = [];
    for(var t =0;t<collection_a.length;t++)
    {
        var tem = object_b.value;
        for(var j =0;j<tem.length;j++)
        {
            if(collection_a[t]===tem[j])
            {
                i.push(collection_a[t]);
                break;
            }
        }
    }
    return i;
}

module.exports = collect_same_elements;
