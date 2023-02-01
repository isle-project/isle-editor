"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38334],{603905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return b}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,b=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return t?a.createElement(b,o(o({ref:n},u),{},{components:t})):a.createElement(b,o({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},440034:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(202784),r=t(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function p({children:e,hidden:n,className:t}){return a.createElement("div",((e,n)=>{for(var t in n||(n={}))c.call(n,t)&&u(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&u(e,t,n[t]);return e})({role:"tabpanel",className:(0,r.Z)(l,t)},{hidden:n}),e)}},751361:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(202784),r=t(386010),l=t(152670),o=t(258433),i=t(952326),c=t(638849),s="tabList__CuJ",u="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,g=(e,n)=>{for(var t in n||(n={}))f.call(n,t)&&v(e,t,n[t]);if(b)for(var t of b(n))k.call(n,t)&&v(e,t,n[t]);return e};function y(e){var n,t;const{lazy:l,block:p,defaultValue:b,values:f,groupId:k,className:v}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:y.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),x=(0,o.l)(h,((e,n)=>e.value===n.value));if(x.length>0)throw new Error(`Docusaurus error: Duplicate values "${x.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===b?b:null!=(t=null!=b?b:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==w&&!h.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:S}=(0,i.U)(),[O,C]=(0,a.useState)(w),j=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=k){const e=N[k];null!=e&&e!==O&&h.some((n=>n.value===e))&&C(e)}const T=e=>{const n=e.currentTarget,t=j.indexOf(n),a=h[t].value;a!==O&&(E(n),C(a),null!=k&&S(k,String(a)))},P=e=>{var n,t;let a=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;a=null!=(n=j[t])?n:j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;a=null!=(t=j[n])?t:j[j.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},v)},h.map((({value:e,label:n,attributes:t})=>{return a.createElement("li",(l=g({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>j.push(e),onKeyDown:P,onClick:T},t),o={className:(0,r.Z)("tabs__item",u,null==t?void 0:t.className,{"tabs__item--active":O===e})},m(l,d(o))),null!=n?n:e);var l,o}))),l?(0,a.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}function h(e){const n=(0,l.Z)();return a.createElement(y,g({key:String(n)},e))}},196381:function(e,n,t){t.r(n),t.d(n,{assets:function(){return v},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return b},metadata:function(){return k},toc:function(){return g}});var a=t(603905),r=t(751361),l=t(440034),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&m(e,t,n[t]);if(s)for(var t of s(n))p.call(n,t)&&m(e,t,n[t]);return e};const b={id:"multi-cards",title:"Multi Cards",sidebar_label:"Multi Cards"},f=void 0,k={unversionedId:"multi-cards",id:"multi-cards",title:"Multi Cards",description:"Een ISLE-component die u in staat stelt om meerdere flippable kaarten te maken en te besturen (bijvoorbeeld in een spel van Memory).",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/multi-cards.md",sourceDirName:".",slug:"/multi-cards",permalink:"/nl/docs/multi-cards",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/multi-cards.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614123017,formattedLastUpdatedAt:"23 feb. 2021",frontMatter:{id:"multi-cards",title:"Multi Cards",sidebar_label:"Multi Cards"},sidebar:"docs",previous:{title:"Likert Scale",permalink:"/nl/docs/likert-scale"},next:{title:"QR Code",permalink:"/nl/docs/qrcode"}},v={},g=[{value:"Opties",id:"opties",level:2},{value:"Voorbeelden",id:"voorbeelden",level:2}],y={toc:g};function h(e){var n,t=e,{components:o}=t,m=((e,n)=>{var t={};for(var a in e)u.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&s)for(var a of s(e))n.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=d(d({},y),m),i(n,c({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Een ISLE-component die u in staat stelt om meerdere flippable kaarten te maken en te besturen (bijvoorbeeld in een spel van Memory)."),(0,a.kt)("h2",d({},{id:"opties"}),"Opties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"animation")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": als de component een invoeranimatie gebruikt; het object bevat een naam (zoals ",(0,a.kt)("inlineCode",{parentName:"li"},"anim-scal-up"),") en een duur (zoals ",(0,a.kt)("inlineCode",{parentName:"li"},"1,7s")," = 1,7 seconden). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"memory")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": of de geheugenspelmodus moet worden ingeschakeld waarin men paren van de geleverde waarden moet matchen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": een functie die de matrix van de flippable cards ontvangt. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onMemoryComplete")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback aangeroepen als het geheugenspel voltooid is. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onMemoryComplete() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"oneTime")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of het flippingproces slechts \xe9\xe9n keer mag worden uitgevoerd. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"values")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<object>"),": de waarden voor de respectievelijke kaarten, in te voeren in een array met invoervelden voor een ",(0,a.kt)("inlineCode",{parentName:"li"},"front")," en ",(0,a.kt)("inlineCode",{parentName:"li"},"back")," waarde. Zo'n waarde kan een string zijn, maar ook een volwaardige ISLE-component. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"containerStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS-stijl van de kaartcontainers. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"frontStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS-stijl van de voorkant van de kaarten. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS-stijl van de achterkant van de kaarten. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",d({},{id:"voorbeelden"}),"Voorbeelden"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Front Image",value:"frontImage"},{label:"Memory",value:"memory"},{label:"Memory with Solved Callback",value:"memorySolvedCallback"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultiCards\n    containerStyle={{\n        width: 250,\n        height: 250,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 3px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        background: 'silver'\n    }}\n    backStyle={{\n        color: 'black',\n        fontSize: 20,\n        fontWeight: 800,\n        fontFamily: 'Oswald',\n        textAlign: 'left',\n        paddingLeft: '10px',\n        background: 'ghostwhite',\n        boxShadow: '1px 1px 10px black',\n    }}\n    values={[\n        { front: \"number 1\", back: 'back side of #1'},\n        { front: \"number 2\", back: 'back side of #2'},\n        { front: \"number 3\", back: 'back side of #3'},\n        { front: \"number 4\", back: 'back side of #4'}\n    ]}\n/>\n"))),(0,a.kt)(l.Z,{value:"frontImage",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultiCards\n    containerStyle={{\n        width: 250,\n        height: 250,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 13px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',\n        backgroundSize: '100% auto'\n    }}\n    backStyle={{\n        color: 'black',\n        fontSize: 20,\n        fontWeight: 800,\n        fontFamily: 'Oswald',\n        textAlign: 'left',\n        paddingLeft: '10px',\n        background: 'ghostwhite',\n        boxShadow: '1px 1px 10px black',\n    }}\n    values={[\n        { front: \"number 1\", back: 'back side of #1'},\n        { front: \"number 2\", back: 'back side of #2'},\n        { front: \"number 3\", back: 'back side of #3'},\n        { front: \"number 4\", back: 'back side of #4'}\n    ]}\n/>\n"))),(0,a.kt)(l.Z,{value:"memory",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultiCards\n    memory\n    containerStyle={{\n        width: 200,\n        height: 200,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 3px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        background: 'silver',\n        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',\n    }}\n    backStyle={{\n        padding: 12,\n        boxShadow: '1px 1px 10px black'\n    }}\n    values={[\n        { front: \"\", back: <img src=\"https://bit.ly/3qS4daf\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3sn5Ih6\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3qNVpSP\" /> }\n    ]}\n/>\n"))),(0,a.kt)(l.Z,{value:"memorySolvedCallback",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultiCards\n    memory\n    containerStyle={{\n        width: 200,\n        height: 200,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 3px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        background: 'silver',\n        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',\n    }}\n    backStyle={{\n        padding: 12,\n        boxShadow: '1px 1px 10px black'\n    }}\n    values={[\n        { front: \"\", back: <img src=\"https://bit.ly/3qS4daf\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3sn5Ih6\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3qNVpSP\" /> }\n    ]}\n    onMemoryComplete={() => { alert( 'The memory has been solved...' ); }}\n/>\n")))))}h.isMDXComponent=!0}}]);