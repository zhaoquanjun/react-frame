webpackJsonp([4],{835:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var a=n(345),i=n.n(a),r=n(135),o=n.n(r),l=n(42),c=n.n(l),s=n(43),u=n.n(s),p=n(45),m=n.n(p),d=n(44),b=n.n(d),v=n(5),f=n.n(v),h=n(854),g=n(857),y=function(e){function n(){return c()(this,n),m()(this,(n.__proto__||o()(n)).apply(this,arguments))}return b()(n,e),u()(n,[{key:"openWebView",value:function(){t.init({subpages:[{url:"http://www.bao-ru.com:3001",id:1,styles:{top:0,bottom:0},extras:{}}]})}},{key:"downloader",value:function(){g.a.ready(function(){plus.downloader.createDownload("http://img.taopic.com/uploads/allimg/140322/235058-1403220K93993.jpg",{},function(t,e){alert("下载完成, "+i()(t)+", status: "+e),200===t.status&&plus.gallery.save(t.filename,function(){alert("保存到相册成功"),plus.io.resolveLocalFileSystemURL(t.filename,function(t){alert("获取文件信息成功, "+i()(t)),t.remove(function(t){alert("删除文件成功, "+i()(t))},function(t){alert("删除文件失败, "+i()(t))})},function(t){alert("获取文件信息失败, "+i()(t))})},function(t){})}).start()})}},{key:"render",value:function(){return f.a.createElement("div",{className:"layout"},f.a.createElement(h.a,{titleContent:"测试"}),f.a.createElement("div",{style:w.wrap},f.a.createElement("button",{onClick:this.openWebView.bind(this),type:"button",style:w.btn,className:"mui-btn mui-btn-primary"},"打开一个webview"),f.a.createElement("button",{onClick:this.downloader.bind(this),type:"button",style:w.btn,className:"mui-btn mui-btn-primary"},"downloader")))}}]),n}(v.Component);e.default=y;var w={wrap:{padding:".3rem"},btn:{width:"auto",fontSize:".3rem",height:".8rem",marginTop:".2rem",marginRight:".2rem",padding:"0 .2rem"}}}.call(e,n(213))},854:function(t,e,n){"use strict";var a=n(135),i=n.n(a),r=n(42),o=n.n(r),l=n(43),c=n.n(l),s=n(45),u=n.n(s),p=n(44),m=n.n(p),d=n(5),b=n.n(d),v=n(136),f=n(855),h=n.n(f),g=n(211),y=function(t){function e(t){o()(this,e);var n=u()(this,(e.__proto__||i()(e)).call(this,t));return n.goBack=n.goBack.bind(n),n}return m()(e,t),c()(e,[{key:"goBack",value:function(){var t=this;g.a.ready({app:function(e){"/"===t.props.match.path?e.touchClose():t.props.history.goBack()},other:function(){t.props.history.goBack()}})}},{key:"render",value:function(){var t=this.props,e=t.titleContent,n=t.rightContent,a=t.titleClass,i=t.leftClick;return b.a.createElement("div",{className:h.a.navbar},b.a.createElement("div",{className:h.a["navbar-left"]},b.a.createElement("div",{onClick:i||this.goBack,className:h.a["icon-go-back"]})),b.a.createElement("span",{className:h.a["navbar-title"]+" "+a},e),b.a.createElement("div",{className:h.a["navbar-right"]},n))}}]),e}(d.Component);e.a=n.i(v.e)(y)},855:function(t,e){t.exports={navbar:"navbar-2lIqS","navbar-left":"navbar-left-GfsH5","icon-go-back":"icon-go-back-1GjUQ","navbar-right":"navbar-right-2tOJ_","navbar-title":"navbar-title-2-lZC"}},857:function(t,e,n){"use strict";var a={ready:function(t){alert(navigator.userAgent),window.plus?t&&t(window.plus,1):document.addEventListener("plusready",function(){t&&t(window.plus,0)})}};e.a=a}});