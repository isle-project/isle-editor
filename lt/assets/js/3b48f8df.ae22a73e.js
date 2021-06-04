(self.webpackChunk=self.webpackChunk||[]).push([[2533],{603905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},195737:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var n=r(722122),a=r(419756),o=(r(202784),r(603905)),s={id:"structure",title:"Structure of an ISLE Lesson",sidebar_label:"Lesson Structure"},i={unversionedId:"overview/structure",id:"overview/structure",isDocsHomePage:!1,title:"Structure of an ISLE Lesson",description:"Preamble",source:"@site/docs/overview/structure.md",sourceDirName:"overview",slug:"/overview/structure",permalink:"/docs/overview/structure",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/overview/structure.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598888897,formattedLastUpdatedAt:"2020-08-31",sidebar_label:"Lesson Structure",frontMatter:{id:"structure",title:"Structure of an ISLE Lesson",sidebar_label:"Lesson Structure"},sidebar:"docs",previous:{title:"ISLE Editor",permalink:"/docs/overview/editor"},next:{title:"Building a first ISLE lesson",permalink:"/docs/overview/first-lesson"}},l=[{value:"Preamble",id:"preamble",children:[]},{value:"Global State",id:"global-state",children:[]}],c={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"preamble"},"Preamble"),(0,o.kt)("p",null,"Any ISLE lesson should start with a preamble holding meta-information on the lesson as well as all state variables that can be manipulated and consumed from the elements in the lesson. This preamble has to be written in ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML"},"YAML"),". When one creates a new file using the ISLE editor, a basic preamble will all necessary fields will be inserted. It suffices to simply edit the content of this preamble to get started."),(0,o.kt)("h2",{id:"global-state"},"Global State"),(0,o.kt)("p",null,"Inside the preamble, the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," field is an object of all global variables that the learning components inside the lesson should have access to. It is possible to define arrays, numbers, strings inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),". Properties of the store object can be accessed in the code of ISLE components using ",(0,o.kt)("inlineCode",{parentName:"p"},"lesson.state.<name of state variable>"),". ISLE components can change their appearance depending on the global state or on the other hand change state variables themselves, which enables one to author complex and interactive lessons that react to user inputs. To change the value\nof a state variable, use "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"lesson.setState({ <name of state variable>: <new value> });\n")),(0,o.kt)("p",null,"To change multiple state variables at once, use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"lesson.setState({ \n    name1: value1,\n    name2: value2,\n    ...\n});\n")))}u.isMDXComponent=!0}}]);