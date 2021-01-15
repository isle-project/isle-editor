(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(384)),a={id:"text-editor",title:"Text Editor",sidebar_label:"Text Editor"},l={unversionedId:"text-editor",id:"text-editor",isDocsHomePage:!1,title:"Text Editor",description:"A text editor for writing notes or reports. Supports exporting of notes as HTML or PDF files, as well as automatic submission to the ISLE server.",source:"@site/docs/text-editor.md",slug:"/text-editor",permalink:"/docs/text-editor",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/text-editor.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1610556668,sidebar_label:"Text Editor",sidebar:"docs",previous:{title:"Gate",permalink:"/docs/gate"},next:{title:"Sketchpad",permalink:"/docs/sketchpad"}},c=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A text editor for writing notes or reports. Supports exporting of notes as HTML or PDF files, as well as automatic submission to the ISLE server."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<TextEditor />\n")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"allowSubmissions")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether students may submit their reports to the server. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"canLoadHTML")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": undefined. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": default text of the editor. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"mode")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": controls whether to enable text editing for groups (when set to ",Object(o.b)("inlineCode",{parentName:"li"},"group"),") or for everyone (when set to ",Object(o.b)("inlineCode",{parentName:"li"},"collaborative"),"). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'individual'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"resetModal")," | ",Object(o.b)("inlineCode",{parentName:"li"},"{title,body,buttonLabel,notificationTitle,notification,tooltip}"),": undefined. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"voiceTimeout")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": time in milliseconds after a chunk of recorded voice input is inserted. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"5000"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"language")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": language identifier. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'en-US'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),".")))}p.isMDXComponent=!0},384:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(a,".").concat(d)]||s[d]||u[d]||o;return n?i.a.createElement(m,l(l({ref:t},b),{},{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var b=2;b<o;b++)a[b]=n[b];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);