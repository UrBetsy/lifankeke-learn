const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/lifankeke-learn/' : '/',
    parallel: require('os').cpus().length > 1,
    devServer: {
        port: 8083,
        disableHostCheck: true,
    },
    transpileDependencies: ['vuex-composition-helpers', 'vux'],
    configureWebpack: {
        plugins: [
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    },
};
