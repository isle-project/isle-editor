"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24327],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},424096:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return y}});var i=n(603905),r=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={id:"multiple-choice-matrix",title:"Multiple Choice Matrix",sidebar_label:"Multiple Choice Matrix"},m=void 0,f={unversionedId:"questions/multiple-choice-matrix",id:"questions/multiple-choice-matrix",title:"Multiple Choice Matrix",description:"Un componente ISLE che rende una matrice di domande a scelta multipla con le stesse risposte.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/questions/multiple-choice-matrix.md",sourceDirName:"questions",slug:"/questions/multiple-choice-matrix",permalink:"/it/docs/questions/multiple-choice-matrix",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/multiple-choice-matrix.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22 feb 2021",frontMatter:{id:"multiple-choice-matrix",title:"Multiple Choice Matrix",sidebar_label:"Multiple Choice Matrix"},sidebar:"docs",previous:{title:"Multiple Choice Question",permalink:"/it/docs/questions/multiple-choice-question"},next:{title:"Number Question",permalink:"/it/docs/questions/number-question"}},b={},y=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],k={toc:y};function v(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&c.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=p(p({},k),u),a(t,o({components:r,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"Un componente ISLE che rende una matrice di domande a scelta multipla con le stesse risposte."),(0,i.kt)("h2",p({},{id:"opzioni"}),"Opzioni"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"questions")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),": una serie di domande. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"answers")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),": una serie di risposte. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": titolo da visualizzare sopra la matrice delle domande. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"solution")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<array>"),": matrice booleana il cui elemento indica se il rispettivo pulsante radio o la casella di controllo deve essere spuntata. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": tipo di domanda (",(0,i.kt)("inlineCode",{parentName:"li"},"radio"),' corrisponde a "Seleziona uno", ',(0,i.kt)("inlineCode",{parentName:"li"},"checkbox"),' a "Seleziona tutto ci\xf2 che si applica"). Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"'radio'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se disabilitare le notifiche di presentazione. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback invocato quando cambia il valore di una casella di controllo / pulsante di opzione; invocato con l'array booleano bidimensionale dello stato attivo per ogni opzione di risposta. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": richiamata quando l'utente clicca sul pulsante \"Submit\"; invocata con l'array booleano bidimensionale dello stato attivo per ogni opzione di risposta. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,i.kt)("h2",p({},{id:"esempi"}),"Esempi"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultipleChoiceMatrix \n    title=\"Do you think these concepts are important for an introductory statistics course, and do you (or your department) cover them in your introductory courses?\" id=\"topics\" \n    questions={[\n        'Data Visualizations',\n        'Hand calculations (e.g. standard deviation, z-scores)',\n        'Combinatorics',\n        'Basic probability theory (conditional probability, independence...)',\n        'Calculus-based probability',\n        'Sampling distributions',\n        'Confidence intervals (traditional, formula-based)',\n        'Boostrapping',\n        'Hypothesis testing (traditional, e.g. t-test or chi-square formulas and tables)',\n        'Simple linear regression',\n        'Bayesian statistics',\n        'Randomization- or simulation-based inference'\n    ]}\n    type=\"checkbox\" \n    answers={[ 'I cover it', 'I think it\\'s important' ]} \n/>\n")))}v.isMDXComponent=!0}}]);