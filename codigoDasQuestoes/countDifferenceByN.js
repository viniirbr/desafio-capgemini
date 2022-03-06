export function countDifferenceByN(array, n) {
    let count = 0;

    for (let element of array) {
        debugger
        for (let otherElement of array) {
            if ((element != otherElement) && (element-otherElement == n)) {
                count++
            }
        }
    }
    return count
}

console.log(countDifferenceByN('[2,5,7,10]', 3)) 