const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // If multiple files with the same name are found, webpack will only build one according to extension priority
    extensions: ['.tsx', '.ts', '.js'],
  },
};
