const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let sum = string;
    for (let i = 0; i < num - 1; i++)
    {
        sum = sum + string;
    }
    return sum;
};

// Do not edit below this line
module.exports = repeatString;
