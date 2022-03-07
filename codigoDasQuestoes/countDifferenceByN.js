function checkIfArraysAreEqual(array1, array2) {
    if (array1.length == array2.length) {
        for (let i=0; i<array1.length; i++) {
            if (array1[i] != array2[i]) {
                return false;
            }
        }
        return true;
    } else return false;
        
}

function contains(array, element) {
    for (let i of array) {
        if (checkIfArraysAreEqual(i, element)) {
            return true
        }
    }
    return false;
}


export function countDifferenceByN(array, n) {
    let arrayOfPairs = []
    if (n != 0) {
        for (let element of array) {
            for (let otherElement of array) {
                if ((element != otherElement) && (element - otherElement == n)) {
                    const pair = [element, otherElement];
                    if (!contains(arrayOfPairs, pair)) {
                        arrayOfPairs.push(pair);
                    }
                }
            }
        }
    } else {

    }
    return arrayOfPairs.length
}
 