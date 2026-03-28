const fibonacci = function (num) {
    const sequence = [1, 1];
    if (Number(num) === 0) {
        return 0;
    }
    else if (Number(num) < 0) {
        return "OOPS";
    }
    for (let i = 0; i < (Number(num) - 2); i++) {
        sequence.push((sequence[sequence.length - 1] + sequence[sequence.length - 2]));
    }
    return sequence[sequence.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
