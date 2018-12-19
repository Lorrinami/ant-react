const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
    config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { "legacy": true }], config)   //{ "legacy": true }一定不能掉，否则报错
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },'antd'], config);
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: 'css' },'antd-mobile'], config);
    return config;
};