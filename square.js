Array.prototype.square = function () {
    if (this.length === 0) return this;
    return this.map(val => Math.pow(val, 2));
};

console.log([1, 2, 3, 4, 5].square());
console.log([1, 3.5].square());
console.log([].square());