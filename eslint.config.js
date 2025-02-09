import js from '@eslint/js'
import globals from 'globals'
import tsEslint from 'typescript-eslint'

export default tsEslint.config(
  { ignores: [ 'dist' ] },
  {
    extends: [
      js.configs.recommended,
      ...tsEslint.configs.recommended
    ],
    files: [ '**/*.{js,ts,tsx}' ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    rules: {
      'array-bracket-spacing': [ 'error', 'always' ],
      'comma-dangle': [ 'error', 'never' ],
      'no-console': [ 'error', { allow: [ 'warn', 'error' ] } ],
      'object-curly-spacing': [ 'error', 'always' ],
      'quotes': [ 'error', 'single' ],
      'semi': [ 'error', 'never' ]
    }
  }
)
