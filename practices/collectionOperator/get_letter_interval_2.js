'use strict';

function get_letter_interval_2(number_a, number_b) {
    var result = [];
    var s = 'a';
    var j;
    var k;
    var p;
    var tem;
    if(number_a<=number_b){
        for(number_a;number_a<=number_b;number_a++)
        {
            p = 'a';
            tem  = number_a;
            k = tem%26;
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
    //a>b的时候
    else
    {
        for(number_a;number_a>=number_b;number_a--)
        {
            p = 'a';
            tem  = number_a;
            k = tem%26;
            //k等于0说明取到z
            if(k===0)
            {
                j = Math.floor(tem/26)-1;
                //j等于0,说明只有z
                if(j===0)
                {
                    p = String.fromCharCode(s.charCodeAt(0) + 25);
                    result.push(p);
                }
                //否则说明有两个字母，最后一个取z
                else
                {
                    p = String.fromCharCode(s.charCodeAt(0) + j-1);
                    p+='z';
                    result.push(p);
                }

            }
            //取不到z的时候
            else
            {
                j = Math.floor(tem/26);
                //j等于0说明只有一个字母
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

module.exports = get_letter_interval_2;

