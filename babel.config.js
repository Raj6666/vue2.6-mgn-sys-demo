module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        libraryName: 'vvic-element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
};
