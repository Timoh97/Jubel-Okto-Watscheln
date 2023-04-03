function reverse(x) {
    let isNegative = x < 0;
    let reversed = 0;
    
    x = Math.abs(x);
    
    while (x > 0) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10);
    }
    
    if (isNegative) {
        reversed = -reversed;
    }
    
    if (reversed < -(2 ** 31) || reversed > (2 ** 31) - 1) {
        return 0;
    }
    
    return reversed;
}
