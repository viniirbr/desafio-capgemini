export function medianOfOddArray(array) {
    const arrayLength = array.length;
    if (arrayLength % 2 == 0) {
        return null;
    } else {
        const medianPosition = Math.floor(arrayLength/2);
        return array[medianPosition];
    }
}