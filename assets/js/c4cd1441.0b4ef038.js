"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3764],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},214575:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(487462),i=n(263366),r=(n(202784),n(603905)),l=["components"],o={id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},s=void 0,p={unversionedId:"sketchpad",id:"sketchpad",isDocsHomePage:!1,title:"Sketchpad",description:"A drawing sketchpad for note taking on lecture slides or empty pages.",source:"@site/docs/sketchpad.md",sourceDirName:".",slug:"/sketchpad",permalink:"/docs/sketchpad",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sketchpad.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"10/8/2021",frontMatter:{id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},sidebar:"docs",previous:{title:"Text Editor",permalink:"/docs/text-editor"},next:{title:"Lesson Submit",permalink:"/docs/lesson-submit"}},d=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],m={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A drawing sketchpad for note taking on lecture slides or empty pages."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"autoSave")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether the editor should save the current text to the local storage of the browser at a given time interval. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedbackButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display feedback buttons on each slide. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"intervalTime")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": time between auto saves. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10000"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideInputButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether to hide drawing and text input buttons. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideNavigationButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether to hide buttons for navigating between pages. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideSaveButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether to hide the save buttons. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideTransmitButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether to hide buttons for transmitting user actions. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"brushSize")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": size of the brush to paint with. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"4"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"color")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": color of the brush and texts. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'#444444'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"canvasWidth")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": width of the canvas element (in px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1200"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"canvasHeight")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": height of the canvas element (in px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"700"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fullscreen")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether to automatically resize the canvas to the width and height of the browser window. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fill")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": if ",(0,r.kt)("inlineCode",{parentName:"li"},"horizontal"),", fill all available horizontal space when drawing a PDF; if ",(0,r.kt)("inlineCode",{parentName:"li"},"vertical"),", all vertical space is used to prevent y-axis overflow. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'vertical'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": whether to make the component read-only and forbid drawing on the sketchpad. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fontFamily")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": font family. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'Arial'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fontSize")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": font size. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"24"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nodes")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": components to be rendered on top of specified slides; ",(0,r.kt)("inlineCode",{parentName:"li"},"keys")," should correspond to page numbers, ",(0,r.kt)("inlineCode",{parentName:"li"},"values")," to the components. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"noPages")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": initial number of pages. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pdf")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": link to PDF file for baked-in page backgrounds. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showTutorial")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": show tutorial for the sketchpad on startup. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dynamicallyHideButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether to start hiding buttons when toolbar width is not sufficient (otherwise a new line will be started). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"transmitOwner")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": whether owner actions should be transmitted to other users in real-time. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"groupMode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether all user's actions are transmitted to everyone else. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback invoked whenever a new line element is drawn. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Sketchpad canvasWidth={750} />\n")))}u.isMDXComponent=!0}}]);