// script

const dice = function (sides) {
    return Math.floor(Math.random() * sides) + 1;
}

const abilityScoreRoller = function (sides, quantity, dropLow) {
    let total = 0;
    let lowest = sides;
    let roll = 0;
    for (let i = 0; i < quantity; i++) {
        roll = dice(sides);

        if (roll < lowest) {
            lowest = roll;
        }
        total += roll;
    }

    if (dropLow) {
        total -= lowest;
    }

    if (total < 3) {
        total = 3;
    } else if (total > 18) {
        total = 18;
    }

    return total;
}