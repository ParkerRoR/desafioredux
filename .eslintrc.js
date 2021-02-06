module.exports = {
  "extends": [
    "react-app",
    "prettier"
  ],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx",
          "ts", "tsx"
        ]
      }
    ],
    "class-methods-use-this" : 'off',
    "react/sort-comp" : 'off',
    "react/no-access-state-in-setstate" : 'off',
    "react/destructuring-assignment" : 'off',
    "react/destructuring-assignmen" : 'off',
    "no-empty" : 'off',
    "no-unused-vars" : 'off',
    "import/extensions" : 'off',
    "no-useless-escape": "off",
    "no-script-url": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-template-curly-in-string": "off",
    "react/prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-one-expression-per-line": 0,
    "linebreak-style": 0,
    "react/jsx-wrap-multilines": 0,
    "react/no-danger": 0,
    "react/forbid-prop-types": 0,
    "no-use-before-define": 0,
    "no-param-reassign": 0,
    "import/no-unresolved": 0,
    "no-console": 0,
    "react/no-multi-comp": 0,
    "react/jsx-props-no-spreading" : 0,
    // "no-unused-vars": 0,
    "import/prefer-default-export" : 0,
    "new-cap" : 0,
    "react/jsx-closing-tag-location" : 0,
    'react/jsx-indent' : 0,
    "react/no-unused-state" : 0,
    "react/self-closing-comp" : 0,
    "react/button-has-type" : 0,
    "global-require" : 0,
    "react/button-has-type" : 0,
    "react/state-in-constructor" : 0,
    "lines-between-class-members" : 0,
    "prefer-const" : 0,
    "react/no-string-refs" : 0,
    "react/no-unescaped-entities" : 0,
    "jsx-a11y/label-has-associated-control" : 0
  },
  "parserOptions": {
    "ecmaFeatures": {
      "legacyDecorators": true
    }
  }
}