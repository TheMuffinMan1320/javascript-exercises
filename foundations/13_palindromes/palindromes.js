const palindromes = function (str) {
    const lets = str.split("")
    const preLetters = lets.filter(letter => letter != " " && letter != "." && letter != "," && letter != "!")
    const letters = preLetters.map(letter => letter.toLowerCase());
    let pos1 = 0
    let pos2 = letters.length - 1
    while (pos2 > pos1) {
        if (letters[pos1] != letters[pos2]) {
            return false
        }
        pos1++
        pos2--
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
