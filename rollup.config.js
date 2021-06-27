import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import { terser } from 'rollup-plugin-terser';

const babelConfig = {
    'presets': [
        ['@babel/preset-env', {
            'targets': {
                'browsers': ['last 2 versions', 'IE >= 11']
            },
            'loose': true
        }]
    ]
};

export default {
    input: 'src/querySelectorDeep.js',
    plugins: [
        babel(babelrc({
            addExternalHelpersPlugin: false,
            config: babelConfig,
            exclude: 'node_modules/**'
        })),
        terser()
    ],
    output: [{
        format: 'iife',
        name: 'querySelectorShadowDom',
        file: 'dist/querySelectorShadowDom.js'
    }, {
        format:"cjs",
        name: 'querySelectorShadowDom',
        file: 'dist/querySelectorShadowDom.cjs'
    }]
};