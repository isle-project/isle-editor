(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(10),i=(n(0),n(254)),l={id:"js-shell",title:"JavaScript Shell",sidebar_label:"JavaScript Shell"},o={id:"js-shell",title:"JavaScript Shell",description:"An interactive Javascript shell that can be used to execute JavaScript commands. The shell contains a console that displays error messages, warnings etc.",source:"@site/docs/js-shell.md",permalink:"/docs/js-shell",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/js-shell.md",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1584924745,sidebar_label:"JavaScript Shell",sidebar:"docs",previous:{title:"Flippable Card",permalink:"/docs/flippable-card"},next:{title:"Likert Scale",permalink:"/docs/likert-scale"}},c=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"An interactive Javascript shell that can be used to execute JavaScript commands. The shell contains a console that displays error messages, warnings etc."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<JSShell id = "jseditor" \n        code = "var a = 22;" >\n</JSShell>\n')),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://isle.heinz.cmu.edu/components/js-shell/"}),"Open interactive preview")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"code")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": JavaScript code to be evaluated. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"solution")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": for programming questions, code ",Object(i.b)("inlineCode",{parentName:"li"},"string")," representing the official solution for the problem. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hints")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": for programming questions, an array of hints providing guidance on how to approach the problem. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"precompute")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the default code should be executed once the component has mounted. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"chat")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether group chat functionality should be enabled. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"check")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": appended JavaScript code to check the ",Object(i.b)("inlineCode",{parentName:"li"},"code")," to be evaluated. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"disabled")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to disable all user inputs and make the code block static. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"lines")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": number of lines to display. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"5"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": callback invoked whenever the text field input changes. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onEvaluate")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": callback invoked whenever the ",Object(i.b)("inlineCode",{parentName:"li"},"Evaluate")," button is clicked. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onEvaluate() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"vars")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": scope object with variables that should be made available to evaluated ",Object(i.b)("inlineCode",{parentName:"li"},"code"),". Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"voiceID")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": voice control identifier. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),".")))}p.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return n?r.a.createElement(m,o({ref:t},b,{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);