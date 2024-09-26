module.exports = {
    // 继承 Next.js 的核心 Web 生存期指标规则和 TypeScript 规则
    extends: ['next/core-web-vitals', 'next/typescript',],
    rules: {
        // 禁止未使用变量，但允许使用下划线开头的变量
        'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_', },],
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
        indent: ['error', 4, { ignoredNodes: ['JSXElement*', 'JSXElement',], },],
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
    },
}