"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7083],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},583703:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(487462),l=n(263366),a=(n(202784),n(603905)),o=["components"],i={id:"install",title:"Installation",sidebar_label:"Installation"},s=void 0,u={unversionedId:"overview/install",id:"overview/install",title:"Installation",description:"You may either download prebuilt binaries of the ISLE editor or built it yourself from the source code. The latter is only recommended in case you would like to contribute to the development of ISLE or be able to pull in the latest features.",source:"@site/docs/overview/install.md",sourceDirName:"overview",slug:"/overview/install",permalink:"/sl/docs/overview/install",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/overview/install.md",tags:[],version:"current",lastUpdatedBy:"Philipp Burckhardt",lastUpdatedAt:1647293064,formattedLastUpdatedAt:"14. 3. 2022",frontMatter:{id:"install",title:"Installation",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/sl/docs/overview/intro"},next:{title:"ISLE Editor",permalink:"/sl/docs/overview/editor"}},p={},d=[{value:"Binaries",id:"binaries",level:2},{value:"Build from Source",id:"build-from-source",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Download",id:"download",level:3},{value:"Installation",id:"installation",level:3},{value:"Development",id:"development",level:3},{value:"Build",id:"build",level:3},{value:"Package",id:"package",level:4},{value:"Tests",id:"tests",level:4}],c={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You may either download prebuilt binaries of the ISLE editor or built it yourself from the source code. The latter is only recommended in case you would like to contribute to the development of ISLE or be able to pull in the latest features."),(0,a.kt)("h2",{id:"binaries"},"Binaries"),(0,a.kt)("p",null,"Current version: ",(0,a.kt)("em",{parentName:"p"},"v0.76.13"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/isle-project/isle-editor/releases/download/v0.76.13/isle-editor-Setup-0.76.13.exe"},"Download the isle-editor for Windows (.exe)")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/isle-project/isle-editor/releases/download/v0.76.13/isle-editor-0.76.13.dmg"},"Download the isle-editor for macOS (.dmg)")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/isle-project/isle-editor/releases/download/v0.76.13/isle-editor-0.76.13-x86_64.AppImage"},"Download the isle-editor for Linux (.AppImage)")," (alternative: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/isle-project/isle-editor/releases/download/v0.76.13/isle-editor-0.76.13-amd64.deb"},".deb"),")"),(0,a.kt)("h2",{id:"build-from-source"},"Build from Source"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Developing and running the ISLE Editor has the following prerequisites:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://git-scm.com/"},"git"),": version control"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js"),": JavaScript runtime (version ",(0,a.kt)("inlineCode",{parentName:"li"},">= 14.0"),")")),(0,a.kt)("h3",{id:"download"},"Download"),(0,a.kt)("p",null,"To acquire the source code, clone the git repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/isle-project/isle-editor\n")),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"To install development dependencies,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install\n")),(0,a.kt)("h3",{id:"development"},"Development"),(0,a.kt)("p",null,"To live-edit the ISLE Editor,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run dev\n")),(0,a.kt)("p",null,"Editing source files will result in changes appearing directly without reloading."),(0,a.kt)("h3",{id:"build"},"Build"),(0,a.kt)("p",null,"To build the ",(0,a.kt)("a",{parentName:"p",href:"http://electron.atom.io/"},"Electron")," application,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run build\n")),(0,a.kt)("p",null,"The bundled version can be started with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm start\n")),(0,a.kt)("h4",{id:"package"},"Package"),(0,a.kt)("p",null,"To package the editor as a standalone application for the current operating system, run "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run package\n")),(0,a.kt)("p",null,"To bundle for all operating systems, run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run package-all\n")),(0,a.kt)("h4",{id:"tests"},"Tests"),(0,a.kt)("p",null,"The ISLE editor uses ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io"},"Jest")," for unit tests. To run the tests, execute the following command in the top-level application directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm test\n")),(0,a.kt)("p",null,"To only run the tests for a single component or function, use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ npm run test -- -t "name-of-spec"\n')))}m.isMDXComponent=!0}}]);