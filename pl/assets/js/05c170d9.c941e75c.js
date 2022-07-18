"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76046],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),c=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?i.createElement(y,o(o({ref:t},p),{},{components:n})):i.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},989329:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return k}});var i=n(603905),r=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={id:"multiple-choice-matrix",title:"Multiple Choice Matrix",sidebar_label:"Multiple Choice Matrix"},m=void 0,y={unversionedId:"questions/multiple-choice-matrix",id:"questions/multiple-choice-matrix",title:"Multiple Choice Matrix",description:"Sk\u0142adnik ISLE, kt\xf3ry tworzy matryc\u0119 pyta\u0144 wielokrotnego wyboru z tymi samymi odpowiedziami.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/questions/multiple-choice-matrix.md",sourceDirName:"questions",slug:"/questions/multiple-choice-matrix",permalink:"/pl/docs/questions/multiple-choice-matrix",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/multiple-choice-matrix.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22 lut 2021",frontMatter:{id:"multiple-choice-matrix",title:"Multiple Choice Matrix",sidebar_label:"Multiple Choice Matrix"},sidebar:"docs",previous:{title:"Multiple Choice Question",permalink:"/pl/docs/questions/multiple-choice-question"},next:{title:"Number Question",permalink:"/pl/docs/questions/number-question"}},f={},k=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],b={toc:k};function w(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var i in e)u.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&c.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=s(s({},b),p),a(t,o({components:r,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"Sk\u0142adnik ISLE, kt\xf3ry tworzy matryc\u0119 pyta\u0144 wielokrotnego wyboru z tymi samymi odpowiedziami."),(0,i.kt)("h2",s({},{id:"opcje"}),"Opcje"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"questions")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),": szereg pyta\u0144. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"answers")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),": szereg odpowiedzi. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": tytu\u0142, kt\xf3ry b\u0119dzie wy\u015bwietlany na g\xf3rze matrycy pyta\u0144. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"solution")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<array>"),": matryca logiczna, kt\xf3rej element wskazuje, czy dany przycisk radiowy lub pole wyboru ma by\u0107 zaznaczony. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": typ pytania (",(0,i.kt)("inlineCode",{parentName:"li"},"radio"),' odpowiada "Wybierz jedno", ',(0,i.kt)("inlineCode",{parentName:"li"},"pole wyboru"),' do "Wybierz wszystko, co dotyczy"). Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"'radio'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrola, czy nale\u017cy wy\u0142\u0105czy\u0107 powiadomienia o z\u0142o\u017ceniu wniosku. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback wywo\u0142ywany przy zmianie warto\u015bci pola wyboru / przycisku radiowego; wywo\u0142ywany z dwuwymiarow\u0105 tablic\u0105 boolean aktywnego stanu dla ka\u017cdej opcji odpowiedzi. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),': wywo\u0142anie zwrotne po klikni\u0119ciu przycisku "Prze\u015blij"; wywo\u0142ane dwuwymiarow\u0105 tablic\u0105 boolean aktywnego stanu dla ka\u017cdej z opcji odpowiedzi. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,i.kt)("h2",s({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultipleChoiceMatrix \n    title=\"Do you think these concepts are important for an introductory statistics course, and do you (or your department) cover them in your introductory courses?\" id=\"topics\" \n    questions={[\n        'Data Visualizations',\n        'Hand calculations (e.g. standard deviation, z-scores)',\n        'Combinatorics',\n        'Basic probability theory (conditional probability, independence...)',\n        'Calculus-based probability',\n        'Sampling distributions',\n        'Confidence intervals (traditional, formula-based)',\n        'Boostrapping',\n        'Hypothesis testing (traditional, e.g. t-test or chi-square formulas and tables)',\n        'Simple linear regression',\n        'Bayesian statistics',\n        'Randomization- or simulation-based inference'\n    ]}\n    type=\"checkbox\" \n    answers={[ 'I cover it', 'I think it\\'s important' ]} \n/>\n")))}w.isMDXComponent=!0}}]);