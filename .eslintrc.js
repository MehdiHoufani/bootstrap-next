module.exports = {
  plugins: ["react", "prettier"],
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
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/standard"
  ],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": 2,
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        tabWidth: 2,
        printWidth: 80
      }
    ],
    "max-len": ["warn", { code: 80, ignoreUrls: true }],
    semi: ["error", "always"],
    "no-unused-vars": "off",
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
    format_on_save: 0
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
