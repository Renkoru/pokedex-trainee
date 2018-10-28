import range from 'lodash/range';


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


const totalImages = 154;
export function allImagesLinks() {
    const forbiddenIds = [
        20, 21, 22, 23, 37, 38, 54, 55,
        76, 81, 93,
    ];
    const allowedIds = range(1, totalImages).filter(id => forbiddenIds.indexOf(id) === -1);

    return allowedIds.map((index) => {
        const indexString =
              (index < 10) ? `00${index}` :
              (index < 100) ? `0${index}` :
              `${index}`;

        return `../static/images/trainers/${indexString}.gif`;
    });
}
