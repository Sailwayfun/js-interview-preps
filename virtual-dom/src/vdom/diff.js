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

    if (vOldNode === vNewNode) return $node => undefined;

    if (typeof vOldNode === "string" || typeof vNewNode === "string") {
        return ($node) => replaceOldNode($node, vNewNode);
    }

    if (vOldNode.tagName === vNewNode.tagName) {
        const patchAttrs = diffAttrs(vOldNode.attrs, vNewNode.attrs);
        // const patchChildren = diffChildren(vOldNode.children, vNewNode.children);
        return $node => {
            patchAttrs($node);
            // patchChildren($node);
            return $node;
        };
    }
};

function diffAttrs(oldAttrs, newAttrs) {
    const patches = [];
    ////set new attributes
    for (const [key, value] of Object.entries(newAttrs)) {
        const patch = ($node) => {
            $node.setAttribute(key, value);
            return $node;
        };
        patches.push(patch);
    }
    ////remove old attributes not included in new node
    for (const key in oldAttrs) {
        if (!(key in newAttrs)) {
            const patch = ($node) => {
                $node.removeAttribute(key);
                return $node;
            };
            patches.push(patch);
        }
    }

    return $node => {
        for (const patch of patches) {
            patch($node);
        }
    };
}

// function diffChildren() {

// }

export default diff;