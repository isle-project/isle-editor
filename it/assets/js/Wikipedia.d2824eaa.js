(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{1305:function(e,i){e.exports=function(e){throw new TypeError('"'+e+'" is read-only')},e.exports.default=e.exports,e.exports.__esModule=!0},6485:function(e,i,a){"use strict";a.r(i);var t=a(404),n=a.n(t),o=a(457),s=a.n(o),c=a(1305),l=a.n(c),r=(a(1179),a(663),a(0)),d=(a(402),a(2022)),u=a(473),p=a(431),w=a(442),b=a(994),k=a(465),v=a(423),f=a(471),g=a(445);a(376);Object(v.a)("Wikipedia");var h=n()("div",{className:"wikipedia-separator"}),j=function(e){var i=e.defaultEntry,a=e.style,t=Object(r.useState)(""),o=s()(t,2),c=o[0],g=o[1],j=Object(r.useState)(""),m=s()(j,2),y=m[0],O=m[1],x=Object(d.a)("Wikipedia").t,N=Object(r.useContext)(k.a),C=Object(r.useCallback)((function(e){var i,a,t;N.log({id:"wikipedia",type:f.Lc,value:e}),i=e,a=v.c.t("Wikipedia:about"),e=(e=-1!==(t=i.search(a))?(t+=(l()("x"),a.length+1),i.substring(t,i.length)):i).replace(" ","_"),e="https://"+v.c.language+".wikipedia.org/wiki/"+e,O(e)}),[N]);return Object(r.useEffect)((function(){Object(w.isPrimitive)(i)&&C(i)}),[i,C]),n()(u.a,{className:"wikipedia",style:a},void 0,n()(u.a.Header,{},void 0,n()(u.a.Title,{as:"h3"},void 0,x("browse-wikipedia")),Object(w.isPrimitive)(i)?n()(p.a,{className:"wikipedia-reset-button",variant:"secondary",onClick:function(){C(i)}},void 0,x("reset")):null),n()(u.a.Body,{},void 0,n()(b.a,{className:"wikipedia-voice-input",language:v.c.language,onChange:g,onSubmit:C,onFinalText:C,placeholder:x("enter-text-and-click-globe")}),n()("button",{onClick:function(){C(c)},className:"wikipedia-logo"}),h,y?n()("div",{className:"wikipedia-result"},void 0,n()("iframe",{title:x("wikipedia-page"),src:y,width:"100%",height:600})):null))};j.defaultProps={defaultEntry:null,style:{}},i.default=Object(g.a)(j)}}]);