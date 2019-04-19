const path = require('path');

const lessons = [
  '00-Initial',
  '01-React-Elements',
  '02-JSX',
  '03-React-Components',
  '04-Routing',
  '05-Forms',
  '06-Fragments',
  '07-Context',
  '08-HOC',
  '09-Own-store',
  '10-Redux',
];

// const currentLesson = lessons[5];
// const currentLesson = lessons[10];
const currentLesson = lessons[10];

module.exports = {
  mode: 'development',
  entry: `./src/${currentLesson}/index.js`,
  // devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },
  resolve: {
    alias: {
      Shared: path.resolve(__dirname, `src/000-Shared/`),
      Components: path.resolve(
        __dirname,
        `src/${currentLesson}/components/`,
      ),
      Services: path.resolve(
        __dirname,
        `src/${currentLesson}/services/`,
      ),
    },
  },
};
