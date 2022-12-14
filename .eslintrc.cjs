module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    "react-hooks"
  ],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": [ "warn", {"extensions": [".tsx"]} ],
    "import/extensions": 
      [
        "error",
        "ignorePackages",
        {
          "ts": "never",
          "tsx": "never"
        }
      ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
        {
        "allowExpressions": true
        }
      ],
      "max-len": ["warn", { "code": 80 }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",

    "@typescript-eslint/semi": ["error", "always"],
    "no-unexpected-multiline": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/strict-boolean-expressions": "warn"

  },
  parserOptions: {
    "project": ["tsconfig.json"]
  },
  settings: {
      "import/resolver": {
      "typescript": {}
    }
  }
}
