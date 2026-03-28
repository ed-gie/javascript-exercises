const findTheOldest = function (arr) {
    return arr.reduce((oldest, obj) => {
        if (!obj.yearOfDeath) {
            obj.yearOfDeath = new Date().getFullYear();
        }
        if (!oldest.yearOfDeath) {
            oldest.yearOfDeath = new Date().getFullYear();
        }
        if ((oldest.yearOfDeath - oldest.yearOfBirth) > (obj.yearOfDeath - obj.yearOfBirth)) {
            return oldest;
        }
        else {
            return obj;
        }
    }, arr[0])
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1066,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

// Do not edit below this line
module.exports = findTheOldest;
