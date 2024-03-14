module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    'import/resolver': {
        node: {
            extensions: ['.js', '.ts', '.d.ts', '.tsx'],
        },
        alias: {
            extensions: ['.js', '.ts', '.scss', '.d.ts', '.tsx'],
            map: [
                ['@/assets', './src/assets']
                ['@/components', './src/components'],
                ['@/pages', './src/sections'],
                ['@/utils', './src/utils'],
            ],
        },
    },
},
}
