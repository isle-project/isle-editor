(window.webpackJsonp=window.webpackJsonp||[]).push([[888],{423:function(e,t,a){"use strict";var n=a(406),c=a(408),r=a(409),o=a.n(r),i=a(0),s=a.n(i),l=a(411),u=a(463),b=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,i=e.size,b=e.active,d=e.className,f=e.block,p=e.type,v=e.as,y=Object(c.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),j=Object(l.a)(a,"btn"),m=o()(d,j,b&&"active",r&&j+"-"+r,f&&j+"-block",i&&j+"-"+i);if(y.href)return s.a.createElement(u.a,Object(n.a)({},y,{as:v,ref:t,className:o()(m,y.disabled&&"disabled")}));t&&(y.ref=t),p?y.type=p:v||(y.type="button");var O=v||"button";return s.a.createElement(O,Object(n.a)({},y,{className:m}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=b},496:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function c(e,t){return n(e.querySelectorAll(t))}},6410:function(e,t,a){"use strict";a.r(t);var n=a(407),c=a.n(n),r=a(448),o=a.n(r),i=a(0),s=(a(404),a(1971)),l=a(423),u=a(594),b=a(1080),d=a.n(b),f=a(459),p=a(420),v=a(442);a(348);Object(p.a)("R");var y=function(e){var t=e.children,a=e.func,n=e.library,r=e.visible,b=Object(s.a)("R").t,p=Object(i.useContext)(f.a),v=Object(i.useState)(r),y=o()(v,2),j=y[0],m=y[1],O=Object(i.useState)(""),k=o()(O,2),h=k[0],w=k[1],N=Object(i.useCallback)((function(){var e=d()(a||t);""===h&&p.getRHelp(n,e,(function(e,t,a){e||w(a)}))}),[h,t,a,n,p]),R=Object(i.useCallback)((function(){m(!j)}),[j]);return Object(i.useEffect)((function(){j&&N()}),[j,N]),c()("span",{role:"button",tabIndex:0,className:"RHelp",onClick:R,onKeyPress:R},void 0,c()(u.a,{backdrop:!1,show:j,title:b("r-help"),onHide:R,className:"r-help-modal",enforceFocus:!1},void 0,c()(u.a.Header,{closeButton:!0},void 0,c()(u.a.Title,{id:"contained-modal-title-lg"},void 0,b("r-help"))),c()(u.a.Body,{className:"r-help-modal-body"},void 0,c()("span",{dangerouslySetInnerHTML:{__html:h}})),c()(u.a.Footer,{},void 0,c()(l.a,{onClick:R},void 0,b("close")))),c()("code",{style:{cursor:"pointer"}},void 0,t||a))};y.defaultProps={func:"",library:"base",visible:!1},t.default=Object(v.a)(y)},684:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0);function c(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current=e})),t.current}}}]);