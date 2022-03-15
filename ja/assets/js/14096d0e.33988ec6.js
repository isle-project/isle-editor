"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7601],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(202784);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(487462),r=n(202784),i=n(972389),l=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===p?p:null!=(t=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),h=g.tabGroupChoices,y=g.setTabGroupChoices,C=(0,r.useState)(N),w=C[0],T=C[1],x=[],D=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=h[d];null!=O&&O!==w&&b.some((function(e){return e.value===O}))&&T(O)}var j=function(e){var t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==w&&(D(t),T(a),null!=d&&y(d,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},977789:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return k}});var a=n(487462),r=n(263366),i=(n(202784),n(603905)),l=n(409877),o=n(358215),u=["components"],s={id:"select-question",title:"Select Question",sidebar_label:"Select Question"},c=void 0,p={unversionedId:"questions/select-question",id:"questions/select-question",title:"Select Question",description:"\u8cea\u554f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u9078\u629e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/questions/select.md",sourceDirName:"questions",slug:"/questions/select-question",permalink:"/ja/docs/questions/select-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/select.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622607303,formattedLastUpdatedAt:"2021/6/2",frontMatter:{id:"select-question",title:"Select Question",sidebar_label:"Select Question"},sidebar:"docs",previous:{title:"Range Question",permalink:"/ja/docs/questions/range-question"},next:{title:"Select Question Matrix",permalink:"/ja/docs/questions/select-question-matrix"}},m={},d=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",level:2}],f={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8cea\u554f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"question")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u629e\u4e00\u554f\u984c. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),": \u5b66\u751f\u304c\u9078\u629e\u3067\u304d\u308b\u89e3\u7b54\u306e\u9078\u629e\u80a2\u304c\u3042\u308a\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"solution")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": options",(0,i.kt)("inlineCode",{parentName:"li"},"\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u8981\u7d20\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9. Default:"),"none`."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"preselected")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u9078\u629e\u3055\u308c\u305f\u89e3\u7b54\u9078\u629e\u80a2\u306e\u7d22\u5f15. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"inline")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30a4\u30f3\u30e9\u30a4\u30f3\u3067\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u30d2\u30f3\u30c8\u306e\u914d\u7f6e (",(0,i.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom")," \u306e\u3044\u305a\u308c\u304b). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hints")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u89e3\u7b54\u306e\u30d2\u30f3\u30c8. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"feedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"chat")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u8981\u7d20\u304c\u7d71\u5408\u3055\u308c\u305f\u30c1\u30e3\u30c3\u30c8\u3092\u6301\u3064\u3079\u304d\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u306f\u3001\u5b66\u7fd2\u8005\u304c\u89e3\u7b54\u3092\u63d0\u51fa\u3057\u305f\u5f8c\u306b\u3001\u6b63\u89e3\u3092\u542b\u3080\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"failureMsg")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u5b66\u751f\u304c\u9593\u9055\u3063\u305f\u7b54\u3048\u3092\u9078\u629e\u3057\u305f\u5834\u5408\u306b\u8868\u793a\u3055\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Not quite, try again!'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"successMsg")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u5b66\u751f\u304c\u6b63\u89e3\u3092\u9078\u629e\u3057\u305f\u3068\u304d\u306b\u8868\u793a\u3055\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'That's the correct answer!'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"points")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u63a1\u70b9\u70b9\u6570. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": \u30b3\u30fc\u30eb\u30d0\u30c3\u30af. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": \u6700\u521d\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u3001\u30a2\u30f3\u30b5\u30fc\u304c\u6b63\u3057\u304f\u56de\u7b54\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u3092\u793a\u3059 ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," (\u8a72\u5f53\u3059\u308b\u5834\u5408\u306f ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),") \u3068\u30012\u756a\u76ee\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u4e0e\u3048\u3089\u308c\u305f\u30a2\u30f3\u30b5\u30fc\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,i.kt)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Inline",value:"inline"},{label:"With Hints",value:"withHints"},{label:"Submit Function Hints",value:"submitFunction"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestion\n    question=\"The usual t-test is\"\n    solution={2}\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n/>\n"))),(0,i.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestion\n    question=\"The usual t-test is\"\n    solution={2}\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n    style={{ background: 'gainsboro', boxShadow: '0 0 10px black'}}\n/>\n"))),(0,i.kt)(o.Z,{value:"inline",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"The usual t-test is:\n<SelectQuestion\n    question=\"The usual t-test is\"\n    solution={2}\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n    inline\n/> ... so you can us it in the midst of a longer paragraph\n"))),(0,i.kt)(o.Z,{value:"withHints",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SelectQuestion\n    question="White is "\n    solution={1}\n    options={[\n        \'a primary color\',\n        \'not a primary color\'\n    ]}\n    hints={[ "There are 3 primary colors", "Red is a primary color", "and so is yellow" ]}\n/>\n'))),(0,i.kt)(o.Z,{value:"submitFunction",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestion\n    question=\"Select the primary color\"\n    solution={2}\n    options={[\n        'orange',\n        'white',\n        'red'\n    ]}\n    onSubmit={(result) => {\n        switch ( result ) {\n            case 'orange':\n                alert( 'No, orange is a mix of yellow and red.' );\n            break;\n            case 'white':\n                alert( 'White does not count as a color.' );\n            break;\n            case 'red':\n                alert( 'That is correct.' );\n            break;\n        }\n    }}\n    provideFeedback={false}\n/> \n")))))}k.isMDXComponent=!0}}]);