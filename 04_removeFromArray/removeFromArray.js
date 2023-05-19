const removeFromArray = function(Arr, ...num) {
    const newArr = [];
    for (i = 0; i < Arr.length; i++){
        if (!num.includes(Arr[i])) {
            newArr.push(Arr[i]);
        }
    }
    return newArr;
//esse metodo ficou diferente da solucao que usa forEach, mas passou em todos os testes

};

// Do not edit below this line
module.exports = removeFromArray;
