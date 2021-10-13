"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9750],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(202784),r=n(79443);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var d=function(e){var t,n=e.lazy,r=e.block,d=e.defaultValue,s=e.values,p=e.groupId,c=e.className,m=a.Children.toArray(e.children),f=null!=s?s:m.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=d?d:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,b=l(),v=b.tabGroupChoices,g=b.setTabGroupChoices,y=(0,a.useState)(k),N=y[0],h=y[1],C=[];if(null!=p){var w=v[p];null!=w&&w!==N&&f.some((function(e){return e.value===w}))&&h(w)}var P=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;h(a),null!=p&&(g(p,a),setTimeout((function(){var e,n,a,r,l,i,o,d;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,d=i.innerWidth,n>=0&&l<=d&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},c)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:P,onClick:P},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},636358:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(855064),o=n(358215),u=["components"],d={id:"video-player",title:"Video Player",sidebar_label:"Video Player"},s=void 0,p={unversionedId:"video-player",id:"video-player",isDocsHomePage:!1,title:"Video Player",description:"Eine Komponente zur Wiedergabe von Mediendateien und Inhalten von YouTube, SoundCloud und Vimeo.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/video-player.md",sourceDirName:".",slug:"/video-player",permalink:"/de/docs/video-player",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/video-player.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8.10.2021",frontMatter:{id:"video-player",title:"Video Player",sidebar_label:"Video Player"},sidebar:"docs",previous:{title:"Video Lecture",permalink:"/de/docs/video-lecture"},next:{title:"Image",permalink:"/de/docs/image"}},c=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],m={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Eine Komponente zur Wiedergabe von Mediendateien und Inhalten von YouTube, SoundCloud und Vimeo."),(0,l.kt)("h2",{id:"optionen"},"Optionen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"url")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": URL des Videos. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"controls")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": gibt an, ob Bedienelemente des Videoplayers angezeigt werden sollen. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"playing")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": gibt an, ob die Wiedergabe des Videos automatisch gestartet werden soll. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"volume")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": Lautst\xe4rke des Players. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"0.8"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"center")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob der Videoplayer zentriert werden soll. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"height")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|number)"),": H\xf6he des Players. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"360"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"width")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|number)"),": Breite des Players. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"640"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"loop")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob das Video nach dem Abspielen neu gestartet werden soll. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"startTime")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": Anzahl der Sekunden, bei denen das Video gestartet werden soll, oder Bruchteil, wenn der Wert zwischen 0 und 1 liegt. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onEnded")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": Callback, der aufgerufen wird, sobald das Video endet. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onEnded() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onPause")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": Callback, der aufgerufen wird, wenn das Video pausiert. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onPause() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onPlay")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": Callback, der aufgerufen wird, wenn das Video startet oder die Wiedergabe nach dem Anhalten wieder aufgenommen wird. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onPlay() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onStart")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": Callback, der aufgerufen wird, sobald das Video pausiert. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onStart() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onSeek")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": Callback, wenn Mediensuchen mit Parameter ",(0,l.kt)("inlineCode",{parentName:"li"},"Sekunden")," aufgerufen werden. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onSeek() {}"),".")),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Autoplay",value:"Autoplay"},{label:"Start Time",value:"startTime"},{label:"Controlled Size",value:"controlledSize"},{label:"With Callback on Pause",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"\n/>\n'))),(0,l.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    playing\n    controls\n/>\n'))),(0,l.kt)(o.Z,{value:"startTime",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    controls\n    startTime={28}\n/>\n'))),(0,l.kt)(o.Z,{value:"controlledSize",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    width={520}\n    height={290}\n    style={{ outline: '10px solid orange', boxShadow: '0 6px 12px black'}}\n/>\n"))),(0,l.kt)(o.Z,{value:"withCallback",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    onPause={ function(){ alert('Do it again') }}\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);