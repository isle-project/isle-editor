"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1040],{603905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},63874:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return m}});var r=t(487462),a=t(263366),o=(t(202784),t(603905)),i=["components"],l={id:"recorder",title:"Recorder",sidebar_label:"Recorder"},c=void 0,p={unversionedId:"recorder",id:"recorder",title:"Recorder",description:"Komponent ISLE do nagrywania d\u017awi\u0119ku, ekranu i obrazu.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/recorder.md",sourceDirName:".",slug:"/recorder",permalink:"/pl/docs/recorder",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/recorder.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8.10.2021",frontMatter:{id:"recorder",title:"Recorder",sidebar_label:"Recorder"},sidebar:"docs",previous:{title:"QR Code",permalink:"/pl/docs/qrcode"},next:{title:"Seal",permalink:"/pl/docs/seal"}},u={},d=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],s={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Komponent ISLE do nagrywania d\u017awi\u0119ku, ekranu i obrazu."),(0,o.kt)("h2",{id:"opcje"},"Opcje"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"audio")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": wskazuje, czy d\u017awi\u0119k powinien by\u0107 nagrywany. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"camera")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": wskazuje, czy kamera internetowa powinna by\u0107 rejestrowana. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"screen")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": wskazuje, czy ekran powinien by\u0107 przechwytywany. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"autostart")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": wskazuje, czy nagrywanie powinno rozpocz\u0105\u0107 si\u0119 natychmiast. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"downloadable")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": wskazuje, czy u\u017cytkownicy powinni mie\u0107 mo\u017cliwo\u015b\u0107 pobrania nagrania. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"uploadable")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": wskazuje, czy u\u017cytkownicy powinni mie\u0107 mo\u017cliwo\u015b\u0107 przes\u0142ania nagrania na serwer. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"bitsPerSecond")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": bity na sekund\u0119. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"1280000"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,o.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Recorder \n    audio\n    screen\n    downloadable\n/>\n")))}m.isMDXComponent=!0}}]);