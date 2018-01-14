'use strict';

const OFF = 0;
// const WARNING = 1;
const ERROR = 2;

module.exports = {
    parser: "babel-eslint",

    parserOptions: {
        sourceType: 'module'
    },

    // We're stricter than the default config, mostly. We'll override a few rules
    rules: {
        'accessor-pairs': OFF,
        'brace-style': [ERROR, '1tbs'],
        'consistent-return': OFF,
        'dot-location': [ERROR, 'property'],
        'dot-notation': ERROR,
        'eqeqeq': [ERROR, 'allow-null'],
        'indent': [ERROR, 4, {SwitchCase: 1}],
        'jsx-quotes': [ERROR, 'prefer-double'],
        'keyword-spacing': [ERROR, {after: true, before: true}],
        'no-bitwise': OFF,
        'no-inner-declarations': [ERROR, 'functions'],
        'no-multi-spaces': ERROR,
        'no-restricted-syntax': [ERROR, 'WithStatement'],
        'no-shadow': ERROR,
        'no-unused-expressions': ERROR,
        'no-unused-vars': [ERROR, {args: 'none'}],
        'quotes': [ERROR, 'single', {avoidEscape: true, allowTemplateLiterals: true}],
        'space-before-blocks': ERROR,
        'space-before-function-paren': [ERROR, {anonymous: 'never', named: 'never'}],
    },

    globals: {
        expectDev: true,
    },
};