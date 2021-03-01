(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),l=n(7),i=(n(0),n(411)),r=n(460),o=n(461),c={id:"flippable-card",title:"Flippable Card",sidebar_label:"Flippable Card"},b={unversionedId:"flippable-card",id:"flippable-card",isDocsHomePage:!1,title:"Flippable Card",description:"Un componente ISLE che permette il rendering su due lati.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/flippable-card.md",slug:"/flippable-card",permalink:"/it/docs/flippable-card",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/flippable-card.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614561866,sidebar_label:"Flippable Card",sidebar:"docs",previous:{title:"Draggable List",permalink:"/it/docs/draggable-list"},next:{title:"JavaScript Shell",permalink:"/it/docs/js-shell"}},p=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],s={toc:p};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Un componente ISLE che permette il rendering su due lati."),Object(i.b)("h2",{id:"opzioni"},"Opzioni"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"button")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": Etichetta a bottone. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"draggable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se la carta pu\xf2 essere trascinata. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"flipSpeedBackToFront")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": la velocit\xe0 con cui la carta passa dallo sfondo al primo piano, in pochi secondi. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"flipSpeedFrontToBack")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": {numero} la velocit\xe0 con cui la carta passa dal primo piano allo sfondo, in pochi secondi. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"oneTime")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": indica se il processo di flip pu\xf2 essere eseguito una sola volta. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"perspective")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": Valore della propriet\xe0 CSS per dare una prospettiva all'elemento posizionato a 3d. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1000"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"size")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": dimensione della scheda (imposta la sua ",Object(i.b)("inlineCode",{parentName:"li"},"width")," e ",Object(i.b)("inlineCode",{parentName:"li"},"height"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"250"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"disabled")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se la scheda flippabile \xe8 disabilitata. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"value")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": stato di capovolgimento della scheda (per componente controllato). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": stato iniziale di capovolgimento della scheda. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"containerStyle")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": stile CSS del contenitore. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"frontStyle")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Stile CSS della scheda frontale. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"backStyle")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Stile CSS della scheda posteriore. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": richiamata una volta che la carta \xe8 capovolta; riceve lo stato di capovolgimento corrente come unico argomento. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onChange() {}"),".")),Object(i.b)("h2",{id:"esempi"},"Esempi"),Object(i.b)(r.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With CSS",value:"withCSS"},{label:"Slow Motion",value:"slowMo"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FlippableCard containerStyle={{ float: \'none\' }} size={200}>\n  <img src="https://bit.ly/2YU5EbU" />\n  <img src="https://bit.ly/3aGv9mp" />\n</FlippableCard>\n'))),Object(i.b)(o.a,{value:"withCSS",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FlippableCard \n  containerStyle={{ float: 'none' }} \n  frontStyle={{ fontSize: 50, textAlign: 'center' }} \n  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} \n  >\n    <div>\n      FRONT\n    </div>\n    <div>\n      BACK\n    </div>\n</FlippableCard>\n"))),Object(i.b)(o.a,{value:"slowMo",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FlippableCard \n  flipSpeedBackToFront={7} \n  flipSpeedFrontToBack={7}   \n  containerStyle={{ float: 'none' }} \n  frontStyle={{ fontSize: 50, textAlign: 'center' }} \n  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} \n  >\n    <div>\n      FRONT\n    </div>\n    <div>\n      BACK\n    </div>\n</FlippableCard>\n")))))}u.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),p=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(r,".").concat(d)]||s[d]||u[d]||i;return n?l.a.createElement(m,o(o({ref:t},b),{},{components:n})):l.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var b=2;b<i;b++)r[b]=n[b];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},445:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}},458:function(e,t,n){"use strict";var a=n(0),l=n(459);t.a=function(){const e=Object(a.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},459:function(e,t,n){"use strict";var a=n(0);const l=Object(a.createContext)(void 0);t.a=l},460:function(e,t,n){"use strict";var a=n(0),l=n.n(a),i=n(458),r=n(445),o=n(58),c=n.n(o);const b=37,p=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:s,groupId:u,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(i.a)(),[O,j]=Object(a.useState)(o),v=a.Children.toArray(e.children),g=[];if(null!=u){const e=m[u];null!=e&&e!==O&&s.some((t=>t.value===e))&&j(e)}const N=e=>{const t=e.target,n=g.indexOf(t),a=v[n].props.value;j(a),null!=u&&f(u,a)},y=e=>{var t;let n;switch(e.keyCode){case p:const t=g.indexOf(e.target)+1;n=g[t]||g[0];break;case b:const a=g.indexOf(e.target)-1;n=g[a]||g[g.length-1]}null===(t=n)||void 0===t||t.focus()};return l.a.createElement("div",{className:"tabs-container"},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},d)},s.map((({value:e,label:t})=>l.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>g.push(e),onKeyDown:y,onFocus:N,onClick:N},t)))),t?Object(a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},461:function(e,t,n){"use strict";var a=n(0),l=n.n(a);t.a=function({children:e,hidden:t,className:n}){return l.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);