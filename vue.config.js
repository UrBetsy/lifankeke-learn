module.exports = {
    parallel: require('os').cpus().length > 1,
    devServer: {
        port: 8083,
        // proxy: {
        //     '/rest': {
        //         target: 'https://app-e-test1.corp.kuaishou.com/',
        //         changeOrigin: true,
        //     },
        // },
        disableHostCheck: true,
    },
    transpileDependencies: ['vuex-composition-helpers', 'vux'],
};
