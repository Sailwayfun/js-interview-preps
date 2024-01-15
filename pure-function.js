//pure
function pure(x, y) {
    return x + y;
}

const result1 = pure(1, 2);
const result2 = pure(1, 2);
console.log(result1 === result2);

//impure

function impure(x) {
    console.log(x);
}

impure("piu");