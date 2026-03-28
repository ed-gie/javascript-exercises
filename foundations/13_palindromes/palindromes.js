const palindromes = function (str) {
    const validString = str
        .split('')
        .filter(char => char.match(/[a-zA-Z0-9]/))//removes unwanted characters
        .join("")
        .toLowerCase();
    const reversed = validString
        .split("")
        .reverse()
        .join("");
    return validString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
