"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4541],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(487462),l=n(202784),r=n(972389),i=n(275773),o=n(386010),u="tabItem_LplD";function p(e){var t,n,r,p=e.lazy,s=e.block,c=e.defaultValue,d=e.values,m=e.groupId,k=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),g=N.tabGroupChoices,h=N.setTabGroupChoices,C=(0,l.useState)(y),S=C[0],j=C[1],T=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=g[m];null!=O&&O!==S&&v.some((function(e){return e.value===O}))&&j(O)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==S&&(w(t),j(a),null!=m&&h(m,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var l=T.indexOf(e.currentTarget)-1;n=T[l]||T[T.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},k)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:E,onClick:E},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),p?(0,l.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function s(e){var t=(0,r.Z)();return l.createElement(p,(0,a.Z)({key:String(t)},e))}},512467:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return k}});var a=n(487462),l=n(263366),r=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],p={id:"flippable-card",title:"Flippable Card",sidebar_label:"Flippable Card"},s=void 0,c={unversionedId:"flippable-card",id:"flippable-card",title:"Flippable Card",description:"ISLE-komponentti, joka sallii kahden puolen render\xf6innin.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/flippable-card.md",sourceDirName:".",slug:"/flippable-card",permalink:"/fi/docs/flippable-card",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/flippable-card.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"flippable-card",title:"Flippable Card",sidebar_label:"Flippable Card"},sidebar:"docs",previous:{title:"Draggable List",permalink:"/fi/docs/draggable-list"},next:{title:"JavaScript Shell",permalink:"/fi/docs/js-shell"}},d=[{value:"Vaihtoehdot",id:"vaihtoehdot",children:[],level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",children:[],level:2}],m={toc:d};function k(e){var t=e.components,n=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ISLE-komponentti, joka sallii kahden puolen render\xf6innin."),(0,r.kt)("h2",{id:"vaihtoehdot"},"Vaihtoehdot"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"button")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": painikkeen etiketti. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"draggable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ohjaa, voiko korttia vet\xe4\xe4 ymp\xe4riins\xe4. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"flipSpeedBackToFront")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": nopeus, jolla kortti vaihtuu taustasta etualalle, sekunteina.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"flipSpeedFrontToBack")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": nopeus, jolla kortti vaihtuu etualalta taustalle, sekunteina.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"oneTime")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ilmoittaa, voidaanko k\xe4\xe4nt\xe4misprosessi suorittaa vain kerran.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"perspective")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": CSS-ominaisuuden arvo antaa 3d-sijoitetulle elementille perspektiivin. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1000"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"size")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),': kortin koko (asettaa kortin "leveyden" ja "korkeuden").. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"250"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, onko k\xe4\xe4nnett\xe4v\xe4 kortti pois k\xe4yt\xf6st\xe4. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": Kortin flip-tila (valvottavan komponentin osalta). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kortin alkuper\xe4inen k\xe4\xe4nt\xf6tila. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"containerStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": S\xe4ili\xf6n CSS-tyyli. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"frontStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Etukortin CSS-tyyli. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"backStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Takakortin CSS-tyyli. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback, jota kutsutaan, kun kortti on k\xe4\xe4nnetty; saa ainoana argumenttinaan nykyisen k\xe4\xe4nnetyn tilan.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,r.kt)("h2",{id:"esimerkkej\xe4"},"Esimerkkej\xe4"),(0,r.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With CSS",value:"withCSS"},{label:"Slow Motion",value:"slowMo"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FlippableCard containerStyle={{ float: \'none\' }} size={200}>\n  <img src="https://bit.ly/2YU5EbU" />\n  <img src="https://bit.ly/3aGv9mp" />\n</FlippableCard>\n'))),(0,r.kt)(o.Z,{value:"withCSS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FlippableCard \n  containerStyle={{ float: 'none' }} \n  frontStyle={{ fontSize: 50, textAlign: 'center' }} \n  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} \n  >\n    <div>\n      FRONT\n    </div>\n    <div>\n      BACK\n    </div>\n</FlippableCard>\n"))),(0,r.kt)(o.Z,{value:"slowMo",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FlippableCard \n  flipSpeedBackToFront={7} \n  flipSpeedFrontToBack={7}   \n  containerStyle={{ float: 'none' }} \n  frontStyle={{ fontSize: 50, textAlign: 'center' }} \n  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} \n  >\n    <div>\n      FRONT\n    </div>\n    <div>\n      BACK\n    </div>\n</FlippableCard>\n")))))}k.isMDXComponent=!0}}]);