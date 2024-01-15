function increment(a) {
    console.log(a + 1);
}

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
//用 closure 從 debounce function 中回傳一個function，讓這個回傳的function可以帶入外層的timer，並在timer仍存在時重新計時
//回傳的function 帶入 spread operator 的參數陣列，讓回傳的function 可以接受多個參數

const debouncedIncrement = debounce(increment, 5000);
debouncedIncrement(1);
debouncedIncrement(1);
debouncedIncrement(1);
debouncedIncrement(1);
debouncedIncrement(3);//只會執行最後一次