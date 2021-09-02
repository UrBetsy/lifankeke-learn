module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': process.env.NODE_ENV !== 'production' ? 'off' : 'warn',
        'no-debugger': process.env.NODE_ENV !== 'production' ? 'off' : 'error',
        'max-len': 0,
        'brace-style': 0,
        'vue/max-attributes-per-line': 0,
        'vue/singleline-html-element-content-newline': 0,
        'vue/multiline-html-element-content-newline': 0,
        'vue/no-parsing-error': [
            2,
            {
                'x-invalid-end-tag': false,
                'invalid-first-character-of-tag-name': false,
            },
        ],
        'indent': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 0,
        "@typescript-eslint/ban-ts-comment": "off",
        // 'vue/script-indent': [
        //     'error',
        //     4,
        //     {
        //         'baseIndent': 1
        //     }
        // ],
        'vue/no-v-html': 0,
        'no-undefined': 0,
        'no-lonely-if': 0,
        'arrow-parens': 0,
        'no-unused-expressions': 0,
        'no-extra-parens': 0,
        'vue/html-closing-bracket-newline': 0,
        'vue/html-indent': 0,
        'consistent-return': 0,
    },
};
