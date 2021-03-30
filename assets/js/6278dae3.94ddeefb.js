(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(410)),l={id:"text-input",title:"Text Input",sidebar_label:"Text Input"},o={unversionedId:"input/text-input",id:"input/text-input",isDocsHomePage:!1,title:"Text Input",description:"A text input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the onChange attribute or bind the value to a global variable via the bind attribute.",source:"@site/docs/input/text.md",slug:"/input/text-input",permalink:"/docs/input/text-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/text.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614609320,formattedLastUpdatedAt:"3/1/2021",sidebar_label:"Text Input",sidebar:"docs",previous:{title:"Text Area",permalink:"/docs/input/text-area"},next:{title:"Voice Input",permalink:"/docs/input/voice-input"}},b=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A text input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the ",Object(r.b)("inlineCode",{parentName:"p"},"onChange")," attribute or bind the value to a global variable via the ",Object(r.b)("inlineCode",{parentName:"p"},"bind")," attribute."),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"bind")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": name of global variable for the number to be assigned to. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": value indicating the default value of the input at start. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"value")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": text value (for controlled component). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"legend")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": string indicating the text displayed next to the number input. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"inline")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": Indicates whether the input is displayed inline. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onBlur")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback function invoked when the text area loses focus. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": function to be called when a text value is changed. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onKeyDown")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback function to be invoked when any key is pressed down. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onKeyDown() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onKeyPress")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback function to be invoked when any key is entered. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onKeyPress() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onKeyUp")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback function to be invoked when key is released. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onKeyUp() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"placeholder")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": string indicating the value to be displayed before an initial choice is made. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"width")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": number indicating the width of the input in pixels. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"80"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TextInput\n    legend="Your name"\n    defaultValue="Enter text"\n/>\n')))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,m=u["".concat(l,".").concat(s)]||u[s]||d[s]||r;return n?i.a.createElement(m,o(o({ref:t},c),{},{components:n})):i.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);