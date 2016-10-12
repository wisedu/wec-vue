# 如何远程加载 vue 开发的 widget

### 使用说明

1. 改造需要被远程加载的vue组件

    ```javascript
    import WidgetBase from 'wec-vue/wec-widget/widgetBase'; // 引入widget基类
    export default {
        //... 
        mixins: [WidgetBase]  // 组件继承此基类
    }
    ```
    如果页面中用到了v-link语法，需要改写一下：
    ```html
    <a v-link='/a'>A页面</a>
    // =>
    <a v-link='l("/a")'>A页面</a>
    ```

1. 发布 widget

    将 exports 目录拷贝到项目根目录，在 exports/widgets.conf.js 中定制发布参数：
    ```
    prefix: 'xsxx', // 可以指定特定的前缀，防止注册的组件名称发生冲突
    paths: [ // 指定需要发布的组件路径
        '../apps/hello/hello.vue',
        '../apps/hello/a.vue'
    ],
    out: '../static/apps/', // 指定放置发布文件(.js)的目录，即远程访问的目录
    alias: { // 如果组件中使用了alias，需要在此处指定
        'bh-vue': path.resolve(__dirname, '../node_modules/bh-vue')
    }
    ```
    在项目根目录打开控制台，执行发布命令，发布的文件会被放置在 widgets.conf 配置的 out 目录中。
    ```
    webpack --config exports/webpack.config.js
    ```
    
    建议将此命令写在 package.json 中，比如 'npm run export'

1. 加载远程vue组件

    将 widget loader 引入页面：
    ```javascript
    import WidgetLoader from 'wec-vue/wec-widget/widgetLoader.vue'; // 引入loader类
    export default {
        //...
        components: {WidgetLoader}
    }
    ```
    将 loader 放置到页面合适的位置，指定远程 widget 的路径（上一步发布的js路径）：
    ```html
    <widget-loader url='http://xxxxx/widget1.js'></widget-loader>
    ```