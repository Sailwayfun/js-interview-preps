// function makeCounter(arg) {
//     let val = arg ? arg : 0;
//     return () => {
//         return val++;
//     };
// }

function makeCounter(initialValue = 0) {
    let base = initialValue - 1;
    return () => ++base;
}

const counterWithoutArgs = makeCounter();
const counter10 = makeCounter(10);

console.log(counterWithoutArgs());
console.log(counterWithoutArgs());
console.log(counterWithoutArgs());
console.log(counter10());
console.log(counter10());
console.log(counter10());
