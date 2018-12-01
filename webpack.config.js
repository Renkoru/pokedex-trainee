var path = require('path');
var monsters = require('./static/monsters.json');


module.exports = {
    mode: 'development',
    devServer: {
        contentBase: [path.join(__dirname, 'dist'), path.join(__dirname)],
        compress: true,
        port: 8080,
        historyApiFallback: true,
        before: function(app, server) {
            app.get('/api/v1/monsters', function(req, res) {
                res.json(monsters);
            });
        }
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
