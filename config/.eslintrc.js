module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2023,
    },
    env: {
        'browser': true,
        'node': true,
        'es6': true,
    },
    plugins: ['react', 'simple-import-sort'],
    rules: {
        'no-multiple-empty-lines': [1, { max: 1, maxEOF: 0 }],
        'no-console': [1, { allow: ['warn', 'error'] }],
        'no-unused-vars': [
            1,
            { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
        ],
        'no-unused-expressions': [
            2,
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        'comma-spacing': [
            2,
            {
                'before': false,
                'after': true
            }
        ],
        'object-curly-spacing': ['error', 'always'],
        'import/named': 2,
        'quotes': [1, 'single'],
        'semi': [1, 'always'],
        'react/jsx-props-no-spreading': [
            2,
            {
                exceptions: ['className'],
            },
        ]
    },
};
