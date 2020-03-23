(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(1),i=n(10),a=(n(0),n(254)),o={id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},l={id:"proportions-survey",title:"Proportions Survey",description:"Component that allows a group of people to vote on the weights and importance of given options.",source:"@site/docs/proportions-survey.md",permalink:"/docs/proportions-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/proportions-survey.md",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1584924745,sidebar_label:"Proportions Survey",sidebar:"docs",previous:{title:"Number Survey",permalink:"/docs/number-survey"},next:{title:"Survey Generator",permalink:"/docs/survey-generator"}},p=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],b={rightToc:p};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Component that allows a group of people to vote on the weights and importance of given options."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'<ProportionsSurvey \n    user\n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://isle.heinz.cmu.edu/components/proportions-survey/"}),"Open interactive preview")),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"id")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string (required)"),": undefined. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether one wishes to allow students to answer the survey multiple times. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"anonymous")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether student answers are anonymized. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"colors")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array"),": array of colors for the pie chart components. If not defined, a custom color scale will be used. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"[\n  'tomato',\n  'orange',\n  'gold',\n  'darkcyan',\n  'salmon',\n  'lightgreen',\n  'gainsboro',\n  'lightpurple',\n  'darkkhaki',\n  'darkseagreen'\n]"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"disabled")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the survey is deactivated. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"group")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": group display heading. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'group results'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"groupHeight")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": proportions input height for group display (in px). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"100"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"groupInnerRadius")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": inner radius of proportions pie chart for group display (in px). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"40"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"legends")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array"),": legend labels that describe the options to be weighed. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"margin")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": proportion input margin (in px). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'40px'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"nElements")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": number of elements that shall be weighed. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"6"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": callback function invoked once students submits an answer. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"personalHeight")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": proportions input height for individual student (in px). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"200"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"personalInnerRadius")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": inner radius of proportions pie chart for individual student (in px). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"60"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"precision")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": displayed precision of proportion values. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"2"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"question")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": the question to be displayed. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"step")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": the step of the arrows seen when hovering the cursor above the input box. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0.25"),".")))}c.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),c=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=c(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||a;return n?i.a.createElement(d,l({ref:t},b,{components:n})):i.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<a;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);