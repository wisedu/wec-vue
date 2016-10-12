var path = require('path');
var fs = require('fs');

var widgetsConf = require('./widgets.conf.js');

var prefix = widgetsConf.prefix || '';
var widgets = widgetsConf.paths;
var outPath = widgetsConf.out;
var alias = widgetsConf.alias;

var entries = {};
var includes = [];

var tmpDir = path.resolve(__dirname, 'tmp');

// 删除目录
var deleteFolderRecursive = function (fpath) {
    var files = [];
    if (fs.existsSync(fpath)) {
        files = fs.readdirSync(fpath);
        files.forEach(function (file, index) {
            var curPath = fpath + '/' + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(fpath);
    }
};

if (fs.existsSync(tmpDir)) { // 重建临时目录
    deleteFolderRecursive(tmpDir);
}

fs.mkdirSync(tmpDir);

// 创建临时入口文件
var makeEntry = function (pre, entryName, filePath) {
    var compName = pre + entryName;
    var tmpPath = path.resolve(tmpDir, entryName + '.js');
    var content = '(function(SVue){SVue.component("' + compName + '", require("../' + filePath + '"))})(Vue);';
    fs.writeFileSync(tmpPath, content, 'utf-8');
    return tmpPath;
};

// 构造webpack打包需要的entry文件（临时）和include数组
if (!widgets || widgets.length === 0) {
    console.warn('未指定需要导出的 widget 路径 ！');
} else {
    widgets.forEach(item => {
        if (item) {
            var m = item.match(/(\w+)\.vue$/);
            if (!m || m.length !== 2) {
                console.log('widget 路径定义格式不正确，请以.vue结尾！');
            } else {
                var entryName = m[1];
                var entryFile = makeEntry(prefix, entryName, item);
                // var realPath = path.resolve(__dirname, item);
                includes.push(entryFile);
                entries[entryName] = entryFile;
            }
        } else {
            console.error('widget 路径定义不可为空！');
        }
    });
}

module.exports = {
    // 'devtool': 'source-map',
    'entry': entries,
    'output': {
        'path': path.resolve(__dirname, outPath),
        'filename': '[name].js',
        'publicPath': ''
    },
    'resolve': {
        'extensions': ['', '.js', '.vue'],
        alias: alias
    },
    'module': {
        'loaders': [{
            'test': /\.vue$/,
            'loader': 'vue'
        },
        {
            'test': /\.js$/,
            'loader': 'babel',
            'include': includes
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
