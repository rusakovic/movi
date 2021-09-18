module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@screens': './screens',
          '@components': './components',
          '@redux': './redux',
          '@constants': './constants',
        },
      },
    ],
  ],
};
