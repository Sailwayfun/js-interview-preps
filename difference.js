function difference(arr1, arr2) {
    if (arr1.length * arr2.length === 0) return [];
    return arr1.filter(val => !new Set(arr2).has(val));
}

///time complexity: Set.has():O(1), Array.prototype.includes: O(n)

console.log(difference([], []));
console.log(difference([1, 1, 2, 3], [2, 3]));
console.log(difference([1, 2, 3], [1, 2, 3, 4]));
console.log(difference([4, 3, 2, 1], [1, 2, 3]));