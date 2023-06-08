module.exports = {
  extends: ['stylelint-config-standard'],
  syntax: 'css',
  rules: {
    // 'at-rule-no-unknown': null,
    'declaration-block-semicolon-newline-after': 'always',
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
}
