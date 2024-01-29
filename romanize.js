function romanize(num) {
    const romanToArabic = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50
    };
    let roman = "";
    for (const [key, value] of Object.entries(romanToArabic).reverse()) {
        while (num >= value) {
            roman += key;
            num -= value;
        }
    }

    return roman;
}

console.log(romanize(44));
console.log(romanize(19));