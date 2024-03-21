function findOcurrences(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = 0;
    while (left <= right) {
        const middle = (left + right) / 2;
        if (num < middle) {
            right = middle;
        } else {
            left = middle;
        }
        for (let i = left; i < right; i++) {
            if (arr[i] === num) result++;
        }
    }

    return result;
}

console.log(findOcurrences([1, 1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 5, 5]), 5);