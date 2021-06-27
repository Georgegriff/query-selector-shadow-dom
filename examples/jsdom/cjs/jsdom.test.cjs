const jsdom = require("jsdom");
const querySelectorShadowDom = require("../../dist/querySelectorShadowDom.cjs");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><div class="shadowRoot">Parent</div>`);
const shadowRoot = dom.window.document.querySelector(".shadowRoot");

const root = shadowRoot.attachShadow({ 
    mode: "open"
});

root.innerHTML = `<p>Hello Matt</p>`;
// test frameworks normally do this, i think
global.document = dom.window.document;
global.Node = dom.window.Node;
console.log(querySelectorShadowDom.querySelectorDeep("p", dom.window.document).textContent);



