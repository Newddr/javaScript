var isPolindrom=function(x)
{
    if(x>=0){
        return x==Number(String(x).split('').reverse().join(''))
    }
    else
     return false;
}