(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{6465:function(e,a,r){"use strict";r.r(a);var n,t,o=r(407),c=r.n(o),i=r(448),s=r.n(i),l=r(0),p=r(1971),d=r(556),u=r(423),g=r(464),v=r(6118),m=r.n(v),f=(r(583),r(1399)),b=r.n(f),y=r(481),N=r.n(y),k=/[\u001B\u009B][[\]()#;?]*(?:(?:(?:[a-zA-Z\d]*(?:;[a-zA-Z\d]*)*)?\u0007)|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~]))/g,w=/\((\d+):/,h=/(\n *)(\d*) \|/g,L=/<LineWrapper tagName="[a-zA-Z0-9]+" startLineNumber=\{\d+\} endLineNumber=\{\d+\} >/g,A=/<\/LineWrapper>/g,B=/<\/?React.Fragment>/g,S=/<StatusBar[^\n]+\n/,Z=function(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(k,"\n")).replace(S,"\n")).replace("</Lesson>","")).replace(w,(function(e,a){return"("+String(parseInt(a,10)-9)+":"}))).replace(h,(function(e,a,r){var n=r?String(parseInt(r,10)-9):"";return a+b()(" ",N()(r.length-n.length,0))+n+" |"}))).replace(L,"")).replace(A,"")).replace(B,"")).replace("&lt;","<")).replace("&gt;",">")},j=r(483);r(378),a.default=function(e){var a=Object(p.a)("General").t,r=Object(l.useState)(!1),o=s()(r,2),i=o[0],v=o[1],f=Object(l.useCallback)((function(){v(!i)}),[i]),b=a("error-encountered");return e.componentName&&(b+=" ".concat(a("in")," <").concat(e.componentName," />")),c()(g.a,{className:"error-boundary-message"},void 0,c()(g.a.Body,{},void 0,c()("h3",{},void 0,b),c()("pre",{},void 0,c()(m.a,{},void 0,Z(i?e.error.stack:e.error.message))),c()(d.a,{style:{position:"absolute",top:12,right:22}},void 0,c()(j.a,{tooltip:a("toggle-error-stack-trace"),placement:"left"},void 0,c()(u.a,{variant:"outline-secondary",onClick:f},void 0,n||(n=c()("i",{className:"fas fa-layer-group"})))),c()(j.a,{tooltip:a("retry")},void 0,c()(u.a,{variant:"outline-secondary",onClick:e.resetError},void 0,t||(t=c()("i",{className:"fas fa-redo"})))))))}}}]);