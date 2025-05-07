export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
  ],
  ignoreFiles: ['dist/**/*'],
  rules: {
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extend', 'include', 'mixin', 'if', 'else', 'function', 'return', 'each', 'use']
      }
    ],
    'no-duplicate-selectors': true,
    'color-hex-length': 'short',
    'color-function-notation': 'modern',
    'color-no-invalid-hex': true
  }
}