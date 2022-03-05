import { medianOfOddArray } from "./codigoDasQuestoes/questao1.js"

const addInputButton = document.querySelector('[add-button]')
const inputList = document.querySelector('[input-list]')
const confirmInputButton = document.querySelector('.confirm-array-button')

addInputButton.addEventListener('click', () => {
    const newInput = document.createElement('input')
    newInput.type = 'number'
    newInput.classList.add('number-input')
    inputList.insertBefore(newInput, addInputButton)
})

confirmInputButton.addEventListener('click', () => {
    const numberInputs = document.querySelectorAll('.number-input')
    let arrayOfNumbers = []
    numberInputs.forEach((input) => {
        if (input.value != '') {
            arrayOfNumbers.push(Number(input.value))
        }       
    })
    let median = medianOfOddArray(arrayOfNumbers)

    if (median == null) {
        console.log('O array inserido contém um número par de elementos')
    } else {
        console.log(median)
    }
})


