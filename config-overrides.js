module.exports = function override(config, env) {
  // Find the oneOf configuration in the webpack config.
  const oneOfRule = config.module.rules.find(
    (rule) => rule.oneOf !== undefined
  );

  if (oneOfRule) {
    // Find the specific rule that handles various image file types.
    const imageRuleIndex = oneOfRule.oneOf.findIndex(
      (rule) =>
        rule.test &&
        (rule.test.toString().includes("bmp") ||
          rule.test.toString().includes("gif") ||
          rule.test.toString().includes("jpe?g") ||
          rule.test.toString().includes("png"))
    );

    if (imageRuleIndex !== -1) {
      // Create a new rule to replace the existing image rule.
      const newImageRule = {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 50,
              },
              optipng: {
                enabled: true,
                optimizationLevel: 7,
              },
              pngquant: {
                quality: [0.5, 0.7],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
                optimizationLevel: 3,
              },
              webp: {
                quality: 50,
              },
            },
          },
        ],
      };

      // Replace the original rule with the new one.
      oneOfRule.oneOf[imageRuleIndex] = newImageRule;
    }
  }

  return config;
};
