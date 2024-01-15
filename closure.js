function getSum(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = getSum(5);//getSum return 一個function，這個function和它的作用域getSum(5)一起被返回
console.log(add5(2));//因此可以帶入一個參數，便達到x+y的效果