const sumAll = function(a, b) {

    if (a < 0 || !Number.isInteger(a) || !Number.isInteger(b) || b < 0) {
        return 'ERROR';
    }

    if (typeof a === 'string' || typeof b === 'string') {
        return 'ERROR'
    }

    let sum = 0
    if (a < b) {
        for (a; a <= b; a++) {
            sum += a;
        }
    } else if (a > b){
        for (b; b <= a; b++) {
            sum += b;
        }
    } 
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
