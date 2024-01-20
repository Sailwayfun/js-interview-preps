import render from "./render";

function replaceOldNode($oldNode, vNewNode) {
    const $newNode = render(vNewNode);
    $oldNode.replaceWith($newNode);
    return $newNode;
}

const diff = (vOldNode, vNewNode) => {
    if (!vNewNode) {
        return $node => {
            $node.remove();
            return;
        };
    }

    if (vOldNode === vNewNode) return $node => { };

    if (typeof vOldNode === "string" || typeof vNewNode === "string") {
        return ($node) => replaceOldNode($node, vNewNode);
    }

    if (vOldNode.tagName === vNewNode.tagName) {
        const patchAttrs = diffAttrs(vOldNode.attrs, vNewNode.attrs);
        const patchChildren = diffChildren(vOldNode.children, vNewNode.children);
        return $node => {
            patchAttrs($node);
            patchChildren($node);
        };
    }
};

export default diff;