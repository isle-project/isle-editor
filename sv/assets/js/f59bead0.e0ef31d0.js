(self.webpackChunk=self.webpackChunk||[]).push([[8504],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?i.createElement(f,s(s({ref:t},p),{},{components:n})):i.createElement(f,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},959090:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var i=n(722122),o=n(419756),r=(n(202784),n(603905)),s=["components"],a={id:"editor",title:"ISLE Editor",sidebar_label:"ISLE Editor"},l=void 0,c={unversionedId:"overview/editor",id:"overview/editor",isDocsHomePage:!1,title:"ISLE Editor",description:"The editor is split into two panes: The left-hand side allows one to create ISLE lessons using HTML-like syntax and Markdown as well as LaTeX equations, whereas the right-hand side offers a live-preview of the created lesson. By default, all standard HTML tags are supported, but in addition it is also possible to insert custom ISLE tags which insert highly interactive and customizable elements into the lesson. The components section of this guide shows an overview of the available elements and their options.",source:"@site/docs/overview/editor.md",sourceDirName:"overview",slug:"/overview/editor",permalink:"/sv/docs/overview/editor",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/overview/editor.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598888897,formattedLastUpdatedAt:"2020-08-31",frontMatter:{id:"editor",title:"ISLE Editor",sidebar_label:"ISLE Editor"},sidebar:"docs",previous:{title:"Installation",permalink:"/sv/docs/overview/install"},next:{title:"Lesson Structure",permalink:"/sv/docs/overview/structure"}},p=[{value:"Editor Features",id:"editor-features",children:[{value:"Live Preview",id:"live-preview",children:[]},{value:"Markdown",id:"markdown",children:[]},{value:"Auto-completion",id:"auto-completion",children:[]},{value:"Snippets",id:"snippets",children:[]}]},{value:"Using the Context Menu to Insert Components",id:"using-the-context-menu-to-insert-components",children:[{value:"Collapsing",id:"collapsing",children:[]},{value:"Error Messages",id:"error-messages",children:[]},{value:"Search &amp; Replace",id:"search--replace",children:[]}]}],d={toc:p};function u(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The editor is split into two panes: The left-hand side allows one to create ISLE lessons using HTML-like syntax and Markdown as well as LaTeX equations, whereas the right-hand side offers a live-preview of the created lesson. By default, all standard HTML tags are supported, but in addition it is also possible to insert custom ISLE tags which insert highly interactive and customizable elements into the lesson. The components section of this guide shows an overview of the available elements and their options."),(0,r.kt)("h2",{id:"editor-features"},"Editor Features"),(0,r.kt)("h3",{id:"live-preview"},"Live Preview"),(0,r.kt)("p",null,"The right-hand pane offers an interactive live-preview of the opened lesson. Whenever the content of the lesson is changed, this view will be re-rendered and all state variable are reset."),(0,r.kt)("h3",{id:"markdown"},"Markdown"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/"},"Markdown")," can be used for writing sections of text. All text outside HTML and ISLE tags will be parsed as Markdown and rendered as HTML. See ",(0,r.kt)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/syntax"},"this overview")," for an introduction to the Markdown syntax."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Markdown GIF",src:n(138253).Z})),(0,r.kt)("h3",{id:"auto-completion"},"Auto-completion"),(0,r.kt)("p",null,"While typing, live auto-completion offers suggestions of possible insertions. Hitting RETURN or TAB will insert the current selection. One can use the arrow keys to cycle through all available suggestions."),(0,r.kt)("h3",{id:"snippets"},"Snippets"),(0,r.kt)("p",null,"For the custom ISLE elements, the editor comes with snippets that allow you to quickly insert the respective elements with default settings, all the while offering a convenient way to change the default options. Using TAB, it is possible to cycle through and change the different options after the tag is inserted. CTRL-L will open up a list of all possible auto-completions, including the snippets that come with the ISLE editor."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Snippets GIF",src:n(658926).Z})),(0,r.kt)("h2",{id:"using-the-context-menu-to-insert-components"},"Using the Context Menu to Insert Components"),(0,r.kt)("p",null,"Right-clicking in the editor brings up a context menu, from which one may select a component from the list of available components to be inserted at the respective position by clicking on the respective name."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Contextmenu",src:n(910663).Z})),(0,r.kt)("p",null,"Clicking on the cogs icon to the right of a component will bring up the configuration wizard, which displays all the available attributes of the respective components and allows one to configure the component either through the synced table of attributes or the integrated code editor. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configuration",src:n(535641).Z})),(0,r.kt)("h3",{id:"collapsing"},"Collapsing"),(0,r.kt)("p",null,"The contents in-between a tag can be collapsed when they span multiple lines. This can help one to maintain oversight of a larger lesson. To expand or collapse the contents of a tag, simply click on the arrows next to the line numbers on the left of the editor window."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Collapsing GIF",src:n(108919).Z})),(0,r.kt)("h3",{id:"error-messages"},"Error Messages"),(0,r.kt)("p",null,"The editor also displays error messages on the left next to the lines for which a problem is detected. Hovering over the red box will display the description of the identified problem."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Errors GIF",src:n(853002).Z})),(0,r.kt)("h3",{id:"search--replace"},"Search & Replace"),(0,r.kt)("p",null,"Hitting CTRL-F will open a search window. The little icons in the lower right corner can be used to perform a case-sensitive search, a search using regular expressions or a whole word search. While the search window is open, another CTRL-F will open a tool bar allowing one to specify how found matches should be replaced."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Search GIF",src:n(924777).Z})))}u.isMDXComponent=!0},108919:function(e,t,n){"use strict";e.exports=n.p+"b9dc8dcd6f83bd65daf8.gif"},853002:function(e,t,n){"use strict";e.exports=n.p+"0a0c562929bae233a191.gif"},138253:function(e,t,n){"use strict";e.exports=n.p+"c44295cbd4614f3065b4.gif"},924777:function(e,t,n){"use strict";e.exports=n.p+"c060229a111327c991f7.gif"},658926:function(e,t,n){"use strict";e.exports=n.p+"5b73b9f84a96b008bb83.gif"},535641:function(e,t,n){"use strict";e.exports=n.p+"c29e300903c0d9c95323.png"},910663:function(e,t,n){"use strict";e.exports=n.p+"14aaeceea15dc17bbe4b.png"}}]);