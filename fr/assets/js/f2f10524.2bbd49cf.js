"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9965],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},332841:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var r=n(603905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e};const m={id:"number-survey",title:"Number Survey",sidebar_label:"Number Survey"},d=void 0,f={unversionedId:"number-survey",id:"number-survey",title:"Number Survey",description:"Composante de l'enqu\xeate dans laquelle l'instructeur peut recueillir des donn\xe9es num\xe9riques en temps r\xe9el aupr\xe8s des \xe9tudiants.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/number-survey.md",sourceDirName:".",slug:"/number-survey",permalink:"/fr/docs/number-survey",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/number-survey.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626808020,formattedLastUpdatedAt:"20 juil. 2021",frontMatter:{id:"number-survey",title:"Number Survey",sidebar_label:"Number Survey"},sidebar:"docs",previous:{title:"Multiple Choice Survey",permalink:"/fr/docs/multiple-choice-survey"},next:{title:"Proportions Survey",permalink:"/fr/docs/proportions-survey"}},y={},b=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],v={toc:b};function k(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},v),p),a(t,l({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Composante de l'enqu\xeate dans laquelle l'instructeur peut recueillir des donn\xe9es num\xe9riques en temps r\xe9el aupr\xe8s des \xe9tudiants."),(0,r.kt)("h2",c({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": la question \xe0 afficher. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si le m\xeame utilisateur (ou la m\xeame session si elle est anonyme) peut soumettre des r\xe9ponses multiples). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"anonymous")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": Permet aux \xe9tudiants de soumettre des donn\xe9es de mani\xe8re anonyme. Notez que si cette option est r\xe9gl\xe9e sur \"vrai\", les professeurs ne pourront pas voir l'identit\xe9 de l'\xe9tudiant qui a soumis les donn\xe9es. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(number|string)"),': Une valeur "cha\xeene" ou "num\xe9rique" indiquant le pas des fl\xe8ches vues lorsque le curseur est pass\xe9 au-dessus de la zone de saisie. Si "any", le pas sera fix\xe9 \xe0 "1". Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"'any'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": la fonction de rappel est activ\xe9e d\xe8s que l'\xe9tudiant soumet une r\xe9ponse. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",c({},{id:"exemples"}),"Exemples"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<NumberSurvey\n    allowMultipleAnswers={true}\n    id="generic_mean_question"\n    question="Submit a number"\n    defaultValue={0}\n    step="any"\n/>\n')))}k.isMDXComponent=!0}}]);