(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{3808:function(o,i,t){"use strict";t.r(i);var n=t(406),s=t.n(n),a=t(462),l=t.n(a),e=t(0),u=(t(404),t(4097)),d=t(433),v=t(862),c=t(819),p=t(425);Object(p.a)("SolutionButton");var r=function(o){var i=o.disabled,t=o.hasHints,n=o.onClick,a=o.t,u=Object(e.useState)(!1),p=l()(u,2),r=p[0],b=p[1],w=s()(v.a,{id:"tooltip"},void 0,a("solution-available-tooltip"),t?a("solution-available-tooltip-hints"):null,".");return i?s()(c.a,{placement:"top",positionLeft:100,overlay:w,rootClose:!0},void 0,s()("div",{style:{display:"inline-block"}},void 0,s()(d.a,{className:"solution-button",variant:"warning",size:"sm",disabled:!0,style:{pointerEvents:"none"}},void 0,a("show-solution")))):s()("div",{style:{display:"inline-block"}},void 0,s()(d.a,{className:"solution-button",variant:"warning",size:"sm",onClick:function(){b(!r),n()}},void 0,a(r?"hide-solution":"show-solution")))};r.defaultProps={hasHints:!0},i.default=Object(u.a)("SolutionButton")(r)}}]);