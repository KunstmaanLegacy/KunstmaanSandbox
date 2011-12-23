/* Modernizr 2.0.6 | MIT & BSD
 * Contains: All core tests, html5shiv, yepnope, respond.js. Get your own custom build at www.modernizr.com/download/
 */
;window.Modernizr=function(a,b,c){function I(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=a[b]in l;return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function G(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return F(d,b)}function F(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function E(a,b){return!!~(""+a).indexOf(b)}function D(a,b){return typeof a===b}function C(a,b){return B(o.join(a+";")+(b||""))}function B(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},w=function(b){if(a.matchMedia)return matchMedia(b).matches;var c;v("@media "+b+" { #"+i+" { position: absolute; } }",function(b){c=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position=="absolute"});return c},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=D(e[d],"function"),D(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y,z={}.hasOwnProperty,A;!D(z,c)&&!D(z.call,c)?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],c)};var H=function(c,d){var f=c.join(""),g=d.length;v(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||j.touch.offsetTop===9,e.csstransforms3d=j.csstransforms3d.offsetLeft===9,e.generatedcontent=j.generatedcontent.offsetHeight>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",o.join("touch-enabled),("),i,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",o.join("transform-3d),("),i,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',m,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.canvastext=function(){return!!e.canvas&&!!D(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return e.touch},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b].toLowerCase()+"IndexedDB"])return!0;return!!a.indexedDB},r.hashchange=function(){return x("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return!!a.history&&!!history.pushState},r.draganddrop=function(){return x("dragstart")&&x("drop")},r.websockets=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in a},r.rgba=function(){B("background-color:rgba(150,255,150,.5)");return E(k.backgroundColor,"rgba")},r.hsla=function(){B("background-color:hsla(120,40%,100%,.5)");return E(k.backgroundColor,"rgba")||E(k.backgroundColor,"hsla")},r.multiplebgs=function(){B("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(k.background)},r.backgroundsize=function(){return G("backgroundSize")},r.borderimage=function(){return G("borderImage")},r.borderradius=function(){return G("borderRadius")},r.boxshadow=function(){return G("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){C("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return G("animationName")},r.csscolumns=function(){return G("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";B((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return E(k.backgroundImage,"gradient")},r.cssreflections=function(){return G("boxReflect")},r.csstransforms=function(){return!!F(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!F(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d);return a},r.csstransitions=function(){return G("transitionProperty")},r.fontface=function(){return e.fontface},r.generatedcontent=function(){return e.generatedcontent},r.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(e){}return c},r.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}catch(d){}return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webworkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var J in r)A(r,J)&&(y=J.toLowerCase(),e[y]=r[J](),u.push((e[y]?"":"no-")+y));e.input||I(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)A(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return;b=typeof b=="boolean"?b:!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},B(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._prefixes=o,e._domPrefixes=p,e.mq=w,e.hasEvent=x,e.testProp=function(a){return F([a])},e.testAllProps=G,e.testStyles=v,e.prefixed=function(a){return G(a,"pfx")},g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+u.join(" "):"");return e}(this,this.document),function(a,b){function u(){r(!0)}a.respond={},respond.update=function(){},respond.mediaQueriesSupported=b;if(!b){var c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=j.getElementsByTagName("link"),l=[],m=function(){var b=k,c=b.length,d=0,e,f,g,i;for(;d<c;d++)e=b[d],f=e.href,g=e.media,i=e.rel&&e.rel.toLowerCase()==="stylesheet",!!f&&i&&!h[f]&&(!/^([a-zA-Z]+?:(\/\/)?(www\.)?)/.test(f)||f.replace(RegExp.$1,"").split("/")[0]===a.location.host?l.push({href:f,media:g}):h[f]=!0);n()},n=function(){if(l.length){var a=l.shift();s(a.href,function(b){o(b,a.href,a.media),h[a.href]=!0,n()})}},o=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),g=d&&d.length||0,b=b.substring(0,b.lastIndexOf("/")),h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c,j=0,k,l,m,n,o;b.length&&(b+="/"),i&&(g=1);for(;j<g;j++){k=0,i?(l=c,f.push(h(a))):(l=d[j].match(/@media ([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),n=l.split(","),o=n.length;for(;k<o;k++)m=n[k],e.push({media:m.match(/(only\s+)?([a-zA-Z]+)(\sand)?/)&&RegExp.$2,rules:f.length-1,minw:m.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1),maxw:m.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1)})}r()},p,q,r=function(a){var b="clientWidth",h=d[b],l=c.compatMode==="CSS1Compat"&&h||c.body[b]||h,m={},n=c.createDocumentFragment(),o=k[k.length-1],s=(new Date).getTime();if(a&&p&&s-p<i)clearTimeout(q),q=setTimeout(r,i);else{p=s;for(var t in e){var u=e[t];if(!u.minw&&!u.maxw||(!u.minw||u.minw&&l>=u.minw)&&(!u.maxw||u.maxw&&l<=u.maxw))m[u.media]||(m[u.media]=[]),m[u.media].push(f[u.rules])}for(var t in g)g[t]&&g[t].parentNode===j&&j.removeChild(g[t]);for(var t in m){var v=c.createElement("style"),w=m[t].join("\n");v.type="text/css",v.media=t,v.styleSheet?v.styleSheet.cssText=w:v.appendChild(c.createTextNode(w)),n.appendChild(v),g.push(v)}j.insertBefore(n,o.nextSibling)}},s=function(a,b){var c=t();if(!!c){c.open("GET",a,!0),c.onreadystatechange=function(){c.readyState==4&&(c.status==200||c.status==304)&&b(c.responseText)};if(c.readyState==4)return;c.send()}},t=function(){var a=!1,b=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new XMLHttpRequest}],c=b.length;while(c--){try{a=b[c]()}catch(d){continue}break}return function(){return a}}();m(),respond.update=m,a.addEventListener?a.addEventListener("resize",u,!1):a.attachEvent&&a.attachEvent("onresize",u)}}(this,Modernizr.mq("only all")),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var e=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,j()):e(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){j()},0)):e(a)}},0)};e(c)}else c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload();m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*!
 * jQuery UI 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a,b){var d=a.nodeName.toLowerCase();if("area"===d){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&l(a)}return(/input|select|textarea|button|object/.test(d)?!a.disabled:"a"==d?a.href||b:b)&&l(a)}function l(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.16",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({propAttr:c.fn.prop||c.fn.attr,_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=
this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,
"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":
"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,m,n){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(m)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(n)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,
outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){return k(a,!isNaN(c.attr(a,"tabindex")))},tabbable:function(a){var b=c.attr(a,
"tabindex"),d=isNaN(b);return(d||b>=0)&&k(a,!d)}});c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&
a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&
c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)try{b(d).triggerHandler("remove")}catch(e){}k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){try{b(this).triggerHandler("remove")}catch(d){}});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=
function(h){return!!b.data(h,a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):
d;if(e&&d.charAt(0)==="_")return h;e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=
b.extend(true,{},this.options,this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+
"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",
c);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b){var d=false;b(document).mouseup(function(){d=false});b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(true===b.data(c.target,a.widgetName+".preventClickEvent")){b.removeData(c.target,a.widgetName+".preventClickEvent");c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+
this.widgetName)},_mouseDown:function(a){if(!d){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,f=a.which==1,g=typeof this.options.cancel=="string"&&a.target.nodeName?b(a.target).closest(this.options.cancel).length:false;if(!f||g||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}true===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(e){return c._mouseMove(e)};this._mouseUpDelegate=function(e){return c._mouseUp(e)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return d=true}},_mouseMove:function(a){if(b.browser.msie&&
!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=
false;a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Draggable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;if(b.iframeFix)d(b.iframeFix===true?"iframe":b.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")});return true},_mouseStart:function(a){var b=this.options;
this.helper=this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);d.ui.ddmanager&&d.ui.ddmanager.dragStart(this,a);return true},
_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=
false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,
10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},_mouseUp:function(a){this.options.iframeFix===true&&d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});d.ui.ddmanager&&d.ui.ddmanager.dragStop(this,a);return d.ui.mouse.prototype._mouseUp.call(this,a)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||
!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone().removeAttr("id"):this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&
a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=
this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),
10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),
10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[a.containment=="document"?0:d(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a.containment=="document"?0:d(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,
(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){a=d(a.containment);var b=a[0];if(b){a.offset();var c=d(b).css("overflow")!=
"hidden";this.containment=[(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),
10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=a}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+
this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&
!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,h=a.pageY;if(this.originalPosition){var g;if(this.containment){if(this.relative_container){g=this.relative_container.offset();g=[this.containment[0]+g.left,this.containment[1]+g.top,this.containment[2]+g.left,this.containment[3]+g.top]}else g=this.containment;if(a.pageX-this.offset.click.left<g[0])e=g[0]+this.offset.click.left;
if(a.pageY-this.offset.click.top<g[1])h=g[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>g[2])e=g[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>g[3])h=g[3]+this.offset.click.top}if(b.grid){h=b.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/b.grid[1])*b.grid[1]:this.originalPageY;h=g?!(h-this.offset.click.top<g[1]||h-this.offset.click.top>g[3])?h:!(h-this.offset.click.top<g[1])?h-b.grid[1]:h+b.grid[1]:h;e=b.grid[0]?this.originalPageX+Math.round((e-this.originalPageX)/
b.grid[0])*b.grid[0]:this.originalPageX;e=g?!(e-this.offset.click.left<g[0]||e-this.offset.click.left>g[2])?e:!(e-this.offset.click.left<g[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<
526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,
c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.16"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var h=d.data(this,"sortable");if(h&&!h.options.disabled){c.sortables.push({instance:h,shouldRevert:h.options.revert});
h.refreshPositions();h._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=
false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;
c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&
this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=
a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!=
"x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<
c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-
c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,
width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),f=c.options,e=f.snapTolerance,h=b.offset.left,g=h+c.helperProportions.width,n=b.offset.top,o=n+c.helperProportions.height,i=c.snapElements.length-1;i>=0;i--){var j=c.snapElements[i].left,l=j+c.snapElements[i].width,k=c.snapElements[i].top,m=k+c.snapElements[i].height;if(j-e<h&&h<l+e&&k-e<n&&n<m+e||j-e<h&&h<l+e&&k-e<o&&o<m+e||j-e<g&&g<l+e&&k-e<n&&n<m+e||j-e<g&&g<l+e&&k-e<o&&
o<m+e){if(f.snapMode!="inner"){var p=Math.abs(k-o)<=e,q=Math.abs(m-n)<=e,r=Math.abs(j-g)<=e,s=Math.abs(l-h)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:m,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l}).left-c.margins.left}var t=
p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(k-n)<=e;q=Math.abs(m-o)<=e;r=Math.abs(j-h)<=e;s=Math.abs(l-g)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:m-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[i].snapping&&
(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=p||q||r||s||t}else{c.snapElements[i].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),
10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;/*
 * jQuery UI Droppable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(d){d.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var a=this.options,b=a.accept;this.isover=0;this.isout=1;this.accept=d.isFunction(b)?b:function(c){return c.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];d.ui.ddmanager.droppables[a.scope].push(this);
a.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var a=d.ui.ddmanager.droppables[this.options.scope],b=0;b<a.length;b++)a[b]==this&&a.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(a,b){if(a=="accept")this.accept=d.isFunction(b)?b:function(c){return c.is(b)};d.Widget.prototype._setOption.apply(this,arguments)},_activate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);b&&this._trigger("activate",a,this.ui(b))},_deactivate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);b&&this._trigger("deactivate",a,this.ui(b))},_over:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",a,this.ui(b))}},_out:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",a,this.ui(b))}},_drop:function(a,b){var c=b||d.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return false;var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=
d.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],c.currentItem||c.element)&&d.ui.intersect(c,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){e=true;return false}});if(e)return false;if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
a,this.ui(c));return this.element}return false},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}});d.extend(d.ui.droppable,{version:"1.8.16"});d.ui.intersect=function(a,b,c){if(!b.offset)return false;var e=(a.positionAbs||a.position.absolute).left,g=e+a.helperProportions.width,f=(a.positionAbs||a.position.absolute).top,h=f+a.helperProportions.height,i=b.offset.left,k=i+b.proportions.width,j=b.offset.top,l=j+b.proportions.height;
switch(c){case "fit":return i<=e&&g<=k&&j<=f&&h<=l;case "intersect":return i<e+a.helperProportions.width/2&&g-a.helperProportions.width/2<k&&j<f+a.helperProportions.height/2&&h-a.helperProportions.height/2<l;case "pointer":return d.ui.isOver((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,j,i,b.proportions.height,b.proportions.width);case "touch":return(f>=j&&f<=l||h>=j&&h<=l||f<j&&h>l)&&(e>=
i&&e<=k||g>=i&&g<=k||e<i&&g>k);default:return false}};d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(a,b){var c=d.ui.ddmanager.droppables[a.options.scope]||[],e=b?b.type:null,g=(a.currentItem||a.element).find(":data(droppable)").andSelf(),f=0;a:for(;f<c.length;f++)if(!(c[f].options.disabled||a&&!c[f].accept.call(c[f].element[0],a.currentItem||a.element))){for(var h=0;h<g.length;h++)if(g[h]==c[f].element[0]){c[f].proportions.height=0;continue a}c[f].visible=c[f].element.css("display")!=
"none";if(c[f].visible){e=="mousedown"&&c[f]._activate.call(c[f],b);c[f].offset=c[f].element.offset();c[f].proportions={width:c[f].element[0].offsetWidth,height:c[f].element[0].offsetHeight}}}},drop:function(a,b){var c=false;d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&d.ui.intersect(a,this,this.options.tolerance))c=c||this._drop.call(this,b);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],a.currentItem||
a.element)){this.isout=1;this.isover=0;this._deactivate.call(this,b)}}});return c},dragStart:function(a,b){a.element.parents(":not(body,html)").bind("scroll.droppable",function(){a.options.refreshPositions||d.ui.ddmanager.prepareOffsets(a,b)})},drag:function(a,b){a.options.refreshPositions&&d.ui.ddmanager.prepareOffsets(a,b);d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var c=d.ui.intersect(a,this,this.options.tolerance);
if(c=!c&&this.isover==1?"isout":c&&this.isover==0?"isover":null){var e;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");if(g.length){e=d.data(g[0],"droppable");e.greedyChild=c=="isover"?1:0}}if(e&&c=="isover"){e.isover=0;e.isout=1;e._out.call(e,b)}this[c]=1;this[c=="isout"?"isover":"isout"]=0;this[c=="isover"?"_over":"_out"].call(this,b);if(e&&c=="isout"){e.isout=0;e.isover=1;e._over.call(e,b)}}}})},dragStop:function(a,b){a.element.parents(":not(body,html)").unbind("scroll.droppable");
a.options.refreshPositions||d.ui.ddmanager.prepareOffsets(a,b)}}})(jQuery);
;/*
 * jQuery UI Sortable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.sortable",d.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){var a=this.options;this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?a.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData("sortable-item");return this},_setOption:function(a,b){if(a===
"disabled"){this.options[a]=b;this.widget()[b?"addClass":"removeClass"]("ui-sortable-disabled")}else d.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(a,b){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(a);var c=null,e=this;d(a.target).parents().each(function(){if(d.data(this,"sortable-item")==e){c=d(this);return false}});if(d.data(a.target,"sortable-item")==e)c=d(a.target);if(!c)return false;if(this.options.handle&&
!b){var f=false;d(this.options.handle,c).find("*").andSelf().each(function(){if(this==a.target)f=true});if(!f)return false}this.currentItem=c;this._removeCurrentsFromItems();return true},_mouseStart:function(a,b,c){b=this.options;var e=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(a);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();b.containment&&this._setContainment();if(b.cursor){if(d("body").css("cursor"))this._storedCursor=d("body").css("cursor");d("body").css("cursor",b.cursor)}if(b.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",b.opacity)}if(b.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",b.zIndex)}if(this.scrollParent[0]!=
document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",a,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!c)for(c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("activate",a,e._uiHash(this));if(d.ui.ddmanager)d.ui.ddmanager.current=this;d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(a);
return true},_mouseDrag:function(a){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var b=this.options,c=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+b.scrollSpeed;else if(a.pageY-this.overflowOffset.top<
b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-b.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+b.scrollSpeed;else if(a.pageX-this.overflowOffset.left<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-b.scrollSpeed}else{if(a.pageY-d(document).scrollTop()<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()-
b.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()+b.scrollSpeed);if(a.pageX-d(document).scrollLeft()<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()-b.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()+b.scrollSpeed)}c!==false&&d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,
a)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(b=this.items.length-1;b>=0;b--){c=this.items[b];var e=c.item[0],f=this._intersectsWithPointer(c);if(f)if(e!=this.currentItem[0]&&this.placeholder[f==1?"next":"prev"]()[0]!=e&&!d.ui.contains(this.placeholder[0],e)&&(this.options.type=="semi-dynamic"?!d.ui.contains(this.element[0],
e):true)){this.direction=f==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(c))this._rearrange(a,c);else break;this._trigger("change",a,this._uiHash());break}}this._contactContainers(a);d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);this._trigger("sort",a,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(a,b){if(a){d.ui.ddmanager&&!this.options.dropBehaviour&&d.ui.ddmanager.drop(this,a);if(this.options.revert){var c=this;b=c.placeholder.offset();
c.reverting=true;d(this.helper).animate({left:b.left-this.offset.parent.left-c.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:b.top-this.offset.parent.top-c.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(a)})}else this._clear(a,b);return false}},cancel:function(){var a=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--){this.containers[b]._trigger("deactivate",null,a._uiHash(this));if(this.containers[b].containerCache.over){this.containers[b]._trigger("out",null,a._uiHash(this));this.containers[b].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();d.extend(this,{helper:null,
dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?d(this.domPosition.prev).after(this.currentItem):d(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};d(b).each(function(){var e=(d(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[-=_](.+)/);if(e)c.push((a.key||e[1]+"[]")+"="+(a.key&&a.expression?e[1]:e[2]))});!c.length&&a.key&&c.push(a.key+"=");return c.join("&")},
toArray:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};b.each(function(){c.push(d(a.item||this).attr(a.attribute||"id")||"")});return c},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,e=this.positionAbs.top,f=e+this.helperProportions.height,g=a.left,h=g+a.width,i=a.top,k=i+a.height,j=this.offset.click.top,l=this.offset.click.left;j=e+j>i&&e+j<k&&b+l>g&&b+l<h;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?j:g<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<h&&i<e+this.helperProportions.height/2&&f-this.helperProportions.height/2<k},_intersectsWithPointer:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width);b=b&&a;a=this._getDragVerticalDirection();
var c=this._getDragHorizontalDirection();if(!b)return false;return this.floating?c&&c=="right"||a=="down"?2:1:a&&(a=="down"?2:1)},_intersectsWithSides:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width);var c=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?e=="right"&&a||e=="left"&&!a:c&&(c=="down"&&b||c=="up"&&!b)},
_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){this._refreshItems(a);this.refreshPositions();return this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(a){var b=[],c=[],e=this._connectWith();
if(e&&a)for(a=e.length-1;a>=0;a--)for(var f=d(e[a]),g=f.length-1;g>=0;g--){var h=d.data(f[g],"sortable");if(h&&h!=this&&!h.options.disabled)c.push([d.isFunction(h.options.items)?h.options.items.call(h.element):d(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}c.push([d.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):d(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]);for(a=c.length-1;a>=0;a--)c[a][0].each(function(){b.push(this)});return d(b)},_removeCurrentsFromItems:function(){for(var a=this.currentItem.find(":data(sortable-item)"),b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(a){this.items=[];this.containers=[this];var b=this.items,c=[[d.isFunction(this.options.items)?this.options.items.call(this.element[0],a,{item:this.currentItem}):d(this.options.items,this.element),
this]],e=this._connectWith();if(e)for(var f=e.length-1;f>=0;f--)for(var g=d(e[f]),h=g.length-1;h>=0;h--){var i=d.data(g[h],"sortable");if(i&&i!=this&&!i.options.disabled){c.push([d.isFunction(i.options.items)?i.options.items.call(i.element[0],a,{item:this.currentItem}):d(i.options.items,i.element),i]);this.containers.push(i)}}for(f=c.length-1;f>=0;f--){a=c[f][1];e=c[f][0];h=0;for(g=e.length;h<g;h++){i=d(e[h]);i.data("sortable-item",a);b.push({item:i,instance:a,width:0,height:0,left:0,top:0})}}},refreshPositions:function(a){if(this.offsetParent&&
this.helper)this.offset.parent=this._getParentOffset();for(var b=this.items.length-1;b>=0;b--){var c=this.items[b];if(!(c.instance!=this.currentContainer&&this.currentContainer&&c.item[0]!=this.currentItem[0])){var e=this.options.toleranceElement?d(this.options.toleranceElement,c.item):c.item;if(!a){c.width=e.outerWidth();c.height=e.outerHeight()}e=e.offset();c.left=e.left;c.top=e.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(b=
this.containers.length-1;b>=0;b--){e=this.containers[b].element.offset();this.containers[b].containerCache.left=e.left;this.containers[b].containerCache.top=e.top;this.containers[b].containerCache.width=this.containers[b].element.outerWidth();this.containers[b].containerCache.height=this.containers[b].element.outerHeight()}return this},_createPlaceholder:function(a){var b=a||this,c=b.options;if(!c.placeholder||c.placeholder.constructor==String){var e=c.placeholder;c.placeholder={element:function(){var f=
d(document.createElement(b.currentItem[0].nodeName)).addClass(e||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!e)f.style.visibility="hidden";return f},update:function(f,g){if(!(e&&!c.forcePlaceholderSize)){g.height()||g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10));g.width()||g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||
0,10))}}}}b.placeholder=d(c.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);c.placeholder.update(b,b.placeholder)},_contactContainers:function(a){for(var b=null,c=null,e=this.containers.length-1;e>=0;e--)if(!d.ui.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(!(b&&d.ui.contains(this.containers[e].element[0],b.element[0]))){b=this.containers[e];c=e}}else if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",
a,this._uiHash(this));this.containers[e].containerCache.over=0}if(b)if(this.containers.length===1){this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}else if(this.currentContainer!=this.containers[c]){b=1E4;e=null;for(var f=this.positionAbs[this.containers[c].floating?"left":"top"],g=this.items.length-1;g>=0;g--)if(d.ui.contains(this.containers[c].element[0],this.items[g].item[0])){var h=this.items[g][this.containers[c].floating?"left":"top"];if(Math.abs(h-
f)<b){b=Math.abs(h-f);e=this.items[g]}}if(e||this.options.dropOnEmpty){this.currentContainer=this.containers[c];e?this._rearrange(a,e,null,true):this._rearrange(a,null,this.containers[c].element,true);this._trigger("change",a,this._uiHash());this.containers[c]._trigger("change",a,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}}},_createHelper:function(a){var b=
this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a,this.currentItem])):b.helper=="clone"?this.currentItem.clone():this.currentItem;a.parents("body").length||d(b.appendTo!="parent"?b.appendTo:this.currentItem[0].parentNode)[0].appendChild(a[0]);if(a[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(a[0].style.width==
""||b.forceHelperSize)a.width(this.currentItem.width());if(a[0].style.height==""||b.forceHelperSize)a.height(this.currentItem.height());return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=
this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a=
{top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),
10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,d(a.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)){var b=d(a.containment)[0];a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),
10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(a,b){if(!b)b=
this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&
this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();
var f=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])f=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])f=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-
this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;f=this.originalPageX+Math.round((f-this.originalPageX)/b.grid[0])*b.grid[0];f=this.containment?!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:!(f-this.offset.click.left<this.containment[0])?f-b.grid[0]:f+b.grid[0]:f}}return{top:g-
this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())}},_rearrange:function(a,b,c,e){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],
this.direction=="down"?b.item[0]:b.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var f=this,g=this.counter;window.setTimeout(function(){g==f.counter&&f.refreshPositions(!e)},0)},_clear:function(a,b){this.reverting=false;var c=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var e in this._storedCSS)if(this._storedCSS[e]=="auto"||this._storedCSS[e]=="static")this._storedCSS[e]=
"";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!b&&c.push(function(f){this._trigger("receive",f,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!b)c.push(function(f){this._trigger("update",f,this._uiHash())});if(!d.ui.contains(this.element[0],this.currentItem[0])){b||c.push(function(f){this._trigger("remove",
f,this._uiHash())});for(e=this.containers.length-1;e>=0;e--)if(d.ui.contains(this.containers[e].element[0],this.currentItem[0])&&!b){c.push(function(f){return function(g){f._trigger("receive",g,this._uiHash(this))}}.call(this,this.containers[e]));c.push(function(f){return function(g){f._trigger("update",g,this._uiHash(this))}}.call(this,this.containers[e]))}}for(e=this.containers.length-1;e>=0;e--){b||c.push(function(f){return function(g){f._trigger("deactivate",g,this._uiHash(this))}}.call(this,
this.containers[e]));if(this.containers[e].containerCache.over){c.push(function(f){return function(g){f._trigger("out",g,this._uiHash(this))}}.call(this,this.containers[e]));this.containers[e].containerCache.over=0}}this._storedCursor&&d("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!b){this._trigger("beforeStop",
a,this._uiHash());for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}return false}b||this._trigger("beforeStop",a,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!b){for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){d.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},
_uiHash:function(a){var b=a||this;return{helper:b.helper,placeholder:b.placeholder||d([]),position:b.position,originalPosition:b.originalPosition,offset:b.positionAbs,item:b.currentItem,sender:a?a.element:null}}});d.extend(d.ui.sortable,{version:"1.8.16"})})(jQuery);
;
/* ==========================================================
 * bootstrap-twipsy.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#twipsy
 * Adapted from the original jQuery.tipsy by Jason Frame
 * ==========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function( $ ) {

  "use strict"

 /* CSS TRANSITION SUPPORT (https://gist.github.com/373874)
  * ======================================================= */

  var transitionEnd

  $(document).ready(function () {

    $.support.transition = (function () {
      var thisBody = document.body || document.documentElement
        , thisStyle = thisBody.style
        , support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined
      return support
    })()

    // set CSS transition event type
    if ( $.support.transition ) {
      transitionEnd = "TransitionEnd"
      if ( $.browser.webkit ) {
      	transitionEnd = "webkitTransitionEnd"
      } else if ( $.browser.mozilla ) {
      	transitionEnd = "transitionend"
      } else if ( $.browser.opera ) {
      	transitionEnd = "oTransitionEnd"
      }
    }

  })


 /* TWIPSY PUBLIC CLASS DEFINITION
  * ============================== */

  var Twipsy = function ( element, options ) {
    this.$element = $(element)
    this.options = options
    this.enabled = true
    this.fixTitle()
  }

  Twipsy.prototype = {

    show: function() {
      var pos
        , actualWidth
        , actualHeight
        , placement
        , $tip
        , tp

      if (this.hasContent() && this.enabled) {
        $tip = this.tip()
        this.setContent()

        if (this.options.animate) {
          $tip.addClass('fade')
        }

        $tip
          .remove()
          .css({ top: 0, left: 0, display: 'block' })
          .prependTo(document.body)

        pos = $.extend({}, this.$element.offset(), {
          width: this.$element[0].offsetWidth
        , height: this.$element[0].offsetHeight
        })

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        placement = maybeCall(this.options.placement, this, [ $tip[0], this.$element[0] ])

        switch (placement) {
          case 'below':
            tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'above':
            tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset}
            break
        }

        $tip
          .css(tp)
          .addClass(placement)
          .addClass('in')
      }
    }

  , setContent: function () {
      var $tip = this.tip()
      $tip.find('.twipsy-inner')[this.options.html ? 'html' : 'text'](this.getTitle())
      $tip[0].className = 'twipsy'
    }

  , hide: function() {
      var that = this
        , $tip = this.tip()

      $tip.removeClass('in')

      function removeElement () {
        $tip.remove()
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip.bind(transitionEnd, removeElement) :
        removeElement()
    }

  , fixTitle: function() {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getTitle: function() {
      var title
        , $e = this.$element
        , o = this.options

        this.fixTitle()

        if (typeof o.title == 'string') {
          title = $e.attr(o.title == 'title' ? 'data-original-title' : o.title)
        } else if (typeof o.title == 'function') {
          title = o.title.call($e[0])
        }

        title = ('' + title).replace(/(^\s*|\s*$)/, "")

        return title || o.fallback
    }

  , tip: function() {
      if (!this.$tip) {
        this.$tip = $('<div class="twipsy" />').html(this.options.template)
      }
      return this.$tip
    }

  , validate: function() {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function() {
      this.enabled = true
    }

  , disable: function() {
      this.enabled = false
    }

  , toggleEnabled: function() {
      this.enabled = !this.enabled
    }

  }


 /* TWIPSY PRIVATE METHODS
  * ====================== */

   function maybeCall ( thing, ctx, args ) {
     return typeof thing == 'function' ? thing.apply(ctx, args) : thing
   }

 /* TWIPSY PLUGIN DEFINITION
  * ======================== */

  $.fn.twipsy = function (options) {
    $.fn.twipsy.initWith.call(this, options, Twipsy, 'twipsy')
    return this
  }

  $.fn.twipsy.initWith = function (options, Constructor, name) {
    var twipsy
      , binder
      , eventIn
      , eventOut

    if (options === true) {
      return this.data(name)
    } else if (typeof options == 'string') {
      twipsy = this.data(name)
      if (twipsy) {
        twipsy[options]()
      }
      return this
    }

    options = $.extend({}, $.fn[name].defaults, options)

    function get(ele) {
      var twipsy = $.data(ele, name)

      if (!twipsy) {
        twipsy = new Constructor(ele, $.fn.twipsy.elementOptions(ele, options))
        $.data(ele, name, twipsy)
      }

      return twipsy
    }

    function enter() {
      var twipsy = get(this)
      twipsy.hoverState = 'in'

      if (options.delayIn == 0) {
        twipsy.show()
      } else {
        twipsy.fixTitle()
        setTimeout(function() {
          if (twipsy.hoverState == 'in') {
            twipsy.show()
          }
        }, options.delayIn)
      }
    }

    function leave() {
      var twipsy = get(this)
      twipsy.hoverState = 'out'
      if (options.delayOut == 0) {
        twipsy.hide()
      } else {
        setTimeout(function() {
          if (twipsy.hoverState == 'out') {
            twipsy.hide()
          }
        }, options.delayOut)
      }
    }

    if (!options.live) {
      this.each(function() {
        get(this)
      })
    }

    if (options.trigger != 'manual') {
      binder   = options.live ? 'live' : 'bind'
      eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus'
      eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur'
      this[binder](eventIn, enter)[binder](eventOut, leave)
    }

    return this
  }

  $.fn.twipsy.Twipsy = Twipsy

  $.fn.twipsy.defaults = {
    animate: true
  , delayIn: 0
  , delayOut: 0
  , fallback: ''
  , placement: 'above'
  , html: false
  , live: false
  , offset: 0
  , title: 'title'
  , trigger: 'hover'
  , template: '<div class="twipsy-arrow"></div><div class="twipsy-inner"></div>'
  }

  $.fn.twipsy.elementOptions = function(ele, options) {
    return $.extend({}, options, $(ele).data())
  }

}( window.jQuery || window.ender );
/* ==========================================================
 * bootstrap-alerts.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function( $ ){

  "use strict"

  /* CSS TRANSITION SUPPORT (https://gist.github.com/373874)
   * ======================================================= */

   var transitionEnd

   $(document).ready(function () {

     $.support.transition = (function () {
       var thisBody = document.body || document.documentElement
         , thisStyle = thisBody.style
         , support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined
       return support
     })()

     // set CSS transition event type
     if ( $.support.transition ) {
       transitionEnd = "TransitionEnd"
       if ( $.browser.webkit ) {
        transitionEnd = "webkitTransitionEnd"
       } else if ( $.browser.mozilla ) {
        transitionEnd = "transitionend"
       } else if ( $.browser.opera ) {
        transitionEnd = "oTransitionEnd"
       }
     }

   })

 /* ALERT CLASS DEFINITION
  * ====================== */

  var Alert = function ( content, options ) {
    this.settings = $.extend({}, $.fn.alert.defaults, options)
    this.$element = $(content)
      .delegate(this.settings.selector, 'click', this.close)
  }

  Alert.prototype = {

    close: function (e) {
      var $element = $(this).parent('.alert-message')

      e && e.preventDefault()
      $element.removeClass('in')

      function removeElement () {
        $element.remove()
      }

      $.support.transition && $element.hasClass('fade') ?
        $element.bind(transitionEnd, removeElement) :
        removeElement()
    }

  }


 /* ALERT PLUGIN DEFINITION
  * ======================= */

  $.fn.alert = function ( options ) {

    if ( options === true ) {
      return this.data('alert')
    }

    return this.each(function () {
      var $this = $(this)

      if ( typeof options == 'string' ) {
        return $this.data('alert')[options]()
      }

      $(this).data('alert', new Alert( this, options ))

    })
  }

  $.fn.alert.defaults = {
    selector: '.close'
  }

  $(document).ready(function () {
    new Alert($('body'), {
      selector: '.alert-message[data-alert] .close'
    })
  })

}( window.jQuery || window.ender );
/* ============================================================
 * bootstrap-buttons.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

!function( $ ){

  "use strict"

  function setState(el, state) {
    var d = 'disabled'
      , $el = $(el)
      , data = $el.data()

    state = state + 'Text'
    data.resetText || $el.data('resetText', $el.html())

    $el.html( data[state] || $.fn.button.defaults[state] )

    state == 'loadingText' ?
      $el.addClass(d).attr(d, d) :
      $el.removeClass(d).removeAttr(d)
  }

  function toggle(el) {
    $(el).toggleClass('active')
  }

  $.fn.button = function(options) {
    return this.each(function () {
      if (options == 'toggle') {
        return toggle(this)
      }
      options && setState(this, options)
    })
  }

  $.fn.button.defaults = {
    loadingText: 'loading...'
  }

  $(function () {
    $('body').delegate('.btn[data-toggle]', 'click', function () {
      $(this).button('toggle')
    })
  })

}( window.jQuery || window.ender );
/* ============================================================
 * bootstrap-dropdown.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#dropdown
 * ============================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function( $ ){

  "use strict"

  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  $.fn.dropdown = function ( selector ) {
    return this.each(function () {
      $(this).delegate(selector || d, 'click', function (e) {
        var li = $(this).parent('li')
          , isActive = li.hasClass('open')

        clearMenus()
        !isActive && li.toggleClass('open')
        return false
      })
    })
  }

  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  var d = 'a.menu, .dropdown-toggle'

  function clearMenus() {
    $(d).parent('li').removeClass('open')
  }

  $(function () {
    $('html').bind("click", clearMenus)
    $('body').dropdown( '[data-dropdown] a.menu, [data-dropdown] .dropdown-toggle' )
  })

}( window.jQuery || window.ender );

/* =========================================================
 * bootstrap-modal.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#modal
 * =========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function( $ ){

  "use strict"

 /* CSS TRANSITION SUPPORT (https://gist.github.com/373874)
  * ======================================================= */

  var transitionEnd

  $(document).ready(function () {

    $.support.transition = (function () {
      var thisBody = document.body || document.documentElement
        , thisStyle = thisBody.style
        , support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined
      return support
    })()

    // set CSS transition event type
    if ( $.support.transition ) {
      transitionEnd = "TransitionEnd"
      if ( $.browser.webkit ) {
      	transitionEnd = "webkitTransitionEnd"
      } else if ( $.browser.mozilla ) {
      	transitionEnd = "transitionend"
      } else if ( $.browser.opera ) {
      	transitionEnd = "oTransitionEnd"
      }
    }

  })


 /* MODAL PUBLIC CLASS DEFINITION
  * ============================= */

  var Modal = function ( content, options ) {
    this.settings = $.extend({}, $.fn.modal.defaults, options)
    this.$element = $(content)
      .delegate('.close', 'click.modal', $.proxy(this.hide, this))

    if ( this.settings.show ) {
      this.show()
    }

    return this
  }

  Modal.prototype = {

      toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
        this.isShown = true
        this.$element.trigger('show')

        escape.call(this)
        backdrop.call(this, function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          that.$element
            .appendTo(document.body)
            .show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element.addClass('in')

          transition ?
            that.$element.one(transitionEnd, function () { that.$element.trigger('shown') }) :
            that.$element.trigger('shown')

        })

        return this
      }

    , hide: function (e) {
        e && e.preventDefault()

        if ( !this.isShown ) {
          return this
        }

        var that = this
        this.isShown = false

        escape.call(this)

        this.$element
          .trigger('hide')
          .removeClass('in')

        $.support.transition && this.$element.hasClass('fade') ?
          hideWithTransition.call(this) :
          hideModal.call(this)

        return this
      }

  }


 /* MODAL PRIVATE METHODS
  * ===================== */

  function hideWithTransition() {
    // firefox drops transitionEnd events :{o
    var that = this
      , timeout = setTimeout(function () {
          that.$element.unbind(transitionEnd)
          hideModal.call(that)
        }, 500)

    this.$element.one(transitionEnd, function () {
      clearTimeout(timeout)
      hideModal.call(that)
    })
  }

  function hideModal (that) {
    this.$element
      .hide()
      .trigger('hidden')

    backdrop.call(this)
  }

  function backdrop ( callback ) {
    var that = this
      , animate = this.$element.hasClass('fade') ? 'fade' : ''
    if ( this.isShown && this.settings.backdrop ) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      if ( this.settings.backdrop != 'static' ) {
        this.$backdrop.click($.proxy(this.hide, this))
      }

      if ( doAnimate ) {
        this.$backdrop[0].offsetWidth // force reflow
      }

      this.$backdrop.addClass('in')

      doAnimate ?
        this.$backdrop.one(transitionEnd, callback) :
        callback()

    } else if ( !this.isShown && this.$backdrop ) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop.one(transitionEnd, $.proxy(removeBackdrop, this)) :
        removeBackdrop.call(this)

    } else if ( callback ) {
       callback()
    }
  }

  function removeBackdrop() {
    this.$backdrop.remove()
    this.$backdrop = null
  }

  function escape() {
    var that = this
    if ( this.isShown && this.settings.keyboard ) {
      $(document).bind('keyup.modal', function ( e ) {
        if ( e.which == 27 ) {
          that.hide()
        }
      })
    } else if ( !this.isShown ) {
      $(document).unbind('keyup.modal')
    }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  $.fn.modal = function ( options ) {
    var modal = this.data('modal')

    if (!modal) {

      if (typeof options == 'string') {
        options = {
          show: /show|toggle/.test(options)
        }
      }

      return this.each(function () {
        $(this).data('modal', new Modal(this, options))
      })
    }

    if ( options === true ) {
      return modal
    }

    if ( typeof options == 'string' ) {
      modal[options]()
    } else if ( modal ) {
      modal.toggle()
    }

    return this
  }

  $.fn.modal.Modal = Modal

  $.fn.modal.defaults = {
    backdrop: false
  , keyboard: false
  , show: false
  }


 /* MODAL DATA- IMPLEMENTATION
  * ========================== */

  $(document).ready(function () {
    $('body').delegate('[data-controls-modal]', 'click', function (e) {
      e.preventDefault()
      var $this = $(this).data('show', true)
      $('#' + $this.attr('data-controls-modal')).modal( $this.data() )
    })
  })

}( window.jQuery || window.ender );

/* ===========================================================
 * bootstrap-popover.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#popover
 * ===========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function( $ ) {

 "use strict"

  var Popover = function ( element, options ) {
    this.$element = $(element)
    this.options = options
    this.enabled = true
    this.fixTitle()
  }

  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TWIPSY.js
     ========================================= */

  Popover.prototype = $.extend({}, $.fn.twipsy.Twipsy.prototype, {

    setContent: function () {
      var $tip = this.tip()
      $tip.find('.title')[this.options.html ? 'html' : 'text'](this.getTitle())
      $tip.find('.content p')[this.options.html ? 'html' : 'text'](this.getContent())
      $tip[0].className = 'popover'
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
       , $e = this.$element
       , o = this.options

      if (typeof this.options.content == 'string') {
        content = this.options.content
      } else if (typeof this.options.content == 'function') {
        content = this.options.content.call(this.$element[0])
      }
      return content
    }

  , tip: function() {
      if (!this.$tip) {
        this.$tip = $('<div class="popover" />')
          .html(this.options.template)
      }
      return this.$tip
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  $.fn.popover = function (options) {
    if (typeof options == 'object') options = $.extend({}, $.fn.popover.defaults, options)
    $.fn.twipsy.initWith.call(this, options, Popover, 'popover')
    return this
  }

  $.fn.popover.defaults = $.extend({} , $.fn.twipsy.defaults, {
    placement: 'right'
  , template: '<div class="arrow"></div><div class="inner"><h3 class="title"></h3><div class="content"><p></p></div></div>'
  })

}( window.jQuery || window.ender );
/* =============================================================
 * bootstrap-scrollspy.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */


!function ( $ ) {

  "use strict"

  var $window = $(window)

  function ScrollSpy( topbar, selector ) {
    var processScroll = $.proxy(this.processScroll, this)
    this.$topbar = $(topbar)
    this.selector = selector || 'li > a'
    this.refresh()
    this.$topbar.delegate(this.selector, 'click', processScroll)
    $window.scroll(processScroll)
    this.processScroll()
  }

  ScrollSpy.prototype = {

      refresh: function () {
        this.targets = this.$topbar.find(this.selector).map(function () {
          var href = $(this).attr('href')
          return /^#\w/.test(href) && $(href).length ? href : null
        })

        this.offsets = $.map(this.targets, function (id) {
          return $(id).offset().top
        })
      }

    , processScroll: function () {
        var scrollTop = $window.scrollTop() + 10
          , offsets = this.offsets
          , targets = this.targets
          , activeTarget = this.activeTarget
          , i

        for (i = offsets.length; i--;) {
          activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
            && this.activateButton( targets[i] )
        }
      }

    , activateButton: function (target) {
        this.activeTarget = target

        this.$topbar
          .find(this.selector).parent('.active')
          .removeClass('active')

        this.$topbar
          .find(this.selector + '[href="' + target + '"]')
          .parent('li')
          .addClass('active')
      }

  }

  /* SCROLLSPY PLUGIN DEFINITION
   * =========================== */

  $.fn.scrollSpy = function( options ) {
    var scrollspy = this.data('scrollspy')

    if (!scrollspy) {
      return this.each(function () {
        $(this).data('scrollspy', new ScrollSpy( this, options ))
      })
    }

    if ( options === true ) {
      return scrollspy
    }

    if ( typeof options == 'string' ) {
      scrollspy[options]()
    }

    return this
  }

  $(document).ready(function () {
    $('body').scrollSpy('[data-scrollspy] li > a')
  })

}( window.jQuery || window.ender );
/* ========================================================
 * bootstrap-tabs.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function( $ ){

  "use strict"

  function activate ( element, container ) {
    container
      .find('> .active')
      .removeClass('active')
      .find('> .dropdown-menu > .active')
      .removeClass('active')

    element.addClass('active')

    if ( element.parent('.dropdown-menu') ) {
      element.closest('li.dropdown').addClass('active')
    }
  }

  function tab( e ) {
    var $this = $(this)
      , $ul = $this.closest('ul:not(.dropdown-menu)')
      , href = $this.attr('href')
      , previous
      , $href

    if ( /^#\w+/.test(href) ) {
      e.preventDefault()

      if ( $this.parent('li').hasClass('active') ) {
        return
      }

      previous = $ul.find('.active a').last()[0]
      $href = $(href)

      activate($this.parent('li'), $ul)
      activate($href, $href.parent())

      $this.trigger({
        type: 'change'
      , relatedTarget: previous
      })
    }
  }


 /* TABS/PILLS PLUGIN DEFINITION
  * ============================ */

  $.fn.tabs = $.fn.pills = function ( selector ) {
    return this.each(function () {
      $(this).delegate(selector || '.tabs li > a, .pills > li > a', 'click', tab)
    })
  }

  $(document).ready(function () {
    $('body').tabs('ul[data-tabs] li > a, ul[data-pills] > li > a')
  })

}( window.jQuery || window.ender );

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*
 * Default text - jQuery plugin for html5 dragging files from desktop to browser
 *
 * Author: Weixi Yen
 *
 * Email: [Firstname][Lastname]@gmail.com
 *
 * Copyright (c) 2010 Resopollution
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.github.com/weixiyen/jquery-filedrop
 *
 * Version:  0.1.0
 *
 * Features:
 *      Allows sending of extra parameters with file.
 *      Works with Firefox 3.6+
 *      Future-compliant with HTML5 spec (will work with Webkit browsers and IE9)
 * Usage:
 * 	See README at project homepage
 *
 */
;(function($) {

  jQuery.event.props.push("dataTransfer");

  var opts = {},
      default_opts = {
      fallback_id: '',
      url: '',
      refresh: 1000,
      paramname: 'userfile',
      maxfiles: 25,           // Ignored if queuefiles is set > 0
      maxfilesize: 1,         // MB file size limit
      queuefiles: 0,          // Max files before queueing (for large volume uploads)
      queuewait: 200,         // Queue wait time if full
      data: {},
      headers: {},
      drop: empty,
      dragEnter: empty,
      dragOver: empty,
      dragLeave: empty,
      docEnter: empty,
      docOver: empty,
      docLeave: empty,
      beforeEach: empty,
      afterAll: empty,
      rename: empty,
      error: function(err, file, i) {
        alert(err);
      },
      uploadStarted: empty,
      uploadFinished: empty,
      progressUpdated: empty,
      speedUpdated: empty
      },
      errors = ["BrowserNotSupported", "TooManyFiles", "FileTooLarge"],
      doc_leave_timer, stop_loop = false,
      files_count = 0,
      files;

  $.fn.filedrop = function(options) {
    opts = $.extend({}, default_opts, options);

    this.bind('drop', drop).bind('dragenter', dragEnter).bind('dragover', dragOver).bind('dragleave', dragLeave);
    $(document).bind('drop', docDrop).bind('dragenter', docEnter).bind('dragover', docOver).bind('dragleave', docLeave);

    $('#' + opts.fallback_id).change(function(e) {
      opts.drop(e)
      files = e.target.files
      files_count = files.length
      upload()
    })
  };

  function drop(e) {
    opts.drop(e);
    files = e.dataTransfer.files;
    if (files === null || files === undefined) {
      opts.error(errors[0]);
      return false;
    }
    files_count = files.length;
    upload();
    e.preventDefault();
    return false;
  }

  function getBuilder(filename, filedata, mime, boundary) {
    var dashdash = '--',
        crlf = '\r\n',
        builder = '';

    if (opts.data) {
      var params = $.param(opts.data).split(/&/);

      $.each(params, function() {
        var pair = this.split(/=/, 2);
        var name = decodeURI(pair[0]);
        var val = decodeURI(pair[1]);

        builder += dashdash;
        builder += boundary;
        builder += crlf;
        builder += 'Content-Disposition: form-data; name="' + name + '"';
        builder += crlf;
        builder += crlf;
        builder += val;
        builder += crlf;
      });
    }

    builder += dashdash;
    builder += boundary;
    builder += crlf;
    builder += 'Content-Disposition: form-data; name="' + opts.paramname + '"';
    builder += '; filename="' + filename + '"';
    builder += crlf;

    builder += 'Content-Type: ' + mime;
    builder += crlf;
    builder += crlf;

    builder += filedata;
    builder += crlf;

    builder += dashdash;
    builder += boundary;
    builder += dashdash;
    builder += crlf;
    return builder;
  }

  function progress(e) {
    if (e.lengthComputable) {
      var percentage = Math.round((e.loaded * 100) / e.total);
      if (this.currentProgress != percentage) {

        this.currentProgress = percentage;
        opts.progressUpdated(this.index, this.file, this.currentProgress);

        var elapsed = new Date().getTime();
        var diffTime = elapsed - this.currentStart;
        if (diffTime >= opts.refresh) {
          var diffData = e.loaded - this.startData;
          var speed = diffData / diffTime; // KB per second
          opts.speedUpdated(this.index, this.file, speed);
          this.startData = e.loaded;
          this.currentStart = elapsed;
        }
      }
    }
  }

  // Respond to an upload
  function upload() {

    stop_loop = false;

    if (!files) {
      opts.error(errors[0]);
      return false;
    }

    var filesDone = 0,
        filesRejected = 0;

    if (files_count > opts.maxfiles && opts.queuefiles === 0) {
      opts.error(errors[1]);
      return false;
    }

    // Define queues to manage upload process
    var workQueue = [];
    var processingQueue = [];
    var doneQueue = [];

    // Add everything to the workQueue
    for (var i = 0; i < files_count; i++) {
      workQueue.push(i);
    }

    // Helper function to enable pause of processing to wait
    // for in process queue to complete
    var pause = function(timeout) {
        setTimeout(process, timeout);
        return;
    }

    // Process an upload, recursive
    var process = function() {

	        var fileIndex;

	        if (stop_loop) return false;

	        // Check to see if are in queue mode
	        if (opts.queuefiles > 0 && processingQueue.length >= opts.queuefiles) {

	          return pause(opts.queuewait);

	        } else {

	          // Take first thing off work queue
	          fileIndex = workQueue[0];
	          workQueue.splice(0, 1);

	          // Add to processing queue
	          processingQueue.push(fileIndex);

	        }

	        try {
	          if (beforeEach(files[fileIndex]) != false) {
	            if (fileIndex === files_count) return;
	            var reader = new FileReader(),
	                max_file_size = 1048576 * opts.maxfilesize;

	            reader.index = fileIndex;
	            if (files[fileIndex].size > max_file_size) {
	              opts.error(errors[2], files[fileIndex], fileIndex);
	              // Remove from queue
	              processingQueue.forEach(function(value, key) {
	                if (value === fileIndex) processingQueue.splice(key, 1);
	              });
	              filesRejected++;
	              return true;
	            }
	            reader.onloadend = send;
	            reader.readAsBinaryString(files[fileIndex]);

	          } else {
	            filesRejected++;
	          }
	        } catch (err) {
	          // Remove from queue
	          processingQueue.forEach(function(value, key) {
	            if (value === fileIndex) processingQueue.splice(key, 1);
	          });
	          opts.error(errors[0]);
	          return false;
	        }

	        // If we still have work to do,
	        if (workQueue.length > 0) {
	          process();
	        }

        };

    var send = function(e) {

      var fileIndex = ((typeof(e.srcElement) === "undefined") ? e.target : e.srcElement).index

      // Sometimes the index is not attached to the
      // event object. Find it by size. Hack for sure.
      if (e.target.index == undefined) {
        e.target.index = getIndexBySize(e.total);
      }

      var xhr = new XMLHttpRequest(),
          upload = xhr.upload,
          file = files[e.target.index],
          index = e.target.index,
          start_time = new Date().getTime(),
          boundary = '------multipartformboundary' + (new Date).getTime(),
          builder;

      newName = rename(file.name);
      mime = file.type
      if (typeof newName === "string") {
        builder = getBuilder(newName, e.target.result, mime, boundary);
      } else {
        builder = getBuilder(file.name, e.target.result, mime, boundary);
      }

      upload.index = index;
      upload.file = file;
      upload.downloadStartTime = start_time;
      upload.currentStart = start_time;
      upload.currentProgress = 0;
      upload.startData = 0;
      upload.addEventListener("progress", progress, false);

      xhr.open("POST", opts.url, true);
      xhr.setRequestHeader('content-type', 'multipart/form-data; boundary=' + boundary);

      // Add headers
      $.each(opts.headers, function(k, v) {
        xhr.setRequestHeader(k, v);
      });

      xhr.sendAsBinary(builder);

      opts.uploadStarted(index, file, files_count);

      xhr.onload = function() {
        if (xhr.responseText) {
          var now = new Date().getTime(),
              timeDiff = now - start_time,
              result = opts.uploadFinished(index, file, jQuery.parseJSON(xhr.responseText), timeDiff);
          filesDone++;

          // Remove from processing queue
          processingQueue.forEach(function(value, key) {
            if (value === fileIndex) processingQueue.splice(key, 1);
          });

          // Add to donequeue
          doneQueue.push(fileIndex);

          if (filesDone == files_count - filesRejected) {
            afterAll();
          }
          if (result === false) stop_loop = true;
        }
      };

    }

    // Initiate the processing loop
    process();

  }

  function getIndexBySize(size) {
    for (var i = 0; i < files_count; i++) {
      if (files[i].size == size) {
        return i;
      }
    }

    return undefined;
  }

  function rename(name) {
    return opts.rename(name);
  }

  function beforeEach(file) {
    return opts.beforeEach(file);
  }

  function afterAll() {
    return opts.afterAll();
  }

  function dragEnter(e) {
    clearTimeout(doc_leave_timer);
    e.preventDefault();
    opts.dragEnter(e);
  }

  function dragOver(e) {
    clearTimeout(doc_leave_timer);
    e.preventDefault();
    opts.docOver(e);
    opts.dragOver(e);
  }

  function dragLeave(e) {
    clearTimeout(doc_leave_timer);
    opts.dragLeave(e);
    e.stopPropagation();
  }

  function docDrop(e) {
    e.preventDefault();
    opts.docLeave(e);
    return false;
  }

  function docEnter(e) {
    clearTimeout(doc_leave_timer);
    e.preventDefault();
    opts.docEnter(e);
    return false;
  }

  function docOver(e) {
    clearTimeout(doc_leave_timer);
    e.preventDefault();
    opts.docOver(e);
    return false;
  }

  function docLeave(e) {
    doc_leave_timer = setTimeout(function() {
      opts.docLeave(e);
    }, 200);
  }

  function empty() {}

  try {
    if (XMLHttpRequest.prototype.sendAsBinary) return;
    XMLHttpRequest.prototype.sendAsBinary = function(datastr) {
      function byteValue(x) {
        return x.charCodeAt(0) & 0xff;
      }
      var ords = Array.prototype.map.call(datastr, byteValue);
      var ui8a = new Uint8Array(ords);
      this.send(ui8a.buffer);
    }
  } catch (e) {}

})(jQuery);

/*
 * jQuery File Upload Plugin 5.5.3
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, unparam: true, regexp: true */
/*global document, XMLHttpRequestUpload, Blob, File, FormData, location, jQuery */

(function ($) {
    'use strict';

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The namespace used for event handler binding on the dropZone and
            // fileInput collections.
            // If not set, the name of the widget ("fileupload") is used.
            namespace: undefined,
            // The drop target collection, by the default the complete document.
            // Set to null or an empty collection to disable drag & drop support:
            dropZone: $(document),
            // The file input field collection, that is listened for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null or an empty collection to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uplaods, else
            // once for each file selection.
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows to override plugin options as well as define ajax settings.
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                data.submit();
            },

            // Other callbacks:
            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);
            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);
            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);
            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);
            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);
            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);
            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);
            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);
            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);
            // Callback for change events of the fileInput collection:
            // change: function (e, data) {}, // .bind('fileuploadchange', func);
            // Callback for paste events to the dropZone collection:
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);
            // Callback for drop events of the dropZone collection:
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);
            // Callback for dragover events of the dropZone collection:
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false
        },

        // A list of options that require a refresh after assigning a new value:
        _refreshOptionsList: ['namespace', 'dropZone', 'fileInput'],

        _isXHRUpload: function (options) {
            var undef = 'undefined';
            return !options.forceIframeTransport &&
                typeof XMLHttpRequestUpload !== undef && typeof File !== undef &&
                (!options.multipart || typeof FormData !== undef);
        },

        _getFormData: function (options) {
            var formData;
            if (typeof options.formData === 'function') {
                return options.formData(options.form);
            } else if ($.isArray(options.formData)) {
                return options.formData;
            } else if (options.formData) {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var total = data.total || this._getTotal(data.files),
                    loaded = parseInt(
                        e.loaded / e.total * (data.chunkSize || total),
                        10
                    ) + (data.uploadedBytes || 0);
                this._loaded += loaded - (data.loaded || data.uploadedBytes || 0);
                data.lengthComputable = true;
                data.loaded = loaded;
                data.total = total;
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger('progress', e, data);
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger('progressall', e, {
                    lengthComputable: true,
                    loaded: this._loaded,
                    total: this._total
                });
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload && xhr.upload.addEventListener) {
                xhr.upload.addEventListener('progress', function (e) {
                    that._onProgress(e, options);
                }, false);
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _initXHRData: function (options) {
            var formData,
                file = options.files[0];
            if (!options.multipart || options.blob) {
                // For non-multipart uploads and chunked uploads,
                // file meta data is not part of the request body,
                // so we transmit this data as part of the HTTP headers.
                // For cross domain requests, these headers must be allowed
                // via Access-Control-Allow-Headers or removed using
                // the beforeSend callback:
                options.headers = $.extend(options.headers, {
                    'X-File-Name': file.name,
                    'X-File-Type': file.type,
                    'X-File-Size': file.size
                });
                if (!options.blob) {
                    // Non-chunked non-multipart upload:
                    options.contentType = file.type;
                    options.data = file;
                } else if (!options.multipart) {
                    // Chunked non-multipart upload:
                    options.contentType = 'application/octet-stream';
                    options.data = options.blob;
                }
            }
            if (options.multipart && typeof FormData !== 'undefined') {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: options.paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: options.paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (options.formData instanceof FormData) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(options.paramName, options.blob);
                    } else {
                        $.each(options.files, function (index, file) {
                            // File objects are also Blob instances.
                            // This check allows the tests to run with
                            // dummy objects:
                            if (file instanceof Blob) {
                                formData.append(options.paramName, file);
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options, 'iframe');
            }
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
            }
            if (!options.paramName) {
                options.paramName = options.fileInput.prop('name') ||
                    'files[]';
            }
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type || options.form.prop('method') || '')
                .toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT') {
                options.type = 'POST';
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes = options.uploadedBytes || 0,
                mcs = options.maxChunkSize || fs,
                // Use the Blob methods with the slice implementation
                // according to the W3C Blob API specification:
                slice = file.webkitSlice || file.mozSlice || file.slice,
                upload,
                n,
                jqXHR,
                pipe;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = 'uploadedBytes';
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // n is the number of blobs to upload,
            // calculated via filesize, uploaded bytes and max chunk size:
            n = Math.ceil((fs - ub) / mcs);
            // The chunk upload method accepting the chunk number as parameter:
            upload = function (i) {
                if (!i) {
                    return that._getXHRPromise(true, options.context);
                }
                // Upload the blobs in sequential order:
                return upload(i -= 1).pipe(function () {
                    // Clone the options object for each chunk upload:
                    var o = $.extend({}, options);
                    o.blob = slice.call(
                        file,
                        ub + i * mcs,
                        ub + (i + 1) * mcs
                    );
                    // Store the current chunk size, as the blob itself
                    // will be dereferenced after data processing:
                    o.chunkSize = o.blob.size;
                    // Process the upload data (the blob and potential form data):
                    that._initXHRData(o);
                    // Add progress listeners for this chunk upload:
                    that._initProgressListener(o);
                    jqXHR = ($.ajax(o) || that._getXHRPromise(false, o.context))
                        .done(function () {
                            // Create a progress event if upload is done and
                            // no progress event has been invoked for this chunk:
                            if (!o.loaded) {
                                that._onProgress($.Event('progress', {
                                    lengthComputable: true,
                                    loaded: o.chunkSize,
                                    total: o.chunkSize
                                }), o);
                            }
                            options.uploadedBytes = o.uploadedBytes +=
                                o.chunkSize;
                        });
                    return jqXHR;
                });
            };
            // Return the piped Promise object, enhanced with an abort method,
            // which is delegated to the jqXHR object of the current upload,
            // and jqXHR callbacks mapped to the equivalent Promise methods:
            pipe = upload(n);
            pipe.abort = function () {
                return jqXHR.abort();
            };
            return this._enhancePromise(pipe);
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
            }
            this._active += 1;
            // Initialize the global progress values:
            this._loaded += data.uploadedBytes || 0;
            this._total += this._getTotal(data.files);
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            if (!this._isXHRUpload(options)) {
                // Create a progress event for each iframe load:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: 1,
                    total: 1
                }), options);
            }
            options.result = result;
            options.textStatus = textStatus;
            options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            options.jqXHR = jqXHR;
            options.textStatus = textStatus;
            options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._loaded -= options.loaded || options.uploadedBytes || 0;
                this._total -= options.total || this._getTotal(options.files);
            }
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            this._active -= 1;
            options.textStatus = textStatus;
            if (jqXHRorError && jqXHRorError.always) {
                options.jqXHR = jqXHRorError;
                options.result = jqXHRorResult;
            } else {
                options.jqXHR = jqXHRorResult;
                options.errorThrown = jqXHRorError;
            }
            this._trigger('always', null, options);
            if (this._active === 0) {
                // The stop callback is triggered when all uploads have
                // been completed, equivalent to the global ajaxStop event:
                this._trigger('stop');
                // Reset the global progress values:
                this._loaded = this._total = 0;
            }
        },

        _onSend: function (e, data) {
            var that = this,
                jqXHR,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function (resolve, args) {
                    that._sending += 1;
                    jqXHR = jqXHR || (
                        (resolve !== false &&
                        that._trigger('send', e, options) !== false &&
                        (that._chunkedUpload(options) || $.ajax(options))) ||
                        that._getXHRPromise(false, options.context, args)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._sending -= 1;
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (!nextSlot.isRejected()) {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.pipe(send);
                } else {
                    pipe = (this._sequence = this._sequence.pipe(send, send));
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    var args = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(args);
                        }
                        return send(false, args);
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                limit = options.limitMultiFileUploads,
                fileSet,
                i;
            if (!(options.singleFileUploads || limit) ||
                    !this._isXHRUpload(options)) {
                fileSet = [data.files];
            } else if (!options.singleFileUploads && limit) {
                fileSet = [];
                for (i = 0; i < data.files.length; i += limit) {
                    fileSet.push(data.files.slice(i, i + limit));
                }
            }
            data.originalFiles = data.files;
            $.each(fileSet || data.files, function (index, element) {
                var files = fileSet ? element : [element],
                    newData = $.extend({}, data, {files: files});
                newData.submit = function () {
                    newData.jqXHR = this.jqXHR =
                        (that._trigger('submit', e, this) !== false) &&
                        that._onSend(e, this);
                    return this.jqXHR;
                };
                return (result = that._trigger('add', e, newData));
            });
            return result;
        },

        // File Normalization for Gecko 1.9.1 (Firefox 3.5) support:
        _normalizeFile: function (index, file) {
            if (file.name === undefined && file.size === undefined) {
                file.name = file.fileName;
                file.size = file.fileSize;
            }
        },

        _replaceFileInput: function (input) {
            var inputClone = input.clone(true);
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // collection with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _onChange: function (e) {
            var that = e.data.fileupload,
                data = {
                    files: $.each($.makeArray(e.target.files), that._normalizeFile),
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            if (!data.files.length) {
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                data.files = [{name: e.target.value.replace(/^.*\\/, '')}];
            }
            if (that.options.replaceFileInput) {
                that._replaceFileInput(data.fileInput);
            }
            if (that._trigger('change', e, data) === false ||
                    that._onAdd(e, data) === false) {
                return false;
            }
        },

        _onPaste: function (e) {
            var that = e.data.fileupload,
                cbd = e.originalEvent.clipboardData,
                items = (cbd && cbd.items) || [],
                data = {files: []};
            $.each(items, function (index, item) {
                var file = item.getAsFile && item.getAsFile();
                if (file) {
                    data.files.push(file);
                }
            });
            if (that._trigger('paste', e, data) === false ||
                    that._onAdd(e, data) === false) {
                return false;
            }
        },

        _onDrop: function (e) {
            var that = e.data.fileupload,
                dataTransfer = e.dataTransfer = e.originalEvent.dataTransfer,
                data = {
                    files: $.each(
                        $.makeArray(dataTransfer && dataTransfer.files),
                        that._normalizeFile
                    )
                };
            if (that._trigger('drop', e, data) === false ||
                    that._onAdd(e, data) === false) {
                return false;
            }
            e.preventDefault();
        },

        _onDragOver: function (e) {
            var that = e.data.fileupload,
                dataTransfer = e.dataTransfer = e.originalEvent.dataTransfer;
            if (that._trigger('dragover', e) === false) {
                return false;
            }
            if (dataTransfer) {
                dataTransfer.dropEffect = dataTransfer.effectAllowed = 'copy';
            }
            e.preventDefault();
        },

        _initEventHandlers: function () {
            var ns = this.options.namespace;
            this.options.dropZone
                .bind('dragover.' + ns, {fileupload: this}, this._onDragOver)
                .bind('drop.' + ns, {fileupload: this}, this._onDrop)
                .bind('paste.' + ns, {fileupload: this}, this._onPaste);
            this.options.fileInput
                .bind('change.' + ns, {fileupload: this}, this._onChange);
        },

        _destroyEventHandlers: function () {
            var ns = this.options.namespace;
            this.options.dropZone
                .unbind('dragover.' + ns, this._onDragOver)
                .unbind('drop.' + ns, this._onDrop)
                .unbind('paste.' + ns, this._onPaste);
            this.options.fileInput
                .unbind('change.' + ns, this._onChange);
        },

        _beforeSetOption: function (key, value) {
            this._destroyEventHandlers();
        },

        _afterSetOption: function (key, value) {
            var options = this.options;
            if (!options.fileInput) {
                options.fileInput = $();
            }
            if (!options.dropZone) {
                options.dropZone = $();
            }
            this._initEventHandlers();
        },

        _setOption: function (key, value) {
            var refresh = $.inArray(key, this._refreshOptionsList) !== -1;
            if (refresh) {
                this._beforeSetOption(key, value);
            }
            $.Widget.prototype._setOption.call(this, key, value);
            if (refresh) {
                this._afterSetOption(key, value);
            }
        },

        _create: function () {
            var options = this.options;
            options.namespace = options.namespace || this.widgetName;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input:file') ?
                        this.element : this.element.find('input:file');
            } else if (!options.fileInput) {
                options.fileInput = $();
            }
            if (!options.dropZone) {
                options.dropZone = $();
            }
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = this._loaded = this._total = 0;
            this._initEventHandlers();
        },

        destroy: function () {
            this._destroyEventHandlers();
            $.Widget.prototype.destroy.call(this);
        },

        enable: function () {
            $.Widget.prototype.enable.call(this);
            this._initEventHandlers();
        },

        disable: function () {
            this._destroyEventHandlers();
            $.Widget.prototype.disable.call(this);
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            if (!data || this.options.disabled) {
                return;
            }
            data.files = $.each($.makeArray(data.files), this._normalizeFile);
            this._onAdd(null, data);
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                data.files = $.each($.makeArray(data.files), this._normalizeFile);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}(jQuery));

/*
 * jQuery Iframe Transport Plugin 1.2.5
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true, nomen: true */
/*global jQuery, document */

(function ($) {
    'use strict';

    // Helper variable to create unique names for the transport iframes:
    var counter = 0;

    // The iframe transport accepts three additional options:
    // options.fileInput: a jQuery collection of file input fields
    // options.paramName: the parameter name for the file form data,
    //  overrides the name property of the file input field(s)
    // options.formData: an array of objects with name and value properties,
    //  equivalent to the return data of .serializeArray(), e.g.:
    //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
    $.ajaxTransport('iframe', function (options) {
        if (options.async && (options.type === 'POST' || options.type === 'GET')) {
            var form,
                iframe;
            return {
                send: function (_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    // javascript:false as initial iframe src
                    // prevents warning popups on HTTPS in IE6.
                    // IE versions below IE8 cannot set the name property of
                    // elements that have already been added to the DOM,
                    // so we set the name along with the iframe HTML markup:
                    iframe = $(
                        '<iframe src="javascript:false;" name="iframe-transport-' +
                            (counter += 1) + '"></iframe>'
                    ).bind('load', function () {
                        var fileInputClones;
                        iframe
                            .unbind('load')
                            .bind('load', function () {
                                var response;
                                // Wrap in a try/catch block to catch exceptions thrown
                                // when trying to access cross-domain iframe contents:
                                try {
                                    response = iframe.contents();
                                    // Google Chrome and Firefox do not throw an
                                    // exception when calling iframe.contents() on
                                    // cross-domain requests, so we unify the response:
                                    if (!response.length || !response[0].firstChild) {
                                        throw new Error();
                                    }
                                } catch (e) {
                                    response = undefined;
                                }
                                // The complete callback returns the
                                // iframe content document as response object:
                                completeCallback(
                                    200,
                                    'success',
                                    {'iframe': response}
                                );
                                // Fix for IE endless progress bar activity bug
                                // (happens on form submits to iframe targets):
                                $('<iframe src="javascript:false;"></iframe>')
                                    .appendTo(form);
                                form.remove();
                            });
                        form
                            .prop('target', iframe.prop('name'))
                            .prop('action', options.url)
                            .prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function (index, field) {
                                $('<input type="hidden"/>')
                                    .prop('name', field.name)
                                    .val(field.value)
                                    .appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length &&
                                options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            // Insert a clone for each file input field:
                            options.fileInput.after(function (index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function () {
                                    $(this).prop('name', options.paramName);
                                });
                            }
                            // Appending the file input fields to the hidden form
                            // removes them from their original location:
                            form
                                .append(options.fileInput)
                                .prop('enctype', 'multipart/form-data')
                                // enctype must be set as encoding for IE:
                                .prop('encoding', 'multipart/form-data');
                        }
                        form.submit();
                        // Insert the file input fields at their original location
                        // by replacing the clones with the originals:
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function (index, input) {
                                var clone = $(fileInputClones[index]);
                                $(input).prop('name', clone.prop('name'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function () {
                    if (iframe) {
                        // javascript:false as iframe src aborts the request
                        // and prevents warning popups on HTTPS in IE6.
                        // concat is used to avoid the "Script URL" JSLint error:
                        iframe
                            .unbind('load')
                            .prop('src', 'javascript'.concat(':false;'));
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });

    // The iframe transport returns the iframe content document as response.
    // The following adds converters from iframe to text, json, html, and script:
    $.ajaxSetup({
        converters: {
            'iframe text': function (iframe) {
                return $(iframe[0].body).text();
            },
            'iframe json': function (iframe) {
                return $.parseJSON($(iframe[0].body).text());
            },
            'iframe html': function (iframe) {
                return $(iframe[0].body).html();
            },
            'iframe script': function (iframe) {
                return $.globalEval($(iframe[0].body).text());
            }
        }
    });

}(jQuery));

/*
 * jsTree 1.0-rc3
 * http://jstree.com/
 *
 * Copyright (c) 2010 Ivan Bozhanov (vakata.com)
 *
 * Licensed same as jquery - under the terms of either the MIT License or the GPL Version 2 License
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * $Date: 2011-02-09 01:17:14 +0200 (ср, 09 февр 2011) $
 * $Revision: 236 $
 */

/*jslint browser: true, onevar: true, undef: true, bitwise: true, strict: true */
/*global window : false, clearInterval: false, clearTimeout: false, document: false, setInterval: false, setTimeout: false, jQuery: false, navigator: false, XSLTProcessor: false, DOMParser: false, XMLSerializer: false*/

"use strict";

// top wrapper to prevent multiple inclusion (is this OK?)
(function () { if(jQuery && jQuery.jstree) { return; }
	var is_ie6 = false, is_ie7 = false, is_ff2 = false;

/* 
 * jsTree core
 */
(function ($) {
	// Common functions not related to jsTree 
	// decided to move them to a `vakata` "namespace"
	$.vakata = {};
	// CSS related functions
	$.vakata.css = {
		get_css : function(rule_name, delete_flag, sheet) {
			rule_name = rule_name.toLowerCase();
			var css_rules = sheet.cssRules || sheet.rules,
				j = 0;
			do {
				if(css_rules.length && j > css_rules.length + 5) { return false; }
				if(css_rules[j].selectorText && css_rules[j].selectorText.toLowerCase() == rule_name) {
					if(delete_flag === true) {
						if(sheet.removeRule) { sheet.removeRule(j); }
						if(sheet.deleteRule) { sheet.deleteRule(j); }
						return true;
					}
					else { return css_rules[j]; }
				}
			}
			while (css_rules[++j]);
			return false;
		},
		add_css : function(rule_name, sheet) {
			if($.jstree.css.get_css(rule_name, false, sheet)) { return false; }
			if(sheet.insertRule) { sheet.insertRule(rule_name + ' { }', 0); } else { sheet.addRule(rule_name, null, 0); }
			return $.vakata.css.get_css(rule_name);
		},
		remove_css : function(rule_name, sheet) { 
			return $.vakata.css.get_css(rule_name, true, sheet); 
		},
		add_sheet : function(opts) {
			var tmp = false, is_new = true;
			if(opts.str) {
				if(opts.title) { tmp = $("style[id='" + opts.title + "-stylesheet']")[0]; }
				if(tmp) { is_new = false; }
				else {
					tmp = document.createElement("style");
					tmp.setAttribute('type',"text/css");
					if(opts.title) { tmp.setAttribute("id", opts.title + "-stylesheet"); }
				}
				if(tmp.styleSheet) {
					if(is_new) { 
						document.getElementsByTagName("head")[0].appendChild(tmp); 
						tmp.styleSheet.cssText = opts.str; 
					}
					else {
						tmp.styleSheet.cssText = tmp.styleSheet.cssText + " " + opts.str; 
					}
				}
				else {
					tmp.appendChild(document.createTextNode(opts.str));
					document.getElementsByTagName("head")[0].appendChild(tmp);
				}
				return tmp.sheet || tmp.styleSheet;
			}
			if(opts.url) {
				if(document.createStyleSheet) {
					try { tmp = document.createStyleSheet(opts.url); } catch (e) { }
				}
				else {
					tmp			= document.createElement('link');
					tmp.rel		= 'stylesheet';
					tmp.type	= 'text/css';
					tmp.media	= "all";
					tmp.href	= opts.url;
					document.getElementsByTagName("head")[0].appendChild(tmp);
					return tmp.styleSheet;
				}
			}
		}
	};

	// private variables 
	var instances = [],			// instance array (used by $.jstree.reference/create/focused)
		focused_instance = -1,	// the index in the instance array of the currently focused instance
		plugins = {},			// list of included plugins
		prepared_move = {};		// for the move_node function

	// jQuery plugin wrapper (thanks to jquery UI widget function)
	$.fn.jstree = function (settings) {
		var isMethodCall = (typeof settings == 'string'), // is this a method call like $().jstree("open_node")
			args = Array.prototype.slice.call(arguments, 1), 
			returnValue = this;

		// if a method call execute the method on all selected instances
		if(isMethodCall) {
			if(settings.substring(0, 1) == '_') { return returnValue; }
			this.each(function() {
				var instance = instances[$.data(this, "jstree_instance_id")],
					methodValue = (instance && $.isFunction(instance[settings])) ? instance[settings].apply(instance, args) : instance;
					if(typeof methodValue !== "undefined" && (settings.indexOf("is_") === 0 || (methodValue !== true && methodValue !== false))) { returnValue = methodValue; return false; }
			});
		}
		else {
			this.each(function() {
				// extend settings and allow for multiple hashes and $.data
				var instance_id = $.data(this, "jstree_instance_id"),
					a = [],
					b = settings ? $.extend({}, true, settings) : {},
					c = $(this), 
					s = false, 
					t = [];
				a = a.concat(args);
				if(c.data("jstree")) { a.push(c.data("jstree")); }
				b = a.length ? $.extend.apply(null, [true, b].concat(a)) : b;

				// if an instance already exists, destroy it first
				if(typeof instance_id !== "undefined" && instances[instance_id]) { instances[instance_id].destroy(); }
				// push a new empty object to the instances array
				instance_id = parseInt(instances.push({}),10) - 1;
				// store the jstree instance id to the container element
				$.data(this, "jstree_instance_id", instance_id);
				// clean up all plugins
				b.plugins = $.isArray(b.plugins) ? b.plugins : $.jstree.defaults.plugins.slice();
				b.plugins.unshift("core");
				// only unique plugins
				b.plugins = b.plugins.sort().join(",,").replace(/(,|^)([^,]+)(,,\2)+(,|$)/g,"$1$2$4").replace(/,,+/g,",").replace(/,$/,"").split(",");

				// extend defaults with passed data
				s = $.extend(true, {}, $.jstree.defaults, b);
				s.plugins = b.plugins;
				$.each(plugins, function (i, val) { 
					if($.inArray(i, s.plugins) === -1) { s[i] = null; delete s[i]; } 
					else { t.push(i); }
				});
				s.plugins = t;

				// push the new object to the instances array (at the same time set the default classes to the container) and init
				instances[instance_id] = new $.jstree._instance(instance_id, $(this).addClass("jstree jstree-" + instance_id), s); 
				// init all activated plugins for this instance
				$.each(instances[instance_id]._get_settings().plugins, function (i, val) { instances[instance_id].data[val] = {}; });
				$.each(instances[instance_id]._get_settings().plugins, function (i, val) { if(plugins[val]) { plugins[val].__init.apply(instances[instance_id]); } });
				// initialize the instance
				setTimeout(function() { if(instances[instance_id]) { instances[instance_id].init(); } }, 0);
			});
		}
		// return the jquery selection (or if it was a method call that returned a value - the returned value)
		return returnValue;
	};
	// object to store exposed functions and objects
	$.jstree = {
		defaults : {
			plugins : []
		},
		_focused : function () { return instances[focused_instance] || null; },
		_reference : function (needle) { 
			// get by instance id
			if(instances[needle]) { return instances[needle]; }
			// get by DOM (if still no luck - return null
			var o = $(needle); 
			if(!o.length && typeof needle === "string") { o = $("#" + needle); }
			if(!o.length) { return null; }
			return instances[o.closest(".jstree").data("jstree_instance_id")] || null; 
		},
		_instance : function (index, container, settings) { 
			// for plugins to store data in
			this.data = { core : {} };
			this.get_settings	= function () { return $.extend(true, {}, settings); };
			this._get_settings	= function () { return settings; };
			this.get_index		= function () { return index; };
			this.get_container	= function () { return container; };
			this.get_container_ul = function () { return container.children("ul:eq(0)"); };
			this._set_settings	= function (s) { 
				settings = $.extend(true, {}, settings, s);
			};
		},
		_fn : { },
		plugin : function (pname, pdata) {
			pdata = $.extend({}, {
				__init		: $.noop, 
				__destroy	: $.noop,
				_fn			: {},
				defaults	: false
			}, pdata);
			plugins[pname] = pdata;

			$.jstree.defaults[pname] = pdata.defaults;
			$.each(pdata._fn, function (i, val) {
				val.plugin		= pname;
				val.old			= $.jstree._fn[i];
				$.jstree._fn[i] = function () {
					var rslt,
						func = val,
						args = Array.prototype.slice.call(arguments),
						evnt = new $.Event("before.jstree"),
						rlbk = false;

					if(this.data.core.locked === true && i !== "unlock" && i !== "is_locked") { return; }

					// Check if function belongs to the included plugins of this instance
					do {
						if(func && func.plugin && $.inArray(func.plugin, this._get_settings().plugins) !== -1) { break; }
						func = func.old;
					} while(func);
					if(!func) { return; }

					// context and function to trigger events, then finally call the function
					if(i.indexOf("_") === 0) {
						rslt = func.apply(this, args);
					}
					else {
						rslt = this.get_container().triggerHandler(evnt, { "func" : i, "inst" : this, "args" : args, "plugin" : func.plugin });
						if(rslt === false) { return; }
						if(typeof rslt !== "undefined") { args = rslt; }

						rslt = func.apply(
							$.extend({}, this, { 
								__callback : function (data) { 
									this.get_container().triggerHandler( i + '.jstree', { "inst" : this, "args" : args, "rslt" : data, "rlbk" : rlbk });
								},
								__rollback : function () { 
									rlbk = this.get_rollback();
									return rlbk;
								},
								__call_old : function (replace_arguments) {
									return func.old.apply(this, (replace_arguments ? Array.prototype.slice.call(arguments, 1) : args ) );
								}
							}), args);
					}

					// return the result
					return rslt;
				};
				$.jstree._fn[i].old = val.old;
				$.jstree._fn[i].plugin = pname;
			});
		},
		rollback : function (rb) {
			if(rb) {
				if(!$.isArray(rb)) { rb = [ rb ]; }
				$.each(rb, function (i, val) {
					instances[val.i].set_rollback(val.h, val.d);
				});
			}
		}
	};
	// set the prototype for all instances
	$.jstree._fn = $.jstree._instance.prototype = {};

	// load the css when DOM is ready
	$(function() {
		// code is copied from jQuery ($.browser is deprecated + there is a bug in IE)
		var u = navigator.userAgent.toLowerCase(),
			v = (u.match( /.+?(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
			css_string = '' + 
				'.jstree ul, .jstree li { display:block; margin:0 0 0 0; padding:0 0 0 0; list-style-type:none; } ' + 
				'.jstree li { display:block; min-height:18px; line-height:18px; white-space:nowrap; margin-left:18px; min-width:18px; } ' + 
				'.jstree-rtl li { margin-left:0; margin-right:18px; } ' + 
				'.jstree > ul > li { margin-left:0px; } ' + 
				'.jstree-rtl > ul > li { margin-right:0px; } ' + 
				'.jstree ins { display:inline-block; text-decoration:none; width:18px; height:18px; margin:0 0 0 0; padding:0; } ' + 
				'.jstree a { display:inline-block; line-height:16px; height:16px; color:black; white-space:nowrap; text-decoration:none; padding:1px 2px; margin:0; } ' + 
				'.jstree a:focus { outline: none; } ' + 
				'.jstree a > ins { height:16px; width:16px; } ' + 
				'.jstree a > .jstree-icon { margin-right:3px; } ' + 
				'.jstree-rtl a > .jstree-icon { margin-left:3px; margin-right:0; } ' + 
				'li.jstree-open > ul { display:block; } ' + 
				'li.jstree-closed > ul { display:none; } ';
		// Correct IE 6 (does not support the > CSS selector)
		if(/msie/.test(u) && parseInt(v, 10) == 6) { 
			is_ie6 = true;

			// fix image flicker and lack of caching
			try {
				document.execCommand("BackgroundImageCache", false, true);
			} catch (err) { }

			css_string += '' + 
				'.jstree li { height:18px; margin-left:0; margin-right:0; } ' + 
				'.jstree li li { margin-left:18px; } ' + 
				'.jstree-rtl li li { margin-left:0px; margin-right:18px; } ' + 
				'li.jstree-open ul { display:block; } ' + 
				'li.jstree-closed ul { display:none !important; } ' + 
				'.jstree li a { display:inline; border-width:0 !important; padding:0px 2px !important; } ' + 
				'.jstree li a ins { height:16px; width:16px; margin-right:3px; } ' + 
				'.jstree-rtl li a ins { margin-right:0px; margin-left:3px; } ';
		}
		// Correct IE 7 (shifts anchor nodes onhover)
		if(/msie/.test(u) && parseInt(v, 10) == 7) { 
			is_ie7 = true;
			css_string += '.jstree li a { border-width:0 !important; padding:0px 2px !important; } ';
		}
		// correct ff2 lack of display:inline-block
		if(!/compatible/.test(u) && /mozilla/.test(u) && parseFloat(v, 10) < 1.9) {
			is_ff2 = true;
			css_string += '' + 
				'.jstree ins { display:-moz-inline-box; } ' + 
				'.jstree li { line-height:12px; } ' + // WHY??
				'.jstree a { display:-moz-inline-box; } ' + 
				'.jstree .jstree-no-icons .jstree-checkbox { display:-moz-inline-stack !important; } ';
				/* this shouldn't be here as it is theme specific */
		}
		// the default stylesheet
		$.vakata.css.add_sheet({ str : css_string, title : "jstree" });
	});

	// core functions (open, close, create, update, delete)
	$.jstree.plugin("core", {
		__init : function () {
			this.data.core.locked = false;
			this.data.core.to_open = this.get_settings().core.initially_open;
			this.data.core.to_load = this.get_settings().core.initially_load;
		},
		defaults : { 
			html_titles	: false,
			animation	: 500,
			initially_open : [],
			initially_load : [],
			open_parents : true,
			notify_plugins : true,
			rtl			: false,
			load_open	: false,
			strings		: {
				loading		: "Loading ...",
				new_node	: "New node",
				multiple_selection : "Multiple selection"
			}
		},
		_fn : { 
			init	: function () { 
				this.set_focus(); 
				if(this._get_settings().core.rtl) {
					this.get_container().addClass("jstree-rtl").css("direction", "rtl");
				}
				this.get_container().html("<ul><li class='jstree-last jstree-leaf'><ins>&#160;</ins><a class='jstree-loading' href='#'><ins class='jstree-icon'>&#160;</ins>" + this._get_string("loading") + "</a></li></ul>");
				this.data.core.li_height = this.get_container_ul().find("li.jstree-closed, li.jstree-leaf").eq(0).height() || 18;

				this.get_container()
					.delegate("li > ins", "click.jstree", $.proxy(function (event) {
							var trgt = $(event.target);
							// if(trgt.is("ins") && event.pageY - trgt.offset().top < this.data.core.li_height) { this.toggle_node(trgt); }
							this.toggle_node(trgt);
						}, this))
					.bind("mousedown.jstree", $.proxy(function () { 
							this.set_focus(); // This used to be setTimeout(set_focus,0) - why?
						}, this))
					.bind("dblclick.jstree", function (event) { 
						var sel;
						if(document.selection && document.selection.empty) { document.selection.empty(); }
						else {
							if(window.getSelection) {
								sel = window.getSelection();
								try { 
									sel.removeAllRanges();
									sel.collapse();
								} catch (err) { }
							}
						}
					});
				if(this._get_settings().core.notify_plugins) {
					this.get_container()
						.bind("load_node.jstree", $.proxy(function (e, data) { 
								var o = this._get_node(data.rslt.obj),
									t = this;
								if(o === -1) { o = this.get_container_ul(); }
								if(!o.length) { return; }
								o.find("li").each(function () {
									var th = $(this);
									if(th.data("jstree")) {
										$.each(th.data("jstree"), function (plugin, values) {
											if(t.data[plugin] && $.isFunction(t["_" + plugin + "_notify"])) {
												t["_" + plugin + "_notify"].call(t, th, values);
											}
										});
									}
								});
							}, this));
				}
				if(this._get_settings().core.load_open) {
					this.get_container()
						.bind("load_node.jstree", $.proxy(function (e, data) { 
								var o = this._get_node(data.rslt.obj),
									t = this;
								if(o === -1) { o = this.get_container_ul(); }
								if(!o.length) { return; }
								o.find("li.jstree-open:not(:has(ul))").each(function () {
									t.load_node(this, $.noop, $.noop);
								});
							}, this));
				}
				this.__callback();
				this.load_node(-1, function () { this.loaded(); this.reload_nodes(); });
			},
			destroy	: function () { 
				var i,
					n = this.get_index(),
					s = this._get_settings(),
					_this = this;

				$.each(s.plugins, function (i, val) {
					try { plugins[val].__destroy.apply(_this); } catch(err) { }
				});
				this.__callback();
				// set focus to another instance if this one is focused
				if(this.is_focused()) { 
					for(i in instances) { 
						if(instances.hasOwnProperty(i) && i != n) { 
							instances[i].set_focus(); 
							break; 
						} 
					}
				}
				// if no other instance found
				if(n === focused_instance) { focused_instance = -1; }
				// remove all traces of jstree in the DOM (only the ones set using jstree*) and cleans all events
				this.get_container()
					.unbind(".jstree")
					.undelegate(".jstree")
					.removeData("jstree_instance_id")
					.find("[class^='jstree']")
						.andSelf()
						.attr("class", function () { return this.className.replace(/jstree[^ ]*|$/ig,''); });
				$(document)
					.unbind(".jstree-" + n)
					.undelegate(".jstree-" + n);
				// remove the actual data
				instances[n] = null;
				delete instances[n];
			},

			_core_notify : function (n, data) {
				if(data.opened) {
					this.open_node(n, false, true);
				}
			},

			lock : function () {
				this.data.core.locked = true;
				this.get_container().children("ul").addClass("jstree-locked").css("opacity","0.7");
				this.__callback({});
			},
			unlock : function () {
				this.data.core.locked = false;
				this.get_container().children("ul").removeClass("jstree-locked").css("opacity","1");
				this.__callback({});
			},
			is_locked : function () { return this.data.core.locked; },
			save_opened : function () {
				var _this = this;
				this.data.core.to_open = [];
				this.get_container_ul().find("li.jstree-open").each(function () { 
					if(this.id) { _this.data.core.to_open.push("#" + this.id.toString().replace(/^#/,"").replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:")); }
				});
				this.__callback(_this.data.core.to_open);
			},
			save_loaded : function () { },
			reload_nodes : function (is_callback) {
				var _this = this,
					done = true,
					current = [],
					remaining = [];
				if(!is_callback) { 
					this.data.core.reopen = false; 
					this.data.core.refreshing = true; 
					this.data.core.to_open = $.map($.makeArray(this.data.core.to_open), function (n) { return "#" + n.toString().replace(/^#/,"").replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:"); });
					this.data.core.to_load = $.map($.makeArray(this.data.core.to_load), function (n) { return "#" + n.toString().replace(/^#/,"").replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:"); });
					if(this.data.core.to_open.length) {
						this.data.core.to_load = this.data.core.to_load.concat(this.data.core.to_open);
					}
				}
				if(this.data.core.to_load.length) {
					$.each(this.data.core.to_load, function (i, val) {
						if(val == "#") { return true; }
						if($(val).length) { current.push(val); }
						else { remaining.push(val); }
					});
					if(current.length) {
						this.data.core.to_load = remaining;
						$.each(current, function (i, val) { 
							if(!_this._is_loaded(val)) {
								_this.load_node(val, function () { _this.reload_nodes(true); }, function () { _this.reload_nodes(true); });
								done = false;
							}
						});
					}
				}
				if(this.data.core.to_open.length) {
					$.each(this.data.core.to_open, function (i, val) {
						_this.open_node(val, false, true); 
					});
				}
				if(done) { 
					// TODO: find a more elegant approach to syncronizing returning requests
					if(this.data.core.reopen) { clearTimeout(this.data.core.reopen); }
					this.data.core.reopen = setTimeout(function () { _this.__callback({}, _this); }, 50);
					this.data.core.refreshing = false;
					this.reopen();
				}
			},
			reopen : function () {
				var _this = this;
				if(this.data.core.to_open.length) {
					$.each(this.data.core.to_open, function (i, val) {
						_this.open_node(val, false, true); 
					});
				}
				this.__callback({});
			},
			refresh : function (obj) {
				var _this = this;
				this.save_opened();
				if(!obj) { obj = -1; }
				obj = this._get_node(obj);
				if(!obj) { obj = -1; }
				if(obj !== -1) { obj.children("UL").remove(); }
				else { this.get_container_ul().empty(); }
				this.load_node(obj, function () { _this.__callback({ "obj" : obj}); _this.reload_nodes(); });
			},
			// Dummy function to fire after the first load (so that there is a jstree.loaded event)
			loaded	: function () { 
				this.__callback(); 
			},
			// deal with focus
			set_focus	: function () { 
				if(this.is_focused()) { return; }
				var f = $.jstree._focused();
				if(f) { f.unset_focus(); }

				this.get_container().addClass("jstree-focused"); 
				focused_instance = this.get_index(); 
				this.__callback();
			},
			is_focused	: function () { 
				return focused_instance == this.get_index(); 
			},
			unset_focus	: function () {
				if(this.is_focused()) {
					this.get_container().removeClass("jstree-focused"); 
					focused_instance = -1; 
				}
				this.__callback();
			},

			// traverse
			_get_node		: function (obj) { 
				var $obj = $(obj, this.get_container()); 
				if($obj.is(".jstree") || obj == -1) { return -1; } 
				$obj = $obj.closest("li", this.get_container()); 
				return $obj.length ? $obj : false; 
			},
			_get_next		: function (obj, strict) {
				obj = this._get_node(obj);
				if(obj === -1) { return this.get_container().find("> ul > li:first-child"); }
				if(!obj.length) { return false; }
				if(strict) { return (obj.nextAll("li").size() > 0) ? obj.nextAll("li:eq(0)") : false; }

				if(obj.hasClass("jstree-open")) { return obj.find("li:eq(0)"); }
				else if(obj.nextAll("li").size() > 0) { return obj.nextAll("li:eq(0)"); }
				else { return obj.parentsUntil(".jstree","li").next("li").eq(0); }
			},
			_get_prev		: function (obj, strict) {
				obj = this._get_node(obj);
				if(obj === -1) { return this.get_container().find("> ul > li:last-child"); }
				if(!obj.length) { return false; }
				if(strict) { return (obj.prevAll("li").length > 0) ? obj.prevAll("li:eq(0)") : false; }

				if(obj.prev("li").length) {
					obj = obj.prev("li").eq(0);
					while(obj.hasClass("jstree-open")) { obj = obj.children("ul:eq(0)").children("li:last"); }
					return obj;
				}
				else { var o = obj.parentsUntil(".jstree","li:eq(0)"); return o.length ? o : false; }
			},
			_get_parent		: function (obj) {
				obj = this._get_node(obj);
				if(obj == -1 || !obj.length) { return false; }
				var o = obj.parentsUntil(".jstree", "li:eq(0)");
				return o.length ? o : -1;
			},
			_get_children	: function (obj) {
				obj = this._get_node(obj);
				if(obj === -1) { return this.get_container().children("ul:eq(0)").children("li"); }
				if(!obj.length) { return false; }
				return obj.children("ul:eq(0)").children("li");
			},
			get_path		: function (obj, id_mode) {
				var p = [],
					_this = this;
				obj = this._get_node(obj);
				if(obj === -1 || !obj || !obj.length) { return false; }
				obj.parentsUntil(".jstree", "li").each(function () {
					p.push( id_mode ? this.id : _this.get_text(this) );
				});
				p.reverse();
				p.push( id_mode ? obj.attr("id") : this.get_text(obj) );
				return p;
			},

			// string functions
			_get_string : function (key) {
				return this._get_settings().core.strings[key] || key;
			},

			is_open		: function (obj) { obj = this._get_node(obj); return obj && obj !== -1 && obj.hasClass("jstree-open"); },
			is_closed	: function (obj) { obj = this._get_node(obj); return obj && obj !== -1 && obj.hasClass("jstree-closed"); },
			is_leaf		: function (obj) { obj = this._get_node(obj); return obj && obj !== -1 && obj.hasClass("jstree-leaf"); },
			correct_state	: function (obj) {
				obj = this._get_node(obj);
				if(!obj || obj === -1) { return false; }
				obj.removeClass("jstree-closed jstree-open").addClass("jstree-leaf").children("ul").remove();
				this.__callback({ "obj" : obj });
			},
			// open/close
			open_node	: function (obj, callback, skip_animation) {
				obj = this._get_node(obj);
				if(!obj.length) { return false; }
				if(!obj.hasClass("jstree-closed")) { if(callback) { callback.call(); } return false; }
				var s = skip_animation || is_ie6 ? 0 : this._get_settings().core.animation,
					t = this;
				if(!this._is_loaded(obj)) {
					obj.children("a").addClass("jstree-loading");
					this.load_node(obj, function () { t.open_node(obj, callback, skip_animation); }, callback);
				}
				else {
					if(this._get_settings().core.open_parents) {
						obj.parentsUntil(".jstree",".jstree-closed").each(function () {
							t.open_node(this, false, true);
						});
					}
					if(s) { obj.children("ul").css("display","none"); }
					obj.removeClass("jstree-closed").addClass("jstree-open").children("a").removeClass("jstree-loading");
					if(s) { obj.children("ul").stop(true, true).slideDown(s, function () { this.style.display = ""; t.after_open(obj); }); }
					else { t.after_open(obj); }
					this.__callback({ "obj" : obj });
					if(callback) { callback.call(); }
				}
			},
			after_open	: function (obj) { this.__callback({ "obj" : obj }); },
			close_node	: function (obj, skip_animation) {
				obj = this._get_node(obj);
				var s = skip_animation || is_ie6 ? 0 : this._get_settings().core.animation,
					t = this;
				if(!obj.length || !obj.hasClass("jstree-open")) { return false; }
				if(s) { obj.children("ul").attr("style","display:block !important"); }
				obj.removeClass("jstree-open").addClass("jstree-closed");
				if(s) { obj.children("ul").stop(true, true).slideUp(s, function () { this.style.display = ""; t.after_close(obj); }); }
				else { t.after_close(obj); }
				this.__callback({ "obj" : obj });
			},
			after_close	: function (obj) { this.__callback({ "obj" : obj }); },
			toggle_node	: function (obj) {
				obj = this._get_node(obj);
				if(obj.hasClass("jstree-closed")) { return this.open_node(obj); }
				if(obj.hasClass("jstree-open")) { return this.close_node(obj); }
			},
			open_all	: function (obj, do_animation, original_obj) {
				obj = obj ? this._get_node(obj) : -1;
				if(!obj || obj === -1) { obj = this.get_container_ul(); }
				if(original_obj) { 
					obj = obj.find("li.jstree-closed");
				}
				else {
					original_obj = obj;
					if(obj.is(".jstree-closed")) { obj = obj.find("li.jstree-closed").andSelf(); }
					else { obj = obj.find("li.jstree-closed"); }
				}
				var _this = this;
				obj.each(function () { 
					var __this = this; 
					if(!_this._is_loaded(this)) { _this.open_node(this, function() { _this.open_all(__this, do_animation, original_obj); }, !do_animation); }
					else { _this.open_node(this, false, !do_animation); }
				});
				// so that callback is fired AFTER all nodes are open
				if(original_obj.find('li.jstree-closed').length === 0) { this.__callback({ "obj" : original_obj }); }
			},
			close_all	: function (obj, do_animation) {
				var _this = this;
				obj = obj ? this._get_node(obj) : this.get_container();
				if(!obj || obj === -1) { obj = this.get_container_ul(); }
				obj.find("li.jstree-open").andSelf().each(function () { _this.close_node(this, !do_animation); });
				this.__callback({ "obj" : obj });
			},
			clean_node	: function (obj) {
				obj = obj && obj != -1 ? $(obj) : this.get_container_ul();
				obj = obj.is("li") ? obj.find("li").andSelf() : obj.find("li");
				obj.removeClass("jstree-last")
					.filter("li:last-child").addClass("jstree-last").end()
					.filter(":has(li)")
						.not(".jstree-open").removeClass("jstree-leaf").addClass("jstree-closed");
				obj.not(".jstree-open, .jstree-closed").addClass("jstree-leaf").children("ul").remove();
				this.__callback({ "obj" : obj });
			},
			// rollback
			get_rollback : function () { 
				this.__callback();
				return { i : this.get_index(), h : this.get_container().children("ul").clone(true), d : this.data }; 
			},
			set_rollback : function (html, data) {
				this.get_container().empty().append(html);
				this.data = data;
				this.__callback();
			},
			// Dummy functions to be overwritten by any datastore plugin included
			load_node	: function (obj, s_call, e_call) { this.__callback({ "obj" : obj }); },
			_is_loaded	: function (obj) { return true; },

			// Basic operations: create
			create_node	: function (obj, position, js, callback, is_loaded) {
				obj = this._get_node(obj);
				position = typeof position === "undefined" ? "last" : position;
				var d = $("<li />"),
					s = this._get_settings().core,
					tmp;

				if(obj !== -1 && !obj.length) { return false; }
				if(!is_loaded && !this._is_loaded(obj)) { this.load_node(obj, function () { this.create_node(obj, position, js, callback, true); }); return false; }

				this.__rollback();

				if(typeof js === "string") { js = { "data" : js }; }
				if(!js) { js = {}; }
				if(js.attr) { d.attr(js.attr); }
				if(js.metadata) { d.data(js.metadata); }
				if(js.state) { d.addClass("jstree-" + js.state); }
				if(!js.data) { js.data = this._get_string("new_node"); }
				if(!$.isArray(js.data)) { tmp = js.data; js.data = []; js.data.push(tmp); }
				$.each(js.data, function (i, m) {
					tmp = $("<a />");
					if($.isFunction(m)) { m = m.call(this, js); }
					if(typeof m == "string") { tmp.attr('href','#')[ s.html_titles ? "html" : "text" ](m); }
					else {
						if(!m.attr) { m.attr = {}; }
						if(!m.attr.href) { m.attr.href = '#'; }
						tmp.attr(m.attr)[ s.html_titles ? "html" : "text" ](m.title);
						if(m.language) { tmp.addClass(m.language); }
					}
					tmp.prepend("<ins class='jstree-icon'>&#160;</ins>");
					if(!m.icon && js.icon) { m.icon = js.icon; }
					if(m.icon) { 
						if(m.icon.indexOf("/") === -1) { tmp.children("ins").addClass(m.icon); }
						else { tmp.children("ins").css("background","url('" + m.icon + "') center center no-repeat"); }
					}
					d.append(tmp);
				});
				d.prepend("<ins class='jstree-icon'>&#160;</ins>");
				if(obj === -1) {
					obj = this.get_container();
					if(position === "before") { position = "first"; }
					if(position === "after") { position = "last"; }
				}
				switch(position) {
					case "before": obj.before(d); tmp = this._get_parent(obj); break;
					case "after" : obj.after(d);  tmp = this._get_parent(obj); break;
					case "inside":
					case "first" :
						if(!obj.children("ul").length) { obj.append("<ul />"); }
						obj.children("ul").prepend(d);
						tmp = obj;
						break;
					case "last":
						if(!obj.children("ul").length) { obj.append("<ul />"); }
						obj.children("ul").append(d);
						tmp = obj;
						break;
					default:
						if(!obj.children("ul").length) { obj.append("<ul />"); }
						if(!position) { position = 0; }
						tmp = obj.children("ul").children("li").eq(position);
						if(tmp.length) { tmp.before(d); }
						else { obj.children("ul").append(d); }
						tmp = obj;
						break;
				}
				if(tmp === -1 || tmp.get(0) === this.get_container().get(0)) { tmp = -1; }
				this.clean_node(tmp);
				this.__callback({ "obj" : d, "parent" : tmp });
				if(callback) { callback.call(this, d); }
				return d;
			},
			// Basic operations: rename (deal with text)
			get_text	: function (obj) {
				obj = this._get_node(obj);
				if(!obj.length) { return false; }
				var s = this._get_settings().core.html_titles;
				obj = obj.children("a:eq(0)");
				if(s) {
					obj = obj.clone();
					obj.children("INS").remove();
					return obj.html();
				}
				else {
					obj = obj.contents().filter(function() { return this.nodeType == 3; })[0];
					return obj.nodeValue;
				}
			},
			set_text	: function (obj, val) {
				obj = this._get_node(obj);
				if(!obj.length) { return false; }
				obj = obj.children("a:eq(0)");
				if(this._get_settings().core.html_titles) {
					var tmp = obj.children("INS").clone();
					obj.html(val).prepend(tmp);
					this.__callback({ "obj" : obj, "name" : val });
					return true;
				}
				else {
					obj = obj.contents().filter(function() { return this.nodeType == 3; })[0];
					this.__callback({ "obj" : obj, "name" : val });
					return (obj.nodeValue = val);
				}
			},
			rename_node : function (obj, val) {
				obj = this._get_node(obj);
				this.__rollback();
				if(obj && obj.length && this.set_text.apply(this, Array.prototype.slice.call(arguments))) { this.__callback({ "obj" : obj, "name" : val }); }
			},
			// Basic operations: deleting nodes
			delete_node : function (obj) {
				obj = this._get_node(obj);
				if(!obj.length) { return false; }
				this.__rollback();
				var p = this._get_parent(obj), prev = $([]), t = this;
				obj.each(function () {
					prev = prev.add(t._get_prev(this));
				});
				obj = obj.detach();
				if(p !== -1 && p.find("> ul > li").length === 0) {
					p.removeClass("jstree-open jstree-closed").addClass("jstree-leaf");
				}
				this.clean_node(p);
				this.__callback({ "obj" : obj, "prev" : prev, "parent" : p });
				return obj;
			},
			prepare_move : function (o, r, pos, cb, is_cb) {
				var p = {};

				p.ot = $.jstree._reference(o) || this;
				p.o = p.ot._get_node(o);
				p.r = r === - 1 ? -1 : this._get_node(r);
				p.p = (typeof pos === "undefined" || pos === false) ? "last" : pos; // TODO: move to a setting
				if(!is_cb && prepared_move.o && prepared_move.o[0] === p.o[0] && prepared_move.r[0] === p.r[0] && prepared_move.p === p.p) {
					this.__callback(prepared_move);
					if(cb) { cb.call(this, prepared_move); }
					return;
				}
				p.ot = $.jstree._reference(p.o) || this;
				p.rt = $.jstree._reference(p.r) || this; // r === -1 ? p.ot : $.jstree._reference(p.r) || this
				if(p.r === -1 || !p.r) {
					p.cr = -1;
					switch(p.p) {
						case "first":
						case "before":
						case "inside":
							p.cp = 0; 
							break;
						case "after":
						case "last":
							p.cp = p.rt.get_container().find(" > ul > li").length; 
							break;
						default:
							p.cp = p.p;
							break;
					}
				}
				else {
					if(!/^(before|after)$/.test(p.p) && !this._is_loaded(p.r)) {
						return this.load_node(p.r, function () { this.prepare_move(o, r, pos, cb, true); });
					}
					switch(p.p) {
						case "before":
							p.cp = p.r.index();
							p.cr = p.rt._get_parent(p.r);
							break;
						case "after":
							p.cp = p.r.index() + 1;
							p.cr = p.rt._get_parent(p.r);
							break;
						case "inside":
						case "first":
							p.cp = 0;
							p.cr = p.r;
							break;
						case "last":
							p.cp = p.r.find(" > ul > li").length; 
							p.cr = p.r;
							break;
						default: 
							p.cp = p.p;
							p.cr = p.r;
							break;
					}
				}
				p.np = p.cr == -1 ? p.rt.get_container() : p.cr;
				p.op = p.ot._get_parent(p.o);
				p.cop = p.o.index();
				if(p.op === -1) { p.op = p.ot ? p.ot.get_container() : this.get_container(); }
				if(!/^(before|after)$/.test(p.p) && p.op && p.np && p.op[0] === p.np[0] && p.o.index() < p.cp) { p.cp++; }
				//if(p.p === "before" && p.op && p.np && p.op[0] === p.np[0] && p.o.index() < p.cp) { p.cp--; }
				p.or = p.np.find(" > ul > li:nth-child(" + (p.cp + 1) + ")");
				prepared_move = p;
				this.__callback(prepared_move);
				if(cb) { cb.call(this, prepared_move); }
			},
			check_move : function () {
				var obj = prepared_move, ret = true, r = obj.r === -1 ? this.get_container() : obj.r;
				if(!obj || !obj.o || obj.or[0] === obj.o[0]) { return false; }
				if(obj.op && obj.np && obj.op[0] === obj.np[0] && obj.cp - 1 === obj.o.index()) { return false; }
				obj.o.each(function () { 
					if(r.parentsUntil(".jstree", "li").andSelf().index(this) !== -1) { ret = false; return false; }
				});
				return ret;
			},
			move_node : function (obj, ref, position, is_copy, is_prepared, skip_check) {
				if(!is_prepared) { 
					return this.prepare_move(obj, ref, position, function (p) {
						this.move_node(p, false, false, is_copy, true, skip_check);
					});
				}
				if(is_copy) { 
					prepared_move.cy = true;
				}
				if(!skip_check && !this.check_move()) { return false; }

				this.__rollback();
				var o = false;
				if(is_copy) {
					o = obj.o.clone(true);
					o.find("*[id]").andSelf().each(function () {
						if(this.id) { this.id = "copy_" + this.id; }
					});
				}
				else { o = obj.o; }

				if(obj.or.length) { obj.or.before(o); }
				else { 
					if(!obj.np.children("ul").length) { $("<ul />").appendTo(obj.np); }
					obj.np.children("ul:eq(0)").append(o); 
				}

				try { 
					obj.ot.clean_node(obj.op);
					obj.rt.clean_node(obj.np);
					if(!obj.op.find("> ul > li").length) {
						obj.op.removeClass("jstree-open jstree-closed").addClass("jstree-leaf").children("ul").remove();
					}
				} catch (e) { }

				if(is_copy) { 
					prepared_move.cy = true;
					prepared_move.oc = o; 
				}
				this.__callback(prepared_move);
				return prepared_move;
			},
			_get_move : function () { return prepared_move; }
		}
	});
})(jQuery);
//*/

/* 
 * jsTree ui plugin
 * This plugins handles selecting/deselecting/hovering/dehovering nodes
 */
(function ($) {
	var scrollbar_width, e1, e2;
	$(function() {
		if (/msie/.test(navigator.userAgent.toLowerCase())) {
			e1 = $('<textarea cols="10" rows="2"></textarea>').css({ position: 'absolute', top: -1000, left: 0 }).appendTo('body');
			e2 = $('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>').css({ position: 'absolute', top: -1000, left: 0 }).appendTo('body');
			scrollbar_width = e1.width() - e2.width();
			e1.add(e2).remove();
		} 
		else {
			e1 = $('<div />').css({ width: 100, height: 100, overflow: 'auto', position: 'absolute', top: -1000, left: 0 })
					.prependTo('body').append('<div />').find('div').css({ width: '100%', height: 200 });
			scrollbar_width = 100 - e1.width();
			e1.parent().remove();
		}
	});
	$.jstree.plugin("ui", {
		__init : function () { 
			this.data.ui.selected = $(); 
			this.data.ui.last_selected = false; 
			this.data.ui.hovered = null;
			this.data.ui.to_select = this.get_settings().ui.initially_select;

			this.get_container()
				.delegate("a", "click.jstree", $.proxy(function (event) {
						event.preventDefault();
						event.currentTarget.blur();
						if(!$(event.currentTarget).hasClass("jstree-loading")) {
							this.select_node(event.currentTarget, true, event);
						}
					}, this))
				.delegate("a", "mouseenter.jstree", $.proxy(function (event) {
						if(!$(event.currentTarget).hasClass("jstree-loading")) {
							this.hover_node(event.target);
						}
					}, this))
				.delegate("a", "mouseleave.jstree", $.proxy(function (event) {
						if(!$(event.currentTarget).hasClass("jstree-loading")) {
							this.dehover_node(event.target);
						}
					}, this))
				.bind("reopen.jstree", $.proxy(function () { 
						this.reselect();
					}, this))
				.bind("get_rollback.jstree", $.proxy(function () { 
						this.dehover_node();
						this.save_selected();
					}, this))
				.bind("set_rollback.jstree", $.proxy(function () { 
						this.reselect();
					}, this))
				.bind("close_node.jstree", $.proxy(function (event, data) { 
						var s = this._get_settings().ui,
							obj = this._get_node(data.rslt.obj),
							clk = (obj && obj.length) ? obj.children("ul").find("a.jstree-clicked") : $(),
							_this = this;
						if(s.selected_parent_close === false || !clk.length) { return; }
						clk.each(function () { 
							_this.deselect_node(this);
							if(s.selected_parent_close === "select_parent") { _this.select_node(obj); }
						});
					}, this))
				.bind("delete_node.jstree", $.proxy(function (event, data) { 
						var s = this._get_settings().ui.select_prev_on_delete,
							obj = this._get_node(data.rslt.obj),
							clk = (obj && obj.length) ? obj.find("a.jstree-clicked") : [],
							_this = this;
						clk.each(function () { _this.deselect_node(this); });
						if(s && clk.length) { 
							data.rslt.prev.each(function () { 
								if(this.parentNode) { _this.select_node(this); return false; /* if return false is removed all prev nodes will be selected */}
							});
						}
					}, this))
				.bind("move_node.jstree", $.proxy(function (event, data) { 
						if(data.rslt.cy) { 
							data.rslt.oc.find("a.jstree-clicked").removeClass("jstree-clicked");
						}
					}, this));
		},
		defaults : {
			select_limit : -1, // 0, 1, 2 ... or -1 for unlimited
			select_multiple_modifier : "ctrl", // on, or ctrl, shift, alt
			select_range_modifier : "shift",
			selected_parent_close : "select_parent", // false, "deselect", "select_parent"
			selected_parent_open : true,
			select_prev_on_delete : true,
			disable_selecting_children : false,
			initially_select : []
		},
		_fn : { 
			_get_node : function (obj, allow_multiple) {
				if(typeof obj === "undefined" || obj === null) { return allow_multiple ? this.data.ui.selected : this.data.ui.last_selected; }
				var $obj = $(obj, this.get_container()); 
				if($obj.is(".jstree") || obj == -1) { return -1; } 
				$obj = $obj.closest("li", this.get_container()); 
				return $obj.length ? $obj : false; 
			},
			_ui_notify : function (n, data) {
				if(data.selected) {
					this.select_node(n, false);
				}
			},
			save_selected : function () {
				var _this = this;
				this.data.ui.to_select = [];
				this.data.ui.selected.each(function () { if(this.id) { _this.data.ui.to_select.push("#" + this.id.toString().replace(/^#/,"").replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:")); } });
				this.__callback(this.data.ui.to_select);
			},
			reselect : function () {
				var _this = this,
					s = this.data.ui.to_select;
				s = $.map($.makeArray(s), function (n) { return "#" + n.toString().replace(/^#/,"").replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:"); });
				// this.deselect_all(); WHY deselect, breaks plugin state notifier?
				$.each(s, function (i, val) { if(val && val !== "#") { _this.select_node(val); } });
				this.data.ui.selected = this.data.ui.selected.filter(function () { return this.parentNode; });
				this.__callback();
			},
			refresh : function (obj) {
				this.save_selected();
				return this.__call_old();
			},
			hover_node : function (obj) {
				obj = this._get_node(obj);
				if(!obj.length) { return false; }
				//if(this.data.ui.hovered && obj.get(0) === this.data.ui.hovered.get(0)) { return; }
				if(!obj.hasClass("jstree-hovered")) { this.dehover_node(); }
				this.data.ui.hovered = obj.children("a").addClass("jstree-hovered").parent();
				this._fix_scroll(obj);
				this.__callback({ "obj" : obj });
			},
			dehover_node : function () {
				var obj = this.data.ui.hovered, p;
				if(!obj || !obj.length) { return false; }
				p = obj.children("a").removeClass("jstree-hovered").parent();
				if(this.data.ui.hovered[0] === p[0]) { this.data.ui.hovered = null; }
				this.__callback({ "obj" : obj });
			},
			select_node : function (obj, check, e) {
				obj = this._get_node(obj);
				if(obj == -1 || !obj || !obj.length) { return false; }
				var s = this._get_settings().ui,
					is_multiple = (s.select_multiple_modifier == "on" || (s.select_multiple_modifier !== false && e && e[s.select_multiple_modifier + "Key"])),
					is_range = (s.select_range_modifier !== false && e && e[s.select_range_modifier + "Key"] && this.data.ui.last_selected && this.data.ui.last_selected[0] !== obj[0] && this.data.ui.last_selected.parent()[0] === obj.parent()[0]),
					is_selected = this.is_selected(obj),
					proceed = true,
					t = this;
				if(check) {
					if(s.disable_selecting_children && is_multiple && 
						(
							(obj.parentsUntil(".jstree","li").children("a.jstree-clicked").length) ||
							(obj.children("ul").find("a.jstree-clicked:eq(0)").length)
						)
					) {
						return false;
					}
					proceed = false;
					switch(!0) {
						case (is_range):
							this.data.ui.last_selected.addClass("jstree-last-selected");
							obj = obj[ obj.index() < this.data.ui.last_selected.index() ? "nextUntil" : "prevUntil" ](".jstree-last-selected").andSelf();
							if(s.select_limit == -1 || obj.length < s.select_limit) {
								this.data.ui.last_selected.removeClass("jstree-last-selected");
								this.data.ui.selected.each(function () {
									if(this !== t.data.ui.last_selected[0]) { t.deselect_node(this); }
								});
								is_selected = false;
								proceed = true;
							}
							else {
								proceed = false;
							}
							break;
						case (is_selected && !is_multiple): 
							this.deselect_all();
							is_selected = false;
							proceed = true;
							break;
						case (!is_selected && !is_multiple): 
							if(s.select_limit == -1 || s.select_limit > 0) {
								this.deselect_all();
								proceed = true;
							}
							break;
						case (is_selected && is_multiple): 
							this.deselect_node(obj);
							break;
						case (!is_selected && is_multiple): 
							if(s.select_limit == -1 || this.data.ui.selected.length + 1 <= s.select_limit) { 
								proceed = true;
							}
							break;
					}
				}
				if(proceed && !is_selected) {
					if(!is_range) { this.data.ui.last_selected = obj; }
					obj.children("a").addClass("jstree-clicked");
					if(s.selected_parent_open) {
						obj.parents(".jstree-closed").each(function () { t.open_node(this, false, true); });
					}
					this.data.ui.selected = this.data.ui.selected.add(obj);
					this._fix_scroll(obj.eq(0));
					this.__callback({ "obj" : obj, "e" : e });
				}
			},
			_fix_scroll : function (obj) {
				var c = this.get_container()[0], t;
				if(c.scrollHeight > c.offsetHeight) {
					obj = this._get_node(obj);
					if(!obj || obj === -1 || !obj.length || !obj.is(":visible")) { return; }
					t = obj.offset().top - this.get_container().offset().top;
					if(t < 0) { 
						c.scrollTop = c.scrollTop + t - 1; 
					}
					if(t + this.data.core.li_height + (c.scrollWidth > c.offsetWidth ? scrollbar_width : 0) > c.offsetHeight) { 
						c.scrollTop = c.scrollTop + (t - c.offsetHeight + this.data.core.li_height + 1 + (c.scrollWidth > c.offsetWidth ? scrollbar_width : 0)); 
					}
				}
			},
			deselect_node : function (obj) {
				obj = this._get_node(obj);
				if(!obj.length) { return false; }
				if(this.is_selected(obj)) {
					obj.children("a").removeClass("jstree-clicked");
					this.data.ui.selected = this.data.ui.selected.not(obj);
					if(this.data.ui.last_selected.get(0) === obj.get(0)) { this.data.ui.last_selected = this.data.ui.selected.eq(0); }
					this.__callback({ "obj" : obj });
				}
			},
			toggle_select : function (obj) {
				obj = this._get_node(obj);
				if(!obj.length) { return false; }
				if(this.is_selected(obj)) { this.deselect_node(obj); }
				else { this.select_node(obj); }
			},
			is_selected : function (obj) { return this.data.ui.selected.index(this._get_node(obj)) >= 0; },
			get_selected : function (context) { 
				return context ? $(context).find("a.jstree-clicked").parent() : this.data.ui.selected; 
			},
			deselect_all : function (context) {
				var ret = context ? $(context).find("a.jstree-clicked").parent() : this.get_container().find("a.jstree-clicked").parent();
				ret.children("a.jstree-clicked").removeClass("jstree-clicked");
				this.data.ui.selected = $([]);
				this.data.ui.last_selected = false;
				this.__callback({ "obj" : ret });
			}
		}
	});
	// include the selection plugin by default
	$.jstree.defaults.plugins.push("ui");
})(jQuery);
//*/

/* 
 * jsTree CRRM plugin
 * Handles creating/renaming/removing/moving nodes by user interaction.
 */
(function ($) {
	$.jstree.plugin("crrm", { 
		__init : function () {
			this.get_container()
				.bind("move_node.jstree", $.proxy(function (e, data) {
					if(this._get_settings().crrm.move.open_onmove) {
						var t = this;
						data.rslt.np.parentsUntil(".jstree").andSelf().filter(".jstree-closed").each(function () {
							t.open_node(this, false, true);
						});
					}
				}, this));
		},
		defaults : {
			input_width_limit : 200,
			move : {
				always_copy			: false, // false, true or "multitree"
				open_onmove			: true,
				default_position	: "last",
				check_move			: function (m) { return true; }
			}
		},
		_fn : {
			_show_input : function (obj, callback) {
				obj = this._get_node(obj);
				var rtl = this._get_settings().core.rtl,
					w = this._get_settings().crrm.input_width_limit,
					w1 = obj.children("ins").width(),
					w2 = obj.find("> a:visible > ins").width() * obj.find("> a:visible > ins").length,
					t = this.get_text(obj),
					h1 = $("<div />", { css : { "position" : "absolute", "top" : "-200px", "left" : (rtl ? "0px" : "-1000px"), "visibility" : "hidden" } }).appendTo("body"),
					h2 = obj.css("position","relative").append(
					$("<input />", { 
						"value" : t,
						"class" : "jstree-rename-input",
						// "size" : t.length,
						"css" : {
							"padding" : "0",
							"border" : "1px solid silver",
							"position" : "absolute",
							"left"  : (rtl ? "auto" : (w1 + w2 + 4) + "px"),
							"right" : (rtl ? (w1 + w2 + 4) + "px" : "auto"),
							"top" : "0px",
							"height" : (this.data.core.li_height - 2) + "px",
							"lineHeight" : (this.data.core.li_height - 2) + "px",
							"width" : "150px" // will be set a bit further down
						},
						"blur" : $.proxy(function () {
							var i = obj.children(".jstree-rename-input"),
								v = i.val();
							if(v === "") { v = t; }
							h1.remove();
							i.remove(); // rollback purposes
							this.set_text(obj,t); // rollback purposes
							this.rename_node(obj, v);
							callback.call(this, obj, v, t);
							obj.css("position","");
						}, this),
						"keyup" : function (event) {
							var key = event.keyCode || event.which;
							if(key == 27) { this.value = t; this.blur(); return; }
							else if(key == 13) { this.blur(); return; }
							else {
								h2.width(Math.min(h1.text("pW" + this.value).width(),w));
							}
						},
						"keypress" : function(event) {
							var key = event.keyCode || event.which;
							if(key == 13) { return false; }
						}
					})
				).children(".jstree-rename-input"); 
				this.set_text(obj, "");
				h1.css({
						fontFamily		: h2.css('fontFamily')		|| '',
						fontSize		: h2.css('fontSize')		|| '',
						fontWeight		: h2.css('fontWeight')		|| '',
						fontStyle		: h2.css('fontStyle')		|| '',
						fontStretch		: h2.css('fontStretch')		|| '',
						fontVariant		: h2.css('fontVariant')		|| '',
						letterSpacing	: h2.css('letterSpacing')	|| '',
						wordSpacing		: h2.css('wordSpacing')		|| ''
				});
				h2.width(Math.min(h1.text("pW" + h2[0].value).width(),w))[0].select();
			},
			rename : function (obj) {
				obj = this._get_node(obj);
				this.__rollback();
				var f = this.__callback;
				this._show_input(obj, function (obj, new_name, old_name) { 
					f.call(this, { "obj" : obj, "new_name" : new_name, "old_name" : old_name });
				});
			},
			create : function (obj, position, js, callback, skip_rename) {
				var t, _this = this;
				obj = this._get_node(obj);
				if(!obj) { obj = -1; }
				this.__rollback();
				t = this.create_node(obj, position, js, function (t) {
					var p = this._get_parent(t),
						pos = $(t).index();
					if(callback) { callback.call(this, t); }
					if(p.length && p.hasClass("jstree-closed")) { this.open_node(p, false, true); }
					if(!skip_rename) { 
						this._show_input(t, function (obj, new_name, old_name) { 
							_this.__callback({ "obj" : obj, "name" : new_name, "parent" : p, "position" : pos });
						});
					}
					else { _this.__callback({ "obj" : t, "name" : this.get_text(t), "parent" : p, "position" : pos }); }
				});
				return t;
			},
			remove : function (obj) {
				obj = this._get_node(obj, true);
				var p = this._get_parent(obj), prev = this._get_prev(obj);
				this.__rollback();
				obj = this.delete_node(obj);
				if(obj !== false) { this.__callback({ "obj" : obj, "prev" : prev, "parent" : p }); }
			},
			check_move : function () {
				if(!this.__call_old()) { return false; }
				var s = this._get_settings().crrm.move;
				if(!s.check_move.call(this, this._get_move())) { return false; }
				return true;
			},
			move_node : function (obj, ref, position, is_copy, is_prepared, skip_check) {
				var s = this._get_settings().crrm.move;
				if(!is_prepared) { 
					if(typeof position === "undefined") { position = s.default_position; }
					if(position === "inside" && !s.default_position.match(/^(before|after)$/)) { position = s.default_position; }
					return this.__call_old(true, obj, ref, position, is_copy, false, skip_check);
				}
				// if the move is already prepared
				if(s.always_copy === true || (s.always_copy === "multitree" && obj.rt.get_index() !== obj.ot.get_index() )) {
					is_copy = true;
				}
				this.__call_old(true, obj, ref, position, is_copy, true, skip_check);
			},

			cut : function (obj) {
				obj = this._get_node(obj, true);
				if(!obj || !obj.length) { return false; }
				this.data.crrm.cp_nodes = false;
				this.data.crrm.ct_nodes = obj;
				this.__callback({ "obj" : obj });
			},
			copy : function (obj) {
				obj = this._get_node(obj, true);
				if(!obj || !obj.length) { return false; }
				this.data.crrm.ct_nodes = false;
				this.data.crrm.cp_nodes = obj;
				this.__callback({ "obj" : obj });
			},
			paste : function (obj) { 
				obj = this._get_node(obj);
				if(!obj || !obj.length) { return false; }
				var nodes = this.data.crrm.ct_nodes ? this.data.crrm.ct_nodes : this.data.crrm.cp_nodes;
				if(!this.data.crrm.ct_nodes && !this.data.crrm.cp_nodes) { return false; }
				if(this.data.crrm.ct_nodes) { this.move_node(this.data.crrm.ct_nodes, obj); this.data.crrm.ct_nodes = false; }
				if(this.data.crrm.cp_nodes) { this.move_node(this.data.crrm.cp_nodes, obj, false, true); }
				this.__callback({ "obj" : obj, "nodes" : nodes });
			}
		}
	});
	// include the crr plugin by default
	// $.jstree.defaults.plugins.push("crrm");
})(jQuery);
//*/

/* 
 * jsTree themes plugin
 * Handles loading and setting themes, as well as detecting path to themes, etc.
 */
(function ($) {
	var themes_loaded = [];
	// this variable stores the path to the themes folder - if left as false - it will be autodetected
	$.jstree._themes = false;
	$.jstree.plugin("themes", {
		__init : function () { 
			this.get_container()
				.bind("init.jstree", $.proxy(function () {
						var s = this._get_settings().themes;
						this.data.themes.dots = s.dots; 
						this.data.themes.icons = s.icons; 
						this.set_theme(s.theme, s.url);
					}, this))
				.bind("loaded.jstree", $.proxy(function () {
						// bound here too, as simple HTML tree's won't honor dots & icons otherwise
						if(!this.data.themes.dots) { this.hide_dots(); }
						else { this.show_dots(); }
						if(!this.data.themes.icons) { this.hide_icons(); }
						else { this.show_icons(); }
					}, this));
		},
		defaults : { 
			theme : "default", 
			url : false,
			dots : true,
			icons : true
		},
		_fn : {
			set_theme : function (theme_name, theme_url) {
				if(!theme_name) { return false; }
				if(!theme_url) { theme_url = $.jstree._themes + theme_name + '/style.css'; }
				if($.inArray(theme_url, themes_loaded) == -1) {
					$.vakata.css.add_sheet({ "url" : theme_url });
					themes_loaded.push(theme_url);
				}
				if(this.data.themes.theme != theme_name) {
					this.get_container().removeClass('jstree-' + this.data.themes.theme);
					this.data.themes.theme = theme_name;
				}
				this.get_container().addClass('jstree-' + theme_name);
				if(!this.data.themes.dots) { this.hide_dots(); }
				else { this.show_dots(); }
				if(!this.data.themes.icons) { this.hide_icons(); }
				else { this.show_icons(); }
				this.__callback();
			},
			get_theme	: function () { return this.data.themes.theme; },

			show_dots	: function () { this.data.themes.dots = true; this.get_container().children("ul").removeClass("jstree-no-dots"); },
			hide_dots	: function () { this.data.themes.dots = false; this.get_container().children("ul").addClass("jstree-no-dots"); },
			toggle_dots	: function () { if(this.data.themes.dots) { this.hide_dots(); } else { this.show_dots(); } },

			show_icons	: function () { this.data.themes.icons = true; this.get_container().children("ul").removeClass("jstree-no-icons"); },
			hide_icons	: function () { this.data.themes.icons = false; this.get_container().children("ul").addClass("jstree-no-icons"); },
			toggle_icons: function () { if(this.data.themes.icons) { this.hide_icons(); } else { this.show_icons(); } }
		}
	});
	// autodetect themes path
	$(function () {
		if($.jstree._themes === false) {
			$("script").each(function () { 
				if(this.src.toString().match(/jquery\.jstree[^\/]*?\.js(\?.*)?$/)) { 
					$.jstree._themes = this.src.toString().replace(/jquery\.jstree[^\/]*?\.js(\?.*)?$/, "") + 'themes/'; 
					return false; 
				}
			});
		}
		if($.jstree._themes === false) { $.jstree._themes = "themes/"; }
	});
	// include the themes plugin by default
	$.jstree.defaults.plugins.push("themes");
})(jQuery);
//*/

/*
 * jsTree hotkeys plugin
 * Enables keyboard navigation for all tree instances
 * Depends on the jstree ui & jquery hotkeys plugins
 */
(function ($) {
	var bound = [];
	function exec(i, event) {
		var f = $.jstree._focused(), tmp;
		if(f && f.data && f.data.hotkeys && f.data.hotkeys.enabled) { 
			tmp = f._get_settings().hotkeys[i];
			if(tmp) { return tmp.call(f, event); }
		}
	}
	$.jstree.plugin("hotkeys", {
		__init : function () {
			if(typeof $.hotkeys === "undefined") { throw "jsTree hotkeys: jQuery hotkeys plugin not included."; }
			if(!this.data.ui) { throw "jsTree hotkeys: jsTree UI plugin not included."; }
			$.each(this._get_settings().hotkeys, function (i, v) {
				if(v !== false && $.inArray(i, bound) == -1) {
					$(document).bind("keydown", i, function (event) { return exec(i, event); });
					bound.push(i);
				}
			});
			this.get_container()
				.bind("lock.jstree", $.proxy(function () {
						if(this.data.hotkeys.enabled) { this.data.hotkeys.enabled = false; this.data.hotkeys.revert = true; }
					}, this))
				.bind("unlock.jstree", $.proxy(function () {
						if(this.data.hotkeys.revert) { this.data.hotkeys.enabled = true; }
					}, this));
			this.enable_hotkeys();
		},
		defaults : {
			"up" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
				this.hover_node(this._get_prev(o));
				return false; 
			},
			"ctrl+up" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
				this.hover_node(this._get_prev(o));
				return false; 
			},
			"shift+up" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
				this.hover_node(this._get_prev(o));
				return false; 
			},
			"down" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
				this.hover_node(this._get_next(o));
				return false;
			},
			"ctrl+down" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
				this.hover_node(this._get_next(o));
				return false;
			},
			"shift+down" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
				this.hover_node(this._get_next(o));
				return false;
			},
			"left" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected;
				if(o) {
					if(o.hasClass("jstree-open")) { this.close_node(o); }
					else { this.hover_node(this._get_prev(o)); }
				}
				return false;
			},
			"ctrl+left" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected;
				if(o) {
					if(o.hasClass("jstree-open")) { this.close_node(o); }
					else { this.hover_node(this._get_prev(o)); }
				}
				return false;
			},
			"shift+left" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected;
				if(o) {
					if(o.hasClass("jstree-open")) { this.close_node(o); }
					else { this.hover_node(this._get_prev(o)); }
				}
				return false;
			},
			"right" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected;
				if(o && o.length) {
					if(o.hasClass("jstree-closed")) { this.open_node(o); }
					else { this.hover_node(this._get_next(o)); }
				}
				return false;
			},
			"ctrl+right" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected;
				if(o && o.length) {
					if(o.hasClass("jstree-closed")) { this.open_node(o); }
					else { this.hover_node(this._get_next(o)); }
				}
				return false;
			},
			"shift+right" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected;
				if(o && o.length) {
					if(o.hasClass("jstree-closed")) { this.open_node(o); }
					else { this.hover_node(this._get_next(o)); }
				}
				return false;
			},
			"space" : function () { 
				if(this.data.ui.hovered) { this.data.ui.hovered.children("a:eq(0)").click(); } 
				return false; 
			},
			"ctrl+space" : function (event) { 
				event.type = "click";
				if(this.data.ui.hovered) { this.data.ui.hovered.children("a:eq(0)").trigger(event); } 
				return false; 
			},
			"shift+space" : function (event) { 
				event.type = "click";
				if(this.data.ui.hovered) { this.data.ui.hovered.children("a:eq(0)").trigger(event); } 
				return false; 
			},
			"f2" : function () { this.rename(this.data.ui.hovered || this.data.ui.last_selected); },
			"del" : function () { this.remove(this.data.ui.hovered || this._get_node(null)); }
		},
		_fn : {
			enable_hotkeys : function () {
				this.data.hotkeys.enabled = true;
			},
			disable_hotkeys : function () {
				this.data.hotkeys.enabled = false;
			}
		}
	});
})(jQuery);
//*/

/* 
 * jsTree JSON plugin
 * The JSON data store. Datastores are build by overriding the `load_node` and `_is_loaded` functions.
 */
(function ($) {
	$.jstree.plugin("json_data", {
		__init : function() {
			var s = this._get_settings().json_data;
			if(s.progressive_unload) {
				this.get_container().bind("after_close.jstree", function (e, data) {
					data.rslt.obj.children("ul").remove();
				});
			}
		},
		defaults : { 
			// `data` can be a function:
			//  * accepts two arguments - node being loaded and a callback to pass the result to
			//  * will be executed in the current tree's scope & ajax won't be supported
			data : false, 
			ajax : false,
			correct_state : true,
			progressive_render : false,
			progressive_unload : false
		},
		_fn : {
			load_node : function (obj, s_call, e_call) { var _this = this; this.load_node_json(obj, function () { _this.__callback({ "obj" : _this._get_node(obj) }); s_call.call(this); }, e_call); },
			_is_loaded : function (obj) { 
				var s = this._get_settings().json_data;
				obj = this._get_node(obj); 
				return obj == -1 || !obj || (!s.ajax && !s.progressive_render && !$.isFunction(s.data)) || obj.is(".jstree-open, .jstree-leaf") || obj.children("ul").children("li").length > 0;
			},
			refresh : function (obj) {
				obj = this._get_node(obj);
				var s = this._get_settings().json_data;
				if(obj && obj !== -1 && s.progressive_unload && ($.isFunction(s.data) || !!s.ajax)) {
					obj.removeData("jstree_children");
				}
				return this.__call_old();
			},
			load_node_json : function (obj, s_call, e_call) {
				var s = this.get_settings().json_data, d,
					error_func = function () {},
					success_func = function () {};
				obj = this._get_node(obj);

				if(obj && obj !== -1 && (s.progressive_render || s.progressive_unload) && !obj.is(".jstree-open, .jstree-leaf") && obj.children("ul").children("li").length === 0 && obj.data("jstree_children")) {
					d = this._parse_json(obj.data("jstree_children"), obj);
					if(d) {
						obj.append(d);
						if(!s.progressive_unload) { obj.removeData("jstree_children"); }
					}
					this.clean_node(obj);
					if(s_call) { s_call.call(this); }
					return;
				}

				if(obj && obj !== -1) {
					if(obj.data("jstree_is_loading")) { return; }
					else { obj.data("jstree_is_loading",true); }
				}
				switch(!0) {
					case (!s.data && !s.ajax): throw "Neither data nor ajax settings supplied.";
					// function option added here for easier model integration (also supporting async - see callback)
					case ($.isFunction(s.data)):
						s.data.call(this, obj, $.proxy(function (d) {
							d = this._parse_json(d, obj);
							if(!d) { 
								if(obj === -1 || !obj) {
									if(s.correct_state) { this.get_container().children("ul").empty(); }
								}
								else {
									obj.children("a.jstree-loading").removeClass("jstree-loading");
									obj.removeData("jstree_is_loading");
									if(s.correct_state) { this.correct_state(obj); }
								}
								if(e_call) { e_call.call(this); }
							}
							else {
								if(obj === -1 || !obj) { this.get_container().children("ul").empty().append(d.children()); }
								else { obj.append(d).children("a.jstree-loading").removeClass("jstree-loading"); obj.removeData("jstree_is_loading"); }
								this.clean_node(obj);
								if(s_call) { s_call.call(this); }
							}
						}, this));
						break;
					case (!!s.data && !s.ajax) || (!!s.data && !!s.ajax && (!obj || obj === -1)):
						if(!obj || obj == -1) {
							d = this._parse_json(s.data, obj);
							if(d) {
								this.get_container().children("ul").empty().append(d.children());
								this.clean_node();
							}
							else { 
								if(s.correct_state) { this.get_container().children("ul").empty(); }
							}
						}
						if(s_call) { s_call.call(this); }
						break;
					case (!s.data && !!s.ajax) || (!!s.data && !!s.ajax && obj && obj !== -1):
						error_func = function (x, t, e) {
							var ef = this.get_settings().json_data.ajax.error; 
							if(ef) { ef.call(this, x, t, e); }
							if(obj != -1 && obj.length) {
								obj.children("a.jstree-loading").removeClass("jstree-loading");
								obj.removeData("jstree_is_loading");
								if(t === "success" && s.correct_state) { this.correct_state(obj); }
							}
							else {
								if(t === "success" && s.correct_state) { this.get_container().children("ul").empty(); }
							}
							if(e_call) { e_call.call(this); }
						};
						success_func = function (d, t, x) {
							var sf = this.get_settings().json_data.ajax.success; 
							if(sf) { d = sf.call(this,d,t,x) || d; }
							if(d === "" || (d && d.toString && d.toString().replace(/^[\s\n]+$/,"") === "") || (!$.isArray(d) && !$.isPlainObject(d))) {
								return error_func.call(this, x, t, "");
							}
							d = this._parse_json(d, obj);
							if(d) {
								if(obj === -1 || !obj) { this.get_container().children("ul").empty().append(d.children()); }
								else { obj.append(d).children("a.jstree-loading").removeClass("jstree-loading"); obj.removeData("jstree_is_loading"); }
								this.clean_node(obj);
								if(s_call) { s_call.call(this); }
							}
							else {
								if(obj === -1 || !obj) {
									if(s.correct_state) { 
										this.get_container().children("ul").empty(); 
										if(s_call) { s_call.call(this); }
									}
								}
								else {
									obj.children("a.jstree-loading").removeClass("jstree-loading");
									obj.removeData("jstree_is_loading");
									if(s.correct_state) { 
										this.correct_state(obj);
										if(s_call) { s_call.call(this); } 
									}
								}
							}
						};
						s.ajax.context = this;
						s.ajax.error = error_func;
						s.ajax.success = success_func;
						if(!s.ajax.dataType) { s.ajax.dataType = "json"; }
						if($.isFunction(s.ajax.url)) { s.ajax.url = s.ajax.url.call(this, obj); }
						if($.isFunction(s.ajax.data)) { s.ajax.data = s.ajax.data.call(this, obj); }
						$.ajax(s.ajax);
						break;
				}
			},
			_parse_json : function (js, obj, is_callback) {
				var d = false, 
					p = this._get_settings(),
					s = p.json_data,
					t = p.core.html_titles,
					tmp, i, j, ul1, ul2;

				if(!js) { return d; }
				if(s.progressive_unload && obj && obj !== -1) { 
					obj.data("jstree_children", d);
				}
				if($.isArray(js)) {
					d = $();
					if(!js.length) { return false; }
					for(i = 0, j = js.length; i < j; i++) {
						tmp = this._parse_json(js[i], obj, true);
						if(tmp.length) { d = d.add(tmp); }
					}
				}
				else {
					if(typeof js == "string") { js = { data : js }; }
					if(!js.data && js.data !== "") { return d; }
					d = $("<li />");
					if(js.attr) { d.attr(js.attr); }
					if(js.metadata) { d.data(js.metadata); }
					if(js.state) { d.addClass("jstree-" + js.state); }
					if(!$.isArray(js.data)) { tmp = js.data; js.data = []; js.data.push(tmp); }
					$.each(js.data, function (i, m) {
						tmp = $("<a />");
						if($.isFunction(m)) { m = m.call(this, js); }
						if(typeof m == "string") { tmp.attr('href','#')[ t ? "html" : "text" ](m); }
						else {
							if(!m.attr) { m.attr = {}; }
							if(!m.attr.href) { m.attr.href = '#'; }
							tmp.attr(m.attr)[ t ? "html" : "text" ](m.title);
							if(m.language) { tmp.addClass(m.language); }
						}
						tmp.prepend("<ins class='jstree-icon'>&#160;</ins>");
						if(!m.icon && js.icon) { m.icon = js.icon; }
						if(m.icon) { 
							if(m.icon.indexOf("/") === -1) { tmp.children("ins").addClass(m.icon); }
							else { tmp.children("ins").css("background","url('" + m.icon + "') center center no-repeat"); }
						}
						d.append(tmp);
					});
					d.prepend("<ins class='jstree-icon'>&#160;</ins>");
					if(js.children) { 
						if(s.progressive_render && js.state !== "open") {
							d.addClass("jstree-closed").data("jstree_children", js.children);
						}
						else {
							if(s.progressive_unload) { d.data("jstree_children", js.children); }
							if($.isArray(js.children) && js.children.length) {
								tmp = this._parse_json(js.children, obj, true);
								if(tmp.length) {
									ul2 = $("<ul />");
									ul2.append(tmp);
									d.append(ul2);
								}
							}
						}
					}
				}
				if(!is_callback) {
					ul1 = $("<ul />");
					ul1.append(d);
					d = ul1;
				}
				return d;
			},
			get_json : function (obj, li_attr, a_attr, is_callback) {
				var result = [], 
					s = this._get_settings(), 
					_this = this,
					tmp1, tmp2, li, a, t, lang;
				obj = this._get_node(obj);
				if(!obj || obj === -1) { obj = this.get_container().find("> ul > li"); }
				li_attr = $.isArray(li_attr) ? li_attr : [ "id", "class" ];
				if(!is_callback && this.data.types) { li_attr.push(s.types.type_attr); }
				a_attr = $.isArray(a_attr) ? a_attr : [ ];

				obj.each(function () {
					li = $(this);
					tmp1 = { data : [] };
					if(li_attr.length) { tmp1.attr = { }; }
					$.each(li_attr, function (i, v) { 
						tmp2 = li.attr(v); 
						if(tmp2 && tmp2.length && tmp2.replace(/jstree[^ ]*/ig,'').length) {
							tmp1.attr[v] = (" " + tmp2).replace(/ jstree[^ ]*/ig,'').replace(/\s+$/ig," ").replace(/^ /,"").replace(/ $/,""); 
						}
					});
					if(li.hasClass("jstree-open")) { tmp1.state = "open"; }
					if(li.hasClass("jstree-closed")) { tmp1.state = "closed"; }
					if(li.data()) { tmp1.metadata = li.data(); }
					a = li.children("a");
					a.each(function () {
						t = $(this);
						if(
							a_attr.length || 
							$.inArray("languages", s.plugins) !== -1 || 
							t.children("ins").get(0).style.backgroundImage.length || 
							(t.children("ins").get(0).className && t.children("ins").get(0).className.replace(/jstree[^ ]*|$/ig,'').length)
						) { 
							lang = false;
							if($.inArray("languages", s.plugins) !== -1 && $.isArray(s.languages) && s.languages.length) {
								$.each(s.languages, function (l, lv) {
									if(t.hasClass(lv)) {
										lang = lv;
										return false;
									}
								});
							}
							tmp2 = { attr : { }, title : _this.get_text(t, lang) }; 
							$.each(a_attr, function (k, z) {
								tmp2.attr[z] = (" " + (t.attr(z) || "")).replace(/ jstree[^ ]*/ig,'').replace(/\s+$/ig," ").replace(/^ /,"").replace(/ $/,"");
							});
							if($.inArray("languages", s.plugins) !== -1 && $.isArray(s.languages) && s.languages.length) {
								$.each(s.languages, function (k, z) {
									if(t.hasClass(z)) { tmp2.language = z; return true; }
								});
							}
							if(t.children("ins").get(0).className.replace(/jstree[^ ]*|$/ig,'').replace(/^\s+$/ig,"").length) {
								tmp2.icon = t.children("ins").get(0).className.replace(/jstree[^ ]*|$/ig,'').replace(/\s+$/ig," ").replace(/^ /,"").replace(/ $/,"");
							}
							if(t.children("ins").get(0).style.backgroundImage.length) {
								tmp2.icon = t.children("ins").get(0).style.backgroundImage.replace("url(","").replace(")","");
							}
						}
						else {
							tmp2 = _this.get_text(t);
						}
						if(a.length > 1) { tmp1.data.push(tmp2); }
						else { tmp1.data = tmp2; }
					});
					li = li.find("> ul > li");
					if(li.length) { tmp1.children = _this.get_json(li, li_attr, a_attr, true); }
					result.push(tmp1);
				});
				return result;
			}
		}
	});
})(jQuery);
//*/

/* 
 * jsTree languages plugin
 * Adds support for multiple language versions in one tree
 * This basically allows for many titles coexisting in one node, but only one of them being visible at any given time
 * This is useful for maintaining the same structure in many languages (hence the name of the plugin)
 */
(function ($) {
	$.jstree.plugin("languages", {
		__init : function () { this._load_css();  },
		defaults : [],
		_fn : {
			set_lang : function (i) { 
				var langs = this._get_settings().languages,
					st = false,
					selector = ".jstree-" + this.get_index() + ' a';
				if(!$.isArray(langs) || langs.length === 0) { return false; }
				if($.inArray(i,langs) == -1) {
					if(!!langs[i]) { i = langs[i]; }
					else { return false; }
				}
				if(i == this.data.languages.current_language) { return true; }
				st = $.vakata.css.get_css(selector + "." + this.data.languages.current_language, false, this.data.languages.language_css);
				if(st !== false) { st.style.display = "none"; }
				st = $.vakata.css.get_css(selector + "." + i, false, this.data.languages.language_css);
				if(st !== false) { st.style.display = ""; }
				this.data.languages.current_language = i;
				this.__callback(i);
				return true;
			},
			get_lang : function () {
				return this.data.languages.current_language;
			},
			_get_string : function (key, lang) {
				var langs = this._get_settings().languages,
					s = this._get_settings().core.strings;
				if($.isArray(langs) && langs.length) {
					lang = (lang && $.inArray(lang,langs) != -1) ? lang : this.data.languages.current_language;
				}
				if(s[lang] && s[lang][key]) { return s[lang][key]; }
				if(s[key]) { return s[key]; }
				return key;
			},
			get_text : function (obj, lang) {
				obj = this._get_node(obj) || this.data.ui.last_selected;
				if(!obj.size()) { return false; }
				var langs = this._get_settings().languages,
					s = this._get_settings().core.html_titles;
				if($.isArray(langs) && langs.length) {
					lang = (lang && $.inArray(lang,langs) != -1) ? lang : this.data.languages.current_language;
					obj = obj.children("a." + lang);
				}
				else { obj = obj.children("a:eq(0)"); }
				if(s) {
					obj = obj.clone();
					obj.children("INS").remove();
					return obj.html();
				}
				else {
					obj = obj.contents().filter(function() { return this.nodeType == 3; })[0];
					return obj.nodeValue;
				}
			},
			set_text : function (obj, val, lang) {
				obj = this._get_node(obj) || this.data.ui.last_selected;
				if(!obj.size()) { return false; }
				var langs = this._get_settings().languages,
					s = this._get_settings().core.html_titles,
					tmp;
				if($.isArray(langs) && langs.length) {
					lang = (lang && $.inArray(lang,langs) != -1) ? lang : this.data.languages.current_language;
					obj = obj.children("a." + lang);
				}
				else { obj = obj.children("a:eq(0)"); }
				if(s) {
					tmp = obj.children("INS").clone();
					obj.html(val).prepend(tmp);
					this.__callback({ "obj" : obj, "name" : val, "lang" : lang });
					return true;
				}
				else {
					obj = obj.contents().filter(function() { return this.nodeType == 3; })[0];
					this.__callback({ "obj" : obj, "name" : val, "lang" : lang });
					return (obj.nodeValue = val);
				}
			},
			_load_css : function () {
				var langs = this._get_settings().languages,
					str = "/* languages css */",
					selector = ".jstree-" + this.get_index() + ' a',
					ln;
				if($.isArray(langs) && langs.length) {
					this.data.languages.current_language = langs[0];
					for(ln = 0; ln < langs.length; ln++) {
						str += selector + "." + langs[ln] + " {";
						if(langs[ln] != this.data.languages.current_language) { str += " display:none; "; }
						str += " } ";
					}
					this.data.languages.language_css = $.vakata.css.add_sheet({ 'str' : str, 'title' : "jstree-languages" });
				}
			},
			create_node : function (obj, position, js, callback) {
				var t = this.__call_old(true, obj, position, js, function (t) {
					var langs = this._get_settings().languages,
						a = t.children("a"),
						ln;
					if($.isArray(langs) && langs.length) {
						for(ln = 0; ln < langs.length; ln++) {
							if(!a.is("." + langs[ln])) {
								t.append(a.eq(0).clone().removeClass(langs.join(" ")).addClass(langs[ln]));
							}
						}
						a.not("." + langs.join(", .")).remove();
					}
					if(callback) { callback.call(this, t); }
				});
				return t;
			}
		}
	});
})(jQuery);
//*/

/*
 * jsTree cookies plugin
 * Stores the currently opened/selected nodes in a cookie and then restores them
 * Depends on the jquery.cookie plugin
 */
(function ($) {
	$.jstree.plugin("cookies", {
		__init : function () {
			if(typeof $.cookie === "undefined") { throw "jsTree cookie: jQuery cookie plugin not included."; }

			var s = this._get_settings().cookies,
				tmp;
			if(!!s.save_loaded) {
				tmp = $.cookie(s.save_loaded);
				if(tmp && tmp.length) { this.data.core.to_load = tmp.split(","); }
			}
			if(!!s.save_opened) {
				tmp = $.cookie(s.save_opened);
				if(tmp && tmp.length) { this.data.core.to_open = tmp.split(","); }
			}
			if(!!s.save_selected) {
				tmp = $.cookie(s.save_selected);
				if(tmp && tmp.length && this.data.ui) { this.data.ui.to_select = tmp.split(","); }
			}
			this.get_container()
				.one( ( this.data.ui ? "reselect" : "reopen" ) + ".jstree", $.proxy(function () {
					this.get_container()
						.bind("open_node.jstree close_node.jstree select_node.jstree deselect_node.jstree", $.proxy(function (e) { 
								if(this._get_settings().cookies.auto_save) { this.save_cookie((e.handleObj.namespace + e.handleObj.type).replace("jstree","")); }
							}, this));
				}, this));
		},
		defaults : {
			save_loaded		: "jstree_load",
			save_opened		: "jstree_open",
			save_selected	: "jstree_select",
			auto_save		: true,
			cookie_options	: {}
		},
		_fn : {
			save_cookie : function (c) {
				if(this.data.core.refreshing) { return; }
				var s = this._get_settings().cookies;
				if(!c) { // if called manually and not by event
					if(s.save_loaded) {
						this.save_loaded();
						$.cookie(s.save_loaded, this.data.core.to_load.join(","), s.cookie_options);
					}
					if(s.save_opened) {
						this.save_opened();
						$.cookie(s.save_opened, this.data.core.to_open.join(","), s.cookie_options);
					}
					if(s.save_selected && this.data.ui) {
						this.save_selected();
						$.cookie(s.save_selected, this.data.ui.to_select.join(","), s.cookie_options);
					}
					return;
				}
				switch(c) {
					case "open_node":
					case "close_node":
						if(!!s.save_opened) { 
							this.save_opened(); 
							$.cookie(s.save_opened, this.data.core.to_open.join(","), s.cookie_options); 
						}
						if(!!s.save_loaded) { 
							this.save_loaded(); 
							$.cookie(s.save_loaded, this.data.core.to_load.join(","), s.cookie_options); 
						}
						break;
					case "select_node":
					case "deselect_node":
						if(!!s.save_selected && this.data.ui) { 
							this.save_selected(); 
							$.cookie(s.save_selected, this.data.ui.to_select.join(","), s.cookie_options); 
						}
						break;
				}
			}
		}
	});
	// include cookies by default
	// $.jstree.defaults.plugins.push("cookies");
})(jQuery);
//*/

/*
 * jsTree sort plugin
 * Sorts items alphabetically (or using any other function)
 */
(function ($) {
	$.jstree.plugin("sort", {
		__init : function () {
			this.get_container()
				.bind("load_node.jstree", $.proxy(function (e, data) {
						var obj = this._get_node(data.rslt.obj);
						obj = obj === -1 ? this.get_container().children("ul") : obj.children("ul");
						this.sort(obj);
					}, this))
				.bind("rename_node.jstree create_node.jstree create.jstree", $.proxy(function (e, data) {
						this.sort(data.rslt.obj.parent());
					}, this))
				.bind("move_node.jstree", $.proxy(function (e, data) {
						var m = data.rslt.np == -1 ? this.get_container() : data.rslt.np;
						this.sort(m.children("ul"));
					}, this));
		},
		defaults : function (a, b) { return this.get_text(a) > this.get_text(b) ? 1 : -1; },
		_fn : {
			sort : function (obj) {
				var s = this._get_settings().sort,
					t = this;
				obj.append($.makeArray(obj.children("li")).sort($.proxy(s, t)));
				obj.find("> li > ul").each(function() { t.sort($(this)); });
				this.clean_node(obj);
			}
		}
	});
})(jQuery);
//*/

/*
 * jsTree DND plugin
 * Drag and drop plugin for moving/copying nodes
 */
(function ($) {
	var o = false,
		r = false,
		m = false,
		ml = false,
		sli = false,
		sti = false,
		dir1 = false,
		dir2 = false,
		last_pos = false;
	$.vakata.dnd = {
		is_down : false,
		is_drag : false,
		helper : false,
		scroll_spd : 10,
		init_x : 0,
		init_y : 0,
		threshold : 5,
		helper_left : 5,
		helper_top : 10,
		user_data : {},

		drag_start : function (e, data, html) { 
			if($.vakata.dnd.is_drag) { $.vakata.drag_stop({}); }
			try {
				e.currentTarget.unselectable = "on";
				e.currentTarget.onselectstart = function() { return false; };
				if(e.currentTarget.style) { e.currentTarget.style.MozUserSelect = "none"; }
			} catch(err) { }
			$.vakata.dnd.init_x = e.pageX;
			$.vakata.dnd.init_y = e.pageY;
			$.vakata.dnd.user_data = data;
			$.vakata.dnd.is_down = true;
			$.vakata.dnd.helper = $("<div id='vakata-dragged' />").html(html); //.fadeTo(10,0.25);
			$(document).bind("mousemove", $.vakata.dnd.drag);
			$(document).bind("mouseup", $.vakata.dnd.drag_stop);
			return false;
		},
		drag : function (e) { 
			if(!$.vakata.dnd.is_down) { return; }
			if(!$.vakata.dnd.is_drag) {
				if(Math.abs(e.pageX - $.vakata.dnd.init_x) > 5 || Math.abs(e.pageY - $.vakata.dnd.init_y) > 5) { 
					$.vakata.dnd.helper.appendTo("body");
					$.vakata.dnd.is_drag = true;
					$(document).triggerHandler("drag_start.vakata", { "event" : e, "data" : $.vakata.dnd.user_data });
				}
				else { return; }
			}

			// maybe use a scrolling parent element instead of document?
			if(e.type === "mousemove") { // thought of adding scroll in order to move the helper, but mouse poisition is n/a
				var d = $(document), t = d.scrollTop(), l = d.scrollLeft();
				if(e.pageY - t < 20) { 
					if(sti && dir1 === "down") { clearInterval(sti); sti = false; }
					if(!sti) { dir1 = "up"; sti = setInterval(function () { $(document).scrollTop($(document).scrollTop() - $.vakata.dnd.scroll_spd); }, 150); }
				}
				else { 
					if(sti && dir1 === "up") { clearInterval(sti); sti = false; }
				}
				if($(window).height() - (e.pageY - t) < 20) {
					if(sti && dir1 === "up") { clearInterval(sti); sti = false; }
					if(!sti) { dir1 = "down"; sti = setInterval(function () { $(document).scrollTop($(document).scrollTop() + $.vakata.dnd.scroll_spd); }, 150); }
				}
				else { 
					if(sti && dir1 === "down") { clearInterval(sti); sti = false; }
				}

				if(e.pageX - l < 20) {
					if(sli && dir2 === "right") { clearInterval(sli); sli = false; }
					if(!sli) { dir2 = "left"; sli = setInterval(function () { $(document).scrollLeft($(document).scrollLeft() - $.vakata.dnd.scroll_spd); }, 150); }
				}
				else { 
					if(sli && dir2 === "left") { clearInterval(sli); sli = false; }
				}
				if($(window).width() - (e.pageX - l) < 20) {
					if(sli && dir2 === "left") { clearInterval(sli); sli = false; }
					if(!sli) { dir2 = "right"; sli = setInterval(function () { $(document).scrollLeft($(document).scrollLeft() + $.vakata.dnd.scroll_spd); }, 150); }
				}
				else { 
					if(sli && dir2 === "right") { clearInterval(sli); sli = false; }
				}
			}

			$.vakata.dnd.helper.css({ left : (e.pageX + $.vakata.dnd.helper_left) + "px", top : (e.pageY + $.vakata.dnd.helper_top) + "px" });
			$(document).triggerHandler("drag.vakata", { "event" : e, "data" : $.vakata.dnd.user_data });
		},
		drag_stop : function (e) {
			if(sli) { clearInterval(sli); }
			if(sti) { clearInterval(sti); }
			$(document).unbind("mousemove", $.vakata.dnd.drag);
			$(document).unbind("mouseup", $.vakata.dnd.drag_stop);
			$(document).triggerHandler("drag_stop.vakata", { "event" : e, "data" : $.vakata.dnd.user_data });
			$.vakata.dnd.helper.remove();
			$.vakata.dnd.init_x = 0;
			$.vakata.dnd.init_y = 0;
			$.vakata.dnd.user_data = {};
			$.vakata.dnd.is_down = false;
			$.vakata.dnd.is_drag = false;
		}
	};
	$(function() {
		var css_string = '#vakata-dragged { display:block; margin:0 0 0 0; padding:4px 4px 4px 24px; position:absolute; top:-2000px; line-height:16px; z-index:10000; } ';
		$.vakata.css.add_sheet({ str : css_string, title : "vakata" });
	});

	$.jstree.plugin("dnd", {
		__init : function () {
			this.data.dnd = {
				active : false,
				after : false,
				inside : false,
				before : false,
				off : false,
				prepared : false,
				w : 0,
				to1 : false,
				to2 : false,
				cof : false,
				cw : false,
				ch : false,
				i1 : false,
				i2 : false,
				mto : false
			};
			this.get_container()
				.bind("mouseenter.jstree", $.proxy(function (e) {
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree) {
							if(this.data.themes) {
								m.attr("class", "jstree-" + this.data.themes.theme); 
								if(ml) { ml.attr("class", "jstree-" + this.data.themes.theme); }
								$.vakata.dnd.helper.attr("class", "jstree-dnd-helper jstree-" + this.data.themes.theme);
							}
							//if($(e.currentTarget).find("> ul > li").length === 0) {
							if(e.currentTarget === e.target && $.vakata.dnd.user_data.obj && $($.vakata.dnd.user_data.obj).length && $($.vakata.dnd.user_data.obj).parents(".jstree:eq(0)")[0] !== e.target) { // node should not be from the same tree
								var tr = $.jstree._reference(e.target), dc;
								if(tr.data.dnd.foreign) {
									dc = tr._get_settings().dnd.drag_check.call(this, { "o" : o, "r" : tr.get_container(), is_root : true });
									if(dc === true || dc.inside === true || dc.before === true || dc.after === true) {
										$.vakata.dnd.helper.children("ins").attr("class","jstree-ok");
									}
								}
								else {
									tr.prepare_move(o, tr.get_container(), "last");
									if(tr.check_move()) {
										$.vakata.dnd.helper.children("ins").attr("class","jstree-ok");
									}
								}
							}
						}
					}, this))
				.bind("mouseup.jstree", $.proxy(function (e) {
						//if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree && $(e.currentTarget).find("> ul > li").length === 0) {
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree && e.currentTarget === e.target && $.vakata.dnd.user_data.obj && $($.vakata.dnd.user_data.obj).length && $($.vakata.dnd.user_data.obj).parents(".jstree:eq(0)")[0] !== e.target) { // node should not be from the same tree
							var tr = $.jstree._reference(e.currentTarget), dc;
							if(tr.data.dnd.foreign) {
								dc = tr._get_settings().dnd.drag_check.call(this, { "o" : o, "r" : tr.get_container(), is_root : true });
								if(dc === true || dc.inside === true || dc.before === true || dc.after === true) {
									tr._get_settings().dnd.drag_finish.call(this, { "o" : o, "r" : tr.get_container(), is_root : true });
								}
							}
							else {
								tr.move_node(o, tr.get_container(), "last", e[tr._get_settings().dnd.copy_modifier + "Key"]);
							}
						}
					}, this))
				.bind("mouseleave.jstree", $.proxy(function (e) {
						if(e.relatedTarget && e.relatedTarget.id && e.relatedTarget.id === "jstree-marker-line") {
							return false; 
						}
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree) {
							if(this.data.dnd.i1) { clearInterval(this.data.dnd.i1); }
							if(this.data.dnd.i2) { clearInterval(this.data.dnd.i2); }
							if(this.data.dnd.to1) { clearTimeout(this.data.dnd.to1); }
							if(this.data.dnd.to2) { clearTimeout(this.data.dnd.to2); }
							if($.vakata.dnd.helper.children("ins").hasClass("jstree-ok")) {
								$.vakata.dnd.helper.children("ins").attr("class","jstree-invalid");
							}
						}
					}, this))
				.bind("mousemove.jstree", $.proxy(function (e) {
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree) {
							var cnt = this.get_container()[0];

							// Horizontal scroll
							if(e.pageX + 24 > this.data.dnd.cof.left + this.data.dnd.cw) {
								if(this.data.dnd.i1) { clearInterval(this.data.dnd.i1); }
								this.data.dnd.i1 = setInterval($.proxy(function () { this.scrollLeft += $.vakata.dnd.scroll_spd; }, cnt), 100);
							}
							else if(e.pageX - 24 < this.data.dnd.cof.left) {
								if(this.data.dnd.i1) { clearInterval(this.data.dnd.i1); }
								this.data.dnd.i1 = setInterval($.proxy(function () { this.scrollLeft -= $.vakata.dnd.scroll_spd; }, cnt), 100);
							}
							else {
								if(this.data.dnd.i1) { clearInterval(this.data.dnd.i1); }
							}

							// Vertical scroll
							if(e.pageY + 24 > this.data.dnd.cof.top + this.data.dnd.ch) {
								if(this.data.dnd.i2) { clearInterval(this.data.dnd.i2); }
								this.data.dnd.i2 = setInterval($.proxy(function () { this.scrollTop += $.vakata.dnd.scroll_spd; }, cnt), 100);
							}
							else if(e.pageY - 24 < this.data.dnd.cof.top) {
								if(this.data.dnd.i2) { clearInterval(this.data.dnd.i2); }
								this.data.dnd.i2 = setInterval($.proxy(function () { this.scrollTop -= $.vakata.dnd.scroll_spd; }, cnt), 100);
							}
							else {
								if(this.data.dnd.i2) { clearInterval(this.data.dnd.i2); }
							}

						}
					}, this))
				.bind("scroll.jstree", $.proxy(function (e) { 
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree && m && ml) {
							m.hide();
							ml.hide();
						}
					}, this))
				.delegate("a", "mousedown.jstree", $.proxy(function (e) { 
						if(e.which === 1) {
							this.start_drag(e.currentTarget, e);
							return false;
						}
					}, this))
				.delegate("a", "mouseenter.jstree", $.proxy(function (e) { 
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree) {
							this.dnd_enter(e.currentTarget);
						}
					}, this))
				.delegate("a", "mousemove.jstree", $.proxy(function (e) { 
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree) {
							if(!r || !r.length || r.children("a")[0] !== e.currentTarget) {
								this.dnd_enter(e.currentTarget);
							}
							if(typeof this.data.dnd.off.top === "undefined") { this.data.dnd.off = $(e.target).offset(); }
							this.data.dnd.w = (e.pageY - (this.data.dnd.off.top || 0)) % this.data.core.li_height;
							if(this.data.dnd.w < 0) { this.data.dnd.w += this.data.core.li_height; }
							this.dnd_show();
						}
					}, this))
				.delegate("a", "mouseleave.jstree", $.proxy(function (e) { 
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree) {
							if(e.relatedTarget && e.relatedTarget.id && e.relatedTarget.id === "jstree-marker-line") {
								return false; 
							}
								if(m) { m.hide(); }
								if(ml) { ml.hide(); }
							/*
							var ec = $(e.currentTarget).closest("li"), 
								er = $(e.relatedTarget).closest("li");
							if(er[0] !== ec.prev()[0] && er[0] !== ec.next()[0]) {
								if(m) { m.hide(); }
								if(ml) { ml.hide(); }
							}
							*/
							this.data.dnd.mto = setTimeout( 
								(function (t) { return function () { t.dnd_leave(e); }; })(this),
							0);
						}
					}, this))
				.delegate("a", "mouseup.jstree", $.proxy(function (e) { 
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree) {
							this.dnd_finish(e);
						}
					}, this));

			$(document)
				.bind("drag_stop.vakata", $.proxy(function () {
						if(this.data.dnd.to1) { clearTimeout(this.data.dnd.to1); }
						if(this.data.dnd.to2) { clearTimeout(this.data.dnd.to2); }
						if(this.data.dnd.i1) { clearInterval(this.data.dnd.i1); }
						if(this.data.dnd.i2) { clearInterval(this.data.dnd.i2); }
						this.data.dnd.after		= false;
						this.data.dnd.before	= false;
						this.data.dnd.inside	= false;
						this.data.dnd.off		= false;
						this.data.dnd.prepared	= false;
						this.data.dnd.w			= false;
						this.data.dnd.to1		= false;
						this.data.dnd.to2		= false;
						this.data.dnd.i1		= false;
						this.data.dnd.i2		= false;
						this.data.dnd.active	= false;
						this.data.dnd.foreign	= false;
						if(m) { m.css({ "top" : "-2000px" }); }
						if(ml) { ml.css({ "top" : "-2000px" }); }
					}, this))
				.bind("drag_start.vakata", $.proxy(function (e, data) {
						if(data.data.jstree) { 
							var et = $(data.event.target);
							if(et.closest(".jstree").hasClass("jstree-" + this.get_index())) {
								this.dnd_enter(et);
							}
						}
					}, this));
				/*
				.bind("keydown.jstree-" + this.get_index() + " keyup.jstree-" + this.get_index(), $.proxy(function(e) {
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree && !this.data.dnd.foreign) {
							var h = $.vakata.dnd.helper.children("ins");
							if(e[this._get_settings().dnd.copy_modifier + "Key"] && h.hasClass("jstree-ok")) {
								h.parent().html(h.parent().html().replace(/ \(Copy\)$/, "") + " (Copy)");
							} 
							else {
								h.parent().html(h.parent().html().replace(/ \(Copy\)$/, ""));
							}
						}
					}, this)); */



			var s = this._get_settings().dnd;
			if(s.drag_target) {
				$(document)
					.delegate(s.drag_target, "mousedown.jstree-" + this.get_index(), $.proxy(function (e) {
						o = e.target;
						$.vakata.dnd.drag_start(e, { jstree : true, obj : e.target }, "<ins class='jstree-icon'></ins>" + $(e.target).text() );
						if(this.data.themes) { 
							if(m) { m.attr("class", "jstree-" + this.data.themes.theme); }
							if(ml) { ml.attr("class", "jstree-" + this.data.themes.theme); }
							$.vakata.dnd.helper.attr("class", "jstree-dnd-helper jstree-" + this.data.themes.theme); 
						}
						$.vakata.dnd.helper.children("ins").attr("class","jstree-invalid");
						var cnt = this.get_container();
						this.data.dnd.cof = cnt.offset();
						this.data.dnd.cw = parseInt(cnt.width(),10);
						this.data.dnd.ch = parseInt(cnt.height(),10);
						this.data.dnd.foreign = true;
						e.preventDefault();
					}, this));
			}
			if(s.drop_target) {
				$(document)
					.delegate(s.drop_target, "mouseenter.jstree-" + this.get_index(), $.proxy(function (e) {
							if(this.data.dnd.active && this._get_settings().dnd.drop_check.call(this, { "o" : o, "r" : $(e.target), "e" : e })) {
								$.vakata.dnd.helper.children("ins").attr("class","jstree-ok");
							}
						}, this))
					.delegate(s.drop_target, "mouseleave.jstree-" + this.get_index(), $.proxy(function (e) {
							if(this.data.dnd.active) {
								$.vakata.dnd.helper.children("ins").attr("class","jstree-invalid");
							}
						}, this))
					.delegate(s.drop_target, "mouseup.jstree-" + this.get_index(), $.proxy(function (e) {
							if(this.data.dnd.active && $.vakata.dnd.helper.children("ins").hasClass("jstree-ok")) {
								this._get_settings().dnd.drop_finish.call(this, { "o" : o, "r" : $(e.target), "e" : e });
							}
						}, this));
			}
		},
		defaults : {
			copy_modifier	: "ctrl",
			check_timeout	: 100,
			open_timeout	: 500,
			drop_target		: ".jstree-drop",
			drop_check		: function (data) { return true; },
			drop_finish		: $.noop,
			drag_target		: ".jstree-draggable",
			drag_finish		: $.noop,
			drag_check		: function (data) { return { after : false, before : false, inside : true }; }
		},
		_fn : {
			dnd_prepare : function () {
				if(!r || !r.length) { return; }
				this.data.dnd.off = r.offset();
				if(this._get_settings().core.rtl) {
					this.data.dnd.off.right = this.data.dnd.off.left + r.width();
				}
				if(this.data.dnd.foreign) {
					var a = this._get_settings().dnd.drag_check.call(this, { "o" : o, "r" : r });
					this.data.dnd.after = a.after;
					this.data.dnd.before = a.before;
					this.data.dnd.inside = a.inside;
					this.data.dnd.prepared = true;
					return this.dnd_show();
				}
				this.prepare_move(o, r, "before");
				this.data.dnd.before = this.check_move();
				this.prepare_move(o, r, "after");
				this.data.dnd.after = this.check_move();
				if(this._is_loaded(r)) {
					this.prepare_move(o, r, "inside");
					this.data.dnd.inside = this.check_move();
				}
				else {
					this.data.dnd.inside = false;
				}
				this.data.dnd.prepared = true;
				return this.dnd_show();
			},
			dnd_show : function () {
				if(!this.data.dnd.prepared) { return; }
				var o = ["before","inside","after"],
					r = false,
					rtl = this._get_settings().core.rtl,
					pos;
				if(this.data.dnd.w < this.data.core.li_height/3) { o = ["before","inside","after"]; }
				else if(this.data.dnd.w <= this.data.core.li_height*2/3) {
					o = this.data.dnd.w < this.data.core.li_height/2 ? ["inside","before","after"] : ["inside","after","before"];
				}
				else { o = ["after","inside","before"]; }
				$.each(o, $.proxy(function (i, val) { 
					if(this.data.dnd[val]) {
						$.vakata.dnd.helper.children("ins").attr("class","jstree-ok");
						r = val;
						return false;
					}
				}, this));
				if(r === false) { $.vakata.dnd.helper.children("ins").attr("class","jstree-invalid"); }
				
				pos = rtl ? (this.data.dnd.off.right - 18) : (this.data.dnd.off.left + 10);
				switch(r) {
					case "before":
						m.css({ "left" : pos + "px", "top" : (this.data.dnd.off.top - 6) + "px" }).show();
						if(ml) { ml.css({ "left" : (pos + 8) + "px", "top" : (this.data.dnd.off.top - 1) + "px" }).show(); }
						break;
					case "after":
						m.css({ "left" : pos + "px", "top" : (this.data.dnd.off.top + this.data.core.li_height - 6) + "px" }).show();
						if(ml) { ml.css({ "left" : (pos + 8) + "px", "top" : (this.data.dnd.off.top + this.data.core.li_height - 1) + "px" }).show(); }
						break;
					case "inside":
						m.css({ "left" : pos + ( rtl ? -4 : 4) + "px", "top" : (this.data.dnd.off.top + this.data.core.li_height/2 - 5) + "px" }).show();
						if(ml) { ml.hide(); }
						break;
					default:
						m.hide();
						if(ml) { ml.hide(); }
						break;
				}
				last_pos = r;
				return r;
			},
			dnd_open : function () {
				this.data.dnd.to2 = false;
				this.open_node(r, $.proxy(this.dnd_prepare,this), true);
			},
			dnd_finish : function (e) {
				if(this.data.dnd.foreign) {
					if(this.data.dnd.after || this.data.dnd.before || this.data.dnd.inside) {
						this._get_settings().dnd.drag_finish.call(this, { "o" : o, "r" : r, "p" : last_pos });
					}
				}
				else {
					this.dnd_prepare();
					this.move_node(o, r, last_pos, e[this._get_settings().dnd.copy_modifier + "Key"]);
				}
				o = false;
				r = false;
				m.hide();
				if(ml) { ml.hide(); }
			},
			dnd_enter : function (obj) {
				if(this.data.dnd.mto) { 
					clearTimeout(this.data.dnd.mto);
					this.data.dnd.mto = false;
				}
				var s = this._get_settings().dnd;
				this.data.dnd.prepared = false;
				r = this._get_node(obj);
				if(s.check_timeout) { 
					// do the calculations after a minimal timeout (users tend to drag quickly to the desired location)
					if(this.data.dnd.to1) { clearTimeout(this.data.dnd.to1); }
					this.data.dnd.to1 = setTimeout($.proxy(this.dnd_prepare, this), s.check_timeout); 
				}
				else { 
					this.dnd_prepare(); 
				}
				if(s.open_timeout) { 
					if(this.data.dnd.to2) { clearTimeout(this.data.dnd.to2); }
					if(r && r.length && r.hasClass("jstree-closed")) { 
						// if the node is closed - open it, then recalculate
						this.data.dnd.to2 = setTimeout($.proxy(this.dnd_open, this), s.open_timeout);
					}
				}
				else {
					if(r && r.length && r.hasClass("jstree-closed")) { 
						this.dnd_open();
					}
				}
			},
			dnd_leave : function (e) {
				this.data.dnd.after		= false;
				this.data.dnd.before	= false;
				this.data.dnd.inside	= false;
				$.vakata.dnd.helper.children("ins").attr("class","jstree-invalid");
				m.hide();
				if(ml) { ml.hide(); }
				if(r && r[0] === e.target.parentNode) {
					if(this.data.dnd.to1) {
						clearTimeout(this.data.dnd.to1);
						this.data.dnd.to1 = false;
					}
					if(this.data.dnd.to2) {
						clearTimeout(this.data.dnd.to2);
						this.data.dnd.to2 = false;
					}
				}
			},
			start_drag : function (obj, e) {
				o = this._get_node(obj);
				if(this.data.ui && this.is_selected(o)) { o = this._get_node(null, true); }
				var dt = o.length > 1 ? this._get_string("multiple_selection") : this.get_text(o),
					cnt = this.get_container();
				if(!this._get_settings().core.html_titles) { dt = dt.replace(/</ig,"&lt;").replace(/>/ig,"&gt;"); }
				$.vakata.dnd.drag_start(e, { jstree : true, obj : o }, "<ins class='jstree-icon'></ins>" + dt );
				if(this.data.themes) { 
					if(m) { m.attr("class", "jstree-" + this.data.themes.theme); }
					if(ml) { ml.attr("class", "jstree-" + this.data.themes.theme); }
					$.vakata.dnd.helper.attr("class", "jstree-dnd-helper jstree-" + this.data.themes.theme); 
				}
				this.data.dnd.cof = cnt.offset();
				this.data.dnd.cw = parseInt(cnt.width(),10);
				this.data.dnd.ch = parseInt(cnt.height(),10);
				this.data.dnd.active = true;
			}
		}
	});
	$(function() {
		var css_string = '' + 
			'#vakata-dragged ins { display:block; text-decoration:none; width:16px; height:16px; margin:0 0 0 0; padding:0; position:absolute; top:4px; left:4px; ' + 
			' -moz-border-radius:4px; border-radius:4px; -webkit-border-radius:4px; ' +
			'} ' + 
			'#vakata-dragged .jstree-ok { background:green; } ' + 
			'#vakata-dragged .jstree-invalid { background:red; } ' + 
			'#jstree-marker { padding:0; margin:0; font-size:12px; overflow:hidden; height:12px; width:8px; position:absolute; top:-30px; z-index:10001; background-repeat:no-repeat; display:none; background-color:transparent; text-shadow:1px 1px 1px white; color:black; line-height:10px; } ' + 
			'#jstree-marker-line { padding:0; margin:0; line-height:0%; font-size:1px; overflow:hidden; height:1px; width:100px; position:absolute; top:-30px; z-index:10000; background-repeat:no-repeat; display:none; background-color:#456c43; ' + 
			' cursor:pointer; border:1px solid #eeeeee; border-left:0; -moz-box-shadow: 0px 0px 2px #666; -webkit-box-shadow: 0px 0px 2px #666; box-shadow: 0px 0px 2px #666; ' + 
			' -moz-border-radius:1px; border-radius:1px; -webkit-border-radius:1px; ' +
			'}' + 
			'';
		$.vakata.css.add_sheet({ str : css_string, title : "jstree" });
		m = $("<div />").attr({ id : "jstree-marker" }).hide().html("&raquo;")
			.bind("mouseleave mouseenter", function (e) { 
				m.hide();
				ml.hide();
				e.preventDefault(); 
				e.stopImmediatePropagation(); 
				return false; 
			})
			.appendTo("body");
		ml = $("<div />").attr({ id : "jstree-marker-line" }).hide()
			.bind("mouseup", function (e) { 
				if(r && r.length) { 
					r.children("a").trigger(e); 
					e.preventDefault(); 
					e.stopImmediatePropagation(); 
					return false; 
				} 
			})
			.bind("mouseleave", function (e) { 
				var rt = $(e.relatedTarget);
				if(rt.is(".jstree") || rt.closest(".jstree").length === 0) {
					if(r && r.length) { 
						r.children("a").trigger(e); 
						m.hide();
						ml.hide();
						e.preventDefault(); 
						e.stopImmediatePropagation(); 
						return false; 
					}
				}
			})
			.appendTo("body");
		$(document).bind("drag_start.vakata", function (e, data) {
			if(data.data.jstree) { m.show(); if(ml) { ml.show(); } }
		});
		$(document).bind("drag_stop.vakata", function (e, data) {
			if(data.data.jstree) { m.hide(); if(ml) { ml.hide(); } }
		});
	});
})(jQuery);
//*/

/*
 * jsTree checkbox plugin
 * Inserts checkboxes in front of every node
 * Depends on the ui plugin
 * DOES NOT WORK NICELY WITH MULTITREE DRAG'N'DROP
 */
(function ($) {
	$.jstree.plugin("checkbox", {
		__init : function () {
			this.data.checkbox.noui = this._get_settings().checkbox.override_ui;
			if(this.data.ui && this.data.checkbox.noui) {
				this.select_node = this.deselect_node = this.deselect_all = $.noop;
				this.get_selected = this.get_checked;
			}

			this.get_container()
				.bind("open_node.jstree create_node.jstree clean_node.jstree refresh.jstree", $.proxy(function (e, data) { 
						this._prepare_checkboxes(data.rslt.obj);
					}, this))
				.bind("loaded.jstree", $.proxy(function (e) {
						this._prepare_checkboxes();
					}, this))
				.delegate( (this.data.ui && this.data.checkbox.noui ? "a" : "ins.jstree-checkbox") , "click.jstree", $.proxy(function (e) {
						e.preventDefault();
						if(this._get_node(e.target).hasClass("jstree-checked")) { this.uncheck_node(e.target); }
						else { this.check_node(e.target); }
						if(this.data.ui && this.data.checkbox.noui) {
							this.save_selected();
							if(this.data.cookies) { this.save_cookie("select_node"); }
						}
						else {
							e.stopImmediatePropagation();
							return false;
						}
					}, this));
		},
		defaults : {
			override_ui : false,
			two_state : false,
			real_checkboxes : false,
			checked_parent_open : true,
			real_checkboxes_names : function (n) { return [ ("check_" + (n[0].id || Math.ceil(Math.random() * 10000))) , 1]; }
		},
		__destroy : function () {
			this.get_container()
				.find("input.jstree-real-checkbox").removeClass("jstree-real-checkbox").end()
				.find("ins.jstree-checkbox").remove();
		},
		_fn : {
			_checkbox_notify : function (n, data) {
				if(data.checked) {
					this.check_node(n, false);
				}
			},
			_prepare_checkboxes : function (obj) {
				obj = !obj || obj == -1 ? this.get_container().find("> ul > li") : this._get_node(obj);
				if(obj === false) { return; } // added for removing root nodes
				var c, _this = this, t, ts = this._get_settings().checkbox.two_state, rc = this._get_settings().checkbox.real_checkboxes, rcn = this._get_settings().checkbox.real_checkboxes_names;
				obj.each(function () {
					t = $(this);
					c = t.is("li") && (t.hasClass("jstree-checked") || (rc && t.children(":checked").length)) ? "jstree-checked" : "jstree-unchecked";
					t.find("li").andSelf().each(function () {
						var $t = $(this), nm;
						$t.children("a" + (_this.data.languages ? "" : ":eq(0)") ).not(":has(.jstree-checkbox)").prepend("<ins class='jstree-checkbox'>&#160;</ins>").parent().not(".jstree-checked, .jstree-unchecked").addClass( ts ? "jstree-unchecked" : c );
						if(rc) {
							if(!$t.children(":checkbox").length) {
								nm = rcn.call(_this, $t);
								$t.prepend("<input type='checkbox' class='jstree-real-checkbox' id='" + nm[0] + "' name='" + nm[0] + "' value='" + nm[1] + "' />");
							}
							else {
								$t.children(":checkbox").addClass("jstree-real-checkbox");
							}
						}
						if(!ts) {
							if(c === "jstree-checked" || $t.hasClass("jstree-checked") || $t.children(':checked').length) {
								$t.find("li").andSelf().addClass("jstree-checked").children(":checkbox").prop("checked", true);
							}
						}
						else {
							if($t.hasClass("jstree-checked") || $t.children(':checked').length) {
								$t.addClass("jstree-checked").children(":checkbox").prop("checked", true);
							}
						}
					});
				});
				if(!ts) {
					obj.find(".jstree-checked").parent().parent().each(function () { _this._repair_state(this); }); 
				}
			},
			change_state : function (obj, state) {
				obj = this._get_node(obj);
				var coll = false, rc = this._get_settings().checkbox.real_checkboxes;
				if(!obj || obj === -1) { return false; }
				state = (state === false || state === true) ? state : obj.hasClass("jstree-checked");
				if(this._get_settings().checkbox.two_state) {
					if(state) { 
						obj.removeClass("jstree-checked").addClass("jstree-unchecked"); 
						if(rc) { obj.children(":checkbox").prop("checked", false); }
					}
					else { 
						obj.removeClass("jstree-unchecked").addClass("jstree-checked"); 
						if(rc) { obj.children(":checkbox").prop("checked", true); }
					}
				}
				else {
					if(state) { 
						coll = obj.find("li").andSelf();
						if(!coll.filter(".jstree-checked, .jstree-undetermined").length) { return false; }
						coll.removeClass("jstree-checked jstree-undetermined").addClass("jstree-unchecked"); 
						if(rc) { coll.children(":checkbox").prop("checked", false); }
					}
					else { 
						coll = obj.find("li").andSelf();
						if(!coll.filter(".jstree-unchecked, .jstree-undetermined").length) { return false; }
						coll.removeClass("jstree-unchecked jstree-undetermined").addClass("jstree-checked"); 
						if(rc) { coll.children(":checkbox").prop("checked", true); }
						if(this.data.ui) { this.data.ui.last_selected = obj; }
						this.data.checkbox.last_selected = obj;
					}
					obj.parentsUntil(".jstree", "li").each(function () {
						var $this = $(this);
						if(state) {
							if($this.children("ul").children("li.jstree-checked, li.jstree-undetermined").length) {
								$this.parentsUntil(".jstree", "li").andSelf().removeClass("jstree-checked jstree-unchecked").addClass("jstree-undetermined");
								if(rc) { $this.parentsUntil(".jstree", "li").andSelf().children(":checkbox").prop("checked", false); }
								return false;
							}
							else {
								$this.removeClass("jstree-checked jstree-undetermined").addClass("jstree-unchecked");
								if(rc) { $this.children(":checkbox").prop("checked", false); }
							}
						}
						else {
							if($this.children("ul").children("li.jstree-unchecked, li.jstree-undetermined").length) {
								$this.parentsUntil(".jstree", "li").andSelf().removeClass("jstree-checked jstree-unchecked").addClass("jstree-undetermined");
								if(rc) { $this.parentsUntil(".jstree", "li").andSelf().children(":checkbox").prop("checked", false); }
								return false;
							}
							else {
								$this.removeClass("jstree-unchecked jstree-undetermined").addClass("jstree-checked");
								if(rc) { $this.children(":checkbox").prop("checked", true); }
							}
						}
					});
				}
				if(this.data.ui && this.data.checkbox.noui) { this.data.ui.selected = this.get_checked(); }
				this.__callback(obj);
				return true;
			},
			check_node : function (obj) {
				if(this.change_state(obj, false)) { 
					obj = this._get_node(obj);
					if(this._get_settings().checkbox.checked_parent_open) {
						var t = this;
						obj.parents(".jstree-closed").each(function () { t.open_node(this, false, true); });
					}
					this.__callback({ "obj" : obj }); 
				}
			},
			uncheck_node : function (obj) {
				if(this.change_state(obj, true)) { this.__callback({ "obj" : this._get_node(obj) }); }
			},
			check_all : function () {
				var _this = this, 
					coll = this._get_settings().checkbox.two_state ? this.get_container_ul().find("li") : this.get_container_ul().children("li");
				coll.each(function () {
					_this.change_state(this, false);
				});
				this.__callback();
			},
			uncheck_all : function () {
				var _this = this,
					coll = this._get_settings().checkbox.two_state ? this.get_container_ul().find("li") : this.get_container_ul().children("li");
				coll.each(function () {
					_this.change_state(this, true);
				});
				this.__callback();
			},

			is_checked : function(obj) {
				obj = this._get_node(obj);
				return obj.length ? obj.is(".jstree-checked") : false;
			},
			get_checked : function (obj, get_all) {
				obj = !obj || obj === -1 ? this.get_container() : this._get_node(obj);
				return get_all || this._get_settings().checkbox.two_state ? obj.find(".jstree-checked") : obj.find("> ul > .jstree-checked, .jstree-undetermined > ul > .jstree-checked");
			},
			get_unchecked : function (obj, get_all) { 
				obj = !obj || obj === -1 ? this.get_container() : this._get_node(obj);
				return get_all || this._get_settings().checkbox.two_state ? obj.find(".jstree-unchecked") : obj.find("> ul > .jstree-unchecked, .jstree-undetermined > ul > .jstree-unchecked");
			},

			show_checkboxes : function () { this.get_container().children("ul").removeClass("jstree-no-checkboxes"); },
			hide_checkboxes : function () { this.get_container().children("ul").addClass("jstree-no-checkboxes"); },

			_repair_state : function (obj) {
				obj = this._get_node(obj);
				if(!obj.length) { return; }
				if(this._get_settings().checkbox.two_state) {
					obj.find('li').andSelf().not('.jstree-checked').removeClass('jstree-undetermined').addClass('jstree-unchecked').children(':checkbox').prop('checked', true);
					return;
				}
				var rc = this._get_settings().checkbox.real_checkboxes,
					a = obj.find("> ul > .jstree-checked").length,
					b = obj.find("> ul > .jstree-undetermined").length,
					c = obj.find("> ul > li").length;
				if(c === 0) { if(obj.hasClass("jstree-undetermined")) { this.change_state(obj, false); } }
				else if(a === 0 && b === 0) { this.change_state(obj, true); }
				else if(a === c) { this.change_state(obj, false); }
				else { 
					obj.parentsUntil(".jstree","li").andSelf().removeClass("jstree-checked jstree-unchecked").addClass("jstree-undetermined");
					if(rc) { obj.parentsUntil(".jstree", "li").andSelf().children(":checkbox").prop("checked", false); }
				}
			},
			reselect : function () {
				if(this.data.ui && this.data.checkbox.noui) { 
					var _this = this,
						s = this.data.ui.to_select;
					s = $.map($.makeArray(s), function (n) { return "#" + n.toString().replace(/^#/,"").replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:"); });
					this.deselect_all();
					$.each(s, function (i, val) { _this.check_node(val); });
					this.__callback();
				}
				else { 
					this.__call_old(); 
				}
			},
			save_loaded : function () {
				var _this = this;
				this.data.core.to_load = [];
				this.get_container_ul().find("li.jstree-closed.jstree-undetermined").each(function () {
					if(this.id) { _this.data.core.to_load.push("#" + this.id); }
				});
			}
		}
	});
	$(function() {
		var css_string = '.jstree .jstree-real-checkbox { display:none; } ';
		$.vakata.css.add_sheet({ str : css_string, title : "jstree" });
	});
})(jQuery);
//*/

/* 
 * jsTree XML plugin
 * The XML data store. Datastores are build by overriding the `load_node` and `_is_loaded` functions.
 */
(function ($) {
	$.vakata.xslt = function (xml, xsl, callback) {
		var rs = "", xm, xs, processor, support;
		// TODO: IE9 no XSLTProcessor, no document.recalc
		if(document.recalc) {
			xm = document.createElement('xml');
			xs = document.createElement('xml');
			xm.innerHTML = xml;
			xs.innerHTML = xsl;
			$("body").append(xm).append(xs);
			setTimeout( (function (xm, xs, callback) {
				return function () {
					callback.call(null, xm.transformNode(xs.XMLDocument));
					setTimeout( (function (xm, xs) { return function () { $(xm).remove(); $(xs).remove(); }; })(xm, xs), 200);
				};
			})(xm, xs, callback), 100);
			return true;
		}
		if(typeof window.DOMParser !== "undefined" && typeof window.XMLHttpRequest !== "undefined" && typeof window.XSLTProcessor === "undefined") {
			xml = new DOMParser().parseFromString(xml, "text/xml");
			xsl = new DOMParser().parseFromString(xsl, "text/xml");
			// alert(xml.transformNode());
			// callback.call(null, new XMLSerializer().serializeToString(rs));
			
		}
		if(typeof window.DOMParser !== "undefined" && typeof window.XMLHttpRequest !== "undefined" && typeof window.XSLTProcessor !== "undefined") {
			processor = new XSLTProcessor();
			support = $.isFunction(processor.transformDocument) ? (typeof window.XMLSerializer !== "undefined") : true;
			if(!support) { return false; }
			xml = new DOMParser().parseFromString(xml, "text/xml");
			xsl = new DOMParser().parseFromString(xsl, "text/xml");
			if($.isFunction(processor.transformDocument)) {
				rs = document.implementation.createDocument("", "", null);
				processor.transformDocument(xml, xsl, rs, null);
				callback.call(null, new XMLSerializer().serializeToString(rs));
				return true;
			}
			else {
				processor.importStylesheet(xsl);
				rs = processor.transformToFragment(xml, document);
				callback.call(null, $("<div />").append(rs).html());
				return true;
			}
		}
		return false;
	};
	var xsl = {
		'nest' : '<' + '?xml version="1.0" encoding="utf-8" ?>' + 
			'<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >' + 
			'<xsl:output method="html" encoding="utf-8" omit-xml-declaration="yes" standalone="no" indent="no" media-type="text/html" />' + 
			'<xsl:template match="/">' + 
			'	<xsl:call-template name="nodes">' + 
			'		<xsl:with-param name="node" select="/root" />' + 
			'	</xsl:call-template>' + 
			'</xsl:template>' + 
			'<xsl:template name="nodes">' + 
			'	<xsl:param name="node" />' + 
			'	<ul>' + 
			'	<xsl:for-each select="$node/item">' + 
			'		<xsl:variable name="children" select="count(./item) &gt; 0" />' + 
			'		<li>' + 
			'			<xsl:attribute name="class">' + 
			'				<xsl:if test="position() = last()">jstree-last </xsl:if>' + 
			'				<xsl:choose>' + 
			'					<xsl:when test="@state = \'open\'">jstree-open </xsl:when>' + 
			'					<xsl:when test="$children or @hasChildren or @state = \'closed\'">jstree-closed </xsl:when>' + 
			'					<xsl:otherwise>jstree-leaf </xsl:otherwise>' + 
			'				</xsl:choose>' + 
			'				<xsl:value-of select="@class" />' + 
			'			</xsl:attribute>' + 
			'			<xsl:for-each select="@*">' + 
			'				<xsl:if test="name() != \'class\' and name() != \'state\' and name() != \'hasChildren\'">' + 
			'					<xsl:attribute name="{name()}"><xsl:value-of select="." /></xsl:attribute>' + 
			'				</xsl:if>' + 
			'			</xsl:for-each>' + 
			'	<ins class="jstree-icon"><xsl:text>&#xa0;</xsl:text></ins>' + 
			'			<xsl:for-each select="content/name">' + 
			'				<a>' + 
			'				<xsl:attribute name="href">' + 
			'					<xsl:choose>' + 
			'					<xsl:when test="@href"><xsl:value-of select="@href" /></xsl:when>' + 
			'					<xsl:otherwise>#</xsl:otherwise>' + 
			'					</xsl:choose>' + 
			'				</xsl:attribute>' + 
			'				<xsl:attribute name="class"><xsl:value-of select="@lang" /> <xsl:value-of select="@class" /></xsl:attribute>' + 
			'				<xsl:attribute name="style"><xsl:value-of select="@style" /></xsl:attribute>' + 
			'				<xsl:for-each select="@*">' + 
			'					<xsl:if test="name() != \'style\' and name() != \'class\' and name() != \'href\'">' + 
			'						<xsl:attribute name="{name()}"><xsl:value-of select="." /></xsl:attribute>' + 
			'					</xsl:if>' + 
			'				</xsl:for-each>' + 
			'					<ins>' + 
			'						<xsl:attribute name="class">jstree-icon ' + 
			'							<xsl:if test="string-length(attribute::icon) > 0 and not(contains(@icon,\'/\'))"><xsl:value-of select="@icon" /></xsl:if>' + 
			'						</xsl:attribute>' + 
			'						<xsl:if test="string-length(attribute::icon) > 0 and contains(@icon,\'/\')"><xsl:attribute name="style">background:url(<xsl:value-of select="@icon" />) center center no-repeat;</xsl:attribute></xsl:if>' + 
			'						<xsl:text>&#xa0;</xsl:text>' + 
			'					</ins>' + 
			'					<xsl:copy-of select="./child::node()" />' + 
			'				</a>' + 
			'			</xsl:for-each>' + 
			'			<xsl:if test="$children or @hasChildren"><xsl:call-template name="nodes"><xsl:with-param name="node" select="current()" /></xsl:call-template></xsl:if>' + 
			'		</li>' + 
			'	</xsl:for-each>' + 
			'	</ul>' + 
			'</xsl:template>' + 
			'</xsl:stylesheet>',

		'flat' : '<' + '?xml version="1.0" encoding="utf-8" ?>' + 
			'<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >' + 
			'<xsl:output method="html" encoding="utf-8" omit-xml-declaration="yes" standalone="no" indent="no" media-type="text/xml" />' + 
			'<xsl:template match="/">' + 
			'	<ul>' + 
			'	<xsl:for-each select="//item[not(@parent_id) or @parent_id=0 or not(@parent_id = //item/@id)]">' + /* the last `or` may be removed */
			'		<xsl:call-template name="nodes">' + 
			'			<xsl:with-param name="node" select="." />' + 
			'			<xsl:with-param name="is_last" select="number(position() = last())" />' + 
			'		</xsl:call-template>' + 
			'	</xsl:for-each>' + 
			'	</ul>' + 
			'</xsl:template>' + 
			'<xsl:template name="nodes">' + 
			'	<xsl:param name="node" />' + 
			'	<xsl:param name="is_last" />' + 
			'	<xsl:variable name="children" select="count(//item[@parent_id=$node/attribute::id]) &gt; 0" />' + 
			'	<li>' + 
			'	<xsl:attribute name="class">' + 
			'		<xsl:if test="$is_last = true()">jstree-last </xsl:if>' + 
			'		<xsl:choose>' + 
			'			<xsl:when test="@state = \'open\'">jstree-open </xsl:when>' + 
			'			<xsl:when test="$children or @hasChildren or @state = \'closed\'">jstree-closed </xsl:when>' + 
			'			<xsl:otherwise>jstree-leaf </xsl:otherwise>' + 
			'		</xsl:choose>' + 
			'		<xsl:value-of select="@class" />' + 
			'	</xsl:attribute>' + 
			'	<xsl:for-each select="@*">' + 
			'		<xsl:if test="name() != \'parent_id\' and name() != \'hasChildren\' and name() != \'class\' and name() != \'state\'">' + 
			'		<xsl:attribute name="{name()}"><xsl:value-of select="." /></xsl:attribute>' + 
			'		</xsl:if>' + 
			'	</xsl:for-each>' + 
			'	<ins class="jstree-icon"><xsl:text>&#xa0;</xsl:text></ins>' + 
			'	<xsl:for-each select="content/name">' + 
			'		<a>' + 
			'		<xsl:attribute name="href">' + 
			'			<xsl:choose>' + 
			'			<xsl:when test="@href"><xsl:value-of select="@href" /></xsl:when>' + 
			'			<xsl:otherwise>#</xsl:otherwise>' + 
			'			</xsl:choose>' + 
			'		</xsl:attribute>' + 
			'		<xsl:attribute name="class"><xsl:value-of select="@lang" /> <xsl:value-of select="@class" /></xsl:attribute>' + 
			'		<xsl:attribute name="style"><xsl:value-of select="@style" /></xsl:attribute>' + 
			'		<xsl:for-each select="@*">' + 
			'			<xsl:if test="name() != \'style\' and name() != \'class\' and name() != \'href\'">' + 
			'				<xsl:attribute name="{name()}"><xsl:value-of select="." /></xsl:attribute>' + 
			'			</xsl:if>' + 
			'		</xsl:for-each>' + 
			'			<ins>' + 
			'				<xsl:attribute name="class">jstree-icon ' + 
			'					<xsl:if test="string-length(attribute::icon) > 0 and not(contains(@icon,\'/\'))"><xsl:value-of select="@icon" /></xsl:if>' + 
			'				</xsl:attribute>' + 
			'				<xsl:if test="string-length(attribute::icon) > 0 and contains(@icon,\'/\')"><xsl:attribute name="style">background:url(<xsl:value-of select="@icon" />) center center no-repeat;</xsl:attribute></xsl:if>' + 
			'				<xsl:text>&#xa0;</xsl:text>' + 
			'			</ins>' + 
			'			<xsl:copy-of select="./child::node()" />' + 
			'		</a>' + 
			'	</xsl:for-each>' + 
			'	<xsl:if test="$children">' + 
			'		<ul>' + 
			'		<xsl:for-each select="//item[@parent_id=$node/attribute::id]">' + 
			'			<xsl:call-template name="nodes">' + 
			'				<xsl:with-param name="node" select="." />' + 
			'				<xsl:with-param name="is_last" select="number(position() = last())" />' + 
			'			</xsl:call-template>' + 
			'		</xsl:for-each>' + 
			'		</ul>' + 
			'	</xsl:if>' + 
			'	</li>' + 
			'</xsl:template>' + 
			'</xsl:stylesheet>'
	},
	escape_xml = function(string) {
		return string
			.toString()
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&apos;');
	};
	$.jstree.plugin("xml_data", {
		defaults : { 
			data : false,
			ajax : false,
			xsl : "flat",
			clean_node : false,
			correct_state : true,
			get_skip_empty : false,
			get_include_preamble : true
		},
		_fn : {
			load_node : function (obj, s_call, e_call) { var _this = this; this.load_node_xml(obj, function () { _this.__callback({ "obj" : _this._get_node(obj) }); s_call.call(this); }, e_call); },
			_is_loaded : function (obj) { 
				var s = this._get_settings().xml_data;
				obj = this._get_node(obj);
				return obj == -1 || !obj || (!s.ajax && !$.isFunction(s.data)) || obj.is(".jstree-open, .jstree-leaf") || obj.children("ul").children("li").size() > 0;
			},
			load_node_xml : function (obj, s_call, e_call) {
				var s = this.get_settings().xml_data,
					error_func = function () {},
					success_func = function () {};

				obj = this._get_node(obj);
				if(obj && obj !== -1) {
					if(obj.data("jstree_is_loading")) { return; }
					else { obj.data("jstree_is_loading",true); }
				}
				switch(!0) {
					case (!s.data && !s.ajax): throw "Neither data nor ajax settings supplied.";
					case ($.isFunction(s.data)):
						s.data.call(this, obj, $.proxy(function (d) {
							this.parse_xml(d, $.proxy(function (d) {
								if(d) {
									d = d.replace(/ ?xmlns="[^"]*"/ig, "");
									if(d.length > 10) {
										d = $(d);
										if(obj === -1 || !obj) { this.get_container().children("ul").empty().append(d.children()); }
										else { obj.children("a.jstree-loading").removeClass("jstree-loading"); obj.append(d); obj.removeData("jstree_is_loading"); }
										if(s.clean_node) { this.clean_node(obj); }
										if(s_call) { s_call.call(this); }
									}
									else {
										if(obj && obj !== -1) { 
											obj.children("a.jstree-loading").removeClass("jstree-loading");
											obj.removeData("jstree_is_loading");
											if(s.correct_state) { 
												this.correct_state(obj);
												if(s_call) { s_call.call(this); } 
											}
										}
										else {
											if(s.correct_state) { 
												this.get_container().children("ul").empty();
												if(s_call) { s_call.call(this); } 
											}
										}
									}
								}
							}, this));
						}, this));
						break;
					case (!!s.data && !s.ajax) || (!!s.data && !!s.ajax && (!obj || obj === -1)):
						if(!obj || obj == -1) {
							this.parse_xml(s.data, $.proxy(function (d) {
								if(d) {
									d = d.replace(/ ?xmlns="[^"]*"/ig, "");
									if(d.length > 10) {
										d = $(d);
										this.get_container().children("ul").empty().append(d.children());
										if(s.clean_node) { this.clean_node(obj); }
										if(s_call) { s_call.call(this); }
									}
								}
								else { 
									if(s.correct_state) { 
										this.get_container().children("ul").empty(); 
										if(s_call) { s_call.call(this); }
									}
								}
							}, this));
						}
						break;
					case (!s.data && !!s.ajax) || (!!s.data && !!s.ajax && obj && obj !== -1):
						error_func = function (x, t, e) {
							var ef = this.get_settings().xml_data.ajax.error; 
							if(ef) { ef.call(this, x, t, e); }
							if(obj !== -1 && obj.length) {
								obj.children("a.jstree-loading").removeClass("jstree-loading");
								obj.removeData("jstree_is_loading");
								if(t === "success" && s.correct_state) { this.correct_state(obj); }
							}
							else {
								if(t === "success" && s.correct_state) { this.get_container().children("ul").empty(); }
							}
							if(e_call) { e_call.call(this); }
						};
						success_func = function (d, t, x) {
							d = x.responseText;
							var sf = this.get_settings().xml_data.ajax.success; 
							if(sf) { d = sf.call(this,d,t,x) || d; }
							if(d === "" || (d && d.toString && d.toString().replace(/^[\s\n]+$/,"") === "")) {
								return error_func.call(this, x, t, "");
							}
							this.parse_xml(d, $.proxy(function (d) {
								if(d) {
									d = d.replace(/ ?xmlns="[^"]*"/ig, "");
									if(d.length > 10) {
										d = $(d);
										if(obj === -1 || !obj) { this.get_container().children("ul").empty().append(d.children()); }
										else { obj.children("a.jstree-loading").removeClass("jstree-loading"); obj.append(d); obj.removeData("jstree_is_loading"); }
										if(s.clean_node) { this.clean_node(obj); }
										if(s_call) { s_call.call(this); }
									}
									else {
										if(obj && obj !== -1) { 
											obj.children("a.jstree-loading").removeClass("jstree-loading");
											obj.removeData("jstree_is_loading");
											if(s.correct_state) { 
												this.correct_state(obj);
												if(s_call) { s_call.call(this); } 
											}
										}
										else {
											if(s.correct_state) { 
												this.get_container().children("ul").empty();
												if(s_call) { s_call.call(this); } 
											}
										}
									}
								}
							}, this));
						};
						s.ajax.context = this;
						s.ajax.error = error_func;
						s.ajax.success = success_func;
						if(!s.ajax.dataType) { s.ajax.dataType = "xml"; }
						if($.isFunction(s.ajax.url)) { s.ajax.url = s.ajax.url.call(this, obj); }
						if($.isFunction(s.ajax.data)) { s.ajax.data = s.ajax.data.call(this, obj); }
						$.ajax(s.ajax);
						break;
				}
			},
			parse_xml : function (xml, callback) {
				var s = this._get_settings().xml_data;
				$.vakata.xslt(xml, xsl[s.xsl], callback);
			},
			get_xml : function (tp, obj, li_attr, a_attr, is_callback) {
				var result = "", 
					s = this._get_settings(), 
					_this = this,
					tmp1, tmp2, li, a, lang;
				if(!tp) { tp = "flat"; }
				if(!is_callback) { is_callback = 0; }
				obj = this._get_node(obj);
				if(!obj || obj === -1) { obj = this.get_container().find("> ul > li"); }
				li_attr = $.isArray(li_attr) ? li_attr : [ "id", "class" ];
				if(!is_callback && this.data.types && $.inArray(s.types.type_attr, li_attr) === -1) { li_attr.push(s.types.type_attr); }

				a_attr = $.isArray(a_attr) ? a_attr : [ ];

				if(!is_callback) { 
					if(s.xml_data.get_include_preamble) { 
						result += '<' + '?xml version="1.0" encoding="UTF-8"?' + '>'; 
					}
					result += "<root>"; 
				}
				obj.each(function () {
					result += "<item";
					li = $(this);
					$.each(li_attr, function (i, v) { 
						var t = li.attr(v);
						if(!s.xml_data.get_skip_empty || typeof t !== "undefined") {
							result += " " + v + "=\"" + escape_xml((" " + (t || "")).replace(/ jstree[^ ]*/ig,'').replace(/\s+$/ig," ").replace(/^ /,"").replace(/ $/,"")) + "\""; 
						}
					});
					if(li.hasClass("jstree-open")) { result += " state=\"open\""; }
					if(li.hasClass("jstree-closed")) { result += " state=\"closed\""; }
					if(tp === "flat") { result += " parent_id=\"" + escape_xml(is_callback) + "\""; }
					result += ">";
					result += "<content>";
					a = li.children("a");
					a.each(function () {
						tmp1 = $(this);
						lang = false;
						result += "<name";
						if($.inArray("languages", s.plugins) !== -1) {
							$.each(s.languages, function (k, z) {
								if(tmp1.hasClass(z)) { result += " lang=\"" + escape_xml(z) + "\""; lang = z; return false; }
							});
						}
						if(a_attr.length) { 
							$.each(a_attr, function (k, z) {
								var t = tmp1.attr(z);
								if(!s.xml_data.get_skip_empty || typeof t !== "undefined") {
									result += " " + z + "=\"" + escape_xml((" " + t || "").replace(/ jstree[^ ]*/ig,'').replace(/\s+$/ig," ").replace(/^ /,"").replace(/ $/,"")) + "\"";
								}
							});
						}
						if(tmp1.children("ins").get(0).className.replace(/jstree[^ ]*|$/ig,'').replace(/^\s+$/ig,"").length) {
							result += ' icon="' + escape_xml(tmp1.children("ins").get(0).className.replace(/jstree[^ ]*|$/ig,'').replace(/\s+$/ig," ").replace(/^ /,"").replace(/ $/,"")) + '"';
						}
						if(tmp1.children("ins").get(0).style.backgroundImage.length) {
							result += ' icon="' + escape_xml(tmp1.children("ins").get(0).style.backgroundImage.replace("url(","").replace(")","").replace(/'/ig,"").replace(/"/ig,"")) + '"';
						}
						result += ">";
						result += "<![CDATA[" + _this.get_text(tmp1, lang) + "]]>";
						result += "</name>";
					});
					result += "</content>";
					tmp2 = li[0].id || true;
					li = li.find("> ul > li");
					if(li.length) { tmp2 = _this.get_xml(tp, li, li_attr, a_attr, tmp2); }
					else { tmp2 = ""; }
					if(tp == "nest") { result += tmp2; }
					result += "</item>";
					if(tp == "flat") { result += tmp2; }
				});
				if(!is_callback) { result += "</root>"; }
				return result;
			}
		}
	});
})(jQuery);
//*/

/*
 * jsTree search plugin
 * Enables both sync and async search on the tree
 * DOES NOT WORK WITH JSON PROGRESSIVE RENDER
 */
(function ($) {
	$.expr[':'].jstree_contains = function(a,i,m){
		return (a.textContent || a.innerText || "").toLowerCase().indexOf(m[3].toLowerCase())>=0;
	};
	$.expr[':'].jstree_title_contains = function(a,i,m) {
		return (a.getAttribute("title") || "").toLowerCase().indexOf(m[3].toLowerCase())>=0;
	};
	$.jstree.plugin("search", {
		__init : function () {
			this.data.search.str = "";
			this.data.search.result = $();
			if(this._get_settings().search.show_only_matches) {
				this.get_container()
					.bind("search.jstree", function (e, data) {
						$(this).children("ul").find("li").hide().removeClass("jstree-last");
						data.rslt.nodes.parentsUntil(".jstree").andSelf().show()
							.filter("ul").each(function () { $(this).children("li:visible").eq(-1).addClass("jstree-last"); });
					})
					.bind("clear_search.jstree", function () {
						$(this).children("ul").find("li").css("display","").end().end().jstree("clean_node", -1);
					});
			}
		},
		defaults : {
			ajax : false,
			search_method : "jstree_contains", // for case insensitive - jstree_contains
			show_only_matches : false
		},
		_fn : {
			search : function (str, skip_async) {
				if($.trim(str) === "") { this.clear_search(); return; }
				var s = this.get_settings().search, 
					t = this,
					error_func = function () { },
					success_func = function () { };
				this.data.search.str = str;

				if(!skip_async && s.ajax !== false && this.get_container_ul().find("li.jstree-closed:not(:has(ul)):eq(0)").length > 0) {
					this.search.supress_callback = true;
					error_func = function () { };
					success_func = function (d, t, x) {
						var sf = this.get_settings().search.ajax.success; 
						if(sf) { d = sf.call(this,d,t,x) || d; }
						this.data.search.to_open = d;
						this._search_open();
					};
					s.ajax.context = this;
					s.ajax.error = error_func;
					s.ajax.success = success_func;
					if($.isFunction(s.ajax.url)) { s.ajax.url = s.ajax.url.call(this, str); }
					if($.isFunction(s.ajax.data)) { s.ajax.data = s.ajax.data.call(this, str); }
					if(!s.ajax.data) { s.ajax.data = { "search_string" : str }; }
					if(!s.ajax.dataType || /^json/.exec(s.ajax.dataType)) { s.ajax.dataType = "json"; }
					$.ajax(s.ajax);
					return;
				}
				if(this.data.search.result.length) { this.clear_search(); }
				this.data.search.result = this.get_container().find("a" + (this.data.languages ? "." + this.get_lang() : "" ) + ":" + (s.search_method) + "(" + this.data.search.str + ")");
				this.data.search.result.addClass("jstree-search").parent().parents(".jstree-closed").each(function () {
					t.open_node(this, false, true);
				});
				this.__callback({ nodes : this.data.search.result, str : str });
			},
			clear_search : function (str) {
				this.data.search.result.removeClass("jstree-search");
				this.__callback(this.data.search.result);
				this.data.search.result = $();
			},
			_search_open : function (is_callback) {
				var _this = this,
					done = true,
					current = [],
					remaining = [];
				if(this.data.search.to_open.length) {
					$.each(this.data.search.to_open, function (i, val) {
						if(val == "#") { return true; }
						if($(val).length && $(val).is(".jstree-closed")) { current.push(val); }
						else { remaining.push(val); }
					});
					if(current.length) {
						this.data.search.to_open = remaining;
						$.each(current, function (i, val) { 
							_this.open_node(val, function () { _this._search_open(true); }); 
						});
						done = false;
					}
				}
				if(done) { this.search(this.data.search.str, true); }
			}
		}
	});
})(jQuery);
//*/

/* 
 * jsTree contextmenu plugin
 */
(function ($) {
	$.vakata.context = {
		hide_on_mouseleave : false,

		cnt		: $("<div id='vakata-contextmenu' />"),
		vis		: false,
		tgt		: false,
		par		: false,
		func	: false,
		data	: false,
		rtl		: false,
		show	: function (s, t, x, y, d, p, rtl) {
			$.vakata.context.rtl = !!rtl;
			var html = $.vakata.context.parse(s), h, w;
			if(!html) { return; }
			$.vakata.context.vis = true;
			$.vakata.context.tgt = t;
			$.vakata.context.par = p || t || null;
			$.vakata.context.data = d || null;
			$.vakata.context.cnt
				.html(html)
				.css({ "visibility" : "hidden", "display" : "block", "left" : 0, "top" : 0 });

			if($.vakata.context.hide_on_mouseleave) {
				$.vakata.context.cnt
					.one("mouseleave", function(e) { $.vakata.context.hide(); });
			}

			h = $.vakata.context.cnt.height();
			w = $.vakata.context.cnt.width();
			if(x + w > $(document).width()) { 
				x = $(document).width() - (w + 5); 
				$.vakata.context.cnt.find("li > ul").addClass("right"); 
			}
			if(y + h > $(document).height()) { 
				y = y - (h + t[0].offsetHeight); 
				$.vakata.context.cnt.find("li > ul").addClass("bottom"); 
			}

			$.vakata.context.cnt
				.css({ "left" : x, "top" : y })
				.find("li:has(ul)")
					.bind("mouseenter", function (e) { 
						var w = $(document).width(),
							h = $(document).height(),
							ul = $(this).children("ul").show(); 
						if(w !== $(document).width()) { ul.toggleClass("right"); }
						if(h !== $(document).height()) { ul.toggleClass("bottom"); }
					})
					.bind("mouseleave", function (e) { 
						$(this).children("ul").hide(); 
					})
					.end()
				.css({ "visibility" : "visible" })
				.show();
			$(document).triggerHandler("context_show.vakata");
		},
		hide	: function () {
			$.vakata.context.vis = false;
			$.vakata.context.cnt.attr("class","").css({ "visibility" : "hidden" });
			$(document).triggerHandler("context_hide.vakata");
		},
		parse	: function (s, is_callback) {
			if(!s) { return false; }
			var str = "",
				tmp = false,
				was_sep = true;
			if(!is_callback) { $.vakata.context.func = {}; }
			str += "<ul>";
			$.each(s, function (i, val) {
				if(!val) { return true; }
				$.vakata.context.func[i] = val.action;
				if(!was_sep && val.separator_before) {
					str += "<li class='vakata-separator vakata-separator-before'></li>";
				}
				was_sep = false;
				str += "<li class='" + (val._class || "") + (val._disabled ? " jstree-contextmenu-disabled " : "") + "'><ins ";
				if(val.icon && val.icon.indexOf("/") === -1) { str += " class='" + val.icon + "' "; }
				if(val.icon && val.icon.indexOf("/") !== -1) { str += " style='background:url(" + val.icon + ") center center no-repeat;' "; }
				str += ">&#160;</ins><a href='#' rel='" + i + "'>";
				if(val.submenu) {
					str += "<span style='float:" + ($.vakata.context.rtl ? "left" : "right") + ";'>&raquo;</span>";
				}
				str += val.label + "</a>";
				if(val.submenu) {
					tmp = $.vakata.context.parse(val.submenu, true);
					if(tmp) { str += tmp; }
				}
				str += "</li>";
				if(val.separator_after) {
					str += "<li class='vakata-separator vakata-separator-after'></li>";
					was_sep = true;
				}
			});
			str = str.replace(/<li class\='vakata-separator vakata-separator-after'\><\/li\>$/,"");
			str += "</ul>";
			$(document).triggerHandler("context_parse.vakata");
			return str.length > 10 ? str : false;
		},
		exec	: function (i) {
			if($.isFunction($.vakata.context.func[i])) {
				// if is string - eval and call it!
				$.vakata.context.func[i].call($.vakata.context.data, $.vakata.context.par);
				return true;
			}
			else { return false; }
		}
	};
	$(function () {
		var css_string = '' + 
			'#vakata-contextmenu { display:block; visibility:hidden; left:0; top:-200px; position:absolute; margin:0; padding:0; min-width:180px; background:#ebebeb; border:1px solid silver; z-index:10000; *width:180px; } ' + 
			'#vakata-contextmenu ul { min-width:180px; *width:180px; } ' + 
			'#vakata-contextmenu ul, #vakata-contextmenu li { margin:0; padding:0; list-style-type:none; display:block; } ' + 
			'#vakata-contextmenu li { line-height:20px; min-height:20px; position:relative; padding:0px; } ' + 
			'#vakata-contextmenu li a { padding:1px 6px; line-height:17px; display:block; text-decoration:none; margin:1px 1px 0 1px; } ' + 
			'#vakata-contextmenu li ins { float:left; width:16px; height:16px; text-decoration:none; margin-right:2px; } ' + 
			'#vakata-contextmenu li a:hover, #vakata-contextmenu li.vakata-hover > a { background:gray; color:white; } ' + 
			'#vakata-contextmenu li ul { display:none; position:absolute; top:-2px; left:100%; background:#ebebeb; border:1px solid gray; } ' + 
			'#vakata-contextmenu .right { right:100%; left:auto; } ' + 
			'#vakata-contextmenu .bottom { bottom:-1px; top:auto; } ' + 
			'#vakata-contextmenu li.vakata-separator { min-height:0; height:1px; line-height:1px; font-size:1px; overflow:hidden; margin:0 2px; background:silver; /* border-top:1px solid #fefefe; */ padding:0; } ';
		$.vakata.css.add_sheet({ str : css_string, title : "vakata" });
		$.vakata.context.cnt
			.delegate("a","click", function (e) { e.preventDefault(); })
			.delegate("a","mouseup", function (e) {
				if(!$(this).parent().hasClass("jstree-contextmenu-disabled") && $.vakata.context.exec($(this).attr("rel"))) {
					$.vakata.context.hide();
				}
				else { $(this).blur(); }
			})
			.delegate("a","mouseover", function () {
				$.vakata.context.cnt.find(".vakata-hover").removeClass("vakata-hover");
			})
			.appendTo("body");
		$(document).bind("mousedown", function (e) { if($.vakata.context.vis && !$.contains($.vakata.context.cnt[0], e.target)) { $.vakata.context.hide(); } });
		if(typeof $.hotkeys !== "undefined") {
			$(document)
				.bind("keydown", "up", function (e) { 
					if($.vakata.context.vis) { 
						var o = $.vakata.context.cnt.find("ul:visible").last().children(".vakata-hover").removeClass("vakata-hover").prevAll("li:not(.vakata-separator)").first();
						if(!o.length) { o = $.vakata.context.cnt.find("ul:visible").last().children("li:not(.vakata-separator)").last(); }
						o.addClass("vakata-hover");
						e.stopImmediatePropagation(); 
						e.preventDefault();
					} 
				})
				.bind("keydown", "down", function (e) { 
					if($.vakata.context.vis) { 
						var o = $.vakata.context.cnt.find("ul:visible").last().children(".vakata-hover").removeClass("vakata-hover").nextAll("li:not(.vakata-separator)").first();
						if(!o.length) { o = $.vakata.context.cnt.find("ul:visible").last().children("li:not(.vakata-separator)").first(); }
						o.addClass("vakata-hover");
						e.stopImmediatePropagation(); 
						e.preventDefault();
					} 
				})
				.bind("keydown", "right", function (e) { 
					if($.vakata.context.vis) { 
						$.vakata.context.cnt.find(".vakata-hover").children("ul").show().children("li:not(.vakata-separator)").removeClass("vakata-hover").first().addClass("vakata-hover");
						e.stopImmediatePropagation(); 
						e.preventDefault();
					} 
				})
				.bind("keydown", "left", function (e) { 
					if($.vakata.context.vis) { 
						$.vakata.context.cnt.find(".vakata-hover").children("ul").hide().children(".vakata-separator").removeClass("vakata-hover");
						e.stopImmediatePropagation(); 
						e.preventDefault();
					} 
				})
				.bind("keydown", "esc", function (e) { 
					$.vakata.context.hide(); 
					e.preventDefault();
				})
				.bind("keydown", "space", function (e) { 
					$.vakata.context.cnt.find(".vakata-hover").last().children("a").click();
					e.preventDefault();
				});
		}
	});

	$.jstree.plugin("contextmenu", {
		__init : function () {
			this.get_container()
				.delegate("a", "contextmenu.jstree", $.proxy(function (e) {
						e.preventDefault();
						if(!$(e.currentTarget).hasClass("jstree-loading")) {
							this.show_contextmenu(e.currentTarget, e.pageX, e.pageY);
						}
					}, this))
				.delegate("a", "click.jstree", $.proxy(function (e) {
						if(this.data.contextmenu) {
							$.vakata.context.hide();
						}
					}, this))
				.bind("destroy.jstree", $.proxy(function () {
						// TODO: move this to descruct method
						if(this.data.contextmenu) {
							$.vakata.context.hide();
						}
					}, this));
			$(document).bind("context_hide.vakata", $.proxy(function () { this.data.contextmenu = false; }, this));
		},
		defaults : { 
			select_node : false, // requires UI plugin
			show_at_node : true,
			items : { // Could be a function that should return an object like this one
				"create" : {
					"separator_before"	: false,
					"separator_after"	: true,
					"label"				: "Create",
					"action"			: function (obj) { this.create(obj); }
				},
				"rename" : {
					"separator_before"	: false,
					"separator_after"	: false,
					"label"				: "Rename",
					"action"			: function (obj) { this.rename(obj); }
				},
				"remove" : {
					"separator_before"	: false,
					"icon"				: false,
					"separator_after"	: false,
					"label"				: "Delete",
					"action"			: function (obj) { if(this.is_selected(obj)) { this.remove(); } else { this.remove(obj); } }
				},
				"ccp" : {
					"separator_before"	: true,
					"icon"				: false,
					"separator_after"	: false,
					"label"				: "Edit",
					"action"			: false,
					"submenu" : { 
						"cut" : {
							"separator_before"	: false,
							"separator_after"	: false,
							"label"				: "Cut",
							"action"			: function (obj) { this.cut(obj); }
						},
						"copy" : {
							"separator_before"	: false,
							"icon"				: false,
							"separator_after"	: false,
							"label"				: "Copy",
							"action"			: function (obj) { this.copy(obj); }
						},
						"paste" : {
							"separator_before"	: false,
							"icon"				: false,
							"separator_after"	: false,
							"label"				: "Paste",
							"action"			: function (obj) { this.paste(obj); }
						}
					}
				}
			}
		},
		_fn : {
			show_contextmenu : function (obj, x, y) {
				obj = this._get_node(obj);
				var s = this.get_settings().contextmenu,
					a = obj.children("a:visible:eq(0)"),
					o = false,
					i = false;
				if(s.select_node && this.data.ui && !this.is_selected(obj)) {
					this.deselect_all();
					this.select_node(obj, true);
				}
				if(s.show_at_node || typeof x === "undefined" || typeof y === "undefined") {
					o = a.offset();
					x = o.left;
					y = o.top + this.data.core.li_height;
				}
				i = obj.data("jstree") && obj.data("jstree").contextmenu ? obj.data("jstree").contextmenu : s.items;
				if($.isFunction(i)) { i = i.call(this, obj); }
				this.data.contextmenu = true;
				$.vakata.context.show(i, a, x, y, this, obj, this._get_settings().core.rtl);
				if(this.data.themes) { $.vakata.context.cnt.attr("class", "jstree-" + this.data.themes.theme + "-context"); }
			}
		}
	});
})(jQuery);
//*/

/* 
 * jsTree types plugin
 * Adds support types of nodes
 * You can set an attribute on each li node, that represents its type.
 * According to the type setting the node may get custom icon/validation rules
 */
(function ($) {
	$.jstree.plugin("types", {
		__init : function () {
			var s = this._get_settings().types;
			this.data.types.attach_to = [];
			this.get_container()
				.bind("init.jstree", $.proxy(function () { 
						var types = s.types, 
							attr  = s.type_attr, 
							icons_css = "", 
							_this = this;

						$.each(types, function (i, tp) {
							$.each(tp, function (k, v) { 
								if(!/^(max_depth|max_children|icon|valid_children)$/.test(k)) { _this.data.types.attach_to.push(k); }
							});
							if(!tp.icon) { return true; }
							if( tp.icon.image || tp.icon.position) {
								if(i == "default")	{ icons_css += '.jstree-' + _this.get_index() + ' a > .jstree-icon { '; }
								else				{ icons_css += '.jstree-' + _this.get_index() + ' li[' + attr + '="' + i + '"] > a > .jstree-icon { '; }
								if(tp.icon.image)	{ icons_css += ' background-image:url(' + tp.icon.image + '); '; }
								if(tp.icon.position){ icons_css += ' background-position:' + tp.icon.position + '; '; }
								else				{ icons_css += ' background-position:0 0; '; }
								icons_css += '} ';
							}
						});
						if(icons_css !== "") { $.vakata.css.add_sheet({ 'str' : icons_css, title : "jstree-types" }); }
					}, this))
				.bind("before.jstree", $.proxy(function (e, data) { 
						var s, t, 
							o = this._get_settings().types.use_data ? this._get_node(data.args[0]) : false, 
							d = o && o !== -1 && o.length ? o.data("jstree") : false;
						if(d && d.types && d.types[data.func] === false) { e.stopImmediatePropagation(); return false; }
						if($.inArray(data.func, this.data.types.attach_to) !== -1) {
							if(!data.args[0] || (!data.args[0].tagName && !data.args[0].jquery)) { return; }
							s = this._get_settings().types.types;
							t = this._get_type(data.args[0]);
							if(
								( 
									(s[t] && typeof s[t][data.func] !== "undefined") || 
									(s["default"] && typeof s["default"][data.func] !== "undefined") 
								) && this._check(data.func, data.args[0]) === false
							) {
								e.stopImmediatePropagation();
								return false;
							}
						}
					}, this));
			if(is_ie6) {
				this.get_container()
					.bind("load_node.jstree set_type.jstree", $.proxy(function (e, data) {
							var r = data && data.rslt && data.rslt.obj && data.rslt.obj !== -1 ? this._get_node(data.rslt.obj).parent() : this.get_container_ul(),
								c = false,
								s = this._get_settings().types;
							$.each(s.types, function (i, tp) {
								if(tp.icon && (tp.icon.image || tp.icon.position)) {
									c = i === "default" ? r.find("li > a > .jstree-icon") : r.find("li[" + s.type_attr + "='" + i + "'] > a > .jstree-icon");
									if(tp.icon.image) { c.css("backgroundImage","url(" + tp.icon.image + ")"); }
									c.css("backgroundPosition", tp.icon.position || "0 0");
								}
							});
						}, this));
			}
		},
		defaults : {
			// defines maximum number of root nodes (-1 means unlimited, -2 means disable max_children checking)
			max_children		: -1,
			// defines the maximum depth of the tree (-1 means unlimited, -2 means disable max_depth checking)
			max_depth			: -1,
			// defines valid node types for the root nodes
			valid_children		: "all",

			// whether to use $.data
			use_data : false, 
			// where is the type stores (the rel attribute of the LI element)
			type_attr : "rel",
			// a list of types
			types : {
				// the default type
				"default" : {
					"max_children"	: -1,
					"max_depth"		: -1,
					"valid_children": "all"

					// Bound functions - you can bind any other function here (using boolean or function)
					//"select_node"	: true
				}
			}
		},
		_fn : {
			_types_notify : function (n, data) {
				if(data.type && this._get_settings().types.use_data) {
					this.set_type(data.type, n);
				}
			},
			_get_type : function (obj) {
				obj = this._get_node(obj);
				return (!obj || !obj.length) ? false : obj.attr(this._get_settings().types.type_attr) || "default";
			},
			set_type : function (str, obj) {
				obj = this._get_node(obj);
				var ret = (!obj.length || !str) ? false : obj.attr(this._get_settings().types.type_attr, str);
				if(ret) { this.__callback({ obj : obj, type : str}); }
				return ret;
			},
			_check : function (rule, obj, opts) {
				obj = this._get_node(obj);
				var v = false, t = this._get_type(obj), d = 0, _this = this, s = this._get_settings().types, data = false;
				if(obj === -1) { 
					if(!!s[rule]) { v = s[rule]; }
					else { return; }
				}
				else {
					if(t === false) { return; }
					data = s.use_data ? obj.data("jstree") : false;
					if(data && data.types && typeof data.types[rule] !== "undefined") { v = data.types[rule]; }
					else if(!!s.types[t] && typeof s.types[t][rule] !== "undefined") { v = s.types[t][rule]; }
					else if(!!s.types["default"] && typeof s.types["default"][rule] !== "undefined") { v = s.types["default"][rule]; }
				}
				if($.isFunction(v)) { v = v.call(this, obj); }
				if(rule === "max_depth" && obj !== -1 && opts !== false && s.max_depth !== -2 && v !== 0) {
					// also include the node itself - otherwise if root node it is not checked
					obj.children("a:eq(0)").parentsUntil(".jstree","li").each(function (i) {
						// check if current depth already exceeds global tree depth
						if(s.max_depth !== -1 && s.max_depth - (i + 1) <= 0) { v = 0; return false; }
						d = (i === 0) ? v : _this._check(rule, this, false);
						// check if current node max depth is already matched or exceeded
						if(d !== -1 && d - (i + 1) <= 0) { v = 0; return false; }
						// otherwise - set the max depth to the current value minus current depth
						if(d >= 0 && (d - (i + 1) < v || v < 0) ) { v = d - (i + 1); }
						// if the global tree depth exists and it minus the nodes calculated so far is less than `v` or `v` is unlimited
						if(s.max_depth >= 0 && (s.max_depth - (i + 1) < v || v < 0) ) { v = s.max_depth - (i + 1); }
					});
				}
				return v;
			},
			check_move : function () {
				if(!this.__call_old()) { return false; }
				var m  = this._get_move(),
					s  = m.rt._get_settings().types,
					mc = m.rt._check("max_children", m.cr),
					md = m.rt._check("max_depth", m.cr),
					vc = m.rt._check("valid_children", m.cr),
					ch = 0, d = 1, t;

				if(vc === "none") { return false; } 
				if($.isArray(vc) && m.ot && m.ot._get_type) {
					m.o.each(function () {
						if($.inArray(m.ot._get_type(this), vc) === -1) { d = false; return false; }
					});
					if(d === false) { return false; }
				}
				if(s.max_children !== -2 && mc !== -1) {
					ch = m.cr === -1 ? this.get_container().find("> ul > li").not(m.o).length : m.cr.find("> ul > li").not(m.o).length;
					if(ch + m.o.length > mc) { return false; }
				}
				if(s.max_depth !== -2 && md !== -1) {
					d = 0;
					if(md === 0) { return false; }
					if(typeof m.o.d === "undefined") {
						// TODO: deal with progressive rendering and async when checking max_depth (how to know the depth of the moved node)
						t = m.o;
						while(t.length > 0) {
							t = t.find("> ul > li");
							d ++;
						}
						m.o.d = d;
					}
					if(md - m.o.d < 0) { return false; }
				}
				return true;
			},
			create_node : function (obj, position, js, callback, is_loaded, skip_check) {
				if(!skip_check && (is_loaded || this._is_loaded(obj))) {
					var p  = (typeof position == "string" && position.match(/^before|after$/i) && obj !== -1) ? this._get_parent(obj) : this._get_node(obj),
						s  = this._get_settings().types,
						mc = this._check("max_children", p),
						md = this._check("max_depth", p),
						vc = this._check("valid_children", p),
						ch;
					if(typeof js === "string") { js = { data : js }; }
					if(!js) { js = {}; }
					if(vc === "none") { return false; } 
					if($.isArray(vc)) {
						if(!js.attr || !js.attr[s.type_attr]) { 
							if(!js.attr) { js.attr = {}; }
							js.attr[s.type_attr] = vc[0]; 
						}
						else {
							if($.inArray(js.attr[s.type_attr], vc) === -1) { return false; }
						}
					}
					if(s.max_children !== -2 && mc !== -1) {
						ch = p === -1 ? this.get_container().find("> ul > li").length : p.find("> ul > li").length;
						if(ch + 1 > mc) { return false; }
					}
					if(s.max_depth !== -2 && md !== -1 && (md - 1) < 0) { return false; }
				}
				return this.__call_old(true, obj, position, js, callback, is_loaded, skip_check);
			}
		}
	});
})(jQuery);
//*/

/* 
 * jsTree HTML plugin
 * The HTML data store. Datastores are build by replacing the `load_node` and `_is_loaded` functions.
 */
(function ($) {
	$.jstree.plugin("html_data", {
		__init : function () { 
			// this used to use html() and clean the whitespace, but this way any attached data was lost
			this.data.html_data.original_container_html = this.get_container().find(" > ul > li").clone(true);
			// remove white space from LI node - otherwise nodes appear a bit to the right
			this.data.html_data.original_container_html.find("li").andSelf().contents().filter(function() { return this.nodeType == 3; }).remove();
		},
		defaults : { 
			data : false,
			ajax : false,
			correct_state : true
		},
		_fn : {
			load_node : function (obj, s_call, e_call) { var _this = this; this.load_node_html(obj, function () { _this.__callback({ "obj" : _this._get_node(obj) }); s_call.call(this); }, e_call); },
			_is_loaded : function (obj) { 
				obj = this._get_node(obj); 
				return obj == -1 || !obj || (!this._get_settings().html_data.ajax && !$.isFunction(this._get_settings().html_data.data)) || obj.is(".jstree-open, .jstree-leaf") || obj.children("ul").children("li").size() > 0;
			},
			load_node_html : function (obj, s_call, e_call) {
				var d,
					s = this.get_settings().html_data,
					error_func = function () {},
					success_func = function () {};
				obj = this._get_node(obj);
				if(obj && obj !== -1) {
					if(obj.data("jstree_is_loading")) { return; }
					else { obj.data("jstree_is_loading",true); }
				}
				switch(!0) {
					case ($.isFunction(s.data)):
						s.data.call(this, obj, $.proxy(function (d) {
							if(d && d !== "" && d.toString && d.toString().replace(/^[\s\n]+$/,"") !== "") {
								d = $(d);
								if(!d.is("ul")) { d = $("<ul />").append(d); }
								if(obj == -1 || !obj) { this.get_container().children("ul").empty().append(d.children()).find("li, a").filter(function () { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"); }
								else { obj.children("a.jstree-loading").removeClass("jstree-loading"); obj.append(d).children("ul").find("li, a").filter(function () { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"); obj.removeData("jstree_is_loading"); }
								this.clean_node(obj);
								if(s_call) { s_call.call(this); }
							}
							else {
								if(obj && obj !== -1) {
									obj.children("a.jstree-loading").removeClass("jstree-loading");
									obj.removeData("jstree_is_loading");
									if(s.correct_state) { 
										this.correct_state(obj);
										if(s_call) { s_call.call(this); } 
									}
								}
								else {
									if(s.correct_state) { 
										this.get_container().children("ul").empty();
										if(s_call) { s_call.call(this); } 
									}
								}
							}
						}, this));
						break;
					case (!s.data && !s.ajax):
						if(!obj || obj == -1) {
							this.get_container()
								.children("ul").empty()
								.append(this.data.html_data.original_container_html)
								.find("li, a").filter(function () { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end()
								.filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon");
							this.clean_node();
						}
						if(s_call) { s_call.call(this); }
						break;
					case (!!s.data && !s.ajax) || (!!s.data && !!s.ajax && (!obj || obj === -1)):
						if(!obj || obj == -1) {
							d = $(s.data);
							if(!d.is("ul")) { d = $("<ul />").append(d); }
							this.get_container()
								.children("ul").empty().append(d.children())
								.find("li, a").filter(function () { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end()
								.filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon");
							this.clean_node();
						}
						if(s_call) { s_call.call(this); }
						break;
					case (!s.data && !!s.ajax) || (!!s.data && !!s.ajax && obj && obj !== -1):
						obj = this._get_node(obj);
						error_func = function (x, t, e) {
							var ef = this.get_settings().html_data.ajax.error; 
							if(ef) { ef.call(this, x, t, e); }
							if(obj != -1 && obj.length) {
								obj.children("a.jstree-loading").removeClass("jstree-loading");
								obj.removeData("jstree_is_loading");
								if(t === "success" && s.correct_state) { this.correct_state(obj); }
							}
							else {
								if(t === "success" && s.correct_state) { this.get_container().children("ul").empty(); }
							}
							if(e_call) { e_call.call(this); }
						};
						success_func = function (d, t, x) {
							var sf = this.get_settings().html_data.ajax.success; 
							if(sf) { d = sf.call(this,d,t,x) || d; }
							if(d === "" || (d && d.toString && d.toString().replace(/^[\s\n]+$/,"") === "")) {
								return error_func.call(this, x, t, "");
							}
							if(d) {
								d = $(d);
								if(!d.is("ul")) { d = $("<ul />").append(d); }
								if(obj == -1 || !obj) { this.get_container().children("ul").empty().append(d.children()).find("li, a").filter(function () { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"); }
								else { obj.children("a.jstree-loading").removeClass("jstree-loading"); obj.append(d).children("ul").find("li, a").filter(function () { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"); obj.removeData("jstree_is_loading"); }
								this.clean_node(obj);
								if(s_call) { s_call.call(this); }
							}
							else {
								if(obj && obj !== -1) {
									obj.children("a.jstree-loading").removeClass("jstree-loading");
									obj.removeData("jstree_is_loading");
									if(s.correct_state) { 
										this.correct_state(obj);
										if(s_call) { s_call.call(this); } 
									}
								}
								else {
									if(s.correct_state) { 
										this.get_container().children("ul").empty();
										if(s_call) { s_call.call(this); } 
									}
								}
							}
						};
						s.ajax.context = this;
						s.ajax.error = error_func;
						s.ajax.success = success_func;
						if(!s.ajax.dataType) { s.ajax.dataType = "html"; }
						if($.isFunction(s.ajax.url)) { s.ajax.url = s.ajax.url.call(this, obj); }
						if($.isFunction(s.ajax.data)) { s.ajax.data = s.ajax.data.call(this, obj); }
						$.ajax(s.ajax);
						break;
				}
			}
		}
	});
	// include the HTML data plugin by default
	$.jstree.defaults.plugins.push("html_data");
})(jQuery);
//*/

/* 
 * jsTree themeroller plugin
 * Adds support for jQuery UI themes. Include this at the end of your plugins list, also make sure "themes" is not included.
 */
(function ($) {
	$.jstree.plugin("themeroller", {
		__init : function () {
			var s = this._get_settings().themeroller;
			this.get_container()
				.addClass("ui-widget-content")
				.addClass("jstree-themeroller")
				.delegate("a","mouseenter.jstree", function (e) {
					if(!$(e.currentTarget).hasClass("jstree-loading")) {
						$(this).addClass(s.item_h);
					}
				})
				.delegate("a","mouseleave.jstree", function () {
					$(this).removeClass(s.item_h);
				})
				.bind("init.jstree", $.proxy(function (e, data) { 
						data.inst.get_container().find("> ul > li > .jstree-loading > ins").addClass("ui-icon-refresh");
						this._themeroller(data.inst.get_container().find("> ul > li"));
					}, this))
				.bind("open_node.jstree create_node.jstree", $.proxy(function (e, data) { 
						this._themeroller(data.rslt.obj);
					}, this))
				.bind("loaded.jstree refresh.jstree", $.proxy(function (e) {
						this._themeroller();
					}, this))
				.bind("close_node.jstree", $.proxy(function (e, data) {
						this._themeroller(data.rslt.obj);
					}, this))
				.bind("delete_node.jstree", $.proxy(function (e, data) {
						this._themeroller(data.rslt.parent);
					}, this))
				.bind("correct_state.jstree", $.proxy(function (e, data) {
						data.rslt.obj
							.children("ins.jstree-icon").removeClass(s.opened + " " + s.closed + " ui-icon").end()
							.find("> a > ins.ui-icon")
								.filter(function() { 
									return this.className.toString()
										.replace(s.item_clsd,"").replace(s.item_open,"").replace(s.item_leaf,"")
										.indexOf("ui-icon-") === -1; 
								}).removeClass(s.item_open + " " + s.item_clsd).addClass(s.item_leaf || "jstree-no-icon");
					}, this))
				.bind("select_node.jstree", $.proxy(function (e, data) {
						data.rslt.obj.children("a").addClass(s.item_a);
					}, this))
				.bind("deselect_node.jstree deselect_all.jstree", $.proxy(function (e, data) {
						this.get_container()
							.find("a." + s.item_a).removeClass(s.item_a).end()
							.find("a.jstree-clicked").addClass(s.item_a);
					}, this))
				.bind("dehover_node.jstree", $.proxy(function (e, data) {
						data.rslt.obj.children("a").removeClass(s.item_h);
					}, this))
				.bind("hover_node.jstree", $.proxy(function (e, data) {
						this.get_container()
							.find("a." + s.item_h).not(data.rslt.obj).removeClass(s.item_h);
						data.rslt.obj.children("a").addClass(s.item_h);
					}, this))
				.bind("move_node.jstree", $.proxy(function (e, data) {
						this._themeroller(data.rslt.o);
						this._themeroller(data.rslt.op);
					}, this));
		},
		__destroy : function () {
			var s = this._get_settings().themeroller,
				c = [ "ui-icon" ];
			$.each(s, function (i, v) {
				v = v.split(" ");
				if(v.length) { c = c.concat(v); }
			});
			this.get_container()
				.removeClass("ui-widget-content")
				.find("." + c.join(", .")).removeClass(c.join(" "));
		},
		_fn : {
			_themeroller : function (obj) {
				var s = this._get_settings().themeroller;
				obj = !obj || obj == -1 ? this.get_container_ul() : this._get_node(obj).parent();
				obj
					.find("li.jstree-closed")
						.children("ins.jstree-icon").removeClass(s.opened).addClass("ui-icon " + s.closed).end()
						.children("a").addClass(s.item)
							.children("ins.jstree-icon").addClass("ui-icon")
								.filter(function() { 
									return this.className.toString()
										.replace(s.item_clsd,"").replace(s.item_open,"").replace(s.item_leaf,"")
										.indexOf("ui-icon-") === -1; 
								}).removeClass(s.item_leaf + " " + s.item_open).addClass(s.item_clsd || "jstree-no-icon")
								.end()
							.end()
						.end()
					.end()
					.find("li.jstree-open")
						.children("ins.jstree-icon").removeClass(s.closed).addClass("ui-icon " + s.opened).end()
						.children("a").addClass(s.item)
							.children("ins.jstree-icon").addClass("ui-icon")
								.filter(function() { 
									return this.className.toString()
										.replace(s.item_clsd,"").replace(s.item_open,"").replace(s.item_leaf,"")
										.indexOf("ui-icon-") === -1; 
								}).removeClass(s.item_leaf + " " + s.item_clsd).addClass(s.item_open || "jstree-no-icon")
								.end()
							.end()
						.end()
					.end()
					.find("li.jstree-leaf")
						.children("ins.jstree-icon").removeClass(s.closed + " ui-icon " + s.opened).end()
						.children("a").addClass(s.item)
							.children("ins.jstree-icon").addClass("ui-icon")
								.filter(function() { 
									return this.className.toString()
										.replace(s.item_clsd,"").replace(s.item_open,"").replace(s.item_leaf,"")
										.indexOf("ui-icon-") === -1; 
								}).removeClass(s.item_clsd + " " + s.item_open).addClass(s.item_leaf || "jstree-no-icon");
			}
		},
		defaults : {
			"opened"	: "ui-icon-triangle-1-se",
			"closed"	: "ui-icon-triangle-1-e",
			"item"		: "ui-state-default",
			"item_h"	: "ui-state-hover",
			"item_a"	: "ui-state-active",
			"item_open"	: "ui-icon-folder-open",
			"item_clsd"	: "ui-icon-folder-collapsed",
			"item_leaf"	: "ui-icon-document"
		}
	});
	$(function() {
		var css_string = '' + 
			'.jstree-themeroller .ui-icon { overflow:visible; } ' + 
			'.jstree-themeroller a { padding:0 2px; } ' + 
			'.jstree-themeroller .jstree-no-icon { display:none; }';
		$.vakata.css.add_sheet({ str : css_string, title : "jstree" });
	});
})(jQuery);
//*/

/* 
 * jsTree unique plugin
 * Forces different names amongst siblings (still a bit experimental)
 * NOTE: does not check language versions (it will not be possible to have nodes with the same title, even in different languages)
 */
(function ($) {
	$.jstree.plugin("unique", {
		__init : function () {
			this.get_container()
				.bind("before.jstree", $.proxy(function (e, data) { 
						var nms = [], res = true, p, t;
						if(data.func == "move_node") {
							// obj, ref, position, is_copy, is_prepared, skip_check
							if(data.args[4] === true) {
								if(data.args[0].o && data.args[0].o.length) {
									data.args[0].o.children("a").each(function () { nms.push($(this).text().replace(/^\s+/g,"")); });
									res = this._check_unique(nms, data.args[0].np.find("> ul > li").not(data.args[0].o), "move_node");
								}
							}
						}
						if(data.func == "create_node") {
							// obj, position, js, callback, is_loaded
							if(data.args[4] || this._is_loaded(data.args[0])) {
								p = this._get_node(data.args[0]);
								if(data.args[1] && (data.args[1] === "before" || data.args[1] === "after")) {
									p = this._get_parent(data.args[0]);
									if(!p || p === -1) { p = this.get_container(); }
								}
								if(typeof data.args[2] === "string") { nms.push(data.args[2]); }
								else if(!data.args[2] || !data.args[2].data) { nms.push(this._get_string("new_node")); }
								else { nms.push(data.args[2].data); }
								res = this._check_unique(nms, p.find("> ul > li"), "create_node");
							}
						}
						if(data.func == "rename_node") {
							// obj, val
							nms.push(data.args[1]);
							t = this._get_node(data.args[0]);
							p = this._get_parent(t);
							if(!p || p === -1) { p = this.get_container(); }
							res = this._check_unique(nms, p.find("> ul > li").not(t), "rename_node");
						}
						if(!res) {
							e.stopPropagation();
							return false;
						}
					}, this));
		},
		defaults : { 
			error_callback : $.noop
		},
		_fn : { 
			_check_unique : function (nms, p, func) {
				var cnms = [];
				p.children("a").each(function () { cnms.push($(this).text().replace(/^\s+/g,"")); });
				if(!cnms.length || !nms.length) { return true; }
				cnms = cnms.sort().join(",,").replace(/(,|^)([^,]+)(,,\2)+(,|$)/g,"$1$2$4").replace(/,,+/g,",").replace(/,$/,"").split(",");
				if((cnms.length + nms.length) != cnms.concat(nms).sort().join(",,").replace(/(,|^)([^,]+)(,,\2)+(,|$)/g,"$1$2$4").replace(/,,+/g,",").replace(/,$/,"").split(",").length) {
					this._get_settings().unique.error_callback.call(null, nms, p, func);
					return false;
				}
				return true;
			},
			check_move : function () {
				if(!this.__call_old()) { return false; }
				var p = this._get_move(), nms = [];
				if(p.o && p.o.length) {
					p.o.children("a").each(function () { nms.push($(this).text().replace(/^\s+/g,"")); });
					return this._check_unique(nms, p.np.find("> ul > li").not(p.o), "check_move");
				}
				return true;
			}
		}
	});
})(jQuery);
//*/

/*
 * jsTree wholerow plugin
 * Makes select and hover work on the entire width of the node
 * MAY BE HEAVY IN LARGE DOM
 */
(function ($) {
	$.jstree.plugin("wholerow", {
		__init : function () {
			if(!this.data.ui) { throw "jsTree wholerow: jsTree UI plugin not included."; }
			this.data.wholerow.html = false;
			this.data.wholerow.to = false;
			this.get_container()
				.bind("init.jstree", $.proxy(function (e, data) { 
						this._get_settings().core.animation = 0;
					}, this))
				.bind("open_node.jstree create_node.jstree clean_node.jstree loaded.jstree", $.proxy(function (e, data) { 
						this._prepare_wholerow_span( data && data.rslt && data.rslt.obj ? data.rslt.obj : -1 );
					}, this))
				.bind("search.jstree clear_search.jstree reopen.jstree after_open.jstree after_close.jstree create_node.jstree delete_node.jstree clean_node.jstree", $.proxy(function (e, data) { 
						if(this.data.to) { clearTimeout(this.data.to); }
						this.data.to = setTimeout( (function (t, o) { return function() { t._prepare_wholerow_ul(o); }; })(this,  data && data.rslt && data.rslt.obj ? data.rslt.obj : -1), 0);
					}, this))
				.bind("deselect_all.jstree", $.proxy(function (e, data) { 
						this.get_container().find(" > .jstree-wholerow .jstree-clicked").removeClass("jstree-clicked " + (this.data.themeroller ? this._get_settings().themeroller.item_a : "" ));
					}, this))
				.bind("select_node.jstree deselect_node.jstree ", $.proxy(function (e, data) { 
						data.rslt.obj.each(function () { 
							var ref = data.inst.get_container().find(" > .jstree-wholerow li:visible:eq(" + ( parseInt((($(this).offset().top - data.inst.get_container().offset().top + data.inst.get_container()[0].scrollTop) / data.inst.data.core.li_height),10)) + ")");
							// ref.children("a")[e.type === "select_node" ? "addClass" : "removeClass"]("jstree-clicked");
							ref.children("a").attr("class",data.rslt.obj.children("a").attr("class"));
						});
					}, this))
				.bind("hover_node.jstree dehover_node.jstree", $.proxy(function (e, data) { 
						this.get_container().find(" > .jstree-wholerow .jstree-hovered").removeClass("jstree-hovered " + (this.data.themeroller ? this._get_settings().themeroller.item_h : "" ));
						if(e.type === "hover_node") {
							var ref = this.get_container().find(" > .jstree-wholerow li:visible:eq(" + ( parseInt(((data.rslt.obj.offset().top - this.get_container().offset().top + this.get_container()[0].scrollTop) / this.data.core.li_height),10)) + ")");
							// ref.children("a").addClass("jstree-hovered");
							ref.children("a").attr("class",data.rslt.obj.children(".jstree-hovered").attr("class"));
						}
					}, this))
				.delegate(".jstree-wholerow-span, ins.jstree-icon, li", "click.jstree", function (e) {
						var n = $(e.currentTarget);
						if(e.target.tagName === "A" || (e.target.tagName === "INS" && n.closest("li").is(".jstree-open, .jstree-closed"))) { return; }
						n.closest("li").children("a:visible:eq(0)").click();
						e.stopImmediatePropagation();
					})
				.delegate("li", "mouseover.jstree", $.proxy(function (e) {
						e.stopImmediatePropagation();
						if($(e.currentTarget).children(".jstree-hovered, .jstree-clicked").length) { return false; }
						this.hover_node(e.currentTarget);
						return false;
					}, this))
				.delegate("li", "mouseleave.jstree", $.proxy(function (e) {
						if($(e.currentTarget).children("a").hasClass("jstree-hovered").length) { return; }
						this.dehover_node(e.currentTarget);
					}, this));
			if(is_ie7 || is_ie6) {
				$.vakata.css.add_sheet({ str : ".jstree-" + this.get_index() + " { position:relative; } ", title : "jstree" });
			}
		},
		defaults : {
		},
		__destroy : function () {
			this.get_container().children(".jstree-wholerow").remove();
			this.get_container().find(".jstree-wholerow-span").remove();
		},
		_fn : {
			_prepare_wholerow_span : function (obj) {
				obj = !obj || obj == -1 ? this.get_container().find("> ul > li") : this._get_node(obj);
				if(obj === false) { return; } // added for removing root nodes
				obj.each(function () {
					$(this).find("li").andSelf().each(function () {
						var $t = $(this);
						if($t.children(".jstree-wholerow-span").length) { return true; }
						$t.prepend("<span class='jstree-wholerow-span' style='width:" + ($t.parentsUntil(".jstree","li").length * 18) + "px;'>&#160;</span>");
					});
				});
			},
			_prepare_wholerow_ul : function () {
				var o = this.get_container().children("ul").eq(0), h = o.html();
				o.addClass("jstree-wholerow-real");
				if(this.data.wholerow.last_html !== h) {
					this.data.wholerow.last_html = h;
					this.get_container().children(".jstree-wholerow").remove();
					this.get_container().append(
						o.clone().removeClass("jstree-wholerow-real")
							.wrapAll("<div class='jstree-wholerow' />").parent()
							.width(o.parent()[0].scrollWidth)
							.css("top", (o.height() + ( is_ie7 ? 5 : 0)) * -1 )
							.find("li[id]").each(function () { this.removeAttribute("id"); }).end()
					);
				}
			}
		}
	});
	$(function() {
		var css_string = '' + 
			'.jstree .jstree-wholerow-real { position:relative; z-index:1; } ' + 
			'.jstree .jstree-wholerow-real li { cursor:pointer; } ' + 
			'.jstree .jstree-wholerow-real a { border-left-color:transparent !important; border-right-color:transparent !important; } ' + 
			'.jstree .jstree-wholerow { position:relative; z-index:0; height:0; } ' + 
			'.jstree .jstree-wholerow ul, .jstree .jstree-wholerow li { width:100%; } ' + 
			'.jstree .jstree-wholerow, .jstree .jstree-wholerow ul, .jstree .jstree-wholerow li, .jstree .jstree-wholerow a { margin:0 !important; padding:0 !important; } ' + 
			'.jstree .jstree-wholerow, .jstree .jstree-wholerow ul, .jstree .jstree-wholerow li { background:transparent !important; }' + 
			'.jstree .jstree-wholerow ins, .jstree .jstree-wholerow span, .jstree .jstree-wholerow input { display:none !important; }' + 
			'.jstree .jstree-wholerow a, .jstree .jstree-wholerow a:hover { text-indent:-9999px; !important; width:100%; padding:0 !important; border-right-width:0px !important; border-left-width:0px !important; } ' + 
			'.jstree .jstree-wholerow-span { position:absolute; left:0; margin:0px; padding:0; height:18px; border-width:0; padding:0; z-index:0; }';
		if(is_ff2) {
			css_string += '' + 
				'.jstree .jstree-wholerow a { display:block; height:18px; margin:0; padding:0; border:0; } ' + 
				'.jstree .jstree-wholerow-real a { border-color:transparent !important; } ';
		}
		if(is_ie7 || is_ie6) {
			css_string += '' + 
				'.jstree .jstree-wholerow, .jstree .jstree-wholerow li, .jstree .jstree-wholerow ul, .jstree .jstree-wholerow a { margin:0; padding:0; line-height:18px; } ' + 
				'.jstree .jstree-wholerow a { display:block; height:18px; line-height:18px; overflow:hidden; } ';
		}
		$.vakata.css.add_sheet({ str : css_string, title : "jstree" });
	});
})(jQuery);
//*/

/*
* jsTree model plugin
* This plugin gets jstree to use a class model to retrieve data, creating great dynamism
*/
(function ($) {
	var nodeInterface = ["getChildren","getChildrenCount","getAttr","getName","getProps"],
		validateInterface = function(obj, inter) {
			var valid = true;
			obj = obj || {};
			inter = [].concat(inter);
			$.each(inter, function (i, v) {
				if(!$.isFunction(obj[v])) { valid = false; return false; }
			});
			return valid;
		};
	$.jstree.plugin("model", {
		__init : function () {
			if(!this.data.json_data) { throw "jsTree model: jsTree json_data plugin not included."; }
			this._get_settings().json_data.data = function (n, b) {
				var obj = (n == -1) ? this._get_settings().model.object : n.data("jstree_model");
				if(!validateInterface(obj, nodeInterface)) { return b.call(null, false); }
				if(this._get_settings().model.async) {
					obj.getChildren($.proxy(function (data) {
						this.model_done(data, b);
					}, this));
				}
				else {
					this.model_done(obj.getChildren(), b);
				}
			};
		},
		defaults : {
			object : false,
			id_prefix : false,
			async : false
		},
		_fn : {
			model_done : function (data, callback) {
				var ret = [], 
					s = this._get_settings(),
					_this = this;

				if(!$.isArray(data)) { data = [data]; }
				$.each(data, function (i, nd) {
					var r = nd.getProps() || {};
					r.attr = nd.getAttr() || {};
					if(nd.getChildrenCount()) { r.state = "closed"; }
					r.data = nd.getName();
					if(!$.isArray(r.data)) { r.data = [r.data]; }
					if(_this.data.types && $.isFunction(nd.getType)) {
						r.attr[s.types.type_attr] = nd.getType();
					}
					if(r.attr.id && s.model.id_prefix) { r.attr.id = s.model.id_prefix + r.attr.id; }
					if(!r.metadata) { r.metadata = { }; }
					r.metadata.jstree_model = nd;
					ret.push(r);
				});
				callback.call(null, ret);
			}
		}
	});
})(jQuery);
//*/

})();
/*!
 * jQuery UI Widget 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function( $, undefined ) {

// jQuery 1.4+
if ( $.cleanData ) {
	var _cleanData = $.cleanData;
	$.cleanData = function( elems ) {
		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			try {
				$( elem ).triggerHandler( "remove" );
			// http://bugs.jquery.com/ticket/8235
			} catch( e ) {}
		}
		_cleanData( elems );
	};
} else {
	var _remove = $.fn.remove;
	$.fn.remove = function( selector, keepData ) {
		return this.each(function() {
			if ( !keepData ) {
				if ( !selector || $.filter( selector, [ this ] ).length ) {
					$( "*", this ).add( [ this ] ).each(function() {
						try {
							$( this ).triggerHandler( "remove" );
						// http://bugs.jquery.com/ticket/8235
						} catch( e ) {}
					});
				}
			}
			return _remove.call( $(this), selector, keepData );
		});
	};
}

$.widget = function( name, base, prototype ) {
	var namespace = name.split( "." )[ 0 ],
		fullName;
	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName ] = function( elem ) {
		return !!$.data( elem, name );
	};

	$[ namespace ] = $[ namespace ] || {};
	$[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without initializing for simple inheritance
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	var basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
//	$.each( basePrototype, function( key, val ) {
//		if ( $.isPlainObject(val) ) {
//			basePrototype[ key ] = $.extend( {}, val );
//		}
//	});
	basePrototype.options = $.extend( true, {}, basePrototype.options );
	$[ namespace ][ name ].prototype = $.extend( true, basePrototype, {
		namespace: namespace,
		widgetName: name,
		widgetEventPrefix: $[ namespace ][ name ].prototype.widgetEventPrefix || name,
		widgetBaseClass: fullName
	}, prototype );

	$.widget.bridge( name, $[ namespace ][ name ] );
};

$.widget.bridge = function( name, object ) {
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = Array.prototype.slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.extend.apply( null, [ true, options ].concat(args) ) :
			options;

		// prevent calls to internal methods
		if ( isMethodCall && options.charAt( 0 ) === "_" ) {
			return returnValue;
		}

		if ( isMethodCall ) {
			this.each(function() {
				var instance = $.data( this, name ),
					methodValue = instance && $.isFunction( instance[options] ) ?
						instance[ options ].apply( instance, args ) :
						instance;
				// TODO: add this back in 1.9 and use $.error() (see #5972)
//				if ( !instance ) {
//					throw "cannot call methods on " + name + " prior to initialization; " +
//						"attempted to call method '" + options + "'";
//				}
//				if ( !$.isFunction( instance[options] ) ) {
//					throw "no such method '" + options + "' for " + name + " widget instance";
//				}
//				var methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, name );
				if ( instance ) {
					instance.option( options || {} )._init();
				} else {
					$.data( this, name, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( options, element ) {
	// allow instantiation without initializing for simple inheritance
	if ( arguments.length ) {
		this._createWidget( options, element );
	}
};

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	options: {
		disabled: false
	},
	_createWidget: function( options, element ) {
		// $.widget.bridge stores the plugin instance, but we do it anyway
		// so that it's stored even before the _create function runs
		$.data( element, this.widgetName, this );
		this.element = $( element );
		this.options = $.extend( true, {},
			this.options,
			this._getCreateOptions(),
			options );

		var self = this;
		this.element.bind( "remove." + this.widgetName, function() {
			self.destroy();
		});

		this._create();
		this._trigger( "create" );
		this._init();
	},
	_getCreateOptions: function() {
		return $.metadata && $.metadata.get( this.element[0] )[ this.widgetName ];
	},
	_create: function() {},
	_init: function() {},

	destroy: function() {
		this.element
			.unbind( "." + this.widgetName )
			.removeData( this.widgetName );
		this.widget()
			.unbind( "." + this.widgetName )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetBaseClass + "-disabled " +
				"ui-state-disabled" );
	},

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.extend( {}, this.options );
		}

		if  (typeof key === "string" ) {
			if ( value === undefined ) {
				return this.options[ key ];
			}
			options = {};
			options[ key ] = value;
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var self = this;
		$.each( options, function( key, value ) {
			self._setOption( key, value );
		});

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				[ value ? "addClass" : "removeClass"](
					this.widgetBaseClass + "-disabled" + " " +
					"ui-state-disabled" )
				.attr( "aria-disabled", value );
		}

		return this;
	},

	enable: function() {
		return this._setOption( "disabled", false );
	},
	disable: function() {
		return this._setOption( "disabled", true );
	},

	_trigger: function( type, event, data ) {
		var callback = this.options[ type ];

		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		data = data || {};

		// copy original event properties over to the new event
		// this would happen if we could call $.event.fix instead of $.Event
		// but we don't have a way to force an event to be fixed multiple times
		if ( event.originalEvent ) {
			for ( var i = $.event.props.length, prop; i; ) {
				prop = $.event.props[ --i ];
				event[ prop ] = event.originalEvent[ prop ];
			}
		}

		this.element.trigger( event, data );

		return !( $.isFunction(callback) &&
			callback.call( this.element[0], event, data ) === false ||
			event.isDefaultPrevented() );
	}
};

})( jQuery );


﻿/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

(function(){if(window.CKEDITOR&&window.CKEDITOR.dom)return;if(!window.CKEDITOR)window.CKEDITOR=(function(){var a={timestamp:'B8DJ5M3',version:'3.6.2',revision:'7275',_:{},status:'unloaded',basePath:(function(){var d=window.CKEDITOR_BASEPATH||'';if(!d){var e=document.getElementsByTagName('script');for(var f=0;f<e.length;f++){var g=e[f].src.match(/(^|.*[\\\/])ckeditor(?:_basic)?(?:_source)?.js(?:\?.*)?$/i);if(g){d=g[1];break;}}}if(d.indexOf(':/')==-1)if(d.indexOf('/')===0)d=location.href.match(/^.*?:\/\/[^\/]*/)[0]+d;else d=location.href.match(/^[^\?]*\/(?:)/)[0]+d;if(!d)throw 'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.';return d;})(),getUrl:function(d){if(d.indexOf(':/')==-1&&d.indexOf('/')!==0)d=this.basePath+d;if(this.timestamp&&d.charAt(d.length-1)!='/'&&!/[&?]t=/.test(d))d+=(d.indexOf('?')>=0?'&':'?')+'t='+this.timestamp;return d;}},b=window.CKEDITOR_GETURL;if(b){var c=a.getUrl;a.getUrl=function(d){return b.call(a,d)||c.call(a,d);};}return a;})();var a=CKEDITOR;if(!a.event){a.event=function(){};a.event.implementOn=function(b){var c=a.event.prototype;for(var d in c){if(b[d]==undefined)b[d]=c[d];}};a.event.prototype=(function(){var b=function(d){var e=d.getPrivate&&d.getPrivate()||d._||(d._={});return e.events||(e.events={});},c=function(d){this.name=d;this.listeners=[];};c.prototype={getListenerIndex:function(d){for(var e=0,f=this.listeners;e<f.length;e++){if(f[e].fn==d)return e;}return-1;}};return{on:function(d,e,f,g,h){var i=b(this),j=i[d]||(i[d]=new c(d));if(j.getListenerIndex(e)<0){var k=j.listeners;if(!f)f=this;if(isNaN(h))h=10;var l=this,m=function(o,p,q,r){var s={name:d,sender:this,editor:o,data:p,listenerData:g,stop:q,cancel:r,removeListener:function(){l.removeListener(d,e);}};e.call(f,s);return s.data;};m.fn=e;m.priority=h;for(var n=k.length-1;n>=0;n--){if(k[n].priority<=h){k.splice(n+1,0,m);return;}}k.unshift(m);}},fire:(function(){var d=false,e=function(){d=true;},f=false,g=function(){f=true;};return function(h,i,j){var k=b(this)[h],l=d,m=f;d=f=false;if(k){var n=k.listeners;if(n.length){n=n.slice(0);for(var o=0;o<n.length;o++){var p=n[o].call(this,j,i,e,g);if(typeof p!='undefined')i=p;if(d||f)break;}}}var q=f||(typeof i=='undefined'?false:i);d=l;f=m;return q;};})(),fireOnce:function(d,e,f){var g=this.fire(d,e,f);delete b(this)[d];return g;},removeListener:function(d,e){var f=b(this)[d];if(f){var g=f.getListenerIndex(e);if(g>=0)f.listeners.splice(g,1);
}},hasListeners:function(d){var e=b(this)[d];return e&&e.listeners.length>0;}};})();}if(!a.editor){a.ELEMENT_MODE_NONE=0;a.ELEMENT_MODE_REPLACE=1;a.ELEMENT_MODE_APPENDTO=2;a.editor=function(b,c,d,e){var f=this;f._={instanceConfig:b,element:c,data:e};f.elementMode=d||0;a.event.call(f);f._init();};a.editor.replace=function(b,c){var d=b;if(typeof d!='object'){d=document.getElementById(b);if(d&&d.tagName.toLowerCase() in {style:1,script:1,base:1,link:1,meta:1,title:1})d=null;if(!d){var e=0,f=document.getElementsByName(b);while((d=f[e++])&&d.tagName.toLowerCase()!='textarea'){}}if(!d)throw '[CKEDITOR.editor.replace] The element with id or name "'+b+'" was not found.';}d.style.visibility='hidden';return new a.editor(c,d,1);};a.editor.appendTo=function(b,c,d){var e=b;if(typeof e!='object'){e=document.getElementById(b);if(!e)throw '[CKEDITOR.editor.appendTo] The element with id "'+b+'" was not found.';}return new a.editor(c,e,2,d);};a.editor.prototype={_init:function(){var b=a.editor._pending||(a.editor._pending=[]);b.push(this);},fire:function(b,c){return a.event.prototype.fire.call(this,b,c,this);},fireOnce:function(b,c){return a.event.prototype.fireOnce.call(this,b,c,this);}};a.event.implementOn(a.editor.prototype,true);}if(!a.env)a.env=(function(){var b=navigator.userAgent.toLowerCase(),c=window.opera,d={ie:/*@cc_on!@*/false,opera:!!c&&c.version,webkit:b.indexOf(' applewebkit/')>-1,air:b.indexOf(' adobeair/')>-1,mac:b.indexOf('macintosh')>-1,quirks:document.compatMode=='BackCompat',mobile:b.indexOf('mobile')>-1,iOS:/(ipad|iphone|ipod)/.test(b),isCustomDomain:function(){if(!this.ie)return false;var g=document.domain,h=window.location.hostname;return g!=h&&g!='['+h+']';},secure:location.protocol=='https:'};d.gecko=navigator.product=='Gecko'&&!d.webkit&&!d.opera;var e=0;if(d.ie){e=parseFloat(b.match(/msie (\d+)/)[1]);d.ie8=!!document.documentMode;d.ie8Compat=document.documentMode==8;d.ie9Compat=document.documentMode==9;d.ie7Compat=e==7&&!document.documentMode||document.documentMode==7;d.ie6Compat=e<7||d.quirks;}if(d.gecko){var f=b.match(/rv:([\d\.]+)/);if(f){f=f[1].split('.');e=f[0]*10000+(f[1]||0)*100+ +(f[2]||0);}}if(d.opera)e=parseFloat(c.version());if(d.air)e=parseFloat(b.match(/ adobeair\/(\d+)/)[1]);if(d.webkit)e=parseFloat(b.match(/ applewebkit\/(\d+)/)[1]);d.version=e;d.isCompatible=d.iOS&&e>=534||!d.mobile&&(d.ie&&e>=6||d.gecko&&e>=10801||d.opera&&e>=9.5||d.air&&e>=1||d.webkit&&e>=522||false);d.cssClass='cke_browser_'+(d.ie?'ie':d.gecko?'gecko':d.opera?'opera':d.webkit?'webkit':'unknown');
if(d.quirks)d.cssClass+=' cke_browser_quirks';if(d.ie){d.cssClass+=' cke_browser_ie'+(d.version<7?'6':d.version>=8?document.documentMode:'7');if(d.quirks)d.cssClass+=' cke_browser_iequirks';}if(d.gecko&&e<10900)d.cssClass+=' cke_browser_gecko18';if(d.air)d.cssClass+=' cke_browser_air';return d;})();var b=a.env;var c=b.ie;if(a.status=='unloaded')(function(){a.event.implementOn(a);a.loadFullCore=function(){if(a.status!='basic_ready'){a.loadFullCore._load=1;return;}delete a.loadFullCore;var e=document.createElement('script');e.type='text/javascript';e.src=a.basePath+'ckeditor.js';document.getElementsByTagName('head')[0].appendChild(e);};a.loadFullCoreTimeout=0;a.replaceClass='ckeditor';a.replaceByClassEnabled=1;var d=function(e,f,g,h){if(b.isCompatible){if(a.loadFullCore)a.loadFullCore();var i=g(e,f,h);a.add(i);return i;}return null;};a.replace=function(e,f){return d(e,f,a.editor.replace);};a.appendTo=function(e,f,g){return d(e,f,a.editor.appendTo,g);};a.add=function(e){var f=this._.pending||(this._.pending=[]);f.push(e);};a.replaceAll=function(){var e=document.getElementsByTagName('textarea');for(var f=0;f<e.length;f++){var g=null,h=e[f];if(!h.name&&!h.id)continue;if(typeof arguments[0]=='string'){var i=new RegExp('(?:^|\\s)'+arguments[0]+'(?:$|\\s)');if(!i.test(h.className))continue;}else if(typeof arguments[0]=='function'){g={};if(arguments[0](h,g)===false)continue;}this.replace(h,g);}};(function(){var e=function(){var f=a.loadFullCore,g=a.loadFullCoreTimeout;if(a.replaceByClassEnabled)a.replaceAll(a.replaceClass);a.status='basic_ready';if(f&&f._load)f();else if(g)setTimeout(function(){if(a.loadFullCore)a.loadFullCore();},g*1000);};if(window.addEventListener)window.addEventListener('load',e,false);else if(window.attachEvent)window.attachEvent('onload',e);})();a.status='basic_loaded';})();a.dom={};var d=a.dom;(function(){var e=[];a.on('reset',function(){e=[];});a.tools={arrayCompare:function(f,g){if(!f&&!g)return true;if(!f||!g||f.length!=g.length)return false;for(var h=0;h<f.length;h++){if(f[h]!=g[h])return false;}return true;},clone:function(f){var g;if(f&&f instanceof Array){g=[];for(var h=0;h<f.length;h++)g[h]=this.clone(f[h]);return g;}if(f===null||typeof f!='object'||f instanceof String||f instanceof Number||f instanceof Boolean||f instanceof Date||f instanceof RegExp)return f;g=new f.constructor();for(var i in f){var j=f[i];g[i]=this.clone(j);}return g;},capitalize:function(f){return f.charAt(0).toUpperCase()+f.substring(1).toLowerCase();},extend:function(f){var g=arguments.length,h,i;
if(typeof (h=arguments[g-1])=='boolean')g--;else if(typeof (h=arguments[g-2])=='boolean'){i=arguments[g-1];g-=2;}for(var j=1;j<g;j++){var k=arguments[j];for(var l in k){if(h===true||f[l]==undefined)if(!i||l in i)f[l]=k[l];}}return f;},prototypedCopy:function(f){var g=function(){};g.prototype=f;return new g();},isArray:function(f){return!!f&&f instanceof Array;},isEmpty:function(f){for(var g in f){if(f.hasOwnProperty(g))return false;}return true;},cssStyleToDomStyle:(function(){var f=document.createElement('div').style,g=typeof f.cssFloat!='undefined'?'cssFloat':typeof f.styleFloat!='undefined'?'styleFloat':'float';return function(h){if(h=='float')return g;else return h.replace(/-./g,function(i){return i.substr(1).toUpperCase();});};})(),buildStyleHtml:function(f){f=[].concat(f);var g,h=[];for(var i=0;i<f.length;i++){g=f[i];if(/@import|[{}]/.test(g))h.push('<style>'+g+'</style>');else h.push('<link type="text/css" rel=stylesheet href="'+g+'">');}return h.join('');},htmlEncode:function(f){var g=function(k){var l=new d.element('span');l.setText(k);return l.getHtml();},h=g('\n').toLowerCase()=='<br>'?function(k){return g(k).replace(/<br>/gi,'\n');}:g,i=g('>')=='>'?function(k){return h(k).replace(/>/g,'&gt;');}:h,j=g('  ')=='&nbsp; '?function(k){return i(k).replace(/&nbsp;/g,' ');}:i;this.htmlEncode=j;return this.htmlEncode(f);},htmlEncodeAttr:function(f){return f.replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');},getNextNumber:(function(){var f=0;return function(){return++f;};})(),getNextId:function(){return 'cke_'+this.getNextNumber();},override:function(f,g){return g(f);},setTimeout:function(f,g,h,i,j){if(!j)j=window;if(!h)h=j;return j.setTimeout(function(){if(i)f.apply(h,[].concat(i));else f.apply(h);},g||0);},trim:(function(){var f=/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g;return function(g){return g.replace(f,'');};})(),ltrim:(function(){var f=/^[ \t\n\r]+/g;return function(g){return g.replace(f,'');};})(),rtrim:(function(){var f=/[ \t\n\r]+$/g;return function(g){return g.replace(f,'');};})(),indexOf:Array.prototype.indexOf?function(f,g){return f.indexOf(g);}:function(f,g){for(var h=0,i=f.length;h<i;h++){if(f[h]===g)return h;}return-1;},bind:function(f,g){return function(){return f.apply(g,arguments);};},createClass:function(f){var g=f.$,h=f.base,i=f.privates||f._,j=f.proto,k=f.statics;if(i){var l=g;g=function(){var p=this;var m=p._||(p._={});for(var n in i){var o=i[n];m[n]=typeof o=='function'?a.tools.bind(o,p):o;}l.apply(p,arguments);};}if(h){g.prototype=this.prototypedCopy(h.prototype);
g.prototype['constructor']=g;g.prototype.base=function(){this.base=h.prototype.base;h.apply(this,arguments);this.base=arguments.callee;};}if(j)this.extend(g.prototype,j,true);if(k)this.extend(g,k,true);return g;},addFunction:function(f,g){return e.push(function(){return f.apply(g||this,arguments);})-1;},removeFunction:function(f){e[f]=null;},callFunction:function(f){var g=e[f];return g&&g.apply(window,Array.prototype.slice.call(arguments,1));},cssLength:(function(){return function(f){return f+(!f||isNaN(Number(f))?'':'px');};})(),convertToPx:(function(){var f;return function(g){if(!f){f=d.element.createFromHtml('<div style="position:absolute;left:-9999px;top:-9999px;margin:0px;padding:0px;border:0px;"></div>',a.document);a.document.getBody().append(f);}if(!/%$/.test(g)){f.setStyle('width',g);return f.$.clientWidth;}return g;};})(),repeat:function(f,g){return new Array(g+1).join(f);},tryThese:function(){var f;for(var g=0,h=arguments.length;g<h;g++){var i=arguments[g];try{f=i();break;}catch(j){}}return f;},genKey:function(){return Array.prototype.slice.call(arguments).join('-');}};})();var e=a.tools;a.dtd=(function(){var f=e.extend,g={isindex:1,fieldset:1},h={input:1,button:1,select:1,textarea:1,label:1},i=f({a:1},h),j=f({iframe:1},i),k={hr:1,ul:1,menu:1,div:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,mark:1,time:1,meter:1,command:1,keygen:1,output:1,progress:1,audio:1,video:1,details:1,datagrid:1,datalist:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1},l={ins:1,del:1,script:1,style:1},m=f({b:1,acronym:1,bdo:1,'var':1,'#':1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1,wbr:1},l),n=f({sub:1,img:1,object:1,sup:1,basefont:1,map:1,applet:1,font:1,big:1,small:1,mark:1},m),o=f({p:1},n),p=f({iframe:1},n,h),q={img:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,'#':1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,'var':1,div:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,mark:1,time:1,meter:1,menu:1,command:1,keygen:1,output:1,progress:1,audio:1,video:1,details:1,datagrid:1,datalist:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,address:1,q:1,pre:1,p:1,em:1,dfn:1},r=f({a:1},p),s={tr:1},t={'#':1},u=f({param:1},q),v=f({form:1},g,j,k,o),w={li:1},x={style:1,script:1},y={base:1,link:1,meta:1,title:1},z=f(y,x),A={head:1,body:1},B={html:1},C={address:1,blockquote:1,center:1,dir:1,div:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,time:1,meter:1,menu:1,command:1,keygen:1,output:1,progress:1,audio:1,video:1,details:1,datagrid:1,datalist:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1};
return{$nonBodyContent:f(B,A,y),$block:C,$blockLimit:{body:1,div:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,time:1,meter:1,menu:1,command:1,keygen:1,output:1,progress:1,audio:1,video:1,details:1,datagrid:1,datalist:1,td:1,th:1,caption:1,form:1},$inline:r,$body:f({script:1,style:1},C),$cdata:{script:1,style:1},$empty:{area:1,base:1,br:1,col:1,hr:1,img:1,input:1,link:1,meta:1,param:1,wbr:1},$listItem:{dd:1,dt:1,li:1},$list:{ul:1,ol:1,dl:1},$nonEditable:{applet:1,button:1,embed:1,iframe:1,map:1,object:1,option:1,script:1,textarea:1,param:1,audio:1,video:1},$captionBlock:{caption:1,legend:1},$removeEmpty:{abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,'var':1,mark:1},$tabIndex:{a:1,area:1,button:1,input:1,object:1,select:1,textarea:1},$tableContent:{caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1},html:A,head:z,style:t,script:t,body:v,base:{},link:{},meta:{},title:t,col:{},tr:{td:1,th:1},img:{},colgroup:{col:1},noscript:v,td:v,br:{},wbr:{},th:v,center:v,kbd:r,button:f(o,k),basefont:{},h5:r,h4:r,samp:r,h6:r,ol:w,h1:r,h3:r,option:t,h2:r,form:f(g,j,k,o),select:{optgroup:1,option:1},font:r,ins:r,menu:w,abbr:r,label:r,table:{thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1},code:r,tfoot:s,cite:r,li:v,input:{},iframe:v,strong:r,textarea:t,noframes:v,big:r,small:r,span:r,hr:{},dt:r,sub:r,optgroup:{option:1},param:{},bdo:r,'var':r,div:v,object:u,sup:r,dd:v,strike:r,area:{},dir:w,map:f({area:1,form:1,p:1},g,l,k),applet:u,dl:{dt:1,dd:1},del:r,isindex:{},fieldset:f({legend:1},q),thead:s,ul:w,acronym:r,b:r,a:p,blockquote:v,caption:r,i:r,u:r,tbody:s,s:r,address:f(j,o),tt:r,legend:r,q:r,pre:f(m,i),p:r,em:r,dfn:r,section:v,header:v,footer:v,nav:v,article:v,aside:v,figure:v,dialog:v,hgroup:v,mark:r,time:r,meter:r,menu:r,command:r,keygen:r,output:r,progress:u,audio:u,video:u,details:u,datagrid:u,datalist:u};})();var f=a.dtd;d.event=function(g){this.$=g;};d.event.prototype={getKey:function(){return this.$.keyCode||this.$.which;},getKeystroke:function(){var h=this;var g=h.getKey();if(h.$.ctrlKey||h.$.metaKey)g+=1114112;if(h.$.shiftKey)g+=2228224;if(h.$.altKey)g+=4456448;return g;},preventDefault:function(g){var h=this.$;if(h.preventDefault)h.preventDefault();else h.returnValue=false;if(g)this.stopPropagation();},stopPropagation:function(){var g=this.$;if(g.stopPropagation)g.stopPropagation();else g.cancelBubble=true;
},getTarget:function(){var g=this.$.target||this.$.srcElement;return g?new d.node(g):null;}};a.CTRL=1114112;a.SHIFT=2228224;a.ALT=4456448;d.domObject=function(g){if(g)this.$=g;};d.domObject.prototype=(function(){var g=function(h,i){return function(j){if(typeof a!='undefined')h.fire(i,new d.event(j));};};return{getPrivate:function(){var h;if(!(h=this.getCustomData('_')))this.setCustomData('_',h={});return h;},on:function(h){var k=this;var i=k.getCustomData('_cke_nativeListeners');if(!i){i={};k.setCustomData('_cke_nativeListeners',i);}if(!i[h]){var j=i[h]=g(k,h);if(k.$.attachEvent)k.$.attachEvent('on'+h,j);else if(k.$.addEventListener)k.$.addEventListener(h,j,!!a.event.useCapture);}return a.event.prototype.on.apply(k,arguments);},removeListener:function(h){var k=this;a.event.prototype.removeListener.apply(k,arguments);if(!k.hasListeners(h)){var i=k.getCustomData('_cke_nativeListeners'),j=i&&i[h];if(j){if(k.$.detachEvent)k.$.detachEvent('on'+h,j);else if(k.$.removeEventListener)k.$.removeEventListener(h,j,false);delete i[h];}}},removeAllListeners:function(){var k=this;var h=k.getCustomData('_cke_nativeListeners');for(var i in h){var j=h[i];if(k.$.detachEvent)k.$.detachEvent('on'+i,j);else if(k.$.removeEventListener)k.$.removeEventListener(i,j,false);delete h[i];}}};})();(function(g){var h={};a.on('reset',function(){h={};});g.equals=function(i){return i&&i.$===this.$;};g.setCustomData=function(i,j){var k=this.getUniqueId(),l=h[k]||(h[k]={});l[i]=j;return this;};g.getCustomData=function(i){var j=this.$['data-cke-expando'],k=j&&h[j];return k&&k[i];};g.removeCustomData=function(i){var j=this.$['data-cke-expando'],k=j&&h[j],l=k&&k[i];if(typeof l!='undefined')delete k[i];return l||null;};g.clearCustomData=function(){this.removeAllListeners();var i=this.$['data-cke-expando'];i&&delete h[i];};g.getUniqueId=function(){return this.$['data-cke-expando']||(this.$['data-cke-expando']=e.getNextNumber());};a.event.implementOn(g);})(d.domObject.prototype);d.window=function(g){d.domObject.call(this,g);};d.window.prototype=new d.domObject();e.extend(d.window.prototype,{focus:function(){if(b.webkit&&this.$.parent)this.$.parent.focus();this.$.focus();},getViewPaneSize:function(){var g=this.$.document,h=g.compatMode=='CSS1Compat';return{width:(h?g.documentElement.clientWidth:g.body.clientWidth)||0,height:(h?g.documentElement.clientHeight:g.body.clientHeight)||0};},getScrollPosition:function(){var g=this.$;if('pageXOffset' in g)return{x:g.pageXOffset||0,y:g.pageYOffset||0};else{var h=g.document;
return{x:h.documentElement.scrollLeft||h.body.scrollLeft||0,y:h.documentElement.scrollTop||h.body.scrollTop||0};}}});d.document=function(g){d.domObject.call(this,g);};var g=d.document;g.prototype=new d.domObject();e.extend(g.prototype,{appendStyleSheet:function(h){if(this.$.createStyleSheet)this.$.createStyleSheet(h);else{var i=new d.element('link');i.setAttributes({rel:'stylesheet',type:'text/css',href:h});this.getHead().append(i);}},appendStyleText:function(h){var k=this;if(k.$.createStyleSheet){var i=k.$.createStyleSheet('');i.cssText=h;}else{var j=new d.element('style',k);j.append(new d.text(h,k));k.getHead().append(j);}},createElement:function(h,i){var j=new d.element(h,this);if(i){if(i.attributes)j.setAttributes(i.attributes);if(i.styles)j.setStyles(i.styles);}return j;},createText:function(h){return new d.text(h,this);},focus:function(){this.getWindow().focus();},getById:function(h){var i=this.$.getElementById(h);return i?new d.element(i):null;},getByAddress:function(h,i){var j=this.$.documentElement;for(var k=0;j&&k<h.length;k++){var l=h[k];if(!i){j=j.childNodes[l];continue;}var m=-1;for(var n=0;n<j.childNodes.length;n++){var o=j.childNodes[n];if(i===true&&o.nodeType==3&&o.previousSibling&&o.previousSibling.nodeType==3)continue;m++;if(m==l){j=o;break;}}}return j?new d.node(j):null;},getElementsByTag:function(h,i){if(!(c&&!(document.documentMode>8))&&i)h=i+':'+h;return new d.nodeList(this.$.getElementsByTagName(h));},getHead:function(){var h=this.$.getElementsByTagName('head')[0];if(!h)h=this.getDocumentElement().append(new d.element('head'),true);else h=new d.element(h);return(this.getHead=function(){return h;})();},getBody:function(){var h=new d.element(this.$.body);return(this.getBody=function(){return h;})();},getDocumentElement:function(){var h=new d.element(this.$.documentElement);return(this.getDocumentElement=function(){return h;})();},getWindow:function(){var h=new d.window(this.$.parentWindow||this.$.defaultView);return(this.getWindow=function(){return h;})();},write:function(h){var i=this;i.$.open('text/html','replace');b.isCustomDomain()&&(i.$.domain=document.domain);i.$.write(h);i.$.close();}});d.node=function(h){if(h){switch(h.nodeType){case 9:return new g(h);case 1:return new d.element(h);case 3:return new d.text(h);}d.domObject.call(this,h);}return this;};d.node.prototype=new d.domObject();a.NODE_ELEMENT=1;a.NODE_DOCUMENT=9;a.NODE_TEXT=3;a.NODE_COMMENT=8;a.NODE_DOCUMENT_FRAGMENT=11;a.POSITION_IDENTICAL=0;a.POSITION_DISCONNECTED=1;a.POSITION_FOLLOWING=2;
a.POSITION_PRECEDING=4;a.POSITION_IS_CONTAINED=8;a.POSITION_CONTAINS=16;e.extend(d.node.prototype,{appendTo:function(h,i){h.append(this,i);return h;},clone:function(h,i){var j=this.$.cloneNode(h),k=function(l){if(l.nodeType!=1)return;if(!i)l.removeAttribute('id',false);l.removeAttribute('data-cke-expando',false);if(h){var m=l.childNodes;for(var n=0;n<m.length;n++)k(m[n]);}};k(j);return new d.node(j);},hasPrevious:function(){return!!this.$.previousSibling;},hasNext:function(){return!!this.$.nextSibling;},insertAfter:function(h){h.$.parentNode.insertBefore(this.$,h.$.nextSibling);return h;},insertBefore:function(h){h.$.parentNode.insertBefore(this.$,h.$);return h;},insertBeforeMe:function(h){this.$.parentNode.insertBefore(h.$,this.$);return h;},getAddress:function(h){var i=[],j=this.getDocument().$.documentElement,k=this.$;while(k&&k!=j){var l=k.parentNode;if(l)i.unshift(this.getIndex.call({$:k},h));k=l;}return i;},getDocument:function(){return new g(this.$.ownerDocument||this.$.parentNode.ownerDocument);},getIndex:function(h){var i=this.$,j=0;while(i=i.previousSibling){if(h&&i.nodeType==3&&(!i.nodeValue.length||i.previousSibling&&i.previousSibling.nodeType==3))continue;j++;}return j;},getNextSourceNode:function(h,i,j){if(j&&!j.call){var k=j;j=function(n){return!n.equals(k);};}var l=!h&&this.getFirst&&this.getFirst(),m;if(!l){if(this.type==1&&j&&j(this,true)===false)return null;l=this.getNext();}while(!l&&(m=(m||this).getParent())){if(j&&j(m,true)===false)return null;l=m.getNext();}if(!l)return null;if(j&&j(l)===false)return null;if(i&&i!=l.type)return l.getNextSourceNode(false,i,j);return l;},getPreviousSourceNode:function(h,i,j){if(j&&!j.call){var k=j;j=function(n){return!n.equals(k);};}var l=!h&&this.getLast&&this.getLast(),m;if(!l){if(this.type==1&&j&&j(this,true)===false)return null;l=this.getPrevious();}while(!l&&(m=(m||this).getParent())){if(j&&j(m,true)===false)return null;l=m.getPrevious();}if(!l)return null;if(j&&j(l)===false)return null;if(i&&l.type!=i)return l.getPreviousSourceNode(false,i,j);return l;},getPrevious:function(h){var i=this.$,j;do{i=i.previousSibling;j=i&&new d.node(i);}while(j&&h&&!h(j));return j;},getNext:function(h){var i=this.$,j;do{i=i.nextSibling;j=i&&new d.node(i);}while(j&&h&&!h(j));return j;},getParent:function(){var h=this.$.parentNode;return h&&h.nodeType==1?new d.node(h):null;},getParents:function(h){var i=this,j=[];do j[h?'push':'unshift'](i);while(i=i.getParent());return j;},getCommonAncestor:function(h){var j=this;if(h.equals(j))return j;
if(h.contains&&h.contains(j))return h;var i=j.contains?j:j.getParent();do{if(i.contains(h))return i;}while(i=i.getParent());return null;},getPosition:function(h){var i=this.$,j=h.$;if(i.compareDocumentPosition)return i.compareDocumentPosition(j);if(i==j)return 0;if(this.type==1&&h.type==1){if(i.contains){if(i.contains(j))return 16+4;if(j.contains(i))return 8+2;}if('sourceIndex' in i)return i.sourceIndex<0||j.sourceIndex<0?1:i.sourceIndex<j.sourceIndex?4:2;}var k=this.getAddress(),l=h.getAddress(),m=Math.min(k.length,l.length);for(var n=0;n<=m-1;n++){if(k[n]!=l[n]){if(n<m)return k[n]<l[n]?4:2;break;}}return k.length<l.length?16+4:8+2;},getAscendant:function(h,i){var j=this.$,k;if(!i)j=j.parentNode;while(j){if(j.nodeName&&(k=j.nodeName.toLowerCase(),typeof h=='string'?k==h:k in h))return new d.node(j);j=j.parentNode;}return null;},hasAscendant:function(h,i){var j=this.$;if(!i)j=j.parentNode;while(j){if(j.nodeName&&j.nodeName.toLowerCase()==h)return true;j=j.parentNode;}return false;},move:function(h,i){h.append(this.remove(),i);},remove:function(h){var i=this.$,j=i.parentNode;if(j){if(h)for(var k;k=i.firstChild;)j.insertBefore(i.removeChild(k),i);j.removeChild(i);}return this;},replace:function(h){this.insertBefore(h);h.remove();},trim:function(){this.ltrim();this.rtrim();},ltrim:function(){var k=this;var h;while(k.getFirst&&(h=k.getFirst())){if(h.type==3){var i=e.ltrim(h.getText()),j=h.getLength();if(!i){h.remove();continue;}else if(i.length<j){h.split(j-i.length);k.$.removeChild(k.$.firstChild);}}break;}},rtrim:function(){var k=this;var h;while(k.getLast&&(h=k.getLast())){if(h.type==3){var i=e.rtrim(h.getText()),j=h.getLength();if(!i){h.remove();continue;}else if(i.length<j){h.split(i.length);k.$.lastChild.parentNode.removeChild(k.$.lastChild);}}break;}if(!c&&!b.opera){h=k.$.lastChild;if(h&&h.type==1&&h.nodeName.toLowerCase()=='br')h.parentNode.removeChild(h);}},isReadOnly:function(){var h=this;if(this.type!=1)h=this.getParent();if(h&&typeof h.$.isContentEditable!='undefined')return!(h.$.isContentEditable||h.data('cke-editable'));else{var i=h;while(i){if(i.is('body')||!!i.data('cke-editable'))break;if(i.getAttribute('contentEditable')=='false')return true;else if(i.getAttribute('contentEditable')=='true')break;i=i.getParent();}return false;}}});d.nodeList=function(h){this.$=h;};d.nodeList.prototype={count:function(){return this.$.length;},getItem:function(h){var i=this.$[h];return i?new d.node(i):null;}};d.element=function(h,i){if(typeof h=='string')h=(i?i.$:document).createElement(h);
d.domObject.call(this,h);};var h=d.element;h.get=function(i){return i&&(i.$?i:new h(i));};h.prototype=new d.node();h.createFromHtml=function(i,j){var k=new h('div',j);k.setHtml(i);return k.getFirst().remove();};h.setMarker=function(i,j,k,l){var m=j.getCustomData('list_marker_id')||j.setCustomData('list_marker_id',e.getNextNumber()).getCustomData('list_marker_id'),n=j.getCustomData('list_marker_names')||j.setCustomData('list_marker_names',{}).getCustomData('list_marker_names');i[m]=j;n[k]=1;return j.setCustomData(k,l);};h.clearAllMarkers=function(i){for(var j in i)h.clearMarkers(i,i[j],1);};h.clearMarkers=function(i,j,k){var l=j.getCustomData('list_marker_names'),m=j.getCustomData('list_marker_id');for(var n in l)j.removeCustomData(n);j.removeCustomData('list_marker_names');if(k){j.removeCustomData('list_marker_id');delete i[m];}};e.extend(h.prototype,{type:1,addClass:function(i){var j=this.$.className;if(j){var k=new RegExp('(?:^|\\s)'+i+'(?:\\s|$)','');if(!k.test(j))j+=' '+i;}this.$.className=j||i;},removeClass:function(i){var j=this.getAttribute('class');if(j){var k=new RegExp('(?:^|\\s+)'+i+'(?=\\s|$)','i');if(k.test(j)){j=j.replace(k,'').replace(/^\s+/,'');if(j)this.setAttribute('class',j);else this.removeAttribute('class');}}},hasClass:function(i){var j=new RegExp('(?:^|\\s+)'+i+'(?=\\s|$)','');return j.test(this.getAttribute('class'));},append:function(i,j){var k=this;if(typeof i=='string')i=k.getDocument().createElement(i);if(j)k.$.insertBefore(i.$,k.$.firstChild);else k.$.appendChild(i.$);return i;},appendHtml:function(i){var k=this;if(!k.$.childNodes.length)k.setHtml(i);else{var j=new h('div',k.getDocument());j.setHtml(i);j.moveChildren(k);}},appendText:function(i){if(this.$.text!=undefined)this.$.text+=i;else this.append(new d.text(i));},appendBogus:function(){var k=this;var i=k.getLast();while(i&&i.type==3&&!e.rtrim(i.getText()))i=i.getPrevious();if(!i||!i.is||!i.is('br')){var j=b.opera?k.getDocument().createText(''):k.getDocument().createElement('br');b.gecko&&j.setAttribute('type','_moz');k.append(j);}},breakParent:function(i){var l=this;var j=new d.range(l.getDocument());j.setStartAfter(l);j.setEndAfter(i);var k=j.extractContents();j.insertNode(l.remove());k.insertAfterNode(l);},contains:c||b.webkit?function(i){var j=this.$;return i.type!=1?j.contains(i.getParent().$):j!=i.$&&j.contains(i.$);}:function(i){return!!(this.$.compareDocumentPosition(i.$)&16);},focus:(function(){function i(){try{this.$.focus();}catch(j){}};return function(j){if(j)e.setTimeout(i,100,this);
else i.call(this);};})(),getHtml:function(){var i=this.$.innerHTML;return c?i.replace(/<\?[^>]*>/g,''):i;},getOuterHtml:function(){var j=this;if(j.$.outerHTML)return j.$.outerHTML.replace(/<\?[^>]*>/,'');var i=j.$.ownerDocument.createElement('div');i.appendChild(j.$.cloneNode(true));return i.innerHTML;},setHtml:function(i){return this.$.innerHTML=i;},setText:function(i){h.prototype.setText=this.$.innerText!=undefined?function(j){return this.$.innerText=j;}:function(j){return this.$.textContent=j;};return this.setText(i);},getAttribute:(function(){var i=function(j){return this.$.getAttribute(j,2);};if(c&&(b.ie7Compat||b.ie6Compat))return function(j){var n=this;switch(j){case 'class':j='className';break;case 'http-equiv':j='httpEquiv';break;case 'name':return n.$.name;case 'tabindex':var k=i.call(n,j);if(k!==0&&n.$.tabIndex===0)k=null;return k;break;case 'checked':var l=n.$.attributes.getNamedItem(j),m=l.specified?l.nodeValue:n.$.checked;return m?'checked':null;case 'hspace':case 'value':return n.$[j];case 'style':return n.$.style.cssText;}return i.call(n,j);};else return i;})(),getChildren:function(){return new d.nodeList(this.$.childNodes);},getComputedStyle:c?function(i){return this.$.currentStyle[e.cssStyleToDomStyle(i)];}:function(i){return this.getWindow().$.getComputedStyle(this.$,'').getPropertyValue(i);},getDtd:function(){var i=f[this.getName()];this.getDtd=function(){return i;};return i;},getElementsByTag:g.prototype.getElementsByTag,getTabIndex:c?function(){var i=this.$.tabIndex;if(i===0&&!f.$tabIndex[this.getName()]&&parseInt(this.getAttribute('tabindex'),10)!==0)i=-1;return i;}:b.webkit?function(){var i=this.$.tabIndex;if(i==undefined){i=parseInt(this.getAttribute('tabindex'),10);if(isNaN(i))i=-1;}return i;}:function(){return this.$.tabIndex;},getText:function(){return this.$.textContent||this.$.innerText||'';},getWindow:function(){return this.getDocument().getWindow();},getId:function(){return this.$.id||null;},getNameAtt:function(){return this.$.name||null;},getName:function(){var i=this.$.nodeName.toLowerCase();if(c&&!(document.documentMode>8)){var j=this.$.scopeName;if(j!='HTML')i=j.toLowerCase()+':'+i;}return(this.getName=function(){return i;})();},getValue:function(){return this.$.value;},getFirst:function(i){var j=this.$.firstChild,k=j&&new d.node(j);if(k&&i&&!i(k))k=k.getNext(i);return k;},getLast:function(i){var j=this.$.lastChild,k=j&&new d.node(j);if(k&&i&&!i(k))k=k.getPrevious(i);return k;},getStyle:function(i){return this.$.style[e.cssStyleToDomStyle(i)];
},is:function(){var i=this.getName();for(var j=0;j<arguments.length;j++){if(arguments[j]==i)return true;}return false;},isEditable:function(i){var l=this;var j=l.getName();if(l.isReadOnly()||l.getComputedStyle('display')=='none'||l.getComputedStyle('visibility')=='hidden'||f.$nonEditable[j])return false;if(i!==false){var k=f[j]||f.span;return k&&k['#'];}return true;},isIdentical:function(i){if(this.getName()!=i.getName())return false;var j=this.$.attributes,k=i.$.attributes,l=j.length,m=k.length;for(var n=0;n<l;n++){var o=j[n];if(o.nodeName=='_moz_dirty')continue;if((!c||o.specified&&o.nodeName!='data-cke-expando')&&o.nodeValue!=i.getAttribute(o.nodeName))return false;}if(c)for(n=0;n<m;n++){o=k[n];if(o.specified&&o.nodeName!='data-cke-expando'&&o.nodeValue!=this.getAttribute(o.nodeName))return false;}return true;},isVisible:function(){var l=this;var i=(l.$.offsetHeight||l.$.offsetWidth)&&l.getComputedStyle('visibility')!='hidden',j,k;if(i&&(b.webkit||b.opera)){j=l.getWindow();if(!j.equals(a.document.getWindow())&&(k=j.$.frameElement))i=new h(k).isVisible();}return!!i;},isEmptyInlineRemoveable:function(){if(!f.$removeEmpty[this.getName()])return false;var i=this.getChildren();for(var j=0,k=i.count();j<k;j++){var l=i.getItem(j);if(l.type==1&&l.data('cke-bookmark'))continue;if(l.type==1&&!l.isEmptyInlineRemoveable()||l.type==3&&e.trim(l.getText()))return false;}return true;},hasAttributes:c&&(b.ie7Compat||b.ie6Compat)?function(){var i=this.$.attributes;for(var j=0;j<i.length;j++){var k=i[j];switch(k.nodeName){case 'class':if(this.getAttribute('class'))return true;case 'data-cke-expando':continue;default:if(k.specified)return true;}}return false;}:function(){var i=this.$.attributes,j=i.length,k={'data-cke-expando':1,_moz_dirty:1};return j>0&&(j>2||!k[i[0].nodeName]||j==2&&!k[i[1].nodeName]);},hasAttribute:(function(){function i(j){var k=this.$.attributes.getNamedItem(j);return!!(k&&k.specified);};return c&&b.version<8?function(j){if(j=='name')return!!this.$.name;return i.call(this,j);}:i;})(),hide:function(){this.setStyle('display','none');},moveChildren:function(i,j){var k=this.$;i=i.$;if(k==i)return;var l;if(j)while(l=k.lastChild)i.insertBefore(k.removeChild(l),i.firstChild);else while(l=k.firstChild)i.appendChild(k.removeChild(l));},mergeSiblings:(function(){function i(j,k,l){if(k&&k.type==1){var m=[];while(k.data('cke-bookmark')||k.isEmptyInlineRemoveable()){m.push(k);k=l?k.getNext():k.getPrevious();if(!k||k.type!=1)return;}if(j.isIdentical(k)){var n=l?j.getLast():j.getFirst();
while(m.length)m.shift().move(j,!l);k.moveChildren(j,!l);k.remove();if(n&&n.type==1)n.mergeSiblings();}}};return function(j){var k=this;if(!(j===false||f.$removeEmpty[k.getName()]||k.is('a')))return;i(k,k.getNext(),true);i(k,k.getPrevious());};})(),show:function(){this.setStyles({display:'',visibility:''});},setAttribute:(function(){var i=function(j,k){this.$.setAttribute(j,k);return this;};if(c&&(b.ie7Compat||b.ie6Compat))return function(j,k){var l=this;if(j=='class')l.$.className=k;else if(j=='style')l.$.style.cssText=k;else if(j=='tabindex')l.$.tabIndex=k;else if(j=='checked')l.$.checked=k;else i.apply(l,arguments);return l;};else if(b.ie8Compat&&b.secure)return function(j,k){if(j=='src'&&k.match(/^http:\/\//))try{i.apply(this,arguments);}catch(l){}else i.apply(this,arguments);return this;};else return i;})(),setAttributes:function(i){for(var j in i)this.setAttribute(j,i[j]);return this;},setValue:function(i){this.$.value=i;return this;},removeAttribute:(function(){var i=function(j){this.$.removeAttribute(j);};if(c&&(b.ie7Compat||b.ie6Compat))return function(j){if(j=='class')j='className';else if(j=='tabindex')j='tabIndex';i.call(this,j);};else return i;})(),removeAttributes:function(i){if(e.isArray(i))for(var j=0;j<i.length;j++)this.removeAttribute(i[j]);else for(var k in i)i.hasOwnProperty(k)&&this.removeAttribute(k);},removeStyle:function(i){var j=this;j.setStyle(i,'');if(j.$.style.removeAttribute)j.$.style.removeAttribute(e.cssStyleToDomStyle(i));if(!j.$.style.cssText)j.removeAttribute('style');},setStyle:function(i,j){this.$.style[e.cssStyleToDomStyle(i)]=j;return this;},setStyles:function(i){for(var j in i)this.setStyle(j,i[j]);return this;},setOpacity:function(i){if(c){i=Math.round(i*100);this.setStyle('filter',i>=100?'':'progid:DXImageTransform.Microsoft.Alpha(opacity='+i+')');}else this.setStyle('opacity',i);},unselectable:b.gecko?function(){this.$.style.MozUserSelect='none';this.on('dragstart',function(i){i.data.preventDefault();});}:b.webkit?function(){this.$.style.KhtmlUserSelect='none';this.on('dragstart',function(i){i.data.preventDefault();});}:function(){if(c||b.opera){var i=this.$,j,k=0;i.unselectable='on';while(j=i.all[k++])switch(j.tagName.toLowerCase()){case 'iframe':case 'textarea':case 'input':case 'select':break;default:j.unselectable='on';}}},getPositionedAncestor:function(){var i=this;while(i.getName()!='html'){if(i.getComputedStyle('position')!='static')return i;i=i.getParent();}return null;},getDocumentPosition:function(i){var D=this;
var j=0,k=0,l=D.getDocument(),m=l.getBody(),n=l.$.compatMode=='BackCompat';if(document.documentElement.getBoundingClientRect){var o=D.$.getBoundingClientRect(),p=l.$,q=p.documentElement,r=q.clientTop||m.$.clientTop||0,s=q.clientLeft||m.$.clientLeft||0,t=true;if(c){var u=l.getDocumentElement().contains(D),v=l.getBody().contains(D);t=n&&v||!n&&u;}if(t){j=o.left+(!n&&q.scrollLeft||m.$.scrollLeft);j-=s;k=o.top+(!n&&q.scrollTop||m.$.scrollTop);k-=r;}}else{var w=D,x=null,y;while(w&&!(w.getName()=='body'||w.getName()=='html')){j+=w.$.offsetLeft-w.$.scrollLeft;k+=w.$.offsetTop-w.$.scrollTop;if(!w.equals(D)){j+=w.$.clientLeft||0;k+=w.$.clientTop||0;}var z=x;while(z&&!z.equals(w)){j-=z.$.scrollLeft;k-=z.$.scrollTop;z=z.getParent();}x=w;w=(y=w.$.offsetParent)?new h(y):null;}}if(i){var A=D.getWindow(),B=i.getWindow();if(!A.equals(B)&&A.$.frameElement){var C=new h(A.$.frameElement).getDocumentPosition(i);j+=C.x;k+=C.y;}}if(!document.documentElement.getBoundingClientRect)if(b.gecko&&!n){j+=D.$.clientLeft?1:0;k+=D.$.clientTop?1:0;}return{x:j,y:k};},scrollIntoView:function(i){var o=this;var j=o.getWindow(),k=j.getViewPaneSize().height,l=k*-1;if(i)l+=k;else{l+=o.$.offsetHeight||0;l+=parseInt(o.getComputedStyle('marginBottom')||0,10)||0;}var m=o.getDocumentPosition();l+=m.y;l=l<0?0:l;var n=j.getScrollPosition().y;if(l>n||l<n-k)j.$.scrollTo(0,l);},setState:function(i){var j=this;switch(i){case 1:j.addClass('cke_on');j.removeClass('cke_off');j.removeClass('cke_disabled');break;case 0:j.addClass('cke_disabled');j.removeClass('cke_off');j.removeClass('cke_on');break;default:j.addClass('cke_off');j.removeClass('cke_on');j.removeClass('cke_disabled');break;}},getFrameDocument:function(){var i=this.$;try{i.contentWindow.document;}catch(j){i.src=i.src;if(c&&b.version<7)window.showModalDialog('javascript:document.write("<script>window.setTimeout(function(){window.close();},50);</script>")');}return i&&new g(i.contentWindow.document);},copyAttributes:function(i,j){var p=this;var k=p.$.attributes;j=j||{};for(var l=0;l<k.length;l++){var m=k[l],n=m.nodeName.toLowerCase(),o;if(n in j)continue;if(n=='checked'&&(o=p.getAttribute(n)))i.setAttribute(n,o);else if(m.specified||c&&m.nodeValue&&n=='value'){o=p.getAttribute(n);if(o===null)o=m.nodeValue;i.setAttribute(n,o);}}if(p.$.style.cssText!=='')i.$.style.cssText=p.$.style.cssText;},renameNode:function(i){var l=this;if(l.getName()==i)return;var j=l.getDocument(),k=new h(i,j);l.copyAttributes(k);l.moveChildren(k);l.getParent()&&l.$.parentNode.replaceChild(k.$,l.$);
k.$['data-cke-expando']=l.$['data-cke-expando'];l.$=k.$;},getChild:function(i){var j=this.$;if(!i.slice)j=j.childNodes[i];else while(i.length>0&&j)j=j.childNodes[i.shift()];return j?new d.node(j):null;},getChildCount:function(){return this.$.childNodes.length;},disableContextMenu:function(){this.on('contextmenu',function(i){if(!i.data.getTarget().hasClass('cke_enable_context_menu'))i.data.preventDefault();});},getDirection:function(i){var j=this;return i?j.getComputedStyle('direction')||j.getDirection()||j.getDocument().$.dir||j.getDocument().getBody().getDirection(1):j.getStyle('direction')||j.getAttribute('dir');},data:function(i,j){i='data-'+i;if(j===undefined)return this.getAttribute(i);else if(j===false)this.removeAttribute(i);else this.setAttribute(i,j);return null;}});(function(){var i={width:['border-left-width','border-right-width','padding-left','padding-right'],height:['border-top-width','border-bottom-width','padding-top','padding-bottom']};function j(k){var l=0;for(var m=0,n=i[k].length;m<n;m++)l+=parseInt(this.getComputedStyle(i[k][m])||0,10)||0;return l;};h.prototype.setSize=function(k,l,m){if(typeof l=='number'){if(m&&!(c&&b.quirks))l-=j.call(this,k);this.setStyle(k,l+'px');}};h.prototype.getSize=function(k,l){var m=Math.max(this.$['offset'+e.capitalize(k)],this.$['client'+e.capitalize(k)])||0;if(l)m-=j.call(this,k);return m;};})();a.command=function(i,j){this.uiItems=[];this.exec=function(k){if(this.state==0)return false;if(this.editorFocus)i.focus();return j.exec.call(this,i,k)!==false;};e.extend(this,j,{modes:{wysiwyg:1},editorFocus:1,state:2});a.event.call(this);};a.command.prototype={enable:function(){var i=this;if(i.state==0)i.setState(!i.preserveState||typeof i.previousState=='undefined'?2:i.previousState);},disable:function(){this.setState(0);},setState:function(i){var j=this;if(j.state==i)return false;j.previousState=j.state;j.state=i;j.fire('state');return true;},toggleState:function(){var i=this;if(i.state==2)i.setState(1);else if(i.state==1)i.setState(2);}};a.event.implementOn(a.command.prototype,true);a.ENTER_P=1;a.ENTER_BR=2;a.ENTER_DIV=3;a.config={customConfig:'config.js',autoUpdateElement:true,baseHref:'',contentsCss:a.basePath+'contents.css',contentsLangDirection:'ui',contentsLanguage:'',language:'',defaultLanguage:'en',enterMode:1,forceEnterMode:false,shiftEnterMode:2,corePlugins:'',docType:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',bodyId:'',bodyClass:'',fullPage:false,height:200,plugins:'about,a11yhelp,basicstyles,bidi,blockquote,button,clipboard,colorbutton,colordialog,contextmenu,dialogadvtab,div,elementspath,enterkey,entities,filebrowser,find,flash,font,format,forms,horizontalrule,htmldataprocessor,iframe,image,indent,justify,keystrokes,link,list,liststyle,maximize,newpage,pagebreak,pastefromword,pastetext,popup,preview,print,removeformat,resize,save,scayt,smiley,showblocks,showborders,sourcearea,stylescombo,table,tabletools,specialchar,tab,templates,toolbar,undo,wysiwygarea,wsc',extraPlugins:'',removePlugins:'',protectedSource:[],tabIndex:0,theme:'default',skin:'kama',width:'',baseFloatZIndex:10000};
var i=a.config;a.focusManager=function(j){if(j.focusManager)return j.focusManager;this.hasFocus=false;this._={editor:j};return this;};a.focusManager.prototype={focus:function(){var k=this;if(k._.timer)clearTimeout(k._.timer);if(!k.hasFocus){if(a.currentInstance)a.currentInstance.focusManager.forceBlur();var j=k._.editor;j.container.getChild(1).addClass('cke_focus');k.hasFocus=true;j.fire('focus');}},blur:function(){var j=this;if(j._.timer)clearTimeout(j._.timer);j._.timer=setTimeout(function(){delete j._.timer;j.forceBlur();},100);},forceBlur:function(){if(this.hasFocus){var j=this._.editor;j.container.getChild(1).removeClass('cke_focus');this.hasFocus=false;j.fire('blur');}}};(function(){var j={};a.lang={languages:{af:1,ar:1,bg:1,bn:1,bs:1,ca:1,cs:1,cy:1,da:1,de:1,el:1,'en-au':1,'en-ca':1,'en-gb':1,en:1,eo:1,es:1,et:1,eu:1,fa:1,fi:1,fo:1,'fr-ca':1,fr:1,gl:1,gu:1,he:1,hi:1,hr:1,hu:1,is:1,it:1,ja:1,ka:1,km:1,ko:1,lt:1,lv:1,mn:1,ms:1,nb:1,nl:1,no:1,pl:1,'pt-br':1,pt:1,ro:1,ru:1,sk:1,sl:1,'sr-latn':1,sr:1,sv:1,th:1,tr:1,uk:1,vi:1,'zh-cn':1,zh:1},load:function(k,l,m){if(!k||!a.lang.languages[k])k=this.detect(l,k);if(!this[k])a.scriptLoader.load(a.getUrl('lang/'+k+'.js'),function(){m(k,this[k]);},this);else m(k,this[k]);},detect:function(k,l){var m=this.languages;l=l||navigator.userLanguage||navigator.language||k;var n=l.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/),o=n[1],p=n[2];if(m[o+'-'+p])o=o+'-'+p;else if(!m[o])o=null;a.lang.detect=o?function(){return o;}:function(q){return q;};return o||k;}};})();a.scriptLoader=(function(){var j={},k={};return{load:function(l,m,n,o){var p=typeof l=='string';if(p)l=[l];if(!n)n=a;var q=l.length,r=[],s=[],t=function(y){if(m)if(p)m.call(n,y);else m.call(n,r,s);};if(q===0){t(true);return;}var u=function(y,z){(z?r:s).push(y);if(--q<=0){o&&a.document.getDocumentElement().removeStyle('cursor');t(z);}},v=function(y,z){j[y]=1;var A=k[y];delete k[y];for(var B=0;B<A.length;B++)A[B](y,z);},w=function(y){if(j[y]){u(y,true);return;}var z=k[y]||(k[y]=[]);z.push(u);if(z.length>1)return;var A=new h('script');A.setAttributes({type:'text/javascript',src:y});if(m)if(c)A.$.onreadystatechange=function(){if(A.$.readyState=='loaded'||A.$.readyState=='complete'){A.$.onreadystatechange=null;v(y,true);}};else{A.$.onload=function(){setTimeout(function(){v(y,true);},0);};A.$.onerror=function(){v(y,false);};}A.appendTo(a.document.getHead());};o&&a.document.getDocumentElement().setStyle('cursor','wait');for(var x=0;x<q;x++)w(l[x]);}};})();a.resourceManager=function(j,k){var l=this;
l.basePath=j;l.fileName=k;l.registered={};l.loaded={};l.externals={};l._={waitingList:{}};};a.resourceManager.prototype={add:function(j,k){if(this.registered[j])throw '[CKEDITOR.resourceManager.add] The resource name "'+j+'" is already registered.';a.fire(j+e.capitalize(this.fileName)+'Ready',this.registered[j]=k||{});},get:function(j){return this.registered[j]||null;},getPath:function(j){var k=this.externals[j];return a.getUrl(k&&k.dir||this.basePath+j+'/');},getFilePath:function(j){var k=this.externals[j];return a.getUrl(this.getPath(j)+(k&&typeof k.file=='string'?k.file:this.fileName+'.js'));},addExternal:function(j,k,l){j=j.split(',');for(var m=0;m<j.length;m++){var n=j[m];this.externals[n]={dir:k,file:l};}},load:function(j,k,l){if(!e.isArray(j))j=j?[j]:[];var m=this.loaded,n=this.registered,o=[],p={},q={};for(var r=0;r<j.length;r++){var s=j[r];if(!s)continue;if(!m[s]&&!n[s]){var t=this.getFilePath(s);o.push(t);if(!(t in p))p[t]=[];p[t].push(s);}else q[s]=this.get(s);}a.scriptLoader.load(o,function(u,v){if(v.length)throw '[CKEDITOR.resourceManager.load] Resource name "'+p[v[0]].join(',')+'" was not found at "'+v[0]+'".';for(var w=0;w<u.length;w++){var x=p[u[w]];for(var y=0;y<x.length;y++){var z=x[y];q[z]=this.get(z);m[z]=1;}}k.call(l,q);},this);}};a.plugins=new a.resourceManager('plugins/','plugin');var j=a.plugins;j.load=e.override(j.load,function(k){return function(l,m,n){var o={},p=function(q){k.call(this,q,function(r){e.extend(o,r);var s=[];for(var t in r){var u=r[t],v=u&&u.requires;if(v)for(var w=0;w<v.length;w++){if(!o[v[w]])s.push(v[w]);}}if(s.length)p.call(this,s);else{for(t in o){u=o[t];if(u.onLoad&&!u.onLoad._called){u.onLoad();u.onLoad._called=1;}}if(m)m.call(n||window,o);}},this);};p.call(this,l);};});j.setLang=function(k,l,m){var n=this.get(k),o=n.langEntries||(n.langEntries={}),p=n.lang||(n.lang=[]);if(e.indexOf(p,l)==-1)p.push(l);o[l]=m;};a.skins=(function(){var k={},l={},m=function(n,o,p,q){var r=k[o];if(!n.skin){n.skin=r;if(r.init)r.init(n);}var s=function(B){for(var C=0;C<B.length;C++)B[C]=a.getUrl(l[o]+B[C]);};function t(B,C){return B.replace(/url\s*\(([\s'"]*)(.*?)([\s"']*)\)/g,function(D,E,F,G){if(/^\/|^\w?:/.test(F))return D;else return 'url('+C+E+F+G+')';});};p=r[p];var u=!p||!!p._isLoaded;if(u)q&&q();else{var v=p._pending||(p._pending=[]);v.push(q);if(v.length>1)return;var w=!p.css||!p.css.length,x=!p.js||!p.js.length,y=function(){if(w&&x){p._isLoaded=1;for(var B=0;B<v.length;B++){if(v[B])v[B]();}}};if(!w){var z=p.css;if(e.isArray(z)){s(z);
for(var A=0;A<z.length;A++)a.document.appendStyleSheet(z[A]);}else{z=t(z,a.getUrl(l[o]));a.document.appendStyleText(z);}p.css=z;w=1;}if(!x){s(p.js);a.scriptLoader.load(p.js,function(){x=1;y();});}y();}};return{add:function(n,o){k[n]=o;o.skinPath=l[n]||(l[n]=a.getUrl('skins/'+n+'/'));},load:function(n,o,p){var q=n.skinName,r=n.skinPath;if(k[q])m(n,q,o,p);else{l[q]=r;a.scriptLoader.load(a.getUrl(r+'skin.js'),function(){m(n,q,o,p);});}}};})();a.themes=new a.resourceManager('themes/','theme');a.ui=function(k){if(k.ui)return k.ui;this._={handlers:{},items:{},editor:k};return this;};var k=a.ui;k.prototype={add:function(l,m,n){this._.items[l]={type:m,command:n.command||null,args:Array.prototype.slice.call(arguments,2)};},create:function(l){var q=this;var m=q._.items[l],n=m&&q._.handlers[m.type],o=m&&m.command&&q._.editor.getCommand(m.command),p=n&&n.create.apply(q,m.args);m&&(p=e.extend(p,q._.editor.skin[m.type],true));if(o)o.uiItems.push(p);return p;},addHandler:function(l,m){this._.handlers[l]=m;}};a.event.implementOn(k);(function(){var l=0,m=function(){var x='editor'+ ++l;return a.instances&&a.instances[x]?m():x;},n={},o=function(x){var y=x.config.customConfig;if(!y)return false;y=a.getUrl(y);var z=n[y]||(n[y]={});if(z.fn){z.fn.call(x,x.config);if(a.getUrl(x.config.customConfig)==y||!o(x))x.fireOnce('customConfigLoaded');}else a.scriptLoader.load(y,function(){if(a.editorConfig)z.fn=a.editorConfig;else z.fn=function(){};o(x);});return true;},p=function(x,y){x.on('customConfigLoaded',function(){if(y){if(y.on)for(var z in y.on)x.on(z,y.on[z]);e.extend(x.config,y,true);delete x.config.on;}q(x);});if(y&&y.customConfig!=undefined)x.config.customConfig=y.customConfig;if(!o(x))x.fireOnce('customConfigLoaded');},q=function(x){var y=x.config.skin.split(','),z=y[0],A=a.getUrl(y[1]||'skins/'+z+'/');x.skinName=z;x.skinPath=A;x.skinClass='cke_skin_'+z;x.tabIndex=x.config.tabIndex||x.element.getAttribute('tabindex')||0;x.readOnly=!!(x.config.readOnly||x.element.getAttribute('disabled'));x.fireOnce('configLoaded');t(x);},r=function(x){a.lang.load(x.config.language,x.config.defaultLanguage,function(y,z){x.langCode=y;x.lang=e.prototypedCopy(z);if(b.gecko&&b.version<10900&&x.lang.dir=='rtl')x.lang.dir='ltr';x.fire('langLoaded');var A=x.config;A.contentsLangDirection=='ui'&&(A.contentsLangDirection=x.lang.dir);s(x);});},s=function(x){var y=x.config,z=y.plugins,A=y.extraPlugins,B=y.removePlugins;if(A){var C=new RegExp('(?:^|,)(?:'+A.replace(/\s*,\s*/g,'|')+')(?=,|$)','g');z=z.replace(C,'');
z+=','+A;}if(B){C=new RegExp('(?:^|,)(?:'+B.replace(/\s*,\s*/g,'|')+')(?=,|$)','g');z=z.replace(C,'');}b.air&&(z+=',adobeair');j.load(z.split(','),function(D){var E=[],F=[],G=[];x.plugins=D;for(var H in D){var I=D[H],J=I.lang,K=j.getPath(H),L=null;I.path=K;if(J){L=e.indexOf(J,x.langCode)>=0?x.langCode:J[0];if(!I.langEntries||!I.langEntries[L])G.push(a.getUrl(K+'lang/'+L+'.js'));else{e.extend(x.lang,I.langEntries[L]);L=null;}}F.push(L);E.push(I);}a.scriptLoader.load(G,function(){var M=['beforeInit','init','afterInit'];for(var N=0;N<M.length;N++)for(var O=0;O<E.length;O++){var P=E[O];if(N===0&&F[O]&&P.lang)e.extend(x.lang,P.langEntries[F[O]]);if(P[M[N]])P[M[N]](x);}x.fire('pluginsLoaded');u(x);});});},t=function(x){a.skins.load(x,'editor',function(){r(x);});},u=function(x){var y=x.config.theme;a.themes.load(y,function(){var z=x.theme=a.themes.get(y);z.path=a.themes.getPath(y);z.build(x);if(x.config.autoUpdateElement)v(x);});},v=function(x){var y=x.element;if(x.elementMode==1&&y.is('textarea')){var z=y.$.form&&new h(y.$.form);if(z){function A(){x.updateElement();};z.on('submit',A);if(!z.$.submit.nodeName&&!z.$.submit.length)z.$.submit=e.override(z.$.submit,function(B){return function(){x.updateElement();if(B.apply)B.apply(this,arguments);else B();};});x.on('destroy',function(){z.removeListener('submit',A);});}}};function w(){var x,y=this._.commands,z=this.mode;if(!z)return;for(var A in y){x=y[A];x[x.startDisabled?'disable':this.readOnly&&!x.readOnly?'disable':x.modes[z]?'enable':'disable']();}};a.editor.prototype._init=function(){var z=this;var x=h.get(z._.element),y=z._.instanceConfig;delete z._.element;delete z._.instanceConfig;z._.commands={};z._.styles=[];z.element=x;z.name=x&&z.elementMode==1&&(x.getId()||x.getNameAtt())||m();if(z.name in a.instances)throw '[CKEDITOR.editor] The instance "'+z.name+'" already exists.';z.id=e.getNextId();z.config=e.prototypedCopy(i);z.ui=new k(z);z.focusManager=new a.focusManager(z);a.fire('instanceCreated',null,z);z.on('mode',w,null,null,1);z.on('readOnly',w,null,null,1);p(z,y);};})();e.extend(a.editor.prototype,{addCommand:function(l,m){return this._.commands[l]=new a.command(this,m);},addCss:function(l){this._.styles.push(l);},destroy:function(l){var m=this;if(!l)m.updateElement();m.fire('destroy');m.theme&&m.theme.destroy(m);a.remove(m);a.fire('instanceDestroyed',null,m);},execCommand:function(l,m){var n=this.getCommand(l),o={name:l,commandData:m,command:n};if(n&&n.state!=0)if(this.fire('beforeCommandExec',o)!==true){o.returnValue=n.exec(o.commandData);
if(!n.async&&this.fire('afterCommandExec',o)!==true)return o.returnValue;}return false;},getCommand:function(l){return this._.commands[l];},getData:function(){var n=this;n.fire('beforeGetData');var l=n._.data;if(typeof l!='string'){var m=n.element;if(m&&n.elementMode==1)l=m.is('textarea')?m.getValue():m.getHtml();else l='';}l={dataValue:l};n.fire('getData',l);return l.dataValue;},getSnapshot:function(){var l=this.fire('getSnapshot');if(typeof l!='string'){var m=this.element;if(m&&this.elementMode==1)l=m.is('textarea')?m.getValue():m.getHtml();}return l;},loadSnapshot:function(l){this.fire('loadSnapshot',l);},setData:function(l,m,n){if(m)this.on('dataReady',function(p){p.removeListener();m.call(p.editor);});var o={dataValue:l};!n&&this.fire('setData',o);this._.data=o.dataValue;!n&&this.fire('afterSetData',o);},setReadOnly:function(l){l=l==undefined||l;if(this.readOnly!=l){this.readOnly=l;this.fire('readOnly');}},insertHtml:function(l){this.fire('insertHtml',l);},insertText:function(l){this.fire('insertText',l);},insertElement:function(l){this.fire('insertElement',l);},checkDirty:function(){return this.mayBeDirty&&this._.previousValue!==this.getSnapshot();},resetDirty:function(){if(this.mayBeDirty)this._.previousValue=this.getSnapshot();},updateElement:function(){var n=this;var l=n.element;if(l&&n.elementMode==1){var m=n.getData();if(n.config.htmlEncodeOutput)m=e.htmlEncode(m);if(l.is('textarea'))l.setValue(m);else l.setHtml(m);}}});a.on('loaded',function(){var l=a.editor._pending;if(l){delete a.editor._pending;for(var m=0;m<l.length;m++)l[m]._init();}});a.htmlParser=function(){this._={htmlPartsRegex:new RegExp("<(?:(?:\\/([^>]+)>)|(?:!--([\\S|\\s]*?)-->)|(?:([^\\s>]+)\\s*((?:(?:\"[^\"]*\")|(?:'[^']*')|[^\"'>])*)\\/?>))",'g')};};(function(){var l=/([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,m={checked:1,compact:1,declare:1,defer:1,disabled:1,ismap:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,selected:1};a.htmlParser.prototype={onTagOpen:function(){},onTagClose:function(){},onText:function(){},onCDATA:function(){},onComment:function(){},parse:function(n){var A=this;var o,p,q=0,r;while(o=A._.htmlPartsRegex.exec(n)){var s=o.index;if(s>q){var t=n.substring(q,s);if(r)r.push(t);else A.onText(t);}q=A._.htmlPartsRegex.lastIndex;if(p=o[1]){p=p.toLowerCase();if(r&&f.$cdata[p]){A.onCDATA(r.join(''));r=null;}if(!r){A.onTagClose(p);continue;}}if(r){r.push(o[0]);continue;}if(p=o[3]){p=p.toLowerCase();if(/="/.test(p))continue;
var u={},v,w=o[4],x=!!(w&&w.charAt(w.length-1)=='/');if(w)while(v=l.exec(w)){var y=v[1].toLowerCase(),z=v[2]||v[3]||v[4]||'';if(!z&&m[y])u[y]=y;else u[y]=z;}A.onTagOpen(p,u,x);if(!r&&f.$cdata[p])r=[];continue;}if(p=o[2])A.onComment(p);}if(n.length>q)A.onText(n.substring(q,n.length));}};})();a.htmlParser.comment=function(l){this.value=l;this._={isBlockLike:false};};a.htmlParser.comment.prototype={type:8,writeHtml:function(l,m){var n=this.value;if(m){if(!(n=m.onComment(n,this)))return;if(typeof n!='string'){n.parent=this.parent;n.writeHtml(l,m);return;}}l.comment(n);}};(function(){a.htmlParser.text=function(l){this.value=l;this._={isBlockLike:false};};a.htmlParser.text.prototype={type:3,writeHtml:function(l,m){var n=this.value;if(m&&!(n=m.onText(n,this)))return;l.text(n);}};})();(function(){a.htmlParser.cdata=function(l){this.value=l;};a.htmlParser.cdata.prototype={type:3,writeHtml:function(l){l.write(this.value);}};})();a.htmlParser.fragment=function(){this.children=[];this.parent=null;this._={isBlockLike:true,hasInlineStarted:false};};(function(){var l=e.extend({table:1,ul:1,ol:1,dl:1},f.table,f.ul,f.ol,f.dl),m=c&&b.version<8?{dd:1,dt:1}:{},n={ol:1,ul:1},o=e.extend({},{html:1},f.html,f.body,f.head,{style:1,script:1});function p(q){return q.name=='a'&&q.attributes.href||f.$removeEmpty[q.name];};a.htmlParser.fragment.fromHtml=function(q,r,s){var t=new a.htmlParser(),u=s||new a.htmlParser.fragment(),v=[],w=[],x=u,y=false,z=false;function A(D){var E;if(v.length>0)for(var F=0;F<v.length;F++){var G=v[F],H=G.name,I=f[H],J=x.name&&f[x.name];if((!J||J[H])&&(!D||!I||I[D]||!f[D])){if(!E){B();E=1;}G=G.clone();G.parent=x;x=G;v.splice(F,1);F--;}else if(H==x.name)C(x,x.parent,1),F--;}};function B(){while(w.length)x.add(w.shift());};function C(D,E,F){if(D.previous!==undefined)return;E=E||x||u;var G=x;if(r&&(!E.type||E.name=='body')){var H,I;if(D.attributes&&(I=D.attributes['data-cke-real-element-type']))H=I;else H=D.name;if(H&&!(H in f.$body||H=='body'||D.isOrphan)){x=E;t.onTagOpen(r,{});D.returnPoint=E=x;}}if(D._.isBlockLike&&D.name!='pre'&&D.name!='textarea'){var J=D.children.length,K=D.children[J-1],L;if(K&&K.type==3)if(!(L=e.rtrim(K.value)))D.children.length=J-1;else K.value=L;}E.add(D);if(D.returnPoint){x=D.returnPoint;delete D.returnPoint;}else x=F?E:G;};t.onTagOpen=function(D,E,F,G){var H=new a.htmlParser.element(D,E);if(H.isUnknown&&F)H.isEmpty=true;H.isOptionalClose=D in m||G;if(p(H)){v.push(H);return;}else if(D=='pre')z=true;else if(D=='br'&&z){x.add(new a.htmlParser.text('\n'));
return;}else if(D=='textarea')y=true;if(D=='br'){w.push(H);return;}while(1){var I=x.name,J=I?f[I]||(x._.isBlockLike?f.div:f.span):o;if(!H.isUnknown&&!x.isUnknown&&!J[D]){if(x.isOptionalClose)t.onTagClose(I);else if(D in n&&I in n){var K=x.children,L=K[K.length-1];if(!(L&&L.name=='li'))C(L=new a.htmlParser.element('li'),x);!H.returnPoint&&(H.returnPoint=x);x=L;}else if(D in f.$listItem&&I!=D)t.onTagOpen(D=='li'?'ul':'dl',{},0,1);else if(I in l&&I!=D){!H.returnPoint&&(H.returnPoint=x);x=x.parent;}else{if(I in f.$inline)v.unshift(x);if(x.parent)C(x,x.parent,1);else{H.isOrphan=1;break;}}}else break;}A(D);B();H.parent=x;if(H.isEmpty)C(H);else x=H;};t.onTagClose=function(D){for(var E=v.length-1;E>=0;E--){if(D==v[E].name){v.splice(E,1);return;}}var F=[],G=[],H=x;while(H!=u&&H.name!=D){if(!H._.isBlockLike)G.unshift(H);F.push(H);H=H.returnPoint||H.parent;}if(H!=u){for(E=0;E<F.length;E++){var I=F[E];C(I,I.parent);}x=H;if(x.name=='pre')z=false;if(x.name=='textarea')y=false;if(H._.isBlockLike)B();C(H,H.parent);if(H==x)x=x.parent;v=v.concat(G);}if(D=='body')r=false;};t.onText=function(D){if((!x._.hasInlineStarted||w.length)&&!z&&!y){D=e.ltrim(D);if(D.length===0)return;}B();A();if(r&&(!x.type||x.name=='body')&&e.trim(D))this.onTagOpen(r,{},0,1);if(!z&&!y)D=D.replace(/[\t\r\n ]{2,}|[\t\r\n]/g,' ');x.add(new a.htmlParser.text(D));};t.onCDATA=function(D){x.add(new a.htmlParser.cdata(D));};t.onComment=function(D){B();A();x.add(new a.htmlParser.comment(D));};t.parse(q);B(!c&&1);while(x!=u)C(x,x.parent,1);return u;};a.htmlParser.fragment.prototype={add:function(q,r){var t=this;isNaN(r)&&(r=t.children.length);var s=r>0?t.children[r-1]:null;if(s){if(q._.isBlockLike&&s.type==3){s.value=e.rtrim(s.value);if(s.value.length===0){t.children.pop();t.add(q);return;}}s.next=q;}q.previous=s;q.parent=t;t.children.splice(r,0,q);t._.hasInlineStarted=q.type==3||q.type==1&&!q._.isBlockLike;},writeHtml:function(q,r){var s;this.filterChildren=function(){var t=new a.htmlParser.basicWriter();this.writeChildrenHtml.call(this,t,r,true);var u=t.getHtml();this.children=new a.htmlParser.fragment.fromHtml(u).children;s=1;};!this.name&&r&&r.onFragment(this);this.writeChildrenHtml(q,s?null:r);},writeChildrenHtml:function(q,r){for(var s=0;s<this.children.length;s++)this.children[s].writeHtml(q,r);}};})();a.htmlParser.element=function(l,m){var s=this;s.name=l;s.attributes=m||(m={});s.children=[];var n=m['data-cke-real-element-type']||l||'',o=n.match(/^cke:(.*)/);o&&(n=o[1]);var p=f,q=!!(p.$nonBodyContent[n]||p.$block[n]||p.$listItem[n]||p.$tableContent[n]||p.$nonEditable[n]||n=='br'),r=!!p.$empty[l];
s.isEmpty=r;s.isUnknown=!p[l];s._={isBlockLike:q,hasInlineStarted:r||!q};};a.htmlParser.cssStyle=function(){var l,m=arguments[0],n={};l=m instanceof a.htmlParser.element?m.attributes.style:m;(l||'').replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(o,p,q){p=='font-family'&&(q=q.replace(/["']/g,''));n[p.toLowerCase()]=q;});return{rules:n,populate:function(o){var p=this.toString();if(p)o instanceof h?o.setAttribute('style',p):o instanceof a.htmlParser.element?o.attributes.style=p:o.style=p;},'toString':function(){var o=[];for(var p in n)n[p]&&o.push(p,':',n[p],';');return o.join('');}};};(function(){var l=function(m,n){m=m[0];n=n[0];return m<n?-1:m>n?1:0;};a.htmlParser.element.prototype={type:1,add:a.htmlParser.fragment.prototype.add,clone:function(){return new a.htmlParser.element(this.name,this.attributes);},writeHtml:function(m,n){var o=this.attributes,p=this,q=p.name,r,s,t,u;p.filterChildren=function(){if(!u){var B=new a.htmlParser.basicWriter();a.htmlParser.fragment.prototype.writeChildrenHtml.call(p,B,n);p.children=new a.htmlParser.fragment.fromHtml(B.getHtml(),0,p.clone()).children;u=1;}};if(n){for(;;){if(!(q=n.onElementName(q)))return;p.name=q;if(!(p=n.onElement(p)))return;p.parent=this.parent;if(p.name==q)break;if(p.type!=1){p.writeHtml(m,n);return;}q=p.name;if(!q){for(var v=0,w=this.children.length;v<w;v++)this.children[v].parent=p.parent;this.writeChildrenHtml.call(p,m,u?null:n);return;}}o=p.attributes;}m.openTag(q,o);var x=[];for(var y=0;y<2;y++)for(r in o){s=r;t=o[r];if(y==1)x.push([r,t]);else if(n){for(;;){if(!(s=n.onAttributeName(r))){delete o[r];break;}else if(s!=r){delete o[r];r=s;continue;}else break;}if(s)if((t=n.onAttribute(p,s,t))===false)delete o[s];else o[s]=t;}}if(m.sortAttributes)x.sort(l);var z=x.length;for(y=0;y<z;y++){var A=x[y];m.attribute(A[0],A[1]);}m.openTagClose(q,p.isEmpty);if(!p.isEmpty){this.writeChildrenHtml.call(p,m,u?null:n);m.closeTag(q);}},writeChildrenHtml:function(m,n){a.htmlParser.fragment.prototype.writeChildrenHtml.apply(this,arguments);}};})();(function(){a.htmlParser.filter=e.createClass({$:function(q){this._={elementNames:[],attributeNames:[],elements:{$length:0},attributes:{$length:0}};if(q)this.addRules(q,10);},proto:{addRules:function(q,r){var s=this;if(typeof r!='number')r=10;m(s._.elementNames,q.elementNames,r);m(s._.attributeNames,q.attributeNames,r);n(s._.elements,q.elements,r);n(s._.attributes,q.attributes,r);s._.text=o(s._.text,q.text,r)||s._.text;s._.comment=o(s._.comment,q.comment,r)||s._.comment;
s._.root=o(s._.root,q.root,r)||s._.root;},onElementName:function(q){return l(q,this._.elementNames);},onAttributeName:function(q){return l(q,this._.attributeNames);},onText:function(q){var r=this._.text;return r?r.filter(q):q;},onComment:function(q,r){var s=this._.comment;return s?s.filter(q,r):q;},onFragment:function(q){var r=this._.root;return r?r.filter(q):q;},onElement:function(q){var v=this;var r=[v._.elements['^'],v._.elements[q.name],v._.elements.$],s,t;for(var u=0;u<3;u++){s=r[u];if(s){t=s.filter(q,v);if(t===false)return null;if(t&&t!=q)return v.onNode(t);if(q.parent&&!q.name)break;}}return q;},onNode:function(q){var r=q.type;return r==1?this.onElement(q):r==3?new a.htmlParser.text(this.onText(q.value)):r==8?new a.htmlParser.comment(this.onComment(q.value)):null;},onAttribute:function(q,r,s){var t=this._.attributes[r];if(t){var u=t.filter(s,q,this);if(u===false)return false;if(typeof u!='undefined')return u;}return s;}}});function l(q,r){for(var s=0;q&&s<r.length;s++){var t=r[s];q=q.replace(t[0],t[1]);}return q;};function m(q,r,s){if(typeof r=='function')r=[r];var t,u,v=q.length,w=r&&r.length;if(w){for(t=0;t<v&&q[t].pri<s;t++){}for(u=w-1;u>=0;u--){var x=r[u];if(x){x.pri=s;q.splice(t,0,x);}}}};function n(q,r,s){if(r)for(var t in r){var u=q[t];q[t]=o(u,r[t],s);if(!u)q.$length++;}};function o(q,r,s){if(r){r.pri=s;if(q){if(!q.splice){if(q.pri>s)q=[r,q];else q=[q,r];q.filter=p;}else m(q,r,s);return q;}else{r.filter=r;return r;}}};function p(q){var r=q.type||q instanceof a.htmlParser.fragment;for(var s=0;s<this.length;s++){if(r)var t=q.type,u=q.name;var v=this[s],w=v.apply(window,arguments);if(w===false)return w;if(r){if(w&&(w.name!=u||w.type!=t))return w;}else if(typeof w!='string')return w;w!=undefined&&(q=w);}return q;};})();a.htmlParser.basicWriter=e.createClass({$:function(){this._={output:[]};},proto:{openTag:function(l,m){this._.output.push('<',l);},openTagClose:function(l,m){if(m)this._.output.push(' />');else this._.output.push('>');},attribute:function(l,m){if(typeof m=='string')m=e.htmlEncodeAttr(m);this._.output.push(' ',l,'="',m,'"');},closeTag:function(l){this._.output.push('</',l,'>');},text:function(l){this._.output.push(l);},comment:function(l){this._.output.push('<!--',l,'-->');},write:function(l){this._.output.push(l);},reset:function(){this._.output=[];this._.indent=false;},getHtml:function(l){var m=this._.output.join('');if(l)this.reset();return m;}}});delete a.loadFullCore;a.instances={};a.document=new g(document);a.add=function(l){a.instances[l.name]=l;
l.on('focus',function(){if(a.currentInstance!=l){a.currentInstance=l;a.fire('currentInstance');}});l.on('blur',function(){if(a.currentInstance==l){a.currentInstance=null;a.fire('currentInstance');}});};a.remove=function(l){delete a.instances[l.name];};a.on('instanceDestroyed',function(){if(e.isEmpty(this.instances))a.fire('reset');});a.TRISTATE_ON=1;a.TRISTATE_OFF=2;a.TRISTATE_DISABLED=0;d.comment=e.createClass({base:d.node,$:function(l,m){if(typeof l=='string')l=(m?m.$:document).createComment(l);this.base(l);},proto:{type:8,getOuterHtml:function(){return '<!--'+this.$.nodeValue+'-->';}}});(function(){var l={address:1,blockquote:1,dl:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1,li:1,dt:1,dd:1,legend:1,caption:1},m={body:1,div:1,table:1,tbody:1,tr:1,td:1,th:1,form:1,fieldset:1},n=function(o){var p=o.getChildren();for(var q=0,r=p.count();q<r;q++){var s=p.getItem(q);if(s.type==1&&f.$block[s.getName()])return true;}return false;};d.elementPath=function(o){var u=this;var p=null,q=null,r=[],s=o;while(s){if(s.type==1){if(!u.lastElement)u.lastElement=s;var t=s.getName();if(c&&s.$.scopeName!='HTML')t=s.$.scopeName.toLowerCase()+':'+t;if(!q){if(!p&&l[t])p=s;if(m[t])if(!p&&t=='div'&&!n(s))p=s;else q=s;}r.push(s);if(t=='body')break;}s=s.getParent();}u.block=p;u.blockLimit=q;u.elements=r;};})();d.elementPath.prototype={compare:function(l){var m=this.elements,n=l&&l.elements;if(!n||m.length!=n.length)return false;for(var o=0;o<m.length;o++){if(!m[o].equals(n[o]))return false;}return true;},contains:function(l){var m=this.elements;for(var n=0;n<m.length;n++){if(m[n].getName() in l)return m[n];}return null;}};d.text=function(l,m){if(typeof l=='string')l=(m?m.$:document).createTextNode(l);this.$=l;};d.text.prototype=new d.node();e.extend(d.text.prototype,{type:3,getLength:function(){return this.$.nodeValue.length;},getText:function(){return this.$.nodeValue;},setText:function(l){this.$.nodeValue=l;},split:function(l){var q=this;if(c&&l==q.getLength()){var m=q.getDocument().createText('');m.insertAfter(q);return m;}var n=q.getDocument(),o=new d.text(q.$.splitText(l),n);if(b.ie8){var p=new d.text('',n);p.insertAfter(o);p.remove();}return o;},substring:function(l,m){if(typeof m!='number')return this.$.nodeValue.substr(l);else return this.$.nodeValue.substring(l,m);}});d.documentFragment=function(l){l=l||a.document;this.$=l.$.createDocumentFragment();};e.extend(d.documentFragment.prototype,h.prototype,{type:11,insertAfterNode:function(l){l=l.$;l.parentNode.insertBefore(this.$,l.nextSibling);
}},true,{append:1,appendBogus:1,getFirst:1,getLast:1,appendTo:1,moveChildren:1,insertBefore:1,insertAfterNode:1,replace:1,trim:1,type:1,ltrim:1,rtrim:1,getDocument:1,getChildCount:1,getChild:1,getChildren:1});(function(){function l(s,t){if(this._.end)return null;var u,v=this.range,w,x=this.guard,y=this.type,z=s?'getPreviousSourceNode':'getNextSourceNode';if(!this._.start){this._.start=1;v.trim();if(v.collapsed){this.end();return null;}}if(!s&&!this._.guardLTR){var A=v.endContainer,B=A.getChild(v.endOffset);this._.guardLTR=function(F,G){return(!G||!A.equals(F))&&(!B||!F.equals(B))&&(F.type!=1||!G||F.getName()!='body');};}if(s&&!this._.guardRTL){var C=v.startContainer,D=v.startOffset>0&&C.getChild(v.startOffset-1);this._.guardRTL=function(F,G){return(!G||!C.equals(F))&&(!D||!F.equals(D))&&(F.type!=1||!G||F.getName()!='body');};}var E=s?this._.guardRTL:this._.guardLTR;if(x)w=function(F,G){if(E(F,G)===false)return false;return x(F,G);};else w=E;if(this.current)u=this.current[z](false,y,w);else if(s){u=v.endContainer;if(v.endOffset>0){u=u.getChild(v.endOffset-1);if(w(u)===false)u=null;}else u=w(u,true)===false?null:u.getPreviousSourceNode(true,y,w);}else{u=v.startContainer;u=u.getChild(v.startOffset);if(u){if(w(u)===false)u=null;}else u=w(v.startContainer,true)===false?null:v.startContainer.getNextSourceNode(true,y,w);}while(u&&!this._.end){this.current=u;if(!this.evaluator||this.evaluator(u)!==false){if(!t)return u;}else if(t&&this.evaluator)return false;u=u[z](false,y,w);}this.end();return this.current=null;};function m(s){var t,u=null;while(t=l.call(this,s))u=t;return u;};d.walker=e.createClass({$:function(s){this.range=s;this._={};},proto:{end:function(){this._.end=1;},next:function(){return l.call(this);},previous:function(){return l.call(this,1);},checkForward:function(){return l.call(this,0,1)!==false;},checkBackward:function(){return l.call(this,1,1)!==false;},lastForward:function(){return m.call(this);},lastBackward:function(){return m.call(this,1);},reset:function(){delete this.current;this._={};}}});var n={block:1,'list-item':1,table:1,'table-row-group':1,'table-header-group':1,'table-footer-group':1,'table-row':1,'table-column-group':1,'table-column':1,'table-cell':1,'table-caption':1};h.prototype.isBlockBoundary=function(s){var t=s?e.extend({},f.$block,s||{}):f.$block;return this.getComputedStyle('float')=='none'&&n[this.getComputedStyle('display')]||t[this.getName()];};d.walker.blockBoundary=function(s){return function(t,u){return!(t.type==1&&t.isBlockBoundary(s));
};};d.walker.listItemBoundary=function(){return this.blockBoundary({br:1});};d.walker.bookmark=function(s,t){function u(v){return v&&v.getName&&v.getName()=='span'&&v.data('cke-bookmark');};return function(v){var w,x;w=v&&!v.getName&&(x=v.getParent())&&u(x);w=s?w:w||u(v);return!!(t^w);};};d.walker.whitespaces=function(s){return function(t){var u=t&&t.type==3&&!e.trim(t.getText());return!!(s^u);};};d.walker.invisible=function(s){var t=d.walker.whitespaces();return function(u){var v=t(u)||u.is&&!u.$.offsetHeight;return!!(s^v);};};d.walker.nodeType=function(s,t){return function(u){return!!(t^u.type==s);};};var o=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,p=d.walker.whitespaces(),q=d.walker.bookmark(),r=function(s){return q(s)||p(s)||s.type==1&&s.getName() in f.$inline&&!(s.getName() in f.$empty);};h.prototype.getBogus=function(){var s=this;do s=s.getPreviousSourceNode();while(r(s));if(s&&(!c?s.is&&s.is('br'):s.getText&&o.test(s.getText())))return s;return false;};})();d.range=function(l){var m=this;m.startContainer=null;m.startOffset=null;m.endContainer=null;m.endOffset=null;m.collapsed=true;m.document=l;};(function(){var l=function(t){t.collapsed=t.startContainer&&t.endContainer&&t.startContainer.equals(t.endContainer)&&t.startOffset==t.endOffset;},m=function(t,u,v,w){t.optimizeBookmark();var x=t.startContainer,y=t.endContainer,z=t.startOffset,A=t.endOffset,B,C;if(y.type==3)y=y.split(A);else if(y.getChildCount()>0)if(A>=y.getChildCount()){y=y.append(t.document.createText(''));C=true;}else y=y.getChild(A);if(x.type==3){x.split(z);if(x.equals(y))y=x.getNext();}else if(!z){x=x.getFirst().insertBeforeMe(t.document.createText(''));B=true;}else if(z>=x.getChildCount()){x=x.append(t.document.createText(''));B=true;}else x=x.getChild(z).getPrevious();var D=x.getParents(),E=y.getParents(),F,G,H;for(F=0;F<D.length;F++){G=D[F];H=E[F];if(!G.equals(H))break;}var I=v,J,K,L,M;for(var N=F;N<D.length;N++){J=D[N];if(I&&!J.equals(x))K=I.append(J.clone());L=J.getNext();while(L){if(L.equals(E[N])||L.equals(y))break;M=L.getNext();if(u==2)I.append(L.clone(true));else{L.remove();if(u==1)I.append(L);}L=M;}if(I)I=K;}I=v;for(var O=F;O<E.length;O++){J=E[O];if(u>0&&!J.equals(y))K=I.append(J.clone());if(!D[O]||J.$.parentNode!=D[O].$.parentNode){L=J.getPrevious();while(L){if(L.equals(D[O])||L.equals(x))break;M=L.getPrevious();if(u==2)I.$.insertBefore(L.$.cloneNode(true),I.$.firstChild);else{L.remove();if(u==1)I.$.insertBefore(L.$,I.$.firstChild);}L=M;}}if(I)I=K;}if(u==2){var P=t.startContainer;if(P.type==3){P.$.data+=P.$.nextSibling.data;
P.$.parentNode.removeChild(P.$.nextSibling);}var Q=t.endContainer;if(Q.type==3&&Q.$.nextSibling){Q.$.data+=Q.$.nextSibling.data;Q.$.parentNode.removeChild(Q.$.nextSibling);}}else{if(G&&H&&(x.$.parentNode!=G.$.parentNode||y.$.parentNode!=H.$.parentNode)){var R=H.getIndex();if(B&&H.$.parentNode==x.$.parentNode)R--;if(w&&G.type==1){var S=h.createFromHtml('<span data-cke-bookmark="1" style="display:none">&nbsp;</span>',t.document);S.insertAfter(G);G.mergeSiblings(false);t.moveToBookmark({startNode:S});}else t.setStart(H.getParent(),R);}t.collapse(true);}if(B)x.remove();if(C&&y.$.parentNode)y.remove();},n={abbr:1,acronym:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,'var':1};function o(t){var u=false,v=d.walker.bookmark(true);return function(w){if(v(w))return true;if(w.type==3){if(w.hasAscendant('pre')||e.trim(w.getText()).length)return false;}else if(w.type==1)if(!n[w.getName()])if(!t&&!c&&w.getName()=='br'&&!u)u=true;else return false;return true;};};function p(t){return t.type!=3&&t.getName() in f.$removeEmpty||!e.trim(t.getText())||!!t.getParent().data('cke-bookmark');};var q=new d.walker.whitespaces(),r=new d.walker.bookmark();function s(t){return!q(t)&&!r(t);};d.range.prototype={clone:function(){var u=this;var t=new d.range(u.document);t.startContainer=u.startContainer;t.startOffset=u.startOffset;t.endContainer=u.endContainer;t.endOffset=u.endOffset;t.collapsed=u.collapsed;return t;},collapse:function(t){var u=this;if(t){u.endContainer=u.startContainer;u.endOffset=u.startOffset;}else{u.startContainer=u.endContainer;u.startOffset=u.endOffset;}u.collapsed=true;},cloneContents:function(){var t=new d.documentFragment(this.document);if(!this.collapsed)m(this,2,t);return t;},deleteContents:function(t){if(this.collapsed)return;m(this,0,null,t);},extractContents:function(t){var u=new d.documentFragment(this.document);if(!this.collapsed)m(this,1,u,t);return u;},createBookmark:function(t){var z=this;var u,v,w,x,y=z.collapsed;u=z.document.createElement('span');u.data('cke-bookmark',1);u.setStyle('display','none');u.setHtml('&nbsp;');if(t){w='cke_bm_'+e.getNextNumber();u.setAttribute('id',w+'S');}if(!y){v=u.clone();v.setHtml('&nbsp;');if(t)v.setAttribute('id',w+'E');x=z.clone();x.collapse();x.insertNode(v);}x=z.clone();x.collapse(true);x.insertNode(u);if(v){z.setStartAfter(u);z.setEndBefore(v);}else z.moveToPosition(u,4);return{startNode:t?w+'S':u,endNode:t?w+'E':v,serializable:t,collapsed:y};
},createBookmark2:function(t){var B=this;var u=B.startContainer,v=B.endContainer,w=B.startOffset,x=B.endOffset,y=B.collapsed,z,A;if(!u||!v)return{start:0,end:0};if(t){if(u.type==1){z=u.getChild(w);if(z&&z.type==3&&w>0&&z.getPrevious().type==3){u=z;w=0;}if(z&&z.type==1)w=z.getIndex(1);}while(u.type==3&&(A=u.getPrevious())&&A.type==3){u=A;w+=A.getLength();}if(!y){if(v.type==1){z=v.getChild(x);if(z&&z.type==3&&x>0&&z.getPrevious().type==3){v=z;x=0;}if(z&&z.type==1)x=z.getIndex(1);}while(v.type==3&&(A=v.getPrevious())&&A.type==3){v=A;x+=A.getLength();}}}return{start:u.getAddress(t),end:y?null:v.getAddress(t),startOffset:w,endOffset:x,normalized:t,collapsed:y,is2:true};},moveToBookmark:function(t){var B=this;if(t.is2){var u=B.document.getByAddress(t.start,t.normalized),v=t.startOffset,w=t.end&&B.document.getByAddress(t.end,t.normalized),x=t.endOffset;B.setStart(u,v);if(w)B.setEnd(w,x);else B.collapse(true);}else{var y=t.serializable,z=y?B.document.getById(t.startNode):t.startNode,A=y?B.document.getById(t.endNode):t.endNode;B.setStartBefore(z);z.remove();if(A){B.setEndBefore(A);A.remove();}else B.collapse(true);}},getBoundaryNodes:function(){var y=this;var t=y.startContainer,u=y.endContainer,v=y.startOffset,w=y.endOffset,x;if(t.type==1){x=t.getChildCount();if(x>v)t=t.getChild(v);else if(x<1)t=t.getPreviousSourceNode();else{t=t.$;while(t.lastChild)t=t.lastChild;t=new d.node(t);t=t.getNextSourceNode()||t;}}if(u.type==1){x=u.getChildCount();if(x>w)u=u.getChild(w).getPreviousSourceNode(true);else if(x<1)u=u.getPreviousSourceNode();else{u=u.$;while(u.lastChild)u=u.lastChild;u=new d.node(u);}}if(t.getPosition(u)&2)t=u;return{startNode:t,endNode:u};},getCommonAncestor:function(t,u){var y=this;var v=y.startContainer,w=y.endContainer,x;if(v.equals(w)){if(t&&v.type==1&&y.startOffset==y.endOffset-1)x=v.getChild(y.startOffset);else x=v;}else x=v.getCommonAncestor(w);return u&&!x.is?x.getParent():x;},optimize:function(){var v=this;var t=v.startContainer,u=v.startOffset;if(t.type!=1)if(!u)v.setStartBefore(t);else if(u>=t.getLength())v.setStartAfter(t);t=v.endContainer;u=v.endOffset;if(t.type!=1)if(!u)v.setEndBefore(t);else if(u>=t.getLength())v.setEndAfter(t);},optimizeBookmark:function(){var v=this;var t=v.startContainer,u=v.endContainer;if(t.is&&t.is('span')&&t.data('cke-bookmark'))v.setStartAt(t,3);if(u&&u.is&&u.is('span')&&u.data('cke-bookmark'))v.setEndAt(u,4);},trim:function(t,u){var B=this;var v=B.startContainer,w=B.startOffset,x=B.collapsed;if((!t||x)&&v&&v.type==3){if(!w){w=v.getIndex();
v=v.getParent();}else if(w>=v.getLength()){w=v.getIndex()+1;v=v.getParent();}else{var y=v.split(w);w=v.getIndex()+1;v=v.getParent();if(B.startContainer.equals(B.endContainer))B.setEnd(y,B.endOffset-B.startOffset);else if(v.equals(B.endContainer))B.endOffset+=1;}B.setStart(v,w);if(x){B.collapse(true);return;}}var z=B.endContainer,A=B.endOffset;if(!(u||x)&&z&&z.type==3){if(!A){A=z.getIndex();z=z.getParent();}else if(A>=z.getLength()){A=z.getIndex()+1;z=z.getParent();}else{z.split(A);A=z.getIndex()+1;z=z.getParent();}B.setEnd(z,A);}},enlarge:function(t,u){switch(t){case 1:if(this.collapsed)return;var v=this.getCommonAncestor(),w=this.document.getBody(),x,y,z,A,B,C=false,D,E,F=this.startContainer,G=this.startOffset;if(F.type==3){if(G){F=!e.trim(F.substring(0,G)).length&&F;C=!!F;}if(F)if(!(A=F.getPrevious()))z=F.getParent();}else{if(G)A=F.getChild(G-1)||F.getLast();if(!A)z=F;}while(z||A){if(z&&!A){if(!B&&z.equals(v))B=true;if(!w.contains(z))break;if(!C||z.getComputedStyle('display')!='inline'){C=false;if(B)x=z;else this.setStartBefore(z);}A=z.getPrevious();}while(A){D=false;if(A.type==3){E=A.getText();if(/[^\s\ufeff]/.test(E))A=null;D=/[\s\ufeff]$/.test(E);}else if((A.$.offsetWidth>0||u&&A.is('br'))&&!A.data('cke-bookmark'))if(C&&f.$removeEmpty[A.getName()]){E=A.getText();if(/[^\s\ufeff]/.test(E))A=null;else{var H=A.$.all||A.$.getElementsByTagName('*');for(var I=0,J;J=H[I++];){if(!f.$removeEmpty[J.nodeName.toLowerCase()]){A=null;break;}}}if(A)D=!!E.length;}else A=null;if(D)if(C){if(B)x=z;else if(z)this.setStartBefore(z);}else C=true;if(A){var K=A.getPrevious();if(!z&&!K){z=A;A=null;break;}A=K;}else z=null;}if(z)z=z.getParent();}F=this.endContainer;G=this.endOffset;z=A=null;B=C=false;if(F.type==3){F=!e.trim(F.substring(G)).length&&F;C=!(F&&F.getLength());if(F)if(!(A=F.getNext()))z=F.getParent();}else{A=F.getChild(G);if(!A)z=F;}while(z||A){if(z&&!A){if(!B&&z.equals(v))B=true;if(!w.contains(z))break;if(!C||z.getComputedStyle('display')!='inline'){C=false;if(B)y=z;else if(z)this.setEndAfter(z);}A=z.getNext();}while(A){D=false;if(A.type==3){E=A.getText();if(/[^\s\ufeff]/.test(E))A=null;D=/^[\s\ufeff]/.test(E);}else if((A.$.offsetWidth>0||u&&A.is('br'))&&!A.data('cke-bookmark'))if(C&&f.$removeEmpty[A.getName()]){E=A.getText();if(/[^\s\ufeff]/.test(E))A=null;else{H=A.$.all||A.$.getElementsByTagName('*');for(I=0;J=H[I++];){if(!f.$removeEmpty[J.nodeName.toLowerCase()]){A=null;break;}}}if(A)D=!!E.length;}else A=null;if(D)if(C)if(B)y=z;else this.setEndAfter(z);if(A){K=A.getNext();
if(!z&&!K){z=A;A=null;break;}A=K;}else z=null;}if(z)z=z.getParent();}if(x&&y){v=x.contains(y)?y:x;this.setStartBefore(v);this.setEndAfter(v);}break;case 2:case 3:var L=new d.range(this.document);w=this.document.getBody();L.setStartAt(w,1);L.setEnd(this.startContainer,this.startOffset);var M=new d.walker(L),N,O,P=d.walker.blockBoundary(t==3?{br:1}:null),Q=function(W){var X=P(W);if(!X)N=W;return X;},R=function(W){var X=Q(W);if(!X&&W.is&&W.is('br'))O=W;return X;};M.guard=Q;z=M.lastBackward();N=N||w;this.setStartAt(N,!N.is('br')&&(!z&&this.checkStartOfBlock()||z&&N.contains(z))?1:4);if(t==3){var S=this.clone();M=new d.walker(S);var T=d.walker.whitespaces(),U=d.walker.bookmark();M.evaluator=function(W){return!T(W)&&!U(W);};var V=M.previous();if(V&&V.type==1&&V.is('br'))return;}L=this.clone();L.collapse();L.setEndAt(w,2);M=new d.walker(L);M.guard=t==3?R:Q;N=null;z=M.lastForward();N=N||w;this.setEndAt(N,!z&&this.checkEndOfBlock()||z&&N.contains(z)?2:3);if(O)this.setEndAfter(O);}},shrink:function(t,u){if(!this.collapsed){t=t||2;var v=this.clone(),w=this.startContainer,x=this.endContainer,y=this.startOffset,z=this.endOffset,A=this.collapsed,B=1,C=1;if(w&&w.type==3)if(!y)v.setStartBefore(w);else if(y>=w.getLength())v.setStartAfter(w);else{v.setStartBefore(w);B=0;}if(x&&x.type==3)if(!z)v.setEndBefore(x);else if(z>=x.getLength())v.setEndAfter(x);else{v.setEndAfter(x);C=0;}var D=new d.walker(v),E=d.walker.bookmark();D.evaluator=function(I){return I.type==(t==1?1:3);};var F;D.guard=function(I,J){if(E(I))return true;if(t==1&&I.type==3)return false;if(J&&I.equals(F))return false;if(!J&&I.type==1)F=I;return true;};if(B){var G=D[t==1?'lastForward':'next']();G&&this.setStartAt(G,u?1:3);}if(C){D.reset();var H=D[t==1?'lastBackward':'previous']();H&&this.setEndAt(H,u?2:4);}return!!(B||C);}},insertNode:function(t){var x=this;x.optimizeBookmark();x.trim(false,true);var u=x.startContainer,v=x.startOffset,w=u.getChild(v);if(w)t.insertBefore(w);else u.append(t);if(t.getParent().equals(x.endContainer))x.endOffset++;x.setStartBefore(t);},moveToPosition:function(t,u){this.setStartAt(t,u);this.collapse(true);},selectNodeContents:function(t){this.setStart(t,0);this.setEnd(t,t.type==3?t.getLength():t.getChildCount());},setStart:function(t,u){var v=this;if(t.type==1&&f.$empty[t.getName()])u=t.getIndex(),t=t.getParent();v.startContainer=t;v.startOffset=u;if(!v.endContainer){v.endContainer=t;v.endOffset=u;}l(v);},setEnd:function(t,u){var v=this;if(t.type==1&&f.$empty[t.getName()])u=t.getIndex()+1,t=t.getParent();
v.endContainer=t;v.endOffset=u;if(!v.startContainer){v.startContainer=t;v.startOffset=u;}l(v);},setStartAfter:function(t){this.setStart(t.getParent(),t.getIndex()+1);},setStartBefore:function(t){this.setStart(t.getParent(),t.getIndex());},setEndAfter:function(t){this.setEnd(t.getParent(),t.getIndex()+1);},setEndBefore:function(t){this.setEnd(t.getParent(),t.getIndex());},setStartAt:function(t,u){var v=this;switch(u){case 1:v.setStart(t,0);break;case 2:if(t.type==3)v.setStart(t,t.getLength());else v.setStart(t,t.getChildCount());break;case 3:v.setStartBefore(t);break;case 4:v.setStartAfter(t);}l(v);},setEndAt:function(t,u){var v=this;switch(u){case 1:v.setEnd(t,0);break;case 2:if(t.type==3)v.setEnd(t,t.getLength());else v.setEnd(t,t.getChildCount());break;case 3:v.setEndBefore(t);break;case 4:v.setEndAfter(t);}l(v);},fixBlock:function(t,u){var x=this;var v=x.createBookmark(),w=x.document.createElement(u);x.collapse(t);x.enlarge(2);x.extractContents().appendTo(w);w.trim();if(!c)w.appendBogus();x.insertNode(w);x.moveToBookmark(v);return w;},splitBlock:function(t){var D=this;var u=new d.elementPath(D.startContainer),v=new d.elementPath(D.endContainer),w=u.blockLimit,x=v.blockLimit,y=u.block,z=v.block,A=null;if(!w.equals(x))return null;if(t!='br'){if(!y){y=D.fixBlock(true,t);z=new d.elementPath(D.endContainer).block;}if(!z)z=D.fixBlock(false,t);}var B=y&&D.checkStartOfBlock(),C=z&&D.checkEndOfBlock();D.deleteContents();if(y&&y.equals(z))if(C){A=new d.elementPath(D.startContainer);D.moveToPosition(z,4);z=null;}else if(B){A=new d.elementPath(D.startContainer);D.moveToPosition(y,3);y=null;}else{z=D.splitElement(y);if(!c&&!y.is('ul','ol'))y.appendBogus();}return{previousBlock:y,nextBlock:z,wasStartOfBlock:B,wasEndOfBlock:C,elementPath:A};},splitElement:function(t){var w=this;if(!w.collapsed)return null;w.setEndAt(t,2);var u=w.extractContents(),v=t.clone(false);u.appendTo(v);v.insertAfter(t);w.moveToPosition(t,4);return v;},checkBoundaryOfElement:function(t,u){var v=u==1,w=this.clone();w.collapse(v);w[v?'setStartAt':'setEndAt'](t,v?1:2);var x=new d.walker(w);x.evaluator=p;return x[v?'checkBackward':'checkForward']();},checkStartOfBlock:function(){var z=this;var t=z.startContainer,u=z.startOffset;if(u&&t.type==3){var v=e.ltrim(t.substring(0,u));if(v.length)return false;}z.trim();var w=new d.elementPath(z.startContainer),x=z.clone();x.collapse(true);x.setStartAt(w.block||w.blockLimit,1);var y=new d.walker(x);y.evaluator=o(true);return y.checkBackward();},checkEndOfBlock:function(){var z=this;
var t=z.endContainer,u=z.endOffset;if(t.type==3){var v=e.rtrim(t.substring(u));if(v.length)return false;}z.trim();var w=new d.elementPath(z.endContainer),x=z.clone();x.collapse(false);x.setEndAt(w.block||w.blockLimit,2);var y=new d.walker(x);y.evaluator=o(false);return y.checkForward();},checkReadOnly:(function(){function t(u,v){while(u){if(u.type==1)if(u.getAttribute('contentEditable')=='false'&&!u.data('cke-editable'))return 0;else if(u.is('html')||u.getAttribute('contentEditable')=='true'&&(u.contains(v)||u.equals(v)))break;u=u.getParent();}return 1;};return function(){var u=this.startContainer,v=this.endContainer;return!(t(u,v)&&t(v,u));};})(),moveToElementEditablePosition:function(t,u){function v(x,y){var z;if(x.type==1&&x.isEditable(false)&&!f.$nonEditable[x.getName()])z=x[u?'getLast':'getFirst'](s);if(!y&&!z)z=x[u?'getPrevious':'getNext'](s);return z;};var w=0;while(t){if(t.type==3){this.moveToPosition(t,u?4:3);w=1;break;}if(t.type==1)if(t.isEditable()){this.moveToPosition(t,u?2:1);w=1;}t=v(t,w);}return!!w;},moveToElementEditStart:function(t){return this.moveToElementEditablePosition(t);},moveToElementEditEnd:function(t){return this.moveToElementEditablePosition(t,true);},getEnclosedNode:function(){var t=this.clone();t.optimize();if(t.startContainer.type!=1||t.endContainer.type!=1)return null;var u=new d.walker(t),v=d.walker.bookmark(true),w=d.walker.whitespaces(true),x=function(z){return w(z)&&v(z);};t.evaluator=x;var y=u.next();u.reset();return y&&y.equals(u.previous())?y:null;},getTouchedStartNode:function(){var t=this.startContainer;if(this.collapsed||t.type!=1)return t;return t.getChild(this.startOffset)||t;},getTouchedEndNode:function(){var t=this.endContainer;if(this.collapsed||t.type!=1)return t;return t.getChild(this.endOffset-1)||t;}};})();a.POSITION_AFTER_START=1;a.POSITION_BEFORE_END=2;a.POSITION_BEFORE_START=3;a.POSITION_AFTER_END=4;a.ENLARGE_ELEMENT=1;a.ENLARGE_BLOCK_CONTENTS=2;a.ENLARGE_LIST_ITEM_CONTENTS=3;a.START=1;a.END=2;a.STARTEND=3;a.SHRINK_ELEMENT=1;a.SHRINK_TEXT=2;(function(){d.rangeList=function(n){if(n instanceof d.rangeList)return n;if(!n)n=[];else if(n instanceof d.range)n=[n];return e.extend(n,l);};var l={createIterator:function(){var n=this,o=d.walker.bookmark(),p=function(s){return!(s.is&&s.is('tr'));},q=[],r;return{getNextRange:function(s){r=r==undefined?0:r+1;var t=n[r];if(t&&n.length>1){if(!r)for(var u=n.length-1;u>=0;u--)q.unshift(n[u].createBookmark(true));if(s){var v=0;while(n[r+v+1]){var w=t.document,x=0,y=w.getById(q[v].endNode),z=w.getById(q[v+1].startNode),A;
while(1){A=y.getNextSourceNode(false);if(!z.equals(A)){if(o(A)||A.type==1&&A.isBlockBoundary()){y=A;continue;}}else x=1;break;}if(!x)break;v++;}}t.moveToBookmark(q.shift());while(v--){A=n[++r];A.moveToBookmark(q.shift());t.setEnd(A.endContainer,A.endOffset);}}return t;}};},createBookmarks:function(n){var s=this;var o=[],p;for(var q=0;q<s.length;q++){o.push(p=s[q].createBookmark(n,true));for(var r=q+1;r<s.length;r++){s[r]=m(p,s[r]);s[r]=m(p,s[r],true);}}return o;},createBookmarks2:function(n){var o=[];for(var p=0;p<this.length;p++)o.push(this[p].createBookmark2(n));return o;},moveToBookmarks:function(n){for(var o=0;o<this.length;o++)this[o].moveToBookmark(n[o]);}};function m(n,o,p){var q=n.serializable,r=o[p?'endContainer':'startContainer'],s=p?'endOffset':'startOffset',t=q?o.document.getById(n.startNode):n.startNode,u=q?o.document.getById(n.endNode):n.endNode;if(r.equals(t.getPrevious())){o.startOffset=o.startOffset-r.getLength()-u.getPrevious().getLength();r=u.getNext();}else if(r.equals(u.getPrevious())){o.startOffset=o.startOffset-r.getLength();r=u.getNext();}r.equals(t.getParent())&&o[s]++;r.equals(u.getParent())&&o[s]++;o[p?'endContainer':'startContainer']=r;return o;};})();(function(){if(b.webkit){b.hc=false;return;}var l=h.createFromHtml('<div style="width:0px;height:0px;position:absolute;left:-10000px;border: 1px solid;border-color: red blue;"></div>',a.document);l.appendTo(a.document.getHead());try{b.hc=l.getComputedStyle('border-top-color')==l.getComputedStyle('border-right-color');}catch(m){b.hc=false;}if(b.hc)b.cssClass+=' cke_hc';l.remove();})();j.load(i.corePlugins.split(','),function(){a.status='loaded';a.fire('loaded');var l=a._.pending;if(l){delete a._.pending;for(var m=0;m<l.length;m++)a.add(l[m]);}});if(c)try{document.execCommand('BackgroundImageCache',false,true);}catch(l){}a.skins.add('kama',(function(){var m='cke_ui_color';return{editor:{css:['editor.css']},dialog:{css:['dialog.css']},richcombo:{canGroup:false},templates:{css:['templates.css']},margins:[0,0,0,0],init:function(n){if(n.config.width&&!isNaN(n.config.width))n.config.width-=12;var o=[],p=/\$color/g,q='/* UI Color Support */.cke_skin_kama .cke_menuitem .cke_icon_wrapper{\tbackground-color: $color !important;\tborder-color: $color !important;}.cke_skin_kama .cke_menuitem a:hover .cke_icon_wrapper,.cke_skin_kama .cke_menuitem a:focus .cke_icon_wrapper,.cke_skin_kama .cke_menuitem a:active .cke_icon_wrapper{\tbackground-color: $color !important;\tborder-color: $color !important;}.cke_skin_kama .cke_menuitem a:hover .cke_label,.cke_skin_kama .cke_menuitem a:focus .cke_label,.cke_skin_kama .cke_menuitem a:active .cke_label{\tbackground-color: $color !important;}.cke_skin_kama .cke_menuitem a.cke_disabled:hover .cke_label,.cke_skin_kama .cke_menuitem a.cke_disabled:focus .cke_label,.cke_skin_kama .cke_menuitem a.cke_disabled:active .cke_label{\tbackground-color: transparent !important;}.cke_skin_kama .cke_menuitem a.cke_disabled:hover .cke_icon_wrapper,.cke_skin_kama .cke_menuitem a.cke_disabled:focus .cke_icon_wrapper,.cke_skin_kama .cke_menuitem a.cke_disabled:active .cke_icon_wrapper{\tbackground-color: $color !important;\tborder-color: $color !important;}.cke_skin_kama .cke_menuitem a.cke_disabled .cke_icon_wrapper{\tbackground-color: $color !important;\tborder-color: $color !important;}.cke_skin_kama .cke_menuseparator{\tbackground-color: $color !important;}.cke_skin_kama .cke_menuitem a:hover,.cke_skin_kama .cke_menuitem a:focus,.cke_skin_kama .cke_menuitem a:active{\tbackground-color: $color !important;}';
if(b.webkit){q=q.split('}').slice(0,-1);for(var r=0;r<q.length;r++)q[r]=q[r].split('{');}function s(v){var w=v.getById(m);if(!w){w=v.getHead().append('style');w.setAttribute('id',m);w.setAttribute('type','text/css');}return w;};function t(v,w,x){var y,z,A;for(var B=0;B<v.length;B++){if(b.webkit)for(z=0;z<w.length;z++){A=w[z][1];for(y=0;y<x.length;y++)A=A.replace(x[y][0],x[y][1]);v[B].$.sheet.addRule(w[z][0],A);}else{A=w;for(y=0;y<x.length;y++)A=A.replace(x[y][0],x[y][1]);if(c)v[B].$.styleSheet.cssText+=A;else v[B].$.innerHTML+=A;}}};var u=/\$color/g;e.extend(n,{uiColor:null,getUiColor:function(){return this.uiColor;},setUiColor:function(v){var w,x=s(a.document),y='.'+n.id,z=[y+' .cke_wrapper',y+'_dialog .cke_dialog_contents',y+'_dialog a.cke_dialog_tab',y+'_dialog .cke_dialog_footer'].join(','),A='background-color: $color !important;';if(b.webkit)w=[[z,A]];else w=z+'{'+A+'}';return(this.setUiColor=function(B){var C=[[u,B]];n.uiColor=B;t([x],w,C);t(o,q,C);})(v);}});n.on('menuShow',function(v){var w=v.data[0],x=w.element.getElementsByTag('iframe').getItem(0).getFrameDocument();if(!x.getById('cke_ui_color')){var y=s(x);o.push(y);var z=n.getUiColor();if(z)t([y],q,[[u,z]]);}});if(n.config.uiColor)n.setUiColor(n.config.uiColor);}};})());(function(){a.dialog?m():a.on('dialogPluginReady',m);function m(){a.dialog.on('resize',function(n){var o=n.data,p=o.width,q=o.height,r=o.dialog,s=r.parts.contents;if(o.skin!='kama')return;s.setStyles({width:p+'px',height:q+'px'});});};})();j.add('about',{requires:['dialog'],init:function(m){var n=m.addCommand('about',new a.dialogCommand('about'));n.modes={wysiwyg:1,source:1};n.canUndo=false;n.readOnly=1;m.ui.addButton('About',{label:m.lang.about.title,command:'about'});a.dialog.add('about',this.path+'dialogs/about.js');}});(function(){var m='a11yhelp',n='a11yHelp';j.add(m,{availableLangs:{en:1,he:1},init:function(o){var p=this;o.addCommand(n,{exec:function(){var q=o.langCode;q=p.availableLangs[q]?q:'en';a.scriptLoader.load(a.getUrl(p.path+'lang/'+q+'.js'),function(){e.extend(o.lang,p.langEntries[q]);o.openDialog(n);});},modes:{wysiwyg:1,source:1},readOnly:1,canUndo:false});a.dialog.add(n,this.path+'dialogs/a11yhelp.js');}});})();j.add('basicstyles',{requires:['styles','button'],init:function(m){var n=function(q,r,s,t){var u=new a.style(t);m.attachStyleStateChange(u,function(v){!m.readOnly&&m.getCommand(s).setState(v);});m.addCommand(s,new a.styleCommand(u));m.ui.addButton(q,{label:r,command:s});},o=m.config,p=m.lang;n('Bold',p.bold,'bold',o.coreStyles_bold);
n('Italic',p.italic,'italic',o.coreStyles_italic);n('Underline',p.underline,'underline',o.coreStyles_underline);n('Strike',p.strike,'strike',o.coreStyles_strike);n('Subscript',p.subscript,'subscript',o.coreStyles_subscript);n('Superscript',p.superscript,'superscript',o.coreStyles_superscript);}});i.coreStyles_bold={element:'strong',overrides:'b'};i.coreStyles_italic={element:'em',overrides:'i'};i.coreStyles_underline={element:'u'};i.coreStyles_strike={element:'strike'};i.coreStyles_subscript={element:'sub'};i.coreStyles_superscript={element:'sup'};(function(){var m={table:1,ul:1,ol:1,blockquote:1,div:1},n={},o={};e.extend(n,m,{tr:1,p:1,div:1,li:1});e.extend(o,n,{td:1});function p(B){q(B);r(B);};function q(B){var C=B.editor,D=B.data.path;if(C.readOnly)return;var E=C.config.useComputedState,F;E=E===undefined||E;if(!E)F=s(D.lastElement);F=F||D.block||D.blockLimit;if(F.is('body')){var G=C.getSelection().getRanges()[0].getEnclosedNode();G&&G.type==1&&(F=G);}if(!F)return;var H=E?F.getComputedStyle('direction'):F.getStyle('direction')||F.getAttribute('dir');C.getCommand('bidirtl').setState(H=='rtl'?1:2);C.getCommand('bidiltr').setState(H=='ltr'?1:2);};function r(B){var C=B.editor,D=B.data.path.block||B.data.path.blockLimit;C.fire('contentDirChanged',D?D.getComputedStyle('direction'):C.lang.dir);};function s(B){while(B&&!(B.getName() in o||B.is('body'))){var C=B.getParent();if(!C)break;B=C;}return B;};function t(B,C,D,E){if(B.isReadOnly())return;h.setMarker(E,B,'bidi_processed',1);var F=B;while((F=F.getParent())&&!F.is('body')){if(F.getCustomData('bidi_processed')){B.removeStyle('direction');B.removeAttribute('dir');return;}}var G='useComputedState' in D.config?D.config.useComputedState:1,H=G?B.getComputedStyle('direction'):B.getStyle('direction')||B.hasAttribute('dir');if(H==C)return;B.removeStyle('direction');if(G){B.removeAttribute('dir');if(C!=B.getComputedStyle('direction'))B.setAttribute('dir',C);}else B.setAttribute('dir',C);D.forceNextSelectionCheck();};function u(B,C,D){var E=B.getCommonAncestor(false,true);B=B.clone();B.enlarge(D==2?3:2);if(B.checkBoundaryOfElement(E,1)&&B.checkBoundaryOfElement(E,2)){var F;while(E&&E.type==1&&(F=E.getParent())&&F.getChildCount()==1&&!(E.getName() in C))E=F;return E.type==1&&E.getName() in C&&E;}};function v(B){return function(C){var D=C.getSelection(),E=C.config.enterMode,F=D.getRanges();if(F&&F.length){var G={},H=D.createBookmarks(),I=F.createIterator(),J,K=0;while(J=I.getNextRange(1)){var L=J.getEnclosedNode();if(!L||L&&!(L.type==1&&L.getName() in n))L=u(J,m,E);
L&&t(L,B,C,G);var M,N,O=new d.walker(J),P=H[K].startNode,Q=H[K++].endNode;O.evaluator=function(R){return!!(R.type==1&&R.getName() in m&&!(R.getName()==(E==1?'p':'div')&&R.getParent().type==1&&R.getParent().getName()=='blockquote')&&R.getPosition(P)&2&&(R.getPosition(Q)&4+16)==4);};while(N=O.next())t(N,B,C,G);M=J.createIterator();M.enlargeBr=E!=2;while(N=M.getNextParagraph(E==1?'p':'div'))t(N,B,C,G);}h.clearAllMarkers(G);C.forceNextSelectionCheck();D.selectBookmarks(H);C.focus();}};};j.add('bidi',{requires:['styles','button'],init:function(B){var C=function(E,F,G,H){B.addCommand(G,new a.command(B,{exec:H}));B.ui.addButton(E,{label:F,command:G});},D=B.lang.bidi;C('BidiLtr',D.ltr,'bidiltr',v('ltr'));C('BidiRtl',D.rtl,'bidirtl',v('rtl'));B.on('selectionChange',p);B.on('contentDom',function(){B.document.on('dirChanged',function(E){B.fire('dirChanged',{node:E.data,dir:E.data.getDirection(1)});});});}});function w(B){var C=B.getDocument().getBody().getParent();while(B){if(B.equals(C))return false;B=B.getParent();}return true;};function x(B){var C=B==y.setAttribute,D=B==y.removeAttribute,E=/\bdirection\s*:\s*(.*?)\s*(:?$|;)/;return function(F,G){var J=this;if(!J.getDocument().equals(a.document)){var H;if((F==(C||D?'dir':'direction')||F=='style'&&(D||E.test(G)))&&!w(J)){H=J.getDirection(1);var I=B.apply(J,arguments);if(H!=J.getDirection(1)){J.getDocument().fire('dirChanged',J);return I;}}}return B.apply(J,arguments);};};var y=h.prototype,z=['setStyle','removeStyle','setAttribute','removeAttribute'];for(var A=0;A<z.length;A++)y[z[A]]=e.override(y[z[A]],x);})();(function(){function m(q,r){var s=r.block||r.blockLimit;if(!s||s.getName()=='body')return 2;if(s.getAscendant('blockquote',true))return 1;return 2;};function n(q){var r=q.editor;if(r.readOnly)return;var s=r.getCommand('blockquote');s.state=m(r,q.data.path);s.fire('state');};function o(q){for(var r=0,s=q.getChildCount(),t;r<s&&(t=q.getChild(r));r++){if(t.type==1&&t.isBlockBoundary())return false;}return true;};var p={exec:function(q){var r=q.getCommand('blockquote').state,s=q.getSelection(),t=s&&s.getRanges(true)[0];if(!t)return;var u=s.createBookmarks();if(c){var v=u[0].startNode,w=u[0].endNode,x;if(v&&v.getParent().getName()=='blockquote'){x=v;while(x=x.getNext()){if(x.type==1&&x.isBlockBoundary()){v.move(x,true);break;}}}if(w&&w.getParent().getName()=='blockquote'){x=w;while(x=x.getPrevious()){if(x.type==1&&x.isBlockBoundary()){w.move(x);break;}}}}var y=t.createIterator(),z;y.enlargeBr=q.config.enterMode!=2;if(r==2){var A=[];
while(z=y.getNextParagraph())A.push(z);if(A.length<1){var B=q.document.createElement(q.config.enterMode==1?'p':'div'),C=u.shift();t.insertNode(B);B.append(new d.text('\ufeff',q.document));t.moveToBookmark(C);t.selectNodeContents(B);t.collapse(true);C=t.createBookmark();A.push(B);u.unshift(C);}var D=A[0].getParent(),E=[];for(var F=0;F<A.length;F++){z=A[F];D=D.getCommonAncestor(z.getParent());}var G={table:1,tbody:1,tr:1,ol:1,ul:1};while(G[D.getName()])D=D.getParent();var H=null;while(A.length>0){z=A.shift();while(!z.getParent().equals(D))z=z.getParent();if(!z.equals(H))E.push(z);H=z;}while(E.length>0){z=E.shift();if(z.getName()=='blockquote'){var I=new d.documentFragment(q.document);while(z.getFirst()){I.append(z.getFirst().remove());A.push(I.getLast());}I.replace(z);}else A.push(z);}var J=q.document.createElement('blockquote');J.insertBefore(A[0]);while(A.length>0){z=A.shift();J.append(z);}}else if(r==1){var K=[],L={};while(z=y.getNextParagraph()){var M=null,N=null;while(z.getParent()){if(z.getParent().getName()=='blockquote'){M=z.getParent();N=z;break;}z=z.getParent();}if(M&&N&&!N.getCustomData('blockquote_moveout')){K.push(N);h.setMarker(L,N,'blockquote_moveout',true);}}h.clearAllMarkers(L);var O=[],P=[];L={};while(K.length>0){var Q=K.shift();J=Q.getParent();if(!Q.getPrevious())Q.remove().insertBefore(J);else if(!Q.getNext())Q.remove().insertAfter(J);else{Q.breakParent(Q.getParent());P.push(Q.getNext());}if(!J.getCustomData('blockquote_processed')){P.push(J);h.setMarker(L,J,'blockquote_processed',true);}O.push(Q);}h.clearAllMarkers(L);for(F=P.length-1;F>=0;F--){J=P[F];if(o(J))J.remove();}if(q.config.enterMode==2){var R=true;while(O.length){Q=O.shift();if(Q.getName()=='div'){I=new d.documentFragment(q.document);var S=R&&Q.getPrevious()&&!(Q.getPrevious().type==1&&Q.getPrevious().isBlockBoundary());if(S)I.append(q.document.createElement('br'));var T=Q.getNext()&&!(Q.getNext().type==1&&Q.getNext().isBlockBoundary());while(Q.getFirst())Q.getFirst().remove().appendTo(I);if(T)I.append(q.document.createElement('br'));I.replace(Q);R=false;}}}}s.selectBookmarks(u);q.focus();}};j.add('blockquote',{init:function(q){q.addCommand('blockquote',p);q.ui.addButton('Blockquote',{label:q.lang.blockquote,command:'blockquote'});q.on('selectionChange',n);},requires:['domiterator']});})();j.add('button',{beforeInit:function(m){m.ui.addHandler('button',k.button.handler);}});a.UI_BUTTON='button';k.button=function(m){e.extend(this,m,{title:m.label,className:m.className||m.command&&'cke_button_'+m.command||'',click:m.click||(function(n){n.execCommand(m.command);
})});this._={};};k.button.handler={create:function(m){return new k.button(m);}};(function(){k.button.prototype={render:function(m,n){var o=b,p=this._.id=e.getNextId(),q='',r=this.command,s;this._.editor=m;var t={id:p,button:this,editor:m,focus:function(){var z=a.document.getById(p);z.focus();},execute:function(){if(c&&b.version<7)e.setTimeout(function(){this.button.click(m);},0,this);else this.button.click(m);}},u=e.addFunction(function(z){if(t.onkey){z=new d.event(z);return t.onkey(t,z.getKeystroke())!==false;}}),v=e.addFunction(function(z){var A;if(t.onfocus)A=t.onfocus(t,new d.event(z))!==false;if(b.gecko&&b.version<10900)z.preventBubble();return A;});t.clickFn=s=e.addFunction(t.execute,t);if(this.modes){var w={};function x(){var z=m.mode;if(z){var A=this.modes[z]?w[z]!=undefined?w[z]:2:0;this.setState(m.readOnly&&!this.readOnly?0:A);}};m.on('beforeModeUnload',function(){if(m.mode&&this._.state!=0)w[m.mode]=this._.state;},this);m.on('mode',x,this);!this.readOnly&&m.on('readOnly',x,this);}else if(r){r=m.getCommand(r);if(r){r.on('state',function(){this.setState(r.state);},this);q+='cke_'+(r.state==1?'on':r.state==0?'disabled':'off');}}if(!r)q+='cke_off';if(this.className)q+=' '+this.className;n.push('<span class="cke_button'+(this.icon&&this.icon.indexOf('.png')==-1?' cke_noalphafix':'')+'">','<a id="',p,'" class="',q,'"',o.gecko&&o.version>=10900&&!o.hc?'':'" href="javascript:void(\''+(this.title||'').replace("'",'')+"')\"",' title="',this.title,'" tabindex="-1" hidefocus="true" role="button" aria-labelledby="'+p+'_label"'+(this.hasArrow?' aria-haspopup="true"':''));if(o.opera||o.gecko&&o.mac)n.push(' onkeypress="return false;"');if(o.gecko)n.push(' onblur="this.style.cssText = this.style.cssText;"');n.push(' onkeydown="return CKEDITOR.tools.callFunction(',u,', event);" onfocus="return CKEDITOR.tools.callFunction(',v,', event);" '+(c?'onclick="return false;" onmouseup':'onclick')+'="CKEDITOR.tools.callFunction(',s,', this); return false;"><span class="cke_icon"');if(this.icon){var y=(this.iconOffset||0)*-16;n.push(' style="background-image:url(',a.getUrl(this.icon),');background-position:0 '+y+'px;"');}n.push('>&nbsp;</span><span id="',p,'_label" class="cke_label">',this.label,'</span>');if(this.hasArrow)n.push('<span class="cke_buttonarrow">'+(b.hc?'&#9660;':'&nbsp;')+'</span>');n.push('</a>','</span>');if(this.onRender)this.onRender();return t;},setState:function(m){if(this._.state==m)return false;this._.state=m;var n=a.document.getById(this._.id);if(n){n.setState(m);
m==0?n.setAttribute('aria-disabled',true):n.removeAttribute('aria-disabled');m==1?n.setAttribute('aria-pressed',true):n.removeAttribute('aria-pressed');return true;}else return false;}};})();k.prototype.addButton=function(m,n){this.add(m,'button',n);};(function(){var m=function(y,z){var A=y.document,B=A.getBody(),C=0,D=function(){C=1;};B.on(z,D);(b.version>7?A.$:A.$.selection.createRange()).execCommand(z);B.removeListener(z,D);return C;},n=c?function(y,z){return m(y,z);}:function(y,z){try{return y.document.$.execCommand(z,false,null);}catch(A){return false;}},o=function(y){var z=this;z.type=y;z.canUndo=z.type=='cut';z.startDisabled=true;};o.prototype={exec:function(y,z){this.type=='cut'&&t(y);var A=n(y,this.type);if(!A)alert(y.lang.clipboard[this.type+'Error']);return A;}};var p={canUndo:false,exec:c?function(y){y.focus();if(!y.document.getBody().fire('beforepaste')&&!m(y,'paste')){y.fire('pasteDialog');return false;}}:function(y){try{if(!y.document.getBody().fire('beforepaste')&&!y.document.$.execCommand('Paste',false,null))throw 0;}catch(z){setTimeout(function(){y.fire('pasteDialog');},0);return false;}}},q=function(y){if(this.mode!='wysiwyg')return;switch(y.data.keyCode){case 1114112+86:case 2228224+45:var z=this.document.getBody();if(!c&&z.fire('beforepaste'))y.cancel();else if(b.opera||b.gecko&&b.version<10900)z.fire('paste');return;case 1114112+88:case 2228224+46:var A=this;this.fire('saveSnapshot');setTimeout(function(){A.fire('saveSnapshot');},0);}};function r(y){y.cancel();};function s(y,z,A){var B=this.document;if(B.getById('cke_pastebin'))return;if(z=='text'&&y.data&&y.data.$.clipboardData){var C=y.data.$.clipboardData.getData('text/plain');if(C){y.data.preventDefault();A(C);return;}}var D=this.getSelection(),E=new d.range(B),F=new h(z=='text'?'textarea':b.webkit?'body':'div',B);F.setAttribute('id','cke_pastebin');b.webkit&&F.append(B.createText('\xa0'));B.getBody().append(F);F.setStyles({position:'absolute',top:D.getStartElement().getDocumentPosition().y+'px',width:'1px',height:'1px',overflow:'hidden'});F.setStyle(this.config.contentsLangDirection=='ltr'?'left':'right','-1000px');var G=D.createBookmarks();this.on('selectionChange',r,null,null,0);if(z=='text')F.$.focus();else{E.setStartAt(F,1);E.setEndAt(F,2);E.select(true);}var H=this;window.setTimeout(function(){z=='text'&&b.gecko&&H.focusGrabber.focus();F.remove();H.removeListener('selectionChange',r);var I;F=b.webkit&&(I=F.getFirst())&&I.is&&I.hasClass('Apple-style-span')?I:F;D.selectBookmarks(G);
A(F['get'+(z=='text'?'Value':'Html')]());},0);};function t(y){if(!c||b.quirks)return;var z=y.getSelection(),A;if(z.getType()==3&&(A=z.getSelectedElement())){var B=z.getRanges()[0],C=y.document.createText('');C.insertBefore(A);B.setStartBefore(C);B.setEndAfter(A);z.selectRanges([B]);setTimeout(function(){if(A.getParent()){C.remove();z.selectElement(A);}},0);}};var u;function v(y,z){c&&(u=1);var A=2;try{A=z.document.$.queryCommandEnabled(y)?2:0;}catch(B){}u=0;return A;};var w;function x(){var z=this;if(z.mode!='wysiwyg')return;z.getCommand('cut').setState(w?0:v('Cut',z));z.getCommand('copy').setState(v('Copy',z));var y=w?0:b.webkit?2:v('Paste',z);z.fire('pasteState',y);};j.add('clipboard',{requires:['dialog','htmldataprocessor'],init:function(y){y.on('paste',function(A){var B=A.data;if(B.html)y.insertHtml(B.html);else if(B.text)y.insertText(B.text);setTimeout(function(){y.fire('afterPaste');},0);},null,null,1000);y.on('pasteDialog',function(A){setTimeout(function(){y.openDialog('paste');},0);});y.on('pasteState',function(A){y.getCommand('paste').setState(A.data);});function z(A,B,C,D){var E=y.lang[B];y.addCommand(B,C);y.ui.addButton(A,{label:E,command:B});if(y.addMenuItems)y.addMenuItem(B,{label:E,command:B,group:'clipboard',order:D});};z('Cut','cut',new o('cut'),1);z('Copy','copy',new o('copy'),4);z('Paste','paste',p,8);a.dialog.add('paste',a.getUrl(this.path+'dialogs/paste.js'));y.on('key',q,y);y.on('contentDom',function(){var A=y.document.getBody();A.on(b.webkit?'paste':'beforepaste',function(B){if(u)return;var C={mode:'html'};y.fire('beforePaste',C);s.call(y,B,C.mode,function(D){if(!(D=e.trim(D.replace(/<span[^>]+data-cke-bookmark[^<]*?<\/span>/ig,''))))return;var E={};E[C.mode]=D;y.fire('paste',E);});});A.on('contextmenu',function(){u=1;setTimeout(function(){u=0;},10);});A.on('beforecut',function(){!u&&t(y);});A.on('mouseup',function(){setTimeout(function(){x.call(y);},0);},y);A.on('keyup',x,y);});y.on('selectionChange',function(A){w=A.data.selection.getRanges()[0].checkReadOnly();x.call(y);});if(y.contextMenu)y.contextMenu.addListener(function(A,B){var C=B.getRanges()[0].checkReadOnly();return{cut:!C&&v('Cut',y),copy:v('Copy',y),paste:!C&&(b.webkit?2:v('Paste',y))};});}});})();j.add('colorbutton',{requires:['panelbutton','floatpanel','styles'],init:function(m){var n=m.config,o=m.lang.colorButton,p;if(!b.hc){q('TextColor','fore',o.textColorTitle);q('BGColor','back',o.bgColorTitle);}function q(t,u,v){var w=e.getNextId()+'_colorBox';m.ui.add(t,'panelbutton',{label:v,title:v,className:'cke_button_'+t.toLowerCase(),modes:{wysiwyg:1},panel:{css:m.skin.editor.css,attributes:{role:'listbox','aria-label':o.panelTitle}},onBlock:function(x,y){y.autoSize=true;
y.element.addClass('cke_colorblock');y.element.setHtml(r(x,u,w));y.element.getDocument().getBody().setStyle('overflow','hidden');k.fire('ready',this);var z=y.keys,A=m.lang.dir=='rtl';z[A?37:39]='next';z[40]='next';z[9]='next';z[A?39:37]='prev';z[38]='prev';z[2228224+9]='prev';z[32]='click';},onOpen:function(){var x=m.getSelection(),y=x&&x.getStartElement(),z=new d.elementPath(y),A;y=z.block||z.blockLimit||m.document.getBody();do A=y&&y.getComputedStyle(u=='back'?'background-color':'color')||'transparent';while(u=='back'&&A=='transparent'&&y&&(y=y.getParent()));if(!A||A=='transparent')A='#ffffff';this._.panel._.iframe.getFrameDocument().getById(w).setStyle('background-color',A);}});};function r(t,u,v){var w=[],x=n.colorButton_colors.split(','),y=x.length+(n.colorButton_enableMore?2:1),z=e.addFunction(function(F,G){if(F=='?'){var H=arguments.callee;function I(K){this.removeListener('ok',I);this.removeListener('cancel',I);K.name=='ok'&&H(this.getContentElement('picker','selectedColor').getValue(),G);};m.openDialog('colordialog',function(){this.on('ok',I);this.on('cancel',I);});return;}m.focus();t.hide(false);m.fire('saveSnapshot');new a.style(n['colorButton_'+G+'Style'],{color:'inherit'}).remove(m.document);if(F){var J=n['colorButton_'+G+'Style'];J.childRule=G=='back'?function(K){return s(K);}:function(K){return!(K.is('a')||K.getElementsByTag('a').count())||s(K);};new a.style(J,{color:F}).apply(m.document);}m.fire('saveSnapshot');});w.push('<a class="cke_colorauto" _cke_focus=1 hidefocus=true title="',o.auto,'" onclick="CKEDITOR.tools.callFunction(',z,",null,'",u,"');return false;\" href=\"javascript:void('",o.auto,'\')" role="option" aria-posinset="1" aria-setsize="',y,'"><table role="presentation" cellspacing=0 cellpadding=0 width="100%"><tr><td><span class="cke_colorbox" id="',v,'"></span></td><td colspan=7 align=center>',o.auto,'</td></tr></table></a><table role="presentation" cellspacing=0 cellpadding=0 width="100%">');for(var A=0;A<x.length;A++){if(A%8===0)w.push('</tr><tr>');var B=x[A].split('/'),C=B[0],D=B[1]||C;if(!B[1])C='#'+C.replace(/^(.)(.)(.)$/,'$1$1$2$2$3$3');var E=m.lang.colors[D]||D;w.push('<td><a class="cke_colorbox" _cke_focus=1 hidefocus=true title="',E,'" onclick="CKEDITOR.tools.callFunction(',z,",'",C,"','",u,"'); return false;\" href=\"javascript:void('",E,'\')" role="option" aria-posinset="',A+2,'" aria-setsize="',y,'"><span class="cke_colorbox" style="background-color:#',D,'"></span></a></td>');}if(n.colorButton_enableMore===undefined||n.colorButton_enableMore)w.push('</tr><tr><td colspan=8 align=center><a class="cke_colormore" _cke_focus=1 hidefocus=true title="',o.more,'" onclick="CKEDITOR.tools.callFunction(',z,",'?','",u,"');return false;\" href=\"javascript:void('",o.more,"')\"",' role="option" aria-posinset="',y,'" aria-setsize="',y,'">',o.more,'</a></td>');
w.push('</tr></table>');return w.join('');};function s(t){return t.getAttribute('contentEditable')=='false'||t.getAttribute('data-nostyle');};}});i.colorButton_colors='000,800000,8B4513,2F4F4F,008080,000080,4B0082,696969,B22222,A52A2A,DAA520,006400,40E0D0,0000CD,800080,808080,F00,FF8C00,FFD700,008000,0FF,00F,EE82EE,A9A9A9,FFA07A,FFA500,FFFF00,00FF00,AFEEEE,ADD8E6,DDA0DD,D3D3D3,FFF0F5,FAEBD7,FFFFE0,F0FFF0,F0FFFF,F0F8FF,E6E6FA,FFF';i.colorButton_foreStyle={element:'span',styles:{color:'#(color)'},overrides:[{element:'font',attributes:{color:null}}]};i.colorButton_backStyle={element:'span',styles:{'background-color':'#(color)'}};j.colordialog={init:function(m){m.addCommand('colordialog',new a.dialogCommand('colordialog'));a.dialog.add('colordialog',this.path+'dialogs/colordialog.js');}};j.add('colordialog',j.colordialog);j.add('contextmenu',{requires:['menu'],onLoad:function(){j.contextMenu=e.createClass({base:a.menu,$:function(m){this.base.call(this,m,{panel:{className:m.skinClass+' cke_contextmenu',attributes:{'aria-label':m.lang.contextmenu.options}}});},proto:{addTarget:function(m,n){if(b.opera&&!('oncontextmenu' in document.body)){var o;m.on('mousedown',function(s){s=s.data;if(s.$.button!=2){if(s.getKeystroke()==1114112+1)m.fire('contextmenu',s);return;}if(n&&(b.mac?s.$.metaKey:s.$.ctrlKey))return;var t=s.getTarget();if(!o){var u=t.getDocument();o=u.createElement('input');o.$.type='button';u.getBody().append(o);}o.setAttribute('style','position:absolute;top:'+(s.$.clientY-2)+'px;left:'+(s.$.clientX-2)+'px;width:5px;height:5px;opacity:0.01');});m.on('mouseup',function(s){if(o){o.remove();o=undefined;m.fire('contextmenu',s.data);}});}m.on('contextmenu',function(s){var t=s.data;if(n&&(b.webkit?p:b.mac?t.$.metaKey:t.$.ctrlKey))return;t.preventDefault();var u=t.getTarget().getDocument().getDocumentElement(),v=t.$.clientX,w=t.$.clientY;e.setTimeout(function(){this.open(u,null,v,w);},c?200:0,this);},this);if(b.opera)m.on('keypress',function(s){var t=s.data;if(t.$.keyCode===0)t.preventDefault();});if(b.webkit){var p,q=function(s){p=b.mac?s.data.$.metaKey:s.data.$.ctrlKey;},r=function(){p=0;};m.on('keydown',q);m.on('keyup',r);m.on('contextmenu',r);}},open:function(m,n,o,p){this.editor.focus();m=m||a.document.getDocumentElement();this.show(m,n,o,p);}}});},beforeInit:function(m){m.contextMenu=new j.contextMenu(m);m.addCommand('contextMenu',{exec:function(){m.contextMenu.open(m.document.getBody());}});}});(function(){function m(o){var p=this.att,q=o&&o.hasAttribute(p)&&o.getAttribute(p)||'';
if(q!==undefined)this.setValue(q);};function n(){var o;for(var p=0;p<arguments.length;p++){if(arguments[p] instanceof h){o=arguments[p];break;}}if(o){var q=this.att,r=this.getValue();if(r)o.setAttribute(q,r);else o.removeAttribute(q,r);}};j.add('dialogadvtab',{createAdvancedTab:function(o,p){if(!p)p={id:1,dir:1,classes:1,styles:1};var q=o.lang.common,r={id:'advanced',label:q.advancedTab,title:q.advancedTab,elements:[{type:'vbox',padding:1,children:[]}]},s=[];if(p.id||p.dir){if(p.id)s.push({id:'advId',att:'id',type:'text',label:q.id,setup:m,commit:n});if(p.dir)s.push({id:'advLangDir',att:'dir',type:'select',label:q.langDir,'default':'',style:'width:100%',items:[[q.notSet,''],[q.langDirLTR,'ltr'],[q.langDirRTL,'rtl']],setup:m,commit:n});r.elements[0].children.push({type:'hbox',widths:['50%','50%'],children:[].concat(s)});}if(p.styles||p.classes){s=[];if(p.styles)s.push({id:'advStyles',att:'style',type:'text',label:q.styles,'default':'',validate:a.dialog.validate.inlineStyle(q.invalidInlineStyle),onChange:function(){},getStyle:function(t,u){var v=this.getValue().match(new RegExp(t+'\\s*:\\s*([^;]*)','i'));return v?v[1]:u;},updateStyle:function(t,u){var v=this.getValue();if(v)v=v.replace(new RegExp('\\s*'+t+'s*:[^;]*(?:$|;s*)','i'),'').replace(/^[;\s]+/,'').replace(/\s+$/,'');if(u){v&&!/;\s*$/.test(v)&&(v+='; ');v+=t+': '+u;}this.setValue(v,1);},setup:m,commit:n});if(p.classes)s.push({type:'hbox',widths:['45%','55%'],children:[{id:'advCSSClasses',att:'class',type:'text',label:q.cssClasses,'default':'',setup:m,commit:n}]});r.elements[0].children.push({type:'hbox',widths:['50%','50%'],children:[].concat(s)});}return r;}});})();(function(){j.add('div',{requires:['editingblock','domiterator','styles'],init:function(m){var n=m.lang.div;m.addCommand('creatediv',new a.dialogCommand('creatediv'));m.addCommand('editdiv',new a.dialogCommand('editdiv'));m.addCommand('removediv',{exec:function(o){var p=o.getSelection(),q=p&&p.getRanges(),r,s=p.createBookmarks(),t,u=[];function v(x){var y=new d.elementPath(x),z=y.blockLimit,A=z.is('div')&&z;if(A&&!A.data('cke-div-added')){u.push(A);A.data('cke-div-added');}};for(var w=0;w<q.length;w++){r=q[w];if(r.collapsed)v(p.getStartElement());else{t=new d.walker(r);t.evaluator=v;t.lastForward();}}for(w=0;w<u.length;w++)u[w].remove(true);p.selectBookmarks(s);}});m.ui.addButton('CreateDiv',{label:n.toolbar,command:'creatediv'});if(m.addMenuItems){m.addMenuItems({editdiv:{label:n.edit,command:'editdiv',group:'div',order:1},removediv:{label:n.remove,command:'removediv',group:'div',order:5}});
if(m.contextMenu)m.contextMenu.addListener(function(o,p){if(!o||o.isReadOnly())return null;var q=new d.elementPath(o),r=q.blockLimit;if(r&&r.getAscendant('div',true))return{editdiv:2,removediv:2};return null;});}a.dialog.add('creatediv',this.path+'dialogs/div.js');a.dialog.add('editdiv',this.path+'dialogs/div.js');}});})();(function(){var m={toolbarFocus:{editorFocus:false,readOnly:1,exec:function(o){var p=o._.elementsPath.idBase,q=a.document.getById(p+'0');q&&q.focus(c||b.air);}}},n='<span class="cke_empty">&nbsp;</span>';j.add('elementspath',{requires:['selection'],init:function(o){var p='cke_path_'+o.name,q,r=function(){if(!q)q=a.document.getById(p);return q;},s='cke_elementspath_'+e.getNextNumber()+'_';o._.elementsPath={idBase:s,filters:[]};o.on('themeSpace',function(x){if(x.data.space=='bottom')x.data.html+='<span id="'+p+'_label" class="cke_voice_label">'+o.lang.elementsPath.eleLabel+'</span>'+'<div id="'+p+'" class="cke_path" role="group" aria-labelledby="'+p+'_label">'+n+'</div>';});function t(x){o.focus();var y=o._.elementsPath.list[x];if(y.is('body')){var z=new d.range(o.document);z.selectNodeContents(y);z.select();}else o.getSelection().selectElement(y);};var u=e.addFunction(t),v=e.addFunction(function(x,y){var z=o._.elementsPath.idBase,A;y=new d.event(y);var B=o.lang.dir=='rtl';switch(y.getKeystroke()){case B?39:37:case 9:A=a.document.getById(z+(x+1));if(!A)A=a.document.getById(z+'0');A.focus();return false;case B?37:39:case 2228224+9:A=a.document.getById(z+(x-1));if(!A)A=a.document.getById(z+(o._.elementsPath.list.length-1));A.focus();return false;case 27:o.focus();return false;case 13:case 32:t(x);return false;}return true;});o.on('selectionChange',function(x){var y=b,z=x.data.selection,A=z.getStartElement(),B=[],C=x.editor,D=C._.elementsPath.list=[],E=C._.elementsPath.filters;while(A){var F=0,G;if(A.data('cke-display-name'))G=A.data('cke-display-name');else if(A.data('cke-real-element-type'))G=A.data('cke-real-element-type');else G=A.getName();for(var H=0;H<E.length;H++){var I=E[H](A,G);if(I===false){F=1;break;}G=I||G;}if(!F){var J=D.push(A)-1,K='';if(y.opera||y.gecko&&y.mac)K+=' onkeypress="return false;"';if(y.gecko)K+=' onblur="this.style.cssText = this.style.cssText;"';var L=C.lang.elementsPath.eleTitle.replace(/%1/,G);B.unshift('<a id="',s,J,'" href="javascript:void(\'',G,'\')" tabindex="-1" title="',L,'"'+(b.gecko&&b.version<10900?' onfocus="event.preventBubble();"':'')+' hidefocus="true" '+' onkeydown="return CKEDITOR.tools.callFunction(',v,',',J,', event );"'+K,' onclick="CKEDITOR.tools.callFunction('+u,',',J,'); return false;"',' role="button" aria-labelledby="'+s+J+'_label">',G,'<span id="',s,J,'_label" class="cke_label">'+L+'</span>','</a>');
}if(G=='body')break;A=A.getParent();}var M=r();M.setHtml(B.join('')+n);C.fire('elementsPathUpdate',{space:M});});function w(){q&&q.setHtml(n);delete o._.elementsPath.list;};o.on('readOnly',w);o.on('contentDomUnload',w);o.addCommand('elementsPathFocus',m.toolbarFocus);}});})();(function(){j.add('enterkey',{requires:['keystrokes','indent'],init:function(t){t.addCommand('enter',{modes:{wysiwyg:1},editorFocus:false,exec:function(v){r(v);}});t.addCommand('shiftEnter',{modes:{wysiwyg:1},editorFocus:false,exec:function(v){q(v);}});var u=t.keystrokeHandler.keystrokes;u[13]='enter';u[2228224+13]='shiftEnter';}});j.enterkey={enterBlock:function(t,u,v,w){v=v||s(t);if(!v)return;var x=v.document,y=v.checkStartOfBlock(),z=v.checkEndOfBlock(),A=new d.elementPath(v.startContainer),B=A.block;if(y&&z){if(B&&(B.is('li')||B.getParent().is('li'))){t.execCommand('outdent');return;}if(B&&B.getParent().is('blockquote')){B.breakParent(B.getParent());if(!B.getPrevious().getFirst(d.walker.invisible(1)))B.getPrevious().remove();if(!B.getNext().getFirst(d.walker.invisible(1)))B.getNext().remove();v.moveToElementEditStart(B);v.select();return;}}else if(B&&B.is('pre')){if(!z){n(t,u,v,w);return;}}else if(B&&f.$captionBlock[B.getName()]){n(t,u,v,w);return;}var C=u==3?'div':'p',D=v.splitBlock(C);if(!D)return;var E=D.previousBlock,F=D.nextBlock,G=D.wasStartOfBlock,H=D.wasEndOfBlock,I;if(F){I=F.getParent();if(I.is('li')){F.breakParent(I);F.move(F.getNext(),1);}}else if(E&&(I=E.getParent())&&I.is('li')){E.breakParent(I);I=E.getNext();v.moveToElementEditStart(I);E.move(E.getPrevious());}if(!G&&!H){if(F.is('li')&&(I=F.getFirst(d.walker.invisible(true)))&&I.is&&I.is('ul','ol'))(c?x.createText('\xa0'):x.createElement('br')).insertBefore(I);if(F)v.moveToElementEditStart(F);}else{var J,K;if(E){if(E.is('li')||!(p.test(E.getName())||E.is('pre')))J=E.clone();}else if(F)J=F.clone();if(!J){if(I&&I.is('li'))J=I;else{J=x.createElement(C);if(E&&(K=E.getDirection()))J.setAttribute('dir',K);}}else if(w&&!J.is('li'))J.renameNode(C);var L=D.elementPath;if(L)for(var M=0,N=L.elements.length;M<N;M++){var O=L.elements[M];if(O.equals(L.block)||O.equals(L.blockLimit))break;if(f.$removeEmpty[O.getName()]){O=O.clone();J.moveChildren(O);J.append(O);}}if(!c)J.appendBogus();if(!J.getParent())v.insertNode(J);J.is('li')&&J.removeAttribute('value');if(c&&G&&(!H||!E.getChildCount())){v.moveToElementEditStart(H?E:J);v.select();}v.moveToElementEditStart(G&&!H?F:J);}if(!c)if(F){var P=x.createElement('span');P.setHtml('&nbsp;');v.insertNode(P);
P.scrollIntoView();v.deleteContents();}else J.scrollIntoView();v.select();},enterBr:function(t,u,v,w){v=v||s(t);if(!v)return;var x=v.document,y=u==3?'div':'p',z=v.checkEndOfBlock(),A=new d.elementPath(t.getSelection().getStartElement()),B=A.block,C=B&&A.block.getName(),D=false;if(!w&&C=='li'){o(t,u,v,w);return;}if(!w&&z&&p.test(C)){var E,F;if(F=B.getDirection()){E=x.createElement('div');E.setAttribute('dir',F);E.insertAfter(B);v.setStart(E,0);}else{x.createElement('br').insertAfter(B);if(b.gecko)x.createText('').insertAfter(B);v.setStartAt(B.getNext(),c?3:1);}}else{var G;D=C=='pre';if(D&&!b.gecko)G=x.createText(c?'\r':'\n');else G=x.createElement('br');v.deleteContents();v.insertNode(G);if(c)v.setStartAt(G,4);else{x.createText('\ufeff').insertAfter(G);if(z)G.getParent().appendBogus();G.getNext().$.nodeValue='';v.setStartAt(G.getNext(),1);var H=null;if(!b.gecko){H=x.createElement('span');H.setHtml('&nbsp;');}else H=x.createElement('br');H.insertBefore(G.getNext());H.scrollIntoView();H.remove();}}v.collapse(true);v.select(D);}};var m=j.enterkey,n=m.enterBr,o=m.enterBlock,p=/^h[1-6]$/;function q(t){if(t.mode!='wysiwyg')return false;return r(t,t.config.shiftEnterMode,1);};function r(t,u,v){v=t.config.forceEnterMode||v;if(t.mode!='wysiwyg')return false;if(!u)u=t.config.enterMode;setTimeout(function(){t.fire('saveSnapshot');if(u==2)n(t,u,null,v);else o(t,u,null,v);t.fire('saveSnapshot');},0);return true;};function s(t){var u=t.getSelection().getRanges(true);for(var v=u.length-1;v>0;v--)u[v].deleteContents();return u[0];};})();(function(){var m='nbsp,gt,lt,amp',n='quot,iexcl,cent,pound,curren,yen,brvbar,sect,uml,copy,ordf,laquo,not,shy,reg,macr,deg,plusmn,sup2,sup3,acute,micro,para,middot,cedil,sup1,ordm,raquo,frac14,frac12,frac34,iquest,times,divide,fnof,bull,hellip,prime,Prime,oline,frasl,weierp,image,real,trade,alefsym,larr,uarr,rarr,darr,harr,crarr,lArr,uArr,rArr,dArr,hArr,forall,part,exist,empty,nabla,isin,notin,ni,prod,sum,minus,lowast,radic,prop,infin,ang,and,or,cap,cup,int,there4,sim,cong,asymp,ne,equiv,le,ge,sub,sup,nsub,sube,supe,oplus,otimes,perp,sdot,lceil,rceil,lfloor,rfloor,lang,rang,loz,spades,clubs,hearts,diams,circ,tilde,ensp,emsp,thinsp,zwnj,zwj,lrm,rlm,ndash,mdash,lsquo,rsquo,sbquo,ldquo,rdquo,bdquo,dagger,Dagger,permil,lsaquo,rsaquo,euro',o='Agrave,Aacute,Acirc,Atilde,Auml,Aring,AElig,Ccedil,Egrave,Eacute,Ecirc,Euml,Igrave,Iacute,Icirc,Iuml,ETH,Ntilde,Ograve,Oacute,Ocirc,Otilde,Ouml,Oslash,Ugrave,Uacute,Ucirc,Uuml,Yacute,THORN,szlig,agrave,aacute,acirc,atilde,auml,aring,aelig,ccedil,egrave,eacute,ecirc,euml,igrave,iacute,icirc,iuml,eth,ntilde,ograve,oacute,ocirc,otilde,ouml,oslash,ugrave,uacute,ucirc,uuml,yacute,thorn,yuml,OElig,oelig,Scaron,scaron,Yuml',p='Alpha,Beta,Gamma,Delta,Epsilon,Zeta,Eta,Theta,Iota,Kappa,Lambda,Mu,Nu,Xi,Omicron,Pi,Rho,Sigma,Tau,Upsilon,Phi,Chi,Psi,Omega,alpha,beta,gamma,delta,epsilon,zeta,eta,theta,iota,kappa,lambda,mu,nu,xi,omicron,pi,rho,sigmaf,sigma,tau,upsilon,phi,chi,psi,omega,thetasym,upsih,piv';
function q(r,s){var t={},u=[],v={nbsp:'\xa0',shy:'­',gt:'>',lt:'<',amp:'&'};r=r.replace(/\b(nbsp|shy|gt|lt|amp)(?:,|$)/g,function(A,B){var C=s?'&'+B+';':v[B],D=s?v[B]:'&'+B+';';t[C]=D;u.push(C);return '';});if(!s&&r){r=r.split(',');var w=document.createElement('div'),x;w.innerHTML='&'+r.join(';&')+';';x=w.innerHTML;w=null;for(var y=0;y<x.length;y++){var z=x.charAt(y);t[z]='&'+r[y]+';';u.push(z);}}t.regex=u.join(s?'|':'');return t;};j.add('entities',{afterInit:function(r){var s=r.config,t=r.dataProcessor,u=t&&t.htmlFilter;if(u){var v='';if(s.basicEntities!==false)v+=m;if(s.entities){v+=','+n;if(s.entities_latin)v+=','+o;if(s.entities_greek)v+=','+p;if(s.entities_additional)v+=','+s.entities_additional;}var w=q(v),x=w.regex?'['+w.regex+']':'a^';delete w.regex;if(s.entities&&s.entities_processNumerical)x='[^ -~]|'+x;x=new RegExp(x,'g');function y(C){return s.entities_processNumerical=='force'||!w[C]?'&#'+C.charCodeAt(0)+';':w[C];};var z=q([m,'shy'].join(','),true),A=new RegExp(z.regex,'g');function B(C){return z[C];};u.addRules({text:function(C){return C.replace(A,B).replace(x,y);}});}}});})();i.basicEntities=true;i.entities=true;i.entities_latin=true;i.entities_greek=true;i.entities_additional='#39';(function(){function m(v,w){var x=[];if(!w)return v;else for(var y in w)x.push(y+'='+encodeURIComponent(w[y]));return v+(v.indexOf('?')!=-1?'&':'?')+x.join('&');};function n(v){v+='';var w=v.charAt(0).toUpperCase();return w+v.substr(1);};function o(v){var C=this;var w=C.getDialog(),x=w.getParentEditor();x._.filebrowserSe=C;var y=x.config['filebrowser'+n(w.getName())+'WindowWidth']||x.config.filebrowserWindowWidth||'80%',z=x.config['filebrowser'+n(w.getName())+'WindowHeight']||x.config.filebrowserWindowHeight||'70%',A=C.filebrowser.params||{};A.CKEditor=x.name;A.CKEditorFuncNum=x._.filebrowserFn;if(!A.langCode)A.langCode=x.langCode;var B=m(C.filebrowser.url,A);x.popup(B,y,z,x.config.filebrowserWindowFeatures||x.config.fileBrowserWindowFeatures);};function p(v){var y=this;var w=y.getDialog(),x=w.getParentEditor();x._.filebrowserSe=y;if(!w.getContentElement(y['for'][0],y['for'][1]).getInputElement().$.value)return false;if(!w.getContentElement(y['for'][0],y['for'][1]).getAction())return false;return true;};function q(v,w,x){var y=x.params||{};y.CKEditor=v.name;y.CKEditorFuncNum=v._.filebrowserFn;if(!y.langCode)y.langCode=v.langCode;w.action=m(x.url,y);w.filebrowser=x;};function r(v,w,x,y){var z,A;for(var B in y){z=y[B];if(z.type=='hbox'||z.type=='vbox')r(v,w,x,z.children);
if(!z.filebrowser)continue;if(typeof z.filebrowser=='string'){var C={action:z.type=='fileButton'?'QuickUpload':'Browse',target:z.filebrowser};z.filebrowser=C;}if(z.filebrowser.action=='Browse'){var D=z.filebrowser.url;if(D===undefined){D=v.config['filebrowser'+n(w)+'BrowseUrl'];if(D===undefined)D=v.config.filebrowserBrowseUrl;}if(D){z.onClick=o;z.filebrowser.url=D;z.hidden=false;}}else if(z.filebrowser.action=='QuickUpload'&&z['for']){D=z.filebrowser.url;if(D===undefined){D=v.config['filebrowser'+n(w)+'UploadUrl'];if(D===undefined)D=v.config.filebrowserUploadUrl;}if(D){var E=z.onClick;z.onClick=function(F){var G=F.sender;if(E&&E.call(G,F)===false)return false;return p.call(G,F);};z.filebrowser.url=D;z.hidden=false;q(v,x.getContents(z['for'][0]).get(z['for'][1]),z.filebrowser);}}}};function s(v,w){var x=w.getDialog(),y=w.filebrowser.target||null;v=v.replace(/#/g,'%23');if(y){var z=y.split(':'),A=x.getContentElement(z[0],z[1]);if(A){A.setValue(v);x.selectPage(z[0]);}}};function t(v,w,x){if(x.indexOf(';')!==-1){var y=x.split(';');for(var z=0;z<y.length;z++){if(t(v,w,y[z]))return true;}return false;}var A=v.getContents(w).get(x).filebrowser;return A&&A.url;};function u(v,w){var A=this;var x=A._.filebrowserSe.getDialog(),y=A._.filebrowserSe['for'],z=A._.filebrowserSe.filebrowser.onSelect;if(y)x.getContentElement(y[0],y[1]).reset();if(typeof w=='function'&&w.call(A._.filebrowserSe)===false)return;if(z&&z.call(A._.filebrowserSe,v,w)===false)return;if(typeof w=='string'&&w)alert(w);if(v)s(v,A._.filebrowserSe);};j.add('filebrowser',{init:function(v,w){v._.filebrowserFn=e.addFunction(u,v);v.on('destroy',function(){e.removeFunction(this._.filebrowserFn);});}});a.on('dialogDefinition',function(v){var w=v.data.definition,x;for(var y in w.contents){if(x=w.contents[y]){r(v.editor,v.data.name,w,x.elements);if(x.hidden&&x.filebrowser)x.hidden=!t(w,x.id,x.filebrowser);}}});})();j.add('find',{init:function(m){var n=j.find;m.ui.addButton('Find',{label:m.lang.findAndReplace.find,command:'find'});var o=m.addCommand('find',new a.dialogCommand('find'));o.canUndo=false;o.readOnly=1;m.ui.addButton('Replace',{label:m.lang.findAndReplace.replace,command:'replace'});var p=m.addCommand('replace',new a.dialogCommand('replace'));p.canUndo=false;a.dialog.add('find',this.path+'dialogs/find.js');a.dialog.add('replace',this.path+'dialogs/find.js');},requires:['styles']});i.find_highlight={element:'span',styles:{'background-color':'#004',color:'#fff'}};(function(){var m=/\.swf(?:$|\?)/i;function n(p){var q=p.attributes;
return q.type=='application/x-shockwave-flash'||m.test(q.src||'');};function o(p,q){return p.createFakeParserElement(q,'cke_flash','flash',true);};j.add('flash',{init:function(p){p.addCommand('flash',new a.dialogCommand('flash'));p.ui.addButton('Flash',{label:p.lang.common.flash,command:'flash'});a.dialog.add('flash',this.path+'dialogs/flash.js');p.addCss('img.cke_flash{background-image: url('+a.getUrl(this.path+'images/placeholder.png')+');'+'background-position: center center;'+'background-repeat: no-repeat;'+'border: 1px solid #a9a9a9;'+'width: 80px;'+'height: 80px;'+'}');if(p.addMenuItems)p.addMenuItems({flash:{label:p.lang.flash.properties,command:'flash',group:'flash'}});p.on('doubleclick',function(q){var r=q.data.element;if(r.is('img')&&r.data('cke-real-element-type')=='flash')q.data.dialog='flash';});if(p.contextMenu)p.contextMenu.addListener(function(q,r){if(q&&q.is('img')&&!q.isReadOnly()&&q.data('cke-real-element-type')=='flash')return{flash:2};});},afterInit:function(p){var q=p.dataProcessor,r=q&&q.dataFilter;if(r)r.addRules({elements:{'cke:object':function(s){var t=s.attributes,u=t.classid&&String(t.classid).toLowerCase();if(!u&&!n(s)){for(var v=0;v<s.children.length;v++){if(s.children[v].name=='cke:embed'){if(!n(s.children[v]))return null;return o(p,s);}}return null;}return o(p,s);},'cke:embed':function(s){if(!n(s))return null;return o(p,s);}}},5);},requires:['fakeobjects']});})();e.extend(i,{flashEmbedTagOnly:false,flashAddEmbedTag:true,flashConvertOnEdit:false});(function(){function m(n,o,p,q,r,s,t){var u=n.config,v=r.split(';'),w=[],x={};for(var y=0;y<v.length;y++){var z=v[y];if(z){z=z.split('/');var A={},B=v[y]=z[0];A[p]=w[y]=z[1]||B;x[B]=new a.style(t,A);x[B]._.definition.name=B;}else v.splice(y--,1);}n.ui.addRichCombo(o,{label:q.label,title:q.panelTitle,className:'cke_'+(p=='size'?'fontSize':'font'),panel:{css:n.skin.editor.css.concat(u.contentsCss),multiSelect:false,attributes:{'aria-label':q.panelTitle}},init:function(){this.startGroup(q.panelTitle);for(var C=0;C<v.length;C++){var D=v[C];this.add(D,x[D].buildPreview(),D);}},onClick:function(C){n.focus();n.fire('saveSnapshot');var D=x[C];if(this.getValue()==C)D.remove(n.document);else D.apply(n.document);n.fire('saveSnapshot');},onRender:function(){n.on('selectionChange',function(C){var D=this.getValue(),E=C.data.path,F=E.elements;for(var G=0,H;G<F.length;G++){H=F[G];for(var I in x){if(x[I].checkElementRemovable(H,true)){if(I!=D)this.setValue(I);return;}}}this.setValue('',s);},this);}});
};j.add('font',{requires:['richcombo','styles'],init:function(n){var o=n.config;m(n,'Font','family',n.lang.font,o.font_names,o.font_defaultLabel,o.font_style);m(n,'FontSize','size',n.lang.fontSize,o.fontSize_sizes,o.fontSize_defaultLabel,o.fontSize_style);}});})();i.font_names='Arial/Arial, Helvetica, sans-serif;Comic Sans MS/Comic Sans MS, cursive;Courier New/Courier New, Courier, monospace;Georgia/Georgia, serif;Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;Tahoma/Tahoma, Geneva, sans-serif;Times New Roman/Times New Roman, Times, serif;Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;Verdana/Verdana, Geneva, sans-serif';i.font_defaultLabel='';i.font_style={element:'span',styles:{'font-family':'#(family)'},overrides:[{element:'font',attributes:{face:null}}]};i.fontSize_sizes='8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px';i.fontSize_defaultLabel='';i.fontSize_style={element:'span',styles:{'font-size':'#(size)'},overrides:[{element:'font',attributes:{size:null}}]};j.add('format',{requires:['richcombo','styles'],init:function(m){var n=m.config,o=m.lang.format,p=n.format_tags.split(';'),q={};for(var r=0;r<p.length;r++){var s=p[r];q[s]=new a.style(n['format_'+s]);q[s]._.enterMode=m.config.enterMode;}m.ui.addRichCombo('Format',{label:o.label,title:o.panelTitle,className:'cke_format',panel:{css:m.skin.editor.css.concat(n.contentsCss),multiSelect:false,attributes:{'aria-label':o.panelTitle}},init:function(){this.startGroup(o.panelTitle);for(var t in q){var u=o['tag_'+t];this.add(t,q[t].buildPreview(u),u);}},onClick:function(t){m.focus();m.fire('saveSnapshot');var u=q[t],v=new d.elementPath(m.getSelection().getStartElement());u[u.checkActive(v)?'remove':'apply'](m.document);setTimeout(function(){m.fire('saveSnapshot');},0);},onRender:function(){m.on('selectionChange',function(t){var u=this.getValue(),v=t.data.path;for(var w in q){if(q[w].checkActive(v)){if(w!=u)this.setValue(w,m.lang.format['tag_'+w]);return;}}this.setValue('');},this);}});}});i.format_tags='p;h1;h2;h3;h4;h5;h6;pre;address;div';i.format_p={element:'p'};i.format_div={element:'div'};i.format_pre={element:'pre'};i.format_address={element:'address'};i.format_h1={element:'h1'};i.format_h2={element:'h2'};i.format_h3={element:'h3'};i.format_h4={element:'h4'};i.format_h5={element:'h5'};i.format_h6={element:'h6'};j.add('forms',{init:function(m){var n=m.lang;m.addCss('form{border: 1px dotted #FF0000;padding: 2px;}\n');
m.addCss('img.cke_hidden{background-image: url('+a.getUrl(this.path+'images/hiddenfield.gif')+');'+'background-position: center center;'+'background-repeat: no-repeat;'+'border: 1px solid #a9a9a9;'+'width: 16px !important;'+'height: 16px !important;'+'}');var o=function(q,r,s){m.addCommand(r,new a.dialogCommand(r));m.ui.addButton(q,{label:n.common[q.charAt(0).toLowerCase()+q.slice(1)],command:r});a.dialog.add(r,s);},p=this.path+'dialogs/';o('Form','form',p+'form.js');o('Checkbox','checkbox',p+'checkbox.js');o('Radio','radio',p+'radio.js');o('TextField','textfield',p+'textfield.js');o('Textarea','textarea',p+'textarea.js');o('Select','select',p+'select.js');o('Button','button',p+'button.js');o('ImageButton','imagebutton',j.getPath('image')+'dialogs/image.js');o('HiddenField','hiddenfield',p+'hiddenfield.js');if(m.addMenuItems)m.addMenuItems({form:{label:n.form.menu,command:'form',group:'form'},checkbox:{label:n.checkboxAndRadio.checkboxTitle,command:'checkbox',group:'checkbox'},radio:{label:n.checkboxAndRadio.radioTitle,command:'radio',group:'radio'},textfield:{label:n.textfield.title,command:'textfield',group:'textfield'},hiddenfield:{label:n.hidden.title,command:'hiddenfield',group:'hiddenfield'},imagebutton:{label:n.image.titleButton,command:'imagebutton',group:'imagebutton'},button:{label:n.button.title,command:'button',group:'button'},select:{label:n.select.title,command:'select',group:'select'},textarea:{label:n.textarea.title,command:'textarea',group:'textarea'}});if(m.contextMenu){m.contextMenu.addListener(function(q){if(q&&q.hasAscendant('form',true)&&!q.isReadOnly())return{form:2};});m.contextMenu.addListener(function(q){if(q&&!q.isReadOnly()){var r=q.getName();if(r=='select')return{select:2};if(r=='textarea')return{textarea:2};if(r=='input')switch(q.getAttribute('type')){case 'button':case 'submit':case 'reset':return{button:2};case 'checkbox':return{checkbox:2};case 'radio':return{radio:2};case 'image':return{imagebutton:2};default:return{textfield:2};}if(r=='img'&&q.data('cke-real-element-type')=='hiddenfield')return{hiddenfield:2};}});}m.on('doubleclick',function(q){var r=q.data.element;if(r.is('form'))q.data.dialog='form';else if(r.is('select'))q.data.dialog='select';else if(r.is('textarea'))q.data.dialog='textarea';else if(r.is('img')&&r.data('cke-real-element-type')=='hiddenfield')q.data.dialog='hiddenfield';else if(r.is('input'))switch(r.getAttribute('type')){case 'button':case 'submit':case 'reset':q.data.dialog='button';break;case 'checkbox':q.data.dialog='checkbox';
break;case 'radio':q.data.dialog='radio';break;case 'image':q.data.dialog='imagebutton';break;default:q.data.dialog='textfield';break;}});},afterInit:function(m){var n=m.dataProcessor,o=n&&n.htmlFilter,p=n&&n.dataFilter;if(c)o&&o.addRules({elements:{input:function(q){var r=q.attributes,s=r.type;if(!s)r.type='text';if(s=='checkbox'||s=='radio')r.value=='on'&&delete r.value;}}});if(p)p.addRules({elements:{input:function(q){if(q.attributes.type=='hidden')return m.createFakeParserElement(q,'cke_hidden','hiddenfield');}}});},requires:['image','fakeobjects']});if(c)h.prototype.hasAttribute=e.override(h.prototype.hasAttribute,function(m){return function(n){var q=this;var o=q.$.attributes.getNamedItem(n);if(q.getName()=='input')switch(n){case 'class':return q.$.className.length>0;case 'checked':return!!q.$.checked;case 'value':var p=q.getAttribute('type');return p=='checkbox'||p=='radio'?q.$.value!='on':q.$.value;}return m.apply(q,arguments);};});(function(){var m={canUndo:false,exec:function(o){var p=o.document.createElement('hr'),q=new d.range(o.document);o.insertElement(p);q.moveToPosition(p,4);var r=p.getNext();if(!r||r.type==1&&!r.isEditable())q.fixBlock(true,o.config.enterMode==3?'div':'p');q.select();}},n='horizontalrule';j.add(n,{init:function(o){o.addCommand(n,m);o.ui.addButton('HorizontalRule',{label:o.lang.horizontalrule,command:n});}});})();(function(){var m=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,n='{cke_protected}';function o(T){var U=T.children.length,V=T.children[U-1];while(V&&V.type==3&&!e.trim(V.value))V=T.children[--U];return V;};function p(T,U){var V=T.children,W=o(T);if(W){if((U||!c)&&W.type==1&&W.name=='br')V.pop();if(W.type==3&&m.test(W.value))V.pop();}};function q(T,U,V){if(!U&&(!V||typeof V=='function'&&V(T)===false))return false;if(U&&c&&(document.documentMode>7||T.name in f.tr||T.name in f.$listItem))return false;var W=o(T);return!W||W&&(W.type==1&&W.name=='br'||T.name=='form'&&W.name=='input');};function r(T,U){return function(V){p(V,!T);if(q(V,!T,U))if(T||c)V.add(new a.htmlParser.text('\xa0'));else V.add(new a.htmlParser.element('br',{}));};};var s=f,t=['caption','colgroup','col','thead','tfoot','tbody'],u=e.extend({},s.$block,s.$listItem,s.$tableContent);for(var v in u){if(!('br' in s[v]))delete u[v];}delete u.pre;var w={elements:{},attributeNames:[[/^on/,'data-cke-pa-on']]},x={elements:{}};for(v in u)x.elements[v]=r();var y={elementNames:[[/^cke:/,''],[/^\?xml:namespace$/,'']],attributeNames:[[/^data-cke-(saved|pa)-/,''],[/^data-cke-.*/,''],['hidefocus','']],elements:{$:function(T){var U=T.attributes;
if(U){if(U['data-cke-temp'])return false;var V=['name','href','src'],W;for(var X=0;X<V.length;X++){W='data-cke-saved-'+V[X];W in U&&delete U[V[X]];}}return T;},table:function(T){var U=T.children;U.sort(function(V,W){return V.type==1&&W.type==V.type?e.indexOf(t,V.name)>e.indexOf(t,W.name)?1:-1:0;});},embed:function(T){var U=T.parent;if(U&&U.name=='object'){var V=U.attributes.width,W=U.attributes.height;V&&(T.attributes.width=V);W&&(T.attributes.height=W);}},param:function(T){T.children=[];T.isEmpty=true;return T;},a:function(T){if(!(T.children.length||T.attributes.name||T.attributes['data-cke-saved-name']))return false;},span:function(T){if(T.attributes['class']=='Apple-style-span')delete T.name;},pre:function(T){c&&p(T);},html:function(T){delete T.attributes.contenteditable;delete T.attributes['class'];},body:function(T){delete T.attributes.spellcheck;delete T.attributes.contenteditable;},style:function(T){var U=T.children[0];U&&U.value&&(U.value=e.trim(U.value));if(!T.attributes.type)T.attributes.type='text/css';},title:function(T){var U=T.children[0];U&&(U.value=T.attributes['data-cke-title']||'');}},attributes:{'class':function(T,U){return e.ltrim(T.replace(/(?:^|\s+)cke_[^\s]*/g,''))||false;}}};if(c)y.attributes.style=function(T,U){return T.replace(/(^|;)([^\:]+)/g,function(V){return V.toLowerCase();});};function z(T){var U=T.attributes;if(U.contenteditable!='false')U['data-cke-editable']=U.contenteditable?'true':1;U.contenteditable='false';};function A(T){var U=T.attributes;switch(U['data-cke-editable']){case 'true':U.contenteditable='true';break;case '1':delete U.contenteditable;break;}};for(v in {input:1,textarea:1}){w.elements[v]=z;y.elements[v]=A;}var B=/<(a|area|img|input)\b([^>]*)>/gi,C=/\b(on\w+|href|src|name)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi,D=/(?:<style(?=[ >])[^>]*>[\s\S]*<\/style>)|(?:<(:?link|meta|base)[^>]*>)/gi,E=/<cke:encoded>([^<]*)<\/cke:encoded>/gi,F=/(<\/?)((?:object|embed|param|html|body|head|title)[^>]*>)/gi,G=/(<\/?)cke:((?:html|body|head|title)[^>]*>)/gi,H=/<cke:(param|embed)([^>]*?)\/?>(?!\s*<\/cke:\1)/gi;function I(T){return T.replace(B,function(U,V,W){return '<'+V+W.replace(C,function(X,Y){if(!/^on/.test(Y)&&W.indexOf('data-cke-saved-'+Y)==-1)return ' data-cke-saved-'+X+' '+X;return X;})+'>';});};function J(T){return T.replace(D,function(U){return '<cke:encoded>'+encodeURIComponent(U)+'</cke:encoded>';});};function K(T){return T.replace(E,function(U,V){return decodeURIComponent(V);});};function L(T){return T.replace(F,'$1cke:$2');
};function M(T){return T.replace(G,'$1$2');};function N(T){return T.replace(H,'<cke:$1$2></cke:$1>');};function O(T){return T.replace(/(<pre\b[^>]*>)(\r\n|\n)/g,'$1$2$2');};function P(T){return T.replace(/<!--(?!{cke_protected})[\s\S]+?-->/g,function(U){return '<!--'+n+'{C}'+encodeURIComponent(U).replace(/--/g,'%2D%2D')+'-->';});};function Q(T){return T.replace(/<!--\{cke_protected\}\{C\}([\s\S]+?)-->/g,function(U,V){return decodeURIComponent(V);});};function R(T,U){var V=U._.dataStore;return T.replace(/<!--\{cke_protected\}([\s\S]+?)-->/g,function(W,X){return decodeURIComponent(X);}).replace(/\{cke_protected_(\d+)\}/g,function(W,X){return V&&V[X]||'';});};function S(T,U){var V=[],W=U.config.protectedSource,X=U._.dataStore||(U._.dataStore={id:1}),Y=/<\!--\{cke_temp(comment)?\}(\d*?)-->/g,Z=[/<script[\s\S]*?<\/script>/gi,/<noscript[\s\S]*?<\/noscript>/gi].concat(W);T=T.replace(/<!--[\s\S]*?-->/g,function(ab){return '<!--{cke_tempcomment}'+(V.push(ab)-1)+'-->';});for(var aa=0;aa<Z.length;aa++)T=T.replace(Z[aa],function(ab){ab=ab.replace(Y,function(ac,ad,ae){return V[ae];});return/cke_temp(comment)?/.test(ab)?ab:'<!--{cke_temp}'+(V.push(ab)-1)+'-->';});T=T.replace(Y,function(ab,ac,ad){return '<!--'+n+(ac?'{C}':'')+encodeURIComponent(V[ad]).replace(/--/g,'%2D%2D')+'-->';});return T.replace(/(['"]).*?\1/g,function(ab){return ab.replace(/<!--\{cke_protected\}([\s\S]+?)-->/g,function(ac,ad){X[X.id]=decodeURIComponent(ad);return '{cke_protected_'+X.id++ +'}';});});};j.add('htmldataprocessor',{requires:['htmlwriter'],init:function(T){var U=T.dataProcessor=new a.htmlDataProcessor(T);U.writer.forceSimpleAmpersand=T.config.forceSimpleAmpersand;U.dataFilter.addRules(w);U.dataFilter.addRules(x);U.htmlFilter.addRules(y);var V={elements:{}};for(v in u)V.elements[v]=r(true,T.config.fillEmptyBlocks);U.htmlFilter.addRules(V);},onLoad:function(){!('fillEmptyBlocks' in i)&&(i.fillEmptyBlocks=1);}});a.htmlDataProcessor=function(T){var U=this;U.editor=T;U.writer=new a.htmlWriter();U.dataFilter=new a.htmlParser.filter();U.htmlFilter=new a.htmlParser.filter();};a.htmlDataProcessor.prototype={toHtml:function(T,U){T=S(T,this.editor);T=I(T);T=J(T);T=L(T);T=N(T);T=O(T);var V=new h('div');V.setHtml('a'+T);T=V.getHtml().substr(1);T=M(T);T=K(T);T=Q(T);var W=a.htmlParser.fragment.fromHtml(T,U),X=new a.htmlParser.basicWriter();W.writeHtml(X,this.dataFilter);T=X.getHtml(true);T=P(T);return T;},toDataFormat:function(T,U){var V=this.writer,W=a.htmlParser.fragment.fromHtml(T,U);V.reset();W.writeHtml(V,this.htmlFilter);
var X=V.getHtml(true);X=Q(X);X=R(X,this.editor);return X;}};})();(function(){j.add('iframe',{requires:['dialog','fakeobjects'],init:function(m){var n='iframe',o=m.lang.iframe;a.dialog.add(n,this.path+'dialogs/iframe.js');m.addCommand(n,new a.dialogCommand(n));m.addCss('img.cke_iframe{background-image: url('+a.getUrl(this.path+'images/placeholder.png')+');'+'background-position: center center;'+'background-repeat: no-repeat;'+'border: 1px solid #a9a9a9;'+'width: 80px;'+'height: 80px;'+'}');m.ui.addButton('Iframe',{label:o.toolbar,command:n});m.on('doubleclick',function(p){var q=p.data.element;if(q.is('img')&&q.data('cke-real-element-type')=='iframe')p.data.dialog='iframe';});if(m.addMenuItems)m.addMenuItems({iframe:{label:o.title,command:'iframe',group:'image'}});if(m.contextMenu)m.contextMenu.addListener(function(p,q){if(p&&p.is('img')&&p.data('cke-real-element-type')=='iframe')return{iframe:2};});},afterInit:function(m){var n=m.dataProcessor,o=n&&n.dataFilter;if(o)o.addRules({elements:{iframe:function(p){return m.createFakeParserElement(p,'cke_iframe','iframe',true);}}});}});})();j.add('image',{init:function(m){var n='image';a.dialog.add(n,this.path+'dialogs/image.js');m.addCommand(n,new a.dialogCommand(n));m.ui.addButton('Image',{label:m.lang.common.image,command:n});m.on('doubleclick',function(o){var p=o.data.element;if(p.is('img')&&!p.data('cke-realelement')&&!p.isReadOnly())o.data.dialog='image';});if(m.addMenuItems)m.addMenuItems({image:{label:m.lang.image.menu,command:'image',group:'image'}});if(m.contextMenu)m.contextMenu.addListener(function(o,p){if(!o||!o.is('img')||o.data('cke-realelement')||o.isReadOnly())return null;return{image:2};});}});i.image_removeLinkByEmptyURL=true;(function(){var m={ol:1,ul:1},n=d.walker.whitespaces(true),o=d.walker.bookmark(false,true);function p(t){var B=this;if(t.editor.readOnly)return null;var u=t.editor,v=t.data.path,w=v&&v.contains(m),x=v.block||v.blockLimit;if(w)return B.setState(2);if(!B.useIndentClasses&&B.name=='indent')return B.setState(2);if(!x)return B.setState(0);if(B.useIndentClasses){var y=x.$.className.match(B.classNameRegex),z=0;if(y){y=y[1];z=B.indentClassMap[y];}if(B.name=='outdent'&&!z||B.name=='indent'&&z==u.config.indentClasses.length)return B.setState(0);return B.setState(2);}else{var A=parseInt(x.getStyle(r(x)),10);if(isNaN(A))A=0;if(A<=0)return B.setState(0);return B.setState(2);}};function q(t,u){var w=this;w.name=u;w.useIndentClasses=t.config.indentClasses&&t.config.indentClasses.length>0;if(w.useIndentClasses){w.classNameRegex=new RegExp('(?:^|\\s+)('+t.config.indentClasses.join('|')+')(?=$|\\s)');
w.indentClassMap={};for(var v=0;v<t.config.indentClasses.length;v++)w.indentClassMap[t.config.indentClasses[v]]=v+1;}w.startDisabled=u=='outdent';};function r(t,u){return(u||t.getComputedStyle('direction'))=='ltr'?'margin-left':'margin-right';};function s(t){return t.type==1&&t.is('li');};q.prototype={exec:function(t){var u=this,v={};function w(M){var N=C.startContainer,O=C.endContainer;while(N&&!N.getParent().equals(M))N=N.getParent();while(O&&!O.getParent().equals(M))O=O.getParent();if(!N||!O)return;var P=N,Q=[],R=false;while(!R){if(P.equals(O))R=true;Q.push(P);P=P.getNext();}if(Q.length<1)return;var S=M.getParents(true);for(var T=0;T<S.length;T++){if(S[T].getName&&m[S[T].getName()]){M=S[T];break;}}var U=u.name=='indent'?1:-1,V=Q[0],W=Q[Q.length-1],X=j.list.listToArray(M,v),Y=X[W.getCustomData('listarray_index')].indent;for(T=V.getCustomData('listarray_index');T<=W.getCustomData('listarray_index');T++){X[T].indent+=U;var Z=X[T].parent;X[T].parent=new h(Z.getName(),Z.getDocument());}for(T=W.getCustomData('listarray_index')+1;T<X.length&&X[T].indent>Y;T++)X[T].indent+=U;var aa=j.list.arrayToList(X,v,null,t.config.enterMode,M.getDirection());if(u.name=='outdent'){var ab;if((ab=M.getParent())&&ab.is('li')){var ac=aa.listNode.getChildren(),ad=[],ae=ac.count(),af;for(T=ae-1;T>=0;T--){if((af=ac.getItem(T))&&af.is&&af.is('li'))ad.push(af);}}}if(aa)aa.listNode.replace(M);if(ad&&ad.length)for(T=0;T<ad.length;T++){var ag=ad[T],ah=ag;while((ah=ah.getNext())&&ah.is&&ah.getName() in m){if(c&&!ag.getFirst(function(ai){return n(ai)&&o(ai);}))ag.append(C.document.createText('\xa0'));ag.append(ah);}ag.insertAfter(ab);}};function x(){var M=C.createIterator(),N=t.config.enterMode;M.enforceRealBlocks=true;M.enlargeBr=N!=2;var O;while(O=M.getNextParagraph(N==1?'p':'div'))y(O);};function y(M,N){if(M.getCustomData('indent_processed'))return false;if(u.useIndentClasses){var O=M.$.className.match(u.classNameRegex),P=0;if(O){O=O[1];P=u.indentClassMap[O];}if(u.name=='outdent')P--;else P++;if(P<0)return false;P=Math.min(P,t.config.indentClasses.length);P=Math.max(P,0);M.$.className=e.ltrim(M.$.className.replace(u.classNameRegex,''));if(P>0)M.addClass(t.config.indentClasses[P-1]);}else{var Q=r(M,N),R=parseInt(M.getStyle(Q),10);if(isNaN(R))R=0;var S=t.config.indentOffset||40;R+=(u.name=='indent'?1:-1)*S;if(R<0)return false;R=Math.max(R,0);R=Math.ceil(R/S)*S;M.setStyle(Q,R?R+(t.config.indentUnit||'px'):'');if(M.getAttribute('style')==='')M.removeAttribute('style');}h.setMarker(v,M,'indent_processed',1);
return true;};var z=t.getSelection(),A=z.createBookmarks(1),B=z&&z.getRanges(1),C,D=B.createIterator();while(C=D.getNextRange()){var E=C.getCommonAncestor(),F=E;while(F&&!(F.type==1&&m[F.getName()]))F=F.getParent();if(!F){var G=C.getEnclosedNode();if(G&&G.type==1&&G.getName() in m){C.setStartAt(G,1);C.setEndAt(G,2);F=G;}}if(F&&C.startContainer.type==1&&C.startContainer.getName() in m){var H=new d.walker(C);H.evaluator=s;C.startContainer=H.next();}if(F&&C.endContainer.type==1&&C.endContainer.getName() in m){H=new d.walker(C);H.evaluator=s;C.endContainer=H.previous();}if(F){var I=F.getFirst(s),J=!!I.getNext(s),K=C.startContainer,L=I.equals(K)||I.contains(K);if(!(L&&(u.name=='indent'||u.useIndentClasses||parseInt(F.getStyle(r(F)),10))&&y(F,!J&&I.getDirection())))w(F);}else x();}h.clearAllMarkers(v);t.forceNextSelectionCheck();z.selectBookmarks(A);}};j.add('indent',{init:function(t){var u=t.addCommand('indent',new q(t,'indent')),v=t.addCommand('outdent',new q(t,'outdent'));t.ui.addButton('Indent',{label:t.lang.indent,command:'indent'});t.ui.addButton('Outdent',{label:t.lang.outdent,command:'outdent'});t.on('selectionChange',e.bind(p,u));t.on('selectionChange',e.bind(p,v));if(b.ie6Compat||b.ie7Compat)t.addCss('ul,ol{\tmargin-left: 0px;\tpadding-left: 40px;}');t.on('dirChanged',function(w){var x=new d.range(t.document);x.setStartBefore(w.data.node);x.setEndAfter(w.data.node);var y=new d.walker(x),z;while(z=y.next()){if(z.type==1){if(!z.equals(w.data.node)&&z.getDirection()){x.setStartAfter(z);y=new d.walker(x);continue;}var A=t.config.indentClasses;if(A){var B=w.data.dir=='ltr'?['_rtl','']:['','_rtl'];for(var C=0;C<A.length;C++){if(z.hasClass(A[C]+B[0])){z.removeClass(A[C]+B[0]);z.addClass(A[C]+B[1]);}}}var D=z.getStyle('margin-right'),E=z.getStyle('margin-left');D?z.setStyle('margin-left',D):z.removeStyle('margin-left');E?z.setStyle('margin-right',E):z.removeStyle('margin-right');}}});},requires:['domiterator','list']});})();(function(){function m(r,s){var t=s.block||s.blockLimit;if(!t||t.getName()=='body')return 2;return n(t,r.config.useComputedState)==this.value?1:2;};function n(r,s){s=s===undefined||s;var t;if(s)t=r.getComputedStyle('text-align');else{while(!r.hasAttribute||!(r.hasAttribute('align')||r.getStyle('text-align'))){var u=r.getParent();if(!u)break;r=u;}t=r.getStyle('text-align')||r.getAttribute('align')||'';}t&&(t=t.replace(/-moz-|-webkit-|start|auto/i,''));!t&&s&&(t=r.getComputedStyle('direction')=='rtl'?'right':'left');return t;};function o(r){if(r.editor.readOnly)return;
var s=r.editor.getCommand(this.name);s.state=m.call(this,r.editor,r.data.path);s.fire('state');};function p(r,s,t){var v=this;v.name=s;v.value=t;var u=r.config.justifyClasses;if(u){switch(t){case 'left':v.cssClassName=u[0];break;case 'center':v.cssClassName=u[1];break;case 'right':v.cssClassName=u[2];break;case 'justify':v.cssClassName=u[3];break;}v.cssClassRegex=new RegExp('(?:^|\\s+)(?:'+u.join('|')+')(?=$|\\s)');}};function q(r){var s=r.editor,t=new d.range(s.document);t.setStartBefore(r.data.node);t.setEndAfter(r.data.node);var u=new d.walker(t),v;while(v=u.next()){if(v.type==1){if(!v.equals(r.data.node)&&v.getDirection()){t.setStartAfter(v);u=new d.walker(t);continue;}var w=s.config.justifyClasses;if(w)if(v.hasClass(w[0])){v.removeClass(w[0]);v.addClass(w[2]);}else if(v.hasClass(w[2])){v.removeClass(w[2]);v.addClass(w[0]);}var x='text-align',y=v.getStyle(x);if(y=='left')v.setStyle(x,'right');else if(y=='right')v.setStyle(x,'left');}}};p.prototype={exec:function(r){var D=this;var s=r.getSelection(),t=r.config.enterMode;if(!s)return;var u=s.createBookmarks(),v=s.getRanges(true),w=D.cssClassName,x,y,z=r.config.useComputedState;z=z===undefined||z;for(var A=v.length-1;A>=0;A--){x=v[A].createIterator();x.enlargeBr=t!=2;while(y=x.getNextParagraph(t==1?'p':'div')){y.removeAttribute('align');y.removeStyle('text-align');var B=w&&(y.$.className=e.ltrim(y.$.className.replace(D.cssClassRegex,''))),C=D.state==2&&(!z||n(y,true)!=D.value);if(w){if(C)y.addClass(w);else if(!B)y.removeAttribute('class');}else if(C)y.setStyle('text-align',D.value);}}r.focus();r.forceNextSelectionCheck();s.selectBookmarks(u);}};j.add('justify',{init:function(r){var s=new p(r,'justifyleft','left'),t=new p(r,'justifycenter','center'),u=new p(r,'justifyright','right'),v=new p(r,'justifyblock','justify');r.addCommand('justifyleft',s);r.addCommand('justifycenter',t);r.addCommand('justifyright',u);r.addCommand('justifyblock',v);r.ui.addButton('JustifyLeft',{label:r.lang.justify.left,command:'justifyleft'});r.ui.addButton('JustifyCenter',{label:r.lang.justify.center,command:'justifycenter'});r.ui.addButton('JustifyRight',{label:r.lang.justify.right,command:'justifyright'});r.ui.addButton('JustifyBlock',{label:r.lang.justify.block,command:'justifyblock'});r.on('selectionChange',e.bind(o,s));r.on('selectionChange',e.bind(o,u));r.on('selectionChange',e.bind(o,t));r.on('selectionChange',e.bind(o,v));r.on('dirChanged',q);},requires:['domiterator']});})();j.add('keystrokes',{beforeInit:function(m){m.keystrokeHandler=new a.keystrokeHandler(m);
m.specialKeys={};},init:function(m){var n=m.config.keystrokes,o=m.config.blockedKeystrokes,p=m.keystrokeHandler.keystrokes,q=m.keystrokeHandler.blockedKeystrokes;for(var r=0;r<n.length;r++)p[n[r][0]]=n[r][1];for(r=0;r<o.length;r++)q[o[r]]=1;}});a.keystrokeHandler=function(m){var n=this;if(m.keystrokeHandler)return m.keystrokeHandler;n.keystrokes={};n.blockedKeystrokes={};n._={editor:m};return n;};(function(){var m,n=function(p){p=p.data;var q=p.getKeystroke(),r=this.keystrokes[q],s=this._.editor;m=s.fire('key',{keyCode:q})===true;if(!m){if(r){var t={from:'keystrokeHandler'};m=s.execCommand(r,t)!==false;}if(!m){var u=s.specialKeys[q];m=u&&u(s)===true;if(!m)m=!!this.blockedKeystrokes[q];}}if(m)p.preventDefault(true);return!m;},o=function(p){if(m){m=false;p.data.preventDefault(true);}};a.keystrokeHandler.prototype={attach:function(p){p.on('keydown',n,this);if(b.opera||b.gecko&&b.mac)p.on('keypress',o,this);}};})();i.blockedKeystrokes=[1114112+66,1114112+73,1114112+85];i.keystrokes=[[4456448+121,'toolbarFocus'],[4456448+122,'elementsPathFocus'],[2228224+121,'contextMenu'],[1114112+2228224+121,'contextMenu'],[1114112+90,'undo'],[1114112+89,'redo'],[1114112+2228224+90,'redo'],[1114112+76,'link'],[1114112+66,'bold'],[1114112+73,'italic'],[1114112+85,'underline'],[4456448+(c||b.webkit?189:109),'toolbarCollapse'],[4456448+48,'a11yHelp']];j.add('link',{init:function(m){m.addCommand('link',new a.dialogCommand('link'));m.addCommand('anchor',new a.dialogCommand('anchor'));m.addCommand('unlink',new a.unlinkCommand());m.addCommand('removeAnchor',new a.removeAnchorCommand());m.ui.addButton('Link',{label:m.lang.link.toolbar,command:'link'});m.ui.addButton('Unlink',{label:m.lang.unlink,command:'unlink'});m.ui.addButton('Anchor',{label:m.lang.anchor.toolbar,command:'anchor'});a.dialog.add('link',this.path+'dialogs/link.js');a.dialog.add('anchor',this.path+'dialogs/anchor.js');var n=m.lang.dir=='rtl'?'right':'left',o='background:url('+a.getUrl(this.path+'images/anchor.gif')+') no-repeat '+n+' center;'+'border:1px dotted #00f;';m.addCss('a.cke_anchor,a.cke_anchor_empty'+(c&&b.version<7?'':',a[name],a[data-cke-saved-name]')+'{'+o+'padding-'+n+':18px;'+'cursor:auto;'+'}'+(c?'a.cke_anchor_empty{display:inline-block;}':'')+'img.cke_anchor'+'{'+o+'width:16px;'+'min-height:15px;'+'height:1.15em;'+'vertical-align:'+(b.opera?'middle':'text-bottom')+';'+'}');m.on('selectionChange',function(p){if(m.readOnly)return;var q=m.getCommand('unlink'),r=p.data.path.lastElement&&p.data.path.lastElement.getAscendant('a',true);
if(r&&r.getName()=='a'&&r.getAttribute('href')&&r.getChildCount())q.setState(2);else q.setState(0);});m.on('doubleclick',function(p){var q=j.link.getSelectedLink(m)||p.data.element;if(!q.isReadOnly())if(q.is('a')){p.data.dialog=q.getAttribute('name')&&(!q.getAttribute('href')||!q.getChildCount())?'anchor':'link';m.getSelection().selectElement(q);}else if(j.link.tryRestoreFakeAnchor(m,q))p.data.dialog='anchor';});if(m.addMenuItems)m.addMenuItems({anchor:{label:m.lang.anchor.menu,command:'anchor',group:'anchor',order:1},removeAnchor:{label:m.lang.anchor.remove,command:'removeAnchor',group:'anchor',order:5},link:{label:m.lang.link.menu,command:'link',group:'link',order:1},unlink:{label:m.lang.unlink,command:'unlink',group:'link',order:5}});if(m.contextMenu)m.contextMenu.addListener(function(p,q){if(!p||p.isReadOnly())return null;var r=j.link.tryRestoreFakeAnchor(m,p);if(!r&&!(r=j.link.getSelectedLink(m)))return null;var s={};if(r.getAttribute('href')&&r.getChildCount())s={link:2,unlink:2};if(r&&r.hasAttribute('name'))s.anchor=s.removeAnchor=2;return s;});},afterInit:function(m){var n=m.dataProcessor,o=n&&n.dataFilter,p=n&&n.htmlFilter,q=m._.elementsPath&&m._.elementsPath.filters;if(o)o.addRules({elements:{a:function(r){var s=r.attributes;if(!s.name)return null;var t=!r.children.length;if(j.link.synAnchorSelector){var u=t?'cke_anchor_empty':'cke_anchor',v=s['class'];if(s.name&&(!v||v.indexOf(u)<0))s['class']=(v||'')+' '+u;if(t&&j.link.emptyAnchorFix){s.contenteditable='false';s['data-cke-editable']=1;}}else if(j.link.fakeAnchor&&t)return m.createFakeParserElement(r,'cke_anchor','anchor');return null;}}});if(j.link.emptyAnchorFix&&p)p.addRules({elements:{a:function(r){delete r.attributes.contenteditable;}}});if(q)q.push(function(r,s){if(s=='a')if(j.link.tryRestoreFakeAnchor(m,r)||r.getAttribute('name')&&(!r.getAttribute('href')||!r.getChildCount()))return 'anchor';});},requires:['fakeobjects']});j.link={getSelectedLink:function(m){try{var n=m.getSelection();if(n.getType()==3){var o=n.getSelectedElement();if(o.is('a'))return o;}var p=n.getRanges(true)[0];p.shrink(2);var q=p.getCommonAncestor();return q.getAscendant('a',true);}catch(r){return null;}},fakeAnchor:b.opera||b.webkit,synAnchorSelector:c,emptyAnchorFix:c&&b.version<8,tryRestoreFakeAnchor:function(m,n){if(n&&n.data('cke-real-element-type')&&n.data('cke-real-element-type')=='anchor'){var o=m.restoreRealElement(n);if(o.data('cke-saved-name'))return o;}}};a.unlinkCommand=function(){};a.unlinkCommand.prototype={exec:function(m){var n=m.getSelection(),o=n.createBookmarks(),p=n.getRanges(),q,r;
for(var s=0;s<p.length;s++){q=p[s].getCommonAncestor(true);r=q.getAscendant('a',true);if(!r)continue;p[s].selectNodeContents(r);}n.selectRanges(p);m.document.$.execCommand('unlink',false,null);n.selectBookmarks(o);},startDisabled:true};a.removeAnchorCommand=function(){};a.removeAnchorCommand.prototype={exec:function(m){var n=m.getSelection(),o=n.createBookmarks(),p;if(n&&(p=n.getSelectedElement())&&(j.link.fakeAnchor&&!p.getChildCount()?j.link.tryRestoreFakeAnchor(m,p):p.is('a')))p.remove(1);else if(p=j.link.getSelectedLink(m))if(p.hasAttribute('href')){p.removeAttributes({name:1,'data-cke-saved-name':1});p.removeClass('cke_anchor');}else p.remove(1);n.selectBookmarks(o);}};e.extend(i,{linkShowAdvancedTab:true,linkShowTargetTab:true});(function(){var m={ol:1,ul:1},n=/^[\n\r\t ]*$/,o=d.walker.whitespaces(),p=d.walker.bookmark(),q=function(G){return!(o(G)||p(G));};function r(G){var H,I,J;if(H=G.getDirection()){I=G.getParent();while(I&&!(J=I.getDirection()))I=I.getParent();if(H==J)G.removeAttribute('dir');}};j.list={listToArray:function(G,H,I,J,K){if(!m[G.getName()])return[];if(!J)J=0;if(!I)I=[];for(var L=0,M=G.getChildCount();L<M;L++){var N=G.getChild(L);if(N.type==1&&N.getName() in f.$list)j.list.listToArray(N,H,I,J+1);if(N.$.nodeName.toLowerCase()!='li')continue;var O={parent:G,indent:J,element:N,contents:[]};if(!K){O.grandparent=G.getParent();if(O.grandparent&&O.grandparent.$.nodeName.toLowerCase()=='li')O.grandparent=O.grandparent.getParent();}else O.grandparent=K;if(H)h.setMarker(H,N,'listarray_index',I.length);I.push(O);for(var P=0,Q=N.getChildCount(),R;P<Q;P++){R=N.getChild(P);if(R.type==1&&m[R.getName()])j.list.listToArray(R,H,I,J+1,O.grandparent);else O.contents.push(R);}}return I;},arrayToList:function(G,H,I,J,K){if(!I)I=0;if(!G||G.length<I+1)return null;var L=G[I].parent.getDocument(),M=new d.documentFragment(L),N=null,O=I,P=Math.max(G[I].indent,0),Q=null,R,S=J==1?'p':'div';while(1){var T=G[O];R=T.element.getDirection(1);if(T.indent==P){if(!N||G[O].parent.getName()!=N.getName()){N=G[O].parent.clone(false,1);K&&N.setAttribute('dir',K);M.append(N);}Q=N.append(T.element.clone(0,1));if(R!=N.getDirection(1))Q.setAttribute('dir',R);for(var U=0;U<T.contents.length;U++)Q.append(T.contents[U].clone(1,1));O++;}else if(T.indent==Math.max(P,0)+1){var V=G[O-1].element.getDirection(1),W=j.list.arrayToList(G,null,O,J,V!=R?R:null);if(!Q.getChildCount()&&c&&!(L.$.documentMode>7))Q.append(L.createText('\xa0'));Q.append(W.listNode);O=W.nextIndex;}else if(T.indent==-1&&!I&&T.grandparent){if(m[T.grandparent.getName()])Q=T.element.clone(false,true);
else if(K||T.element.hasAttributes()||J!=2){Q=L.createElement(S);T.element.copyAttributes(Q,{type:1,value:1});if(!K&&J==2&&!Q.hasAttributes())Q=new d.documentFragment(L);}else Q=new d.documentFragment(L);if(Q.type==1)if(T.grandparent.getDirection(1)!=R)Q.setAttribute('dir',R);for(U=0;U<T.contents.length;U++)Q.append(T.contents[U].clone(1,1));if(Q.type==11&&O!=G.length-1){var X=Q.getLast();if(X&&X.type==1&&X.getAttribute('type')=='_moz')X.remove();if(!(X=Q.getLast(q)&&X.type==1&&X.getName() in f.$block))Q.append(L.createElement('br'));}if(Q.type==1&&Q.getName()==S&&Q.$.firstChild){Q.trim();var Y=Q.getFirst();if(Y.type==1&&Y.isBlockBoundary()){var Z=new d.documentFragment(L);Q.moveChildren(Z);Q=Z;}}var aa=Q.$.nodeName.toLowerCase();if(!c&&(aa=='div'||aa=='p'))Q.appendBogus();M.append(Q);N=null;O++;}else return null;if(G.length<=O||Math.max(G[O].indent,0)<P)break;}if(H){var ab=M.getFirst(),ac=G[0].parent;while(ab){if(ab.type==1){h.clearMarkers(H,ab);if(ab.getName() in f.$listItem)r(ab);}ab=ab.getNextSourceNode();}}return{listNode:M,nextIndex:O};}};function s(G){if(G.editor.readOnly)return null;var H=G.data.path,I=H.blockLimit,J=H.elements,K,L;for(L=0;L<J.length&&(K=J[L])&&!K.equals(I);L++){if(m[J[L].getName()])return this.setState(this.type==J[L].getName()?1:2);}return this.setState(2);};function t(G,H,I,J){var K=j.list.listToArray(H.root,I),L=[];for(var M=0;M<H.contents.length;M++){var N=H.contents[M];N=N.getAscendant('li',true);if(!N||N.getCustomData('list_item_processed'))continue;L.push(N);h.setMarker(I,N,'list_item_processed',true);}var O=H.root,P=O.getDocument().createElement(this.type);O.copyAttributes(P,{start:1,type:1});P.removeStyle('list-style-type');for(M=0;M<L.length;M++){var Q=L[M].getCustomData('listarray_index');K[Q].parent=P;}var R=j.list.arrayToList(K,I,null,G.config.enterMode),S,T=R.listNode.getChildCount();for(M=0;M<T&&(S=R.listNode.getChild(M));M++){if(S.getName()==this.type)J.push(S);}R.listNode.replace(H.root);};var u=/^h[1-6]$/;function v(G,H,I){var J=H.contents,K=H.root.getDocument(),L=[];if(J.length==1&&J[0].equals(H.root)){var M=K.createElement('div');J[0].moveChildren&&J[0].moveChildren(M);J[0].append(M);J[0]=M;}var N=H.contents[0].getParent();for(var O=0;O<J.length;O++)N=N.getCommonAncestor(J[O].getParent());var P=G.config.useComputedState,Q,R;P=P===undefined||P;for(O=0;O<J.length;O++){var S=J[O],T;while(T=S.getParent()){if(T.equals(N)){L.push(S);if(!R&&S.getDirection())R=1;var U=S.getDirection(P);if(Q!==null)if(Q&&Q!=U)Q=null;else Q=U;
break;}S=T;}}if(L.length<1)return;var V=L[L.length-1].getNext(),W=K.createElement(this.type);I.push(W);var X,Y;while(L.length){X=L.shift();Y=K.createElement('li');if(X.is('pre')||u.test(X.getName()))X.appendTo(Y);else{X.copyAttributes(Y);if(Q&&X.getDirection()){Y.removeStyle('direction');Y.removeAttribute('dir');}X.moveChildren(Y);X.remove();}Y.appendTo(W);}if(Q&&R)W.setAttribute('dir',Q);if(V)W.insertBefore(V);else W.appendTo(N);};function w(G,H,I){var J=j.list.listToArray(H.root,I),K=[];for(var L=0;L<H.contents.length;L++){var M=H.contents[L];M=M.getAscendant('li',true);if(!M||M.getCustomData('list_item_processed'))continue;K.push(M);h.setMarker(I,M,'list_item_processed',true);}var N=null;for(L=0;L<K.length;L++){var O=K[L].getCustomData('listarray_index');J[O].indent=-1;N=O;}for(L=N+1;L<J.length;L++){if(J[L].indent>J[L-1].indent+1){var P=J[L-1].indent+1-J[L].indent,Q=J[L].indent;while(J[L]&&J[L].indent>=Q){J[L].indent+=P;L++;}L--;}}var R=j.list.arrayToList(J,I,null,G.config.enterMode,H.root.getAttribute('dir')),S=R.listNode,T,U;function V(W){if((T=S[W?'getFirst':'getLast']())&&!(T.is&&T.isBlockBoundary())&&(U=H.root[W?'getPrevious':'getNext'](d.walker.whitespaces(true)))&&!(U.is&&U.isBlockBoundary({br:1})))G.document.createElement('br')[W?'insertBefore':'insertAfter'](T);};V(true);V();S.replace(H.root);};function x(G,H){this.name=G;this.type=H;};function y(G){var H=G.getDirection();if(H){for(var I=0,J=G.getChildren(),K;K=J.getItem(I),I<J.count();I++){if(K.type==1&&K.is('li')&&!K.getDirection())K.setAttribute('dir',H);}G.removeAttribute('dir');}};x.prototype={exec:function(G){var H=G.document,I=G.config,J=G.getSelection(),K=J&&J.getRanges(true);if(!K||K.length<1)return;if(this.state==2){var L=H.getBody();if(!L.getFirst(q)){I.enterMode==2?L.appendBogus():K[0].fixBlock(1,I.enterMode==1?'p':'div');J.selectRanges(K);}else{var M=K.length==1&&K[0],N=M&&M.getEnclosedNode();if(N&&N.is&&this.type==N.getName())this.setState(1);}}var O=J.createBookmarks(true),P=[],Q={},R=K.createIterator(),S=0;while((M=R.getNextRange())&&++S){var T=M.getBoundaryNodes(),U=T.startNode,V=T.endNode;if(U.type==1&&U.getName()=='td')M.setStartAt(T.startNode,1);if(V.type==1&&V.getName()=='td')M.setEndAt(T.endNode,2);var W=M.createIterator(),X;W.forceBrBreak=this.state==2;while(X=W.getNextParagraph()){if(X.getCustomData('list_block'))continue;else h.setMarker(Q,X,'list_block',1);var Y=new d.elementPath(X),Z=Y.elements,aa=Z.length,ab=null,ac=0,ad=Y.blockLimit,ae;for(var af=aa-1;af>=0&&(ae=Z[af]);
af--){if(m[ae.getName()]&&ad.contains(ae)){ad.removeCustomData('list_group_object_'+S);var ag=ae.getCustomData('list_group_object');if(ag)ag.contents.push(X);else{ag={root:ae,contents:[X]};P.push(ag);h.setMarker(Q,ae,'list_group_object',ag);}ac=1;break;}}if(ac)continue;var ah=ad;if(ah.getCustomData('list_group_object_'+S))ah.getCustomData('list_group_object_'+S).contents.push(X);else{ag={root:ah,contents:[X]};h.setMarker(Q,ah,'list_group_object_'+S,ag);P.push(ag);}}}var ai=[];while(P.length>0){ag=P.shift();if(this.state==2){if(m[ag.root.getName()])t.call(this,G,ag,Q,ai);else v.call(this,G,ag,ai);}else if(this.state==1&&m[ag.root.getName()])w.call(this,G,ag,Q);}for(af=0;af<ai.length;af++){ab=ai[af];var aj,ak=this;(aj=function(al){var am=ab[al?'getPrevious':'getNext'](d.walker.whitespaces(true));if(am&&am.getName&&am.getName()==ak.type){if(am.getDirection(1)!=ab.getDirection(1))y(ab.getDirection()?ab:am);am.remove();am.moveChildren(ab,al);}})();aj(1);}h.clearAllMarkers(Q);J.selectBookmarks(O);G.focus();}};var z=f,A=/[\t\r\n ]*(?:&nbsp;|\xa0)$/;function B(G,H){var I,J=G.children,K=J.length;for(var L=0;L<K;L++){I=J[L];if(I.name&&I.name in H)return L;}return K;};function C(G){return function(H){var I=H.children,J=B(H,z.$list),K=I[J],L=K&&K.previous,M;if(L&&(L.name&&L.name=='br'||L.value&&(M=L.value.match(A)))){var N=L;if(!(M&&M.index)&&N==I[0])I[0]=G||c?new a.htmlParser.text('\xa0'):new a.htmlParser.element('br',{});else if(N.name=='br')I.splice(J-1,1);else N.value=N.value.replace(A,'');}};};var D={elements:{}};for(var E in z.$listItem)D.elements[E]=C();var F={elements:{}};for(E in z.$listItem)F.elements[E]=C(true);j.add('list',{init:function(G){var H=G.addCommand('numberedlist',new x('numberedlist','ol')),I=G.addCommand('bulletedlist',new x('bulletedlist','ul'));G.ui.addButton('NumberedList',{label:G.lang.numberedlist,command:'numberedlist'});G.ui.addButton('BulletedList',{label:G.lang.bulletedlist,command:'bulletedlist'});G.on('selectionChange',e.bind(s,H));G.on('selectionChange',e.bind(s,I));},afterInit:function(G){var H=G.dataProcessor;if(H){H.dataFilter.addRules(D);H.htmlFilter.addRules(F);}},requires:['domiterator']});})();(function(){j.liststyle={requires:['dialog'],init:function(m){m.addCommand('numberedListStyle',new a.dialogCommand('numberedListStyle'));a.dialog.add('numberedListStyle',this.path+'dialogs/liststyle.js');m.addCommand('bulletedListStyle',new a.dialogCommand('bulletedListStyle'));a.dialog.add('bulletedListStyle',this.path+'dialogs/liststyle.js');
if(m.addMenuItems){m.addMenuGroup('list',108);m.addMenuItems({numberedlist:{label:m.lang.list.numberedTitle,group:'list',command:'numberedListStyle'},bulletedlist:{label:m.lang.list.bulletedTitle,group:'list',command:'bulletedListStyle'}});}if(m.contextMenu)m.contextMenu.addListener(function(n,o){if(!n||n.isReadOnly())return null;while(n){var p=n.getName();if(p=='ol')return{numberedlist:2};else if(p=='ul')return{bulletedlist:2};n=n.getParent();}return null;});}};j.add('liststyle',j.liststyle);})();(function(){function m(s){if(!s||s.type!=1||s.getName()!='form')return[];var t=[],u=['style','className'];for(var v=0;v<u.length;v++){var w=u[v],x=s.$.elements.namedItem(w);if(x){var y=new h(x);t.push([y,y.nextSibling]);y.remove();}}return t;};function n(s,t){if(!s||s.type!=1||s.getName()!='form')return;if(t.length>0)for(var u=t.length-1;u>=0;u--){var v=t[u][0],w=t[u][1];if(w)v.insertBefore(w);else v.appendTo(s);}};function o(s,t){var u=m(s),v={},w=s.$;if(!t){v['class']=w.className||'';w.className='';}v.inline=w.style.cssText||'';if(!t)w.style.cssText='position: static; overflow: visible';n(u);return v;};function p(s,t){var u=m(s),v=s.$;if('class' in t)v.className=t['class'];if('inline' in t)v.style.cssText=t.inline;n(u);};function q(s){var t=a.instances;for(var u in t){var v=t[u];if(v.mode=='wysiwyg'&&!v.readOnly){var w=v.document.getBody();w.setAttribute('contentEditable',false);w.setAttribute('contentEditable',true);}}if(s.focusManager.hasFocus){s.toolbox.focus();s.focus();}};function r(s){if(!c||b.version>6)return null;var t=h.createFromHtml('<iframe frameborder="0" tabindex="-1" src="javascript:void((function(){document.open();'+(b.isCustomDomain()?"document.domain='"+this.getDocument().$.domain+"';":'')+'document.close();'+'})())"'+' style="display:block;position:absolute;z-index:-1;'+'progid:DXImageTransform.Microsoft.Alpha(opacity=0);'+'"></iframe>');return s.append(t,true);};j.add('maximize',{init:function(s){var t=s.lang,u=a.document,v=u.getWindow(),w,x,y,z;function A(){var C=v.getViewPaneSize();z&&z.setStyles({width:C.width+'px',height:C.height+'px'});s.resize(C.width,C.height,null,true);};var B=2;s.addCommand('maximize',{modes:{wysiwyg:!b.iOS,source:!b.iOS},readOnly:1,editorFocus:false,exec:function(){var C=s.container.getChild(1),D=s.getThemeSpace('contents');if(s.mode=='wysiwyg'){var E=s.getSelection();w=E&&E.getRanges();x=v.getScrollPosition();}else{var F=s.textarea.$;w=!c&&[F.selectionStart,F.selectionEnd];x=[F.scrollLeft,F.scrollTop];}if(this.state==2){v.on('resize',A);
y=v.getScrollPosition();var G=s.container;while(G=G.getParent()){G.setCustomData('maximize_saved_styles',o(G));G.setStyle('z-index',s.config.baseFloatZIndex-1);}D.setCustomData('maximize_saved_styles',o(D,true));C.setCustomData('maximize_saved_styles',o(C,true));var H={overflow:b.webkit?'':'hidden',width:0,height:0};u.getDocumentElement().setStyles(H);!b.gecko&&u.getDocumentElement().setStyle('position','fixed');!(b.gecko&&b.quirks)&&u.getBody().setStyles(H);c?setTimeout(function(){v.$.scrollTo(0,0);},0):v.$.scrollTo(0,0);C.setStyle('position',b.gecko&&b.quirks?'fixed':'absolute');C.$.offsetLeft;C.setStyles({'z-index':s.config.baseFloatZIndex-1,left:'0px',top:'0px'});z=r(C);C.addClass('cke_maximized');A();var I=C.getDocumentPosition();C.setStyles({left:-1*I.x+'px',top:-1*I.y+'px'});b.gecko&&q(s);}else if(this.state==1){v.removeListener('resize',A);var J=[D,C];for(var K=0;K<J.length;K++){p(J[K],J[K].getCustomData('maximize_saved_styles'));J[K].removeCustomData('maximize_saved_styles');}G=s.container;while(G=G.getParent()){p(G,G.getCustomData('maximize_saved_styles'));G.removeCustomData('maximize_saved_styles');}c?setTimeout(function(){v.$.scrollTo(y.x,y.y);},0):v.$.scrollTo(y.x,y.y);C.removeClass('cke_maximized');if(b.webkit){C.setStyle('display','inline');setTimeout(function(){C.setStyle('display','block');},0);}if(z){z.remove();z=null;}s.fire('resize');}this.toggleState();var L=this.uiItems[0];if(L){var M=this.state==2?t.maximize:t.minimize,N=s.element.getDocument().getById(L._.id);N.getChild(1).setHtml(M);N.setAttribute('title',M);N.setAttribute('href','javascript:void("'+M+'");');}if(s.mode=='wysiwyg'){if(w){b.gecko&&q(s);s.getSelection().selectRanges(w);var O=s.getSelection().getStartElement();O&&O.scrollIntoView(true);}else v.$.scrollTo(x.x,x.y);}else{if(w){F.selectionStart=w[0];F.selectionEnd=w[1];}F.scrollLeft=x[0];F.scrollTop=x[1];}w=x=null;B=this.state;},canUndo:false});s.ui.addButton('Maximize',{label:t.maximize,command:'maximize'});s.on('mode',function(){var C=s.getCommand('maximize');C.setState(C.state==0?0:B);},null,null,100);}});})();j.add('newpage',{init:function(m){m.addCommand('newpage',{modes:{wysiwyg:1,source:1},exec:function(n){var o=this;n.setData(n.config.newpage_html||'',function(){setTimeout(function(){n.fire('afterCommandExec',{name:o.name,command:o});n.selectionChange();},200);});n.focus();},async:true});m.ui.addButton('NewPage',{label:m.lang.newPage,command:'newpage'});}});j.add('pagebreak',{init:function(m){m.addCommand('pagebreak',j.pagebreakCmd);
m.ui.addButton('PageBreak',{label:m.lang.pagebreak,command:'pagebreak'});var n=['{','background: url('+a.getUrl(this.path+'images/pagebreak.gif')+') no-repeat center center;','clear: both;','width:100%; _width:99.9%;','border-top: #999999 1px dotted;','border-bottom: #999999 1px dotted;','padding:0;','height: 5px;','cursor: default;','}'].join('').replace(/;/g,' !important;');m.addCss('div.cke_pagebreak'+n);b.opera&&m.on('contentDom',function(){m.document.on('click',function(o){var p=o.data.getTarget();if(p.is('div')&&p.hasClass('cke_pagebreak'))m.getSelection().selectElement(p);});});},afterInit:function(m){var n=m.lang.pagebreakAlt,o=m.dataProcessor,p=o&&o.dataFilter,q=o&&o.htmlFilter;if(q)q.addRules({attributes:{'class':function(r,s){var t=r.replace('cke_pagebreak','');if(t!=r){var u=a.htmlParser.fragment.fromHtml('<span style="display: none;">&nbsp;</span>');s.children.length=0;s.add(u);var v=s.attributes;delete v['aria-label'];delete v.contenteditable;delete v.title;}return t;}}},5);if(p)p.addRules({elements:{div:function(r){var s=r.attributes,t=s&&s.style,u=t&&r.children.length==1&&r.children[0],v=u&&u.name=='span'&&u.attributes.style;if(v&&/page-break-after\s*:\s*always/i.test(t)&&/display\s*:\s*none/i.test(v)){s.contenteditable='false';s['class']='cke_pagebreak';s['data-cke-display-name']='pagebreak';s['aria-label']=n;s.title=n;r.children.length=0;}}}});},requires:['fakeobjects']});j.pagebreakCmd={exec:function(m){var n=m.lang.pagebreakAlt,o=h.createFromHtml('<div style="page-break-after: always;"contenteditable="false" title="'+n+'" '+'aria-label="'+n+'" '+'data-cke-display-name="pagebreak" '+'class="cke_pagebreak">'+'</div>',m.document),p=m.getSelection().getRanges(true);m.fire('saveSnapshot');for(var q,r=p.length-1;r>=0;r--){q=p[r];if(r<p.length-1)o=o.clone(true);q.splitBlock('p');q.insertNode(o);if(r==p.length-1){var s=o.getNext();q.moveToPosition(o,4);if(!s||s.type==1&&!s.isEditable())q.fixBlock(true,m.config.enterMode==3?'div':'p');q.select();}}m.fire('saveSnapshot');}};(function(){function m(n){n.data.mode='html';};j.add('pastefromword',{init:function(n){var o=0,p=function(q){q&&q.removeListener();n.removeListener('beforePaste',m);o&&setTimeout(function(){o=0;},0);};n.addCommand('pastefromword',{canUndo:false,exec:function(){o=1;n.on('beforePaste',m);if(n.execCommand('paste','html')===false){n.on('dialogShow',function(q){q.removeListener();q.data.on('cancel',p);});n.on('dialogHide',function(q){q.data.removeListener('cancel',p);});}n.on('afterPaste',p);
}});n.ui.addButton('PasteFromWord',{label:n.lang.pastefromword.toolbar,command:'pastefromword'});n.on('pasteState',function(q){n.getCommand('pastefromword').setState(q.data);});n.on('paste',function(q){var r=q.data,s;if((s=r.html)&&(o||/(class=\"?Mso|style=\"[^\"]*\bmso\-|w:WordDocument)/.test(s))){var t=this.loadFilterRules(function(){if(t)n.fire('paste',r);else if(!n.config.pasteFromWordPromptCleanup||o||confirm(n.lang.pastefromword.confirmCleanup))r.html=a.cleanWord(s,n);});t&&q.cancel();}},this);},loadFilterRules:function(n){var o=a.cleanWord;if(o)n();else{var p=a.getUrl(i.pasteFromWordCleanupFile||this.path+'filter/default.js');a.scriptLoader.load(p,n,null,true);}return!o;},requires:['clipboard']});})();(function(){var m={exec:function(n){var o=e.tryThese(function(){var p=window.clipboardData.getData('Text');if(!p)throw 0;return p;});if(!o){n.openDialog('pastetext');return false;}else n.fire('paste',{text:o});return true;}};j.add('pastetext',{init:function(n){var o='pastetext',p=n.addCommand(o,m);n.ui.addButton('PasteText',{label:n.lang.pasteText.button,command:o});a.dialog.add(o,a.getUrl(this.path+'dialogs/pastetext.js'));if(n.config.forcePasteAsPlainText){n.on('beforeCommandExec',function(q){var r=q.data.commandData;if(q.data.name=='paste'&&r!='html'){n.execCommand('pastetext');q.cancel();}},null,null,0);n.on('beforePaste',function(q){q.data.mode='text';});}n.on('pasteState',function(q){n.getCommand('pastetext').setState(q.data);});},requires:['clipboard']});})();j.add('popup');e.extend(a.editor.prototype,{popup:function(m,n,o,p){n=n||'80%';o=o||'70%';if(typeof n=='string'&&n.length>1&&n.substr(n.length-1,1)=='%')n=parseInt(window.screen.width*parseInt(n,10)/100,10);if(typeof o=='string'&&o.length>1&&o.substr(o.length-1,1)=='%')o=parseInt(window.screen.height*parseInt(o,10)/100,10);if(n<640)n=640;if(o<420)o=420;var q=parseInt((window.screen.height-o)/2,10),r=parseInt((window.screen.width-n)/2,10);p=(p||'location=no,menubar=no,toolbar=no,dependent=yes,minimizable=no,modal=yes,alwaysRaised=yes,resizable=yes,scrollbars=yes')+',width='+n+',height='+o+',top='+q+',left='+r;var s=window.open('',null,p,true);if(!s)return false;try{s.moveTo(r,q);s.resizeTo(n,o);s.focus();s.location.href=m;}catch(t){s=window.open(m,null,p,true);}return true;}});(function(){var m={modes:{wysiwyg:1,source:1},canUndo:false,readOnly:1,exec:function(o){var p,q=o.config,r=q.baseHref?'<base href="'+q.baseHref+'"/>':'',s=b.isCustomDomain();if(q.fullPage)p=o.getData().replace(/<head>/,'$&'+r).replace(/[^>]*(?=<\/title>)/,'$& &mdash; '+o.lang.preview);
else{var t='<body ',u=o.document&&o.document.getBody();if(u){if(u.getAttribute('id'))t+='id="'+u.getAttribute('id')+'" ';if(u.getAttribute('class'))t+='class="'+u.getAttribute('class')+'" ';}t+='>';p=o.config.docType+'<html dir="'+o.config.contentsLangDirection+'">'+'<head>'+r+'<title>'+o.lang.preview+'</title>'+e.buildStyleHtml(o.config.contentsCss)+'</head>'+t+o.getData()+'</body></html>';}var v=640,w=420,x=80;try{var y=window.screen;v=Math.round(y.width*0.8);w=Math.round(y.height*0.7);x=Math.round(y.width*0.1);}catch(C){}var z='';if(s){window._cke_htmlToLoad=p;z='javascript:void( (function(){document.open();document.domain="'+document.domain+'";'+'document.write( window.opener._cke_htmlToLoad );'+'document.close();'+'window.opener._cke_htmlToLoad = null;'+'})() )';}var A=window.open(z,null,'toolbar=yes,location=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width='+v+',height='+w+',left='+x);if(!s){var B=A.document;B.open();B.write(p);B.close();b.webkit&&setTimeout(function(){B.body.innerHTML+='';},0);}}},n='preview';j.add(n,{init:function(o){o.addCommand(n,m);o.ui.addButton('Preview',{label:o.lang.preview,command:n});}});})();j.add('print',{init:function(m){var n='print',o=m.addCommand(n,j.print);m.ui.addButton('Print',{label:m.lang.print,command:n});}});j.print={exec:function(m){if(b.opera)return;else if(b.gecko)m.window.$.print();else m.document.$.execCommand('Print');},canUndo:false,readOnly:1,modes:{wysiwyg:!b.opera}};j.add('removeformat',{requires:['selection'],init:function(m){m.addCommand('removeFormat',j.removeformat.commands.removeformat);m.ui.addButton('RemoveFormat',{label:m.lang.removeFormat,command:'removeFormat'});m._.removeFormat={filters:[]};}});j.removeformat={commands:{removeformat:{exec:function(m){var n=m._.removeFormatRegex||(m._.removeFormatRegex=new RegExp('^(?:'+m.config.removeFormatTags.replace(/,/g,'|')+')$','i')),o=m._.removeAttributes||(m._.removeAttributes=m.config.removeFormatAttributes.split(',')),p=j.removeformat.filter,q=m.getSelection().getRanges(1),r=q.createIterator(),s;while(s=r.getNextRange()){if(!s.collapsed)s.enlarge(1);var t=s.createBookmark(),u=t.startNode,v=t.endNode,w,x=function(z){var A=new d.elementPath(z),B=A.elements;for(var C=1,D;D=B[C];C++){if(D.equals(A.block)||D.equals(A.blockLimit))break;if(n.test(D.getName())&&p(m,D))z.breakParent(D);}};x(u);if(v){x(v);w=u.getNextSourceNode(true,1);while(w){if(w.equals(v))break;var y=w.getNextSourceNode(false,1);if(!(w.getName()=='img'&&w.data('cke-realelement'))&&p(m,w))if(n.test(w.getName()))w.remove(1);
else{w.removeAttributes(o);m.fire('removeFormatCleanup',w);}w=y;}}s.moveToBookmark(t);}m.getSelection().selectRanges(q);}}},filter:function(m,n){var o=m._.removeFormat.filters;for(var p=0;p<o.length;p++){if(o[p](n)===false)return false;}return true;}};a.editor.prototype.addRemoveFormatFilter=function(m){this._.removeFormat.filters.push(m);};i.removeFormatTags='b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var';i.removeFormatAttributes='class,style,lang,width,height,align,hspace,valign';j.add('resize',{init:function(m){var n=m.config,o=m.element.getDirection(1);!n.resize_dir&&(n.resize_dir='both');n.resize_maxWidth==undefined&&(n.resize_maxWidth=3000);n.resize_maxHeight==undefined&&(n.resize_maxHeight=3000);n.resize_minWidth==undefined&&(n.resize_minWidth=750);n.resize_minHeight==undefined&&(n.resize_minHeight=250);if(n.resize_enabled!==false){var p=null,q,r,s=(n.resize_dir=='both'||n.resize_dir=='horizontal')&&n.resize_minWidth!=n.resize_maxWidth,t=(n.resize_dir=='both'||n.resize_dir=='vertical')&&n.resize_minHeight!=n.resize_maxHeight;function u(x){var y=x.data.$.screenX-q.x,z=x.data.$.screenY-q.y,A=r.width,B=r.height,C=A+y*(o=='rtl'?-1:1),D=B+z;if(s)A=Math.max(n.resize_minWidth,Math.min(C,n.resize_maxWidth));if(t)B=Math.max(n.resize_minHeight,Math.min(D,n.resize_maxHeight));m.resize(A,B);};function v(x){a.document.removeListener('mousemove',u);a.document.removeListener('mouseup',v);if(m.document){m.document.removeListener('mousemove',u);m.document.removeListener('mouseup',v);}};var w=e.addFunction(function(x){if(!p)p=m.getResizable();r={width:p.$.offsetWidth||0,height:p.$.offsetHeight||0};q={x:x.screenX,y:x.screenY};n.resize_minWidth>r.width&&(n.resize_minWidth=r.width);n.resize_minHeight>r.height&&(n.resize_minHeight=r.height);a.document.on('mousemove',u);a.document.on('mouseup',v);if(m.document){m.document.on('mousemove',u);m.document.on('mouseup',v);}});m.on('destroy',function(){e.removeFunction(w);});m.on('themeSpace',function(x){if(x.data.space=='bottom'){var y='';if(s&&!t)y=' cke_resizer_horizontal';if(!s&&t)y=' cke_resizer_vertical';var z='<div class="cke_resizer'+y+' cke_resizer_'+o+'"'+' title="'+e.htmlEncode(m.lang.resize)+'"'+' onmousedown="CKEDITOR.tools.callFunction('+w+', event)"'+'></div>';o=='ltr'&&y=='ltr'?x.data.html+=z:x.data.html=z+x.data.html;}},m,null,100);}}});(function(){var m={modes:{wysiwyg:1,source:1},readOnly:1,exec:function(o){var p=o.element.$.form;if(p)try{p.submit();}catch(q){if(p.submit.click)p.submit.click();
}}},n='save';j.add(n,{init:function(o){var p=o.addCommand(n,m);p.modes={wysiwyg:!!o.element.$.form};o.ui.addButton('Save',{label:o.lang.save,command:n});}});})();(function(){var m='scaytcheck',n='';function o(t,u){var v=0,w;for(w in u){if(u[w]==t){v=1;break;}}return v;};var p=function(){var t=this,u=function(){var y=t.config,z={};z.srcNodeRef=t.document.getWindow().$.frameElement;z.assocApp='CKEDITOR.'+a.version+'@'+a.revision;z.customerid=y.scayt_customerid||'1:WvF0D4-UtPqN1-43nkD4-NKvUm2-daQqk3-LmNiI-z7Ysb4-mwry24-T8YrS3-Q2tpq2';z.customDictionaryIds=y.scayt_customDictionaryIds||'';z.userDictionaryName=y.scayt_userDictionaryName||'';z.sLang=y.scayt_sLang||'en_US';z.onLoad=function(){if(!(c&&b.version<8))this.addStyle(this.selectorCss(),'padding-bottom: 2px !important;');if(t.focusManager.hasFocus&&!q.isControlRestored(t))this.focus();};z.onBeforeChange=function(){if(q.getScayt(t)&&!t.checkDirty())setTimeout(function(){t.resetDirty();},0);};var A=window.scayt_custom_params;if(typeof A=='object')for(var B in A)z[B]=A[B];if(q.getControlId(t))z.id=q.getControlId(t);var C=new window.scayt(z);C.afterMarkupRemove.push(function(E){new h(E,C.document).mergeSiblings();});var D=q.instances[t.name];if(D){C.sLang=D.sLang;C.option(D.option());C.paused=D.paused;}q.instances[t.name]=C;try{C.setDisabled(q.isPaused(t)===false);}catch(E){}t.fire('showScaytState');};t.on('contentDom',u);t.on('contentDomUnload',function(){var y=a.document.getElementsByTag('script'),z=/^dojoIoScript(\d+)$/i,A=/^https?:\/\/svc\.webspellchecker\.net\/spellcheck\/script\/ssrv\.cgi/i;for(var B=0;B<y.count();B++){var C=y.getItem(B),D=C.getId(),E=C.getAttribute('src');if(D&&E&&D.match(z)&&E.match(A))C.remove();}});t.on('beforeCommandExec',function(y){if((y.data.name=='source'||y.data.name=='newpage')&&t.mode=='wysiwyg'){var z=q.getScayt(t);if(z){q.setPaused(t,!z.disabled);q.setControlId(t,z.id);z.destroy(true);delete q.instances[t.name];}}else if(y.data.name=='source'&&t.mode=='source')q.markControlRestore(t);});t.on('afterCommandExec',function(y){if(!q.isScaytEnabled(t))return;if(t.mode=='wysiwyg'&&(y.data.name=='undo'||y.data.name=='redo'))window.setTimeout(function(){q.getScayt(t).refresh();},10);});t.on('destroy',function(y){var z=y.editor,A=q.getScayt(z);if(!A)return;delete q.instances[z.name];q.setControlId(z,A.id);A.destroy(true);});t.on('afterSetData',function(){if(q.isScaytEnabled(t))window.setTimeout(function(){var y=q.getScayt(t);y&&y.refresh();},10);});t.on('insertElement',function(){var y=q.getScayt(t);
if(q.isScaytEnabled(t)){if(c)t.getSelection().unlock(true);window.setTimeout(function(){y.focus();y.refresh();},10);}},this,null,50);t.on('insertHtml',function(){var y=q.getScayt(t);if(q.isScaytEnabled(t)){if(c)t.getSelection().unlock(true);window.setTimeout(function(){y.focus();y.refresh();},10);}},this,null,50);t.on('scaytDialog',function(y){y.data.djConfig=window.djConfig;y.data.scayt_control=q.getScayt(t);y.data.tab=n;y.data.scayt=window.scayt;});var v=t.dataProcessor,w=v&&v.htmlFilter;if(w)w.addRules({elements:{span:function(y){if(y.attributes['data-scayt_word']&&y.attributes['data-scaytid']){delete y.name;return y;}}}});var x=j.undo.Image.prototype;x.equals=e.override(x.equals,function(y){return function(z){var E=this;var A=E.contents,B=z.contents,C=q.getScayt(E.editor);if(C&&q.isScaytReady(E.editor)){E.contents=C.reset(A)||'';z.contents=C.reset(B)||'';}var D=y.apply(E,arguments);E.contents=A;z.contents=B;return D;};});if(t.document)u();};j.scayt={engineLoaded:false,instances:{},controlInfo:{},setControlInfo:function(t,u){if(t&&t.name&&typeof this.controlInfo[t.name]!='object')this.controlInfo[t.name]={};for(var v in u)this.controlInfo[t.name][v]=u[v];},isControlRestored:function(t){if(t&&t.name&&this.controlInfo[t.name])return this.controlInfo[t.name].restored;return false;},markControlRestore:function(t){this.setControlInfo(t,{restored:true});},setControlId:function(t,u){this.setControlInfo(t,{id:u});},getControlId:function(t){if(t&&t.name&&this.controlInfo[t.name]&&this.controlInfo[t.name].id)return this.controlInfo[t.name].id;return null;},setPaused:function(t,u){this.setControlInfo(t,{paused:u});},isPaused:function(t){if(t&&t.name&&this.controlInfo[t.name])return this.controlInfo[t.name].paused;return undefined;},getScayt:function(t){return this.instances[t.name];},isScaytReady:function(t){return this.engineLoaded===true&&'undefined'!==typeof window.scayt&&this.getScayt(t);},isScaytEnabled:function(t){var u=this.getScayt(t);return u?u.disabled===false:false;},getUiTabs:function(t){var u=[],v=t.config.scayt_uiTabs||'1,1,1';v=v.split(',');v[3]='1';for(var w=0;w<4;w++)u[w]=typeof window.scayt!='undefined'&&typeof window.scayt.uiTags!='undefined'?parseInt(v[w],10)&&window.scayt.uiTags[w]:parseInt(v[w],10);return u;},loadEngine:function(t){if(b.gecko&&b.version<10900||b.opera||b.air)return t.fire('showScaytState');if(this.engineLoaded===true)return p.apply(t);else if(this.engineLoaded==-1)return a.on('scaytReady',function(){p.apply(t);});a.on('scaytReady',p,t);
a.on('scaytReady',function(){this.engineLoaded=true;},this,null,0);this.engineLoaded=-1;var u=document.location.protocol;u=u.search(/https?:/)!=-1?u:'http:';var v='svc.webspellchecker.net/scayt26/loader__base.js',w=t.config.scayt_srcUrl||u+'//'+v,x=q.parseUrl(w).path+'/';if(window.scayt==undefined){a._djScaytConfig={baseUrl:x,addOnLoad:[function(){a.fireOnce('scaytReady');}],isDebug:false};a.document.getHead().append(a.document.createElement('script',{attributes:{type:'text/javascript',async:'true',src:w}}));}else a.fireOnce('scaytReady');return null;},parseUrl:function(t){var u;if(t.match&&(u=t.match(/(.*)[\/\\](.*?\.\w+)$/)))return{path:u[1],file:u[2]};else return t;}};var q=j.scayt,r=function(t,u,v,w,x,y,z){t.addCommand(w,x);t.addMenuItem(w,{label:v,command:w,group:y,order:z});},s={preserveState:true,editorFocus:false,canUndo:false,exec:function(t){if(q.isScaytReady(t)){var u=q.isScaytEnabled(t);this.setState(u?2:1);var v=q.getScayt(t);v.focus();v.setDisabled(u);}else if(!t.config.scayt_autoStartup&&q.engineLoaded>=0){this.setState(0);q.loadEngine(t);}}};j.add('scayt',{requires:['menubutton'],beforeInit:function(t){var u=t.config.scayt_contextMenuItemsOrder||'suggest|moresuggest|control',v='';u=u.split('|');if(u&&u.length)for(var w=0;w<u.length;w++)v+='scayt_'+u[w]+(u.length!=parseInt(w,10)+1?',':'');t.config.menu_groups=v+','+t.config.menu_groups;},init:function(t){var u=t.dataProcessor&&t.dataProcessor.dataFilter,v={elements:{span:function(E){var F=E.attributes;if(F&&F['data-scaytid'])delete E.name;}}};u&&u.addRules(v);var w={},x={},y=t.addCommand(m,s);a.dialog.add(m,a.getUrl(this.path+'dialogs/options.js'));var z=q.getUiTabs(t),A='scaytButton';t.addMenuGroup(A);var B={},C=t.lang.scayt;B.scaytToggle={label:C.enable,command:m,group:A};if(z[0]==1)B.scaytOptions={label:C.options,group:A,onClick:function(){n='options';t.openDialog(m);}};if(z[1]==1)B.scaytLangs={label:C.langs,group:A,onClick:function(){n='langs';t.openDialog(m);}};if(z[2]==1)B.scaytDict={label:C.dictionariesTab,group:A,onClick:function(){n='dictionaries';t.openDialog(m);}};B.scaytAbout={label:t.lang.scayt.about,group:A,onClick:function(){n='about';t.openDialog(m);}};t.addMenuItems(B);t.ui.add('Scayt','menubutton',{label:C.title,title:b.opera?C.opera_title:C.title,className:'cke_button_scayt',modes:{wysiwyg:1},onRender:function(){y.on('state',function(){this.setState(y.state);},this);},onMenu:function(){var E=q.isScaytEnabled(t);t.getMenuItem('scaytToggle').label=C[E?'disable':'enable'];var F=q.getUiTabs(t);
return{scaytToggle:2,scaytOptions:E&&F[0]?2:0,scaytLangs:E&&F[1]?2:0,scaytDict:E&&F[2]?2:0,scaytAbout:E&&F[3]?2:0};}});if(t.contextMenu&&t.addMenuItems)t.contextMenu.addListener(function(E,F){if(!q.isScaytEnabled(t)||F.getRanges()[0].checkReadOnly())return null;var G=q.getScayt(t),H=G.getScaytNode();if(!H)return null;var I=G.getWord(H);if(!I)return null;var J=G.getLang(),K={},L=window.scayt.getSuggestion(I,J);if(!L||!L.length)return null;for(var M in w){delete t._.menuItems[M];delete t._.commands[M];}for(M in x){delete t._.menuItems[M];delete t._.commands[M];}w={};x={};var N=t.config.scayt_moreSuggestions||'on',O=false,P=t.config.scayt_maxSuggestions;typeof P!='number'&&(P=5);!P&&(P=L.length);var Q=t.config.scayt_contextCommands||'all';Q=Q.split('|');for(var R=0,S=L.length;R<S;R+=1){var T='scayt_suggestion_'+L[R].replace(' ','_'),U=(function(Y,Z){return{exec:function(){G.replace(Y,Z);}};})(H,L[R]);if(R<P){r(t,'button_'+T,L[R],T,U,'scayt_suggest',R+1);K[T]=2;x[T]=2;}else if(N=='on'){r(t,'button_'+T,L[R],T,U,'scayt_moresuggest',R+1);w[T]=2;O=true;}}if(O){t.addMenuItem('scayt_moresuggest',{label:C.moreSuggestions,group:'scayt_moresuggest',order:10,getItems:function(){return w;}});x.scayt_moresuggest=2;}if(o('all',Q)||o('ignore',Q)){var V={exec:function(){G.ignore(H);}};r(t,'ignore',C.ignore,'scayt_ignore',V,'scayt_control',1);x.scayt_ignore=2;}if(o('all',Q)||o('ignoreall',Q)){var W={exec:function(){G.ignoreAll(H);}};r(t,'ignore_all',C.ignoreAll,'scayt_ignore_all',W,'scayt_control',2);x.scayt_ignore_all=2;}if(o('all',Q)||o('add',Q)){var X={exec:function(){window.scayt.addWordToUserDictionary(H);}};r(t,'add_word',C.addWord,'scayt_add_word',X,'scayt_control',3);x.scayt_add_word=2;}if(G.fireOnContextMenu)G.fireOnContextMenu(t);return x;});var D=function(){t.removeListener('showScaytState',D);if(!b.opera&&!b.air)y.setState(q.isScaytEnabled(t)?1:2);else y.setState(0);};t.on('showScaytState',D);if(b.opera||b.air)t.on('instanceReady',function(){D();});if(t.config.scayt_autoStartup)t.on('instanceReady',function(){q.loadEngine(t);});},afterInit:function(t){var u,v=function(w){if(w.hasAttribute('data-scaytid'))return false;};if(t._.elementsPath&&(u=t._.elementsPath.filters))u.push(v);t.addRemoveFormatFilter&&t.addRemoveFormatFilter(v);}});})();j.add('smiley',{requires:['dialog'],init:function(m){m.config.smiley_path=m.config.smiley_path||this.path+'images/';m.addCommand('smiley',new a.dialogCommand('smiley'));m.ui.addButton('Smiley',{label:m.lang.smiley.toolbar,command:'smiley'});
a.dialog.add('smiley',this.path+'dialogs/smiley.js');}});i.smiley_images=['smiley.png','sad.png','wink.png','teeth.png','grin.png','surprised.png','tongue.png','waii.png','evilgrin.png','lightbulb.png','thumbs_down.png','thumbs_up.png','heart.png','envelope.png'];i.smiley_descriptions=['smiley','sad','wink','laugh','laugh','suprise','cheecky','grin','evilgrin','lightbulb','thumbs down','thumbs up','heart','mail'];(function(){var m='.%2 p,.%2 div,.%2 pre,.%2 address,.%2 blockquote,.%2 h1,.%2 h2,.%2 h3,.%2 h4,.%2 h5,.%2 h6{background-repeat: no-repeat;background-position: top %3;border: 1px dotted gray;padding-top: 8px;padding-%3: 8px;}.%2 p{%1p.png);}.%2 div{%1div.png);}.%2 pre{%1pre.png);}.%2 address{%1address.png);}.%2 blockquote{%1blockquote.png);}.%2 h1{%1h1.png);}.%2 h2{%1h2.png);}.%2 h3{%1h3.png);}.%2 h4{%1h4.png);}.%2 h5{%1h5.png);}.%2 h6{%1h6.png);}',n=/%1/g,o=/%2/g,p=/%3/g,q={readOnly:1,preserveState:true,editorFocus:false,exec:function(r){this.toggleState();this.refresh(r);},refresh:function(r){if(r.document){var s=this.state==1?'addClass':'removeClass';r.document.getBody()[s]('cke_show_blocks');}}};j.add('showblocks',{requires:['wysiwygarea'],init:function(r){var s=r.addCommand('showblocks',q);s.canUndo=false;if(r.config.startupOutlineBlocks)s.setState(1);r.addCss(m.replace(n,'background-image: url('+a.getUrl(this.path)+'images/block_').replace(o,'cke_show_blocks ').replace(p,r.lang.dir=='rtl'?'right':'left'));r.ui.addButton('ShowBlocks',{label:r.lang.showBlocks,command:'showblocks'});r.on('mode',function(){if(s.state!=0)s.refresh(r);});r.on('contentDom',function(){if(s.state!=0)s.refresh(r);});}});})();(function(){var m='cke_show_border',n,o=(b.ie6Compat?['.%1 table.%2,','.%1 table.%2 td, .%1 table.%2 th','{','border : #d3d3d3 1px dotted','}']:['.%1 table.%2,','.%1 table.%2 > tr > td, .%1 table.%2 > tr > th,','.%1 table.%2 > tbody > tr > td, .%1 table.%2 > tbody > tr > th,','.%1 table.%2 > thead > tr > td, .%1 table.%2 > thead > tr > th,','.%1 table.%2 > tfoot > tr > td, .%1 table.%2 > tfoot > tr > th','{','border : #d3d3d3 1px dotted','}']).join('');n=o.replace(/%2/g,m).replace(/%1/g,'cke_show_borders ');var p={preserveState:true,editorFocus:false,readOnly:1,exec:function(q){this.toggleState();this.refresh(q);
},refresh:function(q){if(q.document){var r=this.state==1?'addClass':'removeClass';q.document.getBody()[r]('cke_show_borders');}}};j.add('showborders',{requires:['wysiwygarea'],modes:{wysiwyg:1},init:function(q){var r=q.addCommand('showborders',p);r.canUndo=false;if(q.config.startupShowBorders!==false)r.setState(1);q.addCss(n);q.on('mode',function(){if(r.state!=0)r.refresh(q);},null,null,100);q.on('contentDom',function(){if(r.state!=0)r.refresh(q);});q.on('removeFormatCleanup',function(s){var t=s.data;if(q.getCommand('showborders').state==1&&t.is('table')&&(!t.hasAttribute('border')||parseInt(t.getAttribute('border'),10)<=0))t.addClass(m);});},afterInit:function(q){var r=q.dataProcessor,s=r&&r.dataFilter,t=r&&r.htmlFilter;if(s)s.addRules({elements:{table:function(u){var v=u.attributes,w=v['class'],x=parseInt(v.border,10);if((!x||x<=0)&&(!w||w.indexOf(m)==-1))v['class']=(w||'')+' '+m;}}});if(t)t.addRules({elements:{table:function(u){var v=u.attributes,w=v['class'];w&&(v['class']=w.replace(m,'').replace(/\s{2}/,' ').replace(/^\s+|\s+$/,''));}}});}});a.on('dialogDefinition',function(q){var r=q.data.name;if(r=='table'||r=='tableProperties'){var s=q.data.definition,t=s.getContents('info'),u=t.get('txtBorder'),v=u.commit;u.commit=e.override(v,function(y){return function(z,A){y.apply(this,arguments);var B=parseInt(this.getValue(),10);A[!B||B<=0?'addClass':'removeClass'](m);};});var w=s.getContents('advanced'),x=w&&w.get('advCSSClasses');if(x){x.setup=e.override(x.setup,function(y){return function(){y.apply(this,arguments);this.setValue(this.getValue().replace(/cke_show_border/,''));};});x.commit=e.override(x.commit,function(y){return function(z,A){y.apply(this,arguments);if(!parseInt(A.getAttribute('border'),10))A.addClass('cke_show_border');};});}}});})();j.add('sourcearea',{requires:['editingblock'],init:function(m){var n=j.sourcearea,o=a.document.getWindow();m.on('editingBlockReady',function(){var p,q;m.addMode('source',{load:function(r,s){if(c&&b.version<8)r.setStyle('position','relative');m.textarea=p=new h('textarea');p.setAttributes({dir:'ltr',tabIndex:b.webkit?-1:m.tabIndex,role:'textbox','aria-label':m.lang.editorTitle.replace('%1',m.name)});p.addClass('cke_source');p.addClass('cke_enable_context_menu');m.readOnly&&p.setAttribute('readOnly','readonly');var t={width:b.ie7Compat?'99%':'100%',height:'100%',resize:'none',outline:'none','text-align':'left'};if(c){q=function(){p.hide();p.setStyle('height',r.$.clientHeight+'px');p.setStyle('width',r.$.clientWidth+'px');
p.show();};m.on('resize',q);o.on('resize',q);setTimeout(q,0);}r.setHtml('');r.append(p);p.setStyles(t);m.fire('ariaWidget',p);p.on('blur',function(){m.focusManager.blur();});p.on('focus',function(){m.focusManager.focus();});m.mayBeDirty=true;this.loadData(s);var u=m.keystrokeHandler;if(u)u.attach(p);setTimeout(function(){m.mode='source';m.fire('mode',{previousMode:m._.previousMode});},b.gecko||b.webkit?100:0);},loadData:function(r){p.setValue(r);m.fire('dataReady');},getData:function(){return p.getValue();},getSnapshotData:function(){return p.getValue();},unload:function(r){p.clearCustomData();m.textarea=p=null;if(q){m.removeListener('resize',q);o.removeListener('resize',q);}if(c&&b.version<8)r.removeStyle('position');},focus:function(){p.focus();}});});m.on('readOnly',function(){if(m.mode=='source')if(m.readOnly)m.textarea.setAttribute('readOnly','readonly');else m.textarea.removeAttribute('readOnly');});m.addCommand('source',n.commands.source);if(m.ui.addButton)m.ui.addButton('Source',{label:m.lang.source,command:'source'});m.on('mode',function(){m.getCommand('source').setState(m.mode=='source'?1:2);});}});j.sourcearea={commands:{source:{modes:{wysiwyg:1,source:1},editorFocus:false,readOnly:1,exec:function(m){if(m.mode=='wysiwyg')m.fire('saveSnapshot');m.getCommand('source').setState(0);m.setMode(m.mode=='source'?'wysiwyg':'source');},canUndo:false}}};(function(){j.add('stylescombo',{requires:['richcombo','styles'],init:function(n){var o=n.config,p=n.lang.stylesCombo,q={},r=[],s;function t(u){n.getStylesSet(function(v){if(!r.length){var w,x;for(var y=0,z=v.length;y<z;y++){var A=v[y];x=A.name;w=q[x]=new a.style(A);w._name=x;w._.enterMode=o.enterMode;r.push(w);}r.sort(m);}u&&u();});};n.ui.addRichCombo('Styles',{label:p.label,title:p.panelTitle,className:'cke_styles',panel:{css:n.skin.editor.css.concat(o.contentsCss),multiSelect:true,attributes:{'aria-label':p.panelTitle}},init:function(){s=this;t(function(){var u,v,w,x,y,z;for(y=0,z=r.length;y<z;y++){u=r[y];v=u._name;x=u.type;if(x!=w){s.startGroup(p['panelTitle'+String(x)]);w=x;}s.add(v,u.type==3?v:u.buildPreview(),v);}s.commit();});},onClick:function(u){n.focus();n.fire('saveSnapshot');var v=q[u],w=n.getSelection(),x=new d.elementPath(w.getStartElement());v[v.checkActive(x)?'remove':'apply'](n.document);n.fire('saveSnapshot');},onRender:function(){n.on('selectionChange',function(u){var v=this.getValue(),w=u.data.path,x=w.elements;for(var y=0,z=x.length,A;y<z;y++){A=x[y];for(var B in q){if(q[B].checkElementRemovable(A,true)){if(B!=v)this.setValue(B);
return;}}}this.setValue('');},this);},onOpen:function(){var B=this;if(c||b.webkit)n.focus();var u=n.getSelection(),v=u.getSelectedElement(),w=new d.elementPath(v||u.getStartElement()),x=[0,0,0,0];B.showAll();B.unmarkAll();for(var y in q){var z=q[y],A=z.type;if(z.checkActive(w))B.mark(y);else if(A==3&&!z.checkApplicable(w)){B.hideItem(y);x[A]--;}x[A]++;}if(!x[1])B.hideGroup(p['panelTitle'+String(1)]);if(!x[2])B.hideGroup(p['panelTitle'+String(2)]);if(!x[3])B.hideGroup(p['panelTitle'+String(3)]);},reset:function(){if(s){delete s._.panel;delete s._.list;s._.committed=0;s._.items={};s._.state=2;}q={};r=[];t();}});n.on('instanceReady',function(){t();});}});function m(n,o){var p=n.type,q=o.type;return p==q?0:p==3?-1:q==3?1:q==1?1:-1;};})();j.add('table',{init:function(m){var n=j.table,o=m.lang.table;m.addCommand('table',new a.dialogCommand('table'));m.addCommand('tableProperties',new a.dialogCommand('tableProperties'));m.ui.addButton('Table',{label:o.toolbar,command:'table'});a.dialog.add('table',this.path+'dialogs/table.js');a.dialog.add('tableProperties',this.path+'dialogs/table.js');if(m.addMenuItems)m.addMenuItems({table:{label:o.menu,command:'tableProperties',group:'table',order:5},tabledelete:{label:o.deleteTable,command:'tableDelete',group:'table',order:1}});m.on('doubleclick',function(p){var q=p.data.element;if(q.is('table'))p.data.dialog='tableProperties';});if(m.contextMenu)m.contextMenu.addListener(function(p,q){if(!p||p.isReadOnly())return null;var r=p.hasAscendant('table',1);if(r)return{tabledelete:2,table:2};return null;});}});(function(){var m=/^(?:td|th)$/;function n(G){var H=G.createBookmarks(),I=G.getRanges(),J=[],K={};function L(T){if(J.length>0)return;if(T.type==1&&m.test(T.getName())&&!T.getCustomData('selected_cell')){h.setMarker(K,T,'selected_cell',true);J.push(T);}};for(var M=0;M<I.length;M++){var N=I[M];if(N.collapsed){var O=N.getCommonAncestor(),P=O.getAscendant('td',true)||O.getAscendant('th',true);if(P)J.push(P);}else{var Q=new d.walker(N),R;Q.guard=L;while(R=Q.next()){var S=R.getAscendant('td')||R.getAscendant('th');if(S&&!S.getCustomData('selected_cell')){h.setMarker(K,S,'selected_cell',true);J.push(S);}}}}h.clearAllMarkers(K);G.selectBookmarks(H);return J;};function o(G){var H=0,I=G.length-1,J={},K,L,M;while(K=G[H++])h.setMarker(J,K,'delete_cell',true);H=0;while(K=G[H++]){if((L=K.getPrevious())&&!L.getCustomData('delete_cell')||(L=K.getNext())&&!L.getCustomData('delete_cell')){h.clearAllMarkers(J);return L;}}h.clearAllMarkers(J);M=G[0].getParent();
if(M=M.getPrevious())return M.getLast();M=G[I].getParent();if(M=M.getNext())return M.getChild(0);return null;};function p(G,H){var I=n(G),J=I[0],K=J.getAscendant('table'),L=J.getDocument(),M=I[0].getParent(),N=M.$.rowIndex,O=I[I.length-1],P=O.getParent().$.rowIndex+O.$.rowSpan-1,Q=new h(K.$.rows[P]),R=H?N:P,S=H?M:Q,T=e.buildTableMap(K),U=T[R],V=H?T[R-1]:T[R+1],W=T[0].length,X=L.createElement('tr');for(var Y=0;U[Y]&&Y<W;Y++){var Z;if(U[Y].rowSpan>1&&V&&U[Y]==V[Y]){Z=U[Y];Z.rowSpan+=1;}else{Z=new h(U[Y]).clone();Z.removeAttribute('rowSpan');!c&&Z.appendBogus();X.append(Z);Z=Z.$;}Y+=Z.colSpan-1;}H?X.insertBefore(S):X.insertAfter(S);};function q(G){if(G instanceof d.selection){var H=n(G),I=H[0],J=I.getAscendant('table'),K=e.buildTableMap(J),L=H[0].getParent(),M=L.$.rowIndex,N=H[H.length-1],O=N.getParent().$.rowIndex+N.$.rowSpan-1,P=[];for(var Q=M;Q<=O;Q++){var R=K[Q],S=new h(J.$.rows[Q]);for(var T=0;T<R.length;T++){var U=new h(R[T]),V=U.getParent().$.rowIndex;if(U.$.rowSpan==1)U.remove();else{U.$.rowSpan-=1;if(V==Q){var W=K[Q+1];W[T-1]?U.insertAfter(new h(W[T-1])):new h(J.$.rows[Q+1]).append(U,1);}}T+=U.$.colSpan-1;}P.push(S);}var X=J.$.rows,Y=new h(X[O+1]||(M>0?X[M-1]:null)||J.$.parentNode);for(Q=P.length;Q>=0;Q--)q(P[Q]);return Y;}else if(G instanceof h){J=G.getAscendant('table');if(J.$.rows.length==1)J.remove();else G.remove();}return null;};function r(G,H){var I=G.getParent(),J=I.$.cells,K=0;for(var L=0;L<J.length;L++){var M=J[L];K+=H?1:M.colSpan;if(M==G.$)break;}return K-1;};function s(G,H){var I=H?Infinity:0;for(var J=0;J<G.length;J++){var K=r(G[J],H);if(H?K<I:K>I)I=K;}return I;};function t(G,H){var I=n(G),J=I[0],K=J.getAscendant('table'),L=s(I,1),M=s(I),N=H?L:M,O=e.buildTableMap(K),P=[],Q=[],R=O.length;for(var S=0;S<R;S++){P.push(O[S][N]);var T=H?O[S][N-1]:O[S][N+1];T&&Q.push(T);}for(S=0;S<R;S++){var U;if(P[S].colSpan>1&&Q.length&&Q[S]==P[S]){U=P[S];U.colSpan+=1;}else{U=new h(P[S]).clone();U.removeAttribute('colSpan');!c&&U.appendBogus();U[H?'insertBefore':'insertAfter'].call(U,new h(P[S]));U=U.$;}S+=U.rowSpan-1;}};function u(G){var H=n(G),I=H[0],J=H[H.length-1],K=I.getAscendant('table'),L=e.buildTableMap(K),M,N,O=[];for(var P=0,Q=L.length;P<Q;P++)for(var R=0,S=L[P].length;R<S;R++){if(L[P][R]==I.$)M=R;if(L[P][R]==J.$)N=R;}for(P=M;P<=N;P++)for(R=0;R<L.length;R++){var T=L[R],U=new h(K.$.rows[R]),V=new h(T[P]);if(V.$){if(V.$.colSpan==1)V.remove();else V.$.colSpan-=1;R+=V.$.rowSpan-1;if(!U.$.cells.length)O.push(U);}}var W=K.$.rows[0]&&K.$.rows[0].cells,X=new h(W[M]||(M?W[M-1]:K.$.parentNode));
if(O.length==Q)K.remove();return X;};function v(G){var H=[],I=G[0]&&G[0].getAscendant('table'),J,K,L,M;for(J=0,K=G.length;J<K;J++)H.push(G[J].$.cellIndex);H.sort();for(J=1,K=H.length;J<K;J++){if(H[J]-H[J-1]>1){L=H[J-1]+1;break;}}if(!L)L=H[0]>0?H[0]-1:H[H.length-1]+1;var N=I.$.rows;for(J=0,K=N.length;J<K;J++){M=N[J].cells[L];if(M)break;}return M?new h(M):I.getPrevious();};function w(G,H){var I=G.getStartElement(),J=I.getAscendant('td',1)||I.getAscendant('th',1);if(!J)return;var K=J.clone();if(!c)K.appendBogus();if(H)K.insertBefore(J);else K.insertAfter(J);};function x(G){if(G instanceof d.selection){var H=n(G),I=H[0]&&H[0].getAscendant('table'),J=o(H);for(var K=H.length-1;K>=0;K--)x(H[K]);if(J)z(J,true);else if(I)I.remove();}else if(G instanceof h){var L=G.getParent();if(L.getChildCount()==1)L.remove();else G.remove();}};function y(G){var H=G.getBogus();H&&H.remove();G.trim();};function z(G,H){var I=new d.range(G.getDocument());if(!I['moveToElementEdit'+(H?'End':'Start')](G)){I.selectNodeContents(G);I.collapse(H?false:true);}I.select(true);};function A(G,H,I){var J=G[H];if(typeof I=='undefined')return J;for(var K=0;J&&K<J.length;K++){if(I.is&&J[K]==I.$)return K;else if(K==I)return new h(J[K]);}return I.is?-1:null;};function B(G,H,I){var J=[];for(var K=0;K<G.length;K++){var L=G[K];if(typeof I=='undefined')J.push(L[H]);else if(I.is&&L[H]==I.$)return K;else if(K==I)return new h(L[H]);}return typeof I=='undefined'?J:I.is?-1:null;};function C(G,H,I){var J=n(G),K;if((H?J.length!=1:J.length<2)||(K=G.getCommonAncestor())&&K.type==1&&K.is('table'))return false;var L,M=J[0],N=M.getAscendant('table'),O=e.buildTableMap(N),P=O.length,Q=O[0].length,R=M.getParent().$.rowIndex,S=A(O,R,M);if(H){var T;try{var U=parseInt(M.getAttribute('rowspan'),10)||1,V=parseInt(M.getAttribute('colspan'),10)||1;T=O[H=='up'?R-U:H=='down'?R+U:R][H=='left'?S-V:H=='right'?S+V:S];}catch(an){return false;}if(!T||M.$==T)return false;J[H=='up'||H=='left'?'unshift':'push'](new h(T));}var W=M.getDocument(),X=R,Y=0,Z=0,aa=!I&&new d.documentFragment(W),ab=0;for(var ac=0;ac<J.length;ac++){L=J[ac];var ad=L.getParent(),ae=L.getFirst(),af=L.$.colSpan,ag=L.$.rowSpan,ah=ad.$.rowIndex,ai=A(O,ah,L);ab+=af*ag;Z=Math.max(Z,ai-S+af);Y=Math.max(Y,ah-R+ag);if(!I){if(y(L),L.getChildren().count()){if(ah!=X&&ae&&!(ae.isBlockBoundary&&ae.isBlockBoundary({br:1}))){var aj=aa.getLast(d.walker.whitespaces(true));if(aj&&!(aj.is&&aj.is('br')))aa.append('br');}L.moveChildren(aa);}ac?L.remove():L.setHtml('');}X=ah;}if(!I){aa.moveChildren(M);
if(!c)M.appendBogus();if(Z>=Q)M.removeAttribute('rowSpan');else M.$.rowSpan=Y;if(Y>=P)M.removeAttribute('colSpan');else M.$.colSpan=Z;var ak=new d.nodeList(N.$.rows),al=ak.count();for(ac=al-1;ac>=0;ac--){var am=ak.getItem(ac);if(!am.$.cells.length){am.remove();al++;continue;}}return M;}else return Y*Z==ab;};function D(G,H){var I=n(G);if(I.length>1)return false;else if(H)return true;var J=I[0],K=J.getParent(),L=K.getAscendant('table'),M=e.buildTableMap(L),N=K.$.rowIndex,O=A(M,N,J),P=J.$.rowSpan,Q,R,S,T;if(P>1){R=Math.ceil(P/2);S=Math.floor(P/2);T=N+R;var U=new h(L.$.rows[T]),V=A(M,T),W;Q=J.clone();for(var X=0;X<V.length;X++){W=V[X];if(W.parentNode==U.$&&X>O){Q.insertBefore(new h(W));break;}else W=null;}if(!W)U.append(Q,true);}else{S=R=1;U=K.clone();U.insertAfter(K);U.append(Q=J.clone());var Y=A(M,N);for(var Z=0;Z<Y.length;Z++)Y[Z].rowSpan++;}if(!c)Q.appendBogus();J.$.rowSpan=R;Q.$.rowSpan=S;if(R==1)J.removeAttribute('rowSpan');if(S==1)Q.removeAttribute('rowSpan');return Q;};function E(G,H){var I=n(G);if(I.length>1)return false;else if(H)return true;var J=I[0],K=J.getParent(),L=K.getAscendant('table'),M=e.buildTableMap(L),N=K.$.rowIndex,O=A(M,N,J),P=J.$.colSpan,Q,R,S;if(P>1){R=Math.ceil(P/2);S=Math.floor(P/2);}else{S=R=1;var T=B(M,O);for(var U=0;U<T.length;U++)T[U].colSpan++;}Q=J.clone();Q.insertAfter(J);if(!c)Q.appendBogus();J.$.colSpan=R;Q.$.colSpan=S;if(R==1)J.removeAttribute('colSpan');if(S==1)Q.removeAttribute('colSpan');return Q;};var F={thead:1,tbody:1,tfoot:1,td:1,tr:1,th:1};j.tabletools={init:function(G){var H=G.lang.table;G.addCommand('cellProperties',new a.dialogCommand('cellProperties'));a.dialog.add('cellProperties',this.path+'dialogs/tableCell.js');G.addCommand('tableDelete',{exec:function(I){var J=I.getSelection(),K=J&&J.getStartElement(),L=K&&K.getAscendant('table',1);if(!L)return;var M=L.getParent();if(M.getChildCount()==1&&!M.is('body','td','th'))L=M;var N=new d.range(I.document);N.moveToPosition(L,3);L.remove();N.select();}});G.addCommand('rowDelete',{exec:function(I){var J=I.getSelection();z(q(J));}});G.addCommand('rowInsertBefore',{exec:function(I){var J=I.getSelection();p(J,true);}});G.addCommand('rowInsertAfter',{exec:function(I){var J=I.getSelection();p(J);}});G.addCommand('columnDelete',{exec:function(I){var J=I.getSelection(),K=u(J);K&&z(K,true);}});G.addCommand('columnInsertBefore',{exec:function(I){var J=I.getSelection();t(J,true);}});G.addCommand('columnInsertAfter',{exec:function(I){var J=I.getSelection();t(J);}});G.addCommand('cellDelete',{exec:function(I){var J=I.getSelection();
x(J);}});G.addCommand('cellMerge',{exec:function(I){z(C(I.getSelection()),true);}});G.addCommand('cellMergeRight',{exec:function(I){z(C(I.getSelection(),'right'),true);}});G.addCommand('cellMergeDown',{exec:function(I){z(C(I.getSelection(),'down'),true);}});G.addCommand('cellVerticalSplit',{exec:function(I){z(D(I.getSelection()));}});G.addCommand('cellHorizontalSplit',{exec:function(I){z(E(I.getSelection()));}});G.addCommand('cellInsertBefore',{exec:function(I){var J=I.getSelection();w(J,true);}});G.addCommand('cellInsertAfter',{exec:function(I){var J=I.getSelection();w(J);}});if(G.addMenuItems)G.addMenuItems({tablecell:{label:H.cell.menu,group:'tablecell',order:1,getItems:function(){var I=G.getSelection(),J=n(I);return{tablecell_insertBefore:2,tablecell_insertAfter:2,tablecell_delete:2,tablecell_merge:C(I,null,true)?2:0,tablecell_merge_right:C(I,'right',true)?2:0,tablecell_merge_down:C(I,'down',true)?2:0,tablecell_split_vertical:D(I,true)?2:0,tablecell_split_horizontal:E(I,true)?2:0,tablecell_properties:J.length>0?2:0};}},tablecell_insertBefore:{label:H.cell.insertBefore,group:'tablecell',command:'cellInsertBefore',order:5},tablecell_insertAfter:{label:H.cell.insertAfter,group:'tablecell',command:'cellInsertAfter',order:10},tablecell_delete:{label:H.cell.deleteCell,group:'tablecell',command:'cellDelete',order:15},tablecell_merge:{label:H.cell.merge,group:'tablecell',command:'cellMerge',order:16},tablecell_merge_right:{label:H.cell.mergeRight,group:'tablecell',command:'cellMergeRight',order:17},tablecell_merge_down:{label:H.cell.mergeDown,group:'tablecell',command:'cellMergeDown',order:18},tablecell_split_horizontal:{label:H.cell.splitHorizontal,group:'tablecell',command:'cellHorizontalSplit',order:19},tablecell_split_vertical:{label:H.cell.splitVertical,group:'tablecell',command:'cellVerticalSplit',order:20},tablecell_properties:{label:H.cell.title,group:'tablecellproperties',command:'cellProperties',order:21},tablerow:{label:H.row.menu,group:'tablerow',order:1,getItems:function(){return{tablerow_insertBefore:2,tablerow_insertAfter:2,tablerow_delete:2};}},tablerow_insertBefore:{label:H.row.insertBefore,group:'tablerow',command:'rowInsertBefore',order:5},tablerow_insertAfter:{label:H.row.insertAfter,group:'tablerow',command:'rowInsertAfter',order:10},tablerow_delete:{label:H.row.deleteRow,group:'tablerow',command:'rowDelete',order:15},tablecolumn:{label:H.column.menu,group:'tablecolumn',order:1,getItems:function(){return{tablecolumn_insertBefore:2,tablecolumn_insertAfter:2,tablecolumn_delete:2};
}},tablecolumn_insertBefore:{label:H.column.insertBefore,group:'tablecolumn',command:'columnInsertBefore',order:5},tablecolumn_insertAfter:{label:H.column.insertAfter,group:'tablecolumn',command:'columnInsertAfter',order:10},tablecolumn_delete:{label:H.column.deleteColumn,group:'tablecolumn',command:'columnDelete',order:15}});if(G.contextMenu)G.contextMenu.addListener(function(I,J){if(!I||I.isReadOnly())return null;while(I){if(I.getName() in F)return{tablecell:2,tablerow:2,tablecolumn:2};I=I.getParent();}return null;});},getSelectedCells:n};j.add('tabletools',j.tabletools);})();e.buildTableMap=function(m){var n=m.$.rows,o=-1,p=[];for(var q=0;q<n.length;q++){o++;!p[o]&&(p[o]=[]);var r=-1;for(var s=0;s<n[q].cells.length;s++){var t=n[q].cells[s];r++;while(p[o][r])r++;var u=isNaN(t.colSpan)?1:t.colSpan,v=isNaN(t.rowSpan)?1:t.rowSpan;for(var w=0;w<v;w++){if(!p[o+w])p[o+w]=[];for(var x=0;x<u;x++)p[o+w][r+x]=n[q].cells[s];}r+=u-1;}}return p;};j.add('specialchar',{availableLangs:{en:1},init:function(m){var n='specialchar',o=this;a.dialog.add(n,this.path+'dialogs/specialchar.js');m.addCommand(n,{exec:function(){var p=m.langCode;p=o.availableLangs[p]?p:'en';a.scriptLoader.load(a.getUrl(o.path+'lang/'+p+'.js'),function(){e.extend(m.lang.specialChar,o.langEntries[p]);m.openDialog(n);});},modes:{wysiwyg:1},canUndo:false});m.ui.addButton('SpecialChar',{label:m.lang.specialChar.toolbar,command:n});}});i.specialChars=['!','&quot;','#','$','%','&amp;',"'",'(',')','*','+','-','.','/','0','1','2','3','4','5','6','7','8','9',':',';','&lt;','=','&gt;','?','@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','[',']','^','_','`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','{','|','}','~','&euro;','&lsquo;','&rsquo;','&ldquo;','&rdquo;','&ndash;','&mdash;','&iexcl;','&cent;','&pound;','&curren;','&yen;','&brvbar;','&sect;','&uml;','&copy;','&ordf;','&laquo;','&not;','&reg;','&macr;','&deg;','&sup2;','&sup3;','&acute;','&micro;','&para;','&middot;','&cedil;','&sup1;','&ordm;','&raquo;','&frac14;','&frac12;','&frac34;','&iquest;','&Agrave;','&Aacute;','&Acirc;','&Atilde;','&Auml;','&Aring;','&AElig;','&Ccedil;','&Egrave;','&Eacute;','&Ecirc;','&Euml;','&Igrave;','&Iacute;','&Icirc;','&Iuml;','&ETH;','&Ntilde;','&Ograve;','&Oacute;','&Ocirc;','&Otilde;','&Ouml;','&times;','&Oslash;','&Ugrave;','&Uacute;','&Ucirc;','&Uuml;','&Yacute;','&THORN;','&szlig;','&agrave;','&aacute;','&acirc;','&atilde;','&auml;','&aring;','&aelig;','&ccedil;','&egrave;','&eacute;','&ecirc;','&euml;','&igrave;','&iacute;','&icirc;','&iuml;','&eth;','&ntilde;','&ograve;','&oacute;','&ocirc;','&otilde;','&ouml;','&divide;','&oslash;','&ugrave;','&uacute;','&ucirc;','&uuml;','&yacute;','&thorn;','&yuml;','&OElig;','&oelig;','&#372;','&#374','&#373','&#375;','&sbquo;','&#8219;','&bdquo;','&hellip;','&trade;','&#9658;','&bull;','&rarr;','&rArr;','&hArr;','&diams;','&asymp;'];
(function(){var m={editorFocus:false,modes:{wysiwyg:1,source:1}},n={exec:function(q){q.container.focusNext(true,q.tabIndex);}},o={exec:function(q){q.container.focusPrevious(true,q.tabIndex);}};function p(q){return{editorFocus:false,canUndo:false,modes:{wysiwyg:1},exec:function(r){if(r.focusManager.hasFocus){var s=r.getSelection(),t=s.getCommonAncestor(),u;if(u=t.getAscendant('td',true)||t.getAscendant('th',true)){var v=new d.range(r.document),w=e.tryThese(function(){var D=u.getParent(),E=D.$.cells[u.$.cellIndex+(q?-1:1)];E.parentNode.parentNode;return E;},function(){var D=u.getParent(),E=D.getAscendant('table'),F=E.$.rows[D.$.rowIndex+(q?-1:1)];return F.cells[q?F.cells.length-1:0];});if(!(w||q)){var x=u.getAscendant('table').$,y=u.getParent().$.cells,z=new h(x.insertRow(-1),r.document);for(var A=0,B=y.length;A<B;A++){var C=z.append(new h(y[A],r.document).clone(false,false));!c&&C.appendBogus();}v.moveToElementEditStart(z);}else if(w){w=new h(w);v.moveToElementEditStart(w);if(!(v.checkStartOfBlock()&&v.checkEndOfBlock()))v.selectNodeContents(w);}else return true;v.select(true);return true;}}return false;}};};j.add('tab',{requires:['keystrokes'],init:function(q){var r=q.config.enableTabKeyTools!==false,s=q.config.tabSpaces||0,t='';while(s--)t+='\xa0';if(t)q.on('key',function(u){if(u.data.keyCode==9){q.insertHtml(t);u.cancel();}});if(r)q.on('key',function(u){if(u.data.keyCode==9&&q.execCommand('selectNextCell')||u.data.keyCode==2228224+9&&q.execCommand('selectPreviousCell'))u.cancel();});if(b.webkit||b.gecko)q.on('key',function(u){var v=u.data.keyCode;if(v==9&&!t){u.cancel();q.execCommand('blur');}if(v==2228224+9){q.execCommand('blurBack');u.cancel();}});q.addCommand('blur',e.extend(n,m));q.addCommand('blurBack',e.extend(o,m));q.addCommand('selectNextCell',p());q.addCommand('selectPreviousCell',p(true));}});})();h.prototype.focusNext=function(m,n){var w=this;var o=w.$,p=n===undefined?w.getTabIndex():n,q,r,s,t,u,v;if(p<=0){u=w.getNextSourceNode(m,1);while(u){if(u.isVisible()&&u.getTabIndex()===0){s=u;break;}u=u.getNextSourceNode(false,1);}}else{u=w.getDocument().getBody().getFirst();while(u=u.getNextSourceNode(false,1)){if(!q)if(!r&&u.equals(w)){r=true;if(m){if(!(u=u.getNextSourceNode(true,1)))break;q=1;}}else if(r&&!w.contains(u))q=1;if(!u.isVisible()||(v=u.getTabIndex())<0)continue;if(q&&v==p){s=u;break;}if(v>p&&(!s||!t||v<t)){s=u;t=v;}else if(!s&&v===0){s=u;t=v;}}}if(s)s.focus();};h.prototype.focusPrevious=function(m,n){var w=this;var o=w.$,p=n===undefined?w.getTabIndex():n,q,r,s,t=0,u,v=w.getDocument().getBody().getLast();
while(v=v.getPreviousSourceNode(false,1)){if(!q)if(!r&&v.equals(w)){r=true;if(m){if(!(v=v.getPreviousSourceNode(true,1)))break;q=1;}}else if(r&&!w.contains(v))q=1;if(!v.isVisible()||(u=v.getTabIndex())<0)continue;if(p<=0){if(q&&u===0){s=v;break;}if(u>t){s=v;t=u;}}else{if(q&&u==p){s=v;break;}if(u<p&&(!s||u>t)){s=v;t=u;}}}if(s)s.focus();};(function(){j.add('templates',{requires:['dialog'],init:function(o){a.dialog.add('templates',a.getUrl(this.path+'dialogs/templates.js'));o.addCommand('templates',new a.dialogCommand('templates'));o.ui.addButton('Templates',{label:o.lang.templates.button,command:'templates'});}});var m={},n={};a.addTemplates=function(o,p){m[o]=p;};a.getTemplates=function(o){return m[o];};a.loadTemplates=function(o,p){var q=[];for(var r=0,s=o.length;r<s;r++){if(!n[o[r]]){q.push(o[r]);n[o[r]]=1;}}if(q.length)a.scriptLoader.load(q,p);else setTimeout(p,0);};})();i.templates_files=[a.getUrl('plugins/templates/templates/default.js')];i.templates_replaceContent=true;(function(){var m=function(){this.toolbars=[];this.focusCommandExecuted=false;};m.prototype.focus=function(){for(var o=0,p;p=this.toolbars[o++];)for(var q=0,r;r=p.items[q++];){if(r.focus){r.focus();return;}}};var n={toolbarFocus:{modes:{wysiwyg:1,source:1},readOnly:1,exec:function(o){if(o.toolbox){o.toolbox.focusCommandExecuted=true;if(c||b.air)setTimeout(function(){o.toolbox.focus();},100);else o.toolbox.focus();}}}};j.add('toolbar',{init:function(o){var p,q=function(r,s){var t,u,v=o.lang.dir=='rtl',w=o.config.toolbarGroupCycling;w=w===undefined||w;switch(s){case 9:case 2228224+9:while(!u||!u.items.length){u=s==9?(u?u.next:r.toolbar.next)||o.toolbox.toolbars[0]:(u?u.previous:r.toolbar.previous)||o.toolbox.toolbars[o.toolbox.toolbars.length-1];if(u.items.length){r=u.items[p?u.items.length-1:0];while(r&&!r.focus){r=p?r.previous:r.next;if(!r)u=0;}}}if(r)r.focus();return false;case v?37:39:case 40:t=r;do{t=t.next;if(!t&&w)t=r.toolbar.items[0];}while(t&&!t.focus);if(t)t.focus();else q(r,9);return false;case v?39:37:case 38:t=r;do{t=t.previous;if(!t&&w)t=r.toolbar.items[r.toolbar.items.length-1];}while(t&&!t.focus);if(t)t.focus();else{p=1;q(r,2228224+9);p=0;}return false;case 27:o.focus();return false;case 13:case 32:r.execute();return false;}return true;};o.on('themeSpace',function(r){if(r.data.space==o.config.toolbarLocation){o.toolbox=new m();var s=e.getNextId(),t=['<div class="cke_toolbox" role="group" aria-labelledby="',s,'" onmousedown="return false;"'],u=o.config.toolbarStartupExpanded!==false,v;
t.push(u?'>':' style="display:none">');t.push('<span id="',s,'" class="cke_voice_label">',o.lang.toolbars,'</span>');var w=o.toolbox.toolbars,x=o.config.toolbar instanceof Array?o.config.toolbar:o.config['toolbar_'+o.config.toolbar];for(var y=0;y<x.length;y++){var z,A=0,B,C=x[y],D;if(!C)continue;if(v){t.push('</div>');v=0;}if(C==='/'){t.push('<div class="cke_break"></div>');continue;}D=C.items||C;for(var E=0;E<D.length;E++){var F,G=D[E],H;F=o.ui.create(G);if(F){H=F.canGroup!==false;if(!A){z=e.getNextId();A={id:z,items:[]};B=C.name&&(o.lang.toolbarGroups[C.name]||C.name);t.push('<span id="',z,'" class="cke_toolbar"',B?' aria-labelledby="'+z+'_label"':'',' role="toolbar">');B&&t.push('<span id="',z,'_label" class="cke_voice_label">',B,'</span>');t.push('<span class="cke_toolbar_start"></span>');var I=w.push(A)-1;if(I>0){A.previous=w[I-1];A.previous.next=A;}}if(H){if(!v){t.push('<span class="cke_toolgroup" role="presentation">');v=1;}}else if(v){t.push('</span>');v=0;}var J=F.render(o,t);I=A.items.push(J)-1;if(I>0){J.previous=A.items[I-1];J.previous.next=J;}J.toolbar=A;J.onkey=q;J.onfocus=function(){if(!o.toolbox.focusCommandExecuted)o.focus();};}}if(v){t.push('</span>');v=0;}if(A)t.push('<span class="cke_toolbar_end"></span></span>');}t.push('</div>');if(o.config.toolbarCanCollapse){var K=e.addFunction(function(){o.execCommand('toolbarCollapse');});o.on('destroy',function(){e.removeFunction(K);});var L=e.getNextId();o.addCommand('toolbarCollapse',{readOnly:1,exec:function(M){var N=a.document.getById(L),O=N.getPrevious(),P=M.getThemeSpace('contents'),Q=O.getParent(),R=parseInt(P.$.style.height,10),S=Q.$.offsetHeight,T=!O.isVisible();if(!T){O.hide();N.addClass('cke_toolbox_collapser_min');N.setAttribute('title',M.lang.toolbarExpand);}else{O.show();N.removeClass('cke_toolbox_collapser_min');N.setAttribute('title',M.lang.toolbarCollapse);}N.getFirst().setText(T?'▲':'◀');var U=Q.$.offsetHeight-S;P.setStyle('height',R-U+'px');M.fire('resize');},modes:{wysiwyg:1,source:1}});t.push('<a title="'+(u?o.lang.toolbarCollapse:o.lang.toolbarExpand)+'" id="'+L+'" tabIndex="-1" class="cke_toolbox_collapser');if(!u)t.push(' cke_toolbox_collapser_min');t.push('" onclick="CKEDITOR.tools.callFunction('+K+')">','<span>&#9650;</span>','</a>');}r.data.html+=t.join('');}});o.on('destroy',function(){var r,s=0,t,u,v;r=this.toolbox.toolbars;for(;s<r.length;s++){u=r[s].items;for(t=0;t<u.length;t++){v=u[t];if(v.clickFn)e.removeFunction(v.clickFn);if(v.keyDownFn)e.removeFunction(v.keyDownFn);
}}});o.addCommand('toolbarFocus',n.toolbarFocus);o.ui.add('-',a.UI_SEPARATOR,{});o.ui.addHandler(a.UI_SEPARATOR,{create:function(){return{render:function(r,s){s.push('<span class="cke_separator" role="separator"></span>');return{};}};}});}});})();a.UI_SEPARATOR='separator';i.toolbarLocation='top';i.toolbar_Basic=[['Bold','Italic','-','NumberedList','BulletedList','-','Link','Unlink','-','About']];i.toolbar_Full=[{name:'document',items:['Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates']},{name:'clipboard',items:['Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo']},{name:'editing',items:['Find','Replace','-','SelectAll','-','SpellChecker','Scayt']},{name:'forms',items:['Form','Checkbox','Radio','TextField','Textarea','Select','Button','ImageButton','HiddenField']},'/',{name:'basicstyles',items:['Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat']},{name:'paragraph',items:['NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl']},{name:'links',items:['Link','Unlink','Anchor']},{name:'insert',items:['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe']},'/',{name:'styles',items:['Styles','Format','Font','FontSize']},{name:'colors',items:['TextColor','BGColor']},{name:'tools',items:['Maximize','ShowBlocks','-','About']}];i.toolbar='Full';i.toolbarCanCollapse=true;(function(){j.add('undo',{requires:['selection','wysiwygarea'],init:function(s){var t=new o(s),u=s.addCommand('undo',{exec:function(){if(t.undo()){s.selectionChange();this.fire('afterUndo');}},state:0,canUndo:false}),v=s.addCommand('redo',{exec:function(){if(t.redo()){s.selectionChange();this.fire('afterRedo');}},state:0,canUndo:false});t.onChange=function(){u.setState(t.undoable()?2:0);v.setState(t.redoable()?2:0);};function w(x){if(t.enabled&&x.data.command.canUndo!==false)t.save();};s.on('beforeCommandExec',w);s.on('afterCommandExec',w);s.on('saveSnapshot',function(x){t.save(x.data&&x.data.contentOnly);});s.on('contentDom',function(){s.document.on('keydown',function(x){if(!x.data.$.ctrlKey&&!x.data.$.metaKey)t.type(x);});});s.on('beforeModeUnload',function(){s.mode=='wysiwyg'&&t.save(true);});s.on('mode',function(){t.enabled=s.readOnly?false:s.mode=='wysiwyg';t.onChange();});s.ui.addButton('Undo',{label:s.lang.undo,command:'undo'});s.ui.addButton('Redo',{label:s.lang.redo,command:'redo'});
s.resetUndo=function(){t.reset();s.fire('saveSnapshot');};s.on('updateSnapshot',function(){if(t.currentImage)t.update();});}});j.undo={};var m=j.undo.Image=function(s){this.editor=s;s.fire('beforeUndoImage');var t=s.getSnapshot(),u=t&&s.getSelection();c&&t&&(t=t.replace(/\s+data-cke-expando=".*?"/g,''));this.contents=t;this.bookmarks=u&&u.createBookmarks2(true);s.fire('afterUndoImage');},n=/\b(?:href|src|name)="[^"]*?"/gi;m.prototype={equals:function(s,t){var u=this.contents,v=s.contents;if(c&&(b.ie7Compat||b.ie6Compat)){u=u.replace(n,'');v=v.replace(n,'');}if(u!=v)return false;if(t)return true;var w=this.bookmarks,x=s.bookmarks;if(w||x){if(!w||!x||w.length!=x.length)return false;for(var y=0;y<w.length;y++){var z=w[y],A=x[y];if(z.startOffset!=A.startOffset||z.endOffset!=A.endOffset||!e.arrayCompare(z.start,A.start)||!e.arrayCompare(z.end,A.end))return false;}}return true;}};function o(s){this.editor=s;this.reset();};var p={8:1,46:1},q={16:1,17:1,18:1},r={37:1,38:1,39:1,40:1};o.prototype={type:function(s){var t=s&&s.data.getKey(),u=t in q,v=t in p,w=this.lastKeystroke in p,x=v&&t==this.lastKeystroke,y=t in r,z=this.lastKeystroke in r,A=!v&&!y,B=v&&!x,C=!(u||this.typing)||A&&(w||z);if(C||B){var D=new m(this.editor);e.setTimeout(function(){var F=this;var E=F.editor.getSnapshot();if(c)E=E.replace(/\s+data-cke-expando=".*?"/g,'');if(D.contents!=E){F.typing=true;if(!F.save(false,D,false))F.snapshots.splice(F.index+1,F.snapshots.length-F.index-1);F.hasUndo=true;F.hasRedo=false;F.typesCount=1;F.modifiersCount=1;F.onChange();}},0,this);}this.lastKeystroke=t;if(v){this.typesCount=0;this.modifiersCount++;if(this.modifiersCount>25){this.save(false,null,false);this.modifiersCount=1;}}else if(!y){this.modifiersCount=0;this.typesCount++;if(this.typesCount>25){this.save(false,null,false);this.typesCount=1;}}},reset:function(){var s=this;s.lastKeystroke=0;s.snapshots=[];s.index=-1;s.limit=s.editor.config.undoStackSize||20;s.currentImage=null;s.hasUndo=false;s.hasRedo=false;s.resetType();},resetType:function(){var s=this;s.typing=false;delete s.lastKeystroke;s.typesCount=0;s.modifiersCount=0;},fireChange:function(){var s=this;s.hasUndo=!!s.getNextImage(true);s.hasRedo=!!s.getNextImage(false);s.resetType();s.onChange();},save:function(s,t,u){var w=this;var v=w.snapshots;if(!t)t=new m(w.editor);if(t.contents===false)return false;if(w.currentImage&&t.equals(w.currentImage,s))return false;v.splice(w.index+1,v.length-w.index-1);if(v.length==w.limit)v.shift();w.index=v.push(t)-1;w.currentImage=t;
if(u!==false)w.fireChange();return true;},restoreImage:function(s){var u=this;u.editor.loadSnapshot(s.contents);if(s.bookmarks)u.editor.getSelection().selectBookmarks(s.bookmarks);else if(c){var t=u.editor.document.getBody().$.createTextRange();t.collapse(true);t.select();}u.index=s.index;u.update();u.fireChange();},getNextImage:function(s){var x=this;var t=x.snapshots,u=x.currentImage,v,w;if(u)if(s)for(w=x.index-1;w>=0;w--){v=t[w];if(!u.equals(v,true)){v.index=w;return v;}}else for(w=x.index+1;w<t.length;w++){v=t[w];if(!u.equals(v,true)){v.index=w;return v;}}return null;},redoable:function(){return this.enabled&&this.hasRedo;},undoable:function(){return this.enabled&&this.hasUndo;},undo:function(){var t=this;if(t.undoable()){t.save(true);var s=t.getNextImage(true);if(s)return t.restoreImage(s),true;}return false;},redo:function(){var t=this;if(t.redoable()){t.save(true);if(t.redoable()){var s=t.getNextImage(false);if(s)return t.restoreImage(s),true;}}return false;},update:function(){var s=this;s.snapshots.splice(s.index,1,s.currentImage=new m(s.editor));}};})();(function(){var m=/(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\2>)?\s*(?=$|<\/body>)/gi,n=d.walker.whitespaces(true);function o(C){return C.isBlockBoundary()&&f.$empty[C.getName()];};function p(C){return function(D){if(this.mode=='wysiwyg'){this.focus();this.fire('saveSnapshot');C.call(this,D.data);e.setTimeout(function(){this.fire('saveSnapshot');},0,this);}};};function q(C){var M=this;if(M.dataProcessor)C=M.dataProcessor.toHtml(C);if(!C)return;var D=M.getSelection(),E=D.getRanges()[0];if(E.checkReadOnly())return;if(b.opera){var F=new d.elementPath(E.startContainer);if(F.block){var G=a.htmlParser.fragment.fromHtml(C,false).children;for(var H=0,I=G.length;H<I;H++){if(G[H]._.isBlockLike){E.splitBlock(M.enterMode==3?'div':'p');E.insertNode(E.document.createText(''));E.select();break;}}}}if(c){var J=D.isLocked;if(J)D.unlock();var K=D.getNative();if(K.type=='Control')K.clear();else if(D.getType()==2){E=D.getRanges()[0];var L=E&&E.endContainer;if(L&&L.type==1&&L.getAttribute('contenteditable')=='false'&&E.checkBoundaryOfElement(L,2)){E.setEndAfter(E.endContainer);E.deleteContents();}}K.createRange().pasteHTML(C);if(J)M.getSelection().lock();}else M.document.$.execCommand('inserthtml',false,C);if(b.webkit){D=M.getSelection();D.scrollIntoView();}};function r(C){var D=this.getSelection(),E=D.getStartElement().hasAscendant('pre',true)?2:this.config.enterMode,F=E==2,G=e.htmlEncode(C.replace(/\r\n|\r/g,'\n'));
G=G.replace(/^[ \t]+|[ \t]+$/g,function(M,N,O){if(M.length==1)return '&nbsp;';else if(!N)return e.repeat('&nbsp;',M.length-1)+' ';else return ' '+e.repeat('&nbsp;',M.length-1);});G=G.replace(/[ \t]{2,}/g,function(M){return e.repeat('&nbsp;',M.length-1)+' ';});var H=E==1?'p':'div';if(!F)G=G.replace(/(\n{2})([\s\S]*?)(?:$|\1)/g,function(M,N,O){return '<'+H+'>'+O+'</'+H+'>';});G=G.replace(/\n/g,'<br>');if(!(F||c))G=G.replace(new RegExp('<br>(?=</'+H+'>)'),function(M){return e.repeat(M,2);});if(b.gecko||b.webkit){var I=new d.elementPath(D.getStartElement()),J=[];for(var K=0;K<I.elements.length;K++){var L=I.elements[K].getName();if(L in f.$inline)J.unshift(I.elements[K].getOuterHtml().match(/^<.*?>/));else if(L in f.$block)break;}G=J.join('')+G;}q.call(this,G);};function s(C){var D=this.getSelection(),E=D.getRanges(),F=C.getName(),G=f.$block[F],H=D.isLocked;if(H)D.unlock();var I,J,K,L;for(var M=E.length-1;M>=0;M--){I=E[M];if(!I.checkReadOnly()){I.deleteContents(1);J=!M&&C||C.clone(1);var N,O;if(G)while((N=I.getCommonAncestor(0,1))&&(O=f[N.getName()])&&!(O&&O[F])){if(N.getName() in f.span)I.splitElement(N);else if(I.checkStartOfBlock()&&I.checkEndOfBlock()){I.setStartBefore(N);I.collapse(true);N.remove();}else I.splitBlock();}I.insertNode(J);if(!K)K=J;}}if(K){I.moveToPosition(K,4);if(G){var P=K.getNext(n),Q=P&&P.type==1&&P.getName();if(Q&&f.$block[Q]&&f[Q]['#'])I.moveToElementEditStart(P);}}D.selectRanges([I]);if(H)this.getSelection().lock();};function t(C){if(!C.checkDirty())setTimeout(function(){C.resetDirty();},0);};var u=d.walker.whitespaces(true),v=d.walker.bookmark(false,true);function w(C){return u(C)&&v(C);};function x(C){return C.type==3&&e.trim(C.getText()).match(/^(?:&nbsp;|\xa0)$/);};function y(C){if(C.isLocked){C.unlock();setTimeout(function(){C.lock();},0);}};function z(C){return C.getOuterHtml().match(m);};u=d.walker.whitespaces(true);function A(C){var D=C.window,E=C.document,F=C.document.getBody(),G=F.getFirst(),H=F.getChildren().count();if(!H||H==1&&G.type==1&&G.hasAttribute('_moz_editor_bogus_node')){t(C);var I=C.element.getDocument(),J=I.getDocumentElement(),K=J.$.scrollTop,L=J.$.scrollLeft,M=E.$.createEvent('KeyEvents');M.initKeyEvent('keypress',true,true,D.$,false,false,false,false,0,32);E.$.dispatchEvent(M);if(K!=J.$.scrollTop||L!=J.$.scrollLeft)I.getWindow().$.scrollTo(L,K);H&&F.getFirst().remove();E.getBody().appendBogus();var N=new d.range(E);N.setStartAt(F,1);N.select();}};function B(C){var D=C.editor,E=C.data.path,F=E.blockLimit,G=C.data.selection,H=G.getRanges()[0],I=D.document.getBody(),J=D.config.enterMode;
if(b.gecko){A(D);var K=E.block||E.blockLimit,L=K&&K.getLast(w);if(K&&K.isBlockBoundary()&&!(L&&L.type==1&&L.isBlockBoundary())&&!K.is('pre')&&!K.getBogus())K.appendBogus();}if(D.config.autoParagraph!==false&&J!=2&&H.collapsed&&F.getName()=='body'&&!E.block){var M=H.fixBlock(true,D.config.enterMode==3?'div':'p');if(c){var N=M.getFirst(w);N&&x(N)&&N.remove();}if(z(M)){var O=M.getNext(u);if(O&&O.type==1&&!o(O)){H.moveToElementEditStart(O);M.remove();}else{O=M.getPrevious(u);if(O&&O.type==1&&!o(O)){H.moveToElementEditEnd(O);M.remove();}}}H.select();C.cancel();}var P=new d.range(D.document);P.moveToElementEditEnd(D.document.getBody());var Q=new d.elementPath(P.startContainer);if(!Q.blockLimit.is('body')){var R;if(J!=2)R=I.append(D.document.createElement(J==1?'p':'div'));else R=I;if(!c)R.appendBogus();}};j.add('wysiwygarea',{requires:['editingblock'],init:function(C){var D=C.config.enterMode!=2&&C.config.autoParagraph!==false?C.config.enterMode==3?'div':'p':false,E=C.lang.editorTitle.replace('%1',C.name),F;C.on('editingBlockReady',function(){var L,M,N,O,P,Q,R=b.isCustomDomain(),S=function(V){if(M)M.remove();var W='document.open();'+(R?'document.domain="'+document.domain+'";':'')+'document.close();';W=b.air?'javascript:void(0)':c?'javascript:void(function(){'+encodeURIComponent(W)+'}())':'';M=h.createFromHtml('<iframe style="width:100%;height:100%" frameBorder="0" title="'+E+'"'+' src="'+W+'"'+' tabIndex="'+(b.webkit?-1:C.tabIndex)+'"'+' allowTransparency="true"'+'></iframe>');if(document.location.protocol=='chrome:')a.event.useCapture=true;M.on('load',function(X){P=1;X.removeListener();var Y=M.getFrameDocument();Y.write(V);b.air&&U(Y.getWindow().$);});if(document.location.protocol=='chrome:')a.event.useCapture=false;L.append(M);};F=e.addFunction(U);var T='<script id="cke_actscrpt" type="text/javascript" data-cke-temp="1">'+(R?'document.domain="'+document.domain+'";':'')+'window.parent.CKEDITOR.tools.callFunction( '+F+', window );'+'</script>';function U(V){if(!P)return;P=0;C.fire('ariaWidget',M);var W=V.document,X=W.body,Y=W.getElementById('cke_actscrpt');Y&&Y.parentNode.removeChild(Y);X.spellcheck=!C.config.disableNativeSpellChecker;var Z=!C.readOnly;if(c){X.hideFocus=true;X.disabled=true;X.contentEditable=Z;X.removeAttribute('disabled');}else setTimeout(function(){if(b.gecko&&b.version>=10900||b.opera)W.$.body.contentEditable=Z;else if(b.webkit)W.$.body.parentNode.contentEditable=Z;else W.$.designMode=Z?'off':'on';},0);Z&&b.gecko&&e.setTimeout(A,0,null,C);V=C.window=new d.window(V);
W=C.document=new g(W);Z&&W.on('dblclick',function(af){var ag=af.data.getTarget(),ah={element:ag,dialog:''};C.fire('doubleclick',ah);ah.dialog&&C.openDialog(ah.dialog);});c&&W.on('click',function(af){var ag=af.data.getTarget();if(ag.is('input')){var ah=ag.getAttribute('type');if(ah=='submit'||ah=='reset')af.data.preventDefault();}});if(!(c||b.opera))W.on('mousedown',function(af){var ag=af.data.getTarget();if(ag.is('img','hr','input','textarea','select'))C.getSelection().selectElement(ag);});if(b.gecko)W.on('mouseup',function(af){if(af.data.$.button==2){var ag=af.data.getTarget();if(!ag.getOuterHtml().replace(m,'')){var ah=new d.range(W);ah.moveToElementEditStart(ag);ah.select(true);}}});W.on('click',function(af){af=af.data;if(af.getTarget().is('a')&&af.$.button!=2)af.preventDefault();});if(b.webkit){W.on('mousedown',function(){ac=1;});W.on('click',function(af){if(af.data.getTarget().is('input','select'))af.data.preventDefault();});W.on('mouseup',function(af){if(af.data.getTarget().is('input','textarea'))af.data.preventDefault();});}if(Z&&c&&W.$.compatMode=='CSS1Compat'||b.gecko||b.opera){var aa=W.getDocumentElement();aa.on('mousedown',function(af){if(af.data.getTarget().equals(aa)){if(b.gecko&&b.version>=10900)J();K.focus();}});}var ab=c?M:V;ab.on('blur',function(){C.focusManager.blur();});var ac;ab.on('focus',function(){var af=C.document;if(Z&&b.gecko&&b.version>=10900)J();else if(b.opera)af.getBody().focus();else if(b.webkit)if(!ac){C.document.getDocumentElement().focus();ac=1;}C.focusManager.focus();});var ad=C.keystrokeHandler;ad.blockedKeystrokes[8]=!Z;ad.attach(W);W.getDocumentElement().addClass(W.$.compatMode);Z&&W.on('keydown',function(af){var ag=af.data.getKeystroke();if(ag in {8:1,46:1}){var ah=C.getSelection(),ai=ah.getSelectedElement(),aj=ah.getRanges()[0];if(ai){C.fire('saveSnapshot');aj.moveToPosition(ai,3);ai.remove();aj.select();C.fire('saveSnapshot');af.data.preventDefault();return;}}});if(c&&W.$.compatMode=='CSS1Compat'){var ae={33:1,34:1};W.on('keydown',function(af){if(af.data.getKeystroke() in ae)setTimeout(function(){C.getSelection().scrollIntoView();},0);});}if(c&&C.config.enterMode!=1)W.on('selectionchange',function(){var af=W.getBody(),ag=C.getSelection().getRanges()[0];if(af.getHtml().match(/^<p>&nbsp;<\/p>$/i)&&ag.startContainer.equals(af))setTimeout(function(){ag=C.getSelection().getRanges()[0];if(!ag.startContainer.equals('body')){af.getFirst().remove(1);ag.moveToElementEditEnd(af);ag.select(1);}},0);});if(C.contextMenu)C.contextMenu.addTarget(W,C.config.browserContextMenuOnCtrl!==false);
setTimeout(function(){C.fire('contentDom');if(Q){C.mode='wysiwyg';C.fire('mode',{previousMode:C._.previousMode});Q=false;}N=false;if(O){C.focus();O=false;}setTimeout(function(){C.fire('dataReady');},0);try{C.document.$.execCommand('enableInlineTableEditing',false,!C.config.disableNativeTableHandles);}catch(af){}if(C.config.disableObjectResizing)try{C.document.$.execCommand('enableObjectResizing',false,false);}catch(ag){C.document.getBody().on(c?'resizestart':'resize',function(ah){ah.data.preventDefault();});}if(c)setTimeout(function(){if(C.document){var ah=C.document.$.body;ah.runtimeStyle.marginBottom='0px';ah.runtimeStyle.marginBottom='';}},1000);},0);};C.addMode('wysiwyg',{load:function(V,W,X){L=V;if(c&&b.quirks)V.setStyle('position','relative');C.mayBeDirty=true;Q=true;if(X)this.loadSnapshotData(W);else this.loadData(W);},loadData:function(V){N=true;C._.dataStore={id:1};var W=C.config,X=W.fullPage,Y=W.docType,Z='<style type="text/css" data-cke-temp="1">'+C._.styles.join('\n')+'</style>';!X&&(Z=e.buildStyleHtml(C.config.contentsCss)+Z);var aa=W.baseHref?'<base href="'+W.baseHref+'" data-cke-temp="1" />':'';if(X)V=V.replace(/<!DOCTYPE[^>]*>/i,function(ab){C.docType=Y=ab;return '';}).replace(/<\?xml\s[^\?]*\?>/i,function(ab){C.xmlDeclaration=ab;return '';});if(C.dataProcessor)V=C.dataProcessor.toHtml(V,D);if(X){if(!/<body[\s|>]/.test(V))V='<body>'+V;if(!/<html[\s|>]/.test(V))V='<html>'+V+'</html>';if(!/<head[\s|>]/.test(V))V=V.replace(/<html[^>]*>/,'$&<head><title></title></head>');else if(!/<title[\s|>]/.test(V))V=V.replace(/<head[^>]*>/,'$&<title></title>');aa&&(V=V.replace(/<head>/,'$&'+aa));V=V.replace(/<\/head\s*>/,Z+'$&');V=Y+V;}else V=W.docType+'<html dir="'+W.contentsLangDirection+'"'+' lang="'+(W.contentsLanguage||C.langCode)+'">'+'<head>'+'<title>'+E+'</title>'+aa+Z+'</head>'+'<body'+(W.bodyId?' id="'+W.bodyId+'"':'')+(W.bodyClass?' class="'+W.bodyClass+'"':'')+'>'+V+'</html>';if(b.gecko)V=V.replace(/<br \/>(?=\s*<\/(:?html|body)>)/,'$&<br type="_moz" />');V+=T;this.onDispose();S(V);},getData:function(){var V=C.config,W=V.fullPage,X=W&&C.docType,Y=W&&C.xmlDeclaration,Z=M.getFrameDocument(),aa=W?Z.getDocumentElement().getOuterHtml():Z.getBody().getHtml();if(b.gecko)aa=aa.replace(/<br>(?=\s*(:?$|<\/body>))/,'');if(C.dataProcessor)aa=C.dataProcessor.toDataFormat(aa,D);if(V.ignoreEmptyParagraph)aa=aa.replace(m,function(ab,ac){return ac;});if(Y)aa=Y+'\n'+aa;if(X)aa=X+'\n'+aa;return aa;},getSnapshotData:function(){return M.getFrameDocument().getBody().getHtml();
},loadSnapshotData:function(V){M.getFrameDocument().getBody().setHtml(V);},onDispose:function(){if(!C.document)return;C.document.getDocumentElement().clearCustomData();C.document.getBody().clearCustomData();C.window.clearCustomData();C.document.clearCustomData();M.clearCustomData();M.remove();},unload:function(V){this.onDispose();C.window=C.document=M=L=O=null;C.fire('contentDomUnload');},focus:function(){var V=C.window;if(N)O=true;else if(V){b.air?setTimeout(function(){V.focus();},0):V.focus();C.selectionChange();}}});C.on('insertHtml',p(q),null,null,20);C.on('insertElement',p(s),null,null,20);C.on('insertText',p(r),null,null,20);C.on('selectionChange',function(V){if(C.readOnly)return;var W=C.getSelection();if(W&&!W.isLocked){var X=C.checkDirty();C.fire('saveSnapshot',{contentOnly:1});B.call(this,V);C.fire('updateSnapshot');!X&&C.resetDirty();}},null,null,1);});var G;C.on('contentDom',function(){var L=C.document.getElementsByTag('title').getItem(0);L.data('cke-title',C.document.$.title);C.document.$.title=E;});C.on('readOnly',function(){if(C.mode=='wysiwyg'){var L=C.getMode();L.loadData(L.getData());}});if(a.document.$.documentMode>=8){C.addCss('html.CSS1Compat [contenteditable=false]{ min-height:0 !important;}');var H=[];for(var I in f.$removeEmpty)H.push('html.CSS1Compat '+I+'[contenteditable=false]');C.addCss(H.join(',')+'{ display:inline-block;}');}else if(b.gecko){C.addCss('html { height: 100% !important; }');C.addCss('img:-moz-broken { -moz-force-broken-image-icon : 1;\twidth : 24px; height : 24px; }');}C.addCss('html {\t_overflow-y: scroll; cursor: text;\t*cursor:auto;}');C.addCss('img, input, textarea { cursor: default;}');function J(L){if(C.readOnly)return;e.tryThese(function(){C.document.$.designMode='on';setTimeout(function(){C.document.$.designMode='off';if(a.currentInstance==C)C.document.getBody().focus();},50);},function(){C.document.$.designMode='off';var M=C.document.getBody();M.setAttribute('contentEditable',false);M.setAttribute('contentEditable',true);!L&&J(1);});};if(b.gecko||c||b.opera){var K;C.on('uiReady',function(){K=C.container.append(h.createFromHtml('<span tabindex="-1" style="position:absolute;" role="presentation"></span>'));K.on('focus',function(){C.focus();});C.focusGrabber=K;});C.on('destroy',function(){e.removeFunction(F);K.clearCustomData();delete C.focusGrabber;});}C.on('insertElement',function(L){var M=L.data;if(M.type==1&&(M.is('input')||M.is('textarea'))){var N=M.getAttribute('contenteditable')=='false';if(!N){M.data('cke-editable',M.hasAttribute('contenteditable')?'true':'1');
M.setAttribute('contenteditable',false);}}});}});if(b.gecko)(function(){var C=document.body;if(!C)window.addEventListener('load',arguments.callee,false);else{var D=C.getAttribute('onpageshow');C.setAttribute('onpageshow',(D?D+';':'')+'event.persisted && (function(){'+'var allInstances = CKEDITOR.instances, editor, doc;'+'for ( var i in allInstances )'+'{'+'\teditor = allInstances[ i ];'+'\tdoc = editor.document;'+'\tif ( doc )'+'\t{'+'\t\tdoc.$.designMode = "off";'+'\t\tdoc.$.designMode = "on";'+'\t}'+'}'+'})();');}})();})();i.disableObjectResizing=false;i.disableNativeTableHandles=true;i.disableNativeSpellChecker=true;i.ignoreEmptyParagraph=true;j.add('wsc',{requires:['dialog'],init:function(m){var n='checkspell',o=m.addCommand(n,new a.dialogCommand(n));o.modes={wysiwyg:!b.opera&&!b.air&&document.domain==window.location.hostname};m.ui.addButton('SpellChecker',{label:m.lang.spellCheck.toolbar,command:n});a.dialog.add(n,this.path+'dialogs/wsc.js');}});i.wsc_customerId=i.wsc_customerId||'1:ua3xw1-2XyGJ3-GWruD3-6OFNT1-oXcuB1-nR6Bp4-hgQHc-EcYng3-sdRXG3-NOfFk';i.wsc_customLoaderScript=i.wsc_customLoaderScript||null;a.DIALOG_RESIZE_NONE=0;a.DIALOG_RESIZE_WIDTH=1;a.DIALOG_RESIZE_HEIGHT=2;a.DIALOG_RESIZE_BOTH=3;(function(){var m=e.cssLength;function n(S){return!!this._.tabs[S][0].$.offsetHeight;};function o(){var W=this;var S=W._.currentTabId,T=W._.tabIdList.length,U=e.indexOf(W._.tabIdList,S)+T;for(var V=U-1;V>U-T;V--){if(n.call(W,W._.tabIdList[V%T]))return W._.tabIdList[V%T];}return null;};function p(){var W=this;var S=W._.currentTabId,T=W._.tabIdList.length,U=e.indexOf(W._.tabIdList,S);for(var V=U+1;V<U+T;V++){if(n.call(W,W._.tabIdList[V%T]))return W._.tabIdList[V%T];}return null;};function q(S,T){var U=S.$.getElementsByTagName('input');for(var V=0,W=U.length;V<W;V++){var X=new h(U[V]);if(X.getAttribute('type').toLowerCase()=='text')if(T){X.setAttribute('value',X.getCustomData('fake_value')||'');X.removeCustomData('fake_value');}else{X.setCustomData('fake_value',X.getAttribute('value'));X.setAttribute('value','');}}};function r(S,T){var V=this;var U=V.getInputElement();if(U)S?U.removeAttribute('aria-invalid'):U.setAttribute('aria-invalid',true);if(!S)if(V.select)V.select();else V.focus();T&&alert(T);V.fire('validated',{valid:S,msg:T});};function s(){var S=this.getInputElement();S&&S.removeAttribute('aria-invalid');};a.dialog=function(S,T){var U=a.dialog._.dialogDefinitions[T],V=e.clone(u),W=S.config.dialog_buttonsOrder||'OS',X=S.lang.dir;if(W=='OS'&&b.mac||W=='rtl'&&X=='ltr'||W=='ltr'&&X=='rtl')V.buttons.reverse();
U=e.extend(U(S),V);U=e.clone(U);U=new y(this,U);var Y=a.document,Z=S.theme.buildDialog(S);this._={editor:S,element:Z.element,name:T,contentSize:{width:0,height:0},size:{width:0,height:0},contents:{},buttons:{},accessKeyMap:{},tabs:{},tabIdList:[],currentTabId:null,currentTabIndex:null,pageCount:0,lastTab:null,tabBarMode:false,focusList:[],currentFocusIndex:0,hasFocus:false};this.parts=Z.parts;e.setTimeout(function(){S.fire('ariaWidget',this.parts.contents);},0,this);var aa={position:b.ie6Compat?'absolute':'fixed',top:0,visibility:'hidden'};aa[X=='rtl'?'right':'left']=0;this.parts.dialog.setStyles(aa);a.event.call(this);this.definition=U=a.fire('dialogDefinition',{name:T,definition:U},S).definition;var ab={};if(!('removeDialogTabs' in S._)&&S.config.removeDialogTabs){var ac=S.config.removeDialogTabs.split(';');for(i=0;i<ac.length;i++){var ad=ac[i].split(':');if(ad.length==2){var ae=ad[0];if(!ab[ae])ab[ae]=[];ab[ae].push(ad[1]);}}S._.removeDialogTabs=ab;}if(S._.removeDialogTabs&&(ab=S._.removeDialogTabs[T]))for(i=0;i<ab.length;i++)U.removeContents(ab[i]);if(U.onLoad)this.on('load',U.onLoad);if(U.onShow)this.on('show',U.onShow);if(U.onHide)this.on('hide',U.onHide);if(U.onOk)this.on('ok',function(ar){S.fire('saveSnapshot');setTimeout(function(){S.fire('saveSnapshot');},0);if(U.onOk.call(this,ar)===false)ar.data.hide=false;});if(U.onCancel)this.on('cancel',function(ar){if(U.onCancel.call(this,ar)===false)ar.data.hide=false;});var af=this,ag=function(ar){var as=af._.contents,at=false;for(var au in as)for(var av in as[au]){at=ar.call(this,as[au][av]);if(at)return;}};this.on('ok',function(ar){ag(function(as){if(as.validate){var at=as.validate(this),au=typeof at=='string'||at===false;if(au){ar.data.hide=false;ar.stop();}r.call(as,!au,typeof at=='string'?at:undefined);return au;}});},this,null,0);this.on('cancel',function(ar){ag(function(as){if(as.isChanged()){if(!confirm(S.lang.common.confirmCancel))ar.data.hide=false;return true;}});},this,null,0);this.parts.close.on('click',function(ar){if(this.fire('cancel',{hide:true}).hide!==false)this.hide();ar.data.preventDefault();},this);function ah(){var ar=af._.focusList;ar.sort(function(au,av){if(au.tabIndex!=av.tabIndex)return av.tabIndex-au.tabIndex;else return au.focusIndex-av.focusIndex;});var as=ar.length;for(var at=0;at<as;at++)ar[at].focusIndex=at;};function ai(ar){var as=af._.focusList,at=ar?1:-1;if(as.length<1)return;var au=af._.currentFocusIndex;try{as[au].getInputElement().$.blur();}catch(ax){}var av=(au+at+as.length)%as.length,aw=av;
while(!as[aw].isFocusable()){aw=(aw+at+as.length)%as.length;if(aw==av)break;}as[aw].focus();if(as[aw].type=='text')as[aw].select();};this.changeFocus=ai;var aj;function ak(ar){var aw=this;if(af!=a.dialog._.currentTop)return;var as=ar.data.getKeystroke(),at=S.lang.dir=='rtl';aj=0;if(as==9||as==2228224+9){var au=as==2228224+9;if(af._.tabBarMode){var av=au?o.call(af):p.call(af);af.selectPage(av);af._.tabs[av][0].focus();}else ai(!au);aj=1;}else if(as==4456448+121&&!af._.tabBarMode&&af.getPageCount()>1){af._.tabBarMode=true;af._.tabs[af._.currentTabId][0].focus();aj=1;}else if((as==37||as==39)&&af._.tabBarMode){av=as==(at?39:37)?o.call(af):p.call(af);af.selectPage(av);af._.tabs[av][0].focus();aj=1;}else if((as==13||as==32)&&af._.tabBarMode){aw.selectPage(aw._.currentTabId);aw._.tabBarMode=false;aw._.currentFocusIndex=-1;ai(true);aj=1;}if(aj){ar.stop();ar.data.preventDefault();}};function al(ar){aj&&ar.data.preventDefault();};var am=this._.element;this.on('show',function(){am.on('keydown',ak,this,null,0);if(b.opera||b.gecko&&b.mac)am.on('keypress',al,this);});this.on('hide',function(){am.removeListener('keydown',ak);if(b.opera||b.gecko&&b.mac)am.removeListener('keypress',al);ag(function(ar){s.apply(ar);});});this.on('iframeAdded',function(ar){var as=new g(ar.data.iframe.$.contentWindow.document);as.on('keydown',ak,this,null,0);});this.on('show',function(){var av=this;ah();if(S.config.dialog_startupFocusTab&&af._.pageCount>1){af._.tabBarMode=true;af._.tabs[af._.currentTabId][0].focus();}else if(!av._.hasFocus){av._.currentFocusIndex=-1;if(U.onFocus){var ar=U.onFocus.call(av);ar&&ar.focus();}else ai(true);if(av._.editor.mode=='wysiwyg'&&c){var as=S.document.$.selection,at=as.createRange();if(at)if(at.parentElement&&at.parentElement().ownerDocument==S.document.$||at.item&&at.item(0).ownerDocument==S.document.$){var au=document.body.createTextRange();au.moveToElementText(av.getElement().getFirst().$);au.collapse(true);au.select();}}}},this,null,4294967295);if(b.ie6Compat)this.on('load',function(ar){var as=this.getElement(),at=as.getFirst();at.remove();at.appendTo(as);},this);A(this);B(this);new d.text(U.title,a.document).appendTo(this.parts.title);for(var an=0;an<U.contents.length;an++){var ao=U.contents[an];ao&&this.addPage(ao);}this.parts.tabs.on('click',function(ar){var au=this;var as=ar.data.getTarget();if(as.hasClass('cke_dialog_tab')){var at=as.$.id;au.selectPage(at.substring(4,at.lastIndexOf('_')));if(au._.tabBarMode){au._.tabBarMode=false;au._.currentFocusIndex=-1;
ai(true);}ar.data.preventDefault();}},this);var ap=[],aq=a.dialog._.uiElementBuilders.hbox.build(this,{type:'hbox',className:'cke_dialog_footer_buttons',widths:[],children:U.buttons},ap).getChild();this.parts.footer.setHtml(ap.join(''));for(an=0;an<aq.length;an++)this._.buttons[aq[an].id]=aq[an];};function t(S,T,U){this.element=T;this.focusIndex=U;this.tabIndex=0;this.isFocusable=function(){return!T.getAttribute('disabled')&&T.isVisible();};this.focus=function(){S._.currentFocusIndex=this.focusIndex;this.element.focus();};T.on('keydown',function(V){if(V.data.getKeystroke() in {32:1,13:1})this.fire('click');});T.on('focus',function(){this.fire('mouseover');});T.on('blur',function(){this.fire('mouseout');});};a.dialog.prototype={destroy:function(){this.hide();this._.element.remove();},resize:(function(){return function(S,T){var U=this;if(U._.contentSize&&U._.contentSize.width==S&&U._.contentSize.height==T)return;a.dialog.fire('resize',{dialog:U,skin:U._.editor.skinName,width:S,height:T},U._.editor);U.fire('resize',{skin:U._.editor.skinName,width:S,height:T},U._.editor);if(U._.editor.lang.dir=='rtl'&&U._.position)U._.position.x=a.document.getWindow().getViewPaneSize().width-U._.contentSize.width-parseInt(U._.element.getFirst().getStyle('right'),10);U._.contentSize={width:S,height:T};};})(),getSize:function(){var S=this._.element.getFirst();return{width:S.$.offsetWidth||0,height:S.$.offsetHeight||0};},move:(function(){var S;return function(T,U,V){var ac=this;var W=ac._.element.getFirst(),X=ac._.editor.lang.dir=='rtl';if(S===undefined)S=W.getComputedStyle('position')=='fixed';if(S&&ac._.position&&ac._.position.x==T&&ac._.position.y==U)return;ac._.position={x:T,y:U};if(!S){var Y=a.document.getWindow().getScrollPosition();T+=Y.x;U+=Y.y;}if(X){var Z=ac.getSize(),aa=a.document.getWindow().getViewPaneSize();T=aa.width-Z.width-T;}var ab={top:(U>0?U:0)+'px'};ab[X?'right':'left']=(T>0?T:0)+'px';W.setStyles(ab);V&&(ac._.moved=1);};})(),getPosition:function(){return e.extend({},this._.position);},show:function(){var S=this._.element,T=this.definition;if(!(S.getParent()&&S.getParent().equals(a.document.getBody())))S.appendTo(a.document.getBody());else S.setStyle('display','block');if(b.gecko&&b.version<10900){var U=this.parts.dialog;U.setStyle('position','absolute');setTimeout(function(){U.setStyle('position','fixed');},0);}this.resize(this._.contentSize&&this._.contentSize.width||T.width||T.minWidth,this._.contentSize&&this._.contentSize.height||T.height||T.minHeight);this.reset();
this.selectPage(this.definition.contents[0].id);if(a.dialog._.currentZIndex===null)a.dialog._.currentZIndex=this._.editor.config.baseFloatZIndex;this._.element.getFirst().setStyle('z-index',a.dialog._.currentZIndex+=10);if(a.dialog._.currentTop===null){a.dialog._.currentTop=this;this._.parentDialog=null;G(this._.editor);S.on('keydown',K);S.on(b.opera?'keypress':'keyup',L);for(var V in {keyup:1,keydown:1,keypress:1})S.on(V,R);}else{this._.parentDialog=a.dialog._.currentTop;var W=this._.parentDialog.getElement().getFirst();W.$.style.zIndex-=Math.floor(this._.editor.config.baseFloatZIndex/2);a.dialog._.currentTop=this;}M(this,this,'\x1b',null,function(){this.getButton('cancel')&&this.getButton('cancel').click();});this._.hasFocus=false;e.setTimeout(function(){this.layout();this.parts.dialog.setStyle('visibility','');this.fireOnce('load',{});k.fire('ready',this);this.fire('show',{});this._.editor.fire('dialogShow',this);this.foreach(function(X){X.setInitValue&&X.setInitValue();});},100,this);},layout:function(){var U=this;var S=a.document.getWindow().getViewPaneSize(),T=U.getSize();U.move(U._.moved?U._.position.x:(S.width-T.width)/2,U._.moved?U._.position.y:(S.height-T.height)/2);},foreach:function(S){var V=this;for(var T in V._.contents)for(var U in V._.contents[T])S.call(V,V._.contents[T][U]);return V;},reset:(function(){var S=function(T){if(T.reset)T.reset(1);};return function(){this.foreach(S);return this;};})(),setupContent:function(){var S=arguments;this.foreach(function(T){if(T.setup)T.setup.apply(T,S);});},commitContent:function(){var S=arguments;this.foreach(function(T){if(c&&this._.currentFocusIndex==T.focusIndex)T.getInputElement().$.blur();if(T.commit)T.commit.apply(T,S);});},hide:function(){if(!this.parts.dialog.isVisible())return;this.fire('hide',{});this._.editor.fire('dialogHide',this);var S=this._.element;S.setStyle('display','none');this.parts.dialog.setStyle('visibility','hidden');N(this);while(a.dialog._.currentTop!=this)a.dialog._.currentTop.hide();if(!this._.parentDialog)H();else{var T=this._.parentDialog.getElement().getFirst();T.setStyle('z-index',parseInt(T.$.style.zIndex,10)+Math.floor(this._.editor.config.baseFloatZIndex/2));}a.dialog._.currentTop=this._.parentDialog;if(!this._.parentDialog){a.dialog._.currentZIndex=null;S.removeListener('keydown',K);S.removeListener(b.opera?'keypress':'keyup',L);for(var U in {keyup:1,keydown:1,keypress:1})S.removeListener(U,R);var V=this._.editor;V.focus();if(V.mode=='wysiwyg'&&c){var W=V.getSelection();
W&&W.unlock(true);}}else a.dialog._.currentZIndex-=10;delete this._.parentDialog;this.foreach(function(X){X.resetInitValue&&X.resetInitValue();});},addPage:function(S){var ae=this;var T=[],U=S.label?' title="'+e.htmlEncode(S.label)+'"':'',V=S.elements,W=a.dialog._.uiElementBuilders.vbox.build(ae,{type:'vbox',className:'cke_dialog_page_contents',children:S.elements,expand:!!S.expand,padding:S.padding,style:S.style||'width: 100%;height:100%'},T),X=h.createFromHtml(T.join(''));X.setAttribute('role','tabpanel');var Y=b,Z='cke_'+S.id+'_'+e.getNextNumber(),aa=h.createFromHtml(['<a class="cke_dialog_tab"',ae._.pageCount>0?' cke_last':'cke_first',U,!!S.hidden?' style="display:none"':'',' id="',Z,'"',Y.gecko&&Y.version>=10900&&!Y.hc?'':' href="javascript:void(0)"',' tabIndex="-1"',' hidefocus="true"',' role="tab">',S.label,'</a>'].join(''));X.setAttribute('aria-labelledby',Z);ae._.tabs[S.id]=[aa,X];ae._.tabIdList.push(S.id);!S.hidden&&ae._.pageCount++;ae._.lastTab=aa;ae.updateStyle();var ab=ae._.contents[S.id]={},ac,ad=W.getChild();while(ac=ad.shift()){ab[ac.id]=ac;if(typeof ac.getChild=='function')ad.push.apply(ad,ac.getChild());}X.setAttribute('name',S.id);X.appendTo(ae.parts.contents);aa.unselectable();ae.parts.tabs.append(aa);if(S.accessKey){M(ae,ae,'CTRL+'+S.accessKey,P,O);ae._.accessKeyMap['CTRL+'+S.accessKey]=S.id;}},selectPage:function(S){if(this._.currentTabId==S)return;if(this.fire('selectPage',{page:S,currentPage:this._.currentTabId})===true)return;for(var T in this._.tabs){var U=this._.tabs[T][0],V=this._.tabs[T][1];if(T!=S){U.removeClass('cke_dialog_tab_selected');V.hide();}V.setAttribute('aria-hidden',T!=S);}var W=this._.tabs[S];W[0].addClass('cke_dialog_tab_selected');if(b.ie6Compat||b.ie7Compat){q(W[1]);W[1].show();setTimeout(function(){q(W[1],1);},0);}else W[1].show();this._.currentTabId=S;this._.currentTabIndex=e.indexOf(this._.tabIdList,S);},updateStyle:function(){this.parts.dialog[(this._.pageCount===1?'add':'remove')+'Class']('cke_single_page');},hidePage:function(S){var U=this;var T=U._.tabs[S]&&U._.tabs[S][0];if(!T||U._.pageCount==1||!T.isVisible())return;else if(S==U._.currentTabId)U.selectPage(o.call(U));T.hide();U._.pageCount--;U.updateStyle();},showPage:function(S){var U=this;var T=U._.tabs[S]&&U._.tabs[S][0];if(!T)return;T.show();U._.pageCount++;U.updateStyle();},getElement:function(){return this._.element;},getName:function(){return this._.name;},getContentElement:function(S,T){var U=this._.contents[S];return U&&U[T];},getValueOf:function(S,T){return this.getContentElement(S,T).getValue();
},setValueOf:function(S,T,U){return this.getContentElement(S,T).setValue(U);},getButton:function(S){return this._.buttons[S];},click:function(S){return this._.buttons[S].click();},disableButton:function(S){return this._.buttons[S].disable();},enableButton:function(S){return this._.buttons[S].enable();},getPageCount:function(){return this._.pageCount;},getParentEditor:function(){return this._.editor;},getSelectedElement:function(){return this.getParentEditor().getSelection().getSelectedElement();},addFocusable:function(S,T){var V=this;if(typeof T=='undefined'){T=V._.focusList.length;V._.focusList.push(new t(V,S,T));}else{V._.focusList.splice(T,0,new t(V,S,T));for(var U=T+1;U<V._.focusList.length;U++)V._.focusList[U].focusIndex++;}}};e.extend(a.dialog,{add:function(S,T){if(!this._.dialogDefinitions[S]||typeof T=='function')this._.dialogDefinitions[S]=T;},exists:function(S){return!!this._.dialogDefinitions[S];},getCurrent:function(){return a.dialog._.currentTop;},okButton:(function(){var S=function(T,U){U=U||{};return e.extend({id:'ok',type:'button',label:T.lang.common.ok,'class':'cke_dialog_ui_button_ok',onClick:function(V){var W=V.data.dialog;if(W.fire('ok',{hide:true}).hide!==false)W.hide();}},U,true);};S.type='button';S.override=function(T){return e.extend(function(U){return S(U,T);},{type:'button'},true);};return S;})(),cancelButton:(function(){var S=function(T,U){U=U||{};return e.extend({id:'cancel',type:'button',label:T.lang.common.cancel,'class':'cke_dialog_ui_button_cancel',onClick:function(V){var W=V.data.dialog;if(W.fire('cancel',{hide:true}).hide!==false)W.hide();}},U,true);};S.type='button';S.override=function(T){return e.extend(function(U){return S(U,T);},{type:'button'},true);};return S;})(),addUIElement:function(S,T){this._.uiElementBuilders[S]=T;}});a.dialog._={uiElementBuilders:{},dialogDefinitions:{},currentTop:null,currentZIndex:null};a.event.implementOn(a.dialog);a.event.implementOn(a.dialog.prototype,true);var u={resizable:3,minWidth:600,minHeight:400,buttons:[a.dialog.okButton,a.dialog.cancelButton]},v=function(S,T,U){for(var V=0,W;W=S[V];V++){if(W.id==T)return W;if(U&&W[U]){var X=v(W[U],T,U);if(X)return X;}}return null;},w=function(S,T,U,V,W){if(U){for(var X=0,Y;Y=S[X];X++){if(Y.id==U){S.splice(X,0,T);return T;}if(V&&Y[V]){var Z=w(Y[V],T,U,V,true);if(Z)return Z;}}if(W)return null;}S.push(T);return T;},x=function(S,T,U){for(var V=0,W;W=S[V];V++){if(W.id==T)return S.splice(V,1);if(U&&W[U]){var X=x(W[U],T,U);if(X)return X;}}return null;},y=function(S,T){this.dialog=S;
var U=T.contents;for(var V=0,W;W=U[V];V++)U[V]=W&&new z(S,W);e.extend(this,T);};y.prototype={getContents:function(S){return v(this.contents,S);},getButton:function(S){return v(this.buttons,S);},addContents:function(S,T){return w(this.contents,S,T);},addButton:function(S,T){return w(this.buttons,S,T);},removeContents:function(S){x(this.contents,S);},removeButton:function(S){x(this.buttons,S);}};function z(S,T){this._={dialog:S};e.extend(this,T);};z.prototype={get:function(S){return v(this.elements,S,'children');},add:function(S,T){return w(this.elements,S,T,'children');},remove:function(S){x(this.elements,S,'children');}};function A(S){var T=null,U=null,V=S.getElement().getFirst(),W=S.getParentEditor(),X=W.config.dialog_magnetDistance,Y=W.skin.margins||[0,0,0,0];if(typeof X=='undefined')X=20;function Z(ab){var ac=S.getSize(),ad=a.document.getWindow().getViewPaneSize(),ae=ab.data.$.screenX,af=ab.data.$.screenY,ag=ae-T.x,ah=af-T.y,ai,aj;T={x:ae,y:af};U.x+=ag;U.y+=ah;if(U.x+Y[3]<X)ai=-Y[3];else if(U.x-Y[1]>ad.width-ac.width-X)ai=ad.width-ac.width+(W.lang.dir=='rtl'?0:Y[1]);else ai=U.x;if(U.y+Y[0]<X)aj=-Y[0];else if(U.y-Y[2]>ad.height-ac.height-X)aj=ad.height-ac.height+Y[2];else aj=U.y;S.move(ai,aj,1);ab.data.preventDefault();};function aa(ab){a.document.removeListener('mousemove',Z);a.document.removeListener('mouseup',aa);if(b.ie6Compat){var ac=E.getChild(0).getFrameDocument();ac.removeListener('mousemove',Z);ac.removeListener('mouseup',aa);}};S.parts.title.on('mousedown',function(ab){T={x:ab.data.$.screenX,y:ab.data.$.screenY};a.document.on('mousemove',Z);a.document.on('mouseup',aa);U=S.getPosition();if(b.ie6Compat){var ac=E.getChild(0).getFrameDocument();ac.on('mousemove',Z);ac.on('mouseup',aa);}ab.data.preventDefault();},S);};function B(S){var T=S.definition,U=T.resizable;if(U==0)return;var V=S.getParentEditor(),W,X,Y,Z,aa,ab,ac=e.addFunction(function(af){aa=S.getSize();var ag=S.parts.contents,ah=ag.$.getElementsByTagName('iframe').length;if(ah){ab=h.createFromHtml('<div class="cke_dialog_resize_cover" style="height: 100%; position: absolute; width: 100%;"></div>');ag.append(ab);}X=aa.height-S.parts.contents.getSize('height',!(b.gecko||b.opera||c&&b.quirks));W=aa.width-S.parts.contents.getSize('width',1);Z={x:af.screenX,y:af.screenY};Y=a.document.getWindow().getViewPaneSize();a.document.on('mousemove',ad);a.document.on('mouseup',ae);if(b.ie6Compat){var ai=E.getChild(0).getFrameDocument();ai.on('mousemove',ad);ai.on('mouseup',ae);}af.preventDefault&&af.preventDefault();
});S.on('load',function(){var af='';if(U==1)af=' cke_resizer_horizontal';else if(U==2)af=' cke_resizer_vertical';var ag=h.createFromHtml('<div class="cke_resizer'+af+' cke_resizer_'+V.lang.dir+'"'+' title="'+e.htmlEncode(V.lang.resize)+'"'+' onmousedown="CKEDITOR.tools.callFunction('+ac+', event )"></div>');S.parts.footer.append(ag,1);});V.on('destroy',function(){e.removeFunction(ac);});function ad(af){var ag=V.lang.dir=='rtl',ah=(af.data.$.screenX-Z.x)*(ag?-1:1),ai=af.data.$.screenY-Z.y,aj=aa.width,ak=aa.height,al=aj+ah*(S._.moved?1:2),am=ak+ai*(S._.moved?1:2),an=S._.element.getFirst(),ao=ag&&an.getComputedStyle('right'),ap=S.getPosition();if(ap.y+am>Y.height)am=Y.height-ap.y;if((ag?ao:ap.x)+al>Y.width)al=Y.width-(ag?ao:ap.x);if(U==1||U==3)aj=Math.max(T.minWidth||0,al-W);if(U==2||U==3)ak=Math.max(T.minHeight||0,am-X);S.resize(aj,ak);if(!S._.moved)S.layout();af.data.preventDefault();};function ae(){a.document.removeListener('mouseup',ae);a.document.removeListener('mousemove',ad);if(ab){ab.remove();ab=null;}if(b.ie6Compat){var af=E.getChild(0).getFrameDocument();af.removeListener('mouseup',ae);af.removeListener('mousemove',ad);}};};var C,D={},E;function F(S){S.data.preventDefault(1);};function G(S){var T=a.document.getWindow(),U=S.config,V=U.dialog_backgroundCoverColor||'white',W=U.dialog_backgroundCoverOpacity,X=U.baseFloatZIndex,Y=e.genKey(V,W,X),Z=D[Y];if(!Z){var aa=['<div tabIndex="-1" style="position: ',b.ie6Compat?'absolute':'fixed','; z-index: ',X,'; top: 0px; left: 0px; ',!b.ie6Compat?'background-color: '+V:'','" class="cke_dialog_background_cover">'];if(b.ie6Compat){var ab=b.isCustomDomain(),ac="<html><body style=\\'background-color:"+V+";\\'></body></html>";aa.push('<iframe hidefocus="true" frameborder="0" id="cke_dialog_background_iframe" src="javascript:');aa.push('void((function(){document.open();'+(ab?"document.domain='"+document.domain+"';":'')+"document.write( '"+ac+"' );"+'document.close();'+'})())');aa.push('" style="position:absolute;left:0;top:0;width:100%;height: 100%;progid:DXImageTransform.Microsoft.Alpha(opacity=0)"></iframe>');}aa.push('</div>');Z=h.createFromHtml(aa.join(''));Z.setOpacity(W!=undefined?W:0.5);Z.on('keydown',F);Z.on('keypress',F);Z.on('keyup',F);Z.appendTo(a.document.getBody());D[Y]=Z;}else Z.show();E=Z;var ad=function(){var ag=T.getViewPaneSize();Z.setStyles({width:ag.width+'px',height:ag.height+'px'});},ae=function(){var ag=T.getScrollPosition(),ah=a.dialog._.currentTop;Z.setStyles({left:ag.x+'px',top:ag.y+'px'});if(ah)do{var ai=ah.getPosition();
ah.move(ai.x,ai.y);}while(ah=ah._.parentDialog)};C=ad;T.on('resize',ad);ad();if(!(b.mac&&b.webkit))Z.focus();if(b.ie6Compat){var af=function(){ae();arguments.callee.prevScrollHandler.apply(this,arguments);};T.$.setTimeout(function(){af.prevScrollHandler=window.onscroll||(function(){});window.onscroll=af;},0);ae();}};function H(){if(!E)return;var S=a.document.getWindow();E.hide();S.removeListener('resize',C);if(b.ie6Compat)S.$.setTimeout(function(){var T=window.onscroll&&window.onscroll.prevScrollHandler;window.onscroll=T||null;},0);C=null;};function I(){for(var S in D)D[S].remove();D={};};var J={},K=function(S){var T=S.data.$.ctrlKey||S.data.$.metaKey,U=S.data.$.altKey,V=S.data.$.shiftKey,W=String.fromCharCode(S.data.$.keyCode),X=J[(T?'CTRL+':'')+(U?'ALT+':'')+(V?'SHIFT+':'')+W];if(!X||!X.length)return;X=X[X.length-1];X.keydown&&X.keydown.call(X.uiElement,X.dialog,X.key);S.data.preventDefault();},L=function(S){var T=S.data.$.ctrlKey||S.data.$.metaKey,U=S.data.$.altKey,V=S.data.$.shiftKey,W=String.fromCharCode(S.data.$.keyCode),X=J[(T?'CTRL+':'')+(U?'ALT+':'')+(V?'SHIFT+':'')+W];if(!X||!X.length)return;X=X[X.length-1];if(X.keyup){X.keyup.call(X.uiElement,X.dialog,X.key);S.data.preventDefault();}},M=function(S,T,U,V,W){var X=J[U]||(J[U]=[]);X.push({uiElement:S,dialog:T,key:U,keyup:W||S.accessKeyUp,keydown:V||S.accessKeyDown});},N=function(S){for(var T in J){var U=J[T];for(var V=U.length-1;V>=0;V--){if(U[V].dialog==S||U[V].uiElement==S)U.splice(V,1);}if(U.length===0)delete J[T];}},O=function(S,T){if(S._.accessKeyMap[T])S.selectPage(S._.accessKeyMap[T]);},P=function(S,T){},Q={27:1,13:1},R=function(S){if(S.data.getKeystroke() in Q)S.data.stopPropagation();};(function(){k.dialog={uiElement:function(S,T,U,V,W,X,Y){if(arguments.length<4)return;var Z=(V.call?V(T):V)||'div',aa=['<',Z,' '],ab=(W&&W.call?W(T):W)||{},ac=(X&&X.call?X(T):X)||{},ad=(Y&&Y.call?Y.call(this,S,T):Y)||'',ae=this.domId=ac.id||e.getNextId()+'_uiElement',af=this.id=T.id,ag;ac.id=ae;var ah={};if(T.type)ah['cke_dialog_ui_'+T.type]=1;if(T.className)ah[T.className]=1;if(T.disabled)ah.cke_disabled=1;var ai=ac['class']&&ac['class'].split?ac['class'].split(' '):[];for(ag=0;ag<ai.length;ag++){if(ai[ag])ah[ai[ag]]=1;}var aj=[];for(ag in ah)aj.push(ag);ac['class']=aj.join(' ');if(T.title)ac.title=T.title;var ak=(T.style||'').split(';');if(T.align){var al=T.align;ab['margin-left']=al=='left'?0:'auto';ab['margin-right']=al=='right'?0:'auto';}for(ag in ab)ak.push(ag+':'+ab[ag]);if(T.hidden)ak.push('display:none');
for(ag=ak.length-1;ag>=0;ag--){if(ak[ag]==='')ak.splice(ag,1);}if(ak.length>0)ac.style=(ac.style?ac.style+'; ':'')+ak.join('; ');for(ag in ac)aa.push(ag+'="'+e.htmlEncode(ac[ag])+'" ');aa.push('>',ad,'</',Z,'>');U.push(aa.join(''));(this._||(this._={})).dialog=S;if(typeof T.isChanged=='boolean')this.isChanged=function(){return T.isChanged;};if(typeof T.isChanged=='function')this.isChanged=T.isChanged;if(typeof T.setValue=='function')this.setValue=e.override(this.setValue,function(an){return function(ao){an.call(this,T.setValue.call(this,ao));};});if(typeof T.getValue=='function')this.getValue=e.override(this.getValue,function(an){return function(){return T.getValue.call(this,an.call(this));};});a.event.implementOn(this);this.registerEvents(T);if(this.accessKeyUp&&this.accessKeyDown&&T.accessKey)M(this,S,'CTRL+'+T.accessKey);var am=this;S.on('load',function(){var an=am.getInputElement();if(an){var ao=am.type in {checkbox:1,ratio:1}&&c&&b.version<8?'cke_dialog_ui_focused':'';an.on('focus',function(){S._.tabBarMode=false;S._.hasFocus=true;am.fire('focus');ao&&this.addClass(ao);});an.on('blur',function(){am.fire('blur');ao&&this.removeClass(ao);});}});if(this.keyboardFocusable){this.tabIndex=T.tabIndex||0;this.focusIndex=S._.focusList.push(this)-1;this.on('focus',function(){S._.currentFocusIndex=am.focusIndex;});}e.extend(this,T);},hbox:function(S,T,U,V,W){if(arguments.length<4)return;this._||(this._={});var X=this._.children=T,Y=W&&W.widths||null,Z=W&&W.height||null,aa={},ab,ac=function(){var ae=['<tbody><tr class="cke_dialog_ui_hbox">'];for(ab=0;ab<U.length;ab++){var af='cke_dialog_ui_hbox_child',ag=[];if(ab===0)af='cke_dialog_ui_hbox_first';if(ab==U.length-1)af='cke_dialog_ui_hbox_last';ae.push('<td class="',af,'" role="presentation" ');if(Y){if(Y[ab])ag.push('width:'+m(Y[ab]));}else ag.push('width:'+Math.floor(100/U.length)+'%');if(Z)ag.push('height:'+m(Z));if(W&&W.padding!=undefined)ag.push('padding:'+m(W.padding));if(c&&b.quirks&&X[ab].align)ag.push('text-align:'+X[ab].align);if(ag.length>0)ae.push('style="'+ag.join('; ')+'" ');ae.push('>',U[ab],'</td>');}ae.push('</tr></tbody>');return ae.join('');},ad={role:'presentation'};W&&W.align&&(ad.align=W.align);k.dialog.uiElement.call(this,S,W||{type:'hbox'},V,'table',aa,ad,ac);},vbox:function(S,T,U,V,W){if(arguments.length<3)return;this._||(this._={});var X=this._.children=T,Y=W&&W.width||null,Z=W&&W.heights||null,aa=function(){var ab=['<table role="presentation" cellspacing="0" border="0" '];ab.push('style="');
if(W&&W.expand)ab.push('height:100%;');ab.push('width:'+m(Y||'100%'),';');ab.push('"');ab.push('align="',e.htmlEncode(W&&W.align||(S.getParentEditor().lang.dir=='ltr'?'left':'right')),'" ');ab.push('><tbody>');for(var ac=0;ac<U.length;ac++){var ad=[];ab.push('<tr><td role="presentation" ');if(Y)ad.push('width:'+m(Y||'100%'));if(Z)ad.push('height:'+m(Z[ac]));else if(W&&W.expand)ad.push('height:'+Math.floor(100/U.length)+'%');if(W&&W.padding!=undefined)ad.push('padding:'+m(W.padding));if(c&&b.quirks&&X[ac].align)ad.push('text-align:'+X[ac].align);if(ad.length>0)ab.push('style="',ad.join('; '),'" ');ab.push(' class="cke_dialog_ui_vbox_child">',U[ac],'</td></tr>');}ab.push('</tbody></table>');return ab.join('');};k.dialog.uiElement.call(this,S,W||{type:'vbox'},V,'div',null,{role:'presentation'},aa);}};})();k.dialog.uiElement.prototype={getElement:function(){return a.document.getById(this.domId);},getInputElement:function(){return this.getElement();},getDialog:function(){return this._.dialog;},setValue:function(S,T){this.getInputElement().setValue(S);!T&&this.fire('change',{value:S});return this;},getValue:function(){return this.getInputElement().getValue();},isChanged:function(){return false;},selectParentTab:function(){var V=this;var S=V.getInputElement(),T=S,U;while((T=T.getParent())&&T.$.className.search('cke_dialog_page_contents')==-1){}if(!T)return V;U=T.getAttribute('name');if(V._.dialog._.currentTabId!=U)V._.dialog.selectPage(U);return V;},focus:function(){this.selectParentTab().getInputElement().focus();return this;},registerEvents:function(S){var T=/^on([A-Z]\w+)/,U,V=function(X,Y,Z,aa){Y.on('load',function(){X.getInputElement().on(Z,aa,X);});};for(var W in S){if(!(U=W.match(T)))continue;if(this.eventProcessors[W])this.eventProcessors[W].call(this,this._.dialog,S[W]);else V(this,this._.dialog,U[1].toLowerCase(),S[W]);}return this;},eventProcessors:{onLoad:function(S,T){S.on('load',T,this);},onShow:function(S,T){S.on('show',T,this);},onHide:function(S,T){S.on('hide',T,this);}},accessKeyDown:function(S,T){this.focus();},accessKeyUp:function(S,T){},disable:function(){var S=this.getElement(),T=this.getInputElement();T.setAttribute('disabled','true');S.addClass('cke_disabled');},enable:function(){var S=this.getElement(),T=this.getInputElement();T.removeAttribute('disabled');S.removeClass('cke_disabled');},isEnabled:function(){return!this.getElement().hasClass('cke_disabled');},isVisible:function(){return this.getInputElement().isVisible();},isFocusable:function(){if(!this.isEnabled()||!this.isVisible())return false;
return true;}};k.dialog.hbox.prototype=e.extend(new k.dialog.uiElement(),{getChild:function(S){var T=this;if(arguments.length<1)return T._.children.concat();if(!S.splice)S=[S];if(S.length<2)return T._.children[S[0]];else return T._.children[S[0]]&&T._.children[S[0]].getChild?T._.children[S[0]].getChild(S.slice(1,S.length)):null;}},true);k.dialog.vbox.prototype=new k.dialog.hbox();(function(){var S={build:function(T,U,V){var W=U.children,X,Y=[],Z=[];for(var aa=0;aa<W.length&&(X=W[aa]);aa++){var ab=[];Y.push(ab);Z.push(a.dialog._.uiElementBuilders[X.type].build(T,X,ab));}return new k.dialog[U.type](T,Z,Y,V,U);}};a.dialog.addUIElement('hbox',S);a.dialog.addUIElement('vbox',S);})();a.dialogCommand=function(S){this.dialogName=S;};a.dialogCommand.prototype={exec:function(S){b.opera?e.setTimeout(function(){S.openDialog(this.dialogName);},0,this):S.openDialog(this.dialogName);},canUndo:false,editorFocus:c||b.webkit};(function(){var S=/^([a]|[^a])+$/,T=/^\d*$/,U=/^\d*(?:\.\d+)?$/,V=/^(((\d*(\.\d+))|(\d*))(px|\%)?)?$/,W=/^(((\d*(\.\d+))|(\d*))(px|em|ex|in|cm|mm|pt|pc|\%)?)?$/i,X=/^(\s*[\w-]+\s*:\s*[^:;]+(?:;|$))*$/;a.VALIDATE_OR=1;a.VALIDATE_AND=2;a.dialog.validate={functions:function(){var Y=arguments;return function(){var Z=this&&this.getValue?this.getValue():Y[0],aa=undefined,ab=2,ac=[],ad;for(ad=0;ad<Y.length;ad++){if(typeof Y[ad]=='function')ac.push(Y[ad]);else break;}if(ad<Y.length&&typeof Y[ad]=='string'){aa=Y[ad];ad++;}if(ad<Y.length&&typeof Y[ad]=='number')ab=Y[ad];var ae=ab==2?true:false;for(ad=0;ad<ac.length;ad++){if(ab==2)ae=ae&&ac[ad](Z);else ae=ae||ac[ad](Z);}return!ae?aa:true;};},regex:function(Y,Z){return function(){var aa=this&&this.getValue?this.getValue():arguments[0];return!Y.test(aa)?Z:true;};},notEmpty:function(Y){return this.regex(S,Y);},integer:function(Y){return this.regex(T,Y);},number:function(Y){return this.regex(U,Y);},cssLength:function(Y){return this.functions(function(Z){return W.test(e.trim(Z));},Y);},htmlLength:function(Y){return this.functions(function(Z){return V.test(e.trim(Z));},Y);},inlineStyle:function(Y){return this.functions(function(Z){return X.test(e.trim(Z));},Y);},equals:function(Y,Z){return this.functions(function(aa){return aa==Y;},Z);},notEqual:function(Y,Z){return this.functions(function(aa){return aa!=Y;},Z);}};a.on('instanceDestroyed',function(Y){if(e.isEmpty(a.instances)){var Z;while(Z=a.dialog._.currentTop)Z.hide();I();}var aa=Y.editor._.storedDialogs;for(var ab in aa)aa[ab].destroy();});})();e.extend(a.editor.prototype,{openDialog:function(S,T){if(this.mode=='wysiwyg'&&c){var U=this.getSelection();
U&&U.lock();}var V=a.dialog._.dialogDefinitions[S],W=this.skin.dialog;if(a.dialog._.currentTop===null)G(this);if(typeof V=='function'&&W._isLoaded){var X=this._.storedDialogs||(this._.storedDialogs={}),Y=X[S]||(X[S]=new a.dialog(this,S));T&&T.call(Y,Y);Y.show();return Y;}else if(V=='failed'){H();throw new Error('[CKEDITOR.dialog.openDialog] Dialog "'+S+'" failed when loading definition.');}var Z=this;function aa(ac){var ad=a.dialog._.dialogDefinitions[S],ae=Z.skin.dialog;if(!ae._isLoaded||ab&&typeof ac=='undefined')return;if(typeof ad!='function')a.dialog._.dialogDefinitions[S]='failed';Z.openDialog(S,T);};if(typeof V=='string'){var ab=1;a.scriptLoader.load(a.getUrl(V),aa,null,0,1);}a.skins.load(this,'dialog',aa);return null;}});})();j.add('dialog',{requires:['dialogui']});j.add('styles',{requires:['selection'],init:function(m){m.on('contentDom',function(){m.document.setCustomData('cke_includeReadonly',!m.config.disableReadonlyStyling);});}});a.editor.prototype.attachStyleStateChange=function(m,n){var o=this._.styleStateChangeCallbacks;if(!o){o=this._.styleStateChangeCallbacks=[];this.on('selectionChange',function(p){for(var q=0;q<o.length;q++){var r=o[q],s=r.style.checkActive(p.data.path)?1:2;r.fn.call(this,s);}});}o.push({style:m,fn:n});};a.STYLE_BLOCK=1;a.STYLE_INLINE=2;a.STYLE_OBJECT=3;(function(){var m={address:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,time:1,meter:1,menu:1,command:1,keygen:1,output:1,progress:1,details:1,datagrid:1,datalist:1},n={a:1,embed:1,hr:1,img:1,li:1,object:1,ol:1,table:1,td:1,tr:1,th:1,ul:1,dl:1,dt:1,dd:1,form:1,audio:1,video:1},o=/\s*(?:;\s*|$)/,p=/#\((.+?)\)/g,q=d.walker.bookmark(0,1),r=d.walker.whitespaces(1);a.style=function(T,U){var W=this;if(U){T=e.clone(T);L(T.attributes,U);L(T.styles,U);}var V=W.element=T.element?typeof T.element=='string'?T.element.toLowerCase():T.element:'*';W.type=m[V]?1:n[V]?3:2;if(typeof W.element=='object')W.type=3;W._={definition:T};};a.style.prototype={apply:function(T){S.call(this,T,false);},remove:function(T){S.call(this,T,true);},applyToRange:function(T){var U=this;return(U.applyToRange=U.type==2?t:U.type==1?x:U.type==3?v:null).call(U,T);},removeFromRange:function(T){var U=this;return(U.removeFromRange=U.type==2?u:U.type==1?y:U.type==3?w:null).call(U,T);},applyToObject:function(T){K(T,this);},checkActive:function(T){var Y=this;switch(Y.type){case 1:return Y.checkElementRemovable(T.block||T.blockLimit,true);case 3:case 2:var U=T.elements;
for(var V=0,W;V<U.length;V++){W=U[V];if(Y.type==2&&(W==T.block||W==T.blockLimit))continue;if(Y.type==3){var X=W.getName();if(!(typeof Y.element=='string'?X==Y.element:X in Y.element))continue;}if(Y.checkElementRemovable(W,true))return true;}}return false;},checkApplicable:function(T){switch(this.type){case 2:case 1:break;case 3:return T.lastElement.getAscendant(this.element,true);}return true;},checkElementRemovable:function(T,U){var ae=this;var V=ae._.definition;if(!T||!V.ignoreReadonly&&T.isReadOnly())return false;var W,X=T.getName();if(typeof ae.element=='string'?X==ae.element:X in ae.element){if(!U&&!T.hasAttributes())return true;W=M(V);if(W._length){for(var Y in W){if(Y=='_length')continue;var Z=T.getAttribute(Y)||'';if(Y=='style'?R(W[Y],P(Z,false)):W[Y]==Z){if(!U)return true;}else if(U)return false;}if(U)return true;}else return true;}var aa=N(ae)[T.getName()];if(aa){if(!(W=aa.attributes))return true;for(var ab=0;ab<W.length;ab++){Y=W[ab][0];var ac=T.getAttribute(Y);if(ac){var ad=W[ab][1];if(ad===null||typeof ad=='string'&&ac==ad||ad.test(ac))return true;}}}return false;},buildPreview:function(T){var U=this._.definition,V=[],W=U.element;if(W=='bdo')W='span';V=['<',W];var X=U.attributes;if(X)for(var Y in X)V.push(' ',Y,'="',X[Y],'"');var Z=a.style.getStyleText(U);if(Z)V.push(' style="',Z,'"');V.push('>',T||U.name,'</',W,'>');return V.join('');}};a.style.getStyleText=function(T){var U=T._ST;if(U)return U;U=T.styles;var V=T.attributes&&T.attributes.style||'',W='';if(V.length)V=V.replace(o,';');for(var X in U){var Y=U[X],Z=(X+':'+Y).replace(o,';');if(Y=='inherit')W+=Z;else V+=Z;}if(V.length)V=P(V);V+=W;return T._ST=V;};function s(T){var U,V;while(T=T.getParent()){if(T.getName()=='body')break;if(T.getAttribute('data-nostyle'))U=T;else if(!V){var W=T.getAttribute('contentEditable');if(W=='false')U=T;else if(W=='true')V=1;}}return U;};function t(T){var ay=this;var U=T.document;if(T.collapsed){var V=J(ay,U);T.insertNode(V);T.moveToPosition(V,2);return;}var W=ay.element,X=ay._.definition,Y,Z=X.ignoreReadonly,aa=Z||X.includeReadonly;if(aa==undefined)aa=U.getCustomData('cke_includeReadonly');var ab=f[W]||(Y=true,f.span);T.enlarge(1,1);T.trim();var ac=T.createBookmark(),ad=ac.startNode,ae=ac.endNode,af=ad,ag;if(!Z){var ah=s(ad),ai=s(ae);if(ah)af=ah.getNextSourceNode(true);if(ai)ae=ai;}if(af.getPosition(ae)==2)af=0;while(af){var aj=false;if(af.equals(ae)){af=null;aj=true;}else{var ak=af.type,al=ak==1?af.getName():null,am=al&&af.getAttribute('contentEditable')=='false',an=al&&af.getAttribute('data-nostyle');
if(al&&af.data('cke-bookmark')){af=af.getNextSourceNode(true);continue;}if(!al||ab[al]&&!an&&(!am||aa)&&(af.getPosition(ae)|4|0|8)==4+0+8&&(!X.childRule||X.childRule(af))){var ao=af.getParent();if(ao&&((ao.getDtd()||f.span)[W]||Y)&&(!X.parentRule||X.parentRule(ao))){if(!ag&&(!al||!f.$removeEmpty[al]||(af.getPosition(ae)|4|0|8)==4+0+8)){ag=new d.range(U);ag.setStartBefore(af);}if(ak==3||am||ak==1&&!af.getChildCount()){var ap=af,aq;while((aj=!ap.getNext(q))&&(aq=ap.getParent(),ab[aq.getName()])&&(aq.getPosition(ad)|2|0|8)==2+0+8&&(!X.childRule||X.childRule(aq)))ap=aq;ag.setEndAfter(ap);}}else aj=true;}else aj=true;af=af.getNextSourceNode(an||am);}if(aj&&ag&&!ag.collapsed){var ar=J(ay,U),as=ar.hasAttributes(),at=ag.getCommonAncestor(),au={styles:{},attrs:{},blockedStyles:{},blockedAttrs:{}},av,aw,ax;while(ar&&at){if(at.getName()==W){for(av in X.attributes){if(au.blockedAttrs[av]||!(ax=at.getAttribute(aw)))continue;if(ar.getAttribute(av)==ax)au.attrs[av]=1;else au.blockedAttrs[av]=1;}for(aw in X.styles){if(au.blockedStyles[aw]||!(ax=at.getStyle(aw)))continue;if(ar.getStyle(aw)==ax)au.styles[aw]=1;else au.blockedStyles[aw]=1;}}at=at.getParent();}for(av in au.attrs)ar.removeAttribute(av);for(aw in au.styles)ar.removeStyle(aw);if(as&&!ar.hasAttributes())ar=null;if(ar){ag.extractContents().appendTo(ar);G(ay,ar);ag.insertNode(ar);ar.mergeSiblings();if(!c)ar.$.normalize();}else{ar=new h('span');ag.extractContents().appendTo(ar);ag.insertNode(ar);G(ay,ar);ar.remove(true);}ag=null;}}T.moveToBookmark(ac);T.shrink(2);};function u(T){T.enlarge(1,1);var U=T.createBookmark(),V=U.startNode;if(T.collapsed){var W=new d.elementPath(V.getParent()),X;for(var Y=0,Z;Y<W.elements.length&&(Z=W.elements[Y]);Y++){if(Z==W.block||Z==W.blockLimit)break;if(this.checkElementRemovable(Z)){var aa;if(T.collapsed&&(T.checkBoundaryOfElement(Z,2)||(aa=T.checkBoundaryOfElement(Z,1)))){X=Z;X.match=aa?'start':'end';}else{Z.mergeSiblings();if(Z.getName()==this.element)F(this,Z);else H(Z,N(this)[Z.getName()]);}}}if(X){var ab=V;for(Y=0;true;Y++){var ac=W.elements[Y];if(ac.equals(X))break;else if(ac.match)continue;else ac=ac.clone();ac.append(ab);ab=ac;}ab[X.match=='start'?'insertBefore':'insertAfter'](X);}}else{var ad=U.endNode,ae=this;function af(){var ai=new d.elementPath(V.getParent()),aj=new d.elementPath(ad.getParent()),ak=null,al=null;for(var am=0;am<ai.elements.length;am++){var an=ai.elements[am];if(an==ai.block||an==ai.blockLimit)break;if(ae.checkElementRemovable(an))ak=an;}for(am=0;am<aj.elements.length;
am++){an=aj.elements[am];if(an==aj.block||an==aj.blockLimit)break;if(ae.checkElementRemovable(an))al=an;}if(al)ad.breakParent(al);if(ak)V.breakParent(ak);};af();var ag=V;while(!ag.equals(ad)){var ah=ag.getNextSourceNode();if(ag.type==1&&this.checkElementRemovable(ag)){if(ag.getName()==this.element)F(this,ag);else H(ag,N(this)[ag.getName()]);if(ah.type==1&&ah.contains(V)){af();ah=V.getNext();}}ag=ah;}}T.moveToBookmark(U);};function v(T){var U=T.getCommonAncestor(true,true),V=U.getAscendant(this.element,true);V&&!V.isReadOnly()&&K(V,this);};function w(T){var U=T.getCommonAncestor(true,true),V=U.getAscendant(this.element,true);if(!V)return;var W=this,X=W._.definition,Y=X.attributes;if(Y)for(var Z in Y)V.removeAttribute(Z,Y[Z]);if(X.styles)for(var aa in X.styles){if(!X.styles.hasOwnProperty(aa))continue;V.removeStyle(aa);}};function x(T){var U=T.createBookmark(true),V=T.createIterator();V.enforceRealBlocks=true;if(this._.enterMode)V.enlargeBr=this._.enterMode!=2;var W,X=T.document,Y;while(W=V.getNextParagraph()){if(!W.isReadOnly()){var Z=J(this,X,W);z(W,Z);}}T.moveToBookmark(U);};function y(T){var Y=this;var U=T.createBookmark(1),V=T.createIterator();V.enforceRealBlocks=true;V.enlargeBr=Y._.enterMode!=2;var W;while(W=V.getNextParagraph()){if(Y.checkElementRemovable(W))if(W.is('pre')){var X=Y._.enterMode==2?null:T.document.createElement(Y._.enterMode==1?'p':'div');X&&W.copyAttributes(X);z(W,X);}else F(Y,W,1);}T.moveToBookmark(U);};function z(T,U){var V=!U;if(V){U=T.getDocument().createElement('div');T.copyAttributes(U);}var W=U&&U.is('pre'),X=T.is('pre'),Y=W&&!X,Z=!W&&X;if(Y)U=E(T,U);else if(Z)U=D(V?[T.getHtml()]:B(T),U);else T.moveChildren(U);U.replace(T);if(W)A(U);else if(V)I(U);};function A(T){var U;if(!((U=T.getPrevious(r))&&U.is&&U.is('pre')))return;var V=C(U.getHtml(),/\n$/,'')+'\n\n'+C(T.getHtml(),/^\n/,'');if(c)T.$.outerHTML='<pre>'+V+'</pre>';else T.setHtml(V);U.remove();};function B(T){var U=/(\S\s*)\n(?:\s|(<span[^>]+data-cke-bookmark.*?\/span>))*\n(?!$)/gi,V=T.getName(),W=C(T.getOuterHtml(),U,function(Y,Z,aa){return Z+'</pre>'+aa+'<pre>';}),X=[];W.replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi,function(Y,Z){X.push(Z);});return X;};function C(T,U,V){var W='',X='';T=T.replace(/(^<span[^>]+data-cke-bookmark.*?\/span>)|(<span[^>]+data-cke-bookmark.*?\/span>$)/gi,function(Y,Z,aa){Z&&(W=Z);aa&&(X=aa);return '';});return W+T.replace(U,V)+X;};function D(T,U){var V;if(T.length>1)V=new d.documentFragment(U.getDocument());for(var W=0;W<T.length;W++){var X=T[W];X=X.replace(/(\r\n|\r)/g,'\n');
X=C(X,/^[ \t]*\n/,'');X=C(X,/\n$/,'');X=C(X,/^[ \t]+|[ \t]+$/g,function(Z,aa,ab){if(Z.length==1)return '&nbsp;';else if(!aa)return e.repeat('&nbsp;',Z.length-1)+' ';else return ' '+e.repeat('&nbsp;',Z.length-1);});X=X.replace(/\n/g,'<br>');X=X.replace(/[ \t]{2,}/g,function(Z){return e.repeat('&nbsp;',Z.length-1)+' ';});if(V){var Y=U.clone();Y.setHtml(X);V.append(Y);}else U.setHtml(X);}return V||U;};function E(T,U){var V=T.getBogus();V&&V.remove();var W=T.getHtml();W=C(W,/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g,'');W=W.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi,'$1');W=W.replace(/([ \t\n\r]+|&nbsp;)/g,' ');W=W.replace(/<br\b[^>]*>/gi,'\n');if(c){var X=T.getDocument().createElement('div');X.append(U);U.$.outerHTML='<pre>'+W+'</pre>';U.copyAttributes(X.getFirst());U=X.getFirst().remove();}else U.setHtml(W);return U;};function F(T,U){var V=T._.definition,W=e.extend({},V.attributes,N(T)[U.getName()]),X=V.styles,Y=e.isEmpty(W)&&e.isEmpty(X);for(var Z in W){if((Z=='class'||T._.definition.fullMatch)&&U.getAttribute(Z)!=O(Z,W[Z]))continue;Y=U.hasAttribute(Z);U.removeAttribute(Z);}for(var aa in X){if(T._.definition.fullMatch&&U.getStyle(aa)!=O(aa,X[aa],true))continue;Y=Y||!!U.getStyle(aa);U.removeStyle(aa);}if(Y)!f.$block[U.getName()]||T._.enterMode==2&&!U.hasAttributes()?I(U):U.renameNode(T._.enterMode==1?'p':'div');};function G(T,U){var V=T._.definition,W=V.attributes,X=V.styles,Y=N(T),Z=U.getElementsByTag(T.element);for(var aa=Z.count();--aa>=0;)F(T,Z.getItem(aa));for(var ab in Y){if(ab!=T.element){Z=U.getElementsByTag(ab);for(aa=Z.count()-1;aa>=0;aa--){var ac=Z.getItem(aa);H(ac,Y[ab]);}}}};function H(T,U){var V=U&&U.attributes;if(V)for(var W=0;W<V.length;W++){var X=V[W][0],Y;if(Y=T.getAttribute(X)){var Z=V[W][1];if(Z===null||Z.test&&Z.test(Y)||typeof Z=='string'&&Y==Z)T.removeAttribute(X);}}I(T);};function I(T){if(!T.hasAttributes())if(f.$block[T.getName()]){var U=T.getPrevious(r),V=T.getNext(r);if(U&&(U.type==3||!U.isBlockBoundary({br:1})))T.append('br',1);if(V&&(V.type==3||!V.isBlockBoundary({br:1})))T.append('br');T.remove(true);}else{var W=T.getFirst(),X=T.getLast();T.remove(true);if(W){W.type==1&&W.mergeSiblings();if(X&&!W.equals(X)&&X.type==1)X.mergeSiblings();}}};function J(T,U,V){var W,X=T._.definition,Y=T.element;if(Y=='*')Y='span';W=new h(Y,U);if(V)V.copyAttributes(W);W=K(W,T);if(U.getCustomData('doc_processing_style')&&W.hasAttribute('id'))W.removeAttribute('id');else U.setCustomData('doc_processing_style',1);return W;};function K(T,U){var V=U._.definition,W=V.attributes,X=a.style.getStyleText(V);
if(W)for(var Y in W)T.setAttribute(Y,W[Y]);if(X)T.setAttribute('style',X);return T;};function L(T,U){for(var V in T)T[V]=T[V].replace(p,function(W,X){return U[X];});};function M(T){var U=T._AC;if(U)return U;U={};var V=0,W=T.attributes;if(W)for(var X in W){V++;U[X]=W[X];}var Y=a.style.getStyleText(T);if(Y){if(!U.style)V++;U.style=Y;}U._length=V;return T._AC=U;};function N(T){if(T._.overrides)return T._.overrides;var U=T._.overrides={},V=T._.definition.overrides;if(V){if(!e.isArray(V))V=[V];for(var W=0;W<V.length;W++){var X=V[W],Y,Z,aa;if(typeof X=='string')Y=X.toLowerCase();else{Y=X.element?X.element.toLowerCase():T.element;aa=X.attributes;}Z=U[Y]||(U[Y]={});if(aa){var ab=Z.attributes=Z.attributes||[];for(var ac in aa)ab.push([ac.toLowerCase(),aa[ac]]);}}}return U;};function O(T,U,V){var W=new h('span');W[V?'setStyle':'setAttribute'](T,U);return W[V?'getStyle':'getAttribute'](T);};function P(T,U){var V;if(U!==false){var W=new h('span');W.setAttribute('style',T);V=W.getAttribute('style')||'';}else V=T;V=V.replace(/(font-family:)(.*?)(?=;|$)/,function(X,Y,Z){var aa=Z.split(',');for(var ab=0;ab<aa.length;ab++)aa[ab]=e.trim(aa[ab].replace(/["']/g,''));return Y+aa.join(',');});return V.replace(/\s*([;:])\s*/,'$1').replace(/([^\s;])$/,'$1;').replace(/,\s+/g,',').replace(/\"/g,'').toLowerCase();};function Q(T){var U={};T.replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(V,W,X){U[W]=X;});return U;};function R(T,U){typeof T=='string'&&(T=Q(T));typeof U=='string'&&(U=Q(U));for(var V in T){if(!(V in U&&(U[V]==T[V]||T[V]=='inherit'||U[V]=='inherit')))return false;}return true;};function S(T,U){var V=T.getSelection(),W=V.createBookmarks(1),X=V.getRanges(),Y=U?this.removeFromRange:this.applyToRange,Z,aa=X.createIterator();while(Z=aa.getNextRange())Y.call(this,Z);if(W.length==1&&W[0].collapsed){V.selectRanges(X);T.getById(W[0].startNode).remove();}else V.selectBookmarks(W);T.removeCustomData('doc_processing_style');};})();a.styleCommand=function(m){this.style=m;};a.styleCommand.prototype.exec=function(m){var o=this;m.focus();var n=m.document;if(n)if(o.state==2)o.style.apply(n);else if(o.state==1)o.style.remove(n);return!!n;};a.stylesSet=new a.resourceManager('','stylesSet');a.addStylesSet=e.bind(a.stylesSet.add,a.stylesSet);a.loadStylesSet=function(m,n,o){a.stylesSet.addExternal(m,n,'');a.stylesSet.load(m,o);};a.editor.prototype.getStylesSet=function(m){if(!this._.stylesDefinitions){var n=this,o=n.config.stylesCombo_stylesSet||n.config.stylesSet||'default';
if(o instanceof Array){n._.stylesDefinitions=o;m(o);return;}var p=o.split(':'),q=p[0],r=p[1],s=j.registered.styles.path;a.stylesSet.addExternal(q,r?p.slice(1).join(':'):s+'styles/'+q+'.js','');a.stylesSet.load(q,function(t){n._.stylesDefinitions=t[q];m(n._.stylesDefinitions);});}else m(this._.stylesDefinitions);};j.add('domiterator');(function(){function m(s){var t=this;if(arguments.length<1)return;t.range=s;t.forceBrBreak=0;t.enlargeBr=1;t.enforceRealBlocks=0;t._||(t._={});};var n=/^[\r\n\t ]+$/,o=d.walker.bookmark(false,true),p=d.walker.whitespaces(true),q=function(s){return o(s)&&p(s);};function r(s,t,u){var v=s.getNextSourceNode(t,null,u);while(!o(v))v=v.getNextSourceNode(t,null,u);return v;};m.prototype={getNextParagraph:function(s){var S=this;var t,u,v,w,x,y;if(!S._.lastNode){u=S.range.clone();u.shrink(1,true);w=u.endContainer.hasAscendant('pre',true)||u.startContainer.hasAscendant('pre',true);u.enlarge(S.forceBrBreak&&!w||!S.enlargeBr?3:2);var z=new d.walker(u),A=d.walker.bookmark(true,true);z.evaluator=A;S._.nextNode=z.next();z=new d.walker(u);z.evaluator=A;var B=z.previous();S._.lastNode=B.getNextSourceNode(true);if(S._.lastNode&&S._.lastNode.type==3&&!e.trim(S._.lastNode.getText())&&S._.lastNode.getParent().isBlockBoundary()){var C=new d.range(u.document);C.moveToPosition(S._.lastNode,4);if(C.checkEndOfBlock()){var D=new d.elementPath(C.endContainer),E=D.block||D.blockLimit;S._.lastNode=E.getNextSourceNode(true);}}if(!S._.lastNode){S._.lastNode=S._.docEndMarker=u.document.createText('');S._.lastNode.insertAfter(B);}u=null;}var F=S._.nextNode;B=S._.lastNode;S._.nextNode=null;while(F){var G=0,H=F.hasAscendant('pre'),I=F.type!=1,J=0;if(!I){var K=F.getName();if(F.isBlockBoundary(S.forceBrBreak&&!H&&{br:1})){if(K=='br')I=1;else if(!u&&!F.getChildCount()&&K!='hr'){t=F;v=F.equals(B);break;}if(u){u.setEndAt(F,3);if(K!='br')S._.nextNode=F;}G=1;}else{if(F.getFirst()){if(!u){u=new d.range(S.range.document);u.setStartAt(F,3);}F=F.getFirst();continue;}I=1;}}else if(F.type==3)if(n.test(F.getText()))I=0;if(I&&!u){u=new d.range(S.range.document);u.setStartAt(F,3);}v=(!G||I)&&F.equals(B);if(u&&!G)while(!F.getNext(q)&&!v){var L=F.getParent();if(L.isBlockBoundary(S.forceBrBreak&&!H&&{br:1})){G=1;I=0;v=v||L.equals(B);u.setEndAt(L,2);break;}F=L;I=1;v=F.equals(B);J=1;}if(I)u.setEndAt(F,4);F=r(F,J,B);v=!F;if(v||G&&u)break;}if(!t){if(!u){S._.docEndMarker&&S._.docEndMarker.remove();S._.nextNode=null;return null;}var M=new d.elementPath(u.startContainer),N=M.blockLimit,O={div:1,th:1,td:1};
t=M.block;if(!t&&!S.enforceRealBlocks&&O[N.getName()]&&u.checkStartOfBlock()&&u.checkEndOfBlock())t=N;else if(!t||S.enforceRealBlocks&&t.getName()=='li'){t=S.range.document.createElement(s||'p');u.extractContents().appendTo(t);t.trim();u.insertNode(t);x=y=true;}else if(t.getName()!='li'){if(!u.checkStartOfBlock()||!u.checkEndOfBlock()){t=t.clone(false);u.extractContents().appendTo(t);t.trim();var P=u.splitBlock();x=!P.wasStartOfBlock;y=!P.wasEndOfBlock;u.insertNode(t);}}else if(!v)S._.nextNode=t.equals(B)?null:r(u.getBoundaryNodes().endNode,1,B);}if(x){var Q=t.getPrevious();if(Q&&Q.type==1)if(Q.getName()=='br')Q.remove();else if(Q.getLast()&&Q.getLast().$.nodeName.toLowerCase()=='br')Q.getLast().remove();}if(y){var R=t.getLast();if(R&&R.type==1&&R.getName()=='br')if(c||R.getPrevious(o)||R.getNext(o))R.remove();}if(!S._.nextNode)S._.nextNode=v||t.equals(B)?null:r(t,1,B);return t;}};d.range.prototype.createIterator=function(){return new m(this);};})();j.add('panelbutton',{requires:['button'],onLoad:function(){function m(n){var p=this;var o=p._;if(o.state==0)return;p.createPanel(n);if(o.on){o.panel.hide();return;}o.panel.showBlock(p._.id,p.document.getById(p._.id),4);};k.panelButton=e.createClass({base:k.button,$:function(n){var p=this;var o=n.panel;delete n.panel;p.base(n);p.document=o&&o.parent&&o.parent.getDocument()||a.document;o.block={attributes:o.attributes};p.hasArrow=true;p.click=m;p._={panelDefinition:o};},statics:{handler:{create:function(n){return new k.panelButton(n);}}},proto:{createPanel:function(n){var o=this._;if(o.panel)return;var p=this._.panelDefinition||{},q=this._.panelDefinition.block,r=p.parent||a.document.getBody(),s=this._.panel=new k.floatPanel(n,r,p),t=s.addBlock(o.id,q),u=this;s.onShow=function(){if(u.className)this.element.getFirst().addClass(u.className+'_panel');u.setState(1);o.on=1;if(u.onOpen)u.onOpen();};s.onHide=function(v){if(u.className)this.element.getFirst().removeClass(u.className+'_panel');u.setState(u.modes&&u.modes[n.mode]?2:0);o.on=0;if(!v&&u.onClose)u.onClose();};s.onEscape=function(){s.hide();u.document.getById(o.id).focus();};if(this.onBlock)this.onBlock(s,t);t.onHide=function(){o.on=0;u.setState(2);};}}});},beforeInit:function(m){m.ui.addHandler('panelbutton',k.panelButton.handler);}});a.UI_PANELBUTTON='panelbutton';j.add('floatpanel',{requires:['panel']});(function(){var m={},n=false;function o(p,q,r,s,t){var u=e.genKey(q.getUniqueId(),r.getUniqueId(),p.skinName,p.lang.dir,p.uiColor||'',s.css||'',t||''),v=m[u];
if(!v){v=m[u]=new k.panel(q,s);v.element=r.append(h.createFromHtml(v.renderHtml(p),q));v.element.setStyles({display:'none',position:'absolute'});}return v;};k.floatPanel=e.createClass({$:function(p,q,r,s){r.forceIFrame=1;var t=q.getDocument(),u=o(p,t,q,r,s||0),v=u.element,w=v.getFirst().getFirst();this.element=v;this._={editor:p,panel:u,parentElement:q,definition:r,document:t,iframe:w,children:[],dir:p.lang.dir};p.on('mode',function(){this.hide();},this);},proto:{addBlock:function(p,q){return this._.panel.addBlock(p,q);},addListBlock:function(p,q){return this._.panel.addListBlock(p,q);},getBlock:function(p){return this._.panel.getBlock(p);},showBlock:function(p,q,r,s,t){var u=this._.panel,v=u.showBlock(p);this.allowBlur(false);n=1;this._.returnFocus=this._.editor.focusManager.hasFocus?this._.editor:new h(a.document.$.activeElement);var w=this.element,x=this._.iframe,y=this._.definition,z=q.getDocumentPosition(w.getDocument()),A=this._.dir=='rtl',B=z.x+(s||0),C=z.y+(t||0);if(A&&(r==1||r==4))B+=q.$.offsetWidth;else if(!A&&(r==2||r==3))B+=q.$.offsetWidth-1;if(r==3||r==4)C+=q.$.offsetHeight-1;this._.panel._.offsetParentId=q.getId();w.setStyles({top:C+'px',left:0,display:''});w.setOpacity(0);w.getFirst().removeStyle('width');if(!this._.blurSet){var D=c?x:new d.window(x.$.contentWindow);a.event.useCapture=true;D.on('blur',function(E){var G=this;if(!G.allowBlur())return;var F=E.data.getTarget();if(F.getName&&F.getName()!='iframe')return;if(G.visible&&!G._.activeChild&&!n){delete G._.returnFocus;G.hide();}},this);D.on('focus',function(){this._.focused=true;this.hideChild();this.allowBlur(true);},this);a.event.useCapture=false;this._.blurSet=1;}u.onEscape=e.bind(function(E){if(this.onEscape&&this.onEscape(E)===false)return false;},this);e.setTimeout(function(){if(A)B-=w.$.offsetWidth;var E=e.bind(function(){var F=w.getFirst();if(v.autoSize){var G=v.element.$;if(b.gecko||b.opera)G=G.parentNode;if(c)G=G.document.body;var H=G.scrollWidth;if(c&&b.quirks&&H>0)H+=(F.$.offsetWidth||0)-(F.$.clientWidth||0)+3;H+=4;F.setStyle('width',H+'px');v.element.addClass('cke_frameLoaded');var I=v.element.$.scrollHeight;if(c&&b.quirks&&I>0)I+=(F.$.offsetHeight||0)-(F.$.clientHeight||0)+3;F.setStyle('height',I+'px');u._.currentBlock.element.setStyle('display','none').removeStyle('display');}else F.removeStyle('height');var J=u.element,K=J.getWindow(),L=K.getScrollPosition(),M=K.getViewPaneSize(),N={height:J.$.offsetHeight,width:J.$.offsetWidth};if(A?B<0:B+N.width>M.width+L.x)B+=N.width*(A?1:-1);
if(C+N.height>M.height+L.y)C-=N.height;if(c){var O=new h(w.$.offsetParent),P=O;if(P.getName()=='html')P=P.getDocument().getBody();if(P.getComputedStyle('direction')=='rtl')if(b.ie8Compat)B-=w.getDocument().getDocumentElement().$.scrollLeft*2;else B-=O.$.scrollWidth-O.$.clientWidth;}var Q=w.getFirst(),R;if(R=Q.getCustomData('activePanel'))R.onHide&&R.onHide.call(this,1);Q.setCustomData('activePanel',this);w.setStyles({top:C+'px',left:B+'px'});w.setOpacity(1);},this);u.isLoaded?E():u.onLoad=E;e.setTimeout(function(){x.$.contentWindow.focus();this.allowBlur(true);},0,this);},b.air?200:0,this);this.visible=1;if(this.onShow)this.onShow.call(this);n=0;},hide:function(p){var r=this;if(r.visible&&(!r.onHide||r.onHide.call(r)!==true)){r.hideChild();b.gecko&&r._.iframe.getFrameDocument().$.activeElement.blur();r.element.setStyle('display','none');r.visible=0;r.element.getFirst().removeCustomData('activePanel');var q=p!==false&&r._.returnFocus;if(q){if(b.webkit&&q.type)q.getWindow().$.focus();q.focus();}}},allowBlur:function(p){var q=this._.panel;if(p!=undefined)q.allowBlur=p;return q.allowBlur;},showAsChild:function(p,q,r,s,t,u){if(this._.activeChild==p&&p._.panel._.offsetParentId==r.getId())return;this.hideChild();p.onHide=e.bind(function(){e.setTimeout(function(){if(!this._.focused)this.hide();},0,this);},this);this._.activeChild=p;this._.focused=false;p.showBlock(q,r,s,t,u);if(b.ie7Compat||b.ie8&&b.ie6Compat)setTimeout(function(){p.element.getChild(0).$.style.cssText+='';},100);},hideChild:function(){var p=this._.activeChild;if(p){delete p.onHide;delete p._.returnFocus;delete this._.activeChild;p.hide();}}}});a.on('instanceDestroyed',function(){var p=e.isEmpty(a.instances);for(var q in m){var r=m[q];if(p)r.destroy();else r.element.hide();}p&&(m={});});})();j.add('menu',{beforeInit:function(m){var n=m.config.menu_groups.split(','),o=m._.menuGroups={},p=m._.menuItems={};for(var q=0;q<n.length;q++)o[n[q]]=q+1;m.addMenuGroup=function(r,s){o[r]=s||100;};m.addMenuItem=function(r,s){if(o[s.group])p[r]=new a.menuItem(this,r,s);};m.addMenuItems=function(r){for(var s in r)this.addMenuItem(s,r[s]);};m.getMenuItem=function(r){return p[r];};m.removeMenuItem=function(r){delete p[r];};},requires:['floatpanel']});(function(){a.menu=e.createClass({$:function(n,o){var r=this;o=r._.definition=o||{};r.id=e.getNextId();r.editor=n;r.items=[];r._.listeners=[];r._.level=o.level||1;var p=e.extend({},o.panel,{css:n.skin.editor.css,level:r._.level-1,block:{}}),q=p.block.attributes=p.attributes||{};
!q.role&&(q.role='menu');r._.panelDefinition=p;},_:{onShow:function(){var v=this;var n=v.editor.getSelection();if(c)n&&n.lock();var o=n&&n.getStartElement(),p=v._.listeners,q=[];v.removeAll();for(var r=0;r<p.length;r++){var s=p[r](o,n);if(s)for(var t in s){var u=v.editor.getMenuItem(t);if(u&&(!u.command||v.editor.getCommand(u.command).state)){u.state=s[t];v.add(u);}}}},onClick:function(n){this.hide(false);if(n.onClick)n.onClick();else if(n.command)this.editor.execCommand(n.command);},onEscape:function(n){var o=this.parent;if(o){o._.panel.hideChild();var p=o._.panel._.panel._.currentBlock,q=p._.focusIndex;p._.markItem(q);}else if(n==27)this.hide();return false;},onHide:function(){if(c){var n=this.editor.getSelection();n&&n.unlock();}this.onHide&&this.onHide();},showSubMenu:function(n){var v=this;var o=v._.subMenu,p=v.items[n],q=p.getItems&&p.getItems();if(!q){v._.panel.hideChild();return;}var r=v._.panel.getBlock(v.id);r._.focusIndex=n;if(o)o.removeAll();else{o=v._.subMenu=new a.menu(v.editor,e.extend({},v._.definition,{level:v._.level+1},true));o.parent=v;o._.onClick=e.bind(v._.onClick,v);}for(var s in q){var t=v.editor.getMenuItem(s);if(t){t.state=q[s];o.add(t);}}var u=v._.panel.getBlock(v.id).element.getDocument().getById(v.id+String(n));o.show(u,2);}},proto:{add:function(n){if(!n.order)n.order=this.items.length;this.items.push(n);},removeAll:function(){this.items=[];},show:function(n,o,p,q){if(!this.parent){this._.onShow();if(!this.items.length)return;}o=o||(this.editor.lang.dir=='rtl'?2:1);var r=this.items,s=this.editor,t=this._.panel,u=this._.element;if(!t){t=this._.panel=new k.floatPanel(this.editor,a.document.getBody(),this._.panelDefinition,this._.level);t.onEscape=e.bind(function(F){if(this._.onEscape(F)===false)return false;},this);t.onHide=e.bind(function(){this._.onHide&&this._.onHide();},this);var v=t.addBlock(this.id,this._.panelDefinition.block);v.autoSize=true;var w=v.keys;w[40]='next';w[9]='next';w[38]='prev';w[2228224+9]='prev';w[s.lang.dir=='rtl'?37:39]=c?'mouseup':'click';w[32]=c?'mouseup':'click';c&&(w[13]='mouseup');u=this._.element=v.element;u.addClass(s.skinClass);var x=u.getDocument();x.getBody().setStyle('overflow','hidden');x.getElementsByTag('html').getItem(0).setStyle('overflow','hidden');this._.itemOverFn=e.addFunction(function(F){var G=this;clearTimeout(G._.showSubTimeout);G._.showSubTimeout=e.setTimeout(G._.showSubMenu,s.config.menu_subMenuDelay||400,G,[F]);},this);this._.itemOutFn=e.addFunction(function(F){clearTimeout(this._.showSubTimeout);
},this);this._.itemClickFn=e.addFunction(function(F){var H=this;var G=H.items[F];if(G.state==0){H.hide();return;}if(G.getItems)H._.showSubMenu(F);else H._.onClick(G);},this);}m(r);var y=s.container.getChild(1),z=y.hasClass('cke_mixed_dir_content')?' cke_mixed_dir_content':'',A=['<div class="cke_menu'+z+'" role="presentation">'],B=r.length,C=B&&r[0].group;for(var D=0;D<B;D++){var E=r[D];if(C!=E.group){A.push('<div class="cke_menuseparator" role="separator"></div>');C=E.group;}E.render(this,D,A);}A.push('</div>');u.setHtml(A.join(''));k.fire('ready',this);if(this.parent)this.parent._.panel.showAsChild(t,this.id,n,o,p,q);else t.showBlock(this.id,n,o,p,q);s.fire('menuShow',[t]);},addListener:function(n){this._.listeners.push(n);},hide:function(n){var o=this;o._.onHide&&o._.onHide();o._.panel&&o._.panel.hide(n);}}});function m(n){n.sort(function(o,p){if(o.group<p.group)return-1;else if(o.group>p.group)return 1;return o.order<p.order?-1:o.order>p.order?1:0;});};a.menuItem=e.createClass({$:function(n,o,p){var q=this;e.extend(q,p,{order:0,className:'cke_button_'+o});q.group=n._.menuGroups[q.group];q.editor=n;q.name=o;},proto:{render:function(n,o,p){var w=this;var q=n.id+String(o),r=typeof w.state=='undefined'?2:w.state,s=' cke_'+(r==1?'on':r==0?'disabled':'off'),t=w.label;if(w.className)s+=' '+w.className;var u=w.getItems;p.push('<span class="cke_menuitem'+(w.icon&&w.icon.indexOf('.png')==-1?' cke_noalphafix':'')+'">'+'<a id="',q,'" class="',s,'" href="javascript:void(\'',(w.label||'').replace("'",''),'\')" title="',w.label,'" tabindex="-1"_cke_focus=1 hidefocus="true" role="menuitem"'+(u?'aria-haspopup="true"':'')+(r==0?'aria-disabled="true"':'')+(r==1?'aria-pressed="true"':''));if(b.opera||b.gecko&&b.mac)p.push(' onkeypress="return false;"');if(b.gecko)p.push(' onblur="this.style.cssText = this.style.cssText;"');var v=(w.iconOffset||0)*-16;p.push(' onmouseover="CKEDITOR.tools.callFunction(',n._.itemOverFn,',',o,');" onmouseout="CKEDITOR.tools.callFunction(',n._.itemOutFn,',',o,');" '+(c?'onclick="return false;" onmouseup':'onclick')+'="CKEDITOR.tools.callFunction(',n._.itemClickFn,',',o,'); return false;"><span class="cke_icon_wrapper"><span class="cke_icon"'+(w.icon?' style="background-image:url('+a.getUrl(w.icon)+');background-position:0 '+v+'px;"':'')+'></span></span>'+'<span class="cke_label">');if(u)p.push('<span class="cke_menuarrow">','<span>&#',w.editor.lang.dir=='rtl'?'9668':'9658',';</span>','</span>');p.push(t,'</span></a></span>');}}});})();i.menu_groups='clipboard,form,tablecell,tablecellproperties,tablerow,tablecolumn,table,anchor,link,image,flash,checkbox,radio,textfield,hiddenfield,imagebutton,button,select,textarea,div';
(function(){var m;j.add('editingblock',{init:function(n){if(!n.config.editingBlock)return;n.on('themeSpace',function(o){if(o.data.space=='contents')o.data.html+='<br>';});n.on('themeLoaded',function(){n.fireOnce('editingBlockReady');});n.on('uiReady',function(){n.setMode(n.config.startupMode);});n.on('afterSetData',function(){if(!m){function o(){m=true;n.getMode().loadData(n.getData());m=false;};if(n.mode)o();else n.on('mode',function(){if(n.mode){o();n.removeListener('mode',arguments.callee);}});}});n.on('beforeGetData',function(){if(!m&&n.mode){m=true;n.setData(n.getMode().getData(),null,1);m=false;}});n.on('getSnapshot',function(o){if(n.mode)o.data=n.getMode().getSnapshotData();});n.on('loadSnapshot',function(o){if(n.mode)n.getMode().loadSnapshotData(o.data);});n.on('mode',function(o){o.removeListener();b.webkit&&n.container.on('focus',function(){n.focus();});if(n.config.startupFocus)n.focus();setTimeout(function(){n.fireOnce('instanceReady');a.fire('instanceReady',null,n);},0);});n.on('destroy',function(){var o=this;if(o.mode)o._.modes[o.mode].unload(o.getThemeSpace('contents'));});}});a.editor.prototype.mode='';a.editor.prototype.addMode=function(n,o){o.name=n;(this._.modes||(this._.modes={}))[n]=o;};a.editor.prototype.setMode=function(n){this.fire('beforeSetMode',{newMode:n});var o,p=this.getThemeSpace('contents'),q=this.checkDirty();if(this.mode){if(n==this.mode)return;this._.previousMode=this.mode;this.fire('beforeModeUnload');var r=this.getMode();o=r.getData();r.unload(p);this.mode='';}p.setHtml('');var s=this.getMode(n);if(!s)throw '[CKEDITOR.editor.setMode] Unknown mode "'+n+'".';if(!q)this.on('mode',function(){this.resetDirty();this.removeListener('mode',arguments.callee);});s.load(p,typeof o!='string'?this.getData():o);};a.editor.prototype.getMode=function(n){return this._.modes&&this._.modes[n||this.mode];};a.editor.prototype.focus=function(){this.forceNextSelectionCheck();var n=this.getMode();if(n)n.focus();};})();i.startupMode='wysiwyg';i.editingBlock=true;(function(){function m(){var B=this;try{var y=B.getSelection();if(!y||!y.document.getWindow().$)return;var z=y.getStartElement(),A=new d.elementPath(z);if(!A.compare(B._.selectionPreviousPath)){B._.selectionPreviousPath=A;B.fire('selectionChange',{selection:y,path:A,element:z});}}catch(C){}};var n,o;function p(){o=true;if(n)return;q.call(this);n=e.setTimeout(q,200,this);};function q(){n=null;if(o){e.setTimeout(m,0,this);o=false;}};function r(y){function z(D){return D&&D.type==1&&D.getName() in f.$removeEmpty;
};function A(D){var E=y.document.getBody();return!D.is('body')&&E.getChildCount()==1;};var B=y.startContainer,C=y.startOffset;if(B.type==3)return false;return!e.trim(B.getHtml())?z(B)||A(B):z(B.getChild(C-1))||z(B.getChild(C));};var s={modes:{wysiwyg:1,source:1},readOnly:c||b.webkit,exec:function(y){switch(y.mode){case 'wysiwyg':y.document.$.execCommand('SelectAll',false,null);y.forceNextSelectionCheck();y.selectionChange();break;case 'source':var z=y.textarea.$;if(c)z.createTextRange().execCommand('SelectAll');else{z.selectionStart=0;z.selectionEnd=z.value.length;}z.focus();}},canUndo:false};function t(y){w(y);var z=y.createText('​');y.setCustomData('cke-fillingChar',z);return z;};function u(y){return y&&y.getCustomData('cke-fillingChar');};function v(y){var z=y&&u(y);if(z)if(z.getCustomData('ready'))w(y);else z.setCustomData('ready',1);};function w(y){var z=y&&y.removeCustomData('cke-fillingChar');if(z){z.setText(z.getText().replace(/\u200B/g,''));z=0;}};j.add('selection',{init:function(y){if(b.webkit){y.on('selectionChange',function(){v(y.document);});y.on('beforeSetMode',function(){w(y.document);});y.on('key',function(D){switch(D.data.keyCode){case 13:case 2228224+13:case 37:case 39:case 8:w(y.document);}},null,null,10);var z,A;function B(){var D=y.document,E=u(D);if(E){var F=D.$.defaultView.getSelection();if(F.type=='Caret'&&F.anchorNode==E.$)A=1;z=E.getText();E.setText(z.replace(/\u200B/g,''));}};function C(){var D=y.document,E=u(D);if(E){E.setText(z);if(A){D.$.defaultView.getSelection().setPosition(E.$,E.getLength());A=0;}}};y.on('beforeUndoImage',B);y.on('afterUndoImage',C);y.on('beforeGetData',B,null,null,0);y.on('getData',C);}y.on('contentDom',function(){var D=y.document,E=D.getBody(),F=D.getDocumentElement();if(c){var G,H,I=1;E.on('focusin',function(M){if(M.data.$.srcElement.nodeName!='BODY')return;if(G){if(I){try{G.select();}catch(O){}var N=D.getCustomData('cke_locked_selection');if(N){N.unlock();N.lock();}}G=null;}});E.on('focus',function(){H=1;L();});E.on('beforedeactivate',function(M){if(M.data.$.toElement)return;H=0;I=1;});if(c&&b.version<8)y.on('blur',function(M){try{y.document&&y.document.$.selection.empty();}catch(N){}});F.on('mousedown',function(){I=0;});F.on('mouseup',function(){I=1;});if(c&&(b.ie7Compat||b.version<8||b.quirks))F.on('click',function(M){if(M.data.getTarget().getName()=='html')y.getSelection().getRanges()[0].select();});var J;E.on('mousedown',function(M){if(M.data.$.button==2){var N=y.document.$.selection;if(N.type=='None')J=y.window.getScrollPosition();
}K();});E.on('mouseup',function(M){if(M.data.$.button==2&&J){y.document.$.documentElement.scrollLeft=J.x;y.document.$.documentElement.scrollTop=J.y;}J=null;H=1;setTimeout(function(){L(true);},0);});E.on('keydown',K);E.on('keyup',function(){H=1;L();});D.on('selectionchange',L);function K(){H=0;};function L(M){if(H){var N=y.document,O=y.getSelection(),P=O&&O.getNative();if(M&&P&&P.type=='None')if(!N.$.queryCommandEnabled('InsertImage')){e.setTimeout(L,50,this,true);return;}var Q;if(P&&P.type&&P.type!='Control'&&(Q=P.createRange())&&(Q=Q.parentElement())&&(Q=Q.nodeName)&&Q.toLowerCase() in {input:1,textarea:1})return;G=P&&O.getRanges()[0];p.call(y);}};}else{D.on('mouseup',p,y);D.on('keyup',p,y);D.on('selectionchange',p,y);}});y.on('contentDomUnload',y.forceNextSelectionCheck,y);y.addCommand('selectAll',s);y.ui.addButton('SelectAll',{label:y.lang.selectAll,command:'selectAll'});y.selectionChange=p;b.ie9Compat&&y.on('destroy',function(){var D=y.getSelection();D&&D.getNative().clear();},null,null,9);}});a.editor.prototype.getSelection=function(){return this.document&&this.document.getSelection();};a.editor.prototype.forceNextSelectionCheck=function(){delete this._.selectionPreviousPath;};g.prototype.getSelection=function(){var y=new d.selection(this);return!y||y.isInvalid?null:y;};a.SELECTION_NONE=1;a.SELECTION_TEXT=2;a.SELECTION_ELEMENT=3;d.selection=function(y){var B=this;var z=y.getCustomData('cke_locked_selection');if(z)return z;B.document=y;B.isLocked=0;B._={cache:{}};if(c){var A=B.getNative().createRange();if(!A||A.item&&A.item(0).ownerDocument!=B.document.$||A.parentElement&&A.parentElement().ownerDocument!=B.document.$)B.isInvalid=true;}return B;};var x={img:1,hr:1,li:1,table:1,tr:1,td:1,th:1,embed:1,object:1,ol:1,ul:1,a:1,input:1,form:1,select:1,textarea:1,button:1,fieldset:1,thead:1,tfoot:1};d.selection.prototype={getNative:c?function(){return this._.cache.nativeSel||(this._.cache.nativeSel=this.document.$.selection);}:function(){return this._.cache.nativeSel||(this._.cache.nativeSel=this.document.getWindow().$.getSelection());},getType:c?function(){var y=this._.cache;if(y.type)return y.type;var z=1;try{var A=this.getNative(),B=A.type;if(B=='Text')z=2;if(B=='Control')z=3;if(A.createRange().parentElement)z=2;}catch(C){}return y.type=z;}:function(){var y=this._.cache;if(y.type)return y.type;var z=2,A=this.getNative();if(!A)z=1;else if(A.rangeCount==1){var B=A.getRangeAt(0),C=B.startContainer;if(C==B.endContainer&&C.nodeType==1&&B.endOffset-B.startOffset==1&&x[C.childNodes[B.startOffset].nodeName.toLowerCase()])z=3;
}return y.type=z;},getRanges:(function(){var y=c?(function(){function z(B){return new d.node(B).getIndex();};var A=function(B,C){B=B.duplicate();B.collapse(C);var D=B.parentElement(),E=D.ownerDocument;if(!D.hasChildNodes())return{container:D,offset:0};var F=D.children,G,H,I=B.duplicate(),J=0,K=F.length-1,L=-1,M,N;while(J<=K){L=Math.floor((J+K)/2);G=F[L];I.moveToElementText(G);M=I.compareEndPoints('StartToStart',B);if(M>0)K=L-1;else if(M<0)J=L+1;else if(b.ie9Compat&&G.tagName=='BR'){var O='cke_range_marker';B.execCommand('CreateBookmark',false,O);G=E.getElementsByName(O)[0];var P=z(G);D.removeChild(G);return{container:D,offset:P};}else return{container:D,offset:z(G)};}if(L==-1||L==F.length-1&&M<0){I.moveToElementText(D);I.setEndPoint('StartToStart',B);N=I.text.replace(/(\r\n|\r)/g,'\n').length;F=D.childNodes;if(!N){G=F[F.length-1];if(G.nodeType==1)return{container:D,offset:F.length};else return{container:G,offset:G.nodeValue.length};}var Q=F.length;while(N>0)N-=F[--Q].nodeValue.length;return{container:F[Q],offset:-N};}else{I.collapse(M>0?true:false);I.setEndPoint(M>0?'StartToStart':'EndToStart',B);N=I.text.replace(/(\r\n|\r)/g,'\n').length;if(!N)return{container:D,offset:z(G)+(M>0?0:1)};while(N>0)try{H=G[M>0?'previousSibling':'nextSibling'];N-=H.nodeValue.length;G=H;}catch(R){return{container:D,offset:z(G)};}return{container:G,offset:M>0?-N:G.nodeValue.length+N};}};return function(){var L=this;var B=L.getNative(),C=B&&B.createRange(),D=L.getType(),E;if(!B)return[];if(D==2){E=new d.range(L.document);var F=A(C,true);E.setStart(new d.node(F.container),F.offset);F=A(C);E.setEnd(new d.node(F.container),F.offset);if(E.endContainer.getPosition(E.startContainer)&4&&E.endOffset<=E.startContainer.getIndex())E.collapse();return[E];}else if(D==3){var G=[];for(var H=0;H<C.length;H++){var I=C.item(H),J=I.parentNode,K=0;E=new d.range(L.document);for(;K<J.childNodes.length&&J.childNodes[K]!=I;K++){}E.setStart(new d.node(J),K);E.setEnd(new d.node(J),K+1);G.push(E);}return G;}return[];};})():function(){var z=[],A,B=this.document,C=this.getNative();if(!C)return z;if(!C.rangeCount){A=new d.range(B);A.moveToElementEditStart(B.getBody());z.push(A);}for(var D=0;D<C.rangeCount;D++){var E=C.getRangeAt(D);A=new d.range(B);A.setStart(new d.node(E.startContainer),E.startOffset);A.setEnd(new d.node(E.endContainer),E.endOffset);z.push(A);}return z;};return function(z){var A=this._.cache;if(A.ranges&&!z)return A.ranges;else if(!A.ranges)A.ranges=new d.rangeList(y.call(this));if(z){var B=A.ranges;
for(var C=0;C<B.length;C++){var D=B[C],E=D.getCommonAncestor();if(E.isReadOnly())B.splice(C,1);if(D.collapsed)continue;if(D.startContainer.isReadOnly()){var F=D.startContainer;while(F){if(F.is('body')||!F.isReadOnly())break;if(F.type==1&&F.getAttribute('contentEditable')=='false')D.setStartAfter(F);F=F.getParent();}}var G=D.startContainer,H=D.endContainer,I=D.startOffset,J=D.endOffset,K=D.clone();if(G&&G.type==3)if(I>=G.getLength())K.setStartAfter(G);else K.setStartBefore(G);if(H&&H.type==3)if(!J)K.setEndBefore(H);else K.setEndAfter(H);var L=new d.walker(K);L.evaluator=function(M){if(M.type==1&&M.isReadOnly()){var N=D.clone();D.setEndBefore(M);if(D.collapsed)B.splice(C--,1);if(!(M.getPosition(K.endContainer)&16)){N.setStartAfter(M);if(!N.collapsed)B.splice(C+1,0,N);}return true;}return false;};L.next();}}return A.ranges;};})(),getStartElement:function(){var F=this;var y=F._.cache;if(y.startElement!==undefined)return y.startElement;var z,A=F.getNative();switch(F.getType()){case 3:return F.getSelectedElement();case 2:var B=F.getRanges()[0];if(B){if(!B.collapsed){B.optimize();while(1){var C=B.startContainer,D=B.startOffset;if(D==(C.getChildCount?C.getChildCount():C.getLength())&&!C.isBlockBoundary())B.setStartAfter(C);else break;}z=B.startContainer;if(z.type!=1)return z.getParent();z=z.getChild(B.startOffset);if(!z||z.type!=1)z=B.startContainer;else{var E=z.getFirst();while(E&&E.type==1){z=E;E=E.getFirst();}}}else{z=B.startContainer;if(z.type!=1)z=z.getParent();}z=z.$;}}return y.startElement=z?new h(z):null;},getSelectedElement:function(){var y=this._.cache;if(y.selectedElement!==undefined)return y.selectedElement;var z=this,A=e.tryThese(function(){return z.getNative().createRange().item(0);},function(){var B,C,D=z.getRanges()[0],E=D.getCommonAncestor(1,1),F={table:1,ul:1,ol:1,dl:1};for(var G in F){if(B=E.getAscendant(G,1))break;}if(B){var H=new d.range(this.document);H.setStartAt(B,1);H.setEnd(D.startContainer,D.startOffset);var I=e.extend(F,f.$listItem,f.$tableContent),J=new d.walker(H),K=function(L,M){return function(N,O){if(N.type==3&&(!e.trim(N.getText())||N.getParent().data('cke-bookmark')))return true;var P;if(N.type==1){P=N.getName();if(P=='br'&&M&&N.equals(N.getParent().getBogus()))return true;if(O&&P in I||P in f.$removeEmpty)return true;}L.halted=1;return false;};};J.guard=K(J);if(J.checkBackward()&&!J.halted){J=new d.walker(H);H.setStart(D.endContainer,D.endOffset);H.setEndAt(B,2);J.guard=K(J,1);if(J.checkForward()&&!J.halted)C=B.$;}}if(!C)throw 0;
return C;},function(){var B=z.getRanges()[0],C,D;for(var E=2;E&&!((C=B.getEnclosedNode())&&C.type==1&&x[C.getName()]&&(D=C));E--)B.shrink(1);return D.$;});return y.selectedElement=A?new h(A):null;},getSelectedText:function(){var y=this._.cache;if(y.selectedText!==undefined)return y.selectedText;var z='',A=this.getNative();if(this.getType()==2)z=c?A.createRange().text:A.toString();return y.selectedText=z;},lock:function(){var y=this;y.getRanges();y.getStartElement();y.getSelectedElement();y.getSelectedText();y._.cache.nativeSel={};y.isLocked=1;y.document.setCustomData('cke_locked_selection',y);},unlock:function(y){var D=this;var z=D.document,A=z.getCustomData('cke_locked_selection');if(A){z.setCustomData('cke_locked_selection',null);if(y){var B=A.getSelectedElement(),C=!B&&A.getRanges();D.isLocked=0;D.reset();z.getBody().focus();if(B)D.selectElement(B);else D.selectRanges(C);}}if(!A||!y){D.isLocked=0;D.reset();}},reset:function(){this._.cache={};},selectElement:function(y){var A=this;if(A.isLocked){var z=new d.range(A.document);z.setStartBefore(y);z.setEndAfter(y);A._.cache.selectedElement=y;A._.cache.startElement=y;A._.cache.ranges=new d.rangeList(z);A._.cache.type=3;return;}z=new d.range(y.getDocument());z.setStartBefore(y);z.setEndAfter(y);z.select();A.document.fire('selectionchange');A.reset();},selectRanges:function(y){var M=this;if(M.isLocked){M._.cache.selectedElement=null;M._.cache.startElement=y[0]&&y[0].getTouchedStartNode();M._.cache.ranges=new d.rangeList(y);M._.cache.type=2;return;}if(c){if(y.length>1){var z=y[y.length-1];y[0].setEnd(z.endContainer,z.endOffset);y.length=1;}if(y[0])y[0].select();M.reset();}else{var A=M.getNative();if(!A)return;if(y.length){A.removeAllRanges();b.webkit&&w(M.document);}for(var B=0;B<y.length;B++){if(B<y.length-1){var C=y[B],D=y[B+1],E=C.clone();E.setStart(C.endContainer,C.endOffset);E.setEnd(D.startContainer,D.startOffset);if(!E.collapsed){E.shrink(1,true);var F=E.getCommonAncestor(),G=E.getEnclosedNode();if(F.isReadOnly()||G&&G.isReadOnly()){D.setStart(C.startContainer,C.startOffset);y.splice(B--,1);continue;}}}var H=y[B],I=M.document.$.createRange(),J=H.startContainer;if(H.collapsed&&(b.opera||b.gecko&&b.version<10900)&&J.type==1&&!J.getChildCount())J.appendText('');if(H.collapsed&&b.webkit&&r(H)){var K=t(M.document);H.insertNode(K);var L=K.getNext();if(L&&!K.getPrevious()&&L.type==1&&L.getName()=='br'){w(M.document);H.moveToPosition(L,3);}else H.moveToPosition(K,4);}I.setStart(H.startContainer.$,H.startOffset);try{I.setEnd(H.endContainer.$,H.endOffset);
}catch(N){if(N.toString().indexOf('NS_ERROR_ILLEGAL_VALUE')>=0){H.collapse(1);I.setEnd(H.endContainer.$,H.endOffset);}else throw N;}A.addRange(I);}M.document.fire('selectionchange');M.reset();}},createBookmarks:function(y){return this.getRanges().createBookmarks(y);},createBookmarks2:function(y){return this.getRanges().createBookmarks2(y);},selectBookmarks:function(y){var z=[];for(var A=0;A<y.length;A++){var B=new d.range(this.document);B.moveToBookmark(y[A]);z.push(B);}this.selectRanges(z);return this;},getCommonAncestor:function(){var y=this.getRanges(),z=y[0].startContainer,A=y[y.length-1].endContainer;return z.getCommonAncestor(A);},scrollIntoView:function(){var y=this.getStartElement();y.scrollIntoView();}};})();(function(){var m=d.walker.whitespaces(true),n=/\ufeff|\u00a0/,o={table:1,tbody:1,tr:1};d.range.prototype.select=c?function(p){var A=this;var q=A.collapsed,r,s,t,u=A.getEnclosedNode();if(u)try{t=A.document.$.body.createControlRange();t.addElement(u.$);t.select();return;}catch(B){}if(A.startContainer.type==1&&A.startContainer.getName() in o||A.endContainer.type==1&&A.endContainer.getName() in o)A.shrink(1,true);var v=A.createBookmark(),w=v.startNode,x;if(!q)x=v.endNode;t=A.document.$.body.createTextRange();t.moveToElementText(w.$);t.moveStart('character',1);if(x){var y=A.document.$.body.createTextRange();y.moveToElementText(x.$);t.setEndPoint('EndToEnd',y);t.moveEnd('character',-1);}else{var z=w.getNext(m);r=!(z&&z.getText&&z.getText().match(n))&&(p||!w.hasPrevious()||w.getPrevious().is&&w.getPrevious().is('br'));s=A.document.createElement('span');s.setHtml('&#65279;');s.insertBefore(w);if(r)A.document.createText('\ufeff').insertBefore(w);}A.setStartBefore(w);w.remove();if(q){if(r){t.moveStart('character',-1);t.select();A.document.$.selection.clear();}else t.select();A.moveToPosition(s,3);s.remove();}else{A.setEndBefore(x);x.remove();t.select();}A.document.fire('selectionchange');}:function(){this.document.getSelection().selectRanges([this]);};})();(function(){var m=a.htmlParser.cssStyle,n=e.cssLength,o=/^((?:\d*(?:\.\d+))|(?:\d+))(.*)?$/i;function p(r,s){var t=o.exec(r),u=o.exec(s);if(t){if(!t[2]&&u[2]=='px')return u[1];if(t[2]=='px'&&!u[2])return u[1]+'px';}return s;};var q={elements:{$:function(r){var s=r.attributes,t=s&&s['data-cke-realelement'],u=t&&new a.htmlParser.fragment.fromHtml(decodeURIComponent(t)),v=u&&u.children[0];if(v&&r.attributes['data-cke-resizable']){var w=new m(r).rules,x=v.attributes,y=w.width,z=w.height;y&&(x.width=p(x.width,y));
z&&(x.height=p(x.height,z));}return v;}}};j.add('fakeobjects',{requires:['htmlwriter'],afterInit:function(r){var s=r.dataProcessor,t=s&&s.htmlFilter;if(t)t.addRules(q);}});a.editor.prototype.createFakeElement=function(r,s,t,u){var v=this.lang.fakeobjects,w=v[t]||v.unknown,x={'class':s,src:a.getUrl('images/spacer.gif'),'data-cke-realelement':encodeURIComponent(r.getOuterHtml()),'data-cke-real-node-type':r.type,alt:w,title:w,align:r.getAttribute('align')||''};if(t)x['data-cke-real-element-type']=t;if(u){x['data-cke-resizable']=u;var y=new m(),z=r.getAttribute('width'),A=r.getAttribute('height');z&&(y.rules.width=n(z));A&&(y.rules.height=n(A));y.populate(x);}return this.document.createElement('img',{attributes:x});};a.editor.prototype.createFakeParserElement=function(r,s,t,u){var v=this.lang.fakeobjects,w=v[t]||v.unknown,x,y=new a.htmlParser.basicWriter();r.writeHtml(y);x=y.getHtml();var z={'class':s,src:a.getUrl('images/spacer.gif'),'data-cke-realelement':encodeURIComponent(x),'data-cke-real-node-type':r.type,alt:w,title:w,align:r.attributes.align||''};if(t)z['data-cke-real-element-type']=t;if(u){z['data-cke-resizable']=u;var A=r.attributes,B=new m(),C=A.width,D=A.height;C!=undefined&&(B.rules.width=n(C));D!=undefined&&(B.rules.height=n(D));B.populate(z);}return new a.htmlParser.element('img',z);};a.editor.prototype.restoreRealElement=function(r){if(r.data('cke-real-node-type')!=1)return null;var s=h.createFromHtml(decodeURIComponent(r.data('cke-realelement')),this.document);if(r.data('cke-resizable')){var t=r.getStyle('width'),u=r.getStyle('height');t&&s.setAttribute('width',p(s.getAttribute('width'),t));u&&s.setAttribute('height',p(s.getAttribute('height'),u));}return s;};})();j.add('richcombo',{requires:['floatpanel','listblock','button'],beforeInit:function(m){m.ui.addHandler('richcombo',k.richCombo.handler);}});a.UI_RICHCOMBO='richcombo';k.richCombo=e.createClass({$:function(m){var o=this;e.extend(o,m,{title:m.label,modes:{wysiwyg:1}});var n=o.panel||{};delete o.panel;o.id=e.getNextNumber();o.document=n&&n.parent&&n.parent.getDocument()||a.document;n.className=(n.className||'')+' cke_rcombopanel';n.block={multiSelect:n.multiSelect,attributes:n.attributes};o._={panelDefinition:n,items:{},state:2};},statics:{handler:{create:function(m){return new k.richCombo(m);}}},proto:{renderHtml:function(m){var n=[];this.render(m,n);return n.join('');},render:function(m,n){var o=b,p='cke_'+this.id,q=e.addFunction(function(v){var y=this;var w=y._;if(w.state==0)return;y.createPanel(m);
if(w.on){w.panel.hide();return;}y.commit();var x=y.getValue();if(x)w.list.mark(x);else w.list.unmarkAll();w.panel.showBlock(y.id,new h(v),4);},this),r={id:p,combo:this,focus:function(){var v=a.document.getById(p).getChild(1);v.focus();},clickFn:q};function s(){var w=this;var v=w.modes[m.mode]?2:0;w.setState(m.readOnly&&!w.readOnly?0:v);w.setValue('');};m.on('mode',s,this);!this.readOnly&&m.on('readOnly',s,this);var t=e.addFunction(function(v,w){v=new d.event(v);var x=v.getKeystroke();switch(x){case 13:case 32:case 40:e.callFunction(q,w);break;default:r.onkey(r,x);}v.preventDefault();}),u=e.addFunction(function(){r.onfocus&&r.onfocus();});r.keyDownFn=t;n.push('<span class="cke_rcombo" role="presentation">','<span id=',p);if(this.className)n.push(' class="',this.className,' cke_off"');n.push(' role="presentation">','<span id="'+p+'_label" class=cke_label>',this.label,'</span>','<a hidefocus=true title="',this.title,'" tabindex="-1"',o.gecko&&o.version>=10900&&!o.hc?'':" href=\"javascript:void('"+this.label+"')\"",' role="button" aria-labelledby="',p,'_label" aria-describedby="',p,'_text" aria-haspopup="true"');if(b.opera||b.gecko&&b.mac)n.push(' onkeypress="return false;"');if(b.gecko)n.push(' onblur="this.style.cssText = this.style.cssText;"');n.push(' onkeydown="CKEDITOR.tools.callFunction( ',t,', event, this );" onfocus="return CKEDITOR.tools.callFunction(',u,', event);" '+(c?'onclick="return false;" onmouseup':'onclick')+'="CKEDITOR.tools.callFunction(',q,', this); return false;"><span><span id="'+p+'_text" class="cke_text cke_inline_label">'+this.label+'</span>'+'</span>'+'<span class=cke_openbutton><span class=cke_icon>'+(b.hc?'&#9660;':b.air?'&nbsp;':'')+'</span></span>'+'</a>'+'</span>'+'</span>');if(this.onRender)this.onRender();return r;},createPanel:function(m){if(this._.panel)return;var n=this._.panelDefinition,o=this._.panelDefinition.block,p=n.parent||a.document.getBody(),q=new k.floatPanel(m,p,n),r=q.addListBlock(this.id,o),s=this;q.onShow=function(){if(s.className)this.element.getFirst().addClass(s.className+'_panel');s.setState(1);r.focus(!s.multiSelect&&s.getValue());s._.on=1;if(s.onOpen)s.onOpen();};q.onHide=function(t){if(s.className)this.element.getFirst().removeClass(s.className+'_panel');s.setState(s.modes&&s.modes[m.mode]?2:0);s._.on=0;if(!t&&s.onClose)s.onClose();};q.onEscape=function(){q.hide();};r.onClick=function(t,u){s.document.getWindow().focus();if(s.onClick)s.onClick.call(s,t,u);if(u)s.setValue(t,s._.items[t]);else s.setValue('');
q.hide(false);};this._.panel=q;this._.list=r;q.getBlock(this.id).onHide=function(){s._.on=0;s.setState(2);};if(this.init)this.init();},setValue:function(m,n){var p=this;p._.value=m;var o=p.document.getById('cke_'+p.id+'_text');if(o){if(!(m||n)){n=p.label;o.addClass('cke_inline_label');}else o.removeClass('cke_inline_label');o.setHtml(typeof n!='undefined'?n:m);}},getValue:function(){return this._.value||'';},unmarkAll:function(){this._.list.unmarkAll();},mark:function(m){this._.list.mark(m);},hideItem:function(m){this._.list.hideItem(m);},hideGroup:function(m){this._.list.hideGroup(m);},showAll:function(){this._.list.showAll();},add:function(m,n,o){this._.items[m]=o||m;this._.list.add(m,n,o);},startGroup:function(m){this._.list.startGroup(m);},commit:function(){var m=this;if(!m._.committed){m._.list.commit();m._.committed=1;k.fire('ready',m);}m._.committed=1;},setState:function(m){var n=this;if(n._.state==m)return;n.document.getById('cke_'+n.id).setState(m);n._.state=m;}}});k.prototype.addRichCombo=function(m,n){this.add(m,'richcombo',n);};j.add('htmlwriter');a.htmlWriter=e.createClass({base:a.htmlParser.basicWriter,$:function(){var o=this;o.base();o.indentationChars='\t';o.selfClosingEnd=' />';o.lineBreakChars='\n';o.forceSimpleAmpersand=0;o.sortAttributes=1;o._.indent=0;o._.indentation='';o._.inPre=0;o._.rules={};var m=f;for(var n in e.extend({},m.$nonBodyContent,m.$block,m.$listItem,m.$tableContent))o.setRules(n,{indent:1,breakBeforeOpen:1,breakAfterOpen:1,breakBeforeClose:!m[n]['#'],breakAfterClose:1});o.setRules('br',{breakAfterOpen:1});o.setRules('title',{indent:0,breakAfterOpen:0});o.setRules('style',{indent:0,breakBeforeClose:1});o.setRules('pre',{indent:0});},proto:{openTag:function(m,n){var p=this;var o=p._.rules[m];if(p._.indent)p.indentation();else if(o&&o.breakBeforeOpen){p.lineBreak();p.indentation();}p._.output.push('<',m);},openTagClose:function(m,n){var p=this;var o=p._.rules[m];if(n)p._.output.push(p.selfClosingEnd);else{p._.output.push('>');if(o&&o.indent)p._.indentation+=p.indentationChars;}if(o&&o.breakAfterOpen)p.lineBreak();m=='pre'&&(p._.inPre=1);},attribute:function(m,n){if(typeof n=='string'){this.forceSimpleAmpersand&&(n=n.replace(/&amp;/g,'&'));n=e.htmlEncodeAttr(n);}this._.output.push(' ',m,'="',n,'"');},closeTag:function(m){var o=this;var n=o._.rules[m];if(n&&n.indent)o._.indentation=o._.indentation.substr(o.indentationChars.length);if(o._.indent)o.indentation();else if(n&&n.breakBeforeClose){o.lineBreak();o.indentation();}o._.output.push('</',m,'>');
m=='pre'&&(o._.inPre=0);if(n&&n.breakAfterClose)o.lineBreak();},text:function(m){var n=this;if(n._.indent){n.indentation();!n._.inPre&&(m=e.ltrim(m));}n._.output.push(m);},comment:function(m){if(this._.indent)this.indentation();this._.output.push('<!--',m,'-->');},lineBreak:function(){var m=this;if(!m._.inPre&&m._.output.length>0)m._.output.push(m.lineBreakChars);m._.indent=1;},indentation:function(){var m=this;if(!m._.inPre)m._.output.push(m._.indentation);m._.indent=0;},setRules:function(m,n){var o=this._.rules[m];if(o)e.extend(o,n,true);else this._.rules[m]=n;}}});j.add('menubutton',{requires:['button','menu'],beforeInit:function(m){m.ui.addHandler('menubutton',k.menuButton.handler);}});a.UI_MENUBUTTON='menubutton';(function(){var m=function(n){var o=this._;if(o.state===0)return;o.previousState=o.state;var p=o.menu;if(!p){p=o.menu=new a.menu(n,{panel:{className:n.skinClass+' cke_contextmenu',attributes:{'aria-label':n.lang.common.options}}});p.onHide=e.bind(function(){this.setState(this.modes&&this.modes[n.mode]?o.previousState:0);},this);if(this.onMenu)p.addListener(this.onMenu);}if(o.on){p.hide();return;}this.setState(1);p.show(a.document.getById(this._.id),4);};k.menuButton=e.createClass({base:k.button,$:function(n){var o=n.panel;delete n.panel;this.base(n);this.hasArrow=true;this.click=m;},statics:{handler:{create:function(n){return new k.menuButton(n);}}}});})();j.add('dialogui');(function(){var m=function(u){var x=this;x._||(x._={});x._['default']=x._.initValue=u['default']||'';x._.required=u.required||false;var v=[x._];for(var w=1;w<arguments.length;w++)v.push(arguments[w]);v.push(true);e.extend.apply(e,v);return x._;},n={build:function(u,v,w){return new k.dialog.textInput(u,v,w);}},o={build:function(u,v,w){return new k.dialog[v.type](u,v,w);}},p={build:function(u,v,w){var x=v.children,y,z=[],A=[];for(var B=0;B<x.length&&(y=x[B]);B++){var C=[];z.push(C);A.push(a.dialog._.uiElementBuilders[y.type].build(u,y,C));}return new k.dialog[v.type](u,A,z,w,v);}},q={isChanged:function(){return this.getValue()!=this.getInitValue();},reset:function(u){this.setValue(this.getInitValue(),u);},setInitValue:function(){this._.initValue=this.getValue();},resetInitValue:function(){this._.initValue=this._['default'];},getInitValue:function(){return this._.initValue;}},r=e.extend({},k.dialog.uiElement.prototype.eventProcessors,{onChange:function(u,v){if(!this._.domOnChangeRegistered){u.on('load',function(){this.getInputElement().on('change',function(){if(!u.parts.dialog.isVisible())return;
this.fire('change',{value:this.getValue()});},this);},this);this._.domOnChangeRegistered=true;}this.on('change',v);}},true),s=/^on([A-Z]\w+)/,t=function(u){for(var v in u){if(s.test(v)||v=='title'||v=='type')delete u[v];}return u;};e.extend(k.dialog,{labeledElement:function(u,v,w,x){if(arguments.length<4)return;var y=m.call(this,v);y.labelId=e.getNextId()+'_label';var z=this._.children=[],A=function(){var B=[],C=v.required?' cke_required':'';if(v.labelLayout!='horizontal')B.push('<label class="cke_dialog_ui_labeled_label'+C+'" ',' id="'+y.labelId+'"',' for="'+y.inputId+'"',(v.labelStyle?' style="'+v.labelStyle+'"':'')+'>',v.label,'</label>','<div class="cke_dialog_ui_labeled_content"'+(v.controlStyle?' style="'+v.controlStyle+'"':'')+' role="presentation">',x.call(this,u,v),'</div>');else{var D={type:'hbox',widths:v.widths,padding:0,children:[{type:'html',html:'<label class="cke_dialog_ui_labeled_label'+C+'"'+' id="'+y.labelId+'"'+' for="'+y.inputId+'"'+(v.labelStyle?' style="'+v.labelStyle+'"':'')+'>'+e.htmlEncode(v.label)+'</span>'},{type:'html',html:'<span class="cke_dialog_ui_labeled_content"'+(v.controlStyle?' style="'+v.controlStyle+'"':'')+'>'+x.call(this,u,v)+'</span>'}]};a.dialog._.uiElementBuilders.hbox.build(u,D,B);}return B.join('');};k.dialog.uiElement.call(this,u,v,w,'div',null,{role:'presentation'},A);},textInput:function(u,v,w){if(arguments.length<3)return;m.call(this,v);var x=this._.inputId=e.getNextId()+'_textInput',y={'class':'cke_dialog_ui_input_'+v.type,id:x,type:'text'},z;if(v.validate)this.validate=v.validate;if(v.maxLength)y.maxlength=v.maxLength;if(v.size)y.size=v.size;if(v.inputStyle)y.style=v.inputStyle;var A=this,B=false;u.on('load',function(){A.getInputElement().on('keydown',function(D){if(D.data.getKeystroke()==13)B=true;});A.getInputElement().on('keyup',function(D){if(D.data.getKeystroke()==13&&B){u.getButton('ok')&&setTimeout(function(){u.getButton('ok').click();},0);B=false;}},null,null,1000);});var C=function(){var D=['<div class="cke_dialog_ui_input_',v.type,'" role="presentation"'];if(v.width)D.push('style="width:'+v.width+'" ');D.push('><input ');y['aria-labelledby']=this._.labelId;this._.required&&(y['aria-required']=this._.required);for(var E in y)D.push(E+'="'+y[E]+'" ');D.push(' /></div>');return D.join('');};k.dialog.labeledElement.call(this,u,v,w,C);},textarea:function(u,v,w){if(arguments.length<3)return;m.call(this,v);var x=this,y=this._.inputId=e.getNextId()+'_textarea',z={};if(v.validate)this.validate=v.validate;
z.rows=v.rows||5;z.cols=v.cols||20;if(typeof v.inputStyle!='undefined')z.style=v.inputStyle;var A=function(){z['aria-labelledby']=this._.labelId;this._.required&&(z['aria-required']=this._.required);var B=['<div class="cke_dialog_ui_input_textarea" role="presentation"><textarea class="cke_dialog_ui_input_textarea" id="',y,'" '];for(var C in z)B.push(C+'="'+e.htmlEncode(z[C])+'" ');B.push('>',e.htmlEncode(x._['default']),'</textarea></div>');return B.join('');};k.dialog.labeledElement.call(this,u,v,w,A);},checkbox:function(u,v,w){if(arguments.length<3)return;var x=m.call(this,v,{'default':!!v['default']});if(v.validate)this.validate=v.validate;var y=function(){var z=e.extend({},v,{id:v.id?v.id+'_checkbox':e.getNextId()+'_checkbox'},true),A=[],B=e.getNextId()+'_label',C={'class':'cke_dialog_ui_checkbox_input',type:'checkbox','aria-labelledby':B};t(z);if(v['default'])C.checked='checked';if(typeof z.inputStyle!='undefined')z.style=z.inputStyle;x.checkbox=new k.dialog.uiElement(u,z,A,'input',null,C);A.push(' <label id="',B,'" for="',C.id,'"'+(v.labelStyle?' style="'+v.labelStyle+'"':'')+'>',e.htmlEncode(v.label),'</label>');return A.join('');};k.dialog.uiElement.call(this,u,v,w,'span',null,null,y);},radio:function(u,v,w){if(arguments.length<3)return;m.call(this,v);if(!this._['default'])this._['default']=this._.initValue=v.items[0][1];if(v.validate)this.validate=v.valdiate;var x=[],y=this,z=function(){var A=[],B=[],C={'class':'cke_dialog_ui_radio_item','aria-labelledby':this._.labelId},D=v.id?v.id+'_radio':e.getNextId()+'_radio';for(var E=0;E<v.items.length;E++){var F=v.items[E],G=F[2]!==undefined?F[2]:F[0],H=F[1]!==undefined?F[1]:F[0],I=e.getNextId()+'_radio_input',J=I+'_label',K=e.extend({},v,{id:I,title:null,type:null},true),L=e.extend({},K,{title:G},true),M={type:'radio','class':'cke_dialog_ui_radio_input',name:D,value:H,'aria-labelledby':J},N=[];if(y._['default']==H)M.checked='checked';t(K);t(L);if(typeof K.inputStyle!='undefined')K.style=K.inputStyle;x.push(new k.dialog.uiElement(u,K,N,'input',null,M));N.push(' ');new k.dialog.uiElement(u,L,N,'label',null,{id:J,'for':M.id},F[0]);A.push(N.join(''));}new k.dialog.hbox(u,x,A,B);return B.join('');};k.dialog.labeledElement.call(this,u,v,w,z);this._.children=x;},button:function(u,v,w){if(!arguments.length)return;if(typeof v=='function')v=v(u.getParentEditor());m.call(this,v,{disabled:v.disabled||false});a.event.implementOn(this);var x=this;u.on('load',function(A){var B=this.getElement();(function(){B.on('click',function(C){x.fire('click',{dialog:x.getDialog()});
C.data.preventDefault();});B.on('keydown',function(C){if(C.data.getKeystroke() in {32:1}){x.click();C.data.preventDefault();}});})();B.unselectable();},this);var y=e.extend({},v);delete y.style;var z=e.getNextId()+'_label';k.dialog.uiElement.call(this,u,y,w,'a',null,{style:v.style,href:'javascript:void(0)',title:v.label,hidefocus:'true','class':v['class'],role:'button','aria-labelledby':z},'<span id="'+z+'" class="cke_dialog_ui_button">'+e.htmlEncode(v.label)+'</span>');},select:function(u,v,w){if(arguments.length<3)return;var x=m.call(this,v);if(v.validate)this.validate=v.validate;x.inputId=e.getNextId()+'_select';var y=function(){var z=e.extend({},v,{id:v.id?v.id+'_select':e.getNextId()+'_select'},true),A=[],B=[],C={id:x.inputId,'class':'cke_dialog_ui_input_select','aria-labelledby':this._.labelId};if(v.size!=undefined)C.size=v.size;if(v.multiple!=undefined)C.multiple=v.multiple;t(z);for(var D=0,E;D<v.items.length&&(E=v.items[D]);D++)B.push('<option value="',e.htmlEncode(E[1]!==undefined?E[1]:E[0]).replace(/"/g,'&quot;'),'" /> ',e.htmlEncode(E[0]));if(typeof z.inputStyle!='undefined')z.style=z.inputStyle;x.select=new k.dialog.uiElement(u,z,A,'select',null,C,B.join(''));return A.join('');};k.dialog.labeledElement.call(this,u,v,w,y);},file:function(u,v,w){if(arguments.length<3)return;if(v['default']===undefined)v['default']='';var x=e.extend(m.call(this,v),{definition:v,buttons:[]});if(v.validate)this.validate=v.validate;var y=function(){x.frameId=e.getNextId()+'_fileInput';var z=b.isCustomDomain(),A=['<iframe frameborder="0" allowtransparency="0" class="cke_dialog_ui_input_file" id="',x.frameId,'" title="',v.label,'" src="javascript:void('];A.push(z?"(function(){document.open();document.domain='"+document.domain+"';"+'document.close();'+'})()':'0');A.push(')"></iframe>');return A.join('');};u.on('load',function(){var z=a.document.getById(x.frameId),A=z.getParent();A.addClass('cke_dialog_ui_input_file');});k.dialog.labeledElement.call(this,u,v,w,y);},fileButton:function(u,v,w){if(arguments.length<3)return;var x=m.call(this,v),y=this;if(v.validate)this.validate=v.validate;var z=e.extend({},v),A=z.onClick;z.className=(z.className?z.className+' ':'')+'cke_dialog_ui_button';z.onClick=function(B){var C=v['for'];if(!A||A.call(this,B)!==false){u.getContentElement(C[0],C[1]).submit();this.disable();}};u.on('load',function(){u.getContentElement(v['for'][0],v['for'][1])._.buttons.push(y);});k.dialog.button.call(this,u,z,w);},html:(function(){var u=/^\s*<[\w:]+\s+([^>]*)?>/,v=/^(\s*<[\w:]+(?:\s+[^>]*)?)((?:.|\r|\n)+)$/,w=/\/$/;
return function(x,y,z){if(arguments.length<3)return;var A=[],B,C=y.html,D,E;if(C.charAt(0)!='<')C='<span>'+C+'</span>';var F=y.focus;if(F){var G=this.focus;this.focus=function(){G.call(this);typeof F=='function'&&F.call(this);this.fire('focus');};if(y.isFocusable){var H=this.isFocusable;this.isFocusable=H;}this.keyboardFocusable=true;}k.dialog.uiElement.call(this,x,y,A,'span',null,null,'');B=A.join('');D=B.match(u);E=C.match(v)||['','',''];if(w.test(E[1])){E[1]=E[1].slice(0,-1);E[2]='/'+E[2];}z.push([E[1],' ',D[1]||'',E[2]].join(''));};})(),fieldset:function(u,v,w,x,y){var z=y.label,A=function(){var B=[];z&&B.push('<legend>'+z+'</legend>');for(var C=0;C<w.length;C++)B.push(w[C]);return B.join('');};this._={children:v};k.dialog.uiElement.call(this,u,y,x,'fieldset',null,null,A);}},true);k.dialog.html.prototype=new k.dialog.uiElement();k.dialog.labeledElement.prototype=e.extend(new k.dialog.uiElement(),{setLabel:function(u){var v=a.document.getById(this._.labelId);if(v.getChildCount()<1)new d.text(u,a.document).appendTo(v);else v.getChild(0).$.nodeValue=u;return this;},getLabel:function(){var u=a.document.getById(this._.labelId);if(!u||u.getChildCount()<1)return '';else return u.getChild(0).getText();},eventProcessors:r},true);k.dialog.button.prototype=e.extend(new k.dialog.uiElement(),{click:function(){var u=this;if(!u._.disabled)return u.fire('click',{dialog:u._.dialog});u.getElement().$.blur();return false;},enable:function(){this._.disabled=false;var u=this.getElement();u&&u.removeClass('cke_disabled');},disable:function(){this._.disabled=true;this.getElement().addClass('cke_disabled');},isVisible:function(){return this.getElement().getFirst().isVisible();},isEnabled:function(){return!this._.disabled;},eventProcessors:e.extend({},k.dialog.uiElement.prototype.eventProcessors,{onClick:function(u,v){this.on('click',v);}},true),accessKeyUp:function(){this.click();},accessKeyDown:function(){this.focus();},keyboardFocusable:true},true);k.dialog.textInput.prototype=e.extend(new k.dialog.labeledElement(),{getInputElement:function(){return a.document.getById(this._.inputId);},focus:function(){var u=this.selectParentTab();setTimeout(function(){var v=u.getInputElement();v&&v.$.focus();},0);},select:function(){var u=this.selectParentTab();setTimeout(function(){var v=u.getInputElement();if(v){v.$.focus();v.$.select();}},0);},accessKeyUp:function(){this.select();},setValue:function(u){!u&&(u='');return k.dialog.uiElement.prototype.setValue.apply(this,arguments);},keyboardFocusable:true},q,true);
k.dialog.textarea.prototype=new k.dialog.textInput();k.dialog.select.prototype=e.extend(new k.dialog.labeledElement(),{getInputElement:function(){return this._.select.getElement();},add:function(u,v,w){var x=new h('option',this.getDialog().getParentEditor().document),y=this.getInputElement().$;x.$.text=u;x.$.value=v===undefined||v===null?u:v;if(w===undefined||w===null){if(c)y.add(x.$);else y.add(x.$,null);}else y.add(x.$,w);return this;},remove:function(u){var v=this.getInputElement().$;v.remove(u);return this;},clear:function(){var u=this.getInputElement().$;while(u.length>0)u.remove(0);return this;},keyboardFocusable:true},q,true);k.dialog.checkbox.prototype=e.extend(new k.dialog.uiElement(),{getInputElement:function(){return this._.checkbox.getElement();},setValue:function(u,v){this.getInputElement().$.checked=u;!v&&this.fire('change',{value:u});},getValue:function(){return this.getInputElement().$.checked;},accessKeyUp:function(){this.setValue(!this.getValue());},eventProcessors:{onChange:function(u,v){if(!c)return r.onChange.apply(this,arguments);else{u.on('load',function(){var w=this._.checkbox.getElement();w.on('propertychange',function(x){x=x.data.$;if(x.propertyName=='checked')this.fire('change',{value:w.$.checked});},this);},this);this.on('change',v);}return null;}},keyboardFocusable:true},q,true);k.dialog.radio.prototype=e.extend(new k.dialog.uiElement(),{setValue:function(u,v){var w=this._.children,x;for(var y=0;y<w.length&&(x=w[y]);y++)x.getElement().$.checked=x.getValue()==u;!v&&this.fire('change',{value:u});},getValue:function(){var u=this._.children;for(var v=0;v<u.length;v++){if(u[v].getElement().$.checked)return u[v].getValue();}return null;},accessKeyUp:function(){var u=this._.children,v;for(v=0;v<u.length;v++){if(u[v].getElement().$.checked){u[v].getElement().focus();return;}}u[0].getElement().focus();},eventProcessors:{onChange:function(u,v){if(!c)return r.onChange.apply(this,arguments);else{u.on('load',function(){var w=this._.children,x=this;for(var y=0;y<w.length;y++){var z=w[y].getElement();z.on('propertychange',function(A){A=A.data.$;if(A.propertyName=='checked'&&this.$.checked)x.fire('change',{value:this.getAttribute('value')});});}},this);this.on('change',v);}return null;}},keyboardFocusable:true},q,true);k.dialog.file.prototype=e.extend(new k.dialog.labeledElement(),q,{getInputElement:function(){var u=a.document.getById(this._.frameId).getFrameDocument();return u.$.forms.length>0?new h(u.$.forms[0].elements[0]):this.getElement();
},submit:function(){this.getInputElement().getParent().$.submit();return this;},getAction:function(){return this.getInputElement().getParent().$.action;},registerEvents:function(u){var v=/^on([A-Z]\w+)/,w,x=function(z,A,B,C){z.on('formLoaded',function(){z.getInputElement().on(B,C,z);});};for(var y in u){if(!(w=y.match(v)))continue;if(this.eventProcessors[y])this.eventProcessors[y].call(this,this._.dialog,u[y]);else x(this,this._.dialog,w[1].toLowerCase(),u[y]);}return this;},reset:function(){var u=this._,v=a.document.getById(u.frameId),w=v.getFrameDocument(),x=u.definition,y=u.buttons,z=this.formLoadedNumber,A=this.formUnloadNumber,B=u.dialog._.editor.lang.dir,C=u.dialog._.editor.langCode;if(!z){z=this.formLoadedNumber=e.addFunction(function(){this.fire('formLoaded');},this);A=this.formUnloadNumber=e.addFunction(function(){this.getInputElement().clearCustomData();},this);this.getDialog()._.editor.on('destroy',function(){e.removeFunction(z);e.removeFunction(A);});}function D(){w.$.open();if(b.isCustomDomain())w.$.domain=document.domain;var E='';if(x.size)E=x.size-(c?7:0);w.$.write(['<html dir="'+B+'" lang="'+C+'"><head><title></title></head><body style="margin: 0; overflow: hidden; background: transparent;">','<form enctype="multipart/form-data" method="POST" dir="'+B+'" lang="'+C+'" action="',e.htmlEncode(x.action),'">','<input type="file" name="',e.htmlEncode(x.id||'cke_upload'),'" size="',e.htmlEncode(E>0?E:''),'" />','</form>','</body></html>','<script>window.parent.CKEDITOR.tools.callFunction('+z+');','window.onbeforeunload = function() {window.parent.CKEDITOR.tools.callFunction('+A+')}</script>'].join(''));w.$.close();for(var F=0;F<y.length;F++)y[F].enable();};if(b.gecko)setTimeout(D,500);else D();},getValue:function(){return this.getInputElement().$.value||'';},setInitValue:function(){this._.initValue='';},eventProcessors:{onChange:function(u,v){if(!this._.domOnChangeRegistered){this.on('formLoaded',function(){this.getInputElement().on('change',function(){this.fire('change',{value:this.getValue()});},this);},this);this._.domOnChangeRegistered=true;}this.on('change',v);}},keyboardFocusable:true},true);k.dialog.fileButton.prototype=new k.dialog.button();k.dialog.fieldset.prototype=e.clone(k.dialog.hbox.prototype);a.dialog.addUIElement('text',n);a.dialog.addUIElement('password',n);a.dialog.addUIElement('textarea',o);a.dialog.addUIElement('checkbox',o);a.dialog.addUIElement('radio',o);a.dialog.addUIElement('button',o);a.dialog.addUIElement('select',o);a.dialog.addUIElement('file',o);
a.dialog.addUIElement('fileButton',o);a.dialog.addUIElement('html',o);a.dialog.addUIElement('fieldset',p);})();j.add('panel',{beforeInit:function(m){m.ui.addHandler('panel',k.panel.handler);}});a.UI_PANEL='panel';k.panel=function(m,n){var o=this;if(n)e.extend(o,n);e.extend(o,{className:'',css:[]});o.id=e.getNextId();o.document=m;o._={blocks:{}};};k.panel.handler={create:function(m){return new k.panel(m);}};k.panel.prototype={renderHtml:function(m){var n=[];this.render(m,n);return n.join('');},render:function(m,n){var p=this;var o=p.id;n.push('<div class="',m.skinClass,'" lang="',m.langCode,'" role="presentation" style="display:none;z-index:'+(m.config.baseFloatZIndex+1)+'">'+'<div'+' id=',o,' dir=',m.lang.dir,' role="presentation" class="cke_panel cke_',m.lang.dir);if(p.className)n.push(' ',p.className);n.push('">');if(p.forceIFrame||p.css.length){n.push('<iframe id="',o,'_frame" frameborder="0" role="application" src="javascript:void(');n.push(b.isCustomDomain()?"(function(){document.open();document.domain='"+document.domain+"';"+'document.close();'+'})()':'0');n.push(')"></iframe>');}n.push('</div></div>');return o;},getHolderElement:function(){var m=this._.holder;if(!m){if(this.forceIFrame||this.css.length){var n=this.document.getById(this.id+'_frame'),o=n.getParent(),p=o.getAttribute('dir'),q=o.getParent().getAttribute('class'),r=o.getParent().getAttribute('lang'),s=n.getFrameDocument();b.iOS&&o.setStyles({overflow:'scroll','-webkit-overflow-scrolling':'touch'});var t=e.addFunction(e.bind(function(w){this.isLoaded=true;if(this.onLoad)this.onLoad();},this)),u='<!DOCTYPE html><html dir="'+p+'" class="'+q+'_container" lang="'+r+'">'+'<head>'+'<style>.'+q+'_container{visibility:hidden}</style>'+'</head>'+'<body class="cke_'+p+' cke_panel_frame '+b.cssClass+'" style="margin:0;padding:0"'+' onload="( window.CKEDITOR || window.parent.CKEDITOR ).tools.callFunction('+t+');"></body>'+e.buildStyleHtml(this.css)+'</html>';s.write(u);var v=s.getWindow();v.$.CKEDITOR=a;s.on('key'+(b.opera?'press':'down'),function(w){var z=this;var x=w.data.getKeystroke(),y=z.document.getById(z.id).getAttribute('dir');if(z._.onKeyDown&&z._.onKeyDown(x)===false){w.data.preventDefault();return;}if(x==27||x==(y=='rtl'?39:37))if(z.onEscape&&z.onEscape(x)===false)w.data.preventDefault();},this);m=s.getBody();m.unselectable();b.air&&e.callFunction(t);}else m=this.document.getById(this.id);this._.holder=m;}return m;},addBlock:function(m,n){var o=this;n=o._.blocks[m]=n instanceof k.panel.block?n:new k.panel.block(o.getHolderElement(),n);
if(!o._.currentBlock)o.showBlock(m);return n;},getBlock:function(m){return this._.blocks[m];},showBlock:function(m){var r=this;var n=r._.blocks,o=n[m],p=r._.currentBlock,q=r.forceIFrame?r.document.getById(r.id+'_frame'):r._.holder;q.getParent().getParent().disableContextMenu();if(p){q.removeAttributes(p.attributes);p.hide();}r._.currentBlock=o;q.setAttributes(o.attributes);a.fire('ariaWidget',q);o._.focusIndex=-1;r._.onKeyDown=o.onKeyDown&&e.bind(o.onKeyDown,o);o.show();return o;},destroy:function(){this.element&&this.element.remove();}};k.panel.block=e.createClass({$:function(m,n){var o=this;o.element=m.append(m.getDocument().createElement('div',{attributes:{tabIndex:-1,'class':'cke_panel_block',role:'presentation'},styles:{display:'none'}}));if(n)e.extend(o,n);if(!o.attributes.title)o.attributes.title=o.attributes['aria-label'];o.keys={};o._.focusIndex=-1;o.element.disableContextMenu();},_:{markItem:function(m){var p=this;if(m==-1)return;var n=p.element.getElementsByTag('a'),o=n.getItem(p._.focusIndex=m);if(b.webkit||b.opera)o.getDocument().getWindow().focus();o.focus();p.onMark&&p.onMark(o);}},proto:{show:function(){this.element.setStyle('display','');},hide:function(){var m=this;if(!m.onHide||m.onHide.call(m)!==true)m.element.setStyle('display','none');},onKeyDown:function(m){var r=this;var n=r.keys[m];switch(n){case 'next':var o=r._.focusIndex,p=r.element.getElementsByTag('a'),q;while(q=p.getItem(++o)){if(q.getAttribute('_cke_focus')&&q.$.offsetWidth){r._.focusIndex=o;q.focus();break;}}return false;case 'prev':o=r._.focusIndex;p=r.element.getElementsByTag('a');while(o>0&&(q=p.getItem(--o))){if(q.getAttribute('_cke_focus')&&q.$.offsetWidth){r._.focusIndex=o;q.focus();break;}}return false;case 'click':case 'mouseup':o=r._.focusIndex;q=o>=0&&r.element.getElementsByTag('a').getItem(o);if(q)q.$[n]?q.$[n]():q.$['on'+n]();return false;}return true;}}});j.add('listblock',{requires:['panel'],onLoad:function(){k.panel.prototype.addListBlock=function(m,n){return this.addBlock(m,new k.listBlock(this.getHolderElement(),n));};k.listBlock=e.createClass({base:k.panel.block,$:function(m,n){var q=this;n=n||{};var o=n.attributes||(n.attributes={});(q.multiSelect=!!n.multiSelect)&&(o['aria-multiselectable']=true);!o.role&&(o.role='listbox');q.base.apply(q,arguments);var p=q.keys;p[40]='next';p[9]='next';p[38]='prev';p[2228224+9]='prev';p[32]=c?'mouseup':'click';c&&(p[13]='mouseup');q._.pendingHtml=[];q._.items={};q._.groups={};},_:{close:function(){if(this._.started){this._.pendingHtml.push('</ul>');
delete this._.started;}},getClick:function(){if(!this._.click)this._.click=e.addFunction(function(m){var o=this;var n=true;if(o.multiSelect)n=o.toggle(m);else o.mark(m);if(o.onClick)o.onClick(m,n);},this);return this._.click;}},proto:{add:function(m,n,o){var r=this;var p=r._.pendingHtml,q=e.getNextId();if(!r._.started){p.push('<ul role="presentation" class=cke_panel_list>');r._.started=1;r._.size=r._.size||0;}r._.items[m]=q;p.push('<li id=',q,' class=cke_panel_listItem role=presentation><a id="',q,'_option" _cke_focus=1 hidefocus=true title="',o||m,'" href="javascript:void(\'',m,"')\" "+(c?'onclick="return false;" onmouseup':'onclick')+'="CKEDITOR.tools.callFunction(',r._.getClick(),",'",m,"'); return false;\"",' role="option" aria-posinset="'+ ++r._.size+'">',n||m,'</a></li>');},startGroup:function(m){this._.close();var n=e.getNextId();this._.groups[m]=n;this._.pendingHtml.push('<h1 role="presentation" id=',n,' class=cke_panel_grouptitle>',m,'</h1>');},commit:function(){var p=this;p._.close();p.element.appendHtml(p._.pendingHtml.join(''));var m=p._.items,n=p.element.getDocument();for(var o in m)n.getById(m[o]+'_option').setAttribute('aria-setsize',p._.size);delete p._.size;p._.pendingHtml=[];},toggle:function(m){var n=this.isMarked(m);if(n)this.unmark(m);else this.mark(m);return!n;},hideGroup:function(m){var n=this.element.getDocument().getById(this._.groups[m]),o=n&&n.getNext();if(n){n.setStyle('display','none');if(o&&o.getName()=='ul')o.setStyle('display','none');}},hideItem:function(m){this.element.getDocument().getById(this._.items[m]).setStyle('display','none');},showAll:function(){var m=this._.items,n=this._.groups,o=this.element.getDocument();for(var p in m)o.getById(m[p]).setStyle('display','');for(var q in n){var r=o.getById(n[q]),s=r.getNext();r.setStyle('display','');if(s&&s.getName()=='ul')s.setStyle('display','');}},mark:function(m){var p=this;if(!p.multiSelect)p.unmarkAll();var n=p._.items[m],o=p.element.getDocument().getById(n);o.addClass('cke_selected');p.element.getDocument().getById(n+'_option').setAttribute('aria-selected',true);p.onMark&&p.onMark(o);},unmark:function(m){var q=this;var n=q.element.getDocument(),o=q._.items[m],p=n.getById(o);p.removeClass('cke_selected');n.getById(o+'_option').removeAttribute('aria-selected');q.onUnmark&&q.onUnmark(p);},unmarkAll:function(){var q=this;var m=q._.items,n=q.element.getDocument();for(var o in m){var p=m[o];n.getById(p).removeClass('cke_selected');n.getById(p+'_option').removeAttribute('aria-selected');
}q.onUnmark&&q.onUnmark();},isMarked:function(m){return this.element.getDocument().getById(this._.items[m]).hasClass('cke_selected');},focus:function(m){this._.focusIndex=-1;if(m){var n=this.element.getDocument().getById(this._.items[m]).getFirst(),o=this.element.getElementsByTag('a'),p,q=-1;while(p=o.getItem(++q)){if(p.equals(n)){this._.focusIndex=q;break;}}setTimeout(function(){n.focus();},0);}}}});}});a.themes.add('default',(function(){var m={};function n(o,p){var q,r;r=o.config.sharedSpaces;r=r&&r[p];r=r&&a.document.getById(r);if(r){var s='<span class="cke_shared " dir="'+o.lang.dir+'"'+'>'+'<span class="'+o.skinClass+' '+o.id+' cke_editor_'+o.name+'">'+'<span class="'+b.cssClass+'">'+'<span class="cke_wrapper cke_'+o.lang.dir+'">'+'<span class="cke_editor">'+'<div class="cke_'+p+'">'+'</div></span></span></span></span></span>',t=r.append(h.createFromHtml(s,r.getDocument()));if(r.getCustomData('cke_hasshared'))t.hide();else r.setCustomData('cke_hasshared',1);q=t.getChild([0,0,0,0]);!o.sharedSpaces&&(o.sharedSpaces={});o.sharedSpaces[p]=q;o.on('focus',function(){for(var u=0,v,w=r.getChildren();v=w.getItem(u);u++){if(v.type==1&&!v.equals(t)&&v.hasClass('cke_shared'))v.hide();}t.show();});o.on('destroy',function(){t.remove();});}return q;};return{build:function(o,p){var q=o.name,r=o.element,s=o.elementMode;if(!r||s==0)return;if(s==1)r.hide();var t=o.fire('themeSpace',{space:'top',html:''}).html,u=o.fire('themeSpace',{space:'contents',html:''}).html,v=o.fireOnce('themeSpace',{space:'bottom',html:''}).html,w=u&&o.config.height,x=o.config.tabIndex||o.element.getAttribute('tabindex')||0;if(!u)w='auto';else if(!isNaN(w))w+='px';var y='',z=o.config.width;if(z){if(!isNaN(z))z+='px';y+='width: '+z+';';}var A=t&&n(o,'top'),B=n(o,'bottom');A&&(A.setHtml(t),t='');B&&(B.setHtml(v),v='');var C='<style>.'+o.skinClass+'{visibility:hidden;}</style>';if(m[o.skinClass])C='';else m[o.skinClass]=1;var D=h.createFromHtml(['<span id="cke_',q,'" class="',o.skinClass,' ',o.id,' cke_editor_',q,'" dir="',o.lang.dir,'" title="',b.gecko?' ':'','" lang="',o.langCode,'"'+(b.webkit?' tabindex="'+x+'"':'')+' role="application"'+' aria-labelledby="cke_',q,'_arialbl"'+(y?' style="'+y+'"':'')+'>'+'<span id="cke_',q,'_arialbl" class="cke_voice_label">'+o.lang.editor+'</span>'+'<span class="',b.cssClass,'" role="presentation"><span class="cke_wrapper cke_',o.lang.dir,'" role="presentation"><table class="cke_editor" border="0" cellspacing="0" cellpadding="0" role="presentation"><tbody><tr',t?'':' style="display:none"',' role="presentation"><td id="cke_top_',q,'" class="cke_top" role="presentation">',t,'</td></tr><tr',u?'':' style="display:none"',' role="presentation"><td id="cke_contents_',q,'" class="cke_contents" style="height:',w,'" role="presentation">',u,'</td></tr><tr',v?'':' style="display:none"',' role="presentation"><td id="cke_bottom_',q,'" class="cke_bottom" role="presentation">',v,'</td></tr></tbody></table>'+C+'</span>'+'</span>'+'</span>'].join(''));
D.getChild([1,0,0,0,0]).unselectable();D.getChild([1,0,0,0,2]).unselectable();if(s==1)D.insertAfter(r);else r.append(D);o.container=D;D.disableContextMenu();o.on('contentDirChanged',function(E){var F=(o.lang.dir!=E.data?'add':'remove')+'Class';D.getChild(1)[F]('cke_mixed_dir_content');var G=this.sharedSpaces&&this.sharedSpaces[this.config.toolbarLocation];G&&G.getParent().getParent()[F]('cke_mixed_dir_content');});o.fireOnce('themeLoaded');o.fireOnce('uiReady');},buildDialog:function(o){var p=e.getNextNumber(),q=h.createFromHtml(['<div class="',o.id,'_dialog cke_editor_',o.name.replace('.','\\.'),'_dialog cke_skin_',o.skinName,'" dir="',o.lang.dir,'" lang="',o.langCode,'" role="dialog" aria-labelledby="%title#"><table class="cke_dialog',' '+b.cssClass,' cke_',o.lang.dir,'" style="position:absolute" role="presentation"><tr><td role="presentation"><div class="%body" role="presentation"><div id="%title#" class="%title" role="presentation"></div><a id="%close_button#" class="%close_button" href="javascript:void(0)" title="'+o.lang.common.close+'" role="button"><span class="cke_label">X</span></a>'+'<div id="%tabs#" class="%tabs" role="tablist"></div>'+'<table class="%contents" role="presentation">'+'<tr>'+'<td id="%contents#" class="%contents" role="presentation"></td>'+'</tr>'+'<tr>'+'<td id="%footer#" class="%footer" role="presentation"></td>'+'</tr>'+'</table>'+'</div>'+'<div id="%tl#" class="%tl"></div>'+'<div id="%tc#" class="%tc"></div>'+'<div id="%tr#" class="%tr"></div>'+'<div id="%ml#" class="%ml"></div>'+'<div id="%mr#" class="%mr"></div>'+'<div id="%bl#" class="%bl"></div>'+'<div id="%bc#" class="%bc"></div>'+'<div id="%br#" class="%br"></div>'+'</td></tr>'+'</table>',c?'':'<style>.cke_dialog{visibility:hidden;}</style>','</div>'].join('').replace(/#/g,'_'+p).replace(/%/g,'cke_dialog_')),r=q.getChild([0,0,0,0,0]),s=r.getChild(0),t=r.getChild(1);if(c&&!b.ie6Compat){var u=b.isCustomDomain(),v='javascript:void(function(){'+encodeURIComponent('document.open();'+(u?'document.domain="'+document.domain+'";':'')+'document.close();')+'}())',w=h.createFromHtml('<iframe frameBorder="0" class="cke_iframe_shim" src="'+v+'"'+' tabIndex="-1"'+'></iframe>');w.appendTo(r.getParent());}s.unselectable();t.unselectable();return{element:q,parts:{dialog:q.getChild(0),title:s,close:t,tabs:r.getChild(2),contents:r.getChild([3,0,0,0]),footer:r.getChild([3,0,1,0])}};},destroy:function(o){var p=o.container,q=o.element;if(p){p.clearCustomData();p.remove();}if(q){q.clearCustomData();
o.elementMode==1&&q.show();delete o.element;}}};})());a.editor.prototype.getThemeSpace=function(m){var n='cke_'+m,o=this._[n]||(this._[n]=a.document.getById(n+'_'+this.name));return o;};a.editor.prototype.resize=function(m,n,o,p){var v=this;var q=v.container,r=a.document.getById('cke_contents_'+v.name),s=b.webkit&&v.document&&v.document.getWindow().$.frameElement,t=p?q.getChild(1):q;t.setSize('width',m,true);s&&(s.style.width='1%');var u=o?0:(t.$.offsetHeight||0)-(r.$.clientHeight||0);r.setStyle('height',Math.max(n-u,0)+'px');s&&(s.style.width='100%');v.fire('resize');};a.editor.prototype.getResizable=function(m){return m?a.document.getById('cke_contents_'+this.name):this.container;};})();




// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

// DATEPICKER
Date.dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Date.abbrDayNames=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];Date.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];Date.abbrMonthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];Date.firstDayOfWeek=1;Date.format="dd/mm/yyyy";Date.fullYearStart="20";(function(){function b(c,d){if(!Date.prototype[c]){Date.prototype[c]=d}}b("isLeapYear",function(){var c=this.getFullYear();return(c%4==0&&c%100!=0)||c%400==0});b("isWeekend",function(){return this.getDay()==0||this.getDay()==6});b("isWeekDay",function(){return !this.isWeekend()});b("getDaysInMonth",function(){return[31,(this.isLeapYear()?29:28),31,30,31,30,31,31,30,31,30,31][this.getMonth()]});b("getDayName",function(c){return c?Date.abbrDayNames[this.getDay()]:Date.dayNames[this.getDay()]});b("getMonthName",function(c){return c?Date.abbrMonthNames[this.getMonth()]:Date.monthNames[this.getMonth()]});b("getDayOfYear",function(){var c=new Date("1/1/"+this.getFullYear());return Math.floor((this.getTime()-c.getTime())/86400000)});b("getWeekOfYear",function(){return Math.ceil(this.getDayOfYear()/7)});b("setDayOfYear",function(c){this.setMonth(0);this.setDate(c);return this});b("addYears",function(c){this.setFullYear(this.getFullYear()+c);return this});b("addMonths",function(d){var c=this.getDate();this.setMonth(this.getMonth()+d);if(c>this.getDate()){this.addDays(-this.getDate())}return this});b("addDays",function(c){this.setTime(this.getTime()+(c*86400000));return this});b("addHours",function(c){this.setHours(this.getHours()+c);return this});b("addMinutes",function(c){this.setMinutes(this.getMinutes()+c);return this});b("addSeconds",function(c){this.setSeconds(this.getSeconds()+c);return this});b("zeroTime",function(){this.setMilliseconds(0);this.setSeconds(0);this.setMinutes(0);this.setHours(0);return this});b("asString",function(d){var c=d||Date.format;if(c.split("mm").length>1){c=c.split("mmmm").join(this.getMonthName(false)).split("mmm").join(this.getMonthName(true)).split("mm").join(a(this.getMonth()+1))}else{c=c.split("m").join(this.getMonth()+1)}c=c.split("yyyy").join(this.getFullYear()).split("yy").join((this.getFullYear()+"").substring(2)).split("dd").join(a(this.getDate())).split("d").join(this.getDate());return c});Date.fromString=function(t){var n=Date.format;var p=new Date("01/01/1970");if(t==""){return p}t=t.toLowerCase();var m="";var e=[];var c=/(dd?d?|mm?m?|yy?yy?)+([^(m|d|y)])?/g;var k;while((k=c.exec(n))!=null){switch(k[1]){case"d":case"dd":case"m":case"mm":case"yy":case"yyyy":m+="(\\d+\\d?\\d?\\d?)+";e.push(k[1].substr(0,1));break;case"mmm":m+="([a-z]{3})";e.push("M");break}if(k[2]){m+=k[2]}}var l=new RegExp(m);var q=t.match(l);for(var h=0;h<e.length;h++){var o=q[h+1];switch(e[h]){case"d":p.setDate(o);break;case"m":p.setMonth(Number(o)-1);break;case"M":for(var g=0;g<Date.abbrMonthNames.length;g++){if(Date.abbrMonthNames[g].toLowerCase()==o){break}}p.setMonth(g);break;case"y":p.setYear(o);break}}return p};var a=function(c){var d="0"+c;return d.substring(d.length-2)}})();
// Author: Indri & Ibe
$(document).ready(function () {
	init_tree();
	init_DragDrop();
	init_main_functions();
	initTop();
	initDel();
	initCancel();
});

// JS-tree
function init_tree() {
	$('#tree').jstree({
		"plugins" : [ "themes", "html_data", "types", "search" ],
		"themes" : { 
			"theme" : "OMNext",
			"dots" : true,
			"icons" : true		
		},
		"types" : {
			"types" : {
				//Page
				"page" : {
					"icon" : {
						"image" : "/bundles/kunstmaanadmin/js/libs/themes/OMNext/d.png",
						"position" : "-57px -57px" 
					}
				},				
				//Site
				"site" : {
					"icon" : {
						"image" : "/bundles/kunstmaanadmin/js/libs/themes/OMNext/d.png",
						"position" : "-75px -38px" 
					}
				},
				//Settings
				"settings" : {
					"icon" : {
						"image" : "/bundles/kunstmaanadmin/js/libs/themes/OMNext/d.png",
						"position" : "-57px -37px" 
					}
				},
				//Image
				"image" : {
					"icon" : {
						"image" : "/bundles/kunstmaanadmin/js/libs/themes/OMNext/d.png",
						"position" : "-20px -74px" 
					}
				},
				//Video
				"video" : {
					"icon" : {
						"image" : "/bundles/kunstmaanadmin/js/libs/themes/OMNext/d.png",
						"position" : "-75px -55px" 
					}
				},
				//Slideshow
				"slide" : {
					"icon" : {
						"image" : "/bundles/kunstmaanadmin/js/libs/themes/OMNext/d.png",
						"position" : "-2px -72px" 
					}
				},
				//Files
				"files" : {
					"icon" : {
						"image" : "/bundles/kunstmaanadmin/js/libs/themes/OMNext/d.png",
						"position" : "-38px -72px" 
					}
				}
			}
		
		
		},
		// Configuring the search plugin
		"search" : {
			"ajax" : {
			    "url" : "", //<-- Link naar php
			    "data" : function (str) {
			        return {
			            "operation" : "search",
			            "search_str" : str
			        };
			    }
			}
		}
	});
	$("#search").click(function() {
		$(this).jstree("search", document.getElementById("searchVal").value);
	});
	
	
}

//Drag and Drop
function init_DragDrop() {
	$('#pageparts').sortable({  
	    handle: '.prop_bar',  
	    cursor: 'move',  
	    placeholder: 'placeholder',  
	    forcePlaceholderSize: true, 
		revert: 100,
	    //opacity: 0.4
	    opacity: 1,
		start: function(e, ui) {
			$('.draggable').css('opacity', ".4");
		},
		stop: function(e, ui) {
			$('.draggable').css('opacity', "1");
		}
	    //containment: 'document'
	})  
	.disableSelection();
}

 

//Drop down main_actions
function init_main_functions() {
	$(window).scroll(
		function() {
			var scrollTop = $(this).scrollTop();
			if(scrollTop >= 180){
				$('.main_actions_top').addClass('slideDown');
			}
			
			if(scrollTop < 180){
				$('.main_actions_top').removeClass('slideDown');
			}		
		}
	);
}

///// Toplink /////
function initTop() {
	$(".up").click(function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, 700);
	});
}

///// Media-Grid Helper /////
function initDel() {
	$('.media-grid .del').live("mouseover mouseout", function(e) {
		if (e.type == "mouseover") {
			$(this).parent().find('.item').addClass('warning');
			$(this).parent().find('.helper').html('Delete').addClass('warning');
		} else {
			$(this).parent().find('.item').removeClass('warning');
			$(this).parent().find('.helper').html('Click to edit').removeClass('warning');
		}
	});
}

function initCancel() {
	$('.modal .btn.cancel').click(function (e) {
		e.preventDefault();
		$(this).parent().parent().modal('hide');
	});
	$('.modal form .btn.cancel').click(function (e) {
		e.preventDefault();
		$(this).parent().parent().parent().modal('hide');
	});
}

























(function () {
	var dropArea = document.getElementById("drop-area"),
		fileList = document.getElementById("file-list");

	function uploadFile (file) {
		var li = document.createElement("li"),
			div = document.createElement("div"),
			img,
			progressBarContainer = document.createElement("div"),
			progressBar = document.createElement("div"),
			reader,
			xhr,
			fileInfo;

		li.appendChild(div);

		progressBarContainer.className = "progress-bar-container";
		progressBar.className = "progress-bar";
		progressBarContainer.appendChild(progressBar);
		li.appendChild(progressBarContainer);

		/*
			If the file is an image and the web browser supports FileReader,
			present a preview in the file list
		*/
		if (typeof FileReader !== "undefined" && (/image/i).test(file.type)) {
			img = document.createElement("img");
			a = document.createElement("a");
			li.appendChild(a).appendChild(img);
			reader = new FileReader();
			reader.onload = (function (theImg) {
				return function (evt) {
					theImg.src = evt.target.result;
				};
			}(img));
			reader.readAsDataURL(file);
		}

		// Uploading - for Firefox, Google Chrome and Safari
		xhr = new XMLHttpRequest();

		// Update progress bar
		xhr.upload.addEventListener("progress", function (evt) {
			if (evt.lengthComputable) {
				progressBar.style.width = (evt.loaded / evt.total) * 100 + "%";
			}
			else {
				// No data to calculate on
			}
		}, false);

		// File uploaded
		xhr.addEventListener("load", function () {
			progressBarContainer.className += " uploaded";
			//progressBar.innerHTML = "Uploaded!";
		}, false);

		xhr.open("post", "upload/upload.php", true);

		// Set appropriate headers
		xhr.setRequestHeader("Content-Type", "multipart/form-data");
		xhr.setRequestHeader("X-File-Name", file.fileName);
		xhr.setRequestHeader("X-File-Size", file.fileSize);
		xhr.setRequestHeader("X-File-Type", file.type);

		// Send the file (doh)
		xhr.send(file);

		// Present file info and append it to the list of files
		/*
		fileInfo = "<div><strong>Name:</strong> " + file.name + "</div>";
		fileInfo += "<div><strong>Size:</strong> " + parseInt(file.size / 1024, 10) + " kb</div>";
		fileInfo += "<div><strong>Type:</strong> " + file.type + "</div>";
		div.innerHTML = fileInfo;
		*/
		fileList.appendChild(li);
	}

	function traverseFiles (files) {
		if (typeof files !== "undefined") {
			for (var i=0, l=files.length; i<l; i++) {
				uploadFile(files[i]);
			}
		}
		else {
			fileList.innerHTML = "No support for the File API in this web browser";
		}
	}

	dropArea.addEventListener("dragleave", function (evt) {
		var target = evt.target;

		evt.preventDefault();
		evt.stopPropagation();
	}, false);

	dropArea.addEventListener("dragenter", function (evt) {
		//this.className = "over";
		document.getElementById("droplabel").innerHTML = "Drop Here";
		evt.preventDefault();
		evt.stopPropagation();
	}, false);

	dropArea.addEventListener("dragover", function (evt) {
		evt.preventDefault();
		evt.stopPropagation();
	}, false);

	dropArea.addEventListener("drop", function (evt) {
		traverseFiles(evt.dataTransfer.files);
		document.getElementById("droplabel").innerHTML = "Add New";
		evt.preventDefault();
		evt.stopPropagation();
	}, false);
})();
// With jquery-filedrop: https://github.com/weixiyen/jquery-filedrop
// Demo en PHP-voorbeeld: http://tutorialzine.com/2011/09/html5-file-upload-jquery-php/

$(function(){
	var dropbox = $('#drop-area'),
		list = $('#file-list');
		
	var loader = '<div class="loader">'+
					'<span class="a-1 loadbullet"></span>'+
					'<span class="a-2 loadbullet"></span>'+
					'<span class="a-3 loadbullet"></span>'+
					'<span class="a-4 loadbullet"></span>'+
					'<span class="a-5 loadbullet"></span>'+
				'</div>';

	dropbox.filedrop({
		// The name of the $_FILES entry:
		paramname:'pic',

		maxfiles: 10,
    	maxfilesize: 4, // in mb
		url: 'post_file.php',
		
		//When dragging files anywhere inside the browser window & leaving 
		docOver: function() {
			$('#droplabel').addClass('inside-glow');
			document.getElementById("droplabel").innerHTML = "Drop Here";
		},
		docLeave: function() {
			$('#droplabel').removeClass('inside-glow');
			document.getElementById("droplabel").innerHTML = "Add New";
		},
		
		//Droped Files
		drop: function() {
			$('#droplabel').removeClass('inside-glow');
			document.getElementById("droplabel").innerHTML = "Add New";   
		},

    	error: function(err, file) {
			switch(err) {
				case 'BrowserNotSupported':
					alert('Your browser does not support HTML5 file uploads!');
					break;
				case 'TooManyFiles':
					alert('Too many files! Please select 10 at most!');
					break;
				case 'FileTooLarge':
					alert(file.name+' is too large! Please upload files up to 2mb.');
					break;
				default:
					break;
			}
		},

		// Called before each upload is started
		beforeEach: function(file){
			if(!file.type.match(/^image\//)){
				alert('Only images are allowed!');
				// Returning false will cause the
				// file to be rejected
				return false;
			}
		},

		//Start Upload
		uploadStarted:function(i, file, len){
			createImage(file);
		},

		//Progress
		progressUpdated: function(file) {
			
		},
		
		//Upload is done
		uploadFinished:function(i,file,response){
			
		}
	});

	var template = '<li>'+
						'<a href="#" class="item">'+
							'<img alt="" />'+
						'</a>'+
						'<a href="#" class="del" data-controls-modal="delete-image" data-backdrop="true" data-keyboard="true">Delete</a>'+
						'<span class="helper">Click to edit</span>'+
					'</li>'; 
					
	
	function createImage(file){

		var preview = $(template),
			image = $('img', preview);

		var reader = new FileReader();

		image.width = 100;
		image.height = 100;

		reader.onload = function(e){
			// e.target.result holds the DataURL which
			// can be used as a source of the image:
			image.attr('src',e.target.result);
		};

		// Reading the file as a DataURL. When finished,
		// this will trigger the onload function above:
		reader.readAsDataURL(file);

		//message.hide();
		preview.insertBefore('#drop-area');

		// Associating a preview container
		// with the file, using jQuery's $.data():
		$.data(file,preview);
	}
});
$(function () {
    $('#drop-area').fileupload({
        dataType: 'json',
        url: 'php/index.php',
        done: function (e, data) {
            $.each(data.result, function (index, file) {
                $('<p/>').text(file.name).appendTo(document.body);
            });
        }
    });
});