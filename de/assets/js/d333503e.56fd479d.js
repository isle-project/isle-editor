"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34177],{603905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22462:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return b}});var r=t(603905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&s(e,t,n[t]);if(l)for(var t of l(n))u.call(n,t)&&s(e,t,n[t]);return e};const c={id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},m=void 0,f={unversionedId:"proportions-survey",id:"proportions-survey",title:"Proportions Survey",description:"Komponente, die es einer Gruppe von Personen erm\xf6glicht, \xfcber die Gewichtung und Wichtigkeit von gegebenen Optionen abzustimmen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/proportions-survey.md",sourceDirName:".",slug:"/proportions-survey",permalink:"/de/docs/proportions-survey",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/proportions-survey.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22. Feb. 2021",frontMatter:{id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},sidebar:"docs",previous:{title:"Number Survey",permalink:"/de/docs/number-survey"},next:{title:"R Help",permalink:"/de/docs/r/r-help"}},g={},b=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],k={toc:b};function y(e){var n,t=e,{components:i}=t,s=((e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=d(d({},k),s),o(n,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Komponente, die es einer Gruppe von Personen erm\xf6glicht, \xfcber die Gewichtung und Wichtigkeit von gegebenen Optionen abzustimmen."),(0,r.kt)("h2",d({},{id:"optionen"}),"Optionen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob man den Teilnehmern erlauben m\xf6chte, die Umfrage mehrfach zu beantworten. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"anonymous")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Sch\xfclerantworten anonymisiert werden. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"colors")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": Array mit Farben f\xfcr die Kreisdiagrammkomponenten. Wenn nicht definiert, wird eine benutzerdefinierte Farbskala verwendet. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob die Umfrage deaktiviert wird. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"group")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Gruppenanzeige \xdcberschrift. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'group results'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"groupHeight")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Proportionen Eingangsh\xf6he f\xfcr Gruppendarstellung (in px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legends")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": Legendenbeschriftungen, die die zu w\xe4genden Optionen beschreiben. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"margin")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Anteil Eingaberand (in px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'40px'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, sobald der Sch\xfcler eine Antwort abgeschickt hat. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"personalHeight")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Proportionen Eingangsh\xf6he f\xfcr einzelnen Sch\xfcler (in px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"precision")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Angezeigte Pr\xe4zision der Anteilswerte. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": die Frage, die angezeigt werden soll. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": die Stufe der Pfeile, die zu sehen sind, wenn der Cursor \xfcber dem Eingabefeld schwebt. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.25"),".")),(0,r.kt)("h2",d({},{id:"beispiele"}),"Beispiele"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ProportionsSurvey \n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}y.isMDXComponent=!0}}]);