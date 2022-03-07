import promptSync from 'prompt-sync';
import { countDifferenceByN } from './countDifferenceByN.js';
import { turnStringToArray } from './turnStringToArray.js';



const prompt = promptSync();

const inputString = prompt('Digite um array no formato [n1,n2,n3...], como o array [1,51,47,8,6]. Insira o array: ');
const inputArray = turnStringToArray(inputString)

var dif = prompt('Defina a diferença que será contada...  ');


if (countDifferenceByN(inputArray, dif) == null) {
    console.log('O valor da diferença não pode ser 0')
} else console.log(countDifferenceByN(inputArray, dif));
