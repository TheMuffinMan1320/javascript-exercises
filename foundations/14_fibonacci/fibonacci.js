const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    } else if (num == 0) {
        return 0
    }
    num = Number(num)
    let count = 1
    let arr = [1, 1]
    while (count < num - 1) {
        arr.push(arr[count] + arr[count - 1])
        count++
    }
    return arr[count]
};

// Do not edit below this line
module.exports = fibonacci;
