module.exports = {
  entry: ['./src/index.js'],
    output: {
        path: __dirname,
        filename: 'app/js/main.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel',
                test: /\.jsx?$/,
                query: {
                    presets: ['react','es2015']
                }
            }
        ]
    }
};