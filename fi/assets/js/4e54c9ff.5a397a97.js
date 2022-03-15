"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7760],{603905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(a),c=r,v=p["".concat(u,".").concat(c)]||p[c]||d[c]||i;return a?n.createElement(v,o(o({ref:t},m),{},{components:a})):n.createElement(v,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},358215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(202784);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},409877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(487462),r=a(202784),i=a(972389),o=a(161419),l=a(386010),u="tabItem_LplD";function s(e){var t,a,i,s=e.lazy,m=e.block,d=e.defaultValue,p=e.values,c=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==h&&!f.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),y=g.tabGroupChoices,N=g.setTabGroupChoices,j=(0,r.useState)(h),C=j[0],w=j[1],S=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var T=y[c];null!=T&&T!==C&&f.some((function(e){return e.value===T}))&&w(T)}var x=function(e){var t=e.currentTarget,a=S.indexOf(t),n=f[a].value;n!==C&&(O(t),w(n),null!=c&&N(c,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=S.indexOf(e.currentTarget)+1;a=S[n]||S[0];break;case"ArrowLeft":var r=S.indexOf(e.currentTarget)-1;a=S[r]||S[S.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},v)},f.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return S.push(e)},onKeyDown:E,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,i.Z)();return r.createElement(s,(0,n.Z)({key:String(t)},e))}},144654:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return d},assets:function(){return p},toc:function(){return c},default:function(){return k}});var n=a(487462),r=a(263366),i=(a(202784),a(603905)),o=a(409877),l=a(358215),u=["components"],s={id:"shaped-form",title:"Shaped Form",sidebar_label:"Shaped Form"},m=void 0,d={unversionedId:"shaped-form",id:"shaped-form",title:"Shaped Form",description:"Komponentti, joka mahdollistaa muotojen n\xe4ytt\xe4misen, joka k\xe4ynnistyy kuvilla, joissa on alfakanava.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/shaped-form.md",sourceDirName:".",slug:"/shaped-form",permalink:"/fi/docs/shaped-form",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/shaped-form.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"shaped-form",title:"Shaped Form",sidebar_label:"Shaped Form"},sidebar:"docs",previous:{title:"Seal",permalink:"/fi/docs/seal"},next:{title:"Sortable Tree",permalink:"/fi/docs/sortable-tree"}},p={},c=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],v={toc:c};function k(e){var t=e.components,a=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Komponentti, joka mahdollistaa muotojen n\xe4ytt\xe4misen, joka k\xe4ynnistyy kuvilla, joissa on alfakanava."),(0,i.kt)("h2",{id:"vaihtoehdot"},"Vaihtoehdot"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": muototyyppi (joko ",(0,i.kt)("inlineCode",{parentName:"li"},"oktagoni"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kolmio"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"trapetsoidi"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"parallelogrammi"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"rumpu"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"pentagoni"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"heksa-"),"heksagoni",(0,i.kt)("inlineCode",{parentName:"li"},", "),"heptagoni",(0,i.kt)("inlineCode",{parentName:"li"},", "),"nonagoni",(0,i.kt)("inlineCode",{parentName:"li"},", "),"dekagoni",(0,i.kt)("inlineCode",{parentName:"li"},", "),"viiste",(0,i.kt)("inlineCode",{parentName:"li"},", "),"rabbet",(0,i.kt)("inlineCode",{parentName:"li"},", "),"vasen nuoli",(0,i.kt)("inlineCode",{parentName:"li"},", "),"oikea nuoli",(0,i.kt)("inlineCode",{parentName:"li"},", "),"vasen piste",(0,i.kt)("inlineCode",{parentName:"li"},", "),"oikea piste",(0,i.kt)("inlineCode",{parentName:"li"},", "),"vasen Chevron",(0,i.kt)("inlineCode",{parentName:"li"},", "),"oikea Chevron",(0,i.kt)("inlineCode",{parentName:"li"},", "),"t\xe4hti",(0,i.kt)("inlineCode",{parentName:"li"},", "),"risti",(0,i.kt)("inlineCode",{parentName:"li"},", "),"viesti",(0,i.kt)("inlineCode",{parentName:"li"},", "),"suljin",(0,i.kt)("inlineCode",{parentName:"li"},"tai"),"kehys",(0,i.kt)("inlineCode",{parentName:"li"},").. Default: "),"'star'`."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"src")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": taustakuvan URL-osoite. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": objektin tyyli, se voi sis\xe4lt\xe4\xe4 mit\xe4 tahansa CSS:\xe4\xe4, mukaan lukien animaatiot.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": tapahtumank\xe4sittelij\xe4, joka kutsutaan, kun kuvaa napsautetaan. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"esimerkkej\xe4"},"Esimerkkej\xe4"),(0,i.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Size Variation",value:"sizeVariation"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n<ShapedForm type="star" />\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n'))),(0,i.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style= {{ background: 'black', color: 'white', height: 280, width: 280}}>\n<ShapedForm type=\"star\"  style={{ background: 'red', boxShadow: 'inset 100px 88px 5px yellow'}}/>\n</div>\n"))),(0,i.kt)(l.Z,{value:"SizeVariation",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style= {{ background: 'darkgray', color: 'black', height: 280, width: '100%'}}>\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \n<ShapedForm type=\"cross\"  style={{ background: 'gold', width: 85, height: 100, margin: 10, marginTop: 22 }}/>\nsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n</div>\n")))))}k.isMDXComponent=!0}}]);