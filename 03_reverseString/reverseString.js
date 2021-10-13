const reverseString = function(str='') {
    let arr = str.split("");
    let arr_rev = [];

    for (let i = 1; i <= str.length; i++) {
        temp = arr.pop();
        arr_rev.push(temp);
    }

    return arr_rev.join('');
};

// Do not edit below this line
module.exports = reverseString;
