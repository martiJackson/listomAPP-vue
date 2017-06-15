	// 地图2
!function(){"use strict";function a(a){return a.replace(/,/g,".").replace(/[^0-9\.]/g,"")}function b(b){return parseFloat(a(b))>=10}var c,d={bridge:null,version:"0.0.0",disabled:null,outdated:null,ready:null},e={},f=0,g={},h=0,i={},j=null,k=null,l=function(){var a,b,c,d,e="ZeroClipboard.swf";if(document.currentScript&&(d=document.currentScript.src));else{var f=document.getElementsByTagName("script");if("readyState"in f[0])for(a=f.length;a--&&("interactive"!==f[a].readyState||!(d=f[a].src)););else if("loading"===document.readyState)d=f[f.length-1].src;else{for(a=f.length;a--;){if(c=f[a].src,!c){b=null;break}if(c=c.split("#")[0].split("?")[0],c=c.slice(0,c.lastIndexOf("/")+1),null==b)b=c;else if(b!==c){b=null;break}}null!==b&&(d=b)}}return d&&(d=d.split("#")[0].split("?")[0],e=d.slice(0,d.lastIndexOf("/")+1)+e),e}(),m=function(){var a=/\-([a-z])/g,b=function(a,b){return b.toUpperCase()};return function(c){return c.replace(a,b)}}(),n=function(a,b){var c,d,e;return window.getComputedStyle?c=window.getComputedStyle(a,null).getPropertyValue(b):(d=m(b),c=a.currentStyle?a.currentStyle[d]:a.style[d]),"cursor"!==b||c&&"auto"!==c||(e=a.tagName.toLowerCase(),"a"!==e)?c:"pointer"},o=function(a){a||(a=window.event);var b;this!==window?b=this:a.target?b=a.target:a.srcElement&&(b=a.srcElement),I.activate(b)},p=function(a,b,c){a&&1===a.nodeType&&(a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c))},q=function(a,b,c){a&&1===a.nodeType&&(a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c))},r=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)||a.classList.add(b),a;if(b&&"string"==typeof b){var c=(b||"").split(/\s+/);if(1===a.nodeType)if(a.className){for(var d=" "+a.className+" ",e=a.className,f=0,g=c.length;g>f;f++)d.indexOf(" "+c[f]+" ")<0&&(e+=" "+c[f]);a.className=e.replace(/^\s+|\s+$/g,"")}else a.className=b}return a},s=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)&&a.classList.remove(b),a;if(b&&"string"==typeof b||void 0===b){var c=(b||"").split(/\s+/);if(1===a.nodeType&&a.className)if(b){for(var d=(" "+a.className+" ").replace(/[\n\t]/g," "),e=0,f=c.length;f>e;e++)d=d.replace(" "+c[e]+" "," ");a.className=d.replace(/^\s+|\s+$/g,"")}else a.className=""}return a},t=function(){var a,b,c,d=1;return"function"==typeof document.body.getBoundingClientRect&&(a=document.body.getBoundingClientRect(),b=a.right-a.left,c=document.body.offsetWidth,d=Math.round(b/c*100)/100),d},u=function(a,b){var c={left:0,top:0,width:0,height:0,zIndex:A(b)-1};if(a.getBoundingClientRect){var d,e,f,g=a.getBoundingClientRect();"pageXOffset"in window&&"pageYOffset"in window?(d=window.pageXOffset,e=window.pageYOffset):(f=t(),d=Math.round(document.documentElement.scrollLeft/f),e=Math.round(document.documentElement.scrollTop/f));var h=document.documentElement.clientLeft||0,i=document.documentElement.clientTop||0;c.left=g.left+d-h,c.top=g.top+e-i,c.width="width"in g?g.width:g.right-g.left,c.height="height"in g?g.height:g.bottom-g.top}return c},v=function(a,b){var c=null==b||b&&b.cacheBust===!0&&b.useNoCache===!0;return c?(-1===a.indexOf("?")?"?":"&")+"noCache="+(new Date).getTime():""},w=function(a){var b,c,d,e=[],f=[],g=[];if(a.trustedOrigins&&("string"==typeof a.trustedOrigins?f.push(a.trustedOrigins):"object"==typeof a.trustedOrigins&&"length"in a.trustedOrigins&&(f=f.concat(a.trustedOrigins))),a.trustedDomains&&("string"==typeof a.trustedDomains?f.push(a.trustedDomains):"object"==typeof a.trustedDomains&&"length"in a.trustedDomains&&(f=f.concat(a.trustedDomains))),f.length)for(b=0,c=f.length;c>b;b++)if(f.hasOwnProperty(b)&&f[b]&&"string"==typeof f[b]){if(d=D(f[b]),!d)continue;if("*"===d){g=[d];break}g.push.apply(g,[d,"//"+d,window.location.protocol+"//"+d])}return g.length&&e.push("trustedOrigins="+encodeURIComponent(g.join(","))),"string"==typeof a.jsModuleId&&a.jsModuleId&&e.push("jsModuleId="+encodeURIComponent(a.jsModuleId)),e.join("&")},x=function(a,b,c){if("function"==typeof b.indexOf)return b.indexOf(a,c);var d,e=b.length;for("undefined"==typeof c?c=0:0>c&&(c=e+c),d=c;e>d;d++)if(b.hasOwnProperty(d)&&b[d]===a)return d;return-1},y=function(a){if("string"==typeof a)throw new TypeError("ZeroClipboard doesn't accept query strings.");return a.length?a:[a]},z=function(a,b,c,d){d?window.setTimeout(function(){a.apply(b,c)},0):a.apply(b,c)},A=function(a){var b,c;return a&&("number"==typeof a&&a>0?b=a:"string"==typeof a&&(c=parseInt(a,10))&&!isNaN(c)&&c>0&&(b=c)),b||("number"==typeof L.zIndex&&L.zIndex>0?b=L.zIndex:"string"==typeof L.zIndex&&(c=parseInt(L.zIndex,10))&&!isNaN(c)&&c>0&&(b=c)),b||0},B=function(a,b){if(a&&b!==!1&&"undefined"!=typeof console&&console&&(console.warn||console.log)){var c="`"+a+"` is deprecated. See docs for more info:\n    https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/instructions.md#deprecations";console.warn?console.warn(c):console.log(c)}},C=function(){var a,b,c,d,e,f,g=arguments[0]||{};for(a=1,b=arguments.length;b>a;a++)if(null!=(c=arguments[a]))for(d in c)if(c.hasOwnProperty(d)){if(e=g[d],f=c[d],g===f)continue;void 0!==f&&(g[d]=f)}return g},D=function(a){if(null==a||""===a)return null;if(a=a.replace(/^\s+|\s+$/g,""),""===a)return null;var b=a.indexOf("//");a=-1===b?a:a.slice(b+2);var c=a.indexOf("/");return a=-1===c?a:-1===b||0===c?null:a.slice(0,c),a&&".swf"===a.slice(-4).toLowerCase()?null:a||null},E=function(){var a=function(a,b){var c,d,e;if(null!=a&&"*"!==b[0]&&("string"==typeof a&&(a=[a]),"object"==typeof a&&"length"in a))for(c=0,d=a.length;d>c;c++)if(a.hasOwnProperty(c)&&(e=D(a[c]))){if("*"===e){b.length=0,b.push("*");break}-1===x(e,b)&&b.push(e)}},b={always:"always",samedomain:"sameDomain",never:"never"};return function(c,d){var e,f=d.allowScriptAccess;if("string"==typeof f&&(e=f.toLowerCase())&&/^always|samedomain|never$/.test(e))return b[e];var g=D(d.moviePath);null===g&&(g=c);var h=[];a(d.trustedOrigins,h),a(d.trustedDomains,h);var i=h.length;if(i>0){if(1===i&&"*"===h[0])return"always";if(-1!==x(c,h))return 1===i&&c===g?"sameDomain":"always"}return"never"}}(),F=function(a){if(null==a)return[];if(Object.keys)return Object.keys(a);var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b},G=function(a){if(a)for(var b in a)a.hasOwnProperty(b)&&delete a[b];return a},H=function(){var a=!1;if("boolean"==typeof d.disabled)a=d.disabled===!1;else{if("function"==typeof ActiveXObject)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(a=!0)}catch(b){}!a&&navigator.mimeTypes["application/x-shockwave-flash"]&&(a=!0)}return a},I=function(a,b){return this instanceof I?(this.id=""+f++,g[this.id]={instance:this,elements:[],handlers:{}},a&&this.clip(a),"undefined"!=typeof b&&(B("new ZeroClipboard(elements, options)",L.debug),I.config(b)),this.options=I.config(),"boolean"!=typeof d.disabled&&(d.disabled=!H()),d.disabled===!1&&d.outdated!==!0&&null===d.bridge&&(d.outdated=!1,d.ready=!1,M()),void 0):new I(a,b)};I.prototype.setText=function(a){return a&&""!==a&&(e["text/plain"]=a,d.ready===!0&&d.bridge&&d.bridge.setText(a)),this},I.prototype.setSize=function(a,b){return d.ready===!0&&d.bridge&&d.bridge.setSize(a,b),this};var J=function(a){d.ready===!0&&d.bridge&&d.bridge.setHandCursor(a)};I.prototype.destroy=function(){this.unclip(),this.off(),delete g[this.id]};var K=function(){var a,b,c,d=[],e=F(g);for(a=0,b=e.length;b>a;a++)c=g[e[a]].instance,c&&c instanceof I&&d.push(c);return d};I.version="1.3.2";var L={swfPath:l,trustedDomains:window.location.host?[window.location.host]:[],cacheBust:!0,forceHandCursor:!1,zIndex:999999999,debug:!0,title:null,autoActivate:!0};I.config=function(a){"object"==typeof a&&null!==a&&C(L,a);{if("string"!=typeof a||!a){var b={};for(var c in L)L.hasOwnProperty(c)&&(b[c]="object"==typeof L[c]&&null!==L[c]?"length"in L[c]?L[c].slice(0):C({},L[c]):L[c]);return b}if(L.hasOwnProperty(a))return L[a]}},I.destroy=function(){I.deactivate();for(var a in g)if(g.hasOwnProperty(a)&&g[a]){var b=g[a].instance;b&&"function"==typeof b.destroy&&b.destroy()}var c=N(d.bridge);c&&c.parentNode&&(c.parentNode.removeChild(c),d.ready=null,d.bridge=null)},I.activate=function(a){c&&(s(c,L.hoverClass),s(c,L.activeClass)),c=a,r(a,L.hoverClass),O();var b=L.title||a.getAttribute("title");if(b){var e=N(d.bridge);e&&e.setAttribute("title",b)}var f=L.forceHandCursor===!0||"pointer"===n(a,"cursor");J(f)},I.deactivate=function(){var a=N(d.bridge);a&&(a.style.left="0px",a.style.top="-9999px",a.removeAttribute("title")),c&&(s(c,L.hoverClass),s(c,L.activeClass),c=null)};var M=function(){var a,b,c=document.getElementById("global-zeroclipboard-html-bridge");if(!c){var e=I.config();e.jsModuleId="string"==typeof j&&j||"string"==typeof k&&k||null;var f=E(window.location.host,L),g=w(e),h=L.moviePath+v(L.moviePath,L),i='      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="'+h+'"/>         <param name="allowScriptAccess" value="'+f+'"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="'+g+'"/>         <embed src="'+h+'"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="'+f+'"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="'+g+'"           scale="exactfit">         </embed>       </object>';c=document.createElement("div"),c.id="global-zeroclipboard-html-bridge",c.setAttribute("class","global-zeroclipboard-container"),c.style.position="absolute",c.style.left="0px",c.style.top="-9999px",c.style.width="15px",c.style.height="15px",c.style.zIndex=""+A(L.zIndex),document.body.appendChild(c),c.innerHTML=i}a=document["global-zeroclipboard-flash-bridge"],a&&(b=a.length)&&(a=a[b-1]),d.bridge=a||c.children[0].lastElementChild},N=function(a){for(var b=/^OBJECT|EMBED$/,c=a&&a.parentNode;c&&b.test(c.nodeName)&&c.parentNode;)c=c.parentNode;return c||null},O=function(){if(c){var a=u(c,L.zIndex),b=N(d.bridge);b&&(b.style.top=a.top+"px",b.style.left=a.left+"px",b.style.width=a.width+"px",b.style.height=a.height+"px",b.style.zIndex=a.zIndex+1),d.ready===!0&&d.bridge&&d.bridge.setSize(a.width,a.height)}return this};I.prototype.on=function(a,b){var c,e,f,h={},i=g[this.id]&&g[this.id].handlers;if("string"==typeof a&&a)f=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)a.hasOwnProperty(c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.on(c,a[c]);if(f&&f.length){for(c=0,e=f.length;e>c;c++)a=f[c].replace(/^on/,""),h[a]=!0,i[a]||(i[a]=[]),i[a].push(b);h.noflash&&d.disabled&&R.call(this,"noflash",{}),h.wrongflash&&d.outdated&&R.call(this,"wrongflash",{flashVersion:d.version}),h.load&&d.ready&&R.call(this,"load",{flashVersion:d.version})}return this},I.prototype.off=function(a,b){var c,d,e,f,h,i=g[this.id]&&g[this.id].handlers;if(0===arguments.length)f=F(i);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)a.hasOwnProperty(c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;d>c;c++)if(a=f[c].toLowerCase().replace(/^on/,""),h=i[a],h&&h.length)if(b)for(e=x(b,h);-1!==e;)h.splice(e,1),e=x(b,h,e);else i[a].length=0;return this},I.prototype.handlers=function(a){var b,c=null,d=g[this.id]&&g[this.id].handlers;if(d){if("string"==typeof a&&a)return d[a]?d[a].slice(0):null;c={};for(b in d)d.hasOwnProperty(b)&&d[b]&&(c[b]=d[b].slice(0))}return c};var P=function(a,b,c,d){var e=g[this.id]&&g[this.id].handlers[a];if(e&&e.length){var f,h,i,j=b||this;for(f=0,h=e.length;h>f;f++)i=e[f],b=j,"string"==typeof i&&"function"==typeof window[i]&&(i=window[i]),"object"==typeof i&&i&&"function"==typeof i.handleEvent&&(b=i,i=i.handleEvent),"function"==typeof i&&z(i,b,c,d)}return this};I.prototype.clip=function(a){a=y(a);for(var b=0;b<a.length;b++)if(a.hasOwnProperty(b)&&a[b]&&1===a[b].nodeType){a[b].zcClippingId?-1===x(this.id,i[a[b].zcClippingId])&&i[a[b].zcClippingId].push(this.id):(a[b].zcClippingId="zcClippingId_"+h++,i[a[b].zcClippingId]=[this.id],L.autoActivate===!0&&p(a[b],"mouseover",o));var c=g[this.id].elements;-1===x(a[b],c)&&c.push(a[b])}return this},I.prototype.unclip=function(a){var b=g[this.id];if(b){var c,d=b.elements;a="undefined"==typeof a?d.slice(0):y(a);for(var e=a.length;e--;)if(a.hasOwnProperty(e)&&a[e]&&1===a[e].nodeType){for(c=0;-1!==(c=x(a[e],d,c));)d.splice(c,1);var f=i[a[e].zcClippingId];if(f){for(c=0;-1!==(c=x(this.id,f,c));)f.splice(c,1);0===f.length&&(L.autoActivate===!0&&q(a[e],"mouseover",o),delete a[e].zcClippingId)}}}return this},I.prototype.elements=function(){var a=g[this.id];return a&&a.elements?a.elements.slice(0):[]};var Q=function(a){var b,c,d,e,f,h=[];if(a&&1===a.nodeType&&(b=a.zcClippingId)&&i.hasOwnProperty(b)&&(c=i[b],c&&c.length))for(d=0,e=c.length;e>d;d++)f=g[c[d]].instance,f&&f instanceof I&&h.push(f);return h};L.hoverClass="zeroclipboard-is-hover",L.activeClass="zeroclipboard-is-active",L.trustedOrigins=null,L.allowScriptAccess=null,L.useNoCache=!0,L.moviePath="ZeroClipboard.swf",I.detectFlashSupport=function(){return B("ZeroClipboard.detectFlashSupport",L.debug),H()},I.dispatch=function(a,b){if("string"==typeof a&&a){var d=a.toLowerCase().replace(/^on/,"");if(d)for(var e=c?Q(c):K(),f=0,g=e.length;g>f;f++)R.call(e[f],d,b)}},I.prototype.setHandCursor=function(a){return B("ZeroClipboard.prototype.setHandCursor",L.debug),a="boolean"==typeof a?a:!!a,J(a),L.forceHandCursor=a,this},I.prototype.reposition=function(){return B("ZeroClipboard.prototype.reposition",L.debug),O()},I.prototype.receiveEvent=function(a,b){if(B("ZeroClipboard.prototype.receiveEvent",L.debug),"string"==typeof a&&a){var c=a.toLowerCase().replace(/^on/,"");c&&R.call(this,c,b)}},I.prototype.setCurrent=function(a){return B("ZeroClipboard.prototype.setCurrent",L.debug),I.activate(a),this},I.prototype.resetBridge=function(){return B("ZeroClipboard.prototype.resetBridge",L.debug),I.deactivate(),this},I.prototype.setTitle=function(a){if(B("ZeroClipboard.prototype.setTitle",L.debug),a=a||L.title||c&&c.getAttribute("title")){var b=N(d.bridge);b&&b.setAttribute("title",a)}return this},I.setDefaults=function(a){B("ZeroClipboard.setDefaults",L.debug),I.config(a)},I.prototype.addEventListener=function(a,b){return B("ZeroClipboard.prototype.addEventListener",L.debug),this.on(a,b)},I.prototype.removeEventListener=function(a,b){return B("ZeroClipboard.prototype.removeEventListener",L.debug),this.off(a,b)},I.prototype.ready=function(){return B("ZeroClipboard.prototype.ready",L.debug),d.ready===!0};var R=function(f,g){f=f.toLowerCase().replace(/^on/,"");var h=g&&g.flashVersion&&a(g.flashVersion)||null,i=c,j=!0;switch(f){case"load":if(h){if(!b(h))return R.call(this,"onWrongFlash",{flashVersion:h}),void 0;d.outdated=!1,d.ready=!0,d.version=h}break;case"wrongflash":h&&!b(h)&&(d.outdated=!0,d.ready=!1,d.version=h);break;case"mouseover":r(i,L.hoverClass);break;case"mouseout":L.autoActivate===!0&&I.deactivate();break;case"mousedown":r(i,L.activeClass);break;case"mouseup":s(i,L.activeClass);break;case"datarequested":var k=i.getAttribute("data-clipboard-target"),l=k?document.getElementById(k):null;if(l){var m=l.value||l.textContent||l.innerText;m&&this.setText(m)}else{var n=i.getAttribute("data-clipboard-text");n&&this.setText(n)}j=!1;break;case"complete":G(e)}var o=i,p=[this,g];return P.call(this,f,o,p,j)};"function"==typeof define&&define.amd?define(["require","exports","module"],function(a,b,c){return j=c&&c.id||null,I}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports?(k=module.id||null,module.exports=I):window.ZeroClipboard=I}();
!function(){
	var cities = {
		"100000": "",
		"110000": "",
		"120000": "",
		"130000": "130100,石家庄市,Shijiazhuang,114.502461,38.045474,0311;130200,唐山市,Tangshan,118.175393,39.635113,0315;130300,秦皇岛市,Qinhuangdao,119.586579,39.942531,0335;130400,邯郸市,Handan,114.490686,36.612273,0310;130500,邢台市,Xingtai,114.508851,37.0682,0319;130600,保定市,Baoding,115.482331,38.867657,0312;130700,张家口市,Zhangjiakou,114.884091,40.811901,0313;130800,承德市,Chengde,117.939152,40.976204,0314;130900,沧州市,Cangzhou,116.857461,38.310582,0317;131000,廊坊市,Langfang,116.713873,39.529244,0316;131100,衡水市,Hengshui,115.665993,37.735097,0318",
		"140000": "140100,太原市,Taiyuan,112.549248,37.857014,0351;140200,大同市,Datong,113.295259,40.09031,0352;140300,阳泉市,Yangquan,113.583285,37.861188,0353;140400,长治市,Changzhi,113.113556,36.191112,0355;140500,晋城市,Jincheng,112.851274,35.497553,0356;140600,朔州市,Shuozhou,112.433387,39.331261,0349;140700,晋中市,Jinzhong,112.736465,37.696495,0354;140800,运城市,Yuncheng,111.003957,35.022778,0359;140900,忻州市,Xinzhou,112.733538,38.41769,0350;141000,临汾市,Linfen,111.517973,36.08415,0357;141100,吕梁市,Lvliang,111.134335,37.524366,0358",
		"150000": "150100,呼和浩特市,Hohhot,111.670801,40.818311,0471;150200,包头市,Baotou,109.840405,40.658168,0472;150300,乌海市,Wuhai,106.825563,39.673734,0473;150400,赤峰市,Chifeng,118.956806,42.275317,0476;150500,通辽市,Tongliao,122.263119,43.617429,0475;150600,鄂尔多斯市,Ordos,109.99029,39.817179,0477;150700,呼伦贝尔市,Hulunber,119.758168,49.215333,0470;150800,巴彦淖尔市,Bayan Nur,107.416959,40.757402,0478;150900,乌兰察布市,Ulanqab,113.114543,41.034126,0474;152200,兴安盟,Hinggan,122.070317,46.076268,0482;152500,锡林郭勒盟,Xilin Gol,116.090996,43.944018,0479;152900,阿拉善盟,Alxa,105.706422,38.844814,0483",
		"210000": "210100,沈阳市,Shenyang,123.429096,41.796767,024;210200,大连市,Dalian,121.618622,38.91459,0411;210300,鞍山市,Anshan,122.995632,41.110626,0412;210400,抚顺市,Fushun,123.921109,41.875956,0413;210500,本溪市,Benxi,123.770519,41.297909,0414;210600,丹东市,Dandong,124.383044,40.124296,0415;210700,锦州市,Jinzhou,121.135742,41.119269,0416;210800,营口市,Yingkou,122.235151,40.667432,0417;210900,阜新市,Fuxin,121.648962,42.011796,0418;211000,辽阳市,Liaoyang,123.18152,41.269402,0419;211100,盘锦市,Panjin,122.06957,41.124484,0427;211200,铁岭市,Tieling,123.844279,42.290585,0410;211300,朝阳市,Chaoyang,120.451176,41.576758,0421;211400,葫芦岛市,Huludao,120.856394,40.755572,0429",
		"220000": "220100,长春市,Changchun,125.3245,43.886841,0431;220200,吉林市,Jilin,126.55302,43.843577,0432;220300,四平市,Siping,124.370785,43.170344,0434;220400,辽源市,Liaoyuan,125.145349,42.902692,0437;220500,通化市,Tonghua,125.936501,41.721177,0435;220600,白山市,Baishan,126.427839,41.942505,0439;220700,松原市,Songyuan,124.823608,45.118243,0438;220800,白城市,Baicheng,122.841114,45.619026,0436;222400,延边朝鲜族自治州,Yanbian,129.513228,42.904823,1433",
		"230000": "230100,哈尔滨市,Harbin,126.642464,45.756967,0451;230200,齐齐哈尔市,Qiqihar,123.953486,47.348079,0452;230300,鸡西市,Jixi,130.975966,45.300046,0467;230400,鹤岗市,Hegang,130.277487,47.332085,0468;230500,双鸭山市,Shuangyashan,131.157304,46.643442,0469;230600,大庆市,Daqing,125.11272,46.590734,0459;230700,伊春市,Yichun,128.899396,47.724775,0458;230800,佳木斯市,Jiamusi,130.361634,46.809606,0454;230900,七台河市,Qitaihe,131.015584,45.771266,0464;231000,牡丹江市,Mudanjiang,129.618602,44.582962,0453;231100,黑河市,Heihe,127.499023,50.249585,0456;231200,绥化市,Suihua,126.99293,46.637393,0455;232700,大兴安岭地区,Da Hinggan Ling,124.711526,52.335262,0457",
		"310000": "",
		"320000": "320100,南京市,Nanjing,118.767413,32.041544,025;320200,无锡市,Wuxi,120.301663,31.574729,0510;320300,徐州市,Xuzhou,117.184811,34.261792,0516;320400,常州市,Changzhou,119.946973,31.772752,0519;320500,苏州市,Suzhou,120.619585,31.299379,0512;320600,南通市,Nantong,120.864608,32.016212,0513;320700,连云港市,Lianyungang,119.178821,34.600018,0518;320800,淮安市,Huai'an,119.021265,33.597506,0517;320900,盐城市,Yancheng,120.139998,33.377631,0515;321000,扬州市,Yangzhou,119.421003,32.393159,0514;321100,镇江市,Zhenjiang,119.452753,32.204402,0511;321200,泰州市,Taizhou,119.915176,32.484882,0523;321300,宿迁市,Suqian,118.293328,33.945154,0527",
		"330000": "330100,杭州市,Hangzhou,120.153576,30.287459,0571;330200,宁波市,Ningbo,121.549792,29.868388,0574;330300,温州市,Wenzhou,120.672111,28.000575,0577;330400,嘉兴市,Jiaxing,120.750865,30.762653,0573;330500,湖州市,Huzhou,120.102398,30.867198,0572;330600,绍兴市,Shaoxing,120.582112,29.997117,0575;330700,金华市,Jinhua,119.649506,29.089524,0579;330800,衢州市,Quzhou,118.87263,28.941708,0570;330900,舟山市,Zhoushan,122.106863,30.016028,0580;331000,台州市,Taizhou,121.428599,28.661378,0576;331100,丽水市,Lishui,119.921786,28.451993,0578",
		"340000": "340100,合肥市,Hefei,117.283042,31.86119,0551;340181,巢湖市,Chaohu,117.874155,31.600518,0551;340200,芜湖市,Wuhu,118.376451,31.326319,0553;340300,蚌埠市,Bengbu,117.36237,32.934037,0552;340400,淮南市,Huainan,117.025449,32.645947,0554;340500,马鞍山市,Ma'anshan,118.507906,31.689362,0555;340600,淮北市,Huaibei,116.794664,33.971707,0561;340700,铜陵市,Tongling,117.816576,30.929935,0562;340800,安庆市,Anqing,117.053571,30.524816,0556;341000,黄山市,Huangshan,118.317325,29.709239,0559;341100,滁州市,Chuzhou,118.316264,32.303627,0550;341200,阜阳市,Fuyang,115.819729,32.896969,1558;341300,宿州市,Suzhou,116.984084,33.633891,0557;341500,六安市,Lu'an,116.507676,31.752889,0564;341600,亳州市,Bozhou,115.782939,33.869338,0558;341700,池州市,Chizhou,117.489157,30.656037,0566;341800,宣城市,Xuancheng,118.757995,30.945667,0563",
		"350000": "350100,福州市,Fuzhou,119.306239,26.075302,0591;350200,厦门市,Xiamen,118.11022,24.490474,0592;350300,莆田市,Putian,119.007558,25.431011,0594;350400,三明市,Sanming,117.635001,26.265444,0598;350500,泉州市,Quanzhou,118.589421,24.908853,0595;350600,漳州市,Zhangzhou,117.661801,24.510897,0596;350700,南平市,Nanping,118.178459,26.635627,0599;350800,龙岩市,Longyan,117.02978,25.091603,0597;350900,宁德市,Ningde,119.527082,26.65924,0593",
		"360000": "360100,南昌市,Nanchang,115.892151,28.676493,0791;360200,景德镇市,Jingdezhen,117.214664,29.29256,0798;360300,萍乡市,Pingxiang,113.852186,27.622946,0799;360400,九江市,Jiujiang,115.992811,29.712034,0792;360500,新余市,Xinyu,114.930835,27.810834,0790;360600,鹰潭市,Yingtan,117.033838,28.238638,0701;360700,赣州市,Ganzhou,114.940278,25.85097,0797;360800,吉安市,Ji'an,114.986373,27.111699,0796;360900,宜春市,Yichun,114.391136,27.8043,0795;361000,抚州市,Fuzhou,116.358351,27.98385,0794;361100,上饶市,Shangrao,117.971185,28.44442,0793",
		"370000": "370100,济南市,Jinan,117.000923,36.675807,0531;370200,青岛市,Qingdao,120.369557,36.094406,0532;370300,淄博市,Zibo,118.047648,36.814939,0533;370400,枣庄市,Zaozhuang,117.557964,34.856424,0632;370500,东营市,Dongying,118.4963,37.461266,0546;370600,烟台市,Yantai,121.391382,37.539297,0535;370700,潍坊市,Weifang,119.107078,36.70925,0536;370800,济宁市,Jining,116.587245,35.415393,0537;370900,泰安市,Tai'an,117.129063,36.194968,0538;371000,威海市,Weihai,122.116394,37.509691,0631;371100,日照市,Rizhao,119.461208,35.428588,0633;371200,莱芜市,Laiwu,117.677736,36.214397,0634;371300,临沂市,Linyi,118.326443,35.065282,0539;371400,德州市,Dezhou,116.307428,37.453968,0534;371500,聊城市,Liaocheng,115.980367,36.456013,0635;371600,滨州市,Binzhou,118.016974,37.383542,0543;371700,菏泽市,Heze,115.469381,35.246531,0530",
		"410000": "410100,郑州市,Zhengzhou,113.665412,34.757975,0371;410200,开封市,Kaifeng,114.341447,34.797049,0378;410300,洛阳市,Luoyang,112.434468,34.663041,0379;410400,平顶山市,Pingdingshan,113.307718,33.735241,0375;410500,安阳市,Anyang,114.352482,36.103442,0372;410600,鹤壁市,Hebi,114.295444,35.748236,0392;410700,新乡市,Xinxiang,113.883991,35.302616,0373;410800,焦作市,Jiaozuo,113.238266,35.23904,0391;410900,濮阳市,Puyang,115.041299,35.768234,0393;411000,许昌市,Xuchang,113.826063,34.022956,0374;411100,漯河市,Luohe,114.026405,33.575855,0395;411200,三门峡市,Sanmenxia,111.194099,34.777338,0398;411300,南阳市,Nanyang,112.540918,32.999082,0377;411400,商丘市,Shangqiu,115.650497,34.437054,0370;411500,信阳市,Xinyang,114.075031,32.123274,0376;411600,周口市,Zhoukou,114.649653,33.620357,0394;411700,驻马店市,Zhumadian,114.024736,32.980169,0396;419001,济源市,Jiyuan,112.590047,35.090378,1391",
		"420000": "420100,武汉市,Wuhan,114.298572,30.584355,027;420200,黄石市,Huangshi,115.077048,30.220074,0714;420300,十堰市,Shiyan,110.785239,32.647017,0719;420500,宜昌市,Yichang,111.290843,30.702636,0717;420600,襄阳市,Xiangyang,112.144146,32.042426,0710;420700,鄂州市,Ezhou,114.890593,30.396536,0711;420800,荆门市,Jingmen,112.204251,31.03542,0724;420900,孝感市,Xiaogan,113.926655,30.926423,0712;421000,荆州市,Jingzhou,112.23813,30.326857,0716;421100,黄冈市,Huanggang,114.879365,30.447711,0713;421200,咸宁市,Xianning,114.328963,29.832798,0715;421300,随州市,Suizhou,113.37377,31.717497,0722;422800,恩施土家族苗族自治州,Enshi,109.48699,30.283114,0718;429004,仙桃市,Xiantao,113.453974,30.364953,0728;429005,潜江市,Qianjiang,112.896866,30.421215,2728;429006,天门市,Tianmen,113.165862,30.653061,1728;429021,神农架林区,Shennongjia,110.671525,31.744449,1719",
		"430000": "430100,长沙市,Changsha,112.982279,28.19409,0731;430200,株洲市,Zhuzhou,113.151737,27.835806,0733;430300,湘潭市,Xiangtan,112.925083,27.846725,0732;430400,衡阳市,Hengyang,112.607693,26.900358,0734;430500,邵阳市,Shaoyang,111.46923,27.237842,0739;430600,岳阳市,Yueyang,113.132855,29.37029,0730;430700,常德市,Changde,111.691347,29.040225,0736;430800,张家界市,Zhangjiajie,110.479921,29.127401,0744;430900,益阳市,Yiyang,112.355042,28.570066,0737;431000,郴州市,Chenzhou,113.032067,25.793589,0735;431100,永州市,Yongzhou,111.608019,26.434516,0746;431200,怀化市,Huaihua,109.97824,27.550082,0745;431300,娄底市,Loudi,112.008497,27.728136,0738;433100,湘西土家族苗族自治州,Xiangxi,109.739735,28.314296,0743",
		"440000": "440100,广州市,Guangzhou,113.280637,23.125178,020;440200,韶关市,Shaoguan,113.591544,24.801322,0751;440300,深圳市,Shenzhen,114.085947,22.547,0755;440400,珠海市,Zhuhai,113.552724,22.255899,0756;440500,汕头市,Shantou,116.708463,23.37102,0754;440600,佛山市,Foshan,113.122717,23.028762,0757;440700,江门市,Jiangmen,113.094942,22.590431,0750;440800,湛江市,Zhanjiang,110.405529,21.195338,0759;440900,茂名市,Maoming,110.919229,21.659751,0668;441200,肇庆市,Zhaoqing,112.472529,23.051546,0758;441300,惠州市,Huizhou,114.412599,23.079404,0752;441400,梅州市,Meizhou,116.117582,24.299112,0753;441500,汕尾市,Shanwei,115.364238,22.774485,0660;441600,河源市,Heyuan,114.697802,23.746266,0762;441700,阳江市,Yangjiang,111.975107,21.859222,0662;441800,清远市,Qingyuan,113.036779,23.704188,0763;441900,东莞市,Dongguan,113.760234,23.048884,0769;442000,中山市,Zhongshan,113.382391,22.521113,0760;445100,潮州市,Chaozhou,116.632301,23.661701,0768;445200,揭阳市,Jieyang,116.355733,23.543778,0663;445300,云浮市,Yunfu,112.044439,22.929801,0766",
		"450000": "450100,南宁市,Nanning,108.320004,22.82402,0771;450200,柳州市,Liuzhou,109.411703,24.314617,0772;450300,桂林市,Guilin,110.299121,25.274215,0773;450400,梧州市,Wuzhou,111.316229,23.472309,0774;450500,北海市,Beihai,109.119254,21.473343,0779;450600,防城港市,Fangchenggang,108.345478,21.614631,0770;450700,钦州市,Qinzhou,108.624175,21.967127,0777;450800,贵港市,Guigang,109.602146,23.0936,1755;450900,玉林市,Yulin,110.154393,22.63136,0775;451000,百色市,Baise,106.616285,23.897742,0776;451100,贺州市,Hezhou,111.552056,24.414141,1774;451200,河池市,Hechi,108.062105,24.695899,0778;451300,来宾市,Laibin,109.229772,23.733766,1772;451400,崇左市,Chongzuo,107.353926,22.404108,1771",
		"460000": "460100,海口市,Haikou,110.33119,20.031971,0898;460200,三亚市,Sanya,109.508268,18.247872,0899;460300,三沙市,Sansha,112.34882,16.831039,2898;460321,西沙群岛,Xisha Islands,112.025528,16.331342,1895;460322,南沙群岛,Nansha Islands,116.749998,11.471888,1891;460323,中沙群岛的岛礁及其海域,Zhongsha Islands,117.740071,15.112856,2801;469001,五指山市,Wuzhishan,109.516662,18.776921,1897;469002,琼海市,Qionghai,110.466785,19.246011,1894;469003,儋州市,Danzhou,109.576782,19.517486,0805;469005,文昌市,Wenchang,110.753975,19.612986,1893;469006,万宁市,Wanning,110.388793,18.796216,1898;469007,东方市,Dongfang,108.653789,19.10198,0807;469021,定安县,Ding'an,110.323959,19.699211,0806;469022,屯昌县,Tunchang,110.102773,19.362916,1892;469023,澄迈县,Chengmai,110.007147,19.737095,0804;469024,临高县,Lingao,109.687697,19.908293,1896;469025,白沙黎族自治县,Baisha,109.452606,19.224584,0802;469026,昌江黎族自治县,Changjiang,109.053351,19.260968,0803;469027,乐东黎族自治县,Ledong,109.175444,18.74758,2802;469028,陵水黎族自治县,Lingshui,110.037218,18.505006,0809;469029,保亭黎族苗族自治县,Baoting,109.70245,18.636371,0801;469030,琼中黎族苗族自治县,Qiongzhong,109.839996,19.03557,1899",
		"500000": "",
		"510000": "510100,成都市,Chengdu,104.065735,30.659462,028;510300,自贡市,Zigong,104.773447,29.352765,0813;510400,攀枝花市,Panzhihua,101.716007,26.580446,0812;510500,泸州市,Luzhou,105.443348,28.889138,0830;510600,德阳市,Deyang,104.398651,31.127991,0838;510700,绵阳市,Mianyang,104.741722,31.46402,0816;510800,广元市,Guangyuan,105.829757,32.433668,0839;510900,遂宁市,Suining,105.571331,30.513311,0825;511000,内江市,Neijiang,105.066138,29.58708,1832;511100,乐山市,Leshan,103.761263,29.582024,0833;511300,南充市,Nanchong,106.082974,30.795281,0817;511400,眉山市,Meishan,103.831788,30.048318,1833;511500,宜宾市,Yibin,104.630825,28.760189,0831;511600,广安市,Guang'an,106.633369,30.456398,0826;511700,达州市,Dazhou,107.502262,31.209484,0818;511800,雅安市,Ya'an,103.001033,29.987722,0835;511900,巴中市,Bazhong,106.753669,31.858809,0827;512000,资阳市,Ziyang,104.641917,30.122211,0832;513200,阿坝藏族羌族自治州,Aba,102.221374,31.899792,0837;513300,甘孜藏族自治州,Garze,101.963815,30.050663,0836;513400,凉山彝族自治州,Liangshan,102.258746,27.886762,0834",
		"520000": "520100,贵阳市,Guiyang,106.713478,26.578343,0851;520200,六盘水市,Liupanshui,104.846743,26.584643,0858;520300,遵义市,Zunyi,106.937265,27.706626,0852;520400,安顺市,Anshun,105.932188,26.245544,0853;520500,毕节市,Bijie,105.28501,27.301693,0857;520600,铜仁市,Tongren,109.191555,27.718346,0856;522300,黔西南布依族苗族自治州,Qianxinan,104.897971,25.08812,0859;522600,黔东南苗族侗族自治州,Qiandongnan,107.977488,26.583352,0855;522700,黔南布依族苗族自治州,Qiannan,107.517156,26.258219,0854",
		"530000": "530100,昆明市,Kunming,102.712251,25.040609,0871;530300,曲靖市,Qujing,103.797851,25.501557,0874;530400,玉溪市,Yuxi,102.543907,24.350461,0877;530500,保山市,Baoshan,99.167133,25.111802,0875;530600,昭通市,Zhaotong,103.717216,27.336999,0870;530700,丽江市,Lijiang,100.233026,26.872108,0888;530800,普洱市,Pu'er,100.972344,22.777321,0879;530900,临沧市,Lincang,100.08697,23.886567,0883;532300,楚雄彝族自治州,Chuxiong,101.546046,25.041988,0878;532500,红河哈尼族彝族自治州,Honghe,103.384182,23.366775,0873;532600,文山壮族苗族自治州,Wenshan,104.24401,23.36951,0876;532800,西双版纳傣族自治州,Xishuangbanna,100.797941,22.001724,0691;532900,大理白族自治州,Dali,100.240037,25.592765,0872;533100,德宏傣族景颇族自治州,Dehong,98.578363,24.436694,0692;533300,怒江傈僳族自治州,Nujiang,98.854304,25.850949,0886;533400,迪庆藏族自治州,Deqen,99.706463,27.826853,0887",
		"540000": "540100,拉萨市,Lhasa,91.132212,29.660361,0891;542100,昌都地区,Qamdo,97.178452,31.136875,0895;542200,山南地区,Shannan,91.766529,29.236023,0893;542300,日喀则地区,Shigatse,88.885148,29.267519,0892;542400,那曲地区,Nagqu,92.060214,31.476004,0896;542500,阿里地区,Ngari,80.105498,32.503187,0897;542600,林芝地区,Nyingchi,94.362348,29.654693,0894",
		"610000": "610100,西安市,Xi'an,108.948024,34.263161,029;610200,铜川市,Tongchuan,108.963122,34.90892,0919;610300,宝鸡市,Baoji,107.14487,34.369315,0917;610400,咸阳市,Xianyang,108.705117,34.333439,0910;610500,渭南市,Weinan,109.502882,34.499381,0913;610600,延安市,Yan'an,109.49081,36.596537,0911;610700,汉中市,Hanzhong,107.028621,33.077668,0916;610800,榆林市,Yulin,109.741193,38.290162,0912;610900,安康市,Ankang,109.029273,32.6903,0915;611000,商洛市,Shangluo,109.939776,33.868319,0914",
		"620000": "620100,兰州市,Lanzhou,103.823557,36.058039,0931;620200,嘉峪关市,Jiayuguan,98.277304,39.786529,1937;620300,金昌市,Jinchang,102.187888,38.514238,0935;620400,白银市,Baiyin,104.173606,36.54568,0943;620500,天水市,Tianshui,105.724998,34.578529,0938;620600,武威市,Wuwei,102.634697,37.929996,1935;620700,张掖市,Zhangye,100.455472,38.932897,0936;620800,平凉市,Pingliang,106.684691,35.54279,0933;620900,酒泉市,Jiuquan,98.510795,39.744023,0937;621000,庆阳市,Qingyang,107.638372,35.734218,0934;621100,定西市,Dingxi,104.626294,35.579578,0932;621200,陇南市,Longnan,104.929379,33.388598,2935;622900,临夏回族自治州,Linxia,103.212006,35.599446,0930;623000,甘南藏族自治州,Gannan,102.911008,34.986354,0941",
		"630000": "630100,西宁市,Xining,101.778916,36.623178,0971;632100,海东地区,Haidong,102.10327,36.502916,0972;632200,海北藏族自治州,Haibei,100.901059,36.959435,0970;632300,黄南藏族自治州,Huangnan,102.019988,35.517744,0973;632500,海南藏族自治州,Hainan,100.619542,36.280353,0974;632600,果洛藏族自治州,Golog,100.242143,34.4736,0975;632700,玉树藏族自治州,Yushu,97.008522,33.004049,0976;632800,海西蒙古族藏族自治州,Haixi,97.370785,37.374663,0977",
		"640000": "640100,银川市,Yinchuan,106.278179,38.46637,0951;640200,石嘴山市,Shizuishan,106.376173,39.01333,0952;640300,吴忠市,Wuzhong,106.199409,37.986165,0953;640400,固原市,Guyuan,106.285241,36.004561,0954;640500,中卫市,Zhongwei,105.189568,37.514951,1953",
		"650000": "650100,乌鲁木齐市,Urumqi,87.617733,43.792818,0991;650200,克拉玛依市,Karamay,84.873946,45.595886,0990;652100,吐鲁番地区,Turpan,89.184078,42.947613,0995;652200,哈密地区,Kumul,93.51316,42.833248,0902;652300,昌吉回族自治州,Changji,87.304012,44.014577,0994;652700,博尔塔拉蒙古自治州,Bortala,82.074778,44.903258,0909;652800,巴音郭楞蒙古自治州,Bayingol,86.150969,41.768552,0996;652900,阿克苏地区,Aksu,80.265068,41.170712,0997;653000,克孜勒苏柯尔克孜自治州,Kizilsu,76.172825,39.713431,0908;653100,喀什地区,Kashgar,75.989138,39.467664,0998;653200,和田地区,Hotan,79.92533,37.110687,0903;654000,伊犁哈萨克自治州,Ili,81.317946,43.92186,0999;654200,塔城地区,Qoqek,82.985732,46.746301,0901;654300,阿勒泰地区,Altay,88.13963,47.848393,0906;659001,石河子市,Shihezi,86.041075,44.305886,0993;659002,阿拉尔市,Aral,81.285884,40.541914,1997;659003,图木舒克市,Tumxuk,79.077978,39.867316,1998;659004,五家渠市,Wujiaqu,87.526884,44.167401,1994",
		"710000": "",
		"810000": "",
		"820000": ""
	};
	var allcities = "100000,全国,China,116.3683244,39.915085,;110000,北京市,Beijing,116.405285,39.904989,010;120000,天津市,Tianjin,117.190182,39.125596,022;130000,河北省,Hebei,114.502461,38.045474,;140000,山西省,Shanxi,112.549248,37.857014,;150000,内蒙古自治区,Inner Mongolia,111.670801,40.818311,;210000,辽宁省,Liaoning,123.429096,41.796767,;220000,吉林省,Jilin,125.3245,43.886841,;230000,黑龙江省,Heilongjiang,126.642464,45.756967,;310000,上海市,Shanghai,121.472644,31.231706,021;320000,江苏省,Jiangsu,118.767413,32.041544,;330000,浙江省,Zhejiang,120.153576,30.287459,;340000,安徽省,Anhui,117.283042,31.86119,;350000,福建省,Fujian,119.306239,26.075302,;360000,江西省,Jiangxi,115.892151,28.676493,;370000,山东省,Shandong,117.000923,36.675807,;410000,河南省,Henan,113.665412,34.757975,;420000,湖北省,Hubei,114.298572,30.584355,;430000,湖南省,Hunan,112.982279,28.19409,;440000,广东省,Guangdong,113.280637,23.125178,;450000,广西壮族自治区,Guangxi,108.320004,22.82402,;460000,海南省,Hainan,110.33119,20.031971,;500000,重庆市,Chongqing,106.504962,29.533155,023;510000,四川省,Sichuan,104.065735,30.659462,;520000,贵州省,Guizhou,106.713478,26.578343,;530000,云南省,Yunnan,102.712251,25.040609,;540000,西藏自治区,Tibet,91.132212,29.660361,;610000,陕西省,Shaanxi,108.948024,34.263161,;620000,甘肃省,Gansu,103.823557,36.058039,;630000,青海省,Qinghai,101.778916,36.623178,;640000,宁夏回族自治区,Ningxia,106.278179,38.46637,;650000,新疆维吾尔自治区,Xinjiang,87.617733,43.792818,;810000,香港特別行政區,Hong Kong,114.173355,22.320048,1852;820000,澳門特別行政區,Macau,113.54909,22.198951,1853;710000,台湾省,Taiwan Province,121.509062,25.044332,1886;";

	var provinceList = [], provinceObj = {}, cityObj={}, i,len, j, jl, temp, provinceStrList = allcities.split(";"), stringDetail;
	var otherProvince = {code:"718182", cities:[], label:"其他", name:"其他"}, isOtherProvince, province;
	var regProvince = /省|市|壮|回|维|自/, regCity = /市$/, html;
	var hotCityName = ['北京','上海','广州','深圳','成都','沈阳','苏州','郑州','青岛','天津','重庆','武汉','杭州','西安','南京','大连','长沙'];
	for(i = 0, len = provinceStrList.length; i < len; i++){
		stringDetail = provinceStrList[i].split(",");
		if(stringDetail.length && stringDetail[0] > 110000 - 1){
			isOtherProvince = stringDetail[0] > 710000 - 1;
			temp = isOtherProvince ? stringDetail[1].substr(0,2):stringDetail[1].substr(0, 3).replace(regProvince, "");
			province = {code: stringDetail[0], label: stringDetail[1], name: temp, cities:[], lng: stringDetail[3], lat: stringDetail[4]};
			if(isOtherProvince){
				otherProvince.cities.push(province); 
				cityObj[stringDetail[0]]= cityObj[province.name] = province;
			}
			else{
				provinceList.push(province);
				provinceObj[stringDetail[0]] = provinceObj[stringDetail[1]] = provinceObj[province.name] = province;
				cityObj[stringDetail[0]] = cityObj[stringDetail[1]] = cityObj[province.name] = province;
			}
		}
	}

	provinceList.sort(function(p1, p2){
		return p1.name.charCodeAt(0) == p2.name.charCodeAt(0) ? p1.name.charCodeAt(1) - p2.name.charCodeAt(1) : p1.name.charCodeAt(0) - p2.name.charCodeAt(0);
	});

	provinceList.push(otherProvince);
	provinceObj[718182] = otherProvince;
	for(i in cities){
		if(cities[i]){
			stringDetail = cities[i].split(";");
			for(j = 0, jl = stringDetail.length; j < jl; j++){
				temp = stringDetail[j].split(",");
				province = {code:temp[0], label: temp[1], name: temp[1].replace(regCity, ""), lng: temp[3], lat: temp[4]};
				cityObj[temp[0]] = cityObj[temp[1]] = cityObj[province.name] = province;
				provinceObj[i].cities.push(province);
			}
		}
	}

	for(html = [], i = 0, len = hotCityName.length; i < len; i++){
		temp = cityObj[hotCityName[i]] || provinceObj[hotCityName[i]];
		html.push('<a href="javascript:;">', temp.name ,'</a>');
	}
	$("#tdHotCities").html(html.join(""));

	for(html = [], i = 0, len = provinceList.length; i < len; i++){
		temp = provinceList[i];
		if(temp.cities.length < 2){ continue; }
		html.push('<tr><th>', temp.name ,'</th><td>');
		for(j = 0, jl = temp.cities.length; j < jl; j++){
			html.push('<a href="javascript:;">', temp.cities[j].name, '</a>')
		}
		html.push('</td></tr>');
	}
	$("#tbodyAllCities").html(html.join(""));

	$("#btnChangeCity")
		.on("click", function(){
			$body.off("click", fnClickAllCity);
			setTimeout(function(){ $body.on("click", fnClickAllCity); }, 9);
			$allCitys.removeClass("hide");
			$btnCurrentCity.addClass("open");
		})
	$('#citySug')
		.hover(function(){
			divCoordinate.style.display = 'none'
		},function(){
			divCoordinate.style.display = 'block'

		})

	var $myPageTop = $("#myPageTop").on("click", function(e){
		var target = e.target;
		if("INPUT" == target.nodeName && "radio" == target.type){
			$txtSearch.attr("placeholder",
					"请输入" +({keyword:"关键字", coordinate:"坐标"})[target.value] + "进行搜索");
		}
	});

	var currentCity = cityObj["北京"], // 默认值，否则获取不到容易出错
		MA = {
			//cityObj : cityObj,
			setCurrentCity: function(city){
				currentCity = cityObj[city];
				
				mapObj.setZoomAndCenter(10, new AMap.LngLat(currentCity.lng, currentCity.lat));
			}
		},
		$body = $(document.body),
		fnClickAllCity = function(){
			$body.off("click", fnClickAllCity);
			$allCitys.addClass("hide");
			$btnCurrentCity.removeClass("open");
		},

		$btnCurrentCity = $("#btnCurrentCity"),
		
		$txtSearch = $("#txtSearch").on("keyup", function(e){
			if(e.keyCode ==13){
				fnDoSearchClick();
			}
		}),
		$txtCoordinate = $("#txtCoordinate"),
		divCoordinate = $("#divCoordinate")[0],

		$allCitys = $("#allCityList").on("click", function(e){
			var a = e.target;
			e.stopPropagation();
			if(a.tagName == "A"){
				fnClickAllCity();
				if(!/close-icon/.test(a.className)){
					MA.setCurrentCity(a.innerHTML);
				}
			}
		}),
		placeSearch, geocoder,
		marker = new AMap.Marker(),
		$msgTxtSearch = $("#txtSearchMessage"),
		fnShowSearchMessage = function(txt){
			setTimeout(function(){
				$msgTxtSearch.fadeOut("slow", function(){
					$msgTxtSearch.addClass("hide");
				});
			}, 900);
			$msgTxtSearch.html(txt).removeClass("hide").css("display", "block");

		},
		fnPlaceSearchCallback = function(result){
			if(result == 'complete'){
				return
			}

			if(result.poiList && result.poiList.pois && result.poiList.pois.length){
				var poi = result.poiList.pois[0];
				mapObj.setZoomAndCenter(13, poi.location);
				marker.setTitle([poi.name, poi.address].join(poi.name && poi.address ? "\n" : ""));
				marker.setPosition(poi.location);
				marker.setMap(mapObj);
				$txtCoordinate[0].value = poi.location.toString();
			}
			else{
				fnShowSearchMessage("没有搜索到结果！！！");
			}
		},
		fnGeocoderCallback = function(result){
			if(result.regeocode && result.regeocode.formattedAddress){
				marker.setTitle(result.regeocode.formattedAddress);
			}
			else{ fnShowSearchMessage("没有搜索到结果！");}
		},
		fnDoSearchClick = function(){
			$("#wrap").css("visibility","hidden");
			$("#myPage").css("visibility","visible");
			var $radio = $myPageTop.find("input:checked"), $input = $myPageTop.find("input[type=text]"), value = $input[0].value, lng,lat, lnglat;
			if(!value){ fnShowSearchMessage("请输入搜索内容！"); return;}
			if($radio[0].value == "coordinate"){
				lnglat = value.split(",");
				lng = Number(lnglat[0]);
				lat = Number(lnglat[1]);
				if(isNaN(lng) || isNaN(lat) || lng < -180 || lng > 180 || lat < -90 || lat > 90){
					fnShowSearchMessage("请输入正确的经纬度坐标！");
					$input.focus();
				}
				else{
					lnglat = new AMap.LngLat(lng, lat);
					mapObj.setZoomAndCenter(13, lnglat);
					geocoder.getAddress(lnglat);
					marker.setPosition(lnglat);
					marker.setMap(mapObj);
					$txtCoordinate[0].value = value;
					marker.setTitle(null);
				}
			}
			else{
				placeSearch.setCity(currentCity.code);
				placeSearch.search(value, fnPlaceSearchCallback);
			}
		},
		mapObj = new AMap.Map("map", {center:new AMap.LngLat(116.397428,39.90923), resizeEnable:true});
		// new AMap.LngLat(113.975092,22.675105)

	$("#btn-search").on("click", fnDoSearchClick);

var bodyScrollLeft, bodyScrollTop, bodyWidth;
	AMap.event.addListener(mapObj, "mousemove", function(e){
		divCoordinate.innerHTML = e.lnglat.toString();
		var style = divCoordinate.style, event = e.originalEvent, left, width = divCoordinate.offsetWidth;

		//1.3
		style.top = (e.pixel.y + 105) + "px";
		style.left = (e.pixel.x + 6) +"px";

	});

	AMap.event.addListener(mapObj, "click", function(e){
		$txtCoordinate[0].value = e.lnglat.toString();
	});

	AMap.event.addListener(mapObj, "mouseover", function(e){
		divCoordinate.className = "";
		bodyWidth = $body.width();
	});

	AMap.event.addListener(mapObj, "mouseout", function(e){
		divCoordinate.className = "hide";
	});

	mapObj.plugin(["AMap.ToolBar","AMap.OverView", "AMap.PlaceSearch","AMap.CitySearch","AMap.Geocoder"], function(){
		mapObj.addControl(new AMap.ToolBar);
		mapObj.addControl(new AMap.OverView);

		placeSearch = new AMap.PlaceSearch;
		AMap.event.addListener(placeSearch, "complete", fnPlaceSearchCallback);
		AMap.event.addListener(placeSearch, "error", fnPlaceSearchCallback);

		geocoder = new AMap.Geocoder({radius: 2800});
		AMap.event.addListener(geocoder, "complete", fnGeocoderCallback);
		AMap.event.addListener(geocoder, "error", fnGeocoderCallback);

		var citySearch = new AMap.CitySearch;
		AMap.event.addListener(citySearch, "complete", function(result){
			mapObj.setBounds(result.bounds);
			MA.setCurrentCity(result.city); //TODO：暂时不处理城市名称和本地名称是否对应的问题
		});
		citySearch.getLocalCity();
	});

	//hover左上角放大缩小工具时隐藏坐标
	$('.amap-controls')
		.hover(function(){
			divCoordinate.style.display = 'none'
		},function(){
			divCoordinate.style.display = 'block'
		})

	ZeroClipboard.config({ moviePath: "/console/public/show/ZeroClipboard.swf" });
	var client = new ZeroClipboard( $myPageTop.find("a.picker-copy")[0]), $message = $("#copySuccessMessage");
	client.on("dataRequested", function(client, args){
		client.setText($txtCoordinate[0].value);
	});
	client.on("complete", function(client, args){
		$message.removeClass("hide").css("display", "block");
		setTimeout(function(){
			$message.fadeOut("slow", function(){ $message.addClass("hide"); });
		}, 900);
	});
	client.on("noflash", function(client, args){
        $myPageTop.find("a.picker-copy").on('click', function(){
            alert("复制失败，请用鼠标选中复制，或者安装 Flash 后再试");
        });

	});
}();

// 地图1
 !function(){
    var infoWindow, map, level = 15,
      center = {lng: 113.97539, lat: 22.675051},
      features = [{type: "Marker", name: "深圳市利市通科技有限公司", desc: "龙华白云山新村新永丰工业园B区E栋3楼", color: "blue", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 113.975172, lat: 22.67515}}];

      // 获取地图初始数据
  var data3=Mock.mock("http://uploadInformation.cn",{
    'data':[{company:'深圳市利市通信息技术有限公司',logoUrl:'blob:http://localhost:8080/889c0b3c-c01e-43b9-8b82-84c1fabcb1aa',type:'国有企业',industry:'制造业/机械加工' ,name:'利市通',desc:'燕川北部工业园',lnglat:{lng: 113.97539, lat: 22.675051}}]
  });
 	// var lng,lat,name,desc;
 	// $.ajax({
 	// 	type:"GET",
 	// 	url:"http://uploadInformation.cn",
 	// 	success:function(data,status){
 	// 		var data1=data.data;
 	// 		lng=data1.lnglat.lng;
 	// 		lat=data1.lnglat.lat;
 	// 		name=data1.name;
 	// 		desc=data1.desc
		// center.lng=lng;
		// center.lat=lat;
		// features.name=name;
		// features.desc=desc;
 	// 	}
 	// })

    function loadFeatures(){
      for(var feature, data, i = 0, len = features.length, j, jl, path; i < len; i++){
        data = features[i];
        switch(data.type){
          case "Marker":
            feature = new AMap.Marker({ map: map, position: new AMap.LngLat(data.lnglat.lng, data.lnglat.lat),
              zIndex: 3, extData: data, offset: new AMap.Pixel(data.offset.x, data.offset.y), title: data.name,
              content: '<div class="icon icon-' + data.icon + ' icon-'+ data.icon +'-' + data.color +'"></div>' });
            break;
          case "Polyline":
            for(j = 0, jl = data.lnglat.length, path = []; j < jl; j++){
              path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
            }
            feature = new AMap.Polyline({ map: map, path: path, extData: data, zIndex: 2,
              strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity });
            break;
          case "Polygon":
            for(j = 0, jl = data.lnglat.length, path = []; j < jl; j++){
              path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
            }
            feature = new AMap.Polygon({ map: map, path: path, extData: data, zIndex: 1,
              strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity,
              fillColor: data.fillColor, fillOpacity: data.fillOpacity });
            break;
          default: feature = null;
        }
        if(feature){ AMap.event.addListener(feature, "click", mapFeatureClick); }
      }
    }

    function mapFeatureClick(e){
      if(!infoWindow){ infoWindow = new AMap.InfoWindow({autoMove: true}); }
      var extData = e.target.getExtData();
      infoWindow.setContent("<h5>" + extData.name + "</h5><div>" + extData.desc + "</div>");
      infoWindow.open(map, e.lnglat);
    }

    map = new AMap.Map("mapContainer", {center: new AMap.LngLat(center.lng, center.lat), level: level});
    
    loadFeatures(); }();