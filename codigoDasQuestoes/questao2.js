import promptSync from 'prompt-sync';
import { countDifferenceByN } from './countDifferenceByN.js';
import { turnStringToArray } from './turnStringToArray.js';


//TODO: verificar casos, como o que a diferença é n=0

const prompt = promptSync();

const inputString = prompt('Insira o array  ');
const inputArray = turnStringToArray(inputString)
console.log(inputArray)
var dif = prompt('Defina a diferença que será contada  ');



console.log(countDifferenceByN(inputArray, dif));