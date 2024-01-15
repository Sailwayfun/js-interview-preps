console.log("apple");
setTimeout(() => {
    console.log("apple");
}, 1000);
async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
}
getData();