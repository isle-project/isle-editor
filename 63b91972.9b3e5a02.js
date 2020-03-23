(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),i=n(10),a=(n(0),n(254)),o={id:"switch",title:"Switch Components",sidebar_label:"Switch Components"},l={id:"switch",title:"Switch Components",description:"The Switch component allows the display of one element out of a list of several elements. Users can cycle through the different children of the Switch tag by clicking on the currently displayed one.",source:"@site/docs/switch.md",permalink:"/docs/switch",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/switch.md",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1584924745,sidebar_label:"Switch Components",sidebar:"docs",previous:{title:"Slider",permalink:"/docs/slider"},next:{title:"Text",permalink:"/docs/text"}},c=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Switch component allows the display of one element out of a list of several elements. Users can cycle through the different children of the Switch tag by clicking on the currently displayed one."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"<Switch>\n    <span>Option 1</span>\n    <span>Option 2</span>\n</Switch>\n")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://isle.heinz.cmu.edu/components/switch/"}),"Open interactive preview")),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"active")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the switch is active or not. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"true"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"tooltip")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": tooltip displayed when hovering over the switch element. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'Click to cycle through available options.'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"tooltipPos")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": placement of the tooltip (either ",Object(a.b)("inlineCode",{parentName:"li"},"top"),", ",Object(a.b)("inlineCode",{parentName:"li"},"left"),", ",Object(a.b)("inlineCode",{parentName:"li"},"right"),", or ",Object(a.b)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'top'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"className")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": class name for the enclosing span element. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onChange")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": callback invoked when elements are switched. Receives as its first argument the index of the currently displayed child. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onChange() {}"),".")))}s.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||a;return n?i.a.createElement(d,l({ref:t},p,{components:n})):i.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);