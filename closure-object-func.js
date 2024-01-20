function fun(n, o) {
    console.log(o);
    return {
        fun: function (m) {
            return fun(m, n);
        }
    };
}

var a = fun(0);//console.log: 0, return {fun: (m) => fun(m, 0)}
a.fun(1);//a.fun(1): fun(1, 0) => console.log(0) => {fun: (undefined) => (undefined, 1)} => console.log(1)
a.fun(2);//a.fun(2): fun(2, 0) => console.log(0) => {fun: (undefined) => (undefined, 2)} => console.log(2)
a.fun(3);//a.fun(3): fun(3, 0) => console.log(0) => {fun: (undefined) => (undefined, 3)} => console.log(3)

const b = fun(0).fun(1).fun(2).fun(3);//console.log(0= > 1 => 0 => 2 => 0 => 3)
const c = fun(0).fun(1);//console.log(0= > 1)