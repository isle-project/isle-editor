(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a,i=n(3),r=n(7),l=(n(0),n(409)),o=n(462),s=n(463),c={id:"image-question",title:"Image Question",sidebar_label:"Image Question"},b={unversionedId:"questions/image-question",id:"questions/image-question",isDocsHomePage:!1,title:"Image Question",description:"A question that asks the user to upload an image.",source:"@site/docs/questions/image.md",slug:"/questions/image-question",permalink:"/docs/questions/image-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/image.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614116691,sidebar_label:"Image Question",sidebar:"docs",previous:{title:"Free Text Question",permalink:"/docs/questions/free-text-question"},next:{title:"Match List Question",permalink:"/docs/questions/match-list-question"}},u=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],m=(a="Sketchpad",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),p={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A question that asks the user to upload an image."),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"question")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|node)"),": text for the question. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": placement of the hints (either ",Object(l.b)("inlineCode",{parentName:"li"},"top"),", ",Object(l.b)("inlineCode",{parentName:"li"},"left"),", ",Object(l.b)("inlineCode",{parentName:"li"},"right"),", or ",Object(l.b)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"'bottom'"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hints")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": hints providing guidance on how to answer the question. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"feedback")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display feedback buttons. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"chat")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the element should have an integrated chat. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"disableSubmitNotification")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether a notification should be displayed after submitting an image. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": class name. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"sketchpad")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": properties to be passed to ",Object(l.b)(m,{mdxType:"Sketchpad"})," component; to render the sketchpad, pass in at least an empty object ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),". Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"solution")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": image URL of model solution. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"until")," | ",Object(l.b)("inlineCode",{parentName:"li"},"Date"),": time until students should be allowed to submit answers. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"points")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": maximum number of points awarded in grading. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"10"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": callback invoked when answer is submitted; has as a sole parameter a ",Object(l.b)("inlineCode",{parentName:"li"},"boolean")," indicating whether the elements were placed in the correct order. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Sketchpad",value:"witchSketchpad"},{label:"Submit Plot",value:"submitPlot"},{label:"Solution",value:"solution"},,],lazy:!0,mdxType:"Tabs"},Object(l.b)(s.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ImageQuestion question="You may upload an image." feedback={false}  />\n'))),Object(l.b)(s.a,{value:"witchSketchpad",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ImageQuestion question="Please enter your signature." feedback={false} sketchpad={{ canvasHeight: 300}} />\n'))),Object(l.b)(s.a,{value:"submitPlot",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<div>\n  <ScatterPlot  data={heartdisease} xval="Age" yval="Cost" />\n  <ImageQuestion question="Please adjust the range of values to show, change the axis labels and title of the plot, and submit your result." />\n</div>\n'))),Object(l.b)(s.a,{value:"solution",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ImageQuestion solution="https://bit.ly/3utaXOb" question="Please enter the Greek letter \'Gamma\'." feedback={false} sketchpad={{ canvasHeight: 300}} />\n')))))}d.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,d=u["".concat(l,".").concat(p)]||u[p]||m[p]||r;return n?i.a.createElement(d,o(o({ref:t},c),{},{components:n})):i.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},449:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},460:function(e,t,n){"use strict";var a=n(0),i=n(461);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},461:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},462:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(460),l=n(449),o=n(58),s=n.n(o);const c=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:u,groupId:m,className:p}=e,{tabGroupChoices:d,setTabGroupChoices:O}=Object(r.a)(),[f,j]=Object(a.useState)(o),g=a.Children.toArray(e.children),h=[];if(null!=m){const e=d[m];null!=e&&e!==f&&u.some((t=>t.value===e))&&j(e)}const v=e=>{const t=e.target,n=h.indexOf(t),a=g[n].props.value;j(a),null!=m&&O(m,a)},N=e=>{var t;let n;switch(e.keyCode){case b:const t=h.indexOf(e.target)+1;n=h[t]||h[0];break;case c:const a=h.indexOf(e.target)-1;n=h[a]||h[h.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},u.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>h.push(e),onKeyDown:N,onFocus:v,onClick:v},t)))),t?Object(a.cloneElement)(g.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},463:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);