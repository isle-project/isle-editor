(window.webpackJsonp=window.webpackJsonp||[]).push([[1192],{1138:function(e,a){e.exports=function(e){throw new TypeError('"'+e+'" is read-only')},e.exports.default=e.exports,e.exports.__esModule=!0},423:function(e,a,t){"use strict";var i=t(406),n=t(408),s=t(409),c=t.n(s),r=t(0),l=t.n(r),o=t(411),d=t(463),u=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.variant,r=e.size,u=e.active,p=e.className,b=e.block,f=e.type,v=e.as,k=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),w=Object(o.a)(t,"btn"),m=c()(p,w,u&&"active",s&&w+"-"+s,b&&w+"-block",r&&w+"-"+r);if(k.href)return l.a.createElement(d.a,Object(i.a)({},k,{as:v,ref:a,className:c()(m,k.disabled&&"disabled")}));a&&(k.ref=a),f?k.type=f:v||(k.type="button");var g=v||"button";return l.a.createElement(g,Object(i.a)({},k,{className:m}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=u},6422:function(e,a,t){"use strict";t.r(a);var i,n=t(407),s=t.n(n),c=t(448),r=t.n(c),l=t(1138),o=t.n(l),d=(t(1035),t(583),t(0)),u=(t(404),t(1971)),p=t(464),b=t(423),f=t(432),v=t(851),k=t(459),w=t(420),m=t(458),g=t(442);t(377);Object(w.a)("Wikipedia");var y=function(e){var a=e.defaultEntry,t=e.style,n=Object(d.useState)(""),c=r()(n,2),l=c[0],g=c[1],y=Object(d.useState)(""),j=r()(y,2),O=j[0],h=j[1],N=Object(u.a)("Wikipedia").t,x=Object(d.useContext)(k.a),E=Object(d.useCallback)((function(e){var a,t,i;x.log({id:"wikipedia",type:m.Nc,value:e}),a=e,t=w.c.t("Wikipedia:about"),e=(e=-1!==(i=a.search(t))?(i+=(o()("x"),t.length+1),a.substring(i,a.length)):a).replace(" ","_"),e="https://"+w.c.language+".wikipedia.org/wiki/"+e,h(e)}),[x]);return Object(d.useEffect)((function(){Object(f.isPrimitive)(a)&&E(a)}),[a,E]),s()(p.a,{className:"wikipedia",style:t},void 0,s()(p.a.Header,{},void 0,s()(p.a.Title,{as:"h3"},void 0,N("browse-wikipedia")),Object(f.isPrimitive)(a)?s()(b.a,{className:"wikipedia-reset-button",variant:"secondary",onClick:function(){E(a)}},void 0,N("reset")):null),s()(p.a.Body,{},void 0,s()(v.a,{className:"wikipedia-voice-input",language:w.c.language,onChange:g,onSubmit:E,onFinalText:E,placeholder:N("enter-text-and-click-globe")}),s()("button",{onClick:function(){E(l)},className:"wikipedia-logo"}),i||(i=s()("div",{className:"wikipedia-separator"})),O?s()("div",{className:"wikipedia-result"},void 0,s()("iframe",{title:N("wikipedia-page"),src:O,width:"100%",height:600})):null))};y.defaultProps={defaultEntry:null,style:{}},a.default=Object(g.a)(y)}}]);