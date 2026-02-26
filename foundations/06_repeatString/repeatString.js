
const repeatString = function(string, num) {
    let final = ""
    if (num >=0) {
        for (let index = 0; index < num; index++) {
            final += string;
        }
    }

    else {
        final = "ERROR";
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;
