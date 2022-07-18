"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77028],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},42366:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return v}});var r=n(603905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e};const f={id:"first-lesson",title:"Building a first ISLE lesson",sidebar_label:"First Lesson"},d=void 0,m={unversionedId:"overview/first-lesson",id:"overview/first-lesson",title:"Building a first ISLE lesson",description:"Let us start creating a little ISLE lesson. We can use Markdown to simplify writing of text segments.",source:"@site/docs/overview/first-lesson.md",sourceDirName:"overview",slug:"/overview/first-lesson",permalink:"/pl/docs/overview/first-lesson",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/overview/first-lesson.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598888897,formattedLastUpdatedAt:"31 sie 2020",frontMatter:{id:"first-lesson",title:"Building a first ISLE lesson",sidebar_label:"First Lesson"},sidebar:"docs",previous:{title:"Lesson Structure",permalink:"/pl/docs/overview/structure"},next:{title:"Exporting lessons",permalink:"/pl/docs/overview/packaging"}},h={},v=[],w={toc:v};function g(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},w),p),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Let us start creating a little ISLE lesson. We can use Markdown to simplify writing of text segments. "),(0,r.kt)("p",null,"Below the preamble, we will insert a header and a little description:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-markdown"}),"# Examples\n\nThis lesson will contain some examples \nof interactive *ISLE* components.\n")),(0,r.kt)("p",null,"Let's now look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"R Shell")," component, which allows the evaluation of R code."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-html"}),"## RShell\n\n<RShell />\n")),(0,r.kt)("p",null,"Try out evaluating some R code in the life preview. ISLE components have each a variety of attributes, which can be controlled and govern their functionality and appearance. We can set the default code and the number of lines for the R shell as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-html"}),'<RShell code="# Insert default code here..." lines={4} />\n')),(0,r.kt)("p",null,"Let us now use the R Shell to create a little exercise:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-html"}),'### Create 100 random draws from a Uniform(0,1) distribution\n\n<RShell \n    hints={["Use the runif function"]} \n    solution="runif(100)" \n/>\n')),(0,r.kt)("p",null,"When adding ",(0,r.kt)("inlineCode",{parentName:"p"},"solution")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"hints"),", new buttons appear on the R Shell, which allow users to access the hints and compare their answers to the supplied solutions."),(0,r.kt)("p",null,"Let's now intercept the answer of the learner and provide a notification in case it is correct."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"### Create 100 random draws from a Uniform(0,1) distribution\n\n<RShell \n    hints={[\n        'Use the runif function'\n    ]}\n    solution=\"runif(100)\"\n    onEvaluate={( str ) => {\n        if ( /runif\\(100/.test( str ) ) {\n            session.addNotification({\n                title: 'Correct.',\n                message: 'Your answer is correct!',\n                level: 'success',\n                position: 'tr'\n            });\n        } else {\n            session.addNotification({\n                title: 'Incorrect.',\n                message: 'Your answer is incorrect!',\n                level: 'warning',\n                position: 'tr'\n            });\n        }\n    }}\n/>\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"addNotification")," method attached to the ",(0,r.kt)("inlineCode",{parentName:"p"},"session")," object comes from the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/igorprado/react-notification-system"}),"react-notification-system")," library and supports all its options."),(0,r.kt)("p",null,"There are many other ISLE components to use. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ISLE Components")," section of the documentation contains examples for all of them along with detailed descriptions of their APIs."))}g.isMDXComponent=!0}}]);