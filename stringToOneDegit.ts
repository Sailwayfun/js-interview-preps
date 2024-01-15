function getOneDigitTs(id: string): number {
  const array = id.split("");
  let digit = 0;
  digit = array.reduce((acc, cur) => acc + Number(cur), digit);
  while (digit >= 10) {
    const newArray = digit.toString().split("");
    digit = newArray.reduce((acc, cur) => acc + Number(cur), 0);
  }
  return digit;
}

console.log(getOneDigitTs("12345"));
///test case: getOneDigit("55555") => 7
