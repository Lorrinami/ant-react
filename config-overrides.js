const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },'antd'], config);
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: 'css' },'antd-mobile'], config);
    return config;
};