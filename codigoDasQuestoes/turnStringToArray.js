export function turnStringToArray(string) {
    let array = []
    if (string.includes('[') && (string.includes(']'))) {
        const stringWithoutBrackets = string.replace('[', '').replace(']', '');
        array = stringWithoutBrackets.split(',');
    } else {
        array = string.split('')
    }

    let arrayOfNumbers = [];

    for (let number of array) {
        arrayOfNumbers.push(Number(number))
    }
    return arrayOfNumbers;
}