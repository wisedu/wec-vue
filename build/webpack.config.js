var path = require('path');

module.exports = {
    'entry': path.resolve(__dirname, 'entry.js'),
    'output': {
        'path': path.resolve(__dirname, '..'),
        'filename': 'index.js',
        'publicPath': ''
    },
    'resolve': {
        'extensions': ['', '.js', '.vue'],
        'alias': {
            'bh-vue': path.resolve(__dirname, '../node_modules/bh-vue'),
            'bh-util': path.resolve(__dirname, '../node_modules/bh-vue/utils')
        }
    },
    'module': {
        'loaders': [{
            'test': /\.vue$/,
            'loader': 'vue'
        },
        {
            'test': /\.js$/,
            'loader': 'babel',
            'include': [__dirname, /bh-vue/]
        },
        {
            'test': /\.less$/,
            'loader': 'style-loader!css-loader!less-loader'
        },
        {
            'test': /\.json$/,
            'loader': 'json'
        }, {
            'test': /\.html$/,
            'loader': 'vue-html'
        }, {
            'test': /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            'loader': 'url',
            'query': {
                'limit': 10000,
                'name': './resources/imgs/[name].[hash:7].[ext]'
            }
        }]
    }
};
