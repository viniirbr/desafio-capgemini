import { medianOfOddArray } from "./codigoDasQuestoes/medianOfOddArray.js"

//Question 1
const addInputButton = document.querySelector('[add-button]')
const inputList = document.querySelector('[input-list]')
const confirmInputButton = document.querySelector('.confirm-array-button')
const outputValue = document.querySelector('.output-value')

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
        outputValue.textContent = 'O array inserido contém um número par de elementos'
    } else {
        outputValue.textContent = "Mediana: " + median;
    }
})


//Question 2


