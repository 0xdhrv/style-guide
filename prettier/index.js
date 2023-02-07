// @ts-check

/** @type {import("prettier").Config} */
const config = {
  endOfLine: 'lf',
  plugins: ['prettier-plugin-packagejson'],
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
};

module.exports = config;
