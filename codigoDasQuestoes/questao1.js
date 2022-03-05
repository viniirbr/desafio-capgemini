import promptSync from 'prompt-sync';

const prompt = promptSync();

var n = prompt('Insira o array ');

export function medianOfOddArray(array) {
    const arrayLength = array.length;
    if (arrayLength % 2 == 0) {
        return null;
    } else {
        const medianPosition = Math.floor(arrayLength/2);
        return array[medianPosition];
    }
}

const median = medianOfOddArray(n)

if (median == null) {
    console.log("ERRO: Verifique a estrutura do array que você digitou")
} else {
    console.log("Mediana: ", medianOfOddArray(n))
}
