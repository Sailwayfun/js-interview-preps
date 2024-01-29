function setCancellableTimeout(callback, delay, ...args) {
    const timeout = setTimeout(callback, delay, ...args);
    return () => {
        clearTimeout(timeout);
    };
}

function setCancellableINterval(callback, delay, ...args) {
    const interval = setInterval(callback, delay, ...args);
    return () => {
        clearInterval(interval);
    };
}