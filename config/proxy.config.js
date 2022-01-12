// 默认yapi地址
const mockServer = 'http://192.168.1.145:3000/mock';

const _ProxyConfig = {
  mock: {
    '/api': {
      target: mockServer,
    },
  },
  dev: {
    '/api2': {
      target: 'http://172.12.12.12:2018',
    },
    '/api3': {
      target: 'http://172.12.12.12:2018',
      changeOrigin: true,
      //ws: true,//websocket支持
      secure: false,
      pathRewrite: {
        '^/api2': '/',
      },
    },
  },
};
// 格式化proxy.config
const _formatterProxy = () => {
  let _keys = Object.keys(_ProxyConfig);
  return _keys.reduce((a, b) => {
    return Object.assign(a, _ProxyConfig[b]);
  }, {});
};

module.exports = _formatterProxy();
