(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(410)),l=n(443),o=n(444),c={id:"video-player",title:"Video Player",sidebar_label:"Video Player"},b={unversionedId:"video-player",id:"video-player",isDocsHomePage:!1,title:"Video Player",description:"Un componente per la riproduzione di file e contenuti multimediali da YouTube, SoundCloud e Vimeo.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/video-player.md",slug:"/video-player",permalink:"/it/docs/video-player",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/video-player.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/2/2021",sidebar_label:"Video Player",sidebar:"docs",previous:{title:"Video Lecture",permalink:"/it/docs/video-lecture"},next:{title:"Image",permalink:"/it/docs/image"}},u=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],s={toc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Un componente per la riproduzione di file e contenuti multimediali da YouTube, SoundCloud e Vimeo."),Object(r.b)("h2",{id:"opzioni"},"Opzioni"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"url")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": URL del video. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"controls")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": indica se visualizzare gli elementi di controllo del lettore video. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"playing")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": indica se avviare automaticamente la riproduzione del video. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"volume")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": volume del giocatore. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"0.8"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"center")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se centrare il lettore video. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"height")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|number)"),": altezza del giocatore. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"360"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"width")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|number)"),": larghezza del giocatore. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"640"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"loop")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se avviare nuovamente il video dopo che \xe8 stato riprodotto. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"voiceID")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": identificatore di controllo vocale. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"startTime")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": numero di secondi a cui avviare il video, o frazione se il valore \xe8 compreso tra 0 e 1. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onEnded")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": richiamata una volta terminato il video. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onEnded() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onPause")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": richiamata quando il video si interrompe. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onPause() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onPlay")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": richiamata quando il video inizia o riprende la riproduzione dopo una pausa. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onPlay() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onStart")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": richiamata una volta che il video si interrompe. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onStart() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSeek")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),': richiamo quando il media cerca chiamato con il parametro "secondi. Default: ',Object(r.b)("inlineCode",{parentName:"li"},"onSeek() {}"),".")),Object(r.b)("h2",{id:"esempi"},"Esempi"),Object(r.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Autoplay",value:"Autoplay"},{label:"Start Time",value:"startTime"},{label:"Controlled Size",value:"controlledSize"},{label:"With Callback on Pause",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},Object(r.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"\n/>\n'))),Object(r.b)(o.a,{value:"withStyle",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    playing\n    controls\n/>\n'))),Object(r.b)(o.a,{value:"startTime",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    controls\n    startTime={28}\n/>\n'))),Object(r.b)(o.a,{value:"controlledSize",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    width={520}\n    height={290}\n    style={{ outline: '10px solid orange', boxShadow: '0 6px 12px black'}}\n/>\n"))),Object(r.b)(o.a,{value:"withCallback",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    onPause={ function(){ alert('Do it again') }}\n/>\n")))))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),u=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,d=s["".concat(l,".").concat(m)]||s[m]||p[m]||r;return n?i.a.createElement(d,o(o({ref:t},b),{},{components:n})):i.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<r;b++)l[b]=n[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},440:function(e,t,n){"use strict";var a=n(0),i=n(441);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},443:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(440),l=n(434),o=n(57),c=n.n(o);const b=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:s,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:O}=Object(r.a)(),[j,f]=Object(a.useState)(o),v=a.Children.toArray(e.children),y=[];if(null!=p){const e=d[p];null!=e&&e!==j&&s.some((t=>t.value===e))&&f(e)}const g=e=>{const t=e.target,n=y.indexOf(t),a=v[n].props.value;f(a),null!=p&&(O(p,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:l}=window;return t>=0&&i<=l&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},N=e=>{var t;let n;switch(e.keyCode){case u:{const t=y.indexOf(e.target)+1;n=y[t]||y[0];break}case b:{const t=y.indexOf(e.target)-1;n=y[t]||y[y.length-1];break}}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},s.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>y.push(e),onKeyDown:N,onFocus:g,onClick:g},t)))),t?Object(a.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}},444:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);