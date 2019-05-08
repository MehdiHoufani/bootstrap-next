module.exports = {
  plugins: ["react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": 2,
    "max-len": [
      "warn",
      {
        code: 80,
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true
      }
    ],
    semi: ["error", "always"],
    "no-unused-vars": "off",
    "no-console": "off",
    format_on_save: true
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
