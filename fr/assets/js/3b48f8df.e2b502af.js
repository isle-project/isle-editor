(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(410)),s={id:"structure",title:"Structure of an ISLE Lesson",sidebar_label:"Lesson Structure"},i={unversionedId:"overview/structure",id:"overview/structure",isDocsHomePage:!1,title:"Structure of an ISLE Lesson",description:"Preamble",source:"@site/docs/overview/structure.md",slug:"/overview/structure",permalink:"/fr/docs/overview/structure",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/overview/structure.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598888897,formattedLastUpdatedAt:"31/08/2020",sidebar_label:"Lesson Structure",sidebar:"docs",previous:{title:"ISLE Editor",permalink:"/fr/docs/overview/editor"},next:{title:"Building a first ISLE lesson",permalink:"/fr/docs/overview/first-lesson"}},l=[{value:"Preamble",id:"preamble",children:[]},{value:"Global State",id:"global-state",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"preamble"},"Preamble"),Object(o.b)("p",null,"Any ISLE lesson should start with a preamble holding meta-information on the lesson as well as all state variables that can be manipulated and consumed from the elements in the lesson. This preamble has to be written in ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML"},"YAML"),". When one creates a new file using the ISLE editor, a basic preamble will all necessary fields will be inserted. It suffices to simply edit the content of this preamble to get started."),Object(o.b)("h2",{id:"global-state"},"Global State"),Object(o.b)("p",null,"Inside the preamble, the ",Object(o.b)("inlineCode",{parentName:"p"},"state")," field is an object of all global variables that the learning components inside the lesson should have access to. It is possible to define arrays, numbers, strings inside the ",Object(o.b)("inlineCode",{parentName:"p"},"state"),". Properties of the store object can be accessed in the code of ISLE components using ",Object(o.b)("inlineCode",{parentName:"p"},"lesson.state.<name of state variable>"),". ISLE components can change their appearance depending on the global state or on the other hand change state variables themselves, which enables one to author complex and interactive lessons that react to user inputs. To change the value\nof a state variable, use "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"lesson.setState({ <name of state variable>: <new value> });\n")),Object(o.b)("p",null,"To change multiple state variables at once, use"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"lesson.setState({ \n    name1: value1,\n    name2: value2,\n    ...\n});\n")))}u.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);