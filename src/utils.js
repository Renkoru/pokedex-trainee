export function getRandom(maxNumber, returnString = true) {
    var baseNumber = Math.floor((Math.random() * 1000) + 1);
    var intRandom =  baseNumber % maxNumber;

    if (!returnString) {
        return intRandom;
    }

    if (intRandom < 10) {
        return '00' + intRandom;
    }

    if (intRandom < 100) {
        return '0' + intRandom;
    }

    return '' + intRandom;
}
