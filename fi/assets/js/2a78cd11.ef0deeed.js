"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7083],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},583703:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(487462),l=n(263366),o=(n(202784),n(603905)),a=["components"],i={id:"install",title:"Installation",sidebar_label:"Installation"},s=void 0,u={unversionedId:"overview/install",id:"overview/install",isDocsHomePage:!1,title:"Installation",description:"You may either download prebuilt binaries of the ISLE editor or built it yourself from the source code. The latter is only recommended in case you would like to contribute to the development of ISLE or be able to pull in the latest features.",source:"@site/docs/overview/install.md",sourceDirName:"overview",slug:"/overview/install",permalink:"/fi/docs/overview/install",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/overview/install.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1634073093,formattedLastUpdatedAt:"12.10.2021",frontMatter:{id:"install",title:"Installation",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/fi/docs/overview/intro"},next:{title:"ISLE Editor",permalink:"/fi/docs/overview/editor"}},p=[{value:"Binaries",id:"binaries",children:[]},{value:"Build from Source",id:"build-from-source",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Download",id:"download",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Development",id:"development",children:[]},{value:"Build",id:"build",children:[]}]}],d={toc:p};function c(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You may either download prebuilt binaries of the ISLE editor or built it yourself from the source code. The latter is only recommended in case you would like to contribute to the development of ISLE or be able to pull in the latest features."),(0,o.kt)("h2",{id:"binaries"},"Binaries"),(0,o.kt)("p",null,"Current version: ",(0,o.kt)("em",{parentName:"p"},"v0.76.9"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/isle-project/isle-editor/releases/download/v0.76.9/isle-editor-Setup-0.76.8.exe"},"Download the isle-editor for Windows (.exe)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/isle-project/isle-editor/releases/download/v0.76.9/isle-editor-0.76.8.dmg"},"Download the isle-editor for macOS (.dmg)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/isle-project/isle-editor/releases/download/v0.76.9/isle-editor-0.76.8-x86_64.AppImage"},"Download the isle-editor for Linux (.AppImage)")," (alternative: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/isle-project/isle-editor/releases/download/v0.76.9/isle-editor-0.76.8-amd64.deb"},".deb"),")"),(0,o.kt)("h2",{id:"build-from-source"},"Build from Source"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Developing and running the ISLE Editor has the following prerequisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://git-scm.com/"},"git"),": version control"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js"),": JavaScript runtime (version ",(0,o.kt)("inlineCode",{parentName:"li"},">= 14.0"),")")),(0,o.kt)("h3",{id:"download"},"Download"),(0,o.kt)("p",null,"To acquire the source code, clone the git repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/isle-project/isle-editor\n")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To install development dependencies,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install\n")),(0,o.kt)("h3",{id:"development"},"Development"),(0,o.kt)("p",null,"To live-edit the ISLE Editor,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run dev\n")),(0,o.kt)("p",null,"Editing source files will result in changes appearing directly without reloading."),(0,o.kt)("h3",{id:"build"},"Build"),(0,o.kt)("p",null,"To build the ",(0,o.kt)("a",{parentName:"p",href:"http://electron.atom.io/"},"Electron")," application,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run build\n")),(0,o.kt)("p",null,"The bundled version can be started with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm start\n")),(0,o.kt)("h4",{id:"package"},"Package"),(0,o.kt)("p",null,"To package the editor as a standalone application for the current operating system, run "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run package\n")),(0,o.kt)("p",null,"To bundle for all operating systems, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run package-all\n")),(0,o.kt)("h4",{id:"tests"},"Tests"),(0,o.kt)("p",null,"The ISLE editor uses ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io"},"Jest")," for unit tests. To run the tests, execute the following command in the top-level application directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm test\n")),(0,o.kt)("p",null,"To only run the tests for a single component or function, use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ npm run test -- -t "name-of-spec"\n')))}c.isMDXComponent=!0}}]);