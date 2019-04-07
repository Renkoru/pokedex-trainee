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
];

// const currentLesson = lessons[5];
const currentLesson = lessons[8];

module.exports = {
  mode: 'development',
  entry: `./src/${currentLesson}/index.js`,
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
    ],
  },
  resolve: {
    alias: {
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
