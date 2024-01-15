document.querySelector(".btnDog").addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelector(".dogCounter").innerHTML += "woof";
});

document.querySelector(".btnCat").addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelector(".catCounter").innerHTML += "meow";
});

document.querySelector(".parent").addEventListener("click", () => {
    console.log("container clicked");
});