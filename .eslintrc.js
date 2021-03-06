module.exports = {
  root: true,
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/standard',
    'prettier',
    'prettier/standard'
  ],
  plugins: ['import', 'prettier', 'standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    node: true,
    es6: true,
    jest: true
  },
  rules: {
    'space-before-function-paren': 0,
    'new-cap': 0,
    'prettier/prettier': 2
  }
}
