module.exports = {
    entry: "./src/Cookies.js",
    output: {
        path: __dirname + "/dist/",
        filename: "client-cookies.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            }
        ],
    }
};