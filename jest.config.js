module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
  },
  collectCoverageFrom: [
    '!src/**/__tests__/**/*.js',
    '!src/**/config/*.js',
    '!src/*.js',
    '!src/helpers/*.js',
    'src/**/*.js',
  ],
  coverageReporters: ['lcov'],
  globals: {
    __PATH_PREFIX__: ``,
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  modulePaths: ['src'],
  setupFiles: [`<rootDir>/loadershim.js`, 'jest-plugin-context/setup'],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'jest-environment-jsdom-global',
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  testURL: `http://localhost`,
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `/internals/`],
  verbose: true,
}
