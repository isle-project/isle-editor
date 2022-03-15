"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7849],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),c=i,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(202784);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(487462),i=n(202784),r=n(972389),l=n(161419),u=n(386010),o="tabItem_LplD";function s(e){var t,n,r,s=e.lazy,p=e.block,m=e.defaultValue,d=e.values,c=e.groupId,k=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),N=g.tabGroupChoices,h=g.setTabGroupChoices,C=(0,i.useState)(y),j=C[0],S=C[1],x=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var w=N[c];null!=w&&w!==j&&v.some((function(e){return e.value===w}))&&S(w)}var D=function(e){var t=e.currentTarget,n=x.indexOf(t),a=v[n].value;a!==j&&(T(t),S(a),null!=c&&h(c,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.currentTarget)-1;n=x[i]||x[x.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},k)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:D,onClick:D},r,{className:(0,u.Z)("tabs__item",o,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),s?(0,i.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function p(e){var t=(0,r.Z)();return i.createElement(s,(0,a.Z)({key:String(t)},e))}},118395:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},assets:function(){return d},toc:function(){return c},default:function(){return f}});var a=n(487462),i=n(263366),r=(n(202784),n(603905)),l=n(409877),u=n(358215),o=["components"],s={id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},p=void 0,m={unversionedId:"input/slider-input",id:"input/slider-input",title:"Slider Input",description:"\u0160liau\u017eiklio \u012fvesties komponentas. Gali b\u016bti naudojamas kaip ISLE prietais\u0173 skydelio dalis arba atskirai. Pastaruoju atveju norite apdoroti pakeitimus naudodami atribut\u0105 onChange arba susieti vert\u0119 su globaliu kintamuoju naudodami atribut\u0105 bind.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/input/slider.md",sourceDirName:"input",slug:"/input/slider-input",permalink:"/lt/docs/input/slider-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/slider.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},sidebar:"docs",previous:{title:"Select Input",permalink:"/lt/docs/input/select-input"},next:{title:"Text Area",permalink:"/lt/docs/input/text-area"}},d={},c=[{value:"Parinktys",id:"parinktys",level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",level:2}],k={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u0160liau\u017eiklio \u012fvesties komponentas. Gali b\u016bti naudojamas kaip ISLE prietais\u0173 skydelio dalis arba atskirai. Pastaruoju atveju norite apdoroti pakeitimus naudodami atribut\u0105 ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," arba susieti vert\u0119 su globaliu kintamuoju naudodami atribut\u0105 ",(0,r.kt)("inlineCode",{parentName:"p"},"bind"),"."),(0,r.kt)("h2",{id:"parinktys"},"Parinktys"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Pradin\u0117 slankiklio vert\u0117. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar slankiklio \u012fvestis yra aktyvi, ar ne. Jei nustatyta reik\u0161m\u0117 true, slankiklis bus ekrane, nors ir pilkos spalvos.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inline")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar slankikl\u012f d\u0117ti \u012f teksto eilut\u0119, ar u\u017e jos rib\u0173.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legend")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u012fvesties antra\u0161t\u0117. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"max")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Did\u017eiausia slankiklio vert\u0117. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"maxLabel")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": vietoj did\u017eiausios reik\u0161m\u0117s rodyti etiket\u0119 slankiklio de\u0161in\u0117je.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"min")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Ma\u017eiausia slankiklio vert\u0117. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"minLabel")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": etiket\u0117 turi b\u016bti rodoma kair\u0117je \u0161liau\u017eiklio pus\u0117je, o ne ma\u017eiausia vert\u0117.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": gr\u012f\u017etamasis skambutis, i\u0161kvie\u010diamas su nauja verte, kai pasikei\u010dia slankiklio vert\u0117.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"precision")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u012fvesties apvalinimas. Vert\u0117 bus suapvalinta taip, kad reik\u0161mini\u0173 skaitmen\u0173 b\u016bt\u0173 ne daugiau nei tikslumas. Pavyzd\u017eiui, jei norima naudoti tik sveikuosius skai\u010dius, bus naudojamas 10 tikslumas, o jei norima suapvalinti iki \u0161imt\u0173j\u0173 skaitmen\u0173, bus naudojamas 0,001 tikslumas.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(number|string)"),": slankiklio \u017eingsnio dydis. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideTooltip")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar sl\u0117pti \u012franki\u0173 u\u017euomin\u0105. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS eilut\u0117s stiliai. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"numberInputStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Numeri\u0173 \u012fvesties komponento CSS eilut\u0117s stiliai. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rangeInputStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u012fvesties komponento CSS eilut\u0117s stilius. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",{id:"pavyzd\u017eiai"},"Pavyzd\u017eiai"),(0,r.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Mathematical Symbols via LaTeX",value:"mathematicalSymbols"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SliderInput\n    legend="Success Probability"\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n'))),(0,r.kt)(u.Z,{value:"mathematicalSymbols",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SliderInput\n    legend={<span>$\\sigma$ (standard deviation)</span>}\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n"))),(0,r.kt)(u.Z,{value:"customStyle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SliderInput\n    legend=\"Success Probability\"\n    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}\n    rangeInputStyle ={{ minWidth: 500}}\n    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}\n    defaultValue={0.5}\n    min={0}\n    max={200}\n    step={0.01}\n/>\n")))))}f.isMDXComponent=!0}}]);