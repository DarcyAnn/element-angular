webpackJsonp([2],{1e3:function(n,e,o){"use strict";e.a=['\n<span class="icons">\n  <i class="el-icon-edit"></i>\n  <el-icon name="share"></el-icon>\n  <el-icon name="delete"></el-icon>\n</span>\n<el-button type="primary" icon="search">搜索</el-button>\n']},1001:function(n,e){n.exports='<h2>Icon 图标</h2>\n<p>提供了一套常用的图标集合。</p>\n\n<h3>使用方法</h3>\n<p>直接通过设置类名为 `el-icon-iconName` 来使用即可。例如：</p>\n\n<ex-demo link="2" [code]="code[0]" notes="你也可以使用 <code> el-icon </code> 组件达到一样的效果。">\n</ex-demo>\n\n<h3>图标集合</h3>\n<ul class="icon-list" *ngIf="icons">\n  <li *ngFor="let name of icons">\n    <span>\n      <i [class]="\'el-icon-\' + name"></i>\n      {{\'el-icon-\' + name}}\n    </span>\n  </li>\n</ul>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n'},1002:function(n,e){n.exports=".icons i {\n  color: #8492a6;\n  margin: 0 20px;\n  font-size: 1.5em;\n  vertical-align: middle; }\n\nbutton {\n  margin: 0 20px; }\n\n.icon-list {\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  border: solid 1px #eaeefb;\n  border-radius: 4px; }\n\n.icon-list li {\n  float: left;\n  width: 16.66%;\n  text-align: center;\n  height: 120px;\n  line-height: 120px;\n  color: #666;\n  font-size: 13px;\n  transition: color .15s linear;\n  border-right: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n  margin-right: -1px;\n  margin-bottom: -1px; }\n  .icon-list li span {\n    display: inline-block;\n    line-height: normal;\n    vertical-align: middle;\n    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;\n    color: #99a9bf; }\n  .icon-list li i {\n    display: block;\n    font-size: 24px;\n    margin-bottom: 15px;\n    color: #8492a6; }\n  .icon-list li:hover {\n    color: #5cb6ff; }\n"},1003:function(n,e,o){"use strict";e.a=['\n<div el-row>\n  <div el-col span="24"><div class="grid-content bg-purple-dark"></div></div>\n</div>\n<div el-row>\n  <div el-col span="12"><div class="grid-content bg-purple"></div></div>\n  <div el-col span="12"><div class="grid-content bg-purple-light"></div></div>\n</div>\n<div el-row>\n  <div el-col span="8"><div class="grid-content bg-purple"></div></div>\n  <div el-col span="8"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col span="8"><div class="grid-content bg-purple"></div></div>\n</div>\n<div el-row>\n  <div el-col span="6"><div class="grid-content bg-purple"></div></div>\n  <div el-col span="6"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col span="6"><div class="grid-content bg-purple"></div></div>\n  <div el-col span="6"><div class="grid-content bg-purple-light"></div></div>\n</div>\n<div el-row>\n  <div el-col span="4"><div class="grid-content bg-purple"></div></div>\n  <div el-col span="4"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col span="4"><div class="grid-content bg-purple"></div></div>\n  <div el-col span="4"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col span="4"><div class="grid-content bg-purple"></div></div>\n  <div el-col span="4"><div class="grid-content bg-purple-light"></div></div>\n</div>\n','\n<div el-row gutter="20">\n  <div el-col [span]="6">\n    <div class="grid-content bg-purple"></div>\n  </div>\n  <div el-col span="6">\n    <div class="grid-content bg-purple"></div>\n  </div>\n  <div el-col span="6">\n    <div class="grid-content bg-purple"></div>\n  </div>\n  <div el-col span="6">\n    <div class="grid-content bg-purple"></div>\n  </div>\n</div>\n','\n<div el-row gutter="20">\n  <div el-col [span]="16"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="8"><div class="grid-content bg-purple"></div></div>\n</div>\n<div el-row :gutter="20">\n  <div el-col [span]="8"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="8"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="4"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="4"><div class="grid-content bg-purple"></div></div>\n</div>\n<div el-row :gutter="20">\n  <div el-col [span]="4"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="16"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="4"><div class="grid-content bg-purple"></div></div>\n</div>\n','\n<div el-row type="flex" class="row-bg">\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n</div>\n<div el-row type="flex" class="row-bg" justify="center">\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n</div>\n<div el-row type="flex" class="row-bg" justify="end">\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n</div>\n<div el-row type="flex" class="row-bg" justify="space-between">\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n</div>\n<div el-row type="flex" class="row-bg" justify="space-around">\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n</div>\n']},1004:function(n,e){n.exports='<h2>Layout 布局 </h2>\n<p>这是一个 <a href="https://angular.cn/guide/attribute-directives" target="_blank">属性型指令</a>，它可以被用在任何元素上。</p>\n<p>通过基础的 24 分栏，迅速简便地创建布局。</p>\n\n<h3>基础布局</h3>\n<p>使用单一分栏创建基础的栅格布局。</p>\n\n<ex-demo [code]="code[0]" link="2" notes="<code>el-row</code> 与 <code>el-col</code> 可以被轻易的运用在任何元素上，这些指令使元素具备额外的能力。">\n</ex-demo>\n\n<h3>分栏间隔</h3>\n<p>分栏之间存在间隔。</p>\n<ex-demo [code]="code[1]" link="2" notes="当属性的值固定时，也可以直接传入模板字符串。 如 <code>gutter=&quot;20&quot;</code>">\n</ex-demo>\n\n<h3>混合布局</h3>\n<p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>\n<ex-demo [code]="code[2]" link="2">\n</ex-demo>\n\n<h3>对齐方式</h3>\n<ex-demo [code]="code[3]" link="2" notes="将 <code>type</code> 属性赋值为 \'flex\'，可以启用 flex 布局，并可通过 <code>justify</code> 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。">\n</ex-demo>\n\n<ex-document doc="row"></ex-document>\n<ex-document doc="col"></ex-document>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n\n\n'},1005:function(n,e){n.exports=".el-row {\n  margin-bottom: 20px; }\n  .el-row:last-child {\n    margin-bottom: 0; }\n\n.el-col {\n  border-radius: 4px; }\n\n.bg-purple-dark {\n  background: #99a9bf; }\n\n.bg-purple {\n  background: #d3dce6; }\n\n.bg-purple-light {\n  background: #e5e9f2; }\n\n.grid-content {\n  border-radius: 4px;\n  min-height: 36px; }\n\n.row-bg {\n  padding: 10px 0;\n  background-color: #f9fafc; }\n"},1006:function(n,e){n.exports='<h2>Color 色彩</h2>\n<p>Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</p>\n\n<h3>主色</h3>\n<p>Element 主要品牌颜色是鲜艳、友好的蓝色。</p>\n<div el-row gutter="12">\n  <div el-col span="8">\n    <div class="demo-color-box bg-blue-light">Light Blue<div class="value">#58B7FF</div></div>\n  </div>\n  <div el-col span="8">\n    <div class="demo-color-box bg-blue">Blue<div class="value">#20A0FF</div></div>\n  </div>\n  <div el-col span="8">\n    <div class="demo-color-box bg-blue-dark">Dark Blue<div class="value">#1D8CE0</div></div>\n  </div>\n</div>\n\n<h3>辅助色</h3>\n<p>除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。</p>\n<div el-row gutter="12">\n  <div el-col span="6">\n    <div class="demo-color-box bg-info">Blue<div class="value">#20A0FF</div></div>\n  </div>\n  <div el-col span="6">\n    <div class="demo-color-box bg-success">Success<div class="value">#13CE66</div></div>\n  </div>\n  <div el-col span="6">\n    <div class="demo-color-box bg-warning">Warning<div class="value">#F7BA2A</div></div>\n  </div>\n  <div el-col span="6">\n    <div class="demo-color-box bg-danger">Danger<div class="value">#FF4949</div></div>\n  </div>\n</div>\n\n<h3>中性色</h3>\n<p>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>\n<div el-row gutter="12">\n  <div el-col span="6">\n    <div class="demo-color-box-group">\n      <div class="demo-color-box bg-black">Black<div class="value">#1F2D3D</div></div>\n      <div class="demo-color-box bg-black-light">Light Black<div class="value">#324057</div></div>\n      <div class="demo-color-box bg-black-lighter">Extra Light Black<div class="value">#475669</div></div>\n    </div>\n  </div>\n  <div el-col span="6">\n    <div class="demo-color-box-group">\n      <div class="demo-color-box bg-silver">Silver<div class="value">#8492A6</div></div>\n      <div class="demo-color-box bg-silver-light">Light Silver<div class="value">#99A9BF</div></div>\n      <div class="demo-color-box bg-silver-lighter">Extra Light Silver<div class="value">#C0CCDA</div></div>\n    </div>\n  </div>\n  <div el-col span="6">\n    <div class="demo-color-box-group">\n      <div class="demo-color-box color-gray bg-gray">Gray<div class="value">#D3DCE6</div></div>\n      <div class="demo-color-box color-gray bg-gray-light">Light Gray<div class="value">#E5E9F2</div></div>\n      <div class="demo-color-box color-gray bg-gray-lighter">Extra Light Gray<div class="value">#EFF2F7</div></div>\n    </div>\n  </div>\n  <div el-col span="6">\n    <div class="demo-color-box-group" style="border: 1px solid #e0e6ed;border-radius: 4px;">\n      <div class="demo-color-box color-gray bg-white-dark">Dark White<div class="value">#F9FAFC</div></div>\n      <div class="demo-color-box color-gray bg-white">White<div class="value">#FFFFFF</div></div>\n    </div>\n  </div>\n</div>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>'},1007:function(n,e){n.exports=".demo-color-box {\n  border-radius: 4px;\n  padding: 20px;\n  height: 74px;\n  box-sizing: border-box;\n  color: #fff;\n  font-size: 14px; }\n  .demo-color-box .value {\n    font-size: 12px;\n    opacity: 0.69;\n    line-height: 24px; }\n\n.demo-color-box-group .demo-color-box {\n  border-radius: 0; }\n\n.demo-color-box-group .demo-color-box:first-child {\n  border-radius: 4px 4px 0 0; }\n\n.demo-color-box-group .demo-color-box:last-child {\n  border-radius: 0 0 4px 4px; }\n\n.bg-blue-light {\n  background-color: #58b7ff; }\n\n.bg-blue, .bg-info {\n  background-color: #20a0ff; }\n\n.bg-blue-dark {\n  background-color: #1d8ce0; }\n\n.bg-success {\n  background-color: #13CE66; }\n\n.bg-warning {\n  background-color: #f7ba2a; }\n\n.bg-danger {\n  background-color: #ff4949; }\n\n.bg-black {\n  background-color: #1f2d3d; }\n\n.bg-black-light {\n  background-color: #324057; }\n\n.bg-black-lighter {\n  background-color: #475669; }\n\n.bg-silver {\n  background-color: #8492a6; }\n\n.bg-silver-light {\n  background-color: #99a9bf; }\n\n.bg-silver-lighter {\n  background-color: #c0ccda; }\n\n.bg-gray {\n  background-color: #d3dce6; }\n\n.bg-gray-light {\n  background-color: #e5e9f2; }\n\n.bg-gray-lighter {\n  background-color: #eff2f7; }\n\n.bg-white-dark {\n  background-color: #f9fafc; }\n\n.color-gray {\n  color: #5e6d82; }\n"},1008:function(n,e){n.exports='<h2>Typography 字体</h2>\n<p>我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。</p>\n\n<h3>中文字体</h3>\n\n<div class="demo-typo-box typo-PingFang">\n  和畅惠风\n  <div class="name">PingFang SC</div>\n</div>\n<div class="demo-typo-box typo-Hiragino">\n  和畅惠风\n  <div class="name">Hiragino Sans GB</div>\n</div>\n<div class="demo-typo-box typo-Microsoft">\n  和畅惠风\n  <div class="name">Microsoft YaHei</div>\n</div>\n\n<h3>英文／数字字体</h3>\n\n<div class="demo-typo-box typo-Helvetica-neue">\n  RGag\n  <div class="name">Helvetica Neue</div>\n</div>\n<div class="demo-typo-box typo-Helvetica">\n  RGag\n  <div class="name">Helvetica</div>\n</div>\n<div class="demo-typo-box typo-Arial">\n  RGag\n  <div class="name">Arial</div>\n</div>\n\n<h3>Font-family 代码</h3>\n\n<pre>\n<code class="hljs language-css">\nfont-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;\n</code>\n</pre>\n\n<h3>字体使用规范</h3>\n\n<table class="demo-typo-size">\n  <tbody>\n  <tr>\n    <td class="h1">主标题</td>\n    <td class="h1">用 Element 快速搭建页面</td>\n    <td class="color-dark-light">20px  Extra large</td>\n  </tr>\n  <tr>\n    <td class="h2">标题</td>\n    <td class="h2">用 Element 快速搭建页面</td>\n    <td class="color-dark-light">18px large</td>\n  </tr>\n  <tr>\n    <td class="h3">小标题</td>\n    <td class="h3">用 Element 快速搭建页面</td>\n    <td class="color-dark-light">16px Medium</td>\n  </tr>\n  <tr>\n    <td class="text-regular">正文</td>\n    <td class="text-regular">用 Element 快速搭建页面</td>\n    <td class="color-dark-light">14px Small</td>\n  </tr>\n  <tr>\n    <td class="text-small">正文（小）</td>\n    <td class="text-small">用 Element 快速搭建页面</td>\n    <td class="color-dark-light">13px Extra Small</td>\n  </tr>\n  <tr>\n    <td class="text-smaller">辅助文字</td>\n    <td class="text-smaller">用 Element 快速搭建页面</td>\n    <td class="color-dark-light">12px Extra Extra Small</td>\n  </tr>\n  </tbody>\n</table>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n'},1009:function(n,e){n.exports="@charset \"UTF-8\";\n.demo-typo-box {\n  height: 200px;\n  width: 200px;\n  position: relative;\n  border: 1px solid #eaeefb;\n  font-size: 40px;\n  color: #1f2d3d;\n  text-align: center;\n  line-height: 162px;\n  padding-bottom: 36px;\n  box-sizing: border-box;\n  display: inline-block;\n  margin-right: 17px;\n  border-radius: 4px; }\n  .demo-typo-box .name {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 35px;\n    border-top: 1px solid #eaeefb;\n    font-size: 14px;\n    color: #8492a6;\n    line-height: 35px;\n    text-align: left;\n    text-indent: 10px;\n    font-family: 'Helvetica Neue'; }\n\n.demo-typo-size .h1 {\n  font-size: 20px; }\n\n.demo-typo-size .h2 {\n  font-size: 18px; }\n\n.demo-typo-size .h3 {\n  font-size: 16px; }\n\n.demo-typo-size .text-regular {\n  font-size: 14px; }\n\n.demo-typo-size .text-small {\n  font-size: 13px; }\n\n.demo-typo-size .text-smaller {\n  font-size: 12px; }\n\n.demo-typo-size .color-dark-light {\n  color: #99a9bf; }\n\n.typo-PingFang {\n  font-family: 'PingFang SC'; }\n\n.typo-Hiragino {\n  font-family: 'Hiragino Sans GB'; }\n\n.typo-Microsoft {\n  font-family: 'Microsoft YaHei'; }\n\n/* 英文 */\n.typo-Helvetica-Neue {\n  font-family: 'Helvetica Neue'; }\n\n.typo-Helvetica {\n  font-family: 'Helvetica'; }\n\n.typo-Arial {\n  font-family: 'Arial'; }\n"},947:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o.d(e,"BasicModule",function(){return f});var t=o(6),i=o(1),l=o(46),d=o(994),c=o(99),r=o(223),a=o(954),s=o(955),p=o(956),u=o(957),v=o(958),g=o(959),b=this&&this.__decorate||function(n,e,o,t){var i,l=arguments.length,d=l<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(n,e,o,t);else for(var c=n.length-1;c>=0;c--)(i=n[c])&&(d=(l<3?i(d):l>3?i(e,o,d):i(e,o))||d);return l>3&&d&&Object.defineProperty(e,o,d),d},f=function(){function BasicModule(){}return BasicModule=b([Object(i.M)({declarations:[a.a,s.a,p.a,u.a,v.a,g.a],imports:[t.b,l.a,d.a,c.b,r.a],exports:[a.a],providers:[]})],BasicModule)}()},954:function(n,e,o){"use strict";o.d(e,"a",function(){return d});var t=o(1),i=this&&this.__decorate||function(n,e,o,t){var i,l=arguments.length,d=l<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(n,e,o,t);else for(var c=n.length-1;c>=0;c--)(i=n[c])&&(d=(l<3?i(d):l>3?i(e,o,d):i(e,o))||d);return l>3&&d&&Object.defineProperty(e,o,d),d},l=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},d=function(){function ExBasicMainComponent(){}return ExBasicMainComponent.prototype.ngOnInit=function(){},ExBasicMainComponent=i([Object(t.o)({selector:"ex-basic-main",template:o(995),styles:[o(996)]}),l("design:paramtypes",[])],ExBasicMainComponent)}()},955:function(n,e,o){"use strict";o.d(e,"a",function(){return d});var t=o(1),i=o(997),l=this&&this.__decorate||function(n,e,o,t){var i,l=arguments.length,d=l<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(n,e,o,t);else for(var c=n.length-1;c>=0;c--)(i=n[c])&&(d=(l<3?i(d):l>3?i(e,o,d):i(e,o))||d);return l>3&&d&&Object.defineProperty(e,o,d),d},d=function(){function ExButtonComponent(){this.code=i.a,this.page={previous:{name:"Icon 图标",link:"/basic/icon"},next:{name:"Radio 单选框",link:"/form/radio"}}}return ExButtonComponent=l([Object(t.o)({selector:"ex-button",template:o(998),styles:[o(999)],encapsulation:t._19.None})],ExButtonComponent)}()},956:function(n,e,o){"use strict";o.d(e,"a",function(){return r});var t=o(1),i=o(224),l=o(1e3),d=this&&this.__decorate||function(n,e,o,t){var i,l=arguments.length,d=l<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(n,e,o,t);else for(var c=n.length-1;c>=0;c--)(i=n[c])&&(d=(l<3?i(d):l>3?i(e,o,d):i(e,o))||d);return l>3&&d&&Object.defineProperty(e,o,d),d},c=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},r=function(){function ExIconComponent(n){this.docsService=n,this.code=l.a,this.page={previous:{name:"Typography 字体",link:"/basic/font"},next:{name:"Button 按钮",link:"/basic/button"}}}return ExIconComponent.prototype.ngOnInit=function(){var n=this;this.docsService.getDocuments("icon-ex").subscribe(function(e){return n.icons=e})},ExIconComponent=d([Object(t.o)({selector:"ex-icon",template:o(1001),styles:[o(1002)],encapsulation:t._19.None}),c("design:paramtypes",[i.a])],ExIconComponent)}()},957:function(n,e,o){"use strict";o.d(e,"a",function(){return d});var t=o(1),i=o(1003),l=this&&this.__decorate||function(n,e,o,t){var i,l=arguments.length,d=l<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(n,e,o,t);else for(var c=n.length-1;c>=0;c--)(i=n[c])&&(d=(l<3?i(d):l>3?i(e,o,d):i(e,o))||d);return l>3&&d&&Object.defineProperty(e,o,d),d},d=function(){function ExLayoutComponent(){this.page={previous:{name:"更新日志",link:"/guide/log"},next:{name:"Color 色彩",link:"/basic/color"}},this.code=i.a}return ExLayoutComponent=l([Object(t.o)({selector:"ex-layout",template:o(1004),styles:[o(1005)],encapsulation:t._19.None})],ExLayoutComponent)}()},958:function(n,e,o){"use strict";o.d(e,"a",function(){return l});var t=o(1),i=this&&this.__decorate||function(n,e,o,t){var i,l=arguments.length,d=l<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(n,e,o,t);else for(var c=n.length-1;c>=0;c--)(i=n[c])&&(d=(l<3?i(d):l>3?i(e,o,d):i(e,o))||d);return l>3&&d&&Object.defineProperty(e,o,d),d},l=function(){function ExColorComponent(){this.page={previous:{name:"Layout 布局",link:"/basic/layout"},next:{name:"Typography 字体",link:"/basic/font"}}}return ExColorComponent.prototype.ngOnInit=function(){},ExColorComponent=i([Object(t.o)({selector:"ex-color",template:o(1006),styles:[o(1007)]})],ExColorComponent)}()},959:function(n,e,o){"use strict";o.d(e,"a",function(){return l});var t=o(1),i=this&&this.__decorate||function(n,e,o,t){var i,l=arguments.length,d=l<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(n,e,o,t);else for(var c=n.length-1;c>=0;c--)(i=n[c])&&(d=(l<3?i(d):l>3?i(e,o,d):i(e,o))||d);return l>3&&d&&Object.defineProperty(e,o,d),d},l=function(){function ExFontComponent(){this.page={previous:{name:"Color 色彩",link:"/basic/color"},next:{name:"Button 按钮",link:"/basic/button"}}}return ExFontComponent.prototype.ngOnInit=function(){},ExFontComponent=i([Object(t.o)({selector:"ex-font",template:o(1008),styles:[o(1009)]})],ExFontComponent)}()},994:function(n,e,o){"use strict";o.d(e,"a",function(){return v});var t=o(1),i=o(29),l=o(954),d=o(955),c=o(956),r=o(957),a=o(958),s=o(959),p=this&&this.__decorate||function(n,e,o,t){var i,l=arguments.length,d=l<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(n,e,o,t);else for(var c=n.length-1;c>=0;c--)(i=n[c])&&(d=(l<3?i(d):l>3?i(e,o,d):i(e,o))||d);return l>3&&d&&Object.defineProperty(e,o,d),d},u=[{path:"",component:l.a,children:[{path:"button",component:d.a},{path:"icon",component:c.a},{path:"layout",component:r.a},{path:"color",component:a.a},{path:"font",component:s.a}]}],v=function(){function BasicRoutingModule(){}return BasicRoutingModule=p([Object(t.M)({imports:[i.e.forChild(u)],exports:[i.e]})],BasicRoutingModule)}()},995:function(n,e){n.exports="<router-outlet></router-outlet>\n"},996:function(n,e){n.exports=""},997:function(n,e,o){"use strict";e.a=['\n<el-button>默认按钮</el-button>\n<el-button type="primary">主要按钮</el-button>\n<el-button type="text">文字按钮</el-button>\n','\n<el-button [plain]="true" [disabled]="true">主要按钮</el-button>\n<el-button type="primary" [disabled]="true">主要按钮</el-button>\n<el-button type="text" [disabled]="true">文字按钮</el-button>\n','\n<div class="block">\n  <span class="demonstration">默认显示颜色</span>\n  <span class="wrapper">\n    <el-button type="success">成功按钮</el-button>\n    <el-button type="warning">警告按钮</el-button>\n    <el-button type="danger">危险按钮</el-button>\n    <el-button type="info">信息按钮</el-button>\n  </span>\n</div>\n<div class="block">\n  <span class="demonstration">hover 显示颜色</span>\n  <span class="wrapper">\n    <el-button [plain]="true" type="success">成功按钮</el-button>\n    <el-button [plain]="true" type="warning">警告按钮</el-button>\n    <el-button [plain]="true" type="danger">危险按钮</el-button>\n    <el-button [plain]="true" type="info">信息按钮</el-button>\n  </span>\n</div>\n','\n<el-button type="primary" icon="edit"></el-button>\n<el-button type="primary" icon="share"></el-button>\n<el-button type="primary" icon="delete"></el-button>\n<el-button type="primary" icon="search">搜索</el-button>\n<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>\n','\n<el-button-group>\n  <el-button type="primary" icon="arrow-left">上一页</el-button>\n  <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>\n</el-button-group>\n<el-button-group>\n  <el-button type="primary" icon="edit"></el-button>\n  <el-button type="primary" icon="share"></el-button>\n  <el-button type="primary" icon="delete"></el-button>\n</el-button-group>\n','\n\n<el-button type="primary" [loading]="true">加载中</el-button>\n\n','\n<el-button type="primary" size="large">大型按钮</el-button>\n<el-button type="primary">正常按钮</el-button>\n<el-button type="primary" size="small">小型按钮</el-button>\n<el-button type="primary" size="mini">超小按钮</el-button>\n']},998:function(n,e){n.exports='<h2>Button 按钮</h2>\n<p>常用的操作按钮。</p>\n\n<h3>基础用法</h3>\n<p>基础的按钮用法。</p>\n<ex-demo link="2" [code]="code[0]" notes="Button 组件默认提供7种主题，由 <code>type</code> 属性来定义，默认为 <code>default</code>。">\n</ex-demo>\n\n<h3>禁用状态</h3>\n<p>按钮不可用状态。</p>\n<ex-demo link="2" [code]="code[1]" notes="你可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个 <code>Boolean</code> 值。">\n</ex-demo>\n\n<h3>有颜色倾向</h3>\n<p>不同的颜色倾向代表不同的提示</p>\n<ex-demo link="2" [code]="code[2]" notes="朴素按钮同样设置了不同的 <code>type</code> 属性对应的样式（可选值同上），\n默认为 <code>info</code>。设置 <code>plain</code> 属性，它接受一个 <code>Boolean</code>。注意，在该情况下，\n<code>text</code>虽然可以为 <code>text</code>，但是是没有意义的，会显示为 <code>text button</code> 的样式。\n">\n</ex-demo>\n\n<h3>图标按钮</h3>\n<p>带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。</p>\n<ex-demo link="2" [code]="code[3]" notes="设置 <code>icon</code> 属性即可，icon 的列表可以参考 Element 的 icon 组件，\n也可以设置在文字右边的 icon ，只要使用 <code>i</code> 标签即可，可以使用自定义图标。">\n</ex-demo>\n\n\n<h3>按钮组</h3>\n<p>以按钮组的方式出现，常用于多项类似操作。</p>\n<ex-demo link="2" [code]="code[4]" notes="使用 <code><el-button-group></code> 标签来嵌套你的按钮。">\n</ex-demo>\n\n<h3>加载中</h3>\n<p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>\n<ex-demo link="2" [code]="code[5]" notes="要设置为 loading 状态，只要设置 <code>loading</code>\n属性为 <code>true</code> 即可。">\n</ex-demo>\n\n<h3>不同尺寸</h3>\n<p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>\n<ex-demo link="2" [code]="code[6]" notes="额外的尺寸：<code>large</code>、\n<code>small</code>、<code>mini</code>，通过设置 <code>size</code> 属性来配置它们。">\n</ex-demo>\n\n\n<ex-document doc="button"></ex-document>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n'},999:function(n,e){n.exports=".demo-box .el-row, .demo-button .el-row {\n  margin-bottom: 10px; }\n\n.demo-box .el-button + .el-button, .demo-button .el-button + .el-button {\n  margin-left: 10px; }\n\n.demo-box .el-button-group, .demo-button .el-button-group {\n  margin-bottom: 20px; }\n  .demo-box .el-button-group .el-button + .el-button, .demo-button .el-button-group .el-button + .el-button {\n    margin-left: 0; }\n  .demo-box .el-button-group + .el-button-group, .demo-button .el-button-group + .el-button-group {\n    margin-left: 10px; }\n\n.intro-block {\n  padding: 0; }\n\n.block {\n  padding: 30px 24px;\n  overflow: hidden;\n  border-bottom: solid 1px #EFF2F6; }\n  .block:last-child {\n    border-bottom: none; }\n\n.demonstration {\n  font-size: 14px;\n  color: #8492a6;\n  line-height: 44px; }\n\n.wrapper {\n  float: right;\n  margin-right: 20px; }\n"}});