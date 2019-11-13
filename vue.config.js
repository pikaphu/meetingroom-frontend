// vue.config.js
module.exports = {
  // options...
  devServer: {
    disableHostCheck: true,
    proxy: {
      "^/api": {
        target: "http://192.168.128.1:7171"
      }
    }
  }
};
