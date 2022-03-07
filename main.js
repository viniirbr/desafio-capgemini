import { medianOfOddArray } from "./codigoDasQuestoes/medianOfOddArray.js"
import { countDifferenceByN } from "./codigoDasQuestoes/countDifferenceByN.js"
import { formatString } from "./formatString.js"

//Question 1
const addInputButtonQuestion1 = document.querySelector('[add-button-question1]')
const inputListQuestion1 = document.querySelector('[input-list-question1]')
const confirmInputButtonQuestion1 = document.querySelector('[confirm-array-button-question1]')
const outputValueQuestion1 = document.querySelector('[output-value-question1]')

addInputButtonQuestion1.addEventListener('click', () => {
    const newInput = document.createElement('input')
    newInput.type = 'number'
    newInput.classList.add('number-input')
    inputListQuestion1.insertBefore(newInput, addInputButtonQuestion1)
})

confirmInputButtonQuestion1.addEventListener('click', () => {
    const numberInputs = document.querySelectorAll('.number-input')
    let arrayOfNumbers = []
    numberInputs.forEach((input) => {
        if (input.value != '') {
            arrayOfNumbers.push(Number(input.value))
        }       
    })
    let median = medianOfOddArray(arrayOfNumbers)

    if (median == null) {
        outputValueQuestion1.textContent = 'O array inserido contém uma quantidade par de elementos. Insira um array com quantidade ímpar.'
    } else {
        outputValueQuestion1.textContent = "Mediana: " + median;
    }
})


//Question 2
const addInputButtonQuestion2 = document.querySelector('[add-button-question2]')
const inputListQuestion2 = document.querySelector('[input-list-question2]')
const inputNumber = document.querySelector('[input-number-difference]')
const confirmInputButtonQuestion2 = document.querySelector('[confirm-array-button-question2]')
const outputValueQuestion2 = document.querySelector('[output-value-question2]')

addInputButtonQuestion2.addEventListener('click', () => {
    const newInput = document.createElement('input')
    newInput.type = 'number'
    newInput.classList.add('number-input')
    inputListQuestion2.insertBefore(newInput, addInputButtonQuestion2)
})

confirmInputButtonQuestion2.addEventListener('click', () => {
    const numberInputs = document.querySelectorAll('.number-input')
    let arrayOfNumbers = []
    numberInputs.forEach((input) => {
        if (input.value != '') {
            arrayOfNumbers.push(Number(input.value))
        }       
    })
    let count = countDifferenceByN(arrayOfNumbers, inputNumber.value);
    outputValueQuestion2.textContent = count
    
})

//Question 3
const inputText = document.querySelector('[text-to-be-encrypted]')
const outputValueQuestion3 = document.querySelector('[output-value-question3]')
const encryptButton = document.querySelector('[encrypt-button]')

encryptButton.addEventListener('click', () => {
    outputValueQuestion3.textContent = formatString(inputText.value);
})




