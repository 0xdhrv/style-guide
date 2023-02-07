// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ['plugin:tailwindcss/recommended'],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/classnames-order': ['warn'],
  },
};

module.exports = config;
