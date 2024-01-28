function makeCounter(arg) {
    let val = arg ? arg : 0;
    return () => {
        return val++;
    };
}

const counterWithoutArgs = makeCounter();
const counter10 = makeCounter(10);

console.log(counterWithoutArgs());
console.log(counterWithoutArgs());
console.log(counterWithoutArgs());
console.log(counter10());
console.log(counter10());
console.log(counter10());
