module.exports = {
    // 実行の起点となるファイルの指定
    entry: './entry.js',

    // 出力に関する指定
    output: {
        filename: 'output.js'
    },

    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                options: {
                    presets: ['react']
                }
            }
        ]
    },

//    mode: 'development'
};