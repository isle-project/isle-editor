(self.webpackChunk=self.webpackChunk||[]).push([[9833],{603905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},358215:function(e,t,a){"use strict";var n=a(202784);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},541395:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(202784),r=a(180944),i=a(386010),l="tabItem_1uMI",o="tabItemActive_2DSg";var u=37,s=39;var p=function(e){var t=e.lazy,a=e.block,p=e.defaultValue,m=e.values,c=e.groupId,d=e.className,k=(0,r.Z)(),f=k.tabGroupChoices,v=k.setTabGroupChoices,b=(0,n.useState)(p),y=b[0],N=b[1],g=n.Children.toArray(e.children),h=[];if(null!=c){var C=f[c];null!=C&&C!==y&&m.some((function(e){return e.value===C}))&&N(C)}var j=function(e){var t=e.currentTarget,a=h.indexOf(t),n=m[a].value;N(n),null!=c&&(v(c,n),setTimeout((function(){var e,a,n,r,i,l,u,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,u=l.innerHeight,s=l.innerWidth,a>=0&&i<=s&&r<=u&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},P=function(e){var t,a;switch(e.keyCode){case s:var n=h.indexOf(e.target)+1;a=h[n]||h[0];break;case u:var r=h.indexOf(e.target)-1;a=h[r]||h[h.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},m.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:P,onFocus:j,onClick:j},a)}))),t?(0,n.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(202784).createContext)(void 0);t.Z=n},180944:function(e,t,a){"use strict";var n=a(202784),r=a(79443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},199284:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var n=a(722122),r=a(419756),i=(a(202784),a(603905)),l=a(541395),o=a(358215),u={id:"video-player",title:"Video Player",sidebar_label:"Video Player"},s={unversionedId:"video-player",id:"video-player",isDocsHomePage:!1,title:"Video Player",description:"Komponents, kas paredz\u0113ts multivides failu un satura atska\u0146o\u0161anai no pakalpojuma YouTube, SoundCloud un Vimeo.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/video-player.md",sourceDirName:".",slug:"/video-player",permalink:"/docs/video-player",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/video-player.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021.06.1.",sidebar_label:"Video Player",frontMatter:{id:"video-player",title:"Video Player",sidebar_label:"Video Player"},sidebar:"docs",previous:{title:"Video Lecture",permalink:"/docs/video-lecture"},next:{title:"Image",permalink:"/docs/image"}},p=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",children:[]},{value:"Piem\u0113ri",id:"piem\u0113ri",children:[]}],m={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Komponents, kas paredz\u0113ts multivides failu un satura atska\u0146o\u0161anai no pakalpojuma YouTube, SoundCloud un Vimeo."),(0,i.kt)("h2",{id:"iesp\u0113jas"},"Iesp\u0113jas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"url")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": Videoklipa URL. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"controls")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": nor\u0101da, vai tiek r\u0101d\u012bti video atska\u0146ot\u0101ja vad\u012bbas elementi.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"playing")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": nor\u0101da, vai autom\u0101tiski s\u0101kt video atska\u0146o\u0161anu.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"volume")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": atska\u0146ot\u0101ja ska\u013cums. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0.8"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"center")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai video atska\u0146ot\u0101ju centr\u0113t.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"height")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|number)"),": sp\u0113l\u0113t\u0101ja augstums. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"360"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"width")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|number)"),": atska\u0146ot\u0101ja platums. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"640"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"loop")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai p\u0113c video atska\u0146o\u0161anas to s\u0101kt no jauna.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"voiceID")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": balss vad\u012bbas identifikators. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"startTime")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": sekun\u017eu skaits, no kura s\u0101kt video, vai da\u013ca, ja v\u0113rt\u012bba ir no 0 l\u012bdz 1.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS ieb\u016bv\u0113tie stili. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onEnded")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": atsauces zvans, kas tiek izsaukts, kad video beidzas. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onEnded() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onPause")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": atsauces zvans, kas tiek izsaukts, kad video tiek aptur\u0113ts.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onPause() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onPlay")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": atsauces zvans, kas tiek izsaukts, kad video s\u0101k vai ats\u0101k atska\u0146o\u0161anu p\u0113c pauzes.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onPlay() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onStart")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": atsauces zvans, kas tiek izsaukts, tikl\u012bdz video tiek aptur\u0113ts.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onStart() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSeek")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": atgriezeniskais zvans, kad mediju mekl\u0113\u0161ana tiek izsaukta ar parametru ",(0,i.kt)("inlineCode",{parentName:"li"},"seconds"),".. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSeek() {}"),".")),(0,i.kt)("h2",{id:"piem\u0113ri"},"Piem\u0113ri"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Autoplay",value:"Autoplay"},{label:"Start Time",value:"startTime"},{label:"Controlled Size",value:"controlledSize"},{label:"With Callback on Pause",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"\n/>\n'))),(0,i.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    playing\n    controls\n/>\n'))),(0,i.kt)(o.Z,{value:"startTime",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    controls\n    startTime={28}\n/>\n'))),(0,i.kt)(o.Z,{value:"controlledSize",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    width={520}\n    height={290}\n    style={{ outline: '10px solid orange', boxShadow: '0 6px 12px black'}}\n/>\n"))),(0,i.kt)(o.Z,{value:"withCallback",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    onPause={ function(){ alert('Do it again') }}\n/>\n")))))}c.isMDXComponent=!0},386010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);