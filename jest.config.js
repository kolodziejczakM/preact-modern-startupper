module.exports = {
    preset: 'ts-jest',
    roots: ['<rootDir>/src'],
    verbose: true,
    transform: {
        '^.+\\.(t|j)sx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
