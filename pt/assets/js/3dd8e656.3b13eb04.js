(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(410)),i=n(443),l=n(444),c={id:"violinplot",title:"Violin Plot",sidebar_label:"Violin Plot"},s={unversionedId:"plots/violinplot",id:"plots/violinplot",isDocsHomePage:!1,title:"Violin Plot",description:"Uma trama de violino.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/plots/violinplot.md",slug:"/plots/violinplot",permalink:"/pt/docs/plots/violinplot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/violinplot.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614546476,formattedLastUpdatedAt:"28/02/2021",sidebar_label:"Violin Plot",sidebar:"docs",previous:{title:"Sunburst Plot",permalink:"/pt/docs/plots/sunburst"},next:{title:"Word Cloud",permalink:"/pt/docs/word-cloud"}},u=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Uma trama de violino."),Object(o.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"data")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object (required)"),": objeto de arrays de valor. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"variable")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string (required)"),": vari\xe1vel a exibir. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"group")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": vari\xe1vel de agrupamento. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"showBox")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla se deve exibir um gr\xe1fico de caixa dentro. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),".")),Object(o.b)("h2",{id:"exemplos"},"Exemplos"),Object(o.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Show Boxplot",value:"showBox"}],lazy:!0,mdxType:"Tabs"},Object(o.b)(l.a,{value:"minimal",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ViolinPlot \n    data={heartdisease} \n    variable="Interventions"\n/>\n'))),Object(o.b)(l.a,{value:"grouped",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ViolinPlot \n    data={heartdisease} \n    variable="Interventions"\n    group="Drugs"\n/>\n'))),Object(o.b)(l.a,{value:"showBox",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ViolinPlot \n    data={heartdisease} \n    variable="Interventions"\n    showBox\n/>\n')))))}b.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},440:function(e,t,n){"use strict";var a=n(0),r=n(441);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},443:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(440),i=n(434),l=n(57),c=n.n(l);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:p,groupId:b,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[v,O]=Object(a.useState)(l),j=a.Children.toArray(e.children),g=[];if(null!=b){const e=m[b];null!=e&&e!==v&&p.some((t=>t.value===e))&&O(e)}const y=e=>{const t=e.target,n=g.indexOf(t),a=j[n].props.value;O(a),null!=b&&(f(b,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:i}=window;return t>=0&&r<=i&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},h=e=>{var t;let n;switch(e.keyCode){case u:{const t=g.indexOf(e.target)+1;n=g[t]||g[0];break}case s:{const t=g.indexOf(e.target)-1;n=g[t]||g[g.length-1];break}}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>g.push(e),onKeyDown:h,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(j.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},444:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);