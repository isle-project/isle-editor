"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7083],{603905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},361094:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return v}});var n=r(603905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e};const d={id:"install",title:"Installation",sidebar_label:"Installation"},m=void 0,h={unversionedId:"overview/install",id:"overview/install",title:"Installation",description:"You may either download prebuilt binaries of the ISLE editor or built it yourself from the source code. The latter is only recommended in case you would like to contribute to the development of ISLE or be able to pull in the latest features.",source:"@site/docs/overview/install.md",sourceDirName:"overview",slug:"/overview/install",permalink:"/es/docs/overview/install",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/overview/install.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1653765965,formattedLastUpdatedAt:"28/5/2022",frontMatter:{id:"install",title:"Installation",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/es/docs/overview/intro"},next:{title:"ISLE Editor",permalink:"/es/docs/overview/editor"}},f={},v=[{value:"Binaries",id:"binaries",level:2},{value:"Build from Source",id:"build-from-source",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Download",id:"download",level:3},{value:"Installation",id:"installation",level:3},{value:"Development",id:"development",level:3},{value:"Build",id:"build",level:3},{value:"Package",id:"package",level:4},{value:"Tests",id:"tests",level:4}],b={toc:v};function g(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},b),u),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"You may either download prebuilt binaries of the ISLE editor or built it yourself from the source code. The latter is only recommended in case you would like to contribute to the development of ISLE or be able to pull in the latest features."),(0,n.kt)("h2",c({},{id:"binaries"}),"Binaries"),(0,n.kt)("p",null,"Current version: ",(0,n.kt)("em",{parentName:"p"},"v0.76.16-alpha.0-alpha.0"),"."),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/isle-project/isle-editor/releases/download/v0.76.16-alpha.0-alpha.0/isle-editor-Setup-0.76.16-alpha.0-alpha.0.exe"}),"Download the isle-editor for Windows (.exe)")),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/isle-project/isle-editor/releases/download/v0.76.16-alpha.0-alpha.0/isle-editor-0.76.16-alpha.0-alpha.0.dmg"}),"Download the isle-editor for macOS (.dmg)")),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/isle-project/isle-editor/releases/download/v0.76.16-alpha.0-alpha.0/isle-editor-0.76.16-alpha.0-alpha.0-x86_64.AppImage"}),"Download the isle-editor for Linux (.AppImage)")," (alternative: ",(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/isle-project/isle-editor/releases/download/v0.76.16-alpha.0-alpha.0/isle-editor-0.76.16-alpha.0-alpha.0-amd64.deb"}),".deb"),")"),(0,n.kt)("h2",c({},{id:"build-from-source"}),"Build from Source"),(0,n.kt)("h3",c({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("p",null,"Developing and running the ISLE Editor has the following prerequisites:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"http://git-scm.com/"}),"git"),": version control"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js"),": JavaScript runtime (version ",(0,n.kt)("inlineCode",{parentName:"li"},">= 14.0"),")")),(0,n.kt)("h3",c({},{id:"download"}),"Download"),(0,n.kt)("p",null,"To acquire the source code, clone the git repository."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/isle-project/isle-editor\n")),(0,n.kt)("h3",c({},{id:"installation"}),"Installation"),(0,n.kt)("p",null,"To install development dependencies,"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ npm install\n")),(0,n.kt)("h3",c({},{id:"development"}),"Development"),(0,n.kt)("p",null,"To live-edit the ISLE Editor,"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ npm run dev\n")),(0,n.kt)("p",null,"Editing source files will result in changes appearing directly without reloading."),(0,n.kt)("h3",c({},{id:"build"}),"Build"),(0,n.kt)("p",null,"To build the ",(0,n.kt)("a",c({parentName:"p"},{href:"http://electron.atom.io/"}),"Electron")," application,"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ npm run build\n")),(0,n.kt)("p",null,"The bundled version can be started with"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ npm start\n")),(0,n.kt)("h4",c({},{id:"package"}),"Package"),(0,n.kt)("p",null,"To package the editor as a standalone application for the current operating system, run "),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ npm run package\n")),(0,n.kt)("p",null,"To bundle for all operating systems, run"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ npm run package-all\n")),(0,n.kt)("h4",c({},{id:"tests"}),"Tests"),(0,n.kt)("p",null,"The ISLE editor uses ",(0,n.kt)("a",c({parentName:"p"},{href:"https://jestjs.io"}),"Jest")," for unit tests. To run the tests, execute the following command in the top-level application directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ npm test\n")),(0,n.kt)("p",null,"To only run the tests for a single component or function, use"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'$ npm run test -- -t "name-of-spec"\n')))}g.isMDXComponent=!0}}]);