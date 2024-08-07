module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    'autofix',
    'import',
    'react-refresh',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.*.js'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-redeclare': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off',
    "@typescript-eslint/no-unused-vars": ["error"],
    'jsx-a11y/label-has-associated-control': 'off',
    'unused-imports/no-unused-imports': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../'],
      },
    ],
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    semi: ['error', 'never'],
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    'import/order': [
      1,
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: '@/src/*', group: 'internal' },
          { pattern: '@/api/*', group: 'internal' },
          { pattern: '@/components/*', group: 'internal' },
          { pattern: '@/pages/*', group: 'internal' },
          { pattern: '@/slices/*', group: 'internal' },
          { pattern: '@/store/*', group: 'internal' },
          { pattern: '@/utils/*', group: 'internal' },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
