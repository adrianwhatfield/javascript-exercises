const findTheOldest = function(people) {
    const oldestPerson = people.reduce(compareAges);

    function compareAges(oldest, current) {
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

        if (currentAge > oldestAge) {
            return oldest = current;
        }

        return oldest;
    };

    function getAge(birth, death) {
        if (!death) {
            death = 2022;
        };

        return death - birth;
    };

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
