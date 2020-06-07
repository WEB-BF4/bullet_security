
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  publicPath: './',
  history:'hash',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'myumiapp2',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  proxy: {
    '/cargoAdd': {
      'target':'http://192.168.0.102:8080/bullet/Cargo_addItem',
      'changeOrigin': true,
      'pathRewrite': { '^/cargoAdd' : '' },
    },
    '/cargoView': {
      'target':'http://192.168.0.102:8080/bullet/Cargo_viewCargo',
      'changeOrigin': true,
      'pathRewrite': { '^/cargoView' : '' },
    },
    '/userView': {
      'target':'http://192.168.0.102:8080/bullet/User_viewUser',
      'changeOrigin': true,
      'pathRewrite': { '^/userView' : '' },
    },
    '/powerView': {
      'target':'http://192.168.0.102:8080/bullet/Power_viewPower',
      'changeOrigin': true,
      'pathRewrite': { '^/powerView' : '' },
    }
  }
}
