'use strict';
var even_group_calculate_average = function(collection){
    var result1 = [];
    var result2 = [];
    var result3 = [];
    var result = [];
    var sum =0;
    var i =0;
    for(var i =1;i<collection.length;i+=2)
    {
        if(collection[i]%2===0)
        {
            if(collection[i]<10)
                result1.push(collection[i]);
            else  if(collection[i]<100)
                result2.push(collection[i]);
            else
                result3.push(collection[i]);
        }
    }
    if(result1.length!==0)
    {
        sum  =0;
        for(i = 0;i<result1.length;i++)
        {
            sum+=result1[i];
        }
        sum = sum/result1.length;
        result.push(sum);
    }
    if(result2.length!==0)
    {
        sum =0;
        for(i = 0;i<result2.length;i++)
        {
            sum+=result2[i];
        }
        sum = sum/result2.length;
        result.push(sum);
    }
    if(result3.length!==0)
    {
        sum = 0;
        for(i = 0;i<result3.length;i++)
        {
            sum+=result3[i];
        }
        sum = sum/result3.length;
        result.push(sum);
    }
    if(result.length===0)
        result.push(0);
    return result;

};
module.exports = even_group_calculate_average;
