import createElement from "./createElement";
import render from "./render";
import mount from "./mount";

const app = createElement("div", {
    attrs: { id: "app" }, children: [
        createElement("img", {
            attrs:
                { src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3BlM256d2Uwbnc2cGlsNGw5ampuZm11dWFxM3RnaXVrbHVlbXk1NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VC5W4OPnLlZXHsZ4xe/giphy.gif" },
        })
    ]
});
const $app = render(app);
mount($app, "root");
console.log($app);