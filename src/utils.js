import range from 'lodash/range';


export function getRandom(maxNumber) {
    var baseNumber = Math.floor((Math.random() * 1000)) + 1;
    return  baseNumber % maxNumber;
}

export function stringifyId(id) {
    if (id < 10) {
        return `00${id}`;
    }

    if (id < 100) {
        return `0${id}`;
    }

    return `${id}`;
}


export function getRandomStringId(maxNumber) {
    const randomNumber = getRandom(maxNumber);

    return stringifyId(randomNumber);
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
