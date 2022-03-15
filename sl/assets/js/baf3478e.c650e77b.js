"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8404],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?i.createElement(k,o(o({ref:t},c),{},{components:n})):i.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16491:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return m},default:function(){return d}});var i=n(487462),a=n(263366),r=(n(202784),n(603905)),o=["components"],l={id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},p=void 0,s={unversionedId:"beacon-tooltip",id:"beacon-tooltip",title:"Beacon Tooltip",description:"Komponenta, ki postavi svetilnik v u\u010dno uro, bodisi samostojno ali povezano s ciljom. Ob podrsavanju ali kliku na svetilnik se prika\u017ee namig.",source:"@site/i18n/sl/docusaurus-plugin-content-docs/current/beacon-tooltip.md",sourceDirName:".",slug:"/beacon-tooltip",permalink:"/sl/docs/beacon-tooltip",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/beacon-tooltip.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19. 6. 2021",frontMatter:{id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},sidebar:"docs",previous:{title:"Summary Statistics",permalink:"/sl/docs/summary-statistics"},next:{title:"Clock",permalink:"/sl/docs/clock"}},c={},m=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Primeri",id:"primeri",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Komponenta, ki postavi svetilnik v u\u010dno uro, bodisi samostojno ali povezano s ",(0,r.kt)("inlineCode",{parentName:"p"},"ciljom"),". Ob podrsavanju ali kliku na svetilnik se prika\u017ee namig."),(0,r.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"title")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": naslov, ki se prika\u017ee na vrhu namiga.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"content")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": vsebina namigov. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'"),"content",(0,r.kt)("inlineCode",{parentName:"li"}," comes here...'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"event")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u010de je nastavljeno na ",(0,r.kt)("inlineCode",{parentName:"li"},"click"),", se namig orodja preklopi ob kliku na svetilnik; \u010de je nastavljeno na ",(0,r.kt)("inlineCode",{parentName:"li"},"hover"),", se namig orodja aktivira s premikanjem.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'click'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"placement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": postavitev vrstice glede na ",(0,r.kt)("inlineCode",{parentName:"li"},"cilj")," (bodisi ",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"zgoraj-za\u010detek"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"zgoraj-konec"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"spodaj-konec"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"levo-za\u010detek"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"levo-konec"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"desno-za\u010detek"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"desno-konec"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"avto")," ali ",(0,r.kt)("inlineCode",{parentName:"li"},"sredi\u0161\u010de"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"target")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": izbirnik razreda ali ID za element, na katerega se pripne namig.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"offset")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": razdalja med namigom in ",(0,r.kt)("inlineCode",{parentName:"li"},"ciljem")," v pikslih. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"15"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": povratni klic, ki se spro\u017ei ob spremembi stanja vrstice z orodjem. Prejme dva argumenta: ",(0,r.kt)("inlineCode",{parentName:"li"},"dejavnost")," (",(0,r.kt)("inlineCode",{parentName:"li"},"odprtje")," ali ",(0,r.kt)("inlineCode",{parentName:"li"},"zaprtje"),") in posredovane ",(0,r.kt)("inlineCode",{parentName:"li"},"opreme"),".. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,r.kt)("h2",{id:"primeri"},"Primeri"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BeaconTooltip\n    content="Body of the tooltip..."\n    title="Title comes here..."\n    event="hover"\n    placement="right"\n/>\n')))}d.isMDXComponent=!0}}]);