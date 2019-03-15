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
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": 2,
    "max-len": [
      "error",
      {
        code: 100,
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true
      }
    ],
    semi: ["error", "always"],
    "no-console": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
