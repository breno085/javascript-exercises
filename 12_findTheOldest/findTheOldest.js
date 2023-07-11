const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();

    return arr.reduce((oldest, person) => {
        if (!person.yearOfDeath){
            person.yearOfDeath = currentYear;
        }
        return (person.yearOfDeath - person.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth) ? person : oldest;
    }, arr[0]);
}

// Do not edit below this line
module.exports = findTheOldest;
