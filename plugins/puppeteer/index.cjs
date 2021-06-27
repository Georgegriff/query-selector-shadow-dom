const fs = require("fs");
const path = require("path");

const querySelectorShadowDomUMD = fs.readFileSync(path.resolve(__dirname, "../../dist/querySelectorShadowDom.js"))

const QueryHandler = {
    queryOne: new Function('element', 'selector', `
        ${querySelectorShadowDomUMD}
        return querySelectorShadowDom.querySelectorDeep(selector, element);
    `),
    queryAll: new Function('element', 'selector', `
    ${querySelectorShadowDomUMD}
        return querySelectorShadowDom.querySelectorAllDeep(selector, element);
    `)
};
module.exports.QueryHandler = QueryHandler;