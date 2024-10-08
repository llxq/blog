module.exports = {
    // 继承 Next.js 的核心 Web 生存期指标规则和 TypeScript 规则
    extends: ['next/core-web-vitals', 'next/typescript',],
    rules: {
        // 关闭在 JSX 中隐式使用 React 的规则
        'react/react-in-jsx-scope': 'off',
        // 关闭 React prop-types 的规则
        'react/prop-types': 'off',
        // 关闭在 JSX 中显式使用 React 的规则
        'react/jsx-uses-react': 'off',
        // 强制使用 React Hooks 的规则
        'react-hooks/rules-of-hooks': 'error',
        // 强制依赖列表是完整的
        'react-hooks/exhaustive-deps': 'warn',
        // 强制使用单引号
        quotes: ['error', 'single',],
        // 强制使用 4 个空格缩进，忽略 JSX 元素
        indent: ['error', 4, { ignoredNodes: ['JSXElement', 'JSXFragment', 'JSXOpeningElement', 'JSXClosingElement',], },],
        // 禁止行尾分号
        semi: ['error', 'never',],

        // 强制 JSX 元素使用 4 个空格缩进
        'react/jsx-indent': ['error', 4,],
        // 强制 JSX 属性使用 4 个空格缩进，且缩进到第一层
        'react/jsx-indent-props': ['error', 'first',],
        // 强制 JSX 关闭标签的位置
        'react/jsx-closing-bracket-location': ['error', 'after-props',],
        'object-curly-spacing': ['error', 'always',],
        // 控制逗号的使用
        'comma-dangle': ['error', {
            arrays: 'always', // 多行数组的末尾必须有逗号
            objects: 'always', // 多行对象的末尾必须有逗号
            imports: 'always-multiline', // 多行导入的末尾必须有逗号
            exports: 'always-multiline', // 多行导出的末尾必须有逗号
            functions: 'never', // 函数参数列表的末尾不能有逗号
        },],
        /* 控制 JSX 中花括号内外的空格。设置为 { when: 'always', children: true } 意味着在花括号内外始终添加空格。 */
        'react/jsx-curly-spacing': [2, { when: 'always', children: true, },],
        /* 控制 JSX 标签的间距，特别是自闭合标签的处理。{ beforeSelfClosing: 'always' } 要求在自闭合标签之前总是添加空格。 */
        'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always', },],
        '@typescript-eslint/no-explicit-any': 'off',
        'template-curly-spacing': ['error', 'always',], // 大括号左右必须有间隔
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 0,
    },
    globals: {
        React: true,
    },
}
