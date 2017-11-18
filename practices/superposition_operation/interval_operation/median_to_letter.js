'use strict';

function median_to_letter(collection) {
    var result = desc(collection);
    var end = result.length-1;
    var start = 0;
    var locate;
    var p;
    var tem;
    var k;
    var j;
    var s = 'a';
    for(;start<end;start++,end--)
    {
        if(start+1===end)
            locate =  (result[start]+result[end])/2;
    }
    locate = result[start];
    locate = Math.floor(locate);


    p = 'a';
    tem  = locate;
    k = tem%26;
    //当需要取到z的时候
    if(k===0)
    {
        j = Math.floor(tem/26)-1;
        //如果j等于0,说明只有一个字母
        if(j===0)
        {
            p = 'z';
            return p;
        }
        //否则有两个字母
        else
        {
            p = String.fromCharCode(s.charCodeAt(0) + j-1);
            p+= String.fromCharCode(s.charCodeAt(0) + 25);
            return p;
        }

    }
    //当取不到z的时候
    else {
        j = Math.floor(tem / 26);
        //j等于0的时候，说明只有一个字母
        if (j === 0) {
            tem = tem - 1;
            p = String.fromCharCode(s.charCodeAt(0) + tem);
            return p;
        }
        //否则有两个字母
        else {
            j = j - 1;
            k = k - 1;
            p = String.fromCharCode(s.charCodeAt(0) + j);
            p += String.fromCharCode(s.charCodeAt(0) + k);
            return p;
        }
    }
}

module.exports = median_to_letter;

function desc(collection)
{
    for(var i =0;i<collection.length;i++)
    {
        var big = collection[i];
        var locate = i;
        for(var j = i+1;j<collection.length;j++)
        {
            if(collection[j]<big)
            {
                locate = j;
                big = collection[j];
            }
        }
        if(locate!==i)
        {
            var tem = collection[i];
            collection[i] = big;
            collection[locate] = tem;
        }
    }
    return collection;
}