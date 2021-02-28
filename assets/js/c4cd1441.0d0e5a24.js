(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{266:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(7),r=(n(0),n(409)),l={id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},o={unversionedId:"sketchpad",id:"sketchpad",isDocsHomePage:!1,title:"Sketchpad",description:"A drawing sketchpad for note taking on lecture slides or empty pages.",source:"@site/docs/sketchpad.md",slug:"/sketchpad",permalink:"/docs/sketchpad",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sketchpad.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612731787,sidebar_label:"Sketchpad",sidebar:"docs",previous:{title:"Text Editor",permalink:"/docs/text-editor"},next:{title:"Lesson Submit",permalink:"/docs/lesson-submit"}},b=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:b};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A drawing sketchpad for note taking on lecture slides or empty pages."),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"autoSave")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the editor should save the current text to the local storage of the browser at a given time interval. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"feedbackButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display feedback buttons on each slide. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"intervalTime")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": time between auto saves. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"10000"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hideInputButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to hide drawing and text input buttons. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hideNavigationButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to hide buttons for navigating between pages. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hideSaveButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to hide the save buttons. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hideTransmitButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to hide buttons for transmitting user actions. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"brushSize")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": size of the brush to paint with. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"4"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"color")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": color of the brush and texts. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'#444444'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"canvasWidth")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": width of the canvas element (in px). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1200"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"canvasHeight")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": height of the canvas element (in px). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"700"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fullscreen")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to automatically resize the canvas to the width and height of the browser window. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fill")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": if ",Object(r.b)("inlineCode",{parentName:"li"},"horizontal"),", fill all available horizontal space when drawing a PDF; if ",Object(r.b)("inlineCode",{parentName:"li"},"vertical"),", all vertical space is used to prevent y-axis overflow. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'vertical'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disabled")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": whether to make the component read-only and forbid drawing on the sketchpad. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fontFamily")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": font family. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'Arial'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fontSize")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": font size. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"24"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nodes")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": components to be rendered on top of specified slides; ",Object(r.b)("inlineCode",{parentName:"li"},"keys")," should correspond to page numbers, ",Object(r.b)("inlineCode",{parentName:"li"},"values")," to the components. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"noPages")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": initial number of pages. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"pdf")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": link to PDF file for baked-in page backgrounds. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"showTutorial")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": show a tutorial for the sketchpad. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"dynamicallyHideButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to start hiding buttons when toolbar width is not sufficient (otherwise a new line will be started). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"transmitOwner")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": whether owner actions should be transmitted to other users in real-time. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"groupMode")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether all user's actions are transmitted to everyone else. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"voiceID")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": voice control identifier. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback invoked whenever a new line element is drawn. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChange() {}"),".")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Sketchpad canvasWidth={750} />\n")))}s.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,u=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?i.a.createElement(u,o(o({ref:t},c),{},{components:n})):i.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);