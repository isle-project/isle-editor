"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3728],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,f=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},962372:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),o=["components"],l={id:"random-forest",title:"Random Forest",sidebar_label:"Random Forest"},s=void 0,p={unversionedId:"models/random-forest",id:"models/random-forest",title:"Random Forest",description:"Random Forests.",source:"@site/docs/models/random-forest.md",sourceDirName:"models",slug:"/models/random-forest",permalink:"/docs/models/random-forest",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/random-forest.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,formattedLastUpdatedAt:"3/1/2021",frontMatter:{id:"random-forest",title:"Random Forest",sidebar_label:"Random Forest"},sidebar:"docs",previous:{title:"Principal Component Analysis",permalink:"/docs/models/principal-component-analysis"},next:{title:"Simple Linear Regression",permalink:"/docs/models/simple-linear-regression"}},m=[{value:"Options",id:"options",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Random Forests."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": object of value arrays. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"y")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": outcome variable. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"x")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": one or more predictor variables. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": currently only ",(0,i.kt)("inlineCode",{parentName:"li"},"Classification")," for categorical responses is supported. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Classification'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": array of variables in ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," that are ",(0,i.kt)("inlineCode",{parentName:"li"},"quantitative"),". Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nTrees")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": number of trees. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nTry")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": number of predictors to check at each split. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"impurityMeasure")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": impurity measure (",(0,i.kt)("inlineCode",{parentName:"li"},"gini")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"entropy"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'gini'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"scoreThreshold")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": score threshold for split. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"maxTreeDepth")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": maximum tree depth. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"20"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"minItemsCount")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": minimum # of observations in leaf nodes. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback invoked with model object when clicking on the predict button. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RandomForest \n    data={heartdisease} \n    type=\"Classification\"\n    y=\"Complications\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}d.isMDXComponent=!0}}]);