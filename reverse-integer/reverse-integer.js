var reverse = function(x) {
    const isNegative = x < 0 ? true : false;
    x = Math.abs(x).toString().split('').reverse().join('').replace(/^0+/, '');
    x = isNegative ? '-'+x : x;
    if(Number(x) > Math.pow(2, 31) || Number(x) < -Math.pow(2, 31))
        return 0;
    return x;
};