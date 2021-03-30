(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),o=(n(0),n(410)),a={id:"proportions-input",title:"Proportions Input",sidebar_label:"Proportions Input"},l={unversionedId:"input/proportions-input",id:"input/proportions-input",isDocsHomePage:!1,title:"Proportions Input",description:"Une composante d'entr\xe9e des proportions. Peut \xeatre utilis\xe9 dans le cadre d'un tableau de bord ISLE ou de mani\xe8re autonome. Dans ce dernier cas, vous souhaitez g\xe9rer les modifications via l'attribut \"onChange\" ou lier la valeur \xe0 une variable globale via l'attribut \"bind\".",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/input/proportions.md",slug:"/input/proportions-input",permalink:"/fr/docs/input/proportions-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/proportions.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/02/2021",sidebar_label:"Proportions Input",sidebar:"docs",previous:{title:"Number Input",permalink:"/fr/docs/input/number-input"},next:{title:"Select Input",permalink:"/fr/docs/input/select-input"}},u=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],p={toc:u};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Une composante d'entr\xe9e des proportions. Peut \xeatre utilis\xe9 dans le cadre d'un tableau de bord ISLE ou de mani\xe8re autonome. Dans ce dernier cas, vous souhaitez g\xe9rer les modifications via l'attribut \"onChange\" ou lier la valeur \xe0 une variable globale via l'attribut \"bind\"."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"colors")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array<string>"),": une gamme de couleurs pour les composantes du camembert. Si elle n'est pas d\xe9finie, une \xe9chelle de couleurs personnalis\xe9e sera utilis\xe9e. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"disabled")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si le champ de saisie est d\xe9sactiv\xe9. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"height")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": proportions hauteur d'entr\xe9e (en px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"200"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"legends")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array"),": \xe9tiquettes de groupe. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onChange")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": fonction de rappel \xe0 invoquer lors d'un choix. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onChange(){}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"precision")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": la pr\xe9cision affich\xe9e des valeurs de proportion. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"1"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"step")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": le pas des fl\xe8ches visibles lors du survol du curseur au-dessus de la zone de saisie. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"0.1"),".")),Object(o.b)("h2",{id:"exemples"},"Exemples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ProportionsInput\n    user\n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}s.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,m=c["".concat(a,".").concat(d)]||c[d]||b[d]||o;return n?i.a.createElement(m,l(l({ref:t},p),{},{components:n})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);