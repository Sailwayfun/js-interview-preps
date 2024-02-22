function dropRightWhile(arr, condition) {
    const result = [...arr];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!condition(arr[i])) break;
        result.splice(i, 1);

    }
    return result;
}

console.log(dropRightWhile(
    ["hello", "world", "today", "isGood"],
    (value) => value.length > 5
));

console.log(
    dropRightWhile(
        [
            { name: "Alice", age: 25 },
            { name: "Charlie", age: 20 },
            { name: "Bob", age: 30 },
        ],
        (obj) => obj.age > 25
    )
);

console.log(
    dropRightWhile([10, 20, 30, 40, 50, 10], (value) => value !== 10)
);

console.log(
    dropRightWhile([1, 2, 3, 4], (value) => value > 0)
);