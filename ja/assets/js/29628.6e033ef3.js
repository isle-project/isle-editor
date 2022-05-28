"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29628],{585601:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(202784),a=r(386010),l=r(416419),o=r(236361),i=r(680022),c=r(844746),s="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",p="sidebarItem__DBe",d="sidebarItemLink_mo7H",f="sidebarItemLinkActive_I1ZP";function b({sidebar:e}){return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,a.Z)(s,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,a.Z)(m,"margin-bottom--md")},e.title),n.createElement("ul",{className:(0,a.Z)(u,"clean-list")},e.items.map((e=>n.createElement("li",{key:e.permalink,className:p},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title)))))))}var g=r(327092);function v({sidebar:e}){return n.createElement("ul",{className:"menu__list"},e.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function h(e){return n.createElement(g.Zo,{component:v,props:e})}function E({sidebar:e}){const t=(0,o.i)();return(null==e?void 0:e.items.length)?"mobile"===t?n.createElement(h,{sidebar:e}):n.createElement(b,{sidebar:e}):null}var y=Object.defineProperty,O=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,_=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function w(e){const t=e,{sidebar:r,toc:o,children:i}=t,c=((e,t)=>{var r={};for(var n in e)P.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&O)for(var n of O(e))t.indexOf(n)<0&&N.call(e,n)&&(r[n]=e[n]);return r})(t,["sidebar","toc","children"]),s=r&&r.items.length>0;return n.createElement(l.Z,((e,t)=>{for(var r in t||(t={}))P.call(t,r)&&_(e,r,t[r]);if(O)for(var r of O(t))N.call(t,r)&&_(e,r,t[r]);return e})({},c),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(E,{sidebar:r}),n.createElement("main",{className:(0,a.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),o&&n.createElement("div",{className:"col col--2"},o))))}},783088:function(e,t,r){r.d(t,{Z:function(){return T}});var n=r(202784),a=r(386010),l=r(844746),o=r(680022),i=r(518773),c=r(411587),s=r(347886),m=r(763455),u=r(145602),p=r(226210),d=Object.defineProperty,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function h(e){return e.href?n.createElement(o.Z,((e,t)=>{for(var r in t||(t={}))b.call(t,r)&&v(e,r,t[r]);if(f)for(var r of f(t))g.call(t,r)&&v(e,r,t[r]);return e})({},e)):n.createElement(n.Fragment,null,e.children)}function E({author:e}){const{name:t,title:r,url:a,imageURL:l,email:o}=e,i=a||o&&`mailto:${o}`||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},l&&n.createElement(h,{href:i,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:l,alt:t})),t&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(h,{href:i,itemProp:"url"},n.createElement("span",{itemProp:"name"},t))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}var y="authorCol_sTYa",O="imageOnlyAuthorRow_vA2J",P="imageOnlyAuthorCol_kG3X",N=Object.defineProperty,_=Object.defineProperties,w=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))k.call(t,r)&&x(e,r,t[r]);if(L)for(var r of L(t))j.call(t,r)&&x(e,r,t[r]);return e};function Z({authors:e,assets:t}){if(0===e.length)return null;const r=e.every((({name:e})=>!e));return n.createElement("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",r?O:"row")},e.map(((e,l)=>{var o,i,c;return n.createElement("div",{className:(0,a.Z)(!r&&"col col--6",r?P:y),key:l},n.createElement(E,{author:(i=I({},e),c={imageURL:null!=(o=t.authorsImageUrls[l])?o:e.imageURL},_(i,w(c)))}))})))}var C="blogPostTitle_Ikge",H="blogPostData_SAv4",A="blogPostDetailsFull_u0Nl";function T(e){var t;const r=function(){const{selectMessage:e}=(0,c.c)();return t=>{const r=Math.ceil(t);return e(r,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:r}))}}(),{withBaseUrl:d}=(0,i.C)(),{children:f,frontMatter:b,assets:g,metadata:v,truncated:h,isBlogPostPage:E=!1}=e,{date:y,formattedDate:O,permalink:P,tags:N,readingTime:_,title:w,editUrl:L,authors:k}=v,j=null!=(t=g.image)?t:b.image,x=!E&&h,I=N.length>0,T=E?"h1":"h2";return n.createElement("article",{className:E?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(T,{className:C,itemProp:"headline"},E?w:n.createElement(o.Z,{itemProp:"url",to:P},w)),n.createElement("div",{className:(0,a.Z)(H,"margin-vert--md")},n.createElement("time",{dateTime:y,itemProp:"datePublished"},O),void 0!==_&&n.createElement(n.Fragment,null," \xb7 ",r(_))),n.createElement(Z,{authors:k,assets:g})),j&&n.createElement("meta",{itemProp:"image",content:d(j,{absolute:!0})}),n.createElement("div",{id:E?s.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(m.Z,null,f)),(I||h)&&n.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",E&&A)},I&&n.createElement("div",{className:(0,a.Z)("col",{"col--9":x})},n.createElement(p.Z,{tags:N})),E&&L&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:L})),x&&n.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":I})},n.createElement(o.Z,{to:v.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:w})},n.createElement("b",null,n.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},729628:function(e,t,r){r.r(t),r.d(t,{default:function(){return I}});var n=r(202784),a=r(386010),l=r(840475),o=r(952863),i=r(585601),c=r(783088),s=r(844746),m=r(809915),u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&v(e,r,t[r]);if(f)for(var r of f(t))g.call(t,r)&&v(e,r,t[r]);return e},E=(e,t)=>p(e,d(t));function y(e){const{nextItem:t,prevItem:r}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},r&&n.createElement(m.Z,E(h({},r),{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(m.Z,E(h({},t),{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var O=r(344299),P=Object.defineProperty,N=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,L=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))_.call(t,r)&&L(e,r,t[r]);if(N)for(var r of N(t))w.call(t,r)&&L(e,r,t[r]);return e};function j(e){var t;const{content:r}=e,{assets:a,metadata:o}=r,{title:i,description:c,date:s,tags:m,authors:u,frontMatter:p}=o,{keywords:d}=p,f=null!=(t=a.image)?t:p.image;return n.createElement(l.d,{title:i,description:c,keywords:d,image:f},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:s}),u.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:u.map((e=>e.url)).filter(Boolean).join(",")}),m.length>0&&n.createElement("meta",{property:"article:tag",content:m.map((e=>e.label)).join(",")}))}function x(e){const{content:t,sidebar:r}=e,{assets:a,metadata:l}=t,{nextItem:o,prevItem:s,frontMatter:m}=l,{hide_table_of_contents:u,toc_min_heading_level:p,toc_max_heading_level:d}=m;return n.createElement(i.Z,{sidebar:r,toc:!u&&t.toc&&t.toc.length>0?n.createElement(O.Z,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:d}):void 0},n.createElement(c.Z,{frontMatter:m,assets:a,metadata:l,isBlogPostPage:!0},n.createElement(t,null)),(o||s)&&n.createElement(y,{nextItem:o,prevItem:s}))}function I(e){return n.createElement(l.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},n.createElement(j,k({},e)),n.createElement(x,k({},e)))}},344299:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(202784),a=r(386010),l=r(146881),o="tableOfContents_bqdL",i=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function f(e){var t,r=e,{className:i}=r,f=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["className"]);return n.createElement("div",{className:(0,a.Z)(o,"thin-scrollbar",i)},n.createElement(l.Z,(t=((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&d(e,r,t[r]);if(m)for(var r of m(t))p.call(t,r)&&d(e,r,t[r]);return e})({},f),c(t,s({linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))))}},146881:function(e,t,r){r.d(t,{Z:function(){return L}});var n=r(202784),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&m(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&m(e,r,t[r]);return e},p=(e,t)=>l(e,o(t));function d(e){const t=e.map((e=>p(u({},e),{parentIndex:-1,children:[]}))),r=Array(7).fill(-1);t.forEach(((e,t)=>{const n=r.slice(2,e.level);e.parentIndex=Math.max(...n),r[e.level]=t}));const n=[];return t.forEach((e=>{const r=e,{parentIndex:a}=r,l=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["parentIndex"]);a>=0?t[a].children.push(l):n.push(l)})),n}function f({toc:e,minHeadingLevel:t,maxHeadingLevel:r}){return e.flatMap((e=>{const n=f({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[p(u({},e),{children:n})]:n}))}var b=r(223459);function g(e){const t=e.getBoundingClientRect();return t.top===t.bottom?g(e.parentNode):t}function v(e,{anchorTopOffset:t}){var r,n;const a=e.find((e=>g(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(g(a))?a:null!=(r=e[e.indexOf(a)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function h(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,b.L)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function E(e){const t=(0,n.useRef)(void 0),r=h();(0,n.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function({minHeadingLevel:e,maxHeadingLevel:t}){const r=[];for(let n=e;n<=t;n+=1)r.push(`h${n}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=v(i,{anchorTopOffset:r.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,r){r?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,r])}var y=n.memo((function e({toc:t,className:r,linkClassName:a,isChild:l}){return t.length?n.createElement("ul",{className:l?void 0:r},t.map((t=>n.createElement("li",{key:t.id},n.createElement("a",{href:`#${t.id}`,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:t.value}}),n.createElement(e,{isChild:!0,toc:t.children,className:r,linkClassName:a}))))):null})),O=Object.defineProperty,P=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function L(e){var t=e,{toc:r,className:a="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:c}=t,s=((e,t)=>{var r={};for(var n in e)N.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&P)for(var n of P(e))t.indexOf(n)<0&&_.call(e,n)&&(r[n]=e[n]);return r})(t,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const m=(0,b.L)(),u=null!=i?i:m.tableOfContents.minHeadingLevel,p=null!=c?c:m.tableOfContents.maxHeadingLevel,g=function({toc:e,minHeadingLevel:t,maxHeadingLevel:r}){return(0,n.useMemo)((()=>f({toc:d(e),minHeadingLevel:t,maxHeadingLevel:r})),[e,t,r])}({toc:r,minHeadingLevel:u,maxHeadingLevel:p});return E((0,n.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:p}}),[l,o,u,p])),n.createElement(y,((e,t)=>{for(var r in t||(t={}))N.call(t,r)&&w(e,r,t[r]);if(P)for(var r of P(t))_.call(t,r)&&w(e,r,t[r]);return e})({toc:g,className:a,linkClassName:l},s))}},411587:function(e,t,r){r.d(t,{c:function(){return s}});var n=r(202784),a=r(652898);const l=["zero","one","two","few","many","other"];function o(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function s(){const e=c();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const a=r.select(t),l=r.pluralForms.indexOf(a);return n[Math.min(l,n.length-1)]}(r,t,e)}}}}]);