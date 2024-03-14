module.exports = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(t|j)sx?$': ['@swc/jest'],
    },
};
  