webpackJsonp([3],{1008:function(e,t){e.exports={container:"container-1EXYp",info:"info-3NKQ8",user:"user-tpml2","user-left":"user-left-3DAr5",avatar:"avatar-3efxn","user-right":"user-right-1WiZA",nickname:"nickname-3-nO6","edit-info":"edit-info-3hpBl",item:"item-2SHea",num:"num-ydCFA",title:"title-2QYi1"}},1009:function(e,t){e.exports={menu:"menu-2whiX",item:"item-byvWA","menu-name":"menu-name-nT62N",icon:"icon-kb834",message:"message-3OblS",collect:"collect-3MesY",topic:"topic-3vQLf",comment:"comment-zwbBG",task:"task-3nUqr",mark:"mark-1aavu",arrows:"arrows-12VMS"}},1010:function(e,t){e.exports={container:"container-BkX2O",btn:"btn-1OhT2",movement:"movement-czR9y",move:"move-1DNQx"}},845:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(134),n=i.n(a),s=i(42),o=i.n(s),r=i(43),l=i.n(r),c=i(45),h=i.n(c),p=i(44),u=i.n(p),d=i(3),m=i.n(d),f=i(135),g=i(212),v=i(855),y=i(995),b=i(993),w=i(994),E=i(339),k=function(e){function t(){return o()(this,t),h()(this,(t.__proto__||n()(t)).apply(this,arguments))}return u()(t,e),l()(t,[{key:"componentWillMount",value:function(){this.props.dispatch(E.b())}},{key:"render",value:function(){var e=this.props.loginState;return m.a.createElement("div",{className:"layout"},m.a.createElement(v.a,{titleContent:"我的"}),m.a.createElement("div",{className:"scroll-wrap bg-white"},"logined"===e&&m.a.createElement(b.a,null),"nologin"===e&&m.a.createElement(y.a,null),m.a.createElement(w.a,null)))}}]),t}(d.Component);t.default=i.i(f.e)(i.i(g.b)(function(e){return e.user})(k))},855:function(e,t,i){"use strict";var a=i(134),n=i.n(a),s=i(42),o=i.n(s),r=i(43),l=i.n(r),c=i(45),h=i.n(c),p=i(44),u=i.n(p),d=i(3),m=i.n(d),f=i(135),g=i(856),v=i.n(g),y=function(e){function t(){o()(this,t);var e=h()(this,(t.__proto__||n()(t)).call(this));return e.goBack=e.goBack.bind(e),e}return u()(t,e),l()(t,[{key:"goBack",value:function(){this.props.history.goBack()}},{key:"render",value:function(){var e=this.props,t=e.titleContent,i=e.rightContent,a=e.titleClass,n=e.leftClick;return m.a.createElement("div",{className:v.a.navbar},m.a.createElement("div",{className:v.a["navbar-left"]},m.a.createElement("div",{onClick:n||this.goBack,className:v.a["icon-go-back"]})),m.a.createElement("span",{className:v.a["navbar-title"]+" "+a},t),m.a.createElement("div",{className:v.a["navbar-right"]},i))}}]),t}(d.Component);t.a=i.i(f.e)(y)},856:function(e,t){e.exports={navbar:"navbar-2lIqS","navbar-left":"navbar-left-GfsH5","icon-go-back":"icon-go-back-1GjUQ","navbar-right":"navbar-right-2tOJ_","navbar-title":"navbar-title-2-lZC"}},898:function(e,t,i){"use strict";var a=function(){function e(e){this.bridge=e}function t(t){return void 0===a&&(a=new e(t)),a}function i(i){function a(e){e.callback&&"app"===e.callback&&void 0===n&&(n=t(e.data),n._init());try{i[e.callback](n)}catch(e){}}e.isAPP()?window.WebViewJavascriptBridge?a({callback:"app",data:window.WebViewJavascriptBridge}):document.addEventListener("WebViewJavascriptBridgeReady",function(){a({callback:"app",data:window.WebViewJavascriptBridge})},!1):a({callback:"other",data:null})}var a;e.isAPP=function(){return navigator.userAgent.indexOf("wlbAPP")>-1},e.filterJSON=function(e){var t=navigator.userAgent,i=Object.prototype.toString,a=e;if(t.indexOf("Android")>-1&&"[object String]"===i.call(a))try{a=JSON.parse(e)}catch(e){return a}return a},e.prototype={_init:function(){this.bridge.init(function(e,t){t({init:"true"})})},_setData:function(e,t){var i={post:{},callback:null},a=Object.prototype.toString;if("[object Object]"===a.call(e))for(var n in e)i.post[n]=e[n];return"[object Function]"===a.call(e)?(i.callback=e,i):(i.callback="[object Function]"===a.call(t)?t:null,i)},loginApp:function(e,t){var i=this._setData(e,t);this.bridge.callHandler("loginApp",i.post,function(e){i.callback&&i.callback(e)})},reloadPage:function(e,t){var i=this._setData(e,t);this.bridge.callHandler("reloadPage",i.post,function(e){i.callback&&i.callback(e)})},registerApp:function(e,t){var i=this._setData(e,t);this.bridge.callHandler("registerApp",i.post,function(e){i.callback&&i.callback(e)})},firstLoadWebView:function(e,t){var i=this._setData(e,t);this.bridge.callHandler("firstLoadWebView",i.post,function(e){i.callback&&i.callback(e)})},jumpToManageMoney:function(e){this.bridge.callHandler("jumpToManageMoney",function(t){e&&e(t)})},jumpToDiscoverView:function(e){this.bridge.callHandler("jumpToDiscoverView",function(t){e&&e(t)})},jumpToAutoInvest:function(e){this.bridge.callHandler("jumpToAutoInvest",function(t){e&&e(t)})},authenticated:function(t,i){var a=this._setData(t,i);this.bridge.callHandler("authenticated",a.post,function(t){var i=e.filterJSON(t);a.callback&&a.callback(i)})},shareData:function(e){this.bridge.registerHandler("shareData",function(t,i){i(e)})},touchShare:function(t,i){var a=this._setData(t,i);this.bridge.callHandler("touchShare",a.post,function(t){var i=e.filterJSON(t);a.callback&&a.callback(i)})},shareStatus:function(t){this.bridge.registerHandler("shareStatus",function(i,a){var n=e.filterJSON(i);t&&t(n)})},sendUserInfo:function(t,i){var a=this._setData(t,i);this.bridge.callHandler("sendUserInfo",{},function(t){var i=e.filterJSON(t);a.callback&&a.callback(i)})},rechargeApp:function(e,t){var i=this._setData(e,t);this.bridge.callHandler("rechargeApp",i.post,function(e){i.callback&&i.callback(e)})},jumpToAccount:function(e){this.bridge.callHandler("jumpToAccount",function(t){e&&e(t)})},touchClose:function(e){this.bridge.callHandler("touchClose",function(t){e&&e(t)})},jumpToOnLineAirlines:function(e){this.bridge.callHandler("jumpToOnLineAirlines",function(t){e&&e(t)})}};var n=void 0;return{ready:i}}();t.a=a},959:function(e,t){e.exports={isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},977:function(e,t,i){"use strict";var a=i(136),n=i.n(a),s=i(134),o=i.n(s),r=i(42),l=i.n(r),c=i(43),h=i.n(c),p=i(45),u=i.n(p),d=i(44),m=i.n(d),f=i(3),g=i.n(f),v=i(94),y=(i.n(v),i(210),i(998)),b=i.n(y),w=i(997),E=i(996),k=function(e){function t(e){l()(this,t);var i=u()(this,(t.__proto__||o()(t)).call(this,e));return i.props.class.push("g-core-image-upload-btn"),i.state={formID:"g-core-upload-input-"+Math.floor(1e4*Math.random()),uploading:!1,hasImage:!1,class:i.props.class.join(" "),image:{src:"http://img1.vued.vanthink.cn/vuedcb0efb21e5f2ca013ca1480198bbf4b3.png",width:0,height:0}},i}return m()(t,e),h()(t,[{key:"render",value:function(){return g.a.createElement("div",{className:this.state.class,id:this.state.formID},this.props.text,g.a.createElement("form",{className:"g-core-image-upload-form",method:"post",encType:"multipart/form-data",action:"",style:{display:"block",cursor:"pointer",position:"absolute",left:0,top:0,width:1242,height:61,opacity:0,margin:0,padding:0,overflow:"hidden"}},g.a.createElement("input",{disabled:this.state.uploading,onChange:this.change.bind(this),name:this.props.inputOfFile,type:"file",accept:this.props.inputAccept,style:{width:"100%",height:"100%"}})),g.a.createElement("div",{className:"g-core-image-corp-container",style:{display:this.state.hasImage?"block":"none"}},g.a.createElement("div",{className:"image-aside"},g.a.createElement("div",{className:"g-crop-image-box"},g.a.createElement("div",{className:"g-crop-image-principal"},g.a.createElement("img",{src:this.state.image.src,style:{width:this.state.image.width,height:this.state.image.height}}),g.a.createElement("div",{className:"select-recorte",onMouseDown:this.drag.bind(this),onTouchStart:this.drag.bind(this),style:{width:100,height:100}},g.a.createElement("div",{className:"g-s-resize"}),g.a.createElement("div",{className:"g-e-resize"}),g.a.createElement("div",{className:"g-resize",onTouchStart:this.resize.bind(this),onMouseDown:this.resize.bind(this)}))))),g.a.createElement("div",{className:"info-aside"},g.a.createElement("div",{className:"btn-groups"},g.a.createElement("div",{onClick:this.cancel.bind(this),className:"btn btn-cancel"},this.props.cropBtn.cancel),g.a.createElement("div",{onClick:this.doCrop.bind(this),className:"btn btn-upload"},this.props.cropBtn.ok)))))}},{key:"__find",value:function(e){return document.getElementById(this.state.formID).querySelector(e)}},{key:"change",value:function(e){var t=this.__find("input").value.replace(/C:\\fakepath\\/i,""),i=t.substring(t.lastIndexOf(".")+1),a=this.props.extensions;if(a.length>1){if(!new RegExp("^["+a.join("|")+"]+$","i").test(i))return this.props.errorHandle("TYPE ERROR")}if(e.target.files[0].size>this.props.maxFileSize){var n;return parseInt(this.maxFileSize/1024/1024)>0?n=(this.maxFileSize/1024/1024).toFixed(2)+"MB":parseInt(this.maxFileSize/1024)>0&&(n=(this.maxFileSize/1024).toFixed(2)+"kB"),void this.props.errorHandle("FILE IS TOO LARGER THAN THE MAX VALUE "+n)}if(this.files=e.target.files,this.props.crop)return void this.__showImage();this.props.imageChanged(this.files[0]),this.tryAjaxUpload()}},{key:"__showImage",value:function(){document.body.style.overflow="hidden",this.setState({hasImage:!0}),this.__readFiles()}},{key:"__readFiles",value:function(){var e=new FileReader,t=this;e.onload=function(e){var i=e.target.result;t.__initImage(i)},e.readAsDataURL(this.files[0])}},{key:"__initImage",value:function(e){var t=new Image,i=this;t.src=e,t.onload=function(){i.setState({image:{src:e,width:t.naturalWidth,height:t.naturalHeight}}),i.__reseyLayout(),i.__initCropBox()}}},{key:"__initCropBox",value:function(){var e=this.__find(".select-recorte"),t=this.__find(".g-crop-image-principal"),i=parseInt(t.style.width),a=parseInt(t.style.height),n=this.props.cropRatio.split(":")[0],s=this.props.cropRatio.split(":")[1],o=i/100*80,r=o/n*s;e.style.cssText="width:"+o+"px;height: "+r+"px;left:"+(i-o)/2+"px;top:"+(a-r)/2+"px;",r>a&&(r=a/100*80,o=r*n/s,e.style.cssText="width:"+o+"px;height:"+r+"px;left:"+(i-o)/2+"px;top:"+(a-r)/2+"px")}},{key:"__reseyLayout",value:function(){var e=window.innerHeight-80,t=window.innerWidth-60,i=this.state.image.width,a=this.state.image.height,n=i/a,s=t/e,o=this.__find(".g-crop-image-principal");n>s?(this.setState({image:{src:this.state.image.src,width:t,height:t/n}}),o.style.cssText="width:"+t+"px;height:"+t/n+"px;margin-top:"+(e-t/n)/2+"px"):(this.setState({image:{src:this.state.image.src,width:e*n,height:e}}),o.style.cssText="width:"+e*n+"px;height:"+e+"px;margin-left:"+(t-e*n)/2+"px;"),this.imgChangeRatio=i/this.state.image.width}},{key:"doCrop",value:function(e){var t=e.target;t.value=t.value+"...",t.disabled=!0,"object"!==n()(this.data)&&(this.data={});var i=this.__find(".select-recorte");this.data.postionX=Math.ceil(parseInt(window.getComputedStyle(i).left)*this.imgChangeRatio),this.data.postionY=Math.ceil(parseInt(window.getComputedStyle(i).top)*this.imgChangeRatio),this.data.width=Math.ceil(parseInt(window.getComputedStyle(i).width)*this.imgChangeRatio),this.data.height=Math.ceil(parseInt(window.getComputedStyle(i).height)*this.imgChangeRatio),this.tryAjaxUpload(function(){t.value=t.value.replace("...",""),t.disabled=!1})}},{key:"cancel",value:function(){this.files="",this.setState({hasImage:!1}),this.__find("input").value="",document.body.removeAttribute("style")}},{key:"tryAjaxUpload",value:function(e){for(var t=this,i=new FormData,a=0;a<this.files.length;a++)i.append(t.props.inputOfFile,this.files[a]);if("object"===n()(this.data))for(var s in this.data)void 0!==this.data[s]&&i.append(s,this.data[s]);if(this.props.imageUploading(this.files),!this.props.isXhr)return this.props.crop&&this.setState({hasImage:!1}),"function"==typeof e&&e();b()("POST",this.props.url,this.props.header,i,function(i){"function"==typeof e&&e(),t.uploading=!1,t.props.crop&&t.cancel(),t.props.imageUploaded(i)})}},{key:"resize",value:function(e){var t=e.target.parentElement,i=this.__find(".g-crop-image-principal");new w.a(t,i,this.props.cropRatio,e)}},{key:"drag",value:function(e){var t=e.target,i=this.__find(".g-crop-image-principal");new E.a(t,i,e)}}]),t}(f.Component);k.propTypes={url:g.a.PropTypes.string,text:g.a.PropTypes.string,inputAccept:g.a.PropTypes.string,inputOfFile:g.a.PropTypes.string,class:g.a.PropTypes.array},k.defaultProps={url:"",text:"upload",inputAccept:"image/jpg,image/jpeg,image/png,image/gif",inputOfFile:"file",crop:!1,cropBtn:{ok:"Save",cancel:"Cancel"},class:[],extensions:[],cropRatio:"1:1",maxFileSize:10485760,isXhr:!0,header:null,imageUploaded:function(e){},imageUploading:function(e){},imageChanged:function(){},errorHandle:function(e){}},t.a=k},993:function(e,t,i){"use strict";var a=i(76),n=i.n(a),s=i(134),o=i.n(s),r=i(42),l=i.n(r),c=i(43),h=i.n(c),p=i(45),u=i.n(p),d=i(44),m=i.n(d),f=i(3),g=i.n(f),v=i(212),y=i(1008),b=i.n(y),w=i(977),E=i(210),k=function(e){function t(e){l()(this,t);var i=u()(this,(t.__proto__||o()(t)).call(this,e));return i.handleRes=i.handleRes.bind(i),i.imageChanged=i.imageChanged.bind(i),i.imageUploading=i.imageUploading.bind(i),i}return m()(t,e),h()(t,[{key:"handleRes",value:function(e){var t=this.props.dispatch,a=n()({},this.props.userinfo);e.data&&(a.head_img=e.data.picUrl,i.i(E.updateBbsUserHeadimg)(e.data.picUrl).then(function(e){e.result&&t({type:"change user info",userinfo:a})})),e.error_code&&this.Toast.show(e.error_code.error.message),this.props.dispatch({type:"loading hidden"})}},{key:"imageChanged",value:function(){}},{key:"imageUploading",value:function(){this.props.dispatch({type:"loading show"})}},{key:"render",value:function(){var e=this.props.userinfo;return g.a.createElement("div",{className:b.a.container},g.a.createElement("div",{className:b.a.user},g.a.createElement("div",{className:b.a["user-left"]},g.a.createElement(w.a,{text:"",className:"pure-button",crop:"server",inputOfFile:"img",cropBtn:{ok:"选取",cancel:"取消"},url:E.imgUpload,imageChanged:this.imageChanged,imageUploading:this.imageUploading,imageUploaded:this.handleRes}),g.a.createElement("img",{className:b.a.avatar,src:e.head_img})),g.a.createElement("div",{className:b.a["user-right"]},g.a.createElement("h1",{className:b.a.nickname},e.nickname),g.a.createElement("div",{className:b.a["edit-info"]},g.a.createElement("span",null,"编辑资料")))),g.a.createElement("div",{className:b.a.info},g.a.createElement("div",{className:b.a.item},g.a.createElement("div",{className:b.a.num},e.userZanNum),g.a.createElement("div",{className:b.a.title},g.a.createElement("span",null,"收到的赞"))),g.a.createElement("div",{className:b.a.item},g.a.createElement("div",{className:b.a.num},e.userCommentNum),g.a.createElement("div",{className:b.a.title},g.a.createElement("span",null,"收到的评论"))),g.a.createElement("div",{className:b.a.item},g.a.createElement("div",{className:b.a.num},e.userThreadCollectionNum),g.a.createElement("div",{className:b.a.title},g.a.createElement("span",null,"被收藏")))))}}]),t}(f.Component);t.a=i.i(v.b)(function(e){return e.user})(k)},994:function(e,t,i){"use strict";var a=i(134),n=i.n(a),s=i(42),o=i.n(s),r=i(43),l=i.n(r),c=i(45),h=i.n(c),p=i(44),u=i.n(p),d=i(3),m=i.n(d),f=i(93),g=i.n(f),v=i(1009),y=i.n(v),b=function(e){function t(){o()(this,t);var e=h()(this,(t.__proto__||n()(t)).call(this));return e.state={menu:[{name:"消息提醒",icon:"message",mark:!0},{name:"我的收藏",icon:"collect"},{name:"我的帖子",icon:"topic"},{name:"我的评论",icon:"comment"},{name:"我的任务",icon:"task",mark:!0}]},e}return u()(t,e),l()(t,[{key:"render",value:function(){var e=this.state.menu;return m.a.createElement("div",{className:g()(y.a.menu)},e.map(function(e,t){return m.a.createElement("div",{key:t,className:y.a.item},m.a.createElement("span",{className:g()(y.a.icon,y.a[e.icon])}),m.a.createElement("span",{className:y.a["menu-name"]},e.name),e.mark&&m.a.createElement("span",{className:y.a.mark}),m.a.createElement("span",{className:y.a.arrows}))}))}}]),t}(d.Component);t.a=b},995:function(e,t,i){"use strict";var a=i(134),n=i.n(a),s=i(42),o=i.n(s),r=i(43),l=i.n(r),c=i(45),h=i.n(c),p=i(44),u=i.n(p),d=i(3),m=i.n(d),f=i(1010),g=i.n(f),v=i(210),y=i(898),b=function(e){function t(){o()(this,t);var e=h()(this,(t.__proto__||n()(t)).call(this));return e.toLogin=e.toLogin.bind(e),e.toRegister=e.toRegister.bind(e),e}return u()(t,e),l()(t,[{key:"toLogin",value:function(){y.a.ready({app:function(e){e.loginApp({refresh:1,url:""})},other:function(){window.location.href=v.currentHost+"/wechat/verify?next=/bbs/mine?source=app"}})}},{key:"toRegister",value:function(){y.a.ready({app:function(e){e.registerApp({refresh:1,url:""})},other:function(){window.location.href=v.currentHost+"/wechat/verify?next=/bbs/mine?source=app"}})}},{key:"render",value:function(){return m.a.createElement("div",{className:g.a.container},m.a.createElement("div",{className:g.a.btn},m.a.createElement("span",{onClick:this.toLogin},"登录"),m.a.createElement("span",null,"/"),m.a.createElement("span",{onClick:this.toRegister},"注册")),m.a.createElement("div",{className:g.a.movement},m.a.createElement("div",null),m.a.createElement("div",null)))}}]),t}(d.Component);t.a=b},996:function(e,t,i){"use strict";var a=i(42),n=i.n(a),s=i(43),o=i.n(s),r=i(959),l=i.n(r),c=l.a.isMobile,h=void 0,p=void 0,u=function(){function e(t,i,a){n()(this,e);var s=this;if(this.el=t,this.container=i,this.coor={x:(c?a.touches[0].clientX:a.clientX)-t.offsetLeft-t.parentElement.offsetLeft-document.getElementsByClassName("image-aside")[0].offsetLeft,y:(c?a.touches[0].clientY:a.clientY)-t.offsetTop-t.parentElement.offsetTop-document.getElementsByClassName("image-aside")[0].offsetTop,posX:c?a.touches[0].clientX:a.clientX,posy:c?a.touches[0].clientY:a.clientY,maxLeft:parseInt(this.container.style.width)-parseInt(this.el.style.width),maxTop:parseInt(this.container.style.height)-parseInt(this.el.style.height)},h=function(e){s.move(e)},p=function(e){s.stopMove(e)},c)return document.addEventListener("touchmove",h,!1),void document.addEventListener("touchend",p,!1);document.addEventListener("mousemove",h,!1),document.addEventListener("mouseup",p,!1)}return o()(e,[{key:"move",value:function(e){if(this.el){var t=c?e.changedTouches[0].clientX:e.clientX,i=c?e.changedTouches[0].clientY:e.clientY,a=t-this.el.parentElement.offsetLeft-document.getElementsByClassName("image-aside")[0].offsetLeft-this.coor.x,n=i-this.el.parentElement.offsetTop-document.getElementsByClassName("image-aside")[0].offsetTop-this.coor.y;a<=0&&(a=0),a>=this.coor.maxLeft&&(a=this.coor.maxLeft),n<=0&&(n=0),n>=this.coor.maxTop&&(n=this.coor.maxTop),this.el.style.left=a+"px",this.el.style.top=n+"px"}}},{key:"stopMove",value:function(){if(this.el=null,c)return document.removeEventListener("touchmove",h,!1),void document.removeEventListener("touchend",p,!1);document.removeEventListener("mousemove",h,!1),document.removeEventListener("mouseup",p,!1)}}]),e}();t.a=u},997:function(e,t,i){"use strict";var a=i(42),n=i.n(a),s=i(43),o=i.n(s),r=i(959),l=i.n(r),c=void 0,h=void 0,p=l.a.isMobile,u=document.body.offsetWidth,d=document.body.offsetHeight,m=function(){function e(t,i,a,s){n()(this,e),s.stopPropagation();var o=this;this.coor={x:p?s.touches[0].clientX:s.clientX,y:p?s.touches[0].clientY:s.clientY,w:parseInt(window.getComputedStyle(t).width,10),h:parseInt(window.getComputedStyle(t).height,10)},this.splitX=a.split(":")[0],this.splitY=a.split(":")[1],this.el=t,this.container=i,c=function(e){o.drag(e)},h=function(e){o.stopDrag(e)},p&&(document.addEventListener("touchmove",c,!1),document.addEventListener("touchend",h,!1)),document.addEventListener("mousemove",c,!1),document.addEventListener("mouseup",h,!1)}return o()(e,[{key:"drag",value:function(e){if(this.el){var t=this.container,i=parseInt(window.getComputedStyle(t).width),a=parseInt(window.getComputedStyle(t).height),n=document.querySelector(".info-aside"),s=u-i,o=d-a-window.getComputedStyle(n).height,r=p?e.changedTouches[0].clientX:e.clientX,l=p?e.changedTouches[0].clientY:e.clientY;this.splitX>this.splitY?parseInt(r)<=s/2+i&&(parseInt(this.el.offsetWidth)>=i&&(this.el.style.width=window.getComputedStyle(t).width),this.el.style.width=this.coor.w+(p?e.changedTouches[0].clientX:e.clientX)-this.coor.x+"px",this.el.style.height=parseInt(this.el.offsetWidth)*(this.splitY/this.splitX)+"px",i>a?parseInt(this.el.offsetWidth)>=parseInt(window.getComputedStyle(t).height)&&(this.el.style.height=window.getComputedStyle(t).height,this.el.style.width=parseInt(window.getComputedStyle(t).height)*(this.splitX/this.splitY)+"px"):i<a?parseInt(this.el.offsetWidth)>=i&&(this.el.style.width=window.getComputedStyle(t).width,this.el.style.height=i*(this.splitY/this.splitX)+"px"):parseInt(this.el.offsetHeight)>=i&&(this.el.style.width=i,this.el.style.height=i*(this.splitY/this.splitX)+"px")):this.splitX<this.splitY?parseInt(l)<=o/2+a+window.getComputedStyle(n).height&&(this.el.style.height=this.coor.h+(p?e.changedTouches[0].clientY:e.clientY)-this.coor.y+"px",this.el.style.width=parseInt(this.el.style.height)*(this.splitX/this.splitY)+"px",i>a?parseInt(this.el.offsetHeight)>=a&&(this.el.style.height=a,this.el.style.width=a*(this.splitX/this.splitY)+"px"):parseInt(this.el.offsetWidth)>=i&&(this.el.style.width=i,this.el.style.height=i*(this.splitY/this.splitX)+"px")):parseInt(r)<=s/2+i&&(this.el.style.width=this.coor.w+(p?e.changedTouches[0].clientX:e.clientX)-this.coor.x+"px",this.el.style.height=this.el.style.width,i>a?parseInt(this.el.offsetHeight)>=a&&(this.el.style.height=a,this.el.style.width=a):i<a?parseInt(this.el.offsetWidth)>=i&&(this.el.style.width=i,this.el.style.height=i):parseInt(this.el.offsetWidth)>=i&&(this.el.style.width=this.el.style.height=i))}}},{key:"stopDrag",value:function(){this.el=null,p&&(document.removeEventListener("touchmove",c,!1),document.removeEventListener("touchend",h,!1)),document.removeEventListener("mousemove",c,!1),document.removeEventListener("mouseup",h,!1)}}]),e}();t.a=m},998:function(e,t){e.exports=function(e,t,i,a,n,s){function o(e){for(var t={},i=/([a-z-]+):\s?(.*);?/gi,a=void 0;a===i.exec(e);)t[a[1]]=a[2];return t}var r=new XMLHttpRequest,l=s||function(){},c=!1;"blob"===e&&(c=e,e="GET"),e=e.toUpperCase(),r.onload=function(){var t=r.response;try{t=JSON.parse(r.responseText)}catch(e){401===r.status&&(t=l("access_denied",r.statusText))}var i=o(r.getAllResponseHeaders());i.statusCode=r.status,n(t||("GET"===e?l("empty_response","Could not get resource"):{}),i)},r.onerror=function(){var e=r.responseText;try{e=JSON.parse(r.responseText)}catch(e){}n(e||l("access_denied","Could not get resource"))};var h=void 0;if("GET"===e||"DELETE"===e)a=null;else if(a&&"string"!=typeof a&&!(a instanceof FormData)&&!(a instanceof File)&&!(a instanceof Blob)){var p=new FormData;for(h in a)a.hasOwnProperty(h)&&(a[h]instanceof HTMLInputElement?"files"in a[h]&&a[h].files.length>0&&p.append(h,a[h].files[0]):a[h]instanceof Blob?p.append(h,a[h],a.name):p.append(h,a[h]));a=p}if(r.open(e,t,!0),c&&("responseType"in r?r.responseType=c:r.overrideMimeType("text/plain; charset=x-user-defined")),i)for(h in i)r.setRequestHeader(h,i[h]);return r.send(a),r}}});