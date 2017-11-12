'use strict';

function compare_collections(collection_a, collection_b) {
  if(collection_a.length!==collection_b.length)
      return false;
  else
  {
      for(var i = 0;i<collection_a.length;i++)
      {
          if(collection_b.indexOf(collection_a[i])===-1)
              return flase;
      }
  }
  return true;
}

module.exports = compare_collections;


