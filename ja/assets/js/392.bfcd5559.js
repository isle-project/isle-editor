/*! For license information please see 392.bfcd5559.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{1069:function(e,t,r){"use strict";var n=r(405),a=r(407),i=r(408),o=r.n(i),l=r(0),s=r.n(l),c=(r(572),r(486)),b=r(413),u=r(574),d=r(871),p={variant:void 0,horizontal:void 0},f=s.a.forwardRef((function(e,t){var r,i=Object(c.a)(e,{activeKey:"onSelect"}),l=i.className,d=i.bsPrefix,p=i.variant,f=i.horizontal,S=i.as,x=void 0===S?"div":S,v=Object(a.a)(i,["className","bsPrefix","variant","horizontal","as"]),h=Object(b.a)(d,"list-group");return r=f?!0===f?"horizontal":"horizontal-"+f:null,s.a.createElement(u.a,Object(n.a)({ref:t},v,{as:x,className:o()(l,h,p&&h+"-"+p,r&&h+"-"+r)}))}));f.defaultProps=p,f.displayName="ListGroup",f.Item=d.a,t.a=f},454:function(e,t,r){"use strict";r.d(t,"b",(function(){return i}));var n=r(0),a=r.n(n).a.createContext(null),i=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.a=a},479:function(e,t,r){"use strict";var n=r(0),a=r.n(n).a.createContext(null);t.a=a},491:function(e,t,r){"use strict";var n=r(0),a=r.n(n).a.createContext(null);a.displayName="NavContext",t.a=a},517:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return n(e.querySelectorAll(t))}},561:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0);function a(){return Object(n.useReducer)((function(e){return!e}),!1)[1]}},573:function(e,t,r){"use strict";var n=r(405),a=r(407),i=r(408),o=r.n(i),l=r(0),s=r.n(l),c=r(576),b=(r(572),r(491)),u=r(454),d=s.a.forwardRef((function(e,t){var r=e.active,i=e.className,d=e.eventKey,p=e.onSelect,f=e.onClick,S=e.as,x=Object(a.a)(e,["active","className","eventKey","onSelect","onClick","as"]),v=Object(u.b)(d,x.href),h=Object(l.useContext)(u.a),m=Object(l.useContext)(b.a),g=r;if(m){x.role||"tablist"!==m.role||(x.role="tab");var O=m.getControllerId(v),y=m.getControlledId(v);x["data-rb-event-key"]=v,x.id=O||x.id,x["aria-controls"]=y||x["aria-controls"],g=null==r&&null!=v?m.activeKey===v:r}"tab"===x.role&&(x.disabled&&(x.tabIndex=-1,x["aria-disabled"]=!0),x["aria-selected"]=g);var w=Object(c.a)((function(e){f&&f(e),null!=v&&(p&&p(v,e),h&&h(v,e))}));return s.a.createElement(S,Object(n.a)({},x,{ref:t,onClick:w,className:o()(i,g&&"active")}))}));d.defaultProps={disabled:!1},t.a=d},574:function(e,t,r){"use strict";var n=r(405),a=r(407),i=r(517),o=r(0),l=r.n(o),s=r(561),c=r(605),b=r(491),u=r(454),d=r(479),p=function(){},f=l.a.forwardRef((function(e,t){var r,f,S=e.as,x=void 0===S?"ul":S,v=e.onSelect,h=e.activeKey,m=e.role,g=e.onKeyDown,O=Object(a.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),y=Object(s.a)(),w=Object(o.useRef)(!1),C=Object(o.useContext)(u.a),E=Object(o.useContext)(d.a);E&&(m=m||"tablist",h=E.activeKey,r=E.getControlledId,f=E.getControllerId);var P=Object(o.useRef)(null),M=function(e){var t=P.current;if(!t)return null;var r=Object(i.a)(t,"[data-rb-event-key]:not(.disabled)"),n=t.querySelector(".active");if(!n)return null;var a=r.indexOf(n);if(-1===a)return null;var o=a+e;return o>=r.length&&(o=0),o<0&&(o=r.length-1),r[o]},k=function(e,t){null!=e&&(v&&v(e,t),C&&C(e,t))};Object(o.useEffect)((function(){if(P.current&&w.current){var e=P.current.querySelector("[data-rb-event-key].active");e&&e.focus()}w.current=!1}));var B=Object(c.a)(t,P);return l.a.createElement(u.a.Provider,{value:k},l.a.createElement(b.a.Provider,{value:{role:m,activeKey:Object(u.b)(h),getControlledId:r||p,getControllerId:f||p}},l.a.createElement(x,Object(n.a)({},O,{onKeyDown:function(e){var t;switch(g&&g(e),e.key){case"ArrowLeft":case"ArrowUp":t=M(-1);break;case"ArrowRight":case"ArrowDown":t=M(1);break;default:return}t&&(e.preventDefault(),k(t.dataset.rbEventKey,e),w.current=!0,y())},ref:B,role:m}))))}));t.a=f},6329:function(e,t,r){(function(e,n){var a;(function(){"use strict";var i={function:!0,object:!0},o=i[typeof window]&&window||this,l=i[typeof t]&&t,s=i[typeof e]&&e&&!e.nodeType&&e,c=l&&s&&"object"==typeof n&&n;!c||c.global!==c&&c.window!==c&&c.self!==c||(o=c);var b=Math.pow(2,53)-1,u=/\bOpera/,d=Object.prototype,p=d.hasOwnProperty,f=d.toString;function S(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function x(e){return e=O(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:S(e)}function v(e,t){for(var r in e)p.call(e,r)&&t(e[r],r,e)}function h(e){return null==e?S(e):f.call(e).slice(8,-1)}function m(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function g(e,t){var r=null;return function(e,t){var r=-1,n=e?e.length:0;if("number"==typeof n&&n>-1&&n<=b)for(;++r<n;)t(e[r],r,e);else v(e,t)}(e,(function(n,a){r=t(r,n,a,e)})),r}function O(e){return String(e).replace(/^ +| +$/g,"")}var y=function e(t){var r=o,n=t&&"object"==typeof t&&"String"!=h(t);n&&(r=t,t=null);var a=r.navigator||{},i=a.userAgent||"";t||(t=i);var l,s,c,b,d,p=n?!!a.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(f.toString()),S="Object",y=n?S:"ScriptBridgingProxyObject",w=n?S:"Environment",C=n&&r.java?"JavaPackage":h(r.java),E=n?S:"RuntimeObject",P=/\bJava/.test(C)&&r.java,M=P&&h(r.environment)==w,k=P?"a":"\u03b1",B=P?"b":"\u03b2",R=r.document||{},j=r.operamini||r.opera,I=u.test(I=n&&j?j["[[Class]]"]:h(j))?I:j=null,A=t,W=[],F=null,K=t==i,G=K&&j&&"function"==typeof j.version&&j.version(),N=g([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],(function(e,r){return e||RegExp("\\b"+(r.pattern||m(r))+"\\b","i").exec(t)&&(r.label||r)})),T=function(e){return g(e,(function(e,r){return e||RegExp("\\b"+(r.pattern||m(r))+"\\b","i").exec(t)&&(r.label||r)}))}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),$=L([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),X=function(e){return g(e,(function(e,r,n){return e||(r[$]||r[/^[a-z]+(?: +[a-z]+\b)*/i.exec($)]||RegExp("\\b"+m(n)+"(?:\\b|\\w*\\d)","i").exec(t))&&n}))}({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}}),z=function(e){return g(e,(function(e,r){var n=r.pattern||m(r);return!e&&(e=RegExp("\\b"+n+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(e=function(e,t,r){var n={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&r&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(n=n[/[\d.]+$/.exec(e)])&&(e="Windows "+n),e=String(e),t&&r&&(e=e.replace(RegExp(t,"i"),r)),x(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(e,n,r.label||r)),e}))}(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function L(e){return g(e,(function(e,r){var n=r.pattern||m(r);return!e&&(e=RegExp("\\b"+n+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+n+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+n+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))&&((e=String(r.label&&!RegExp(n,"i").test(r.label)?r.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),r=r.label||r,e=x(e[0].replace(RegExp(n,"i"),r).replace(RegExp("; *(?:"+r+"[_-])?","i")," ").replace(RegExp("("+r+")[-_.]?(\\w)","i"),"$1 $2"))),e}))}function D(e){return g(e,(function(e,r){return e||(RegExp(r+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null}))}if(N&&(N=[N]),/\bAndroid\b/.test(z)&&!$&&(l=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t))&&($=O(l[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),X&&!$?$=L([X]):X&&$&&($=$.replace(RegExp("^("+m(X)+")[-_.\\s]","i"),X+" ").replace(RegExp("^("+m(X)+")[-_.]?(\\w)","i"),X+" $2")),(l=/\bGoogle TV\b/.exec($))&&($=l[0]),/\bSimulator\b/i.test(t)&&($=($?$+" ":"")+"Simulator"),"Opera Mini"==T&&/\bOPiOS\b/.test(t)&&W.push("running in Turbo/Uncompressed mode"),"IE"==T&&/\blike iPhone OS\b/.test(t)?(X=(l=e(t.replace(/like iPhone OS/,""))).manufacturer,$=l.product):/^iP/.test($)?(T||(T="Safari"),z="iOS"+((l=/ OS ([\d_]+)/i.exec(t))?" "+l[1].replace(/_/g,"."):"")):"Konqueror"==T&&/^Linux\b/i.test(z)?z="Kubuntu":X&&"Google"!=X&&(/Chrome/.test(T)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test($))||/\bAndroid\b/.test(z)&&/^Chrome/.test(T)&&/\bVersion\//i.test(t)?(T="Android Browser",z=/\bAndroid\b/.test(z)?z:"Android"):"Silk"==T?(/\bMobi/i.test(t)||(z="Android",W.unshift("desktop mode")),/Accelerated *= *true/i.test(t)&&W.unshift("accelerated")):"UC Browser"==T&&/\bUCWEB\b/.test(t)?W.push("speed mode"):"PaleMoon"==T&&(l=/\bFirefox\/([\d.]+)\b/.exec(t))?W.push("identifying as Firefox "+l[1]):"Firefox"==T&&(l=/\b(Mobile|Tablet|TV)\b/i.exec(t))?(z||(z="Firefox OS"),$||($=l[1])):!T||(l=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(T))?(T&&!$&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(l+"/")+8))&&(T=null),(l=$||X||z)&&($||X||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(z))&&(T=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(z)?z:l)+" Browser")):"Electron"==T&&(l=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&W.push("Chromium "+l),G||(G=D(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",m(T),"(?:Firefox|Minefield|NetFront)"])),(l=("iCab"==N&&parseFloat(G)>3?"WebKit":/\bOpera\b/.test(T)&&(/\bOPR\b/.test(t)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test(N)&&"WebKit"||!N&&/\bMSIE\b/i.test(t)&&("Mac OS"==z?"Tasman":"Trident")||"WebKit"==N&&/\bPlayStation\b(?! Vita\b)/i.test(T)&&"NetFront")&&(N=[l]),"IE"==T&&(l=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])?(T+=" Mobile",z="Windows Phone "+(/\+$/.test(l)?l:l+".x"),W.unshift("desktop mode")):/\bWPDesktop\b/i.test(t)?(T="IE Mobile",z="Windows Phone 8.x",W.unshift("desktop mode"),G||(G=(/\brv:([\d.]+)/.exec(t)||0)[1])):"IE"!=T&&"Trident"==N&&(l=/\brv:([\d.]+)/.exec(t))&&(T&&W.push("identifying as "+T+(G?" "+G:"")),T="IE",G=l[1]),K){if(b="global",d=null!=(c=r)?typeof c[b]:"number",/^(?:boolean|number|string|undefined)$/.test(d)||"object"==d&&!c[b])h(l=r.runtime)==y?(T="Adobe AIR",z=l.flash.system.Capabilities.os):h(l=r.phantom)==E?(T="PhantomJS",G=(l=l.version||null)&&l.major+"."+l.minor+"."+l.patch):"number"==typeof R.documentMode&&(l=/\bTrident\/(\d+)/i.exec(t))?(G=[G,R.documentMode],(l=+l[1]+4)!=G[1]&&(W.push("IE "+G[1]+" mode"),N&&(N[1]=""),G[1]=l),G="IE"==T?String(G[1].toFixed(1)):G[0]):"number"==typeof R.documentMode&&/^(?:Chrome|Firefox)\b/.test(T)&&(W.push("masking as "+T+" "+G),T="IE",G="11.0",N=["Trident"],z="Windows");else if(P&&(A=(l=P.lang.System).getProperty("os.arch"),z=z||l.getProperty("os.name")+" "+l.getProperty("os.version")),M){try{G=r.require("ringo/engine").version.join("."),T="RingoJS"}catch(H){(l=r.system)&&l.global.system==r.system&&(T="Narwhal",z||(z=l[0].os||null))}T||(T="Rhino")}else"object"==typeof r.process&&!r.process.browser&&(l=r.process)&&("object"==typeof l.versions&&("string"==typeof l.versions.electron?(W.push("Node "+l.versions.node),T="Electron",G=l.versions.electron):"string"==typeof l.versions.nw&&(W.push("Chromium "+G,"Node "+l.versions.node),T="NW.js",G=l.versions.nw)),T||(T="Node.js",A=l.arch,z=l.platform,G=(G=/[\d.]+/.exec(l.version))?G[0]:null));z=z&&x(z)}if(G&&(l=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(G)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+(K&&a.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")&&(F=/b/i.test(l)?"beta":"alpha",G=G.replace(RegExp(l+"\\+?$"),"")+("beta"==F?B:k)+(/\d+\+?/.exec(l)||"")),"Fennec"==T||"Firefox"==T&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(z))T="Firefox Mobile";else if("Maxthon"==T&&G)G=G.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test($))"Xbox 360"==$&&(z=null),"Xbox 360"==$&&/\bIEMobile\b/.test(t)&&W.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(T)&&(!T||$||/Browser|Mobi/.test(T))||"Windows CE"!=z&&!/Mobi/i.test(t))if("IE"==T&&K)try{null===r.external&&W.unshift("platform preview")}catch(H){W.unshift("embedded")}else(/\bBlackBerry\b/.test($)||/\bBB10\b/.test(t))&&(l=(RegExp($.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||G)?(z=((l=[l,/BB10/.test(t)])[1]?($=null,X="BlackBerry"):"Device Software")+" "+l[0],G=null):this!=v&&"Wii"!=$&&(K&&j||/Opera/.test(T)&&/\b(?:MSIE|Firefox)\b/i.test(t)||"Firefox"==T&&/\bOS X (?:\d+\.){2,}/.test(z)||"IE"==T&&(z&&!/^Win/.test(z)&&G>5.5||/\bWindows XP\b/.test(z)&&G>8||8==G&&!/\bTrident\b/.test(t)))&&!u.test(l=e.call(v,t.replace(u,"")+";"))&&l.name&&(l="ing as "+l.name+((l=l.version)?" "+l:""),u.test(T)?(/\bIE\b/.test(l)&&"Mac OS"==z&&(z=null),l="identify"+l):(l="mask"+l,T=I?x(I.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(l)&&(z=null),K||(G=null)),N=["Presto"],W.push(l));else T+=" Mobile";(l=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1])&&(l=[parseFloat(l.replace(/\.(\d)$/,".0$1")),l],"Safari"==T&&"+"==l[1].slice(-1)?(T="WebKit Nightly",F="alpha",G=l[1].slice(0,-1)):G!=l[1]&&G!=(l[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1])||(G=null),l[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t)||0)[1],537.36==l[0]&&537.36==l[2]&&parseFloat(l[1])>=28&&"WebKit"==N&&(N=["Blink"]),K&&(p||l[1])?(N&&(N[1]="like Chrome"),l=l[1]||((l=l[0])<530?1:l<532?2:l<532.05?3:l<533?4:l<534.03?5:l<534.07?6:l<534.1?7:l<534.13?8:l<534.16?9:l<534.24?10:l<534.3?11:l<535.01?12:l<535.02?"13+":l<535.07?15:l<535.11?16:l<535.19?17:l<536.05?18:l<536.1?19:l<537.01?20:l<537.11?"21+":l<537.13?23:l<537.18?24:l<537.24?25:l<537.36?26:"Blink"!=N?"27":"28")):(N&&(N[1]="like Safari"),l=(l=l[0])<400?1:l<500?2:l<526?3:l<533?4:l<534?"4+":l<535?5:l<537?6:l<538?7:l<601?8:l<602?9:l<604?10:l<606?11:l<608?12:"12"),N&&(N[1]+=" "+(l+="number"==typeof l?".x":/[.+]/.test(l)?"":"+")),"Safari"==T&&(!G||parseInt(G)>45)?G=l:"Chrome"==T&&/\bHeadlessChrome/i.test(t)&&W.unshift("headless")),"Opera"==T&&(l=/\bzbov|zvav$/.exec(z))?(T+=" ",W.unshift("desktop mode"),"zvav"==l?(T+="Mini",G=null):T+="Mobile",z=z.replace(RegExp(" *"+l+"$"),"")):"Safari"==T&&/\bChrome\b/.exec(N&&N[1])?(W.unshift("desktop mode"),T="Chrome Mobile",G=null,/\bOS X\b/.test(z)?(X="Apple",z="iOS 4.3+"):z=null):/\bSRWare Iron\b/.test(T)&&!G&&(G=D("Chrome")),G&&0==G.indexOf(l=/[\d.]+$/.exec(z))&&t.indexOf("/"+l+"-")>-1&&(z=O(z.replace(l,""))),z&&-1!=z.indexOf(T)&&!RegExp(T+" OS").test(z)&&(z=z.replace(RegExp(" *"+m(T)+" *"),"")),N&&!/\b(?:Avant|Nook)\b/.test(T)&&(/Browser|Lunascape|Maxthon/.test(T)||"Safari"!=T&&/^iOS/.test(z)&&/\bSafari\b/.test(N[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(T)&&N[1])&&(l=N[N.length-1])&&W.push(l),W.length&&(W=["("+W.join("; ")+")"]),X&&$&&$.indexOf(X)<0&&W.push("on "+X),$&&W.push((/^on /.test(W[W.length-1])?"":"on ")+$),z&&(l=/ ([\d.+]+)$/.exec(z),s=l&&"/"==z.charAt(z.length-l[0].length-1),z={architecture:32,family:l&&!s?z.replace(l[0],""):z,version:l?l[1]:null,toString:function(){var e=this.version;return this.family+(e&&!s?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(l=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(A))&&!/\bi686\b/i.test(A)?(z&&(z.architecture=64,z.family=z.family.replace(RegExp(" *"+l),"")),T&&(/\bWOW64\b/i.test(t)||K&&/\w(?:86|32)$/.test(a.cpuClass||a.platform)&&!/\bWin64; x64\b/i.test(t))&&W.unshift("32-bit")):z&&/^OS X/.test(z.family)&&"Chrome"==T&&parseFloat(G)>=39&&(z.architecture=64),t||(t=null);var V={};return V.description=t,V.layout=N&&N[0],V.manufacturer=X,V.name=T,V.prerelease=F,V.product=$,V.ua=t,V.version=T&&G,V.os=z||{architecture:null,family:null,version:null,toString:function(){return"null"}},V.parse=e,V.toString=function(){return this.description||""},V.version&&W.unshift(G),V.name&&W.unshift(T),z&&T&&(z!=String(z).split(" ")[0]||z!=T.split(" ")[0]&&!$)&&W.push($?"("+z+")":"on "+z),W.length&&(V.description=W.join(" ")),V}();o.platform=y,void 0===(a=function(){return y}.call(t,r,t,e))||(e.exports=a)}).call(this)}).call(this,r(851)(e),r(22))},851:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},871:function(e,t,r){"use strict";var n=r(405),a=r(407),i=r(408),o=r.n(i),l=r(0),s=r.n(l),c=r(573),b=r(454),u=r(413),d={variant:void 0,active:!1,disabled:!1},p=s.a.forwardRef((function(e,t){var r=e.bsPrefix,i=e.active,d=e.disabled,p=e.className,f=e.variant,S=e.action,x=e.as,v=e.eventKey,h=e.onClick,m=Object(a.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);r=Object(u.a)(r,"list-group-item");var g=Object(l.useCallback)((function(e){if(d)return e.preventDefault(),void e.stopPropagation();h&&h(e)}),[d,h]);return d&&void 0===m.tabIndex&&(m.tabIndex=-1,m["aria-disabled"]=!0),s.a.createElement(c.a,Object(n.a)({ref:t},m,{eventKey:Object(b.b)(v,m.href),as:x||(S?m.href?"a":"button":"div"),onClick:g,className:o()(p,r,i&&"active",d&&"disabled",f&&r+"-"+f,S&&r+"-action")}))}));p.defaultProps=d,p.displayName="ListGroupItem",t.a=p}}]);