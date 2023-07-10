const fibonacci = function(member) {
    let pos = [0, 1, 1];

    if (member < 0){
        return "OOPS";
    }
    for (let i = 0; i <= member - 2; i++){
        pos[i + 2] = pos[i + 1] + pos[i];
    }
    
    return pos[member];
};

// Do not edit below this line
module.exports = fibonacci;
