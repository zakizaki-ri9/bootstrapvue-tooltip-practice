module.exports = {
  pages: {
    index: {
      entry: "./src/main.js",
      template: "./src/index.pug"
    }
  },
  chainWebpack: config => {
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader")
      .end();
  }
};
