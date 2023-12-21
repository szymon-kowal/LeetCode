function myPow(x: number, n: number): number {
    if (n === 0) {
        return 1;
    }
    
    if (n < 0) {
        n = -n;
        x = 1/ x;
    }
    const halfPow = myPow(x, Math.floor(n / 2));
    
    if (n % 2 === 0) {
        return halfPow * halfPow;
    } else {
        return x * halfPow * halfPow;
    }
};