(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{6530:function(e,t,n){"use strict";n.r(t);n(440),n(438),n(528),n(543),n(444);var r=n(413),o=n.n(r),i=n(406),a=n.n(i),c=n(462),u=n.n(c),s=(n(502),n(0)),l=n.n(s),p=(n(404),n(453)),b=n.n(p),f=n(4097),m=n(463),O=n(433),d=n(608),v=n.n(d),g=n(467),j=n(449),y=n.n(j);var h=function(e){return y()(e)&&e.props&&e.props.tagName&&e.props.startColumn&&e.props.endColumn&&e.props.startLineNumber&&e.props.endLineNumber},w=n(425),P=n(448);n(346);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object(w.a)("QuestionForm");var C=b()("isle:question-form"),E=function(e){var t,n=e.buttonLabel,r=e.onSubmit,i=e.children,c=e.t,p=Object(s.useContext)(g.a),b=Object(s.useState)({}),f=u()(b,2),d=f[0],j=f[1];if(!i)return a()(m.a,{variant:"danger"},void 0,c("missing-children"));var y=function(e,t){return l.a.cloneElement(e,{disableSubmitNotification:!0,onChange:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d);e[t]=!0,j(e)},key:t})},w=l.a.Children.map(i,(function(e,t){return v()(e)?e:h(e)?(C("Encountered a line wrapper, go one level deeper..."),l.a.cloneElement(e,{children:y(e.props.children,t),key:t})):y(e,t)})),P=0;for(var E in d)d[E]&&(P+=1);var N=P!==w.length&&!p.isOwner();return l.a.createElement("div",{ref:function(e){t=e},className:"question-form"},w,a()(O.a,{disabled:N,onClick:function(){for(var e=t.getElementsByClassName("submit-button"),n=0;n<e.length;n++)e[n].click();r()},style:{float:"right"}},void 0,n||c("submit")))};E.defaultProps={buttonLabel:null,onSubmit:function(){}};t.default=Object(f.a)("QuestionForm")(Object(P.a)(E))}}]);