# 2.0.0

Support for ESM and CommonJS for NodeJS ecosystem

BREAKING CHANGE: To package exports.

- "main" field points to CommonJS version of the library
- "type" changed to module for ESM.
- Exports entries added

# Plugin imports breaking change
- Imports for plugins such as webdriver.io must be done like so:
`require("query-selector-shadow-dom/plugins/webdriverio")` with `index.js`.
