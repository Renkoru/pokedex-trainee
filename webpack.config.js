const path = require('path');

const lessons = [
  '00-Initial',
  '01-React-Elements',
  '02-JSX',
  '03-React-Components',
  '04-Routing',
  '05-Portals-Fragments',
  '06-Context',
  '07-Use-Reducer',
  '08-HOC',
  '09-Tests',
  '10-Redux',
  '11-Immutable-combinereducers-middlewares',

  '13-Redux-thunk-old',
];

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
      // {
      //   test: /\.js$/,
      //   use: ['source-map-loader'],
      //   enforce: 'pre',
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      Shared: path.resolve(__dirname, 'src/000-Shared/'),
      Components: path.resolve(__dirname, `src/${currentLesson}/components/`),
      Services: path.resolve(__dirname, `src/${currentLesson}/services/`),
      Store: path.resolve(__dirname, `src/${currentLesson}/store/`),
    },
  },
};
