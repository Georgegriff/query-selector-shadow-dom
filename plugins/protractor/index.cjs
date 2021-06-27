const fs = require('fs');
const path = require('path');
const querySelectorAllDeep = fs.readFileSync(path.resolve(__dirname, "../../dist/querySelectorShadowDom.js"))

module.exports = {
    name: 'query-selector-shadow-dom',
    onPrepare: function() {
        global.by.addLocator('shadowDomCss', `
            var selector /* string */ = arguments[0];
            var parentElement /* WebElement? */ = arguments[1];
            var rootSelector /* string? */ = arguments[2];
            
            ${ querySelectorAllDeep }

            return querySelectorShadowDom.querySelectorAllDeep(selector, parentElement || document)
        `);
    }
}
