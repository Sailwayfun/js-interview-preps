function increment(a) {
    const result = a * 10;
    console.log(result);
}

function throttle(fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) return;
        timer = setTimeout(() => {
            fn(...args);
            timer = null;
        }, delay);

    };
}

const throttledUIncrement = throttle(increment, 5000);
throttledUIncrement(5);
throttledUIncrement(5);
throttledUIncrement(5);
throttledUIncrement(5);
throttledUIncrement(5);