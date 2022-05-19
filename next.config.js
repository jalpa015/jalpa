/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push(      {
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm)$/,
      type: 'asset',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]'
      },
    });

      return config;
  }
};