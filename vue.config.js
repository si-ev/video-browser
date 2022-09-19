const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

require('dotenv').config();

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
        })
    ]
  }
})
