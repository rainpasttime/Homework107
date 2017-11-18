function collect_same_elements(collection_a, object_b) {
    var i = [];
    var s = object_b.value;
    for(var t = 0;t<collection_a.length;t++)
    {
        var tk = collection_a[t].key;
        for(var j = 0;j<s.length;j++)
            if(tk===s[j])
            {
                i.push(tk);
                break;
            }
    }
    return i;
}

module.exports = collect_same_elements;
