module.exports = {
  env: {
    browser: true,
    es2023: true
  },
  extends: ['@nuxtjs', 'plugin:tailwindcss/recommended'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  rules: {
    indent: ['warn', 2],
    'linebreak-style': ['off'],
    semi: ['error', 'never'],
    quotes: [
      'error',
      'single',
      { allowTemplateLiterals: true }
    ],
    eqeqeq: ['error', 'always'],
    'no-delete-var': 'off',
    'no-var': 'off',
    'no-undef': 'off',
    'max-depth': ['warn', 4],
    'no-console': 'off',
    camelcase: 'off',
    'no-extra-parens': 'warn',
    'no-unreachable': 'warn',
    'dot-notation': 'warn',
    'no-empty-function': 'off',
    'no-redeclare': 'warn',
    'no-return-assign': 'warn',
    'no-return-await': 'warn',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-trailing-spaces': 'warn',
    'no-useless-return': 'off',
    'vue/max-attributes-per-line': ['warn', { singleline: 1, multiline: 1 }],
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-dupe-keys': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/no-v-html': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/html-indent': ['warn', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    'vue/v-slot-style': ['error', {
      atComponent: 'longform',
      default: 'longform',
      named: 'longform'
    }],
    'tailwindcss/no-custom-classname': 'off'
  }
}
