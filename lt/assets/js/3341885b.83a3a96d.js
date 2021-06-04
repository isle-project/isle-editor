(self.webpackChunk=self.webpackChunk||[]).push([[7998],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},973071:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(722122),i=n(419756),a=(n(202784),n(603905)),o={id:"reaction",title:"Reaction",sidebar_label:"Reaction"},u={unversionedId:"reaction",id:"reaction",isDocsHomePage:!1,title:"Reaction",description:"Atsi\u017evelgiant \u012f naudotojo veiksmus, rodomi skirtingi komponentai.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/reaction.md",sourceDirName:".",slug:"/reaction",permalink:"/docs/reaction",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/reaction.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",sidebar_label:"Reaction",frontMatter:{id:"reaction",title:"Reaction",sidebar_label:"Reaction"}},c=[{value:"Parinktys",id:"parinktys",children:[]},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",children:[]}],l={toc:c};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Atsi\u017evelgiant \u012f naudotojo veiksmus, rodomi skirtingi komponentai."),(0,a.kt)("h2",{id:"parinktys"},"Parinktys"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"actionID")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string (required)"),": Stebimo komponento ID. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"show")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(object|function)"),": komponent\u0173, kuriuos reikia rodyti atsi\u017evelgiant \u012f skirtingus atsakymus, hash lentel\u0117 (jei atsakymo raktas ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," neatitinka atsakymo, bus rodoma reik\u0161m\u0117, atitinkanti ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," rakt\u0105, jei jis nustatytas) arba funkcija, gr\u0105\u017einanti rodom\u0105 komponent\u0105 (vienintelis funkcijos argumentas yra naujausias rezultatas).. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"pavyzd\u017eiai"},"Pavyzd\u017eiai"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<div>\n    <NumberQuestion\n        question="What is the first prime number?"\n        id="question-with-reaction"\n    />\n    <Reaction actionID="question-with-reaction" show={( answer ) => {\n        if ( answer === 2 ) {\n            return <p>Awesome, that was correct.</p>\n        }\n        return <p>You might want to review the following video on prime numbers:\n            <VideoPlayer url="https://www.youtube.com/watch?v=mIStB5X4U8M" />\n        </p>;\n    }} />\n</div>\n')))}s.isMDXComponent=!0}}]);