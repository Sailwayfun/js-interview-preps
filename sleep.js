async function sleep(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}

console.time("timeout");
sleep(3000)
    .then(() => console.timeEnd("timeout"));