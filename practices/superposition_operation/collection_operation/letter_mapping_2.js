'use strict';

function average_to_letter(collection) {
    var sum = 0;
    var number;
    var s = "a";
    var p = "a";
    var j;
    for(var i =0;i<collection.length;i++)
    {
        sum+=collection[i];
    }
    sum/=collection.length;
    number = Math.floor(sum);
    var tem  = number;
    var k = tem%26;
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
            p = String.fromCharCode(s.charCodeAt(0) + j);
            p+= String.fromCharCode(s.charCodeAt(0) + 25);
            return p;
        }

    }
    //当取不到z的时候
    else
    {
        j = Math.floor(tem/26);
        //j等于0的时候，说明只有一个字母
        if(j===0)
        {
            p = String.fromCharCode(s.charCodeAt(0) + tem);
            return p;
        }
        //否则有两个字母
        else
        {
            k = k-1;
            p = String.fromCharCode(s.charCodeAt(0) + j);
            p += String.fromCharCode(s.charCodeAt(0) + k);
            return p;
        }
    }
}

module.exports = average_to_letter;

