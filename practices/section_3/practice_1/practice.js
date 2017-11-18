function create_updated_collection(collection_a, object_b) {
    var sub = object_b.value;
    for(var i =0;i<sub.length;i++)
    {
        var tem = sub[i];
        for(var j =0;j<collection_a.length;j++)
        {
            var key = collection_a[j].key;
            if(key==tem)
            {
                collection_a[j].count--;
                break;
            }
        }
    }
    return collection_a;
}

module.exports = create_updated_collection;
