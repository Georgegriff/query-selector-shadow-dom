const fs = require('fs');
const path = require('path');
const querySelectorAllDeep = fs.readFileSync(path.resolve(__dirname, "../../dist/querySelectorShadowDom.js"))

const selectorFunction = new Function('selector', 'element', `
${querySelectorAllDeep}
return querySelectorShadowDom.querySelectorAllDeep(selector, element);
`);

module.exports.locatorStrategy = selectorFunction;