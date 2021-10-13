const repeatString = function(a='', num) {
    if (num < 0){
        return 'ERROR';
    } else {
        for (let i = 0; i <= 3; i++) {
            return a.repeat(num);
        }
    }
};

// Do not edit below this line
module.exports = repeatString;
