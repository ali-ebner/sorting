function split(wholeArr) {
    let first = [], second = []
    let half = Math.floor(wholeArr.length/2)

    first = wholeArr.slice(0,half)
    second = wholeArr.slice(half)
    return [first, second]
}

function merge(arr1, arr2) {
    let sortedArr = []

    while (arr1.length && arr2.length) {
        let pointer1 = arr1[0], pointer2 = arr2[0]

        if (pointer1 < pointer2) {
            sortedArr.push(arr1.shift())
        } else {
            sortedArr.push(arr2.shift())
        }
    }
    return arr1.length ? sortedArr.concat(arr1) : sortedArr.concat(arr2)
}

function mergeSort(arr) {
    // here
}