
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index/index","pages/my/my/my","pages/index/publishArticles/publishArticles","pages/index/releaseVideo/releaseVideo","pages/index/successPage/successPage","pages/my/user_info/user_info","pages/my/add_tag/add_tag","pages/my/user_id/user_id","pages/my/work_certificate/work_certificate","pages/my/fans/fans","pages/my/list_all/list_all","pages/index/article_details/article_details","pages/index/video_details/video_details","pages/index/question_and_answer/question_and_answer"],"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","navigationBarTitleText":"金沙滩","navigationBarBackgroundColor":"#333399","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#7A7E83","selectedColor":"#003399","borderStyle":"black","backgroundColor":"#ffffff","iconWidth":"25","list":[{"pagePath":"pages/index/index/index","iconPath":"static/images/index.png","selectedIconPath":"static/images/indexActive.png","text":"首页"},{"pagePath":"pages/my/my/my","iconPath":"static/images/my.png","selectedIconPath":"static/images/myActive.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"goldenBeachServer","compilerVersion":"2.8.8","entryPagePath":"pages/index/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/my/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/index/publishArticles/publishArticles","meta":{},"window":{}},{"path":"/pages/index/releaseVideo/releaseVideo","meta":{},"window":{}},{"path":"/pages/index/successPage/successPage","meta":{},"window":{}},{"path":"/pages/my/user_info/user_info","meta":{},"window":{}},{"path":"/pages/my/add_tag/add_tag","meta":{},"window":{}},{"path":"/pages/my/user_id/user_id","meta":{},"window":{}},{"path":"/pages/my/work_certificate/work_certificate","meta":{},"window":{}},{"path":"/pages/my/fans/fans","meta":{},"window":{}},{"path":"/pages/my/list_all/list_all","meta":{},"window":{}},{"path":"/pages/index/article_details/article_details","meta":{},"window":{}},{"path":"/pages/index/video_details/video_details","meta":{},"window":{}},{"path":"/pages/index/question_and_answer/question_and_answer","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
