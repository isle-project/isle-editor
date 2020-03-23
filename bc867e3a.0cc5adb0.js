(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(10),i=(n(0),n(254)),l={id:"flippable-card",title:"Flippable Card",sidebar_label:"Flippable Card"},o={id:"flippable-card",title:"Flippable Card",description:"An ISLE component that allows two render two-sides.",source:"@site/docs/flippable-card.md",permalink:"/docs/flippable-card",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/flippable-card.md",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1584924745,sidebar_label:"Flippable Card",sidebar:"docs",previous:{title:"Engagement Meter",permalink:"/docs/engagement-meter"},next:{title:"JavaScript Shell",permalink:"/docs/js-shell"}},c=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],p={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"An ISLE component that allows two render two-sides."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'<FlippableCard\n    button="Click me!"\n    perspective={1400}\n    cardStyles={{\n        container: {\n            width: "70%",\n            height: 500,\n            marginBottom: 50\n        },\n        front: {\n            textAlign: \'center\',\n            fontSize: \'30px\',\n            color: \'orange\',\n            textDecoration: \'overline\',\n        },\n        back: {}\n    }}\n    flipSpeedBackToFront={1.2}\n    flipSpeedFrontToBack={0.9}      \n>\n    <div>\n        <img src="https://www.catster.com/wp-content/uploads/2018/07/Savannah-cat-long-body-shot.jpg" />\n        <br/>\n    </div>\n    <div>\n        <FreeTextQuestion\n            question="Backside"\n            solution="Enter solution"\n        />\n    </div>\n</FlippableCard>\n')),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://isle.heinz.cmu.edu/components/flippable-card/"}),"Open interactive preview")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"button")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": button label. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"cardStyles")," | ",Object(i.b)("inlineCode",{parentName:"li"},"{container,front,back}"),": allows to override the given styles. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{\n  'container': {},\n  'front': {},\n  'back': {}\n}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"draggable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the card may be dragged around. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"flipSpeedBackToFront")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": the speed by which the card turns from background to foreground, in seconds. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"flipSpeedFrontToBack")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": {number} the speed by which the card turns from foreground to background, in seconds. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"isFlipped")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": initial flip state of the card. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": callback invoked once the card is flipped; receives the current flipped status as its sole argument. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"oneTime")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": indicates whether the flip process may be executed just once. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"perspective")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": CSS property value to give 3d-positioned element a perspective. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1000"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"value")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": undefined. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": undefined. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),".")))}b.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},d=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(l,".").concat(u)]||d[u]||s[u]||i;return n?a.a.createElement(m,o({ref:t},p,{components:n})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);