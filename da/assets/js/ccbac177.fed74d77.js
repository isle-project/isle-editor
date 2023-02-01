"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23602],{603905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return f}});var t=n(202784);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=i,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||a;return n?t.createElement(f,o(o({ref:r},u),{},{components:n})):t.createElement(f,o({ref:r},u))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},691893:function(e,r,n){n.r(r),n.d(r,{assets:function(){return g},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var t=n(603905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,r,n)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,d=(e,r)=>{for(var n in r||(r={}))p.call(r,n)&&u(e,n,r[n]);if(l)for(var n of l(r))s.call(r,n)&&u(e,n,r[n]);return e};const m={id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},c=void 0,f={unversionedId:"proportions-survey",id:"proportions-survey",title:"Proportions Survey",description:"Komponent, der g\xf8r det muligt for en gruppe af personer at stemme om v\xe6gtningen og vigtigheden af givne valgmuligheder.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/proportions-survey.md",sourceDirName:".",slug:"/proportions-survey",permalink:"/da/docs/proportions-survey",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/proportions-survey.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. jun. 2021",frontMatter:{id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},sidebar:"docs",previous:{title:"Number Survey",permalink:"/da/docs/number-survey"},next:{title:"R Help",permalink:"/da/docs/r/r-help"}},g={},k=[{value:"Indstillinger",id:"indstillinger",level:2},{value:"Eksempler",id:"eksempler",level:2}],v={toc:k};function y(e){var r,n=e,{components:i}=n,u=((e,r)=>{var n={};for(var t in e)p.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))r.indexOf(t)<0&&s.call(e,t)&&(n[t]=e[t]);return n})(n,["components"]);return(0,t.kt)("wrapper",(r=d(d({},v),u),a(r,o({components:i,mdxType:"MDXLayout"}))),(0,t.kt)("p",null,"Komponent, der g\xf8r det muligt for en gruppe af personer at stemme om v\xe6gtningen og vigtigheden af givne valgmuligheder."),(0,t.kt)("h2",d({},{id:"indstillinger"}),"Indstillinger"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om man \xf8nsker at tillade, at eleverne kan besvare unders\xf8gelsen flere gange. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"anonymous")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollerer, om elevsvarene anonymiseres. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"colors")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"array"),": array af farver til komponenterne i cirkeldiagrammet. Hvis den ikke er defineret, anvendes en foruddefineret farveskala. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"disabled")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om unders\xf8gelsen skal deaktiveres. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"group")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"string"),": overskrift for gruppedisplay. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"'group results'"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"groupHeight")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"number"),": proportioner af indgangsh\xf8jden for gruppevisning (i px). Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"legends")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"array"),": etiketter med en beskrivelse af de muligheder, der skal vejes. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"margin")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"string"),": andel af inputmargin (i px). Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"'40px'"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktion, der p\xe5kaldes, n\xe5r eleverne afgiver et svar. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"personalHeight")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"number"),": proportioner input h\xf8jde for den enkelte elev (i px). Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"precision")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"number"),": viste pr\xe6cision af proportionsv\xe6rdier. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"question")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"(string|node)"),": det sp\xf8rgsm\xe5l, der skal vises. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"step")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"number"),": det trin af pilene, der ses, n\xe5r mark\xf8ren sv\xe6ver over indtastningsfeltet. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"0.25"),".")),(0,t.kt)("h2",d({},{id:"eksempler"}),"Eksempler"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ProportionsSurvey \n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}y.isMDXComponent=!0}}]);