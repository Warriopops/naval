module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    "vue/script-indent": ["warn", 2, { "baseIndent": 1 }],
    "vue/require-default-prop": "off",
    "vue/require-prop-types": "off",
    "vue/no-template-shadow": "off",
    "vue/order-in-components": "off"
  }
}
