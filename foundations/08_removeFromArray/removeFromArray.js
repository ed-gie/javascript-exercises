const removeFromArray = function(arr, ...args) {
    return arr.filter((element) => !args.includes(element));
};

console.log(removeFromArray([1,2,3,4], 3))

// Do not edit below this line
module.exports = removeFromArray;

