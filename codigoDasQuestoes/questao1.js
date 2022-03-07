import promptSync from 'prompt-sync';
import { medianOfOddArray } from './medianOfOddArray.js';
import { turnStringToArray } from './turnStringToArray.js';

const prompt = promptSync();


var n = prompt('Digite um array no formato [n1,n2,n3...], como o array [1,5,4,8]. Insira o array: ');

const arrayOfNumbers = turnStringToArray(n)

const median = medianOfOddArray(arrayOfNumbers)

if (median == null) {
    console.log("ERRO: Verifique a estrutura do array que você digitou")
} else {
    console.log("Mediana: ", median)
}