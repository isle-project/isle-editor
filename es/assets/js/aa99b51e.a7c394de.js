(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{247:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return s}));var t=r(3),a=r(7),o=(r(0),r(411)),i={id:"runner",title:"Runner",sidebar_label:"Runner"},c={unversionedId:"runner",id:"runner",isDocsHomePage:!1,title:"Runner",description:"El componente corredor ejecutar\xe1 una funci\xf3n suministrada una vez o en un intervalo determinado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/runner.md",slug:"/runner",permalink:"/es/docs/runner",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/runner.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Runner",sidebar:"docs",previous:{title:"Revealer",permalink:"/es/docs/revealer"},next:{title:"Timer",permalink:"/es/docs/timer"}},l=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],u={toc:l};function s(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"El componente corredor ejecutar\xe1 una funci\xf3n suministrada una vez o en un intervalo determinado."),Object(o.b)("h2",{id:"opciones"},"Opciones"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"active")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),': controla si el corredor debe estar activo. Al activarse, se llama a la funci\xf3n "onEvaluar" en el intervalo dado (o una vez). Default: ',Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"interval")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),': n\xfamero de milisegundos entre las invocaciones de "sobrevalorar". Si no se establece un intervalo, la funci\xf3n s\xf3lo se invoca una vez. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onEvaluate")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": funci\xf3n a ser invocada. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onEvaluate() {}"),".")),Object(o.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Runner\n    interval={2000}\n    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}\n/>\n")))}s.isMDXComponent=!0},411:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=t,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(m,c(c({ref:n},u),{},{components:r})):a.a.createElement(m,c({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);