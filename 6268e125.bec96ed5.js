(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{174:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),a=(r(0),r(384)),o={id:"clt-discrete",title:"Discrete CLT",sidebar_label:"Discrete CLT"},c={unversionedId:"learn/clt-discrete",id:"learn/clt-discrete",isDocsHomePage:!1,title:"Discrete CLT",description:"A learning component illustrating the Central Limit Theorem (CLT) for a canonical discrete distribution, the binomial distribution.",source:"@site/docs/learn/clt-discrete.md",slug:"/learn/clt-discrete",permalink:"/docs/learn/clt-discrete",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-discrete.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1594085790,sidebar_label:"Discrete CLT",sidebar:"docs",previous:{title:"Continuous CLT",permalink:"/docs/learn/clt-continuous"},next:{title:"CLT Sample",permalink:"/docs/learn/clt-sample"}},l=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A learning component illustrating the Central Limit Theorem (CLT) for a canonical discrete distribution, the binomial distribution."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnDiscreteCLT />\n")),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"showPopStdev")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display the population standard deviation. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"true"),".")))}u.isMDXComponent=!0},384:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return r?i.a.createElement(m,c(c({ref:t},s),{},{components:r})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);