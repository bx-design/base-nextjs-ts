module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.tsx?$': ['babel-jest', { configFile: './.babelrc' }]
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  modulePaths: ['<rootDir>'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
      babelConfig: '.babelrc'
    }
  }
}
