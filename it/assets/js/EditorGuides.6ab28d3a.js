(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{477:function(e,t,a){"use strict";var r=a(406),o=a(408),i=a(409),n=a.n(i),c=a(0),s=a.n(c),d=a(411),l=["xl","lg","md","sm","xs"],u=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,c=e.noGutters,u=e.as,v=void 0===u?"div":u,b=Object(o.a)(e,["bsPrefix","className","noGutters","as"]),m=Object(d.a)(a,"row"),p=m+"-cols",f=[];return l.forEach((function(e){var t,a=b[e];delete b[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&f.push(""+p+r+"-"+t)})),s.a.createElement(v,Object(r.a)({ref:t},b,{className:n.a.apply(void 0,[i,m,c&&"no-gutters"].concat(f))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u},507:function(e,t,a){"use strict";var r=a(406),o=a(408),i=a(409),n=a.n(i),c=a(0),s=a.n(c),d=a(411),l=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.fluid,c=e.as,l=void 0===c?"div":c,u=e.className,v=Object(o.a)(e,["bsPrefix","fluid","as","className"]),b=Object(d.a)(a,"container"),m="string"==typeof i?"-"+i:"-fluid";return s.a.createElement(l,Object(r.a)({ref:t},v,{className:n()(u,i?""+b+m:b)}))}));l.displayName="Container",l.defaultProps={fluid:!1},t.a=l},6224:function(e){e.exports=JSON.parse('[{"target":".ProseMirror","placement":"right","placementBeacon":"right"},{"target":".prose-menu-bar","placement":"bottom","placementBeacon":"bottom"},{"target":".prose-statusbar"}]')},6225:function(e){e.exports=JSON.parse('[{"target":".prosemirror-icon.fa.fa-save","placement":"right"},{"target":".prosemirror-icon.fa.fa-save","placement":"right"},{"target":".prosemirror-icon.fas.fa-file-pdf","placement":"right"},{"target":".prosemirror-icon.fa.fa-folder-open","placement":"right"},{"target":".prosemirror-icon.fa.fa-share-square","placement":"right"}]')},6434:function(e,t,a){"use strict";a.r(t);var r,o,i,n,c,s,d,l,u,v,b,m,p,f,g,h,O,w=a(407),y=a.n(w),j=a(412),k=a.n(j),N=a(448),P=a.n(N),x=(a(428),a(437),a(433),a(430),a(438),a(439),a(0)),C=(a(404),a(450)),S=a.n(C),E=a(423),B=a(734),R=a(589),D=a(594),H=a(867),J=a(464),T=a(490),G=a(477),q=a(507),F=a(1053),I=a(6224),U=a(6225);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){k()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=S()("isle:text-editor:guides"),z=function(e){var t=e.target,a=e.show,w=e.onHide,j=e.t;W('Rendering guides modal for "'.concat(t,'" text editor'));var k=Object(x.useState)("overview"),N=P()(k,2),C=N[0],S=N[1],_=Object(x.useState)(!1),z=P()(_,2),A=z[0],K=z[1],L=Object(x.useRef)(document.getElementById(t)),Q=Object(x.useCallback)((function(){return{saving:U.map((function(e,a){var r=M({},e);return r.content=j("saving-".concat(a)),r.target="#".concat(t," ")+r.target,r})),overview:I.map((function(e,a){var r=M({},e);return r.content=j("overview-".concat(a)),r.target="#".concat(t," ")+r.target,r}))}}),[t,j]),V=Object(x.useState)(Q()),X=P()(V,2),Y=X[0],Z=X[1];Object(x.useEffect)((function(){L.current=document.getElementById(t),Z(Q())}),[Q,t,j]);var $=Object(x.useCallback)((function(){W("".concat(A?"Stopping":"Starting"," the selected tour...")),w(),K(!A)}),[w,A]),ee=Object(x.useCallback)((function(e){S(e.target.value)}),[]),te=Object(x.useCallback)((function(){var e;e=A?y()(J.a,{body:!0},void 0,y()("span",{className:"title"},void 0,j("cancel-tour")),y()("p",{},void 0,j("cancel-tour-msg")),y()(B.a,{},void 0,y()(E.a,{variant:"warning",onClick:$},void 0,j("cancel")))):y()(J.a,{body:!0},void 0,y()("span",{className:"title"},void 0,j("select-tour")),y()(H.a,{},void 0,y()(R.a,{},void 0,y()(H.a.Check,{type:"radio",label:j("editor-overview"),name:"overview",value:"overview",onChange:ee,checked:"overview"===C}),y()(H.a.Check,{type:"radio",label:j("saving-progress"),name:"saving",value:"saving",onChange:ee,checked:"saving"===C}))),y()(B.a,{},void 0,y()(E.a,{variant:"success",onClick:$},void 0,j("start-tour"))));var t=y()(T.a,{sm:5},void 0,y()("h5",{},void 0,j("headers")),y()(J.a,{body:!0,style:{marginBottom:10}},void 0,y()("pre",{},void 0,"# ",j("large-header"),r||(r=y()("br",{})),"## ",j("medium-header"),o||(o=y()("br",{})),"### ",j("small-header"))),y()("h5",{},void 0,j("emphasis")),y()(J.a,{body:!0,style:{marginBottom:10}},void 0,y()("pre",{},void 0,y()("i",{},void 0,"*",j("markup-italic"),"*"),i||(i=y()("br",{})),y()("b",{},void 0,"**",j("markup-bold"),"**"),n||(n=y()("br",{})),c||(c=y()("i",{},void 0,"*We ",y()("b",{},void 0,"**can**")," combine them*")),s||(s=y()("br",{})),y()("u",{},void 0,"++",j("markup-underlined"),"++"),d||(d=y()("br",{})),y()("s",{},void 0,"~~",j("markup-strikethrough"),"~~"),l||(l=y()("br",{})))),y()("h5",{},void 0,j("quotes")),y()(J.a,{body:!0},void 0,y()("pre",{},void 0,j("george-box"),u||(u=y()("br",{})),"> ",j("models-wrong"),v||(v=y()("br",{})),"> ",j("models-useful")))),k=y()(T.a,{sm:7},void 0,y()("h5",{},void 0,j("lists")),y()("h6",{},void 0,j("unordered")),y()(J.a,{body:!0,style:{marginBottom:10}},void 0,y()("pre",{},void 0,"* ",j("item")," 1",b||(b=y()("br",{})),"* ",j("item")," 2",m||(m=y()("br",{})),"\xa0 \xa0 * ",j("item")," 2a",p||(p=y()("br",{})),"\xa0 \xa0 * ",j("item")," 2b")),y()("h6",{},void 0,j("ordered")),y()(J.a,{body:!0},void 0,y()("pre",{},void 0,"1. ",j("item")," 1",f||(f=y()("br",{})),"2. ",j("item")," 2",g||(g=y()("br",{})),"3. ",j("item")," 3",h||(h=y()("br",{})),"\xa0 \xa03a. ",j("item")," 3a",O||(O=y()("br",{})),"\xa0 \xa03b. ",j("item")," 3b")));return y()(D.a,{onHide:w,show:a,dialogClassName:"modal-90w"},void 0,y()(D.a.Header,{closeButton:!0},void 0,y()(D.a.Title,{as:"h4"},void 0,j("editor-guide"))),y()(D.a.Body,{},void 0,y()(q.a,{},void 0,y()("span",{className:"title"},void 0,j("markdown-cheatsheet")),y()(G.a,{},void 0,y()(T.a,{sm:9},void 0,y()(G.a,{},void 0,t,k)),y()(T.a,{sm:3},void 0,e)))),y()(D.a.Footer,{},void 0,y()(E.a,{onClick:w},void 0,j("close"))))}),[ee,w,A,C,$,a,j]);return W("Selected tutorial ".concat(C," is").concat(A?" ":" not ","running")),y()(x.Fragment,{},void 0,te(),"saving"===C?y()(F.b,{steps:Y.saving,showProgress:!0,disableScrolling:!0,run:A,parentNode:L.current,callback:function(e){e.type===F.a.TOUR_END&&K(!1)}}):null,"overview"===C?y()(F.b,{steps:Y.overview,showProgress:!0,disableScrolling:!0,continuous:!0,run:A,parentNode:L.current,callback:function(e){e.type===F.a.TOUR_END&&K(!1)}}):null)};z.defaultProps={onHide:function(){}},t.default=z},734:function(e,t,a){"use strict";var r=a(406),o=a(408),i=a(409),n=a.n(i),c=a(0),s=a.n(c),d=a(411),l=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,c=Object(o.a)(e,["bsPrefix","className"]),l=Object(d.a)(a,"btn-toolbar");return s.a.createElement("div",Object(r.a)({},c,{ref:t,className:n()(i,l)}))}));l.displayName="ButtonToolbar",l.defaultProps={role:"toolbar"},t.a=l}}]);