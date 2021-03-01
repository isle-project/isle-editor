(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(3),a=n(7),r=(n(0),n(411)),i={id:"gate",title:"Gate",sidebar_label:"Gate"},l={unversionedId:"gate",id:"gate",isDocsHomePage:!1,title:"Gate",description:"Um componente ISLE que permite exibir seus filhos apenas para p\xfablicos reservados.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/gate.md",slug:"/gate",permalink:"/pt/docs/gate",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/gate.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Gate",sidebar:"docs",previous:{title:"Feedback Buttons",permalink:"/pt/docs/feedback"},next:{title:"Text Editor",permalink:"/pt/docs/text-editor"}},c=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Um componente ISLE que permite exibir seus filhos apenas para p\xfablicos reservados."),Object(r.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"user")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": quando o conte\xfado do port\xe3o \xe9 exibido aos usu\xe1rios. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"notUser")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": quando definido o conte\xfado do port\xf5es \xe9 ",Object(r.b)("strong",{parentName:"li"},"n\xe3o*")," exibido aos usu\xe1rios. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"enrolled")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": quando o conte\xfado do port\xe3o \xe9 exibido para os alunos inscritos no curso. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"notEnrolled")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": quando definido, o conte\xfado do port\xe3o \xe9 ",Object(r.b)("strong",{parentName:"li"},"n\xe3o")," exibido para os alunos inscritos no curso. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"owner")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": quando o conte\xfado do port\xf5es \xe9 exibido para o propriet\xe1rio do curso (geralmente o instrutor). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"notOwner")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": quando ajustado o conte\xfado do port\xf5es \xe9 ",Object(r.b)("strong",{parentName:"li"},"n\xe3o*")," exibido ao propriet\xe1rio do curso (geralmente o instrutor). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"after")," | ",Object(r.b)("inlineCode",{parentName:"li"},"Date"),": tempo ap\xf3s o qual o conte\xfado do port\xe3o deve se tornar vis\xedvel. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"until")," | ",Object(r.b)("inlineCode",{parentName:"li"},"Date"),": tempo at\xe9 que o conte\xfado do port\xe3o permane\xe7a vis\xedvel. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"banner")," | ",Object(r.b)("inlineCode",{parentName:"li"},"node"),": uma mensagem que \xe9 exibida aos visitantes para os quais as crian\xe7as do port\xe3o n\xe3o s\xe3o vis\xedveis devido \xe0 falta de privil\xe9gios. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disabled")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": se um port\xe3o for desativado, o banner ser\xe1 exibido n\xe3o importa o que. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"showOwnerInPresentationMode")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),': controla se o conte\xfado do port\xe3o deve ser mostrado no modo de apresenta\xe7\xe3o quando o port\xe3o \xe9 vis\xedvel para o "propriet\xe1rio".. Default: ',Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"check")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o chamada de retorno retornando um ",Object(r.b)("inlineCode",{parentName:"li"},"booleano")," indicando se o port\xe3o deve exibir componentes infantis; a fun\xe7\xe3o \xe9 invocada sempre que as a\xe7\xf5es da sess\xe3o chegam. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),".")),Object(r.b)("h2",{id:"exemplos"},"Exemplos"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate \n    banner={<h2>You have to be logged in to see the content</h2>}\n    user \n>\n    <h1>For users only</h1>\n</Gate>\n")))}s.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var b=2;b<r;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);