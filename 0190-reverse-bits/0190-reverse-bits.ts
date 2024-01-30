function reverseBits(n: number): number {
    return parseInt(n.toString(2).padStart(32, '0').split("").reverse().join(''),2);
};