(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{1374:function(e,t,n){"use strict";n.r(t);var a=n(460),i=n.n(a),r=n(371),s=n.n(r),c=n(0),o=(n(363),n(425)),l=n.n(o),d=n(6684),u=n(1300),p=n(537),f=n(991),b=n(396);Object(b.a)("HintButton");var h=l()("isle:hint-button"),v=s()("br",{}),m=s()("br",{}),w=function(e,t,n,a){return s()(p.a,{id:"".concat(n,"-hint-popover"),title:a("hints"),style:{minWidth:"400px",padding:"3px",zIndex:9999}},void 0,t.filter((function(t,n){return n<=e})).map((function(e,t){return s()("span",{},t,s()("label",{style:{marginBottom:0}},void 0,a("hint")," ",t+1,":"),v,s()("span",{},void 0,e),m)})))},j=function(e){var t=e.disabled,n=e.hints,a=e.onClick,r=e.onFinished,o=e.placement,l=e.size,d=e.style,p=e.id,b=e.t,v=Object(c.useState)(!1),m=i()(v,2),j=m[0],O=m[1],x=Object(c.useState)(0),N=i()(x,2),y=N[0],P=N[1],g=function(e,t,n,a){return a(n?e<=1?"close-hint":"close-hints":0===e?"get-hint":e===t?"show-hints":"next-hint")}(y,n.length,j,b);return s()(f.a,{trigger:"click",placement:o,overlay:w(y-1,n,p,b)},void 0,s()(u.a,{className:"hint-button",variant:"success",size:l,onClick:function(e){return h("Clicked on a hint button..."),y<n.length&&!1===j?(a(y),P(y+1),O(!0),y+1===n.length&&r(),e(!1)):(O(!1),e(j))},disabled:t,autoActivate:!1,style:d},void 0,g))};j.defaultProps={disabled:!1,onClick:function(){},onFinished:function(){},placement:"left",size:"sm",style:{}},t.default=Object(d.a)("HintButton")(j)},517:function(e,t,n){"use strict";var a=n(368),i=n(366),r=n(370),s=n.n(r),c=n(0),o=n.n(c),l=n(383),d=o.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,c=e.bsPrefix,d=e.className,u=e.children,p=Object(i.a)(e,["as","bsPrefix","className","children"]);return c=Object(l.a)(c,"popover-body"),o.a.createElement(r,Object(a.a)({ref:t},p,{className:s()(d,c)}),u)}));t.a=d},530:function(e,t,n){"use strict";var a=n(368),i=n(366),r=n(370),s=n.n(r),c=n(0),o=n.n(c),l=n(383),d=o.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,c=e.bsPrefix,d=e.className,u=e.children,p=Object(i.a)(e,["as","bsPrefix","className","children"]);return c=Object(l.a)(c,"popover-header"),o.a.createElement(r,Object(a.a)({ref:t},p,{className:s()(c,d)}),u)}));t.a=d},537:function(e,t,n){"use strict";var a=n(368),i=n(366),r=n(370),s=n.n(r),c=n(0),o=n.n(c),l=(n(739),n(383)),d=n(530),u=n(517),p=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.placement,c=e.className,d=e.style,p=e.children,f=e.content,b=e.arrowProps,h=(e.popper,e.show,Object(i.a)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),v=Object(l.a)(n,"popover"),m=((null==r?void 0:r.split("-"))||[])[0];return o.a.createElement("div",Object(a.a)({ref:t,role:"tooltip",style:d,"x-placement":m,className:s()(c,v,m&&"bs-popover-"+m)},h),o.a.createElement("div",Object(a.a)({className:"arrow"},b)),f?o.a.createElement(u.a,null,p):p)}));p.defaultProps={placement:"right"},p.Title=d.a,p.Content=u.a,t.a=p}}]);