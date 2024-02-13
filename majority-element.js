function findMajorityElement(arr) {
    ///Boyer–Moore majority vote algorithm
    let result = arr[0];
    let count = 0;
    arr.forEach(element => {
        if (element === result) {
            count++;
        } else if (count > 0) {
            count--;
        } else {
            result = element;
            count++;
        }
    });
    return result;
}

console.log(findMajorityElement([3, 3, 3, 1, 3, 2, 2, 3, 1, 1, 2, 2, 2]));