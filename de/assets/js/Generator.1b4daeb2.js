(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{6437:function(e,t,n){"use strict";n.r(t);var a=n(406),u=n.n(a),c=n(462),o=n.n(c),r=n(0),b=n.n(r),f=(n(404),n(433)),i=n(573),l=n(609),s=Object(l.a)("generator"),d=function(e){var t=e.id,n=e.autoStart,a=e.buttonLabel,c=e.onGenerate,l=Object(r.useRef)(t||s({autoStart:n,buttonLabel:a,onGenerate:c})),d=Object(r.useState)(null),j=o()(d,2),O=j[0],p=j[1],v=Object(r.useRef)();Object(r.useEffect)((function(){v.current=c}));var w=Object(r.useCallback)((function(){var e=v.current();e&&(e=b.a.cloneElement(e,{id:l.current}),p(e))}),[]);return Object(r.useEffect)((function(){n&&w()}),[n,w]),u()(i.a,{},void 0,O,u()(f.a,{block:!0,onClick:w},void 0,a))};d.defaultProps={autoStart:!0,buttonLabel:"Generate"},t.default=d}}]);