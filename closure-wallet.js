function wallet(initValue) {
    // write your code here
    let saving = initValue;
    return function (newMoney) {
        if (!saving) return 1000 + newMoney;
        return saving + newMoney;
    };
}

const MaxsWallet = wallet(); // If there is no default value, save 1000
const ShirneysWallet = wallet(10000);

console.log(MaxsWallet(100)); // 1100
console.log(ShirneysWallet(-3000)); // 7000