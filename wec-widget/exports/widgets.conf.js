var path = require('path');

module.exports = {
    prefix: 'xsxx', // 可以指定特定的前缀，防止注册的组件名称发生冲突
    paths: [ // 指定需要发布的组件路径
        '../apps/hello/hello.vue',
        '../apps/hello/a.vue'
    ],
    out: '../static/apps/', // 指定放置发布文件(.js)的目录，即远程访问的目录
    alias: { // 如果组件中使用了alias，需要在此处指定
        'bh-vue': path.resolve(__dirname, '../node_modules/bh-vue')
    }
};
