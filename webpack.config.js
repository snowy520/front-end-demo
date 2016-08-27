module.exports = {
    entry: {
        //content:"./content.js",
        bundle:"./entry.js"
    },
    output: {
        path: 'dist/js',
        filename: "[name].js"
    },
    module: {
        preLoaders: [
            {test: /\.js$/,loader: "source-map-loader"}
        ],
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.coffee$/, loader: 'coffee-loader' },
            { test: /\.ts$/, loader: 'typescript-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' }, // loaders can take parameters as a querystring
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.jade$/, loader: "jade" }
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee','.ts'] 
    }
};