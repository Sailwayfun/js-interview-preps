function reverseString_builtIn(str) {
    const strArr = [...str];
    const reversedStrArr = strArr.reverse();
    return reversedStrArr.join("");
}

///使用內建的String.prototype.split()和Array.prototype.join()方法

console.log(reverseString_builtIn("apple"));


function string_concat(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

console.log(string_concat("guava"));
//用倒過來的for loop去做字串相加

function recursion(str) {
    if (str === "") return "";
    return recursion(str.slice(1)) + str[0];
}

console.log(recursion("refrigerator"));

console.log([..."apple"]);
console.log([...[..."..."]].length);
console.log([..."..."]);
console.log([...[..."..."]]);

function shift(str) {
    const arr = str.split("");
    let result = "";
    while (arr.length) {
        // const first = arr.shift();
        // result += first;
        result = arr.shift() + result;
    }
    return result;
}

console.log(shift("banana"));

function stack(str) {
    const stack = [...str];
    let result = "";

    while (stack.length) {
        result += stack.pop();
    }
    return result;
}

console.log(stack("antarcticocean"));