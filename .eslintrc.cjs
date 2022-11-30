/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/airbnb",
    "@vue/eslint-config-typescript/recommended",
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.js', '.json', '.vue'],
      },
      typescript: {
        'alwaysTryTypes': true,
      },
    },
  },
  plugins: ["import"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': 'off',
    'require-scoped-css': 'off',
    'vue-scoped-css/no-unused-selector': 'off',
    'no-plusplus': 'off',
    // 'prefer-template': 'off',
    // 'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'no-confusing-arrow': 'off',
    'linebreak-style': 'off',
    'max-len': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-unused-components': 'warn',
    'vue/multi-word-component-names': 'off',

    'no-param-reassign': 'off',
    'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],

    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-explicit-any': ['off'],
  },
};
