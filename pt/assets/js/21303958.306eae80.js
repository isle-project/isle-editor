(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(411)),o={id:"r-plot",title:"R Plot",sidebar_label:"R Plot"},l={unversionedId:"r/r-plot",id:"r/r-plot",isDocsHomePage:!1,title:"R Plot",description:"Componente para render uma trama R dentro de uma li\xe7\xe3o ISLE.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/r/plot.md",slug:"/r/r-plot",permalink:"/pt/docs/r/r-plot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/plot.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"R Plot",sidebar:"docs",previous:{title:"R Output",permalink:"/pt/docs/r/r-output"},next:{title:"R Shell",permalink:"/pt/docs/r/r-shell"}},c=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Componente para render uma trama R dentro de uma li\xe7\xe3o ISLE."),Object(i.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"code")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": C\xf3digo R para gerar a trama. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"width")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(number|string)"),": largura da parcela (em px). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"600"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"height")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(number|string)"),": altura da parcela (em px). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'auto'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"draggable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controla se a trama deve ser arrastada. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"fileType")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": tipo de arquivo da trama (",Object(i.b)("inlineCode",{parentName:"li"},"png")," ou ",Object(i.b)("inlineCode",{parentName:"li"},"svg"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'svg'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"libraries")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": R bibliotecas que devem ser carregadas automaticamente quando o ",Object(i.b)("inlineCode",{parentName:"li"},"c\xf3digo")," de entrada \xe9 executado. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"prependCode")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|array)"),': ou um trecho de c\xf3digo R a ser preparado para o c\xf3digo armazenado em "c\xf3digo" ao avaliar. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"meta")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": meta-informa\xe7\xe3o da trama. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": nome da classe. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onDone")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada com argumentos de ",Object(i.b)("inlineCode",{parentName:"li"},"err"),", ",Object(i.b)("inlineCode",{parentName:"li"},"img")," e ",Object(i.b)("inlineCode",{parentName:"li"},"corpo")," uma vez criada uma trama. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onDone() {}"),".")),Object(i.b)("h2",{id:"exemplos"},"Exemplos"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RPlot code="hist( c(20,50,40,70,40,30) )" />\n')))}b.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,s=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(s,l(l({ref:t},p),{},{components:n})):a.a.createElement(s,l({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);