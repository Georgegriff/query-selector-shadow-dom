module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "globals": {
        "it": true,
        "describe": true,
        "expect": true,
        "beforeEach": true,
        "afterEach": true,
        "jasmine": true
    },
    "rules": { "semi": ["error", "always"]}
};
