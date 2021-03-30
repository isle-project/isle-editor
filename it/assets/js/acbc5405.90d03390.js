(window.webpackJsonp=window.webpackJsonp||[]).push([[1210],{235:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(410)),i=a(443),l=a(444),s={id:"mosaicplot",title:"Mosaic Plot",sidebar_label:"Mosaic Plot"},c={unversionedId:"plots/mosaicplot",id:"plots/mosaicplot",isDocsHomePage:!1,title:"Mosaic Plot",description:"Una trama a mosaico.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/plots/mosaicplot.md",slug:"/plots/mosaicplot",permalink:"/it/docs/plots/mosaicplot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/mosaicplot.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,formattedLastUpdatedAt:"28/2/2021",sidebar_label:"Mosaic Plot",sidebar:"docs",previous:{title:"Map",permalink:"/it/docs/plots/map"},next:{title:"NetworkPlot",permalink:"/it/docs/plots/network-plot"}},u=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],b={toc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Una trama a mosaico."),Object(o.b)("h2",{id:"opzioni"},"Opzioni"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"data")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object (required)"),": oggetto di array di valori per ogni variabile. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"variables")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array (required)"),": array di variabili da visualizzare. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"showColors")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se visualizzare i colori che mostrano il significato. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"axisLabels")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),': posizionamento delle etichette degli assi (sia "parallelo all\'asse", "orizzontale", "perpendicolare all\'asse" o "verticale"). Default: ',Object(o.b)("inlineCode",{parentName:"li"},"'parallel to the axis'"),".")),Object(o.b)("h2",{id:"esempi"},"Esempi"),Object(o.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Colored",value:"colored"},{label:"Axis Labels",value:"axisLabels"}],lazy:!0,mdxType:"Tabs"},Object(o.b)(l.a,{value:"minimal",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MosaicPlot\n    data={heartdisease} \n    variables={[ 'Gender', 'Drugs' ]}\n/>\n"))),Object(o.b)(l.a,{value:"colored",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MosaicPlot\n    data={heartdisease} \n    variables={[ 'Gender', 'Drugs' ]}\n    showColors\n/>\n"))),Object(o.b)(l.a,{value:"axisLabels",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MosaicPlot\n    data={heartdisease} \n    variables={[ 'Gender', 'Drugs' ]}\n    showColors\n    axisLabels=\"parallel to the axis\"\n/>\n")))))}p.isMDXComponent=!0},410:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return a?r.a.createElement(d,l(l({ref:t},c),{},{components:a})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},434:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},440:function(e,t,a){"use strict";var n=a(0),r=a(441);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},443:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(440),i=a(434),l=a(57),s=a.n(l);const c=37,u=39;t.a=function(e){const{lazy:t,block:a,defaultValue:l,values:b,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(o.a)(),[v,O]=Object(n.useState)(l),j=n.Children.toArray(e.children),g=[];if(null!=p){const e=d[p];null!=e&&e!==v&&b.some((t=>t.value===e))&&O(e)}const y=e=>{const t=e.target,a=g.indexOf(t),n=j[a].props.value;O(n),null!=p&&(f(p,n),setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:i}=window;return t>=0&&r<=i&&n<=o&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((()=>t.classList.remove(s.a.tabItemActive)),2e3))}),150))},h=e=>{var t;let a;switch(e.keyCode){case u:{const t=g.indexOf(e.target)+1;a=g[t]||g[0];break}case c:{const t=g.indexOf(e.target)-1;a=g[t]||g[g.length-1];break}}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},m)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>g.push(e),onKeyDown:h,onFocus:y,onClick:y},t)))),t?Object(n.cloneElement)(j.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},444:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function({children:e,hidden:t,className:a}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}}}]);