import { injectGlobal } from 'styled-components'

injectGlobal`

@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1537857646843'); /* IE9*/
  src: url('./iconfont.eot?t=1537857646843#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1537857646843') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1537857646843#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


`


/* .icon-fangdajing:before { content: "\e614"; }

.icon-Aa:before { content: "\e636"; }

.icon--quill:before { content: "\e608"; } */

