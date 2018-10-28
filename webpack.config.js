var path = require('path');


module.exports = {
    mode: 'development',
    devServer: {
        contentBase: [path.join(__dirname, 'dist'), path.join(__dirname)],
        compress: true,
        port: 8080,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
