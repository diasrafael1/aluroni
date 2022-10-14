// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "6",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "linebreak-style": [
      "error",
      process.env.NODE_ENV === "prod" ? "unix" : "windows",
    ],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/react-in-jsx-scope": "off",
  },
};
