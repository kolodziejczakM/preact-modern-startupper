module.exports = {
    preset: 'ts-jest',
    roots: ['<rootDir>/src'],
    verbose: true,
    transform: {
        '^.+\\.(t|j)sx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    globals: {
        'ts-jest': {
            jsx: 'react',
            allowJs: true,
            allowSyntheticDefaultImports: true,
            esModuleInterop: true,
            noImplicitAny: true,
            sourceMap: true,
            target: 'es5',
            module: 'commonjs',
            diagnostics: true,
        },
    },
};
