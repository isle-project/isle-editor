/*! For license information please see 9981.72726f41.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[9981],{418919:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(202784);function i(){return(0,r.useReducer)((function(e){return!e}),!1)[1]}},303428:function(e,t,n){"use strict";n.d(t,{PB:function(){return r},$F:function(){return i}});function r(e){return`data-rr-ui-${e}`}function i(e){return`rrUi${e}`}},853154:function(e,t,n){"use strict";var r=n(658092),i=n(202784),o=n(418919),a=n(225879),l=n(699311),s=n(465590),c=n(590593),u=n(303428),b=n(621528),d=n(552322);const p=["as","onSelect","activeKey","role","onKeyDown"];const f=()=>{},x=(0,u.PB)("event-key"),S=i.forwardRef(((e,t)=>{let{as:n="div",onSelect:b,activeKey:S,role:h,onKeyDown:m}=e,g=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,p);const v=(0,o.Z)(),y=(0,i.useRef)(!1),O=(0,i.useContext)(s.Z),w=(0,i.useContext)(c.Z);let C,E;w&&(h=h||"tablist",S=w.activeKey,C=w.getControlledId,E=w.getControllerId);const M=(0,i.useRef)(null),P=e=>{const t=M.current;if(!t)return null;const n=(0,r.Z)(t,`[${x}]:not([aria-disabled=true])`),i=t.querySelector("[aria-selected=true]");if(!i)return null;const o=n.indexOf(i);if(-1===o)return null;let a=o+e;return a>=n.length&&(a=0),a<0&&(a=n.length-1),n[a]},k=(e,t)=>{null!=e&&(null==b||b(e,t),null==O||O(e,t))};(0,i.useEffect)((()=>{if(M.current&&y.current){const e=M.current.querySelector(`[${x}][aria-selected=true]`);null==e||e.focus()}y.current=!1}));const B=(0,a.Z)(t,M);return(0,d.jsx)(s.Z.Provider,{value:k,children:(0,d.jsx)(l.Z.Provider,{value:{role:h,activeKey:(0,s.h)(S),getControlledId:C||f,getControllerId:E||f},children:(0,d.jsx)(n,Object.assign({},g,{onKeyDown:e=>{if(null==m||m(e),!w)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=P(-1);break;case"ArrowRight":case"ArrowDown":t=P(1);break;default:return}t&&(e.preventDefault(),k(t.dataset[(0,u.$F)("EventKey")]||null,e),y.current=!0,v())},ref:B,role:h}))})})}));S.displayName="Nav",t.Z=Object.assign(S,{Item:b.Z})},699311:function(e,t,n){"use strict";const r=n(202784).createContext(null);r.displayName="NavContext",t.Z=r},621528:function(e,t,n){"use strict";n.d(t,{v:function(){return b}});var r=n(202784),i=n(427452),o=n(699311),a=n(465590),l=n(247830),s=n(303428),c=n(552322);const u=["as","active","eventKey"];function b({key:e,onClick:t,active:n,id:l,role:c,disabled:u}){const b=(0,r.useContext)(a.Z),d=(0,r.useContext)(o.Z);let p=n;const f={role:c};if(d){c||"tablist"!==d.role||(f.role="tab");const t=d.getControllerId(null!=e?e:null),r=d.getControlledId(null!=e?e:null);f[(0,s.PB)("event-key")]=e,f.id=t||l,f["aria-controls"]=r,p=null==n&&null!=e?d.activeKey===e:n}return"tab"===f.role&&(u&&(f.tabIndex=-1,f["aria-disabled"]=!0),p?f["aria-selected"]=p:f.tabIndex=-1),f.onClick=(0,i.Z)((n=>{u||(null==t||t(n),null!=e&&b&&!n.isPropagationStopped()&&b(e,n))})),[f,{isActive:p}]}const d=r.forwardRef(((e,t)=>{let{as:n=l.ZP,active:r,eventKey:i}=e,o=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,u);const[d,p]=b(Object.assign({key:(0,a.h)(i,o.href),active:r},o));return d[(0,s.PB)("active")]=p.isActive,(0,c.jsx)(n,Object.assign({},o,d,{ref:t}))}));d.displayName="NavItem",t.Z=d},465590:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});const r=n(202784).createContext(null),i=(e,t=null)=>null!=e?String(e):t||null;t.Z=r},590593:function(e,t,n){"use strict";const r=n(202784).createContext(null);t.Z=r},658092:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function i(e,t){return r(e.querySelectorAll(t))}},689653:function(e,t,n){var r;e=n.nmd(e),function(){"use strict";var i={function:!0,object:!0},o=i[typeof window]&&window||this,a=i[typeof t]&&t,l=i.object&&e&&!e.nodeType&&e,s=a&&l&&"object"==typeof n.g&&n.g;!s||s.global!==s&&s.window!==s&&s.self!==s||(o=s);var c=Math.pow(2,53)-1,u=/\bOpera/,b=Object.prototype,d=b.hasOwnProperty,p=b.toString;function f(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function x(e){return e=v(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:f(e)}function S(e,t){for(var n in e)d.call(e,n)&&t(e[n],n,e)}function h(e){return null==e?f(e):p.call(e).slice(8,-1)}function m(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function g(e,t){var n=null;return function(e,t){var n=-1,r=e?e.length:0;if("number"==typeof r&&r>-1&&r<=c)for(;++n<r;)t(e[n],n,e);else S(e,t)}(e,(function(r,i){n=t(n,r,i,e)})),n}function v(e){return String(e).replace(/^ +| +$/g,"")}var y=function e(t){var n=o,r=t&&"object"==typeof t&&"String"!=h(t);r&&(n=t,t=null);var i=n.navigator||{},a=i.userAgent||"";t||(t=a);var l,s,c,b,d,f=r?!!i.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(p.toString()),y="Object",O=r?y:"ScriptBridgingProxyObject",w=r?y:"Environment",C=r&&n.java?"JavaPackage":h(n.java),E=r?y:"RuntimeObject",M=/\bJava/.test(C)&&n.java,P=M&&h(n.environment)==w,k=M?"a":"\u03b1",B=M?"b":"\u03b2",I=n.document||{},R=n.operamini||n.opera,A=u.test(A=r&&R?R["[[Class]]"]:h(R))?A:R=null,W=t,$=[],F=null,G=t==a,K=G&&R&&"function"==typeof R.version&&R.version(),j=g([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],(function(e,n){return e||RegExp("\\b"+(n.pattern||m(n))+"\\b","i").exec(t)&&(n.label||n)})),T=function(e){return g(e,(function(e,n){return e||RegExp("\\b"+(n.pattern||m(n))+"\\b","i").exec(t)&&(n.label||n)}))}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),N=z([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),Z=function(e){return g(e,(function(e,n,r){return e||(n[N]||n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(N)]||RegExp("\\b"+m(r)+"(?:\\b|\\w*\\d)","i").exec(t))&&r}))}({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}}),X=function(e){return g(e,(function(e,n){var r=n.pattern||m(n);return!e&&(e=RegExp("\\b"+r+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(e=function(e,t,n){var r={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&n&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(r=r[/[\d.]+$/.exec(e)])&&(e="Windows "+r),e=String(e),t&&n&&(e=e.replace(RegExp(t,"i"),n)),x(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(e,r,n.label||n)),e}))}(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function z(e){return g(e,(function(e,n){var r=n.pattern||m(n);return!e&&(e=RegExp("\\b"+r+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+r+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+r+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))&&((e=String(n.label&&!RegExp(r,"i").test(n.label)?n.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),n=n.label||n,e=x(e[0].replace(RegExp(r,"i"),n).replace(RegExp("; *(?:"+n+"[_-])?","i")," ").replace(RegExp("("+n+")[-_.]?(\\w)","i"),"$1 $2"))),e}))}function L(e){return g(e,(function(e,n){return e||(RegExp(n+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null}))}if(j&&(j=[j]),/\bAndroid\b/.test(X)&&!N&&(l=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t))&&(N=v(l[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),Z&&!N?N=z([Z]):Z&&N&&(N=N.replace(RegExp("^("+m(Z)+")[-_.\\s]","i"),Z+" ").replace(RegExp("^("+m(Z)+")[-_.]?(\\w)","i"),Z+" $2")),(l=/\bGoogle TV\b/.exec(N))&&(N=l[0]),/\bSimulator\b/i.test(t)&&(N=(N?N+" ":"")+"Simulator"),"Opera Mini"==T&&/\bOPiOS\b/.test(t)&&$.push("running in Turbo/Uncompressed mode"),"IE"==T&&/\blike iPhone OS\b/.test(t)?(Z=(l=e(t.replace(/like iPhone OS/,""))).manufacturer,N=l.product):/^iP/.test(N)?(T||(T="Safari"),X="iOS"+((l=/ OS ([\d_]+)/i.exec(t))?" "+l[1].replace(/_/g,"."):"")):"Konqueror"==T&&/^Linux\b/i.test(X)?X="Kubuntu":Z&&"Google"!=Z&&(/Chrome/.test(T)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test(N))||/\bAndroid\b/.test(X)&&/^Chrome/.test(T)&&/\bVersion\//i.test(t)?(T="Android Browser",X=/\bAndroid\b/.test(X)?X:"Android"):"Silk"==T?(/\bMobi/i.test(t)||(X="Android",$.unshift("desktop mode")),/Accelerated *= *true/i.test(t)&&$.unshift("accelerated")):"UC Browser"==T&&/\bUCWEB\b/.test(t)?$.push("speed mode"):"PaleMoon"==T&&(l=/\bFirefox\/([\d.]+)\b/.exec(t))?$.push("identifying as Firefox "+l[1]):"Firefox"==T&&(l=/\b(Mobile|Tablet|TV)\b/i.exec(t))?(X||(X="Firefox OS"),N||(N=l[1])):!T||(l=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(T))?(T&&!N&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(l+"/")+8))&&(T=null),(l=N||Z||X)&&(N||Z||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(X))&&(T=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(X)?X:l)+" Browser")):"Electron"==T&&(l=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&$.push("Chromium "+l),K||(K=L(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",m(T),"(?:Firefox|Minefield|NetFront)"])),(l=("iCab"==j&&parseFloat(K)>3?"WebKit":/\bOpera\b/.test(T)&&(/\bOPR\b/.test(t)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test(j)&&"WebKit"||!j&&/\bMSIE\b/i.test(t)&&("Mac OS"==X?"Tasman":"Trident")||"WebKit"==j&&/\bPlayStation\b(?! Vita\b)/i.test(T)&&"NetFront")&&(j=[l]),"IE"==T&&(l=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])?(T+=" Mobile",X="Windows Phone "+(/\+$/.test(l)?l:l+".x"),$.unshift("desktop mode")):/\bWPDesktop\b/i.test(t)?(T="IE Mobile",X="Windows Phone 8.x",$.unshift("desktop mode"),K||(K=(/\brv:([\d.]+)/.exec(t)||0)[1])):"IE"!=T&&"Trident"==j&&(l=/\brv:([\d.]+)/.exec(t))&&(T&&$.push("identifying as "+T+(K?" "+K:"")),T="IE",K=l[1]),G){if(b="global",d=null!=(c=n)?typeof c[b]:"number",/^(?:boolean|number|string|undefined)$/.test(d)||"object"==d&&!c[b])h(l=n.runtime)==O?(T="Adobe AIR",X=l.flash.system.Capabilities.os):h(l=n.phantom)==E?(T="PhantomJS",K=(l=l.version||null)&&l.major+"."+l.minor+"."+l.patch):"number"==typeof I.documentMode&&(l=/\bTrident\/(\d+)/i.exec(t))?(K=[K,I.documentMode],(l=+l[1]+4)!=K[1]&&($.push("IE "+K[1]+" mode"),j&&(j[1]=""),K[1]=l),K="IE"==T?String(K[1].toFixed(1)):K[0]):"number"==typeof I.documentMode&&/^(?:Chrome|Firefox)\b/.test(T)&&($.push("masking as "+T+" "+K),T="IE",K="11.0",j=["Trident"],X="Windows");else if(M&&(W=(l=M.lang.System).getProperty("os.arch"),X=X||l.getProperty("os.name")+" "+l.getProperty("os.version")),P){try{K=n.require("ringo/engine").version.join("."),T="RingoJS"}catch(V){(l=n.system)&&l.global.system==n.system&&(T="Narwhal",X||(X=l[0].os||null))}T||(T="Rhino")}else"object"==typeof n.process&&!n.process.browser&&(l=n.process)&&("object"==typeof l.versions&&("string"==typeof l.versions.electron?($.push("Node "+l.versions.node),T="Electron",K=l.versions.electron):"string"==typeof l.versions.nw&&($.push("Chromium "+K,"Node "+l.versions.node),T="NW.js",K=l.versions.nw)),T||(T="Node.js",W=l.arch,X=l.platform,K=(K=/[\d.]+/.exec(l.version))?K[0]:null));X=X&&x(X)}if(K&&(l=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(K)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+(G&&i.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")&&(F=/b/i.test(l)?"beta":"alpha",K=K.replace(RegExp(l+"\\+?$"),"")+("beta"==F?B:k)+(/\d+\+?/.exec(l)||"")),"Fennec"==T||"Firefox"==T&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(X))T="Firefox Mobile";else if("Maxthon"==T&&K)K=K.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(N))"Xbox 360"==N&&(X=null),"Xbox 360"==N&&/\bIEMobile\b/.test(t)&&$.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(T)&&(!T||N||/Browser|Mobi/.test(T))||"Windows CE"!=X&&!/Mobi/i.test(t))if("IE"==T&&G)try{null===n.external&&$.unshift("platform preview")}catch(V){$.unshift("embedded")}else(/\bBlackBerry\b/.test(N)||/\bBB10\b/.test(t))&&(l=(RegExp(N.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||K)?(X=((l=[l,/BB10/.test(t)])[1]?(N=null,Z="BlackBerry"):"Device Software")+" "+l[0],K=null):this!=S&&"Wii"!=N&&(G&&R||/Opera/.test(T)&&/\b(?:MSIE|Firefox)\b/i.test(t)||"Firefox"==T&&/\bOS X (?:\d+\.){2,}/.test(X)||"IE"==T&&(X&&!/^Win/.test(X)&&K>5.5||/\bWindows XP\b/.test(X)&&K>8||8==K&&!/\bTrident\b/.test(t)))&&!u.test(l=e.call(S,t.replace(u,"")+";"))&&l.name&&(l="ing as "+l.name+((l=l.version)?" "+l:""),u.test(T)?(/\bIE\b/.test(l)&&"Mac OS"==X&&(X=null),l="identify"+l):(l="mask"+l,T=A?x(A.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(l)&&(X=null),G||(K=null)),j=["Presto"],$.push(l));else T+=" Mobile";(l=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1])&&(l=[parseFloat(l.replace(/\.(\d)$/,".0$1")),l],"Safari"==T&&"+"==l[1].slice(-1)?(T="WebKit Nightly",F="alpha",K=l[1].slice(0,-1)):K!=l[1]&&K!=(l[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1])||(K=null),l[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t)||0)[1],537.36==l[0]&&537.36==l[2]&&parseFloat(l[1])>=28&&"WebKit"==j&&(j=["Blink"]),G&&(f||l[1])?(j&&(j[1]="like Chrome"),l=l[1]||((l=l[0])<530?1:l<532?2:l<532.05?3:l<533?4:l<534.03?5:l<534.07?6:l<534.1?7:l<534.13?8:l<534.16?9:l<534.24?10:l<534.3?11:l<535.01?12:l<535.02?"13+":l<535.07?15:l<535.11?16:l<535.19?17:l<536.05?18:l<536.1?19:l<537.01?20:l<537.11?"21+":l<537.13?23:l<537.18?24:l<537.24?25:l<537.36?26:"Blink"!=j?"27":"28")):(j&&(j[1]="like Safari"),l=(l=l[0])<400?1:l<500?2:l<526?3:l<533?4:l<534?"4+":l<535?5:l<537?6:l<538?7:l<601?8:l<602?9:l<604?10:l<606?11:l<608?12:"12"),j&&(j[1]+=" "+(l+="number"==typeof l?".x":/[.+]/.test(l)?"":"+")),"Safari"==T&&(!K||parseInt(K)>45)?K=l:"Chrome"==T&&/\bHeadlessChrome/i.test(t)&&$.unshift("headless")),"Opera"==T&&(l=/\bzbov|zvav$/.exec(X))?(T+=" ",$.unshift("desktop mode"),"zvav"==l?(T+="Mini",K=null):T+="Mobile",X=X.replace(RegExp(" *"+l+"$"),"")):"Safari"==T&&/\bChrome\b/.exec(j&&j[1])?($.unshift("desktop mode"),T="Chrome Mobile",K=null,/\bOS X\b/.test(X)?(Z="Apple",X="iOS 4.3+"):X=null):/\bSRWare Iron\b/.test(T)&&!K&&(K=L("Chrome")),K&&0==K.indexOf(l=/[\d.]+$/.exec(X))&&t.indexOf("/"+l+"-")>-1&&(X=v(X.replace(l,""))),X&&-1!=X.indexOf(T)&&!RegExp(T+" OS").test(X)&&(X=X.replace(RegExp(" *"+m(T)+" *"),"")),j&&!/\b(?:Avant|Nook)\b/.test(T)&&(/Browser|Lunascape|Maxthon/.test(T)||"Safari"!=T&&/^iOS/.test(X)&&/\bSafari\b/.test(j[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(T)&&j[1])&&(l=j[j.length-1])&&$.push(l),$.length&&($=["("+$.join("; ")+")"]),Z&&N&&N.indexOf(Z)<0&&$.push("on "+Z),N&&$.push((/^on /.test($[$.length-1])?"":"on ")+N),X&&(l=/ ([\d.+]+)$/.exec(X),s=l&&"/"==X.charAt(X.length-l[0].length-1),X={architecture:32,family:l&&!s?X.replace(l[0],""):X,version:l?l[1]:null,toString:function(){var e=this.version;return this.family+(e&&!s?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(l=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(W))&&!/\bi686\b/i.test(W)?(X&&(X.architecture=64,X.family=X.family.replace(RegExp(" *"+l),"")),T&&(/\bWOW64\b/i.test(t)||G&&/\w(?:86|32)$/.test(i.cpuClass||i.platform)&&!/\bWin64; x64\b/i.test(t))&&$.unshift("32-bit")):X&&/^OS X/.test(X.family)&&"Chrome"==T&&parseFloat(K)>=39&&(X.architecture=64),t||(t=null);var D={};return D.description=t,D.layout=j&&j[0],D.manufacturer=Z,D.name=T,D.prerelease=F,D.product=N,D.ua=t,D.version=T&&K,D.os=X||{architecture:null,family:null,version:null,toString:function(){return"null"}},D.parse=e,D.toString=function(){return this.description||""},D.version&&$.unshift(K),D.name&&$.unshift(T),X&&T&&(X!=String(X).split(" ")[0]||X!=T.split(" ")[0]&&!N)&&$.push(N?"("+X+")":"on "+X),$.length&&(D.description=$.join(" ")),D}();o.platform=y,void 0===(r=function(){return y}.call(t,n,t,e))||(e.exports=r)}.call(this)},188304:function(e,t,n){"use strict";var r=n(72779),i=n.n(r),o=n(202784),a=(n(645982),n(230069)),l=n(853154),s=n(429658),c=n(912860),u=n(552322);const b=o.forwardRef(((e,t)=>{const{className:n,bsPrefix:r,variant:o,horizontal:c,numbered:b,as:d="div",...p}=(0,a.Ch)(e,{activeKey:"onSelect"}),f=(0,s.vE)(r,"list-group");let x;return c&&(x=!0===c?"horizontal":`horizontal-${c}`),(0,u.jsx)(l.Z,{ref:t,...p,as:d,className:i()(n,f,o&&`${f}-${o}`,x&&`${f}-${x}`,b&&`${f}-numbered`)})}));b.displayName="ListGroup",t.Z=Object.assign(b,{Item:c.Z})},912860:function(e,t,n){"use strict";var r=n(72779),i=n.n(r),o=n(202784),a=n(427452),l=n(621528),s=n(465590),c=n(429658),u=n(552322);const b=o.forwardRef((({bsPrefix:e,active:t,disabled:n,eventKey:r,className:o,variant:b,action:d,as:p,...f},x)=>{e=(0,c.vE)(e,"list-group-item");const[S,h]=(0,l.v)({key:(0,s.h)(r,f.href),active:t,...f}),m=(0,a.Z)((e=>{if(n)return e.preventDefault(),void e.stopPropagation();S.onClick(e)}));n&&void 0===f.tabIndex&&(f.tabIndex=-1,f["aria-disabled"]=!0);const g=p||(d?f.href?"a":"button":"div");return(0,u.jsx)(g,{ref:x,...f,...S,onClick:m,className:i()(o,e,h.isActive&&"active",n&&"disabled",b&&`${e}-${b}`,d&&`${e}-action`)})}));b.displayName="ListGroupItem",t.Z=b}}]);