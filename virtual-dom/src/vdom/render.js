function renderElem({ tagName, attrs, children }) {
    ///create HTML node based on vNode
    const $el = document.createElement(tagName);

    ////set attributes
    for (const [key, value] of Object.entries(attrs)) {
        $el.setAttribute(key, value);
    }
    ////set children
    for (const child of children) {
        const $child = render(child);
        $el.appendChild($child);
    }

    return $el;
};

export default function render(vNode) {
    if (typeof vNode === "string") {
        const text = document.createTextNode(vNode);
        return text;
    }///children 可能是text 或是 element, 如果是text 型別就會是字串而不是物件，故需要另外判斷
    return renderElem(vNode);
}