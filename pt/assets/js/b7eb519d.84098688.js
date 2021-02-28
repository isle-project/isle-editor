(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{273:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(409)),l=a(462),i=a(463),c={id:"video-player",title:"Video Player",sidebar_label:"Video Player"},b={unversionedId:"video-player",id:"video-player",isDocsHomePage:!1,title:"Video Player",description:"Um componente para reproduzir arquivos de m\xeddia e conte\xfado do YouTube, SoundCloud, e Vimeo.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/video-player.md",slug:"/video-player",permalink:"/pt/docs/video-player",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/video-player.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Video Player",sidebar:"docs",previous:{title:"Video Lecture",permalink:"/pt/docs/video-lecture"},next:{title:"Image",permalink:"/pt/docs/image"}},u=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],d={toc:u};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Um componente para reproduzir arquivos de m\xeddia e conte\xfado do YouTube, SoundCloud, e Vimeo."),Object(o.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"url")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": URL do v\xeddeo. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"controls")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": indica se devem ser exibidos elementos de controle do reprodutor de v\xeddeo. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"playing")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": indica se deve come\xe7ar a reproduzir o v\xeddeo automaticamente. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"volume")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": volume do jogador. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"0.8"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"center")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla se o reprodutor de v\xeddeo deve ser centralizado. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"height")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|number)"),": altura do jogador. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"360"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"width")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|number)"),": largura do jogador. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"640"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"loop")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla se o v\xeddeo deve ser reiniciado ap\xf3s a sua reprodu\xe7\xe3o. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"voiceID")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": identificador de controle de voz. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"startTime")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero de segundos para iniciar o v\xeddeo, ou fra\xe7\xe3o se o valor estiver entre 0 e 1. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onEnded")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada quando o v\xeddeo termina. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onEnded() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onPause")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada quando o v\xeddeo faz uma pausa. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onPause() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onPlay")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada quando o v\xeddeo come\xe7a ou retoma a reprodu\xe7\xe3o ap\xf3s uma pausa. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onPlay() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onStart")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada quando o v\xeddeo faz uma pausa. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onStart() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onSeek")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": chamada de retorno quando a m\xeddia procura chamada com o par\xe2metro ",Object(o.b)("inlineCode",{parentName:"li"},"segundos'.. Default: "),"onSeek() {}`.")),Object(o.b)("h2",{id:"exemplos"},"Exemplos"),Object(o.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Autoplay",value:"Autoplay"},{label:"Start Time",value:"startTime"},{label:"Controlled Size",value:"controlledSize"},{label:"With Callback on Pause",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},Object(o.b)(i.a,{value:"minimal",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"\n/>\n'))),Object(o.b)(i.a,{value:"withStyle",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    playing\n    controls\n/>\n'))),Object(o.b)(i.a,{value:"startTime",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    controls\n    startTime={28}\n/>\n'))),Object(o.b)(i.a,{value:"controlledSize",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    width={520}\n    height={290}\n    style={{ outline: '10px solid orange', boxShadow: '0 6px 12px black'}}\n/>\n"))),Object(o.b)(i.a,{value:"withCallback",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    onPause={ function(){ alert('Do it again') }}\n/>\n")))))}s.isMDXComponent=!0},409:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=u(a),p=n,m=d["".concat(l,".").concat(p)]||d[p]||s[p]||o;return a?r.a.createElement(m,i(i({ref:t},b),{},{components:a})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var b=2;b<o;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},449:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},460:function(e,t,a){"use strict";var n=a(0),r=a(461);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},461:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},462:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(460),l=a(449),i=a(58),c=a.n(i);const b=37,u=39;t.a=function(e){const{lazy:t,block:a,defaultValue:i,values:d,groupId:s,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:O}=Object(o.a)(),[j,f]=Object(n.useState)(i),v=n.Children.toArray(e.children),y=[];if(null!=s){const e=m[s];null!=e&&e!==j&&d.some((t=>t.value===e))&&f(e)}const N=e=>{const t=e.target,a=y.indexOf(t),n=v[a].props.value;f(n),null!=s&&O(s,n)},g=e=>{var t;let a;switch(e.keyCode){case u:const t=y.indexOf(e.target)+1;a=y[t]||y[0];break;case b:const n=y.indexOf(e.target)-1;a=y[n]||y[y.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},p)},d.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>y.push(e),onKeyDown:g,onFocus:N,onClick:N},t)))),t?Object(n.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}},463:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function({children:e,hidden:t,className:a}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}}}]);