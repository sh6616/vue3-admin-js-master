const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  //构建项目生成的目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
  //默认情况下 babel-loader 会忽略所有 node_modules 中的文件。你可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖。
  transpileDependencies: true,
  //关闭语法的自动检测
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/styles/main.scss";`
      }
    }
  },

});
