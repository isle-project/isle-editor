"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2471],{603905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(202784);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=l,v=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return a?n.createElement(v,r(r({ref:t},d),{},{components:a})):n.createElement(v,r({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},358215:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(202784);function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},409877:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(487462),l=a(202784),i=a(972389),r=a(161419),o=a(386010),s="tabItem_LplD";function u(e){var t,a,i,u=e.lazy,d=e.block,p=e.defaultValue,m=e.values,c=e.groupId,v=e.className,h=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,r.lx)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,r.UB)(),y=b.tabGroupChoices,N=b.setTabGroupChoices,w=(0,l.useState)(g),C=w[0],x=w[1],z=[],j=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var O=y[c];null!=O&&O!==C&&f.some((function(e){return e.value===O}))&&x(O)}var T=function(e){var t=e.currentTarget,a=z.indexOf(t),n=f[a].value;n!==C&&(j(t),x(n),null!=c&&N(c,n))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=z.indexOf(e.currentTarget)+1;a=z[n]||z[0];break;case"ArrowLeft":var l=z.indexOf(e.currentTarget)-1;a=z[l]||z[z.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},f.map((function(e){var t=e.value,a=e.label,i=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return z.push(e)},onKeyDown:S,onFocus:T,onClick:T},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),u?(0,l.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,i.Z)();return l.createElement(u,(0,n.Z)({key:String(t)},e))}},747396:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},assets:function(){return m},toc:function(){return c},default:function(){return h}});var n=a(487462),l=a(263366),i=(a(202784),a(603905)),r=a(409877),o=a(358215),s=["components"],u={id:"slider",title:"Slider",sidebar_label:"Slider"},d=void 0,p={unversionedId:"slider",id:"slider",title:"Slider",description:"Olyan komponens, amely a gyermekeit diavet\xedt\xe9sben vagy k\xf6rhint\xe1ban jelen\xedti meg.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/slider.md",sourceDirName:".",slug:"/slider",permalink:"/hu/docs/slider",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/slider.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1627947125,formattedLastUpdatedAt:"2021. 08. 02.",frontMatter:{id:"slider",title:"Slider",sidebar_label:"Slider"},sidebar:"docs",previous:{title:"Scrolling Text",permalink:"/hu/docs/scrolling-text"},next:{title:"Switch Components",permalink:"/hu/docs/switch"}},m={},c=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],v={toc:c};function h(e){var t=e.components,a=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Olyan komponens, amely a gyermekeit diavet\xedt\xe9sben vagy k\xf6rhint\xe1ban jelen\xedti meg."),(0,i.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": a diavet\xedt\xe9s / k\xf6rhinta c\xedme, amely a tetej\xe9n jelenik meg. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dots")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": alul pontok megjelen\xedt\xe9se a gyors navig\xe1l\xe1shoz b\xe1rmelyik di\xe1hoz. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fade")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a di\xe1k k\xf6z\xf6tti \xe1tmenetre haszn\xe1ljon-e halv\xe1ny\xedt\xe1st.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"draggable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a felhaszn\xe1l\xf3k h\xfazhatj\xe1k-e a di\xe1kat a k\xf6z\xf6tt\xfck val\xf3 navig\xe1l\xe1shoz.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pagination")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),': hogy a lapoz\xe1s a "fels\u0151", "als\xf3" vagy "mindk\xe9t" oldalon jelenjen meg.. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"goto")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": Ha a tulajdons\xe1g megv\xe1ltozik, a komponens a kiv\xe1lasztott indexszel rendelkez\u0151 di\xe1ra ugrik.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"infinite")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a diavet\xedt\xe9s k\xf6rbetekeredjen-e a tartalma k\xf6r\xfcl.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"interval")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": be\xe1ll\xedt egy id\u0151intervallumot az automatikus cs\xfaszdav\xe1lt\xe1shoz. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"swipe")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": lehet\u0151v\xe9 teszi a drag/swipe viselked\xe9st. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline st\xedlusok. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": a k\xf6vetkez\u0151/el\u0151z\u0151 gombokra val\xf3 kattint\xe1skor el\u0151h\xedvott h\xedv\xe1svisszajelz\xe9s. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onClick() {}"),".")),(0,i.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,i.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Customize Pagination",value:"pagination"},{label:"Slideshow",value:"slideshow"},{label:"Custom Styling",value:"customStyling"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Slider title=\"Questions to explore:\" >\n    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>\n    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>\n    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>\n    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>\n</Slider>\n"))),(0,i.kt)(o.Z,{value:"pagination",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Slider title=\"Questions to explore:\" pagination=\"both\" dots={false} >\n    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>\n    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>\n    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>\n    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>\n</Slider>\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use pagination buttons both at the top and bottom when the height of the content exceeds the browser window and requires scrolling.")))),(0,i.kt)(o.Z,{value:"slideshow",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Slider style={{ height: 400, background: \'black\' }} infinite interval={2000} >\n    <img src="https://bit.ly/3aM4OU7" alt="Untersberg Mountain Salzburg (by Giuseppe Milo, CC BY 3.0)" />\n    <img src="https://bit.ly/3rCm0Cu" alt="British Landscape (by Phil Riley, Pixabay License)" />\n    <img src="https://bit.ly/3cUkibu" alt="Mountains Landscape Sunset Dusk (Pixabay License)" />\n    <img src="https://bit.ly/2Z4fqbj" alt="Landscape with Trees (CC0 - Public Domain)" /> \n</Slider>\n'))),(0,i.kt)(o.Z,{value:"customStyling",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Slider style={{ textShadow: '0 2px 12px black', textAlign: 'center', fontSize: 90 }} infinite interval={1000} >\n    <div>FIVE</div>\n    <div>FOUR</div>\n    <div>THREE</div>\n    <div>TWO</div>\n    <div>ONE</div>\n    <div>ZERO</div>\n</Slider>\n")))))}h.isMDXComponent=!0}}]);