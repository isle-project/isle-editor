"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4763],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97371:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),l=["components"],o={id:"sunburst",title:"Sunburst Plot",sidebar_label:"Sunburst Plot"},u=void 0,s={unversionedId:"plots/sunburst",id:"plots/sunburst",title:"Sunburst Plot",description:"\u0411\u0430\u0437\u0438\u0440\u0430\u043d\u0430 \u043d\u0430 d3 \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u0430 Sunburst \u0437\u0430 \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u044a\u0442\u0438\u0449\u0430.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/plots/sunburst.md",sourceDirName:"plots",slug:"/plots/sunburst",permalink:"/bg/docs/plots/sunburst",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/sunburst.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.06.2021 \u0433.",frontMatter:{id:"sunburst",title:"Sunburst Plot",sidebar_label:"Sunburst Plot"},sidebar:"docs",previous:{title:"Scatter Plot Matrix",permalink:"/bg/docs/plots/scatterplot-matrix"},next:{title:"Violin Plot",permalink:"/bg/docs/plots/violinplot"}},p=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",children:[],level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0411\u0430\u0437\u0438\u0440\u0430\u043d\u0430 \u043d\u0430 d3 \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u0430 Sunburst \u0437\u0430 \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u044a\u0442\u0438\u0449\u0430."),(0,a.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"categories")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array (required)"),": \u043c\u0430\u0441\u0438\u0432 \u043e\u0442 \u0438\u043c\u0435\u043d\u0430 \u043d\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u043e\u0431\u0435\u043a\u0442 \u0437\u0430 \u0434\u0430\u043d\u043d\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"width")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0448\u0438\u0440\u0438\u043d\u0430 \u043d\u0430 \u0433\u0440\u0430\u0444\u0438\u043a\u0430\u0442\u0430 (\u0432 px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"750"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0432\u0438\u0441\u043e\u0447\u0438\u043d\u0430 \u043d\u0430 \u0433\u0440\u0430\u0444\u0438\u043a\u0430\u0442\u0430 (\u0432 px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u043e\u0432\u0435. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"breadcrumbs")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"{w,h,s,t}"),": \u043e\u0431\u0435\u043a\u0442 \u0441 \u0440\u0430\u0437\u043c\u0435\u0440\u0438: ",(0,a.kt)("inlineCode",{parentName:"li"},"w")," \u0437\u0430 \u0448\u0438\u0440\u0438\u043d\u0430, ",(0,a.kt)("inlineCode",{parentName:"li"},"h")," \u0437\u0430 \u0432\u0438\u0441\u043e\u0447\u0438\u043d\u0430, ",(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u0437\u0430 \u0440\u0430\u0437\u0441\u0442\u043e\u044f\u043d\u0438\u0435, ",(0,a.kt)("inlineCode",{parentName:"li"},"t")," \u0437\u0430 \u0448\u0438\u0440\u0438\u043d\u0430 \u043d\u0430 \u0432\u044a\u0440\u0445\u0430/\u043e\u043f\u0430\u0448\u043a\u0430\u0442\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{\n  'w': 250,\n  'h': 50,\n  's': 5,\n  't': 15\n}"),".")),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"")))}d.isMDXComponent=!0}}]);