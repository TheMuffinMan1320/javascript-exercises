const findTheOldest = function(people) {
    let sorted = people.sort((person1, person2) => (person1.yearOfDeath = person2.yearOfDeath) - (person1.yearOfDeath = person2.yearOfDeath))
    return sorted[1]
};

// Do not edit below this line
module.exports = findTheOldest;
