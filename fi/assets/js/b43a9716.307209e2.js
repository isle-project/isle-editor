"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38130],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),i=n(386010),r="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,i.Z)(r,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(202784),i=n(386010),r=n(152670),l=n(258433),o=n(952326),s=n(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))b.call(t,n)&&v(e,n,t[n]);return e};function h(e){var t,n;const{lazy:r,block:c,defaultValue:f,values:k,groupId:b,className:v}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=k?k:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),j=(0,l.l)(g,((e,t)=>e.value===t.value));if(j.length>0)throw new Error(`Docusaurus error: Duplicate values "${j.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===f?f:null!=(n=null!=f?f:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:T}=(0,o.U)(),[w,x]=(0,a.useState)(N),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=b){const e=O[b];null!=e&&e!==w&&g.some((t=>t.value===e))&&x(e)}const P=e=>{const t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==w&&(C(t),x(a),null!=b&&T(b,String(a)))},D=e=>{var t,n;let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;a=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=null!=(n=E[t])?n:E[E.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},v)},g.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=y({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>E.push(e),onKeyDown:D,onClick:P},n),l={className:(0,i.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":w===e})},d(r,m(l))),null!=t?t:e);var r,l}))),r?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function g(e){const t=(0,r.Z)();return a.createElement(h,y({key:String(t)},e))}},127205:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var a=n(603905),i=n(751361),r=n(440034),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&d(e,n,t[n]);return e};const f={id:"text-editor",title:"Text Editor",sidebar_label:"Text Editor"},k=void 0,b={unversionedId:"text-editor",id:"text-editor",title:"Text Editor",description:"Tekstieditori muistiinpanojen tai raporttien kirjoittamiseen. Tukee muistiinpanojen vienti\xe4 HTML- tai PDF-tiedostoina sek\xe4 automaattista l\xe4hett\xe4mist\xe4 ISLE-palvelimelle.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/text-editor.md",sourceDirName:".",slug:"/text-editor",permalink:"/fi/docs/text-editor",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/text-editor.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1658117079,formattedLastUpdatedAt:"18. hein\xe4k. 2022",frontMatter:{id:"text-editor",title:"Text Editor",sidebar_label:"Text Editor"},sidebar:"docs",previous:{title:"Gate",permalink:"/fi/docs/gate"},next:{title:"Sketchpad",permalink:"/fi/docs/sketchpad"}},v={},y=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],h={toc:y};function g(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},h),d),o(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Tekstieditori muistiinpanojen tai raporttien kirjoittamiseen. Tukee muistiinpanojen vienti\xe4 HTML- tai PDF-tiedostoina sek\xe4 automaattista l\xe4hett\xe4mist\xe4 ISLE-palvelimelle."),(0,a.kt)("h2",m({},{id:"vaihtoehdot"}),"Vaihtoehdot"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"allowSubmissions")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, voivatko opiskelijat l\xe4hett\xe4\xe4 raporttinsa palvelimelle.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"canLoadHTML")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, n\xe4ytet\xe4\xe4nk\xf6 painike tallennetun HTML-tiedoston lataamiseksi editoriin.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": editorin oletusteksti. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"history")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, sis\xe4lt\xe4\xe4k\xf6 editori historiann\xe4kym\xe4n. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mode")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": ohjaa tekstinmuokkaustilaa (joko ",(0,a.kt)("inlineCode",{parentName:"li"},"yksil\xf6llinen")," henkil\xf6kohtaiselle asiakirjalle, ",(0,a.kt)("inlineCode",{parentName:"li"},"ryhm\xe4")," ryhm\xe4kohtaiselle asiakirjalle, ",(0,a.kt)("inlineCode",{parentName:"li"},"yhteisty\xf6")," kaikille yhteiselle asiakirjalle tai ",(0,a.kt)("inlineCode",{parentName:"li"},"ryhm\xe4")," kohorttikohtaiselle asiakirjalle).. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'individual'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"resetModal")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"{title,body,buttonLabel,notificationTitle,notification,tooltip}"),": objekti, jolla mukautetaan modaalia asiakirjan nollaamiseksi (yleens\xe4 sit\xe4 ei pit\xe4isi muuttaa).. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"sendSubmissionEmails")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, l\xe4hetet\xe4\xe4nk\xf6 l\xe4hetyksen yhteydess\xe4 vahvistuss\xe4hk\xf6posteja PDF/HTML-tulosteen kanssa. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"voiceTimeout")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": aika millisekunneissa sen j\xe4lkeen, kun \xe4\xe4nitetyn \xe4\xe4nitiedoston osa on lis\xe4tty.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5000"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS-inline-tyylit. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",m({},{id:"esimerkkej\xe4"}),"Esimerkkej\xe4"),(0,a.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Default Value",value:"defaultValue"},{label:"Mode",value:"mode"},{label:"With Style",value:"withStyle"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<TextEditor  />\n"))),(0,a.kt)(r.Z,{value:"defaultValue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<TextEditor defaultValue={`# Welcome!\n\nThis is a text that uses **markdown**\n\n## Second Heading Level\n\n[Wikipedia Link](https://https://www.wikipedia.org/).\n`} />\n"))),(0,a.kt)(r.Z,{value:"mode",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<TextEditor defaultValue="This is reserved for an individual. But you can also allow groups, students cohorts, or everybody to join in and work collaboratively (setting the mode option will only have an effect in a live lesson, not this preview)." \nmode="individual" />\n'))),(0,a.kt)(r.Z,{value:"withStyle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<TextEditor  \n  defaultValue=\"[Generate CSS-Gradients Online!](https://cssgradient.io/)\"\n  style={{ \n    background: 'green',\n    background: 'radial-gradient(circle, rgba(251,213,112,0.7315301120448179) 0%,rgba(83,199,14,0.4514180672268907) 100%)' \n  }}\n/>\n")))))}g.isMDXComponent=!0}}]);