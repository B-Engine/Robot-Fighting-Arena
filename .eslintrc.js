module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint'
    ],
    rules: {
        '@typescript-eslint/no-parameter-properties': 'off',
        'member-delimiter-style': 'off',
        '@typescript-eslint/interface-name-prefix': ['error', 'always'],
        '@typescript-eslint/no-explicit-any': ['error', 'never'],
        semi: ['warn', 'always'],
        '@typescript-eslint/semi': ['warn', 'always']
    }
};
