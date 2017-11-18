'use strict';
/*
 *对象的创建方法：var result = new bject();
 * 通过toString();把数字转换成string
 * 然后用result[indexA]获取现在的对象里面是否有这个数字
 * 没有就赋值为1
 * 否则赋值为k+1
 */
function grouping_count(collection) {
    var result = new Object();
    for(var i =0;i<collection.length;i++)
    {
        var indexA = collection[i].toString();
        var k = result[indexA];
        if(k===undefined)
        {
            result[indexA] = 1;
        }
        else
        {
            result[indexA] = k+1;
        }
    }
    console.log(result);
    return result;
}

module.exports = grouping_count;
