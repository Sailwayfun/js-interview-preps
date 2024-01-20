function memoize(fn) {
    let cache = {};
    console.log(typeof cache);
    return function (...args) {
        if (cache[args] !== undefined) {
            return cache[args];
        }
        const result = fn(...args);
        cache[args] = result;
        return result;
    };
}
const memoized = memoize(n => (n + 1));
console.log(memoized(1));