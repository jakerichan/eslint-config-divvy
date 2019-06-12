module.exports = {
    extends: [
        'eslint:recommended',
        'standard',
        'standard-react',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:jest/recommended',
    ],
    parser: 'babel-eslint',
    plugins: [
        'jsx-a11y',
        'jest',
        'emotion',
    ],
    rules: {
        'no-console': [1, { allow: ['warn', 'error'] }],
        'lines-between-class-members': 1,
        "react/jsx-sort-props": ["error"],
        "react/jsx-wrap-multilines": ["error", {
            "declaration": "parens-new-line",
            "assignment": "parens-new-line",
            "return": "parens-new-line",
            "arrow": "parens-new-line",
            "condition": "parens-new-line",
            "logical": "parens-new-line",
            "prop": "parens-new-line"
        }]
    }
}
