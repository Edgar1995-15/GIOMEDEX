/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  printWidth: 100,
  arrowParens: 'always',
  jsxBracketSameLine: false,
  plugins: ['prettier-plugin-tailwindcss'],
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
