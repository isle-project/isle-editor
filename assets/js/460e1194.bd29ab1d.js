(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(409)),l=n(462),o=n(463),c={id:"typewriter",title:"Typewriter",sidebar_label:"Typewriter"},s={unversionedId:"typewriter",id:"typewriter",isDocsHomePage:!1,title:"Typewriter",description:"An ISLE component that allows you to create a typewriter effect.",source:"@site/docs/typewriter.md",slug:"/typewriter",permalink:"/docs/typewriter",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/typewriter.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738005,sidebar_label:"Typewriter",sidebar:"docs",previous:{title:"Text",permalink:"/docs/text"},next:{title:"Plotly",permalink:"/docs/plotly"}},b=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"An ISLE component that allows you to create a typewriter effect."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"delay")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": initial delay before typewriter starts (in milliseconds). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hold")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": if text is an array of strings, hold specifies the duration the line will be displayed before it passes over to the next item in the array. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"2000"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"interval")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": the interval of the typewriter (in milliseconds). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"100"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"random")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),': if random is set, the keystrokes will be performed with a certain, "humane" randomness. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"sound")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": the typed keystroke will be also heard. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"text")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|array<string>)"),": the full text to be displayed or an array of texts to be displayed sequentially. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Delay and Sound",value:"delayAndSound"},{label:"With CSS",value:"withCSS"},{label:"Array of Strings",value:"array"},{label:"Humanized",value:"humanized"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Typewriter text="Lorem ipsum" />\n'))),Object(i.b)(o.a,{value:"delayAndSound",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Typewriter text="Lorem ipsum" sound delay={2000} />\n'))),Object(i.b)(o.a,{value:"withCSS",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Typewriter text=\"Styled Text\" style={{ fontSize: 66, color: 'red'}} />\n"))),Object(i.b)(o.a,{value:"array",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Typewriter text={["First Entry", "Second Entry", "Third Entry"]}  hold={2000} />\n'))),Object(i.b)(o.a,{value:"humanized",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Typewriter text="This is a humanized performance" random interval={170} />\n')))))}p.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.a.createElement(d,o(o({ref:t},s),{},{components:n})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},449:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},460:function(e,t,n){"use strict";var r=n(0),a=n(461);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},461:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},462:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(460),l=n(449),o=n(58),c=n.n(o);const s=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:u,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[y,O]=Object(r.useState)(o),j=r.Children.toArray(e.children),v=[];if(null!=p){const e=d[p];null!=e&&e!==y&&u.some((t=>t.value===e))&&O(e)}const g=e=>{const t=e.target,n=v.indexOf(t),r=j[n].props.value;O(r),null!=p&&f(p,r)},h=e=>{var t;let n;switch(e.keyCode){case b:const t=v.indexOf(e.target)+1;n=v[t]||v[0];break;case s:const r=v.indexOf(e.target)-1;n=v[r]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},u.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===e}),key:e,ref:e=>v.push(e),onKeyDown:h,onFocus:g,onClick:g},t)))),t?Object(r.cloneElement)(j.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},463:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);