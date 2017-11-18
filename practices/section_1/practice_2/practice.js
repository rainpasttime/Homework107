function collect_same_elements(collection_a, collection_b) {
    var i = [];
    for(var t =0;t<collection_a.length;t++) {
        for(var j=0;j<collection_b[0].length;j++)
        {
            if(collection_a[t]===collection_b[0][j])
            {
                i.push(collection_a[t]);
                break;
            }
        }
    }
    return i;
}

module.exports = collect_same_elements;
