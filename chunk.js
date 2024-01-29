// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const chunkSize = 3;

// // 輸出: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const chunkedArray = chunkArray(originalArray, chunkSize);

// function chunkArray(originalArray, chunkSize) {
//     let result = [];
//     const length = originalArray.length;
//     for (let i = 0; i < length; i++) {
//         result.push(originalArray.splice(0, chunkSize));
//     }
//     result = result.filter(arr => arr.length != 0);
//     return result;
// }

function chunkArray(originalArray, chunkSize) {
    let result = [];
    const length = originalArray.length;
    for (let i = 0; i < length; i += chunkSize) {
        result.push(originalArray.slice(i, i + chunkSize));
    }
    return result;
}

const chunkedArray = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
const chunkedArray2 = chunkArray([-1, 2, 5, 6, 8, 9, 11, 567], 2);
console.log(chunkedArray);
console.log(chunkedArray2);