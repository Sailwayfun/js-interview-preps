function clamp_old(a, b, c) {
    const arr = [a, b, c];
    const maxValue = Math.max(a, b, c);
    const minValue = Math.min(a, b, c);
    const returnValue = arr.find(val => val > minValue && val < maxValue);
    return returnValue;
}

function clamp(lower, number, upper) {
    const sorted = [lower, number, upper].sort((x, y) => x - y);
    return sorted[1];
}

console.log(clamp(1, -5, 87));
console.log(clamp(99, 34, 23));

console.log(clamp_old(1, -5, 87));
console.log(clamp_old(99, 34, 23));