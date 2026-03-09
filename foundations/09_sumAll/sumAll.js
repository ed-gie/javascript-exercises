const sumAll = function(minVal, maxVal) {
    let total = 0;
    if ((Number.isInteger(minVal) && minVal > 0) && (Number.isInteger(maxVal) && maxVal > 0)) {
        // swaps the arguments if the higher number is the first argument
        if (minVal > maxVal) {
        let temp = minVal;
        minVal = maxVal;
        maxVal = temp;
        }

        for (let i = minVal; i <= maxVal; i++) {
            total += i;
        }
        return total;
    }
    else {
        return "ERROR";
    }
}

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(1, 4));