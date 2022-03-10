module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".vue"],
    },
    devtool: "source-map",
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "网易云音乐";
      return args;
    });
  },
};
