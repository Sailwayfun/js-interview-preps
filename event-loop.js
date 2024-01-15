// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 0);

// Promise.resolve()
//     .then(() => console.log(
//         "3"
//     ))
//     .then(() => console.log("4"));

// console.log("5");
// 同步先執行，其次是異步中的micro task (Promise)，再來是異步中的task (setTimeout)

//////中階題
console.log("begins");

setTimeout(() => {
    console.log("setTimeout 1");///first task in queue
    Promise.resolve().then(() => {
        console.log("promise 1");
    });
}, 0);

new Promise(function (resolve, reject) {
    console.log("promise 2");// first micro task
    setTimeout(function () {
        console.log("setTimeout 2");
        resolve("resolve 1");///"resolve 1"進入then block
    }, 0);///second task in queue
}).then((res) => {
    console.log("dot then 1");//同步先執行
    setTimeout(() => {
        console.log(res);
    }, 0);// res 就是 "resolve 1"，異步後執行
});