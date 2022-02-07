"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1953],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var i=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,d=m["".concat(s,".").concat(k)]||m[k]||p[k]||r;return n?i.createElement(d,o(o({ref:t},c),{},{components:n})):i.createElement(d,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},377673:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var i=n(487462),a=n(263366),r=(n(202784),n(603905)),o=["components"],l={id:"multiple-choice-matrix",title:"Multiple Choice Matrix",sidebar_label:"Multiple Choice Matrix"},s=void 0,u={unversionedId:"questions/multiple-choice-matrix",id:"questions/multiple-choice-matrix",title:"Multiple Choice Matrix",description:"ISLE-komponentti, joka render\xf6i matriisin monivalintakysymyksist\xe4, joissa on samat vastaukset.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/questions/multiple-choice-matrix.md",sourceDirName:"questions",slug:"/questions/multiple-choice-matrix",permalink:"/fi/docs/questions/multiple-choice-matrix",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/multiple-choice-matrix.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"multiple-choice-matrix",title:"Multiple Choice Matrix",sidebar_label:"Multiple Choice Matrix"},sidebar:"docs",previous:{title:"Multiple Choice Question",permalink:"/fi/docs/questions/multiple-choice-question"},next:{title:"Number Question",permalink:"/fi/docs/questions/number-question"}},c=[{value:"Vaihtoehdot",id:"vaihtoehdot",children:[],level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",children:[],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ISLE-komponentti, joka render\xf6i matriisin monivalintakysymyksist\xe4, joissa on samat vastaukset."),(0,r.kt)("h2",{id:"vaihtoehdot"},"Vaihtoehdot"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"questions")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array (required)"),": joukko kysymyksi\xe4. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"answers")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array (required)"),": joukko vastauksia. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"title")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": kysymysmatriisin yl\xe4osassa n\xe4ytett\xe4v\xe4 otsikko. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"solution")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<array>"),": boolean-matriisi, jonka elementti osoittaa, onko kyseinen valintapainike tai valintaruutu rastitettava.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': kysymystyyppi ("radio" vastaa "Valitse yksi", "valintaruutu" vastaa "Valitse kaikki soveltuvat").. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"'radio'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, poistetaanko l\xe4hetysilmoitukset k\xe4yt\xf6st\xe4. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback, jota kutsutaan, kun valintaruudun/valintaruutupainikkeen arvo muuttuu; kutsutaan kaksiulotteisella boolean-m\xe4\xe4rityksell\xe4, joka sis\xe4lt\xe4\xe4 kunkin vastausvaihtoehdon aktiivisen tilan.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),': callback, joka k\xe4ynnistet\xe4\xe4n, kun k\xe4ytt\xe4j\xe4 napsauttaa "L\xe4het\xe4"-painiketta; k\xe4ynnistet\xe4\xe4n kaksiulotteisella boolean-m\xe4\xe4ritteell\xe4, joka sis\xe4lt\xe4\xe4 kunkin vastausvaihtoehdon aktiivisen tilan.. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",{id:"esimerkkej\xe4"},"Esimerkkej\xe4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultipleChoiceMatrix \n    title=\"Do you think these concepts are important for an introductory statistics course, and do you (or your department) cover them in your introductory courses?\" id=\"topics\" \n    questions={[\n        'Data Visualizations',\n        'Hand calculations (e.g. standard deviation, z-scores)',\n        'Combinatorics',\n        'Basic probability theory (conditional probability, independence...)',\n        'Calculus-based probability',\n        'Sampling distributions',\n        'Confidence intervals (traditional, formula-based)',\n        'Boostrapping',\n        'Hypothesis testing (traditional, e.g. t-test or chi-square formulas and tables)',\n        'Simple linear regression',\n        'Bayesian statistics',\n        'Randomization- or simulation-based inference'\n    ]}\n    type=\"checkbox\" \n    answers={[ 'I cover it', 'I think it\\'s important' ]} \n/>\n")))}m.isMDXComponent=!0}}]);