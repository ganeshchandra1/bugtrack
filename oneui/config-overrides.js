const webpack = require('webpack');

module.exports = function override(config) {
  // Other webpack config...
  const fallback=config.resolve.fallback || {};
  Object.assign(fallback,{
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "crypto": require.resolve("crypto-browserify"),
      "http": require.resolve("stream-http"),
      "url": require.resolve("url/"),
      "buffer": require.resolve("buffer/"),
      "assert": require.resolve("assert/"),
      "fs":false,
      "net":false,
      "vm": require.resolve("vm-browserify"),
       "async_hooks": false
    }
  );
config.resolve.fallback=fallback;
config.plugins=(config.plugins || []).concat([
  new webpack.ProvidePlugin({
    process:"process/browser",
}),
]);
return config;
};
