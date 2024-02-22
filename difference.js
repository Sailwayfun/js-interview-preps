function difference(arr1, arr2) {
    if (arr1.length * arr2.length === 0) return [];
    return arr1.filter(val => arr1.includes(val) && !arr2.includes(val));
}

console.log(difference([], []));
console.log(difference([1, 1, 2, 3], [2, 3]));
console.log(difference([1, 2, 3], [1, 2, 3, 4]));
console.log(difference([4, 3, 2, 1], [1, 2, 3]));