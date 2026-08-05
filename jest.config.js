module.exports = {
  preset: '@react-native/jest-preset',
  globals: {
    STORYBOOK_ENABLED: false,
  },
  moduleNameMapper: {
    '^\\./\\.rnstorybook$': '<rootDir>/__mocks__/StorybookUI.tsx',
  },
  transformIgnorePatterns: [
    'node_modules/.pnpm/(?!(?:@react-native|@react-native-community|react-native|@storybook)(?:\\+|@))',
    'node_modules/(?!\\.pnpm|((jest-)?react-native|@react-native(-community)?|@storybook)/)',
  ],
};
