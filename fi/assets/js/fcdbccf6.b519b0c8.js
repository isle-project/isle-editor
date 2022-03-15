"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3006],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),k=p(n),d=a,c=k["".concat(s,".").concat(d)]||k[d]||m[d]||i;return n?r.createElement(c,o(o({ref:t},u),{},{components:n})):r.createElement(c,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},589663:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return d}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),o=["components"],l={id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},s=void 0,p={unversionedId:"proportions-survey",id:"proportions-survey",title:"Proportions Survey",description:"Komponentti, jonka avulla ryhm\xe4 ihmisi\xe4 voi \xe4\xe4nest\xe4\xe4 annettujen vaihtoehtojen painotuksista ja t\xe4rkeydest\xe4.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/proportions-survey.md",sourceDirName:".",slug:"/proportions-survey",permalink:"/fi/docs/proportions-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/proportions-survey.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},sidebar:"docs",previous:{title:"Number Survey",permalink:"/fi/docs/number-survey"},next:{title:"R Help",permalink:"/fi/docs/r/r-help"}},u={},m=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],k={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Komponentti, jonka avulla ryhm\xe4 ihmisi\xe4 voi \xe4\xe4nest\xe4\xe4 annettujen vaihtoehtojen painotuksista ja t\xe4rkeydest\xe4."),(0,i.kt)("h2",{id:"vaihtoehdot"},"Vaihtoehdot"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, halutaanko oppilaiden antaa vastata kyselyyn useita kertoja.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"anonymous")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, anonymisoidaanko opiskelijoiden vastaukset. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"colors")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": piirakkakaavion komponenttien v\xe4rit. Jos sit\xe4 ei ole m\xe4\xe4ritetty, k\xe4ytet\xe4\xe4n ennalta m\xe4\xe4ritetty\xe4 v\xe4riasteikkoa.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disabled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, poistetaanko kysely k\xe4yt\xf6st\xe4. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": ryhm\xe4n n\xe4yt\xf6n otsikko. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'group results'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"groupHeight")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": mittasuhteet sy\xf6tt\xf6korkeus ryhm\xe4n\xe4ytt\xf6\xe4 varten (px). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"legends")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": tarrat, jotka kuvaavat punnittavia vaihtoehtoja.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"margin")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": sy\xf6tt\xf6prosentti (px). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'40px'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktio, joka k\xe4ynnistyy, kun oppilas l\xe4hett\xe4\xe4 vastauksen.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"personalHeight")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": mittasuhteet yksitt\xe4isen oppilaan sy\xf6tt\xf6korkeus (px). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"precision")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": suhteellisten arvojen n\xe4ytetty tarkkuus. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"question")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": n\xe4ytett\xe4v\xe4 kysymys. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"step")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": nuolien askel, joka n\xe4kyy, kun kursori vied\xe4\xe4n sy\xf6tt\xf6ruudun yl\xe4puolelle.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0.25"),".")),(0,i.kt)("h2",{id:"esimerkkej\xe4"},"Esimerkkej\xe4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ProportionsSurvey \n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}d.isMDXComponent=!0}}]);