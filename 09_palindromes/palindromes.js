const palindromes = function (str) {
    let strArray = Array.from(str);
    
    for (let i = 0; i < strArray.length; i++){
        if (strArray[i] === ' ' || strArray[i] === ',' || strArray[i] === '.' || strArray[i] === '!'){
            strArray.splice(i, 1);
            i--;
        } else if (typeof strArray[i] === 'string'){
            strArray[i] = strArray[i].toLowerCase();
        }
    }

    for (let i = 0; i < strArray.length; i++){
        if (strArray[i] != strArray[strArray.length - 1 - i]){
            return false;
        }
    }
    return true;

    // Fast solution using array methods:
    // const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    // return processedString.split("").reverse().join("") == processedString;
}

// Do not edit below this line
module.exports = palindromes;
