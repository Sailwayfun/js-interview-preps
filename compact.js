function compact(arr) {
    const inValidValues = [false, null, "", undefined, 0, NaN];
    return arr.filter(val => !inValidValues.includes(val));
}

console.log(compact([0, 1, false, 2, '', 3, 'hello']));
console.log(compact([null, undefined, NaN, ' ']));
console.log(compact([{ name: 'Alice' }, null, { age: 30 }, undefined]));