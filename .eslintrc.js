module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    ignorePatterns: ['*.config.js', 'node_modules/', 'build/'],
    rules: {},
};
