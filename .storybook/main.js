const path = require("path");
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    })
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?modules&importLoaders', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    config.resolve.alias = {
      ...config.resolve?.alias,
      '~': path.resolve(__dirname, '../src/'),
    };
    return config
  }
}