(self.webpackChunk=self.webpackChunk||[]).push([[4802],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=i,y=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},267486:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(722122),i=n(419756),a=(n(202784),n(603905)),o={id:"timer",title:"Timer",sidebar_label:"Timer"},l={unversionedId:"timer",id:"timer",isDocsHomePage:!1,title:"Timer",description:"Wy\u015bwietla timer, kt\xf3ry po up\u0142yni\u0119ciu czasu wyzwoli predefiniowane wywo\u0142anie zwrotne. Przyk\u0142adowym przypadkiem u\u017cycia jest czas trwania quiz\xf3w.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/timer.md",sourceDirName:".",slug:"/timer",permalink:"/docs/timer",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/timer.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18.05.2021",sidebar_label:"Timer",frontMatter:{id:"timer",title:"Timer",sidebar_label:"Timer"},sidebar:"docs",previous:{title:"Runner",permalink:"/docs/runner"},next:{title:"Unveil",permalink:"/docs/unveil"}},u=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],p={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wy\u015bwietla timer, kt\xf3ry po up\u0142yni\u0119ciu czasu wyzwoli predefiniowane wywo\u0142anie zwrotne. Przyk\u0142adowym przypadkiem u\u017cycia jest czas trwania quiz\xf3w."),(0,a.kt)("h2",{id:"opcje"},"Opcje"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"id")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": unikalny ",(0,a.kt)("inlineCode",{parentName:"li"},"numer identyfikacyjny strun")," dla timera. Je\u015bli ID jest ustawione, komponent timera jest stale od\u015bwie\u017cany nad stron\u0105. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"active")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean (required)"),": flaga, kt\xf3ra mo\u017ce by\u0107 prze\u0142\u0105czana w celu uruchomienia lub wstrzymania timera. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"belowZero")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy po wyczerpaniu czasu trwania liczenia licznik kontynuuje liczenie. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"duration")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number (required)"),": czas trwania w sekundach dla timera. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"invisible")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy zegar powinien by\u0107 ukryty. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"legend")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": tekst wy\u015bwietlany przed zegarem steruj\u0105cym. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onTimeUp")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": wywo\u0142anie zwrotne, gdy sko\u0144czy si\u0119 timer. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onTimeUp() {}"),".")),(0,a.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Timer \n    id='test-quiz'\n    active={true} \n    duration={50} \n    onTimeUp={() => {\n      alert( 'done' );\n    }}\n/>\n")))}c.isMDXComponent=!0}}]);