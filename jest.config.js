module.exports = {
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  coveragePathIgnorePatterns: ['/node_modules/', '/.next/'],
  coverageReporters: ['json'],
  preset: 'ts-jest',
};
