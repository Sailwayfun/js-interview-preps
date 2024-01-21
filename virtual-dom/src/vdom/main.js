import createElement from "./createElement";
import render from "./render";
import mount from "./mount";
import diff from "./diff";

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
let vApp = createVapp(count);
const $app = render(vApp);
console.log({ $app });
let $rootEl = mount($app, document.getElementById("app"));
//////increment count state per second
setInterval(() => {
    count++;
    const newVApp = createVapp(count);
    const patch = diff(vApp, newVApp);
    ///用diffing的方式去重渲染，而非每次都重渲染整個App
    $rootEl = patch($rootEl);
    ///diffing把變動的地方更新到root element
    vApp = newVApp;///重渲染完後，更新vApp的值和reference
    // const $app = render(vApp);
    // $rootEl = mount($app, $rootEl);
}, 1000);