export default function render(vNode) {
    ///create HTML node based on vNode
    const $el = document.createElement(vNode.tagName);

    ////set attributes
    for (const [key, value] of Object.entries(vNode.attrs)) {
        $el.setAttribute(key, value);
    }
    ////set children
    for (const child of vNode.children) {
        const $child = render(child);
        $el.appendChild($child);
    }

    return $el;
};