module.exports = {
  displayName: 'kintsugi',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/packages/lib/kintsugi',
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
