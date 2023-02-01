"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39951],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),k=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=k(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=k(n),s=r,d=u["".concat(p,".").concat(s)]||u[s]||c[s]||l;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},374544:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return g}});var a=n(603905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))k.call(t,n)&&m(e,n,t[n]);return e};const c={id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},s=void 0,d={unversionedId:"tex",id:"tex",title:"LaTeX Equations",description:"A TeX egy ISLE elem, amely LaTeX egyenletek megjelen\xedt\xe9s\xe9re haszn\xe1lhat\xf3.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/tex.md",sourceDirName:".",slug:"/tex",permalink:"/hu/docs/tex",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tex.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1625677901,formattedLastUpdatedAt:"2021. j\xfal. 7.",frontMatter:{id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},sidebar:"docs",previous:{title:"Link",permalink:"/hu/docs/link"},next:{title:"blockquote",permalink:"/hu/docs/html/blockquote"}},f={},g=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],b={toc:g};function y(e){var t,n=e,{components:r}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&k.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},b),m),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"TeX")," egy ISLE elem, amely LaTeX egyenletek megjelen\xedt\xe9s\xe9re haszn\xe1lhat\xf3."),(0,a.kt)("h2",u({},{id:"opci\xf3k"}),"Opci\xf3k"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"raw")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|number) (required)"),": A megjelen\xedtend\u0151 sz\xf3 szerinti LaTeX ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),". A ",(0,a.kt)("inlineCode",{parentName:"li"},"numbers")," is elfogadhat\xf3. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"displayMode")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),", amely jelzi, hogy az egyenletet sorban vagy kijelz\u0151 m\xf3dban jelen\xedtse-e meg. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"numbered")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy megjelen\xedtse-e az egyenletsz\xe1mot a kijelz\u0151 m\xf3d\xfa egyenletekn\xe9l. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"object")," CSS kulcs-\xe9rt\xe9k p\xe1rokkal, amelyeket az egyenlet t\xe1rol\xf3j\xe1ra kell alkalmazni.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tag")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": A jobb oldalon megjelen\xedtett egy\xe9ni karakterek a kijelz\u0151 egyenletekhez. Alap\xe9rtelmez\xe9s szerint az egyenlet sz\xe1ma a leck\xe9n bel\xfcl.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"elems")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"objektum"),", ahol a ",(0,a.kt)("inlineCode",{parentName:"li"},"kulcsok")," LaTeX karaktereket jel\xf6lnek, a hozz\xe1juk tartoz\xf3 \xe9rt\xe9kek pedig konfigur\xe1ci\xf3s ",(0,a.kt)("inlineCode",{parentName:"li"},"objektumok"),", hogy interakt\xedvv\xe1 tegy\xe9k \u0151ket. A ",(0,a.kt)("inlineCode",{parentName:"li"},"tooltip")," opci\xf3 be\xe1ll\xedt\xe1s\xe1val a LaTeX karakterek f\xf6l\xf6tt lebegve megjelenik egy tooltip. A ",(0,a.kt)("inlineCode",{parentName:"li"},"variable")," tulajdons\xe1g be\xe1ll\xedt\xe1sa egy beviteli cs\xfaszk\xe1t jelen\xedt meg a megfelel\u0151 \xe1llapotv\xe1ltoz\xf3 megv\xe1ltoztat\xe1s\xe1ra; ebben az esetben tov\xe1bbi tulajdons\xe1gok, a ",(0,a.kt)("inlineCode",{parentName:"li"},"legend"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"max")," \xe9s ",(0,a.kt)("inlineCode",{parentName:"li"},"step")," t\xe1mogatottak.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"popoverPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": a popover poz\xedci\xf3ja a megadott ",(0,a.kt)("inlineCode",{parentName:"li"},"elemek")," eset\xe9ben (vagy ",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom"),", vagy ",(0,a.kt)("inlineCode",{parentName:"li"},"left"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPopover")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),': callback "funkci\xf3", amikor egy felugr\xf3 ablakot be- vagy kikapcsolnak; egyed\xfcli argumentumk\xe9nt a kijelz\u0151 \xe1llapot\xe1t kapja boolean \xe9rt\xe9kben. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"onPopover() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onClick")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback ",(0,a.kt)("inlineCode",{parentName:"li"},"funkci\xf3"),", amely akkor h\xedv\xf3dik el\u0151, amikor a felhaszn\xe1l\xf3 r\xe1kattint az egyenletre.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,a.kt)("h2",u({},{id:"p\xe9ld\xe1k"}),"P\xe9ld\xe1k"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<TeX\n    raw="2 + 3 = 5"\n    displayMode={true}\n/>\n')))}y.isMDXComponent=!0}}]);