const sumAll = function(a, b) {
    let sum = 0
    let lower = a < b ? a : b
    let larger = a > b ? a : b
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR"
    }
    for (let i = lower; i <= larger; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
