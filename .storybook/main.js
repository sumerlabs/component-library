const path = require("path");
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-postcss',
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
      loaders: [
        {
          loader: require.resolve('style-loader'),
          options: {
            esModule: true,
            modules: {
              namedExport: true,
            },
          },
        },
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            esModule: true,
            modules: {
              namedExport: true,
            },
          },
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
    })
    config.resolve.alias = {
      ...config.resolve?.alias,
      '~': path.resolve(__dirname, '../src/'),
    };
    return config
  }
}