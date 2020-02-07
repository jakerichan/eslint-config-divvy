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
    'react-hooks',
    'import',
    'sort-destructure-keys',
    'sort-keys-fix',
    'wyze'
  ],
  rules: {
    'no-console': ['error', { allow: ['warn', 'info', 'error', 'table']}],
    "react/jsx-curly-brace-presence": ['error', 'never'],
    'lines-between-class-members': 1,
    "react/jsx-sort-props": ["error", {
      "reservedFirst": true,
      "shorthandFirst": true
    }],
    "react/jsx-wrap-multilines": ["error", {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line",
      "condition": "parens-new-line",
      "logical": "parens-new-line",
      "prop": "parens-new-line"
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    "import/order": ["error", {
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index"]
    }],
    "sort-keys-fix/sort-keys-fix": "warn", // sorts keys in basic objects
    'sort-destructure-keys/sort-destructure-keys': "error", // auto fixes simple keys destructured in the argument
    'wyze/sort-destructuring-keys': 'error', // shows error when keys with a default value are not sorted 
  }
}
