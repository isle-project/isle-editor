(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),r=(n(0),n(411)),l={id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},o={unversionedId:"input/voice-input",id:"input/voice-input",isDocsHomePage:!1,title:"Voice Input",description:"A voice input component.",source:"@site/docs/input/voice.md",slug:"/input/voice-input",permalink:"/docs/input/voice-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/voice.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612731787,sidebar_label:"Voice Input",sidebar:"docs",previous:{title:"Text Input",permalink:"/docs/input/text-input"},next:{title:"Accordion",permalink:"/docs/accordion"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A voice input component."),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"autorecord")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to automatically start recording. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": default text value. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"grammars")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": speech grammar list (unsupported). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"legend")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": legend displayed in front of input field. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"mode")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": set to ",Object(r.b)("inlineCode",{parentName:"li"},"full")," to display a text input field alongside the microphone, ",Object(r.b)("inlineCode",{parentName:"li"},"status")," to only display a statusbar with the transcribed texts, ",Object(r.b)("inlineCode",{parentName:"li"},"microphone")," to show just a button to toggle recording, or ",Object(r.b)("inlineCode",{parentName:"li"},"none")," when the voice input should be invisible and purely controlled via hotkeys / voice commands. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'full'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"maxAlternatives")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": maximum number of alternatives provided per speech recognition result. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback function invoked when text input value is updated. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onClick")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback function invoked when clicking on the microphone button. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onClick() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onFinalText")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback function invoked once final text is received. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onFinalText() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onRecordingStart")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback function invoked when recording is started. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onRecordingStart() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onRecordingStop")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback function invoked once recording is stopped. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onRecordingStop() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSegment")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback function invoked with text segments. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onSegment() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),': callback function when submitting text input value by hitting "Enter". Default: ',Object(r.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"placeholder")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": text input placeholder. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"remote")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": object with ",Object(r.b)("inlineCode",{parentName:"li"},"start"),", ",Object(r.b)("inlineCode",{parentName:"li"},"stop"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"toggle")," and associated hotkeys. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"className")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": class name. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"timeout")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": number of milliseconds after which to timeout the recording. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"stopTooltip")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": tooltip message displayed while recording. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"startTooltip")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": tooltip message displayed while not recording. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tooltipPlacement")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": direction of the tooltip. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'left'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"width")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": voice input width (in px). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"500"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"height")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": voice input height (in px). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"36"),".")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VoiceInput\n    langage="en-US"\n    defaultValue="Enter text"\n/>\n')))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,s=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.a.createElement(s,o(o({ref:t},b),{},{components:n})):a.a.createElement(s,o({ref:t},b))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var b=2;b<r;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);