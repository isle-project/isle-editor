(self.webpackChunk=self.webpackChunk||[]).push([[2471],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,f=m["".concat(s,".").concat(p)]||m[p]||c[p]||r;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},855064:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(202784),i=n(79443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,d=39;var c=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,c=e.values,m=e.groupId,p=e.className,f=r(),h=f.tabGroupChoices,k=f.setTabGroupChoices,v=(0,a.useState)(i),g=v[0],b=v[1],y=a.Children.toArray(e.children),N=[];if(null!=m){var C=h[m];null!=C&&C!==g&&c.some((function(e){return e.value===C}))&&b(C)}var w=function(e){var t=e.currentTarget,n=N.indexOf(t),a=c[n].value;b(a),null!=m&&(k(m,a),setTimeout((function(){var e,n,a,i,r,l,o,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,l=window,o=l.innerHeight,u=l.innerWidth,n>=0&&r<=u&&i<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case d:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case u:var i=N.indexOf(e.target)-1;n=N[i]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},p)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(202784).createContext)(void 0);t.Z=a},821682:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var a=n(722122),i=n(419756),r=(n(202784),n(603905)),l=n(855064),o=n(358215),s=["components"],u={id:"slider",title:"Slider",sidebar_label:"Slider"},d=void 0,c={unversionedId:"slider",id:"slider",isDocsHomePage:!1,title:"Slider",description:"Olyan komponens, amely a gyermekeit diavet\xedt\xe9sben vagy k\xf6rhint\xe1ban jelen\xedti meg.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/slider.md",sourceDirName:".",slug:"/slider",permalink:"/hu/docs/slider",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/slider.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1627947125,formattedLastUpdatedAt:"2021. 08. 02.",frontMatter:{id:"slider",title:"Slider",sidebar_label:"Slider"},sidebar:"docs",previous:{title:"Scrolling Text",permalink:"/hu/docs/scrolling-text"},next:{title:"Switch Components",permalink:"/hu/docs/switch"}},m=[{value:"Opci\xf3k",id:"opci\xf3k",children:[]},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",children:[]}],p={toc:m};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Olyan komponens, amely a gyermekeit diavet\xedt\xe9sben vagy k\xf6rhint\xe1ban jelen\xedti meg."),(0,r.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"title")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": a diavet\xedt\xe9s / k\xf6rhinta c\xedme, amely a tetej\xe9n jelenik meg. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dots")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": alul pontok megjelen\xedt\xe9se a gyors navig\xe1l\xe1shoz b\xe1rmelyik di\xe1hoz. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fade")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a di\xe1k k\xf6z\xf6tti \xe1tmenetre haszn\xe1ljon-e halv\xe1ny\xedt\xe1st.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"draggable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a felhaszn\xe1l\xf3k h\xfazhatj\xe1k-e a di\xe1kat a k\xf6z\xf6tt\xfck val\xf3 navig\xe1l\xe1shoz.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pagination")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': hogy a lapoz\xe1s a "fels\u0151", "als\xf3" vagy "mindk\xe9t" oldalon jelenjen meg.. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"goto")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Ha a tulajdons\xe1g megv\xe1ltozik, a komponens a kiv\xe1lasztott indexszel rendelkez\u0151 di\xe1ra ugrik.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"infinite")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a diavet\xedt\xe9s k\xf6rbetekeredjen-e a tartalma k\xf6r\xfcl.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"interval")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": be\xe1ll\xedt egy id\u0151intervallumot az automatikus cs\xfaszdav\xe1lt\xe1shoz. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"swipe")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": lehet\u0151v\xe9 teszi a drag/swipe viselked\xe9st. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline st\xedlusok. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": a k\xf6vetkez\u0151/el\u0151z\u0151 gombokra val\xf3 kattint\xe1skor el\u0151h\xedvott h\xedv\xe1svisszajelz\xe9s. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onClick() {}"),".")),(0,r.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,r.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Customize Pagination",value:"pagination"},{label:"Slideshow",value:"slideshow"},{label:"Custom Styling",value:"customStyling"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Slider title=\"Questions to explore:\" >\n    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>\n    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>\n    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>\n    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>\n</Slider>\n"))),(0,r.kt)(o.Z,{value:"pagination",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Slider title=\"Questions to explore:\" pagination=\"both\" dots={false} >\n    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>\n    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>\n    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>\n    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>\n</Slider>\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use pagination buttons both at the top and bottom when the height of the content exceeds the browser window and requires scrolling.")))),(0,r.kt)(o.Z,{value:"slideshow",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Slider style={{ height: 400, background: \'black\' }} infinite interval={2000} >\n    <img src="https://bit.ly/3aM4OU7" alt="Untersberg Mountain Salzburg (by Giuseppe Milo, CC BY 3.0)" />\n    <img src="https://bit.ly/3rCm0Cu" alt="British Landscape (by Phil Riley, Pixabay License)" />\n    <img src="https://bit.ly/3cUkibu" alt="Mountains Landscape Sunset Dusk (Pixabay License)" />\n    <img src="https://bit.ly/2Z4fqbj" alt="Landscape with Trees (CC0 - Public Domain)" /> \n</Slider>\n'))),(0,r.kt)(o.Z,{value:"customStyling",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Slider style={{ textShadow: '0 2px 12px black', textAlign: 'center', fontSize: 90 }} infinite interval={1000} >\n    <div>FIVE</div>\n    <div>FOUR</div>\n    <div>THREE</div>\n    <div>TWO</div>\n    <div>ONE</div>\n    <div>ZERO</div>\n</Slider>\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);