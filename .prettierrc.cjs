/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  printWidth: 120,
  arrowParens: 'always',
  jsxBracketSameLine: false,
  overrides: [
    {
      files: '**/*.css',
      options: {
        singleQuote: false
      }
    }
  ]
};

module.exports = config;
