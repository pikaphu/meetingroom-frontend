// vue.config.js
module.exports = {
  // options...
  devServer: {
    disableHostCheck: true,
    proxy: {
      "^/api": {
        target: "http://localhost:7171"
      }
    }
  }
};
