import promptSync from 'prompt-sync';

const prompt = promptSync();

var array = prompt('Insira o array  ');
var dif = prompt('Defina a diferença que será contada  ');

export function countDifferenceByN(array, n) {
    let count = 0;

    for (let element of array) {
        for (let otherElement of array) {
            if ((element != otherElement) && (element-otherElement == n)) {
                count++
            }
        }
    }
    return count
}

console.log(countDifferenceByN(array, dif));