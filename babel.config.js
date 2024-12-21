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
        },
      },
    ],
  ],
};
