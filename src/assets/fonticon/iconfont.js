import { createGlobalStyle } from 'styled-components';

export const GlobalIconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1588314193877'); /* IE9 */
  src: url('iconfont.eot?t=1588314193877#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1588314193877') format('woff'),
  url('iconfont.ttf?t=1588314193877') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1588314193877#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-sheld:before {
  content: "\e67d";
}

.icon-fanghuliliang:before {
  content: "\e614";
}

.icon-bullet:before {
  content: "\e65a";
}

.icon-dollar:before {
  content: "\e702";
}

.icon-location:before {
  content: "\e665";
}

.icon-star:before {
  content: "\e7c5";
}


`