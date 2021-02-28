module.exports = {
  env: {
    browser: true,
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  rules: {
    "react/prop-types": 0,
  },
};
