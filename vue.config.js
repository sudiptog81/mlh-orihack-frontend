const StylexPlugin = require("@ladifire-opensource/stylex-webpack-plugin");

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(tsx|ts|js|mjs|jsx)$/,
          use: StylexPlugin.loader,
        },
      ],
    },
    plugins: [new StylexPlugin()],
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      "^/auth/": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        logLevel: "debug",
      },
      "^/post/": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        logLevel: "debug",
      },
      "^/comment/": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        logLevel: "debug",
      },
      "^/like/": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        logLevel: "debug",
      },
      "^/me": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        logLevel: "debug",
      },
    },
  },
};
