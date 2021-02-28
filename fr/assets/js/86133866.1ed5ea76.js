(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(409)),a={id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},l={unversionedId:"proportions-survey",id:"proportions-survey",isDocsHomePage:!1,title:"Proportions Survey",description:"Composante qui permet \xe0 un groupe de personnes de voter sur les poids et l'importance d'options donn\xe9es.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/proportions-survey.md",slug:"/proportions-survey",permalink:"/fr/docs/proportions-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/proportions-survey.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Proportions Survey",sidebar:"docs",previous:{title:"Number Survey",permalink:"/fr/docs/number-survey"},next:{title:"R Help",permalink:"/fr/docs/r/r-help"}},p=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],s={toc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Composante qui permet \xe0 un groupe de personnes de voter sur les poids et l'importance d'options donn\xe9es."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'on souhaite permettre aux \xe9tudiants de r\xe9pondre plusieurs fois \xe0 l'enqu\xeate. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"anonymous")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si les r\xe9ponses des \xe9tudiants sont anonymes. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"colors")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array"),": une gamme de couleurs pour les composantes du camembert. Si elle n'est pas d\xe9finie, une \xe9chelle de couleurs personnalis\xe9e sera utilis\xe9e. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"disabled")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'enqu\xeate est d\xe9sactiv\xe9e. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"group")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": titre de l'affichage de groupe. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'group results'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"groupHeight")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": hauteur d'entr\xe9e des proportions pour l'affichage des groupes (en px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"100"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"legends")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array"),": des \xe9tiquettes de l\xe9gende qui d\xe9crivent les options \xe0 peser. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"margin")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": proportion de la marge d'entr\xe9e (en px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'40px'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": la fonction de rappel est activ\xe9e d\xe8s que l'\xe9tudiant soumet une r\xe9ponse. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"personalHeight")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": proportions hauteur d'entr\xe9e pour chaque \xe9l\xe8ve (en px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"200"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"precision")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": la pr\xe9cision affich\xe9e des valeurs de proportion. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"2"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"question")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|node)"),": la question \xe0 afficher. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"step")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": le pas des fl\xe8ches visibles lors du survol du curseur au-dessus de la zone de saisie. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"0.25"),".")),Object(o.b)("h2",{id:"exemples"},"Exemples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ProportionsSurvey \n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}u.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,m=c["".concat(a,".").concat(d)]||c[d]||b[d]||o;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);