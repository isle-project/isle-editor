(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{1017:function(e,t,n){"use strict";n.r(t);var a,i,r=n(448),s=n.n(r),c=n(407),o=n.n(c),l=(n(428),n(430),n(0)),u=(n(404),n(450)),d=n.n(u),p=n(1971),b=n(881),f=n(512),h=n(724),v=n(420);Object(v.a)("HintButton");var m=d()("isle:hint-button"),j=function(e,t,n,r){return o()(f.a,{id:"".concat(n,"-hint-popover"),title:r("hints"),style:{minWidth:"400px",padding:"3px",zIndex:9999}},void 0,t.filter((function(t,n){return n<=e})).map((function(e,t){return o()("span",{},t,o()("label",{style:{marginBottom:0}},void 0,r("hint")," ",t+1,":"),a||(a=o()("br",{})),o()("span",{},void 0,e),i||(i=o()("br",{})))})))},w=function(e){var t=e.disabled,n=e.hints,a=e.onClick,i=e.onFinished,r=e.placement,c=e.size,u=e.style,d=e.id,f=Object(l.useState)(!1),v=s()(f,2),w=v[0],O=v[1],x=Object(l.useState)(0),N=s()(x,2),y=N[0],P=N[1],g=Object(p.a)("HintButton").t,k=function(e,t,n,a){return a(n?e<=1?"close-hint":"close-hints":0===e?"get-hint":e===t?"show-hints":"next-hint")}(y,n.length,w,g),C=Object(l.useCallback)((function(e){return m("Clicked on a hint button..."),y<n.length&&!1===w?(a(y),P(y+1),O(!0),y+1===n.length&&i(),e(!1)):(O(!1),e(w))}),[y,n,w,a,i]);return o()(h.a,{trigger:"click",placement:r,overlay:j(y-1,n,d,g)},void 0,o()(b.a,{className:"hint-button",variant:"success",size:c,onClick:C,disabled:t,autoActivate:!1,style:u},void 0,k))};w.defaultProps={disabled:!1,onClick:function(){},onFinished:function(){},placement:"left",size:"sm",style:{}},t.default=w},505:function(e,t,n){"use strict";var a=n(406),i=n(408),r=n(409),s=n.n(r),c=n(0),o=n.n(c),l=n(411),u=o.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,c=e.bsPrefix,u=e.className,d=e.children,p=Object(i.a)(e,["as","bsPrefix","className","children"]);return c=Object(l.a)(c,"popover-body"),o.a.createElement(r,Object(a.a)({ref:t},p,{className:s()(u,c)}),d)}));t.a=u},510:function(e,t,n){"use strict";var a=n(406),i=n(408),r=n(409),s=n.n(r),c=n(0),o=n.n(c),l=n(411),u=o.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,c=e.bsPrefix,u=e.className,d=e.children,p=Object(i.a)(e,["as","bsPrefix","className","children"]);return c=Object(l.a)(c,"popover-header"),o.a.createElement(r,Object(a.a)({ref:t},p,{className:s()(c,u)}),d)}));t.a=u},512:function(e,t,n){"use strict";var a=n(406),i=n(408),r=n(409),s=n.n(r),c=n(0),o=n.n(c),l=(n(576),n(411)),u=n(510),d=n(505),p=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.placement,c=e.className,u=e.style,p=e.children,b=e.content,f=e.arrowProps,h=(e.popper,e.show,Object(i.a)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),v=Object(l.a)(n,"popover"),m=((null==r?void 0:r.split("-"))||[])[0];return o.a.createElement("div",Object(a.a)({ref:t,role:"tooltip",style:u,"x-placement":m,className:s()(c,v,m&&"bs-popover-"+m)},h),o.a.createElement("div",Object(a.a)({className:"arrow"},f)),b?o.a.createElement(d.a,null,p):p)}));p.defaultProps={placement:"right"},p.Title=u.a,p.Content=d.a,t.a=p}}]);