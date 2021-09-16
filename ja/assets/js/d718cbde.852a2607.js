"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9287],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(202784),r=n(79443);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var p=function(e){var t,n=e.lazy,r=e.block,p=e.defaultValue,s=e.values,c=e.groupId,m=e.className,d=a.Children.toArray(e.children),f=null!=s?s:d.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=p?p:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,v=l(),b=v.tabGroupChoices,y=v.setTabGroupChoices,N=(0,a.useState)(k),g=N[0],h=N[1],C=[];if(null!=c){var w=b[c];null!=w&&w!==g&&f.some((function(e){return e.value===w}))&&h(w)}var x=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;h(a),null!=c&&(y(c,a),setTimeout((function(){var e,n,a,r,l,i,o,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,p=i.innerWidth,n>=0&&l<=p&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:j,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},121362:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(855064),o=n(358215),u=["components"],p={id:"video-player",title:"Video Player",sidebar_label:"Video Player"},s=void 0,c={unversionedId:"video-player",id:"video-player",isDocsHomePage:!1,title:"Video Player",description:"YouTube\u3001SoundCloud\u3001Vimeo\u306e\u30e1\u30c7\u30a3\u30a2\u30d5\u30a1\u30a4\u30eb\u3084\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u518d\u751f\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/video-player.md",sourceDirName:".",slug:"/video-player",permalink:"/ja/docs/video-player",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/video-player.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"2021/2/21",frontMatter:{id:"video-player",title:"Video Player",sidebar_label:"Video Player"},sidebar:"docs",previous:{title:"Video Lecture",permalink:"/ja/docs/video-lecture"},next:{title:"Image",permalink:"/ja/docs/image"}},m=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[]},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"YouTube\u3001SoundCloud\u3001Vimeo\u306e\u30e1\u30c7\u30a3\u30a2\u30d5\u30a1\u30a4\u30eb\u3084\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u518d\u751f\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002"),(0,l.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"url")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u52d5\u753b\u306eURL. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"controls")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u306f\u3001\u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u306e\u5236\u5fa1\u8981\u7d20\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u793a\u3057\u307e\u3059\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"playing")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u306f\u3001\u30d3\u30c7\u30aa\u306e\u518d\u751f\u3092\u81ea\u52d5\u7684\u306b\u958b\u59cb\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u793a\u3057\u307e\u3059\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"volume")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u30d7\u30ec\u30a4\u30e4\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"0.8"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"center")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u3092\u4e2d\u592e\u306b\u914d\u7f6e\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"height")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|number)"),": \u9078\u624b\u306e\u8eab\u9577. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"360"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"width")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|number)"),": \u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u5e45. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"640"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"loop")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u52d5\u753b\u3092\u518d\u751f\u3057\u305f\u5f8c\u306b\u65b0\u305f\u306b\u52d5\u753b\u3092\u958b\u59cb\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"voiceID")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u97f3\u58f0\u5236\u5fa1\u8b58\u5225\u5b50. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"startTime")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u52d5\u753b\u3092\u958b\u59cb\u3059\u308b\u79d2\u6570\u30010 \u304b\u3089 1 \u306e\u9593\u306e\u5024\u306e\u5834\u5408\u306f\u7aef\u6570\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onEnded")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u30b3\u30fc\u30eb\u30d0\u30c3\u30af. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onEnded() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onPause")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u4e00\u6642\u505c\u6b62\u6642\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onPause() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onPlay")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u4e00\u6642\u505c\u6b62\u5f8c\u3001\u52d5\u753b\u306e\u518d\u751f\u304c\u958b\u59cb\u307e\u305f\u306f\u518d\u958b\u3055\u308c\u305f\u3068\u304d\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onPlay() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onStart")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u4e00\u6642\u505c\u6b62\u6642\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onStart() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onSeek")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u30e1\u30c7\u30a3\u30a2\u30b7\u30fc\u30af\u304c ",(0,l.kt)("inlineCode",{parentName:"li"},"seconds")," \u30d1\u30e9\u30e1\u30fc\u30bf\u3067\u547c\u3073\u51fa\u3055\u308c\u305f\u3068\u304d\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onSeek() {}"),".")),(0,l.kt)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Autoplay",value:"Autoplay"},{label:"Start Time",value:"startTime"},{label:"Controlled Size",value:"controlledSize"},{label:"With Callback on Pause",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"\n/>\n'))),(0,l.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    playing\n    controls\n/>\n'))),(0,l.kt)(o.Z,{value:"startTime",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    controls\n    startTime={28}\n/>\n'))),(0,l.kt)(o.Z,{value:"controlledSize",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    width={520}\n    height={290}\n    style={{ outline: '10px solid orange', boxShadow: '0 6px 12px black'}}\n/>\n"))),(0,l.kt)(o.Z,{value:"withCallback",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    onPause={ function(){ alert('Do it again') }}\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);