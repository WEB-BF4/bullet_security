
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
    '/xjbx': {
      'target':'http://api.map.baidu.com/weather/v1/?district_id=110100&data_type=all&ak=AjgOd5cXAYtLNL2omrQq3OXXxC6IbYw5&qq-pf-to=pcqq.c2c',
      'changeOrigin': true,
      'pathRewrite': { '^/xjbx' : '' },
    },
  }
}
