(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(411)),l=n(460),o=n(461),c={id:"scrolling-text",title:"Scrolling Text",sidebar_label:"Scrolling Text"},s={unversionedId:"scrolling-text",id:"scrolling-text",isDocsHomePage:!1,title:"Scrolling Text",description:"Un componente dinamico di sfondo che scorre ciclicamente attraverso una lista di testi ad un intervallo di tempo specificato.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/scrolling-text.md",slug:"/scrolling-text",permalink:"/it/docs/scrolling-text",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/scrolling-text.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Scrolling Text",sidebar:"docs",previous:{title:"Polaroid",permalink:"/it/docs/polaroid"},next:{title:"Slider",permalink:"/it/docs/slider"}},u=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Un componente dinamico di sfondo che scorre ciclicamente attraverso una lista di testi ad un intervallo di tempo specificato."),Object(r.b)("h2",{id:"opzioni"},"Opzioni"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"text")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array<string>"),": testo o elenco di testi da visualizzare. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"loop")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": indica se il processo deve essere visualizzato all'infinito. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"direction")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),': la direzione del flusso di testo (o "sinistra", "destra", "su", "gi\xf9", "traccia", "messa a fuoco" o "turbinio"). Default: ',Object(r.b)("inlineCode",{parentName:"li"},"'right'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hold")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": il tempo in cui il testo rimane fermo (in secondi). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"5"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"wait")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": il tempo prima che arrivi un nuovo testo (in secondi). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"3"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"inTime")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": tempo dell'effetto ingresso (in secondi). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"outTime")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": tempo dell'effetto di uscita (in secondi). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"className")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": nome della classe. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": Stili CSS del testo. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(r.b)("h2",{id:"esempi"},"Esempi"),Object(r.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"List of Texts",value:"list"},{label:"Background Image",value:"backgroundImage"}],lazy:!0,mdxType:"Tabs"},Object(r.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<ScrollingText\n    text= \"This is a text re-appearing every five seconds\"\n    style={{ fontSize: 44, color: 'blue' }}\n    wait={5}\n    hold={2}\n    loop\n/>\n"))),Object(r.b)(o.a,{value:"list",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<ScrollingText\n    text={[ 'One', 'Two', 'Three', 'Four'  ]}\n    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}\n    loop\n    direction=\"left\"\n    wait={.5}\n    hold={2}\n/>\n"))),Object(r.b)(o.a,{value:"backgroundImage",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<ScrollingText\n    text={[ 'One', 'Two', 'Three', 'Four'  ]}\n    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}\n    loop\n    direction=\"left\"\n    wait={.5}\n    hold={2}\n/>\n")))))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(l,".").concat(m)]||b[m]||p[m]||r;return n?i.a.createElement(d,o(o({ref:t},s),{},{components:n})):i.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},445:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},458:function(e,t,n){"use strict";var a=n(0),i=n(459);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},459:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},460:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(458),l=n(445),o=n(58),c=n.n(o);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:b,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(r.a)(),[O,g]=Object(a.useState)(o),j=a.Children.toArray(e.children),v=[];if(null!=p){const e=d[p];null!=e&&e!==O&&b.some((t=>t.value===e))&&g(e)}const y=e=>{const t=e.target,n=v.indexOf(t),a=j[n].props.value;g(a),null!=p&&f(p,a)},N=e=>{var t;let n;switch(e.keyCode){case u:const t=v.indexOf(e.target)+1;n=v[t]||v[0];break;case s:const a=v.indexOf(e.target)-1;n=v[a]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},b.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>v.push(e),onKeyDown:N,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(j.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},461:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);