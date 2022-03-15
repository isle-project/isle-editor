"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7028],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},392596:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(487462),o=n(263366),i=(n(202784),n(603905)),a=["components"],s={id:"first-lesson",title:"Building a first ISLE lesson",sidebar_label:"First Lesson"},l=void 0,c={unversionedId:"overview/first-lesson",id:"overview/first-lesson",title:"Building a first ISLE lesson",description:"Let us start creating a little ISLE lesson. We can use Markdown to simplify writing of text segments.",source:"@site/docs/overview/first-lesson.md",sourceDirName:"overview",slug:"/overview/first-lesson",permalink:"/hu/docs/overview/first-lesson",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/overview/first-lesson.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598888897,formattedLastUpdatedAt:"2020. 08. 31.",frontMatter:{id:"first-lesson",title:"Building a first ISLE lesson",sidebar_label:"First Lesson"},sidebar:"docs",previous:{title:"Lesson Structure",permalink:"/hu/docs/overview/structure"},next:{title:"Exporting lessons",permalink:"/hu/docs/overview/packaging"}},u={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let us start creating a little ISLE lesson. We can use Markdown to simplify writing of text segments. "),(0,i.kt)("p",null,"Below the preamble, we will insert a header and a little description:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"# Examples\n\nThis lesson will contain some examples \nof interactive *ISLE* components.\n")),(0,i.kt)("p",null,"Let's now look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"R Shell")," component, which allows the evaluation of R code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"## RShell\n\n<RShell />\n")),(0,i.kt)("p",null,"Try out evaluating some R code in the life preview. ISLE components have each a variety of attributes, which can be controlled and govern their functionality and appearance. We can set the default code and the number of lines for the R shell as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<RShell code="# Insert default code here..." lines={4} />\n')),(0,i.kt)("p",null,"Let us now use the R Shell to create a little exercise:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'### Create 100 random draws from a Uniform(0,1) distribution\n\n<RShell \n    hints={["Use the runif function"]} \n    solution="runif(100)" \n/>\n')),(0,i.kt)("p",null,"When adding ",(0,i.kt)("inlineCode",{parentName:"p"},"solution")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"hints"),", new buttons appear on the R Shell, which allow users to access the hints and compare their answers to the supplied solutions."),(0,i.kt)("p",null,"Let's now intercept the answer of the learner and provide a notification in case it is correct."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"### Create 100 random draws from a Uniform(0,1) distribution\n\n<RShell \n    hints={[\n        'Use the runif function'\n    ]}\n    solution=\"runif(100)\"\n    onEvaluate={( str ) => {\n        if ( /runif\\(100/.test( str ) ) {\n            session.addNotification({\n                title: 'Correct.',\n                message: 'Your answer is correct!',\n                level: 'success',\n                position: 'tr'\n            });\n        } else {\n            session.addNotification({\n                title: 'Incorrect.',\n                message: 'Your answer is incorrect!',\n                level: 'warning',\n                position: 'tr'\n            });\n        }\n    }}\n/>\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"addNotification")," method attached to the ",(0,i.kt)("inlineCode",{parentName:"p"},"session")," object comes from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/igorprado/react-notification-system"},"react-notification-system")," library and supports all its options."),(0,i.kt)("p",null,"There are many other ISLE components to use. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ISLE Components")," section of the documentation contains examples for all of them along with detailed descriptions of their APIs."))}d.isMDXComponent=!0}}]);