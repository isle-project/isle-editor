"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8334],{603905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return t?a.createElement(f,o(o({ref:n},s),{},{components:t})):a.createElement(f,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},358215:function(e,n,t){var a=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},855064:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(202784),r=t(79443);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(386010),i="tabItem_1uMI",c="tabItemActive_2DSg";var u=function(e){var n,t=e.lazy,r=e.block,u=e.defaultValue,s=e.values,m=e.groupId,p=e.className,d=a.Children.toArray(e.children),f=null!=s?s:d.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=u?u:null==(n=d.find((function(e){return e.props.default})))?void 0:n.props.value,k=l(),g=k.tabGroupChoices,v=k.setTabGroupChoices,h=(0,a.useState)(b),y=h[0],x=h[1],N=[];if(null!=m){var C=g[m];null!=C&&C!==y&&f.some((function(e){return e.value===C}))&&x(C)}var w=function(e){var n=e.currentTarget,t=N.indexOf(n),a=f[t].value;x(a),null!=m&&(v(m,a),setTimeout((function(){var e,t,a,r,l,o,i,u;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,l=e.right,o=window,i=o.innerHeight,u=o.innerWidth,t>=0&&l<=u&&r<=i&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c),setTimeout((function(){return n.classList.remove(c)}),2e3))}),150))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.target)+1;t=N[a]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.target)-1;t=N[r]||N[N.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},p)},f.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":y===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:S,onFocus:w,onClick:w},null!=t?t:n)}))),t?(0,a.cloneElement)(d.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},79443:function(e,n,t){var a=(0,t(202784).createContext)(void 0);n.Z=a},423795:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return f}});var a=t(487462),r=t(263366),l=(t(202784),t(603905)),o=t(855064),i=t(358215),c=["components"],u={id:"multi-cards",title:"Multi Cards",sidebar_label:"Multi Cards"},s=void 0,m={unversionedId:"multi-cards",id:"multi-cards",isDocsHomePage:!1,title:"Multi Cards",description:"Een ISLE-component die u in staat stelt om meerdere flippable kaarten te maken en te besturen (bijvoorbeeld in een spel van Memory).",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/multi-cards.md",sourceDirName:".",slug:"/multi-cards",permalink:"/nl/docs/multi-cards",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/multi-cards.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614123017,formattedLastUpdatedAt:"23-2-2021",frontMatter:{id:"multi-cards",title:"Multi Cards",sidebar_label:"Multi Cards"},sidebar:"docs",previous:{title:"Likert Scale",permalink:"/nl/docs/likert-scale"},next:{title:"QR Code",permalink:"/nl/docs/qrcode"}},p=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],d={toc:p};function f(e){var n=e.components,t=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Een ISLE-component die u in staat stelt om meerdere flippable kaarten te maken en te besturen (bijvoorbeeld in een spel van Memory)."),(0,l.kt)("h2",{id:"opties"},"Opties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"animation")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": als de component een invoeranimatie gebruikt; het object bevat een naam (zoals ",(0,l.kt)("inlineCode",{parentName:"li"},"anim-scal-up"),") en een duur (zoals ",(0,l.kt)("inlineCode",{parentName:"li"},"1,7s")," = 1,7 seconden). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"memory")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": of de geheugenspelmodus moet worden ingeschakeld waarin men paren van de geleverde waarden moet matchen. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": een functie die de matrix van de flippable cards ontvangt. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onMemoryComplete")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": callback aangeroepen als het geheugenspel voltooid is. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onMemoryComplete() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"oneTime")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of het flippingproces slechts \xe9\xe9n keer mag worden uitgevoerd. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"values")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<object>"),": de waarden voor de respectievelijke kaarten, in te voeren in een array met invoervelden voor een ",(0,l.kt)("inlineCode",{parentName:"li"},"front")," en ",(0,l.kt)("inlineCode",{parentName:"li"},"back")," waarde. Zo'n waarde kan een string zijn, maar ook een volwaardige ISLE-component. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"containerStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS-stijl van de kaartcontainers. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"frontStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS-stijl van de voorkant van de kaarten. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"backStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS-stijl van de achterkant van de kaarten. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"voorbeelden"},"Voorbeelden"),(0,l.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Front Image",value:"frontImage"},{label:"Memory",value:"memory"},{label:"Memory with Solved Callback",value:"memorySolvedCallback"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultiCards\n    containerStyle={{\n        width: 250,\n        height: 250,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 3px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        background: 'silver'\n    }}\n    backStyle={{\n        color: 'black',\n        fontSize: 20,\n        fontWeight: 800,\n        fontFamily: 'Oswald',\n        textAlign: 'left',\n        paddingLeft: '10px',\n        background: 'ghostwhite',\n        boxShadow: '1px 1px 10px black',\n    }}\n    values={[\n        { front: \"number 1\", back: 'back side of #1'},\n        { front: \"number 2\", back: 'back side of #2'},\n        { front: \"number 3\", back: 'back side of #3'},\n        { front: \"number 4\", back: 'back side of #4'}\n    ]}\n/>\n"))),(0,l.kt)(i.Z,{value:"frontImage",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultiCards\n    containerStyle={{\n        width: 250,\n        height: 250,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 13px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',\n        backgroundSize: '100% auto'\n    }}\n    backStyle={{\n        color: 'black',\n        fontSize: 20,\n        fontWeight: 800,\n        fontFamily: 'Oswald',\n        textAlign: 'left',\n        paddingLeft: '10px',\n        background: 'ghostwhite',\n        boxShadow: '1px 1px 10px black',\n    }}\n    values={[\n        { front: \"number 1\", back: 'back side of #1'},\n        { front: \"number 2\", back: 'back side of #2'},\n        { front: \"number 3\", back: 'back side of #3'},\n        { front: \"number 4\", back: 'back side of #4'}\n    ]}\n/>\n"))),(0,l.kt)(i.Z,{value:"memory",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultiCards\n    memory\n    containerStyle={{\n        width: 200,\n        height: 200,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 3px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        background: 'silver',\n        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',\n    }}\n    backStyle={{\n        padding: 12,\n        boxShadow: '1px 1px 10px black'\n    }}\n    values={[\n        { front: \"\", back: <img src=\"https://bit.ly/3qS4daf\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3sn5Ih6\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3qNVpSP\" /> }\n    ]}\n/>\n"))),(0,l.kt)(i.Z,{value:"memorySolvedCallback",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultiCards\n    memory\n    containerStyle={{\n        width: 200,\n        height: 200,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 3px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        background: 'silver',\n        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',\n    }}\n    backStyle={{\n        padding: 12,\n        boxShadow: '1px 1px 10px black'\n    }}\n    values={[\n        { front: \"\", back: <img src=\"https://bit.ly/3qS4daf\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3sn5Ih6\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3qNVpSP\" /> }\n    ]}\n    onMemoryComplete={() => { alert( 'The memory has been solved...' ); }}\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,n,t){function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})}}]);