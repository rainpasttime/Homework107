'use strict';

function get_union(collection_a, collection_b) {
  for(var i = 0;i<collection_b.length;i++)
  {
    var tag = 0;
    for(var j = 0;j<collection_a.length;j++)
    {
      if(collection_a[j]==collection_b[i])
        tag = 1;
    }
    if(tag==0)
      collection_a.push(collection_b[i]);
  }
  return collection_a;
}

module.exports = get_union;

