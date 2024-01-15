function getOneDigit(id) {
    const array = id.split("");
    let digit = 0;
    digit = array.reduce((acc, cur) => acc + Number(cur), digit);
    while (digit >= 10) {
        const newArray = digit.toString().split("");
        digit = newArray.reduce((acc, cur) => acc + Number(cur), 0);
    }
    return digit;
}

console.log(getOneDigit("12345"));
///test case: getOneDigit("55555") => 7