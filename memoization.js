/////第一種：要memoize的function放在全域，用另一個function把 這個function memoize後呼叫的結果回傳
function add(a, b) {
    console.log("run");
    return a + b;
}

function memo() {
    const cache = {};
    return function (a, b) {
        if (cache[a, b]) {
            return cache[a, b];
        }
        const result = a + b;
        cache[a, b] = result;
        return result;
    };

}
//利用closure把cache的值保存起來，從memo() function裡面return 一個 function 每次都可以從
// cache 裡面去檢查是否有運算過的值

// const addMemo = memo();
// console.time("addmemo 1");
// addMemo(1, 2);
// console.timeEnd("addmemo 1");
// console.time("add 1");
// add(1, 2);
// console.timeEnd("add 1");
// console.time("addmemo 2");
// addMemo(1, 2);
// console.timeEnd("addmemo 2");
// console.time("add 2");
// add(1, 2);
// console.timeEnd("add 2");

///////第二種：寫一個通用的memoize function，帶入function作為參數
function memoize(fn) {
    const cache = {};
    function func(...args) {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn(...args);
        cache[args] = result;
        return result;
    };
    return func;
}

const multiplyMemo = memoize((a, b, c) => a * b * c);
function multiply(a, b, c) {
    if (a * b * c < 10000) {
        return 10000;
    }
    return multiply(a / b, b, c) / 1000;
}

console.time("multiply 1");
multiply(10, 100, 100000);
console.timeEnd("multiply 1");
console.time("multiply memo 1");
multiplyMemo(10, 100, 100000);
console.timeEnd("multiply memo 1");
console.time("multiply 2");
multiply(10, 100, 100000);
console.timeEnd("multiply 2");
console.time("multiply memo 2");
multiplyMemo(10, 100, 100000);
console.timeEnd("multiply memo 2");