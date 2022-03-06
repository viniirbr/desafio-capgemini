
function createArrayOfArrays (string, number) {
    var arrayOfArrays = [];
    var arrayToBeInserted = [];
    let counter = 0

    for (let letter of string) {
        
        if ((counter % number) === 0) {
            if (arrayToBeInserted.length != 0) { //manda o arrayInserted para o arrayOfArrays e zera 
                arrayOfArrays.push(arrayToBeInserted)
                arrayToBeInserted = [letter]
            } else arrayToBeInserted.push(letter)          
        } else {
            arrayToBeInserted.push(letter)
        }

        if (counter === string.length-1) {
            arrayOfArrays.push(arrayToBeInserted)
        }
        counter++;
    }
    return arrayOfArrays;


}

function formatString(string) {
    const stringWithoutSpace = string.replace(/\s/g, '');

    const sqrtOfStringLength = Math.sqrt(stringWithoutSpace.length);
    const numberOfRowsColumns = Math.ceil(sqrtOfStringLength)

    const arrayFromString = stringWithoutSpace.split('');

    var arrayOfArrays = createArrayOfArrays(arrayFromString, numberOfRowsColumns);
    let finalArray = []
    
    for (let i=0;i<numberOfRowsColumns;i++) {
        for (let array of arrayOfArrays) {
            if (array[i] != undefined) {
                finalArray.push(array[i])
            }
        }
        finalArray.push(' ')
    }

    return finalArray.join('');
    
}



console.log(formatString('o rato roeu a roupa do rei de roma'))

