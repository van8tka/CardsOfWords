module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@utils': './src/utils',
          '@components': './src/components',
          '@assets': './src/assets',
          '@redux': './src/redux',
          '@hooks': './src/hooks',
          '@models': './src/models',
          '@navigators': './src/navigators',
          '@primitives': './src/primitives',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
