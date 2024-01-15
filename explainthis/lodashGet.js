const obj = { a: [{ b: { c: 3 } }] };
////expected: get(obj, "a[0].b.c") output: 3
////expected: get(obj, 'a[0]["b"]["c"]'); output: 3
////expected: get(object, "a[100].b.c", "default"); output: default

function get(obj, path, defaultValue) {
    if (obj === null) return defaultValue;
    let count = 0;///回圈的計數器
    const length = path.length;

    while (obj !== null && count < length) {
        obj = obj[path[count++]];
    }

    return obj;
}

const result = get(obj, ["a", "0", "b", "c"]);
console.log(result);