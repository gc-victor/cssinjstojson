const altX = /(\/\*[\s\S]*?\*\/)|([^\s;{}][^;{}]*(?={))|(})|([^;{}]+;(?!\s*\*\/))/gim;
const capSelector = 2;
const capEnd = 3;
const capAttr = 4;

// @see: https://github.com/aramk/CSSJSON
module.exports = function toJSON(cssString) {
    let match = null;

    const node = {};

    while ((match = altX.exec(cssString)) !== null) {
        if (match[capSelector]) node[match[capSelector].trim()] = toJSON(cssString);
        if (match[capAttr]) {
            const attr = /([^:]+):([^;]*);/.exec(match[capAttr].trim());
            node[attr[1].trim()] = attr[2].trim();
        }
        if (match[capEnd]) return node;
    }

    return node;
};
