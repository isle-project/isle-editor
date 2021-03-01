(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{304:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(3),r=n(7),o=(n(0),n(411)),a={id:"editor",title:"ISLE Editor",sidebar_label:"ISLE Editor"},s={unversionedId:"overview/editor",id:"overview/editor",isDocsHomePage:!1,title:"ISLE Editor",description:"The editor is split into two panes: The left-hand side allows one to create ISLE lessons using HTML-like syntax and Markdown as well as LaTeX equations, whereas the right-hand side offers a live-preview of the created lesson. By default, all standard HTML tags are supported, but in addition it is also possible to insert custom ISLE tags which insert highly interactive and customizable elements into the lesson. The components section of this guide shows an overview of the available elements and their options.",source:"@site/docs/overview/editor.md",slug:"/overview/editor",permalink:"/zh/docs/overview/editor",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/overview/editor.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598888897,sidebar_label:"ISLE Editor",sidebar:"docs",previous:{title:"Installation",permalink:"/zh/docs/overview/install"},next:{title:"Structure of an ISLE Lesson",permalink:"/zh/docs/overview/structure"}},l=[{value:"Editor Features",id:"editor-features",children:[{value:"Live Preview",id:"live-preview",children:[]},{value:"Markdown",id:"markdown",children:[]},{value:"Auto-completion",id:"auto-completion",children:[]},{value:"Snippets",id:"snippets",children:[]}]},{value:"Using the Context Menu to Insert Components",id:"using-the-context-menu-to-insert-components",children:[{value:"Collapsing",id:"collapsing",children:[]},{value:"Error Messages",id:"error-messages",children:[]},{value:"Search &amp; Replace",id:"search--replace",children:[]}]}],c={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The editor is split into two panes: The left-hand side allows one to create ISLE lessons using HTML-like syntax and Markdown as well as LaTeX equations, whereas the right-hand side offers a live-preview of the created lesson. By default, all standard HTML tags are supported, but in addition it is also possible to insert custom ISLE tags which insert highly interactive and customizable elements into the lesson. The components section of this guide shows an overview of the available elements and their options."),Object(o.b)("h2",{id:"editor-features"},"Editor Features"),Object(o.b)("h3",{id:"live-preview"},"Live Preview"),Object(o.b)("p",null,"The right-hand pane offers an interactive live-preview of the opened lesson. Whenever the content of the lesson is changed, this view will be re-rendered and all state variable are reset."),Object(o.b)("h3",{id:"markdown"},"Markdown"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/"},"Markdown")," can be used for writing sections of text. All text outside HTML and ISLE tags will be parsed as Markdown and rendered as HTML. See ",Object(o.b)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/syntax"},"this overview")," for an introduction to the Markdown syntax."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Markdown GIF",src:n(4702).default})),Object(o.b)("h3",{id:"auto-completion"},"Auto-completion"),Object(o.b)("p",null,"While typing, live auto-completion offers suggestions of possible insertions. Hitting RETURN or TAB will insert the current selection. One can use the arrow keys to cycle through all available suggestions."),Object(o.b)("h3",{id:"snippets"},"Snippets"),Object(o.b)("p",null,"For the custom ISLE elements, the editor comes with snippets that allow you to quickly insert the respective elements with default settings, all the while offering a convenient way to change the default options. Using TAB, it is possible to cycle through and change the different options after the tag is inserted. CTRL-L will open up a list of all possible auto-completions, including the snippets that come with the ISLE editor."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Snippets GIF",src:n(4703).default})),Object(o.b)("h2",{id:"using-the-context-menu-to-insert-components"},"Using the Context Menu to Insert Components"),Object(o.b)("p",null,"Right-clicking in the editor brings up a context menu, from which one may select a component from the list of available components to be inserted at the respective position by clicking on the respective name."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Contextmenu",src:n(4704).default})),Object(o.b)("p",null,"Clicking on the cogs icon to the right of a component will bring up the configuration wizard, which displays all the available attributes of the respective components and allows one to configure the component either through the synced table of attributes or the integrated code editor. "),Object(o.b)("p",null,Object(o.b)("img",{alt:"Configuration",src:n(4705).default})),Object(o.b)("h3",{id:"collapsing"},"Collapsing"),Object(o.b)("p",null,"The contents in-between a tag can be collapsed when they span multiple lines. This can help one to maintain oversight of a larger lesson. To expand or collapse the contents of a tag, simply click on the arrows next to the line numbers on the left of the editor window."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Collapsing GIF",src:n(4706).default})),Object(o.b)("h3",{id:"error-messages"},"Error Messages"),Object(o.b)("p",null,"The editor also displays error messages on the left next to the lines for which a problem is detected. Hovering over the red box will display the description of the identified problem."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Errors GIF",src:n(4707).default})),Object(o.b)("h3",{id:"search--replace"},"Search & Replace"),Object(o.b)("p",null,"Hitting CTRL-F will open a search window. The little icons in the lower right corner can be used to perform a case-sensitive search, a search using regular expressions or a whole word search. While the search window is open, another CTRL-F will open a tool bar allowing one to specify how found matches should be replaced."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Search GIF",src:n(4708).default})))}d.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,b=p["".concat(a,".").concat(h)]||p[h]||u[h]||o;return n?r.a.createElement(b,s(s({ref:t},c),{},{components:n})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4702:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/markdown-4a575b144aa11c862e7f43a35a347a36.gif"},4703:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/snippets-99b9ac430a622842dad64a8067aab8ae.gif"},4704:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/contextmenu-02a8875c5b9cde582fbdd5d0ed7028ed.png"},4705:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/configuration_wizard-701a72df4ea9a3eb3108ec83493ddf86.png"},4706:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/collapsing-0a2e4ae0a870dc216c7e71438cd1bae5.gif"},4707:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/errors-fdce7237aa73c2166d2fc91757469ffa.gif"},4708:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/search-c7aec81b663ca917371a448dfd4f5f44.gif"}}]);