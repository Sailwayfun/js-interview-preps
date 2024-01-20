import createElement from "./createElement";
import render from "./render";
import mount from "./mount";

const createVapp = (count) => createElement("div", {
    attrs: { id: "app", data: count }, children: [
        String(count),
        createElement("img", {
            attrs:
                { src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3BlM256d2Uwbnc2cGlsNGw5ampuZm11dWFxM3RnaXVrbHVlbXk1NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VC5W4OPnLlZXHsZ4xe/giphy.gif" },
        })
    ]
});

let count = 0;
const $app = render(createVapp(count));
mount($app, "root");
console.log($app);