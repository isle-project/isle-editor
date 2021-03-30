(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return c}));var r=n(3),i=n(7),l=(n(0),n(410)),a={id:"multiple-choice-survey",title:"Multiple Choice Survey",sidebar_label:"Multiple Choice Survey"},o={unversionedId:"multiple-choice-survey",id:"multiple-choice-survey",isDocsHomePage:!1,title:"Multiple Choice Survey",description:"Composante de l'enqu\xeate dans laquelle l'instructeur peut recueillir des donn\xe9es d'enqu\xeate \xe0 choix multiples aupr\xe8s des \xe9tudiants en temps r\xe9el.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/multiple-choice-survey.md",slug:"/multiple-choice-survey",permalink:"/fr/docs/multiple-choice-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/multiple-choice-survey.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/02/2021",sidebar_label:"Multiple Choice Survey",sidebar:"docs",previous:{title:"Free Text Survey",permalink:"/fr/docs/free-text-survey"},next:{title:"Number Survey",permalink:"/fr/docs/number-survey"}},u=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],s={toc:u};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Composante de l'enqu\xeate dans laquelle l'instructeur peut recueillir des donn\xe9es d'enqu\xeate \xe0 choix multiples aupr\xe8s des \xe9tudiants en temps r\xe9el."),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"question")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|node)"),": cha\xeene indiquant la question \xe0 poser aux \xe9l\xe8ves. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'on souhaite permettre aux \xe9tudiants de r\xe9pondre plusieurs fois \xe0 l'enqu\xeate. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"anonymous")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si les r\xe9ponses des \xe9tudiants sont anonymes. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"answers")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array"),": tableau indiquant les choix de r\xe9ponses des \xe9l\xe8ves. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"multipleAnswers")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": indique si les \xe9tudiants peuvent choisir plus d'une r\xe9ponse. Notez que cela diff\xe8re de allowMultipleAnswers en ce sens que allow rend les \xe9tudiants capables de soumettre la question plusieurs fois. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": fonction \xe0 appeler lors de la soumission d'une r\xe9ponse. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(l.b)("h2",{id:"exemples"},"Exemples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultipleChoiceSurvey\n    anonymous\n    question=\"Are you left- or right-handed\"\n    answers={[ 'Left-handed', 'Right-handed' ]}\n/>\n")))}c.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),c=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||l;return n?i.a.createElement(m,o(o({ref:t},s),{},{components:n})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);