(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{130:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(411)),o=a(460),l=a(461),c={id:"image",title:"Image",sidebar_label:"Image"},s={unversionedId:"image",id:"image",isDocsHomePage:!1,title:"Image",description:"Componente para exibir uma imagem.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/image.md",slug:"/image",permalink:"/pt/docs/image",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/image.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Image",sidebar:"docs",previous:{title:"Video Player",permalink:"/pt/docs/video-player"},next:{title:"Link",permalink:"/pt/docs/link"}},m=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],u={toc:m};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Componente para exibir uma imagem."),Object(i.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"src")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": localiza\xe7\xe3o da fonte da imagem. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"alt")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": descri\xe7\xe3o da imagem. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"body")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": dados de imagem codificados na base64. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"height")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(number|string)"),": altura da imagem (em px). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"width")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(number|string)"),": largura da imagem (em px). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"inline")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": permite que a imagem seja rodeada por um texto. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"id")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": identificador do componente. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"showModal")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controla se deve exibir a vis\xe3o modal em tela cheia. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": nome da classe. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onShare")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),': chamada de retorno invocada com a imagem se o bot\xe3o "compartilhar" for clicado. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"none"),".")),Object(i.b)("h2",{id:"exemplos"},"Exemplos"),Object(i.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Border",value:"withStyle"},{label:"Controlled Size",value:"controlledSize"},{label:"Inline",value:"inline"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(l.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Image \n    alt="Self-portrait by Vincent van Gogh from September 1889." \n    src="https://bit.ly/37cof7K"\n/>\n'))),Object(i.b)(l.a,{value:"withStyle",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Image \n    alt="Self-portrait by Vincent van Gogh from September 1889." \n    src="https://bit.ly/37cof7K"\n    style={{ border: \'solid 10px black\'}}\n/>\n'))),Object(i.b)(l.a,{value:"controlledSize",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Image \n    alt="The Starry Night by Vincent van Gogh" \n    src="https://bit.ly/37h3JTj"\n    width="200px"\n    height="auto"\n/>\n'))),Object(i.b)(l.a,{value:"inline",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<div>\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, \n<Image \n    src="https://isle.heinz.cmu.edu/Summertime_flowerGradient.png"\n    width="300px"\n    height="auto"\n    inline\n/>\nno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, \nconsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n</div>\n')))))}b.isMDXComponent=!0},411:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,p=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return a?r.a.createElement(p,l(l({ref:t},s),{},{components:a})):r.a.createElement(p,l({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},445:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},458:function(e,t,a){"use strict";var n=a(0),r=a(459);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},459:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},460:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(458),o=a(445),l=a(58),c=a.n(l);const s=37,m=39;t.a=function(e){const{lazy:t,block:a,defaultValue:l,values:u,groupId:b,className:d}=e,{tabGroupChoices:p,setTabGroupChoices:g}=Object(i.a)(),[f,O]=Object(n.useState)(l),j=n.Children.toArray(e.children),v=[];if(null!=b){const e=p[b];null!=e&&e!==f&&u.some((t=>t.value===e))&&O(e)}const y=e=>{const t=e.target,a=v.indexOf(t),n=j[a].props.value;O(n),null!=b&&g(b,n)},N=e=>{var t;let a;switch(e.keyCode){case m:const t=v.indexOf(e.target)+1;a=v[t]||v[0];break;case s:const n=v.indexOf(e.target)-1;a=v[n]||v[v.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},d)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>v.push(e),onKeyDown:N,onFocus:y,onClick:y},t)))),t?Object(n.cloneElement)(j.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},461:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function({children:e,hidden:t,className:a}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}}}]);