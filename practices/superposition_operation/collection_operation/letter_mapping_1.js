'use strict';

function even_to_letter(collection) {
    var i;
    var result = [];
    var number;
    for(i = 0;i<collection.length;i++)
    {
        if(collection[i]%2===0)
        {
            number = collection[i];
            var s = "a";
            var p = "a";
            var tem  = number;
            var k = tem%26;
            var j;
            //当需要取到z的时候
            if(k===0)
            {
                j = Math.floor(tem/26)-1;
                //如果j等于0,说明只有一个字母
                if(j===0)
                {
                    p = 'z';
                    result.push(p);
                }
                //否则有两个字母
                else
                {
                    p = String.fromCharCode(s.charCodeAt(0) + j-1);
                    p+= String.fromCharCode(s.charCodeAt(0) + 25);
                    result.push(p);
                }

            }
            //当取不到z的时候
            else
            {
                j = Math.floor(tem/26);
                //j等于0的时候，说明只有一个字母
                if(j===0)
                {
                    tem = tem-1;
                    p = String.fromCharCode(s.charCodeAt(0) + tem);
                    result.push(p);
                }
                //否则有两个字母
                else
                {
                    j = j-1;
                    k = k-1;
                    p = String.fromCharCode(s.charCodeAt(0) + j);
                    p += String.fromCharCode(s.charCodeAt(0) + k);
                    result.push(p);
                }
            }
        }
    }
    return result;
}

module.exports = even_to_letter;
