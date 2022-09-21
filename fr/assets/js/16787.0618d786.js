"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16787],{585601:function(e,t,r){r.d(t,{Z:function(){return w}});var a=r(202784),n=r(386010),l=r(337161),o=r(236361),c=r(680022),i=r(844746),s="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",p="sidebarItemLink_mo7H",f="sidebarItemLinkActive_I1ZP";function g({sidebar:e}){return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,n.Z)(s,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},e.title),a.createElement("ul",{className:(0,n.Z)(u,"clean-list")},e.items.map((e=>a.createElement("li",{key:e.permalink,className:d},a.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:f},e.title)))))))}var b=r(327092);function h({sidebar:e}){return a.createElement("ul",{className:"menu__list"},e.items.map((e=>a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function v(e){return a.createElement(b.Zo,{component:h,props:e})}function E({sidebar:e}){const t=(0,o.i)();return(null==e?void 0:e.items.length)?"mobile"===t?a.createElement(v,{sidebar:e}):a.createElement(g,{sidebar:e}):null}var P=Object.defineProperty,y=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,_=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function w(e){const t=e,{sidebar:r,toc:o,children:c}=t,i=((e,t)=>{var r={};for(var a in e)N.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&y)for(var a of y(e))t.indexOf(a)<0&&O.call(e,a)&&(r[a]=e[a]);return r})(t,["sidebar","toc","children"]),s=r&&r.items.length>0;return a.createElement(l.Z,((e,t)=>{for(var r in t||(t={}))N.call(t,r)&&_(e,r,t[r]);if(y)for(var r of y(t))O.call(t,r)&&_(e,r,t[r]);return e})({},i),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(E,{sidebar:r}),a.createElement("main",{className:(0,n.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},c),o&&a.createElement("div",{className:"col col--2"},o))))}},90737:function(e,t,r){r.d(t,{Z:function(){return W}});var a=r(202784),n=r(386010),l=r(51931),o=r(518773);function c({children:e,className:t}){var r;const{frontMatter:n,assets:c}=(0,l.C)(),{withBaseUrl:i}=(0,o.C)(),s=null!=(r=c.image)?r:n.image;return a.createElement("article",{className:t,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&a.createElement("meta",{itemProp:"image",content:i(s,{absolute:!0})}),e)}var i=r(680022),s="title_f1Hy";function m({className:e}){const{metadata:t,isBlogPostPage:r}=(0,l.C)(),{permalink:o,title:c}=t,m=r?"h1":"h2";return a.createElement(m,{className:(0,n.Z)(s,e),itemProp:"headline"},r?c:a.createElement(i.Z,{itemProp:"url",to:o},c))}var u=r(844746),d=r(411587),p="container_mt6G";function f({readingTime:e}){const t=function(){const{selectMessage:e}=(0,d.c)();return t=>{const r=Math.ceil(t);return e(r,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:r}))}}();return a.createElement(a.Fragment,null,t(e))}function g({date:e,formattedDate:t}){return a.createElement("time",{dateTime:e,itemProp:"datePublished"},t)}function b(){return a.createElement(a.Fragment,null," \xb7 ")}function h({className:e}){const{metadata:t}=(0,l.C)(),{date:r,formattedDate:o,readingTime:c}=t;return a.createElement("div",{className:(0,n.Z)(p,"margin-vert--md",e)},a.createElement(g,{date:r,formattedDate:o}),void 0!==c&&a.createElement(a.Fragment,null,a.createElement(b,null),a.createElement(f,{readingTime:c})))}var v=Object.defineProperty,E=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function O(e){return e.href?a.createElement(i.Z,((e,t)=>{for(var r in t||(t={}))P.call(t,r)&&N(e,r,t[r]);if(E)for(var r of E(t))y.call(t,r)&&N(e,r,t[r]);return e})({},e)):a.createElement(a.Fragment,null,e.children)}function _({author:e,className:t}){const{name:r,title:l,url:o,imageURL:c,email:i}=e,s=o||i&&`mailto:${i}`||void 0;return a.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",t)},c&&a.createElement(O,{href:s,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:c,alt:r})),r&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(O,{href:s,itemProp:"url"},a.createElement("span",{itemProp:"name"},r))),l&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var w="authorCol_Hf19",Z="imageOnlyAuthorRow_pa_O",k="imageOnlyAuthorCol_G86a",j=Object.defineProperty,C=Object.defineProperties,I=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,F=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t||(t={}))B.call(t,r)&&F(e,r,t[r]);if(T)for(var r of T(t))x.call(t,r)&&F(e,r,t[r]);return e};function L({className:e}){const{metadata:{authors:t},assets:r}=(0,l.C)();if(0===t.length)return null;const o=t.every((({name:e})=>!e));return a.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",o?Z:"row",e)},t.map(((e,t)=>{var l,c,i;return a.createElement("div",{className:(0,n.Z)(!o&&"col col--6",o?k:w),key:t},a.createElement(_,{author:(c=M({},e),i={imageURL:null!=(l=r.authorsImageUrls[t])?l:e.imageURL},C(c,I(i)))}))})))}function R(){return a.createElement("header",null,a.createElement(m,null),a.createElement(h,null),a.createElement(L,null))}var A=r(347886),D=r(98275);function U({children:e,className:t}){const{isBlogPostPage:r}=(0,l.C)();return a.createElement("div",{id:r?A.blogPostContainerID:void 0,className:(0,n.Z)("markdown",t),itemProp:"articleBody"},a.createElement(D.Z,null,e))}var $=r(699429),S=r(226210),H=Object.defineProperty,z=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,Y=(e,t,r)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function q(){return a.createElement("b",null,a.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function J(e){const t=e,{blogPostTitle:r}=t,n=((e,t)=>{var r={};for(var a in e)G.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&z)for(var a of z(e))t.indexOf(a)<0&&V.call(e,a)&&(r[a]=e[a]);return r})(t,["blogPostTitle"]);return a.createElement(i.Z,((e,t)=>{for(var r in t||(t={}))G.call(t,r)&&Y(e,r,t[r]);if(z)for(var r of z(t))V.call(t,r)&&Y(e,r,t[r]);return e})({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:r})},n),a.createElement(q,null))}var K="blogPostFooterDetailsFull_mRVl";function Q(){const{metadata:e,isBlogPostPage:t}=(0,l.C)(),{tags:r,title:o,editUrl:c,hasTruncateMarker:i}=e,s=!t&&i,m=r.length>0;return m||s||c?a.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&K)},m&&a.createElement("div",{className:(0,n.Z)("col",{"col--9":s})},a.createElement(S.Z,{tags:r})),t&&c&&a.createElement("div",{className:"col margin-top--sm"},a.createElement($.Z,{editUrl:c})),s&&a.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":m})},a.createElement(J,{blogPostTitle:o,to:e.permalink}))):null}function W({children:e,className:t}){const r=function(){const{isBlogPostPage:e}=(0,l.C)();return e?void 0:"margin-bottom--xl"}();return a.createElement(c,{className:(0,n.Z)(r,t)},a.createElement(R,null),a.createElement(U,null,e),a.createElement(Q,null))}},51931:function(e,t,r){r.d(t,{C:function(){return c},n:function(){return o}});var a=r(202784),n=r(960480);const l=a.createContext(null);function o({children:e,content:t,isBlogPostPage:r=!1}){const n=function({content:e,isBlogPostPage:t}){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t})),[e,t])}({content:t,isBlogPostPage:r});return a.createElement(l.Provider,{value:n},e)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new n.i6("BlogPostProvider");return e}},411587:function(e,t,r){r.d(t,{c:function(){return s}});var a=r(202784),n=r(652898);const l=["zero","one","two","few","many","other"];function o(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function s(){const e=i();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=r.select(t),l=r.pluralForms.indexOf(n);return a[Math.min(l,a.length-1)]}(r,t,e)}}}}]);