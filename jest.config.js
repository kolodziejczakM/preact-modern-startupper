module.exports = {
    preset: 'ts-jest',
    roots: ['<rootDir>/src'],
    verbose: true,
    transform: {
        '^.+\\.(t|j)sx?$': 'ts-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!(wouter-preact)/)'], // by default imported node_modules (ESM) aren't transpiled
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
