function inRange(value, start, end = 0) {
    return value < Math.max(start, end)
        && value > Math.min(start, end);
}

console.log(inRange(3, 2, 4));
console.log(inRange(4, 8));
console.log(inRange(4, 2));
console.log(inRange(2, 2));
console.log(inRange(1.2, 2));
console.log(inRange(-1.2, -2));
console.log(inRange(-1.2, -2, -0.8));