module.exports = {
  preset: '@react-native/jest-preset',
  globals: {
    STORYBOOK_ENABLED: false,
  },
  moduleNameMapper: {
    '^\\./\\.rnstorybook$': '<rootDir>/__mocks__/StorybookUI.tsx',
  },
};
