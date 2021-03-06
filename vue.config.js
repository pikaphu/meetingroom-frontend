// vue.config.js

// default config var
const servePort = process.env.SERVE_PORT || process.env.npm_config_port || 8080; // serve web at port
const backend_api = process.env.VUE_APP_API_URL || "http://localhost:3000";

// vue config
module.exports = {
  // options...
  devServer: {
    host: "0.0.0.0", // fix self called
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: backend_api
        // changeOrigin: true,
        // pathRewrite: { '^/api': '' }
      }
    },
    port: servePort,
    sockPort: process.env.SOCK_PORT || 8080,
    contentBase: "./public"
    /*
    configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        // mutate config for production...
      } else {
        // mutate for development...
      }
    }
    */
  }
};
