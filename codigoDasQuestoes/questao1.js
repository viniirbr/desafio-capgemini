import promptSync from 'prompt-sync';
import { medianOfOddArray } from './medianOfOddArray.js';
import { turnStringToArray } from './turnStringToArray.js';

const prompt = promptSync();


var n = prompt('Exemplos de formatos válidos:\n12345\n[12,13,14]\nInsira o array... ');

const arrayOfNumbers = turnStringToArray(n)

const median = medianOfOddArray(arrayOfNumbers)

if (median == null) {
    console.log("ERRO: Verifique a estrutura do array que você digitou")
} else {
    console.log("Mediana: ", median)
}