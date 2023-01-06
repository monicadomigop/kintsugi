module.exports = {
  displayName: 'kintsugi',
  setupFilesAfterEnv: ['./jest-setup.setup.ts'],
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/packages/lib/kintsugi',
}
