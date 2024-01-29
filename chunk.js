// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const chunkSize = 3;

// // 輸出: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const chunkedArray = chunkArray(originalArray, chunkSize);

function chunkArray(originalArray, chunkSize) {
    let result = [];
    for (let i = 0; i < chunkSize; i++) {
        let inner = [];
        for (let j = 0; j < originalArray.length / chunkSize; j++) {
            inner.push(originalArray[j]);
        }
        result.push(inner);
    }
    return result;
}

const chunkedArray = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
console.log(chunkedArray);