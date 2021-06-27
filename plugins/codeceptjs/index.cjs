const { selectorEngine } = require("../playwright");
const supportedHelpers = [
    'Playwright'
]
const playwright = require('playwright');

module.exports = function(config) {
    const container = codeceptjs.container;
    const event = codeceptjs.event;
    const helpers = container.helpers()
    let helperName
    for (helperName of supportedHelpers) {
        if (Object.keys(helpers).indexOf(helperName) > -1) {
          helper = helpers[helperName];
        }
    }
    if (!helper) {
        throw new Error(`Shadow dom plugin only supports: ${supportedHelpers.join(',')}`)
    }
    if (!config) {
        config = {}
    }
    if (!config.locator) {
        config.locator = "shadow"
    }

    event.dispatcher.on(event.suite.before, async () => {
        if(helperName === "Playwright") {
            // temp handle api change in playwright may need to move to major version lib for documentation
            try {
                await playwright.selectors.register(selectorEngine, { name: config.locator });
            } catch(e) {
                await playwright.selectors.register(config.locator, selectorEngine);
            }
        }
    });
}