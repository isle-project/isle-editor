/*! For license information please see MatchListQuestion.2ab017eb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[739],{1332:function(e,t,n){"use strict";var i=n(422),r=n(1418);i(r,"factory",n(998)),e.exports=r},1418:function(e,t,n){"use strict";var i=n(998)();e.exports=i},1419:function(e){e.exports=JSON.parse('{"copy":"shallow"}')},1420:function(e,t,n){"use strict";var i=n(425),r=n(432).isPrimitive,o=n(445);e.exports=function(e,t){if(!o(t))return new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(i(t,"copy")){if(e.copy=t.copy,!r(e.copy))return new TypeError("invalid option. `copy` option must be a string primitive. Option: `"+e.copy+"`.");if("deep"!==e.copy&&"shallow"!==e.copy&&"none"!==e.copy)return new TypeError("invalid option. `copy` option must be `deep`, `shallow` or `none`. Value: `"+e.copy+"`.")}return null}},1422:function(e,t,n){"use strict";var i=n(405),r=Object(i.a)((function(){return n.e(1036).then(n.bind(null,2803))}));t.a=r},4056:function(e,t,n){"use strict";n.r(t);n(437),n(433),n(438),n(439);var i=n(407),r=n.n(i),o=n(412),a=n.n(o),s=n(448),c=n.n(s),l=(n(465),n(428),n(430),n(0)),u=(n(404),n(450)),f=n.n(u),b=n(1971),p=n(454),d=n(423),v=n(1332),m=n.n(v),h=n(432),y=n(1076),O=n(543),g=n(1422),j=n(606),w=n(690),k=n(483),N=n(582),P=n(623),S=n(1269),C=n(812),x=n(459),q=n(458),E=n(420),R=n(442),z=(n(421),n(414)),L=n.n(z),M=n(416),T=n.n(M),D=n(418),J=n.n(D),B=n(419),F=n.n(B),V=n(417),Q=n.n(V);function Y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Q()(e);if(t){var r=Q()(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return F()(this,n)}}var _=function(e){J()(n,e);var t=Y(n);function n(e){return L()(this,n),t.call(this,e)}return T()(n,[{key:"render",value:function(){var e=this,t=this.props.shuffle?m()(this.props.options):this.props.options;this.options=this.options||t;var n=this.props,i=n.active,o=n.onSelect,a=n.answers;return r()("ul",{className:"match-list-question-ul"},void 0,this.options.map((function(t,n){if(!t)return null;var s=a.filter((function(e){return e.a===t||e.b===t})),c={};s[0]?c.backgroundColor=s[0].color:c.backgroundColor=t===i?"gainsboro":e.props.baseColor;var l=function(){return o(t)};return r()("div",{role:"button",tabIndex:0,onClick:l,onKeyPress:l},n,r()("li",{className:"match-list-question-item",style:c},void 0,t))})))}}]),n}(l.Component);_.defaultProps={active:null,baseColor:"transparent"};var A=_;n(328);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Object(E.a)("MatchListQuestion");var K=f()("isle:match-list-question"),H=Object(O.a)("match-list-question");function U(e){for(var t=y.m().domain([1,e]).interpolate(y.j).range([y.l("violet"),y.l("yellow")]),n=new Array(e),i=0;i<e;i++)n[i]=t(i);return m()(n)}var W=function(e){var t=e.question,n=e.elements,i=e.hints,o=e.submissionMsg,a=e.resubmissionMsg,s=e.disableSubmitNotification,u=e.onSubmit,f=e.until,v=Object(l.useRef)(e.id||H(e)),m=Object(l.useContext)(x.a),y=Object(b.a)("MatchListQuestion").t,O=Object(l.useState)(null),E=c()(O,2),R=E[0],z=E[1],L=Object(l.useState)(null),M=c()(L,2),T=M[0],D=M[1],J=Object(l.useState)(e.colorScale?e.colorScale:U(2*n.length)),B=c()(J,2),F=B[0],V=B[1],Q=Object(l.useState)([]),Y=c()(Q,2),_=Y[0],G=Y[1],W=Object(l.useState)(null),X=c()(W,2),Z=X[0],$=X[1],ee=Object(l.useState)(!1),te=c()(ee,2),ne=te[0],ie=te[1];Object(l.useEffect)((function(){if(R&&T){var e=_.slice(),t=F.slice();e.push({a:R,b:T,color:t.pop()}),z(null),D(null),G(e),V(t)}}),[R,T,_,F]);var re=Object(l.useCallback)((function(e){K("Logging hint..."),m.log({id:v.current,type:q.xb,value:e})}),[m]),oe=Object(l.useCallback)((function(){ne?m.addNotification({title:y("answer-resubmitted"),message:a,level:"info"}):m.addNotification({title:y("answer-submitted"),message:o,level:"info"})}),[m,o,a,ne,y]),ae=Object(l.useCallback)((function(){var t,n=e.elements,i=e.colorScale;t=i||U(2*n.length),m.log({id:v.current,type:q.zb,value:null}),Z?($(null),G(Z)):($(_),G(n.map((function(e,n){return e.a&&e.b?I(I({},e),{},{color:t[n]}):e}))))}),[e,Z,_,m]),se=Object(l.useCallback)((function(){s||oe(),ie(!0);var e=_.map((function(e){return{a:e.a,b:e.b}}));m.log({id:v.current,type:q.yb,value:JSON.stringify(e)}),u(e)}),[_,s,m,oe,u]),ce=Object(l.useCallback)((function(e){return f&&m.startTime>f?r()("span",{className:"title",style:{marginLeft:4}},void 0,y("question-closed")):r()(k.a,{id:"".concat(v.current,"_tooltip"),tooltip:y("submit-tooltip")},void 0,r()("div",{style:{display:"inline-block"}},void 0,r()(d.a,{className:"submit-button",variant:"primary",size:"sm",onClick:se,style:{pointerEvents:e?"none":null},disabled:e},void 0,y(ne?"resubmit":"submit"))))}),[m,se,ne,y,f]),le=Object(l.useCallback)((function(e){var t=F.slice();G(_.filter((function(n){return n.a!==e&&n.b!==e||t.push(n.color),n.a!==e&&n.b!==e}))),V(t),z(e)}),[_,F]),ue=Object(l.useCallback)((function(e){var t=F.slice();G(_.filter((function(n){return n.a!==e&&n.b!==e||t.push(n.color),n.a!==e&&n.b!==e}))),V(t),D(e)}),[_,F]);if(n.some((function(e){return!e.a&&!e.b})))return r()(p.a,{variant:"danger"},void 0,y("expect-a-or-b-for-each-element"));for(var fe=i.length,be=r()(g.a,{onClick:ae,disabled:!ne}),pe=[],de=[],ve=0,me=0;me<n.length;me++){var he=n[me],ye=he.a,Oe=he.b;pe.push(ye||null),de.push(Oe||null),ye&&Oe&&(ve+=1)}var ge=_.length!==ve;return r()("div",{id:v.current,className:"match-list-question-container ".concat(e.className),style:e.style},void 0,Object(h.isPrimitive)(t)?r()(S.a,{inline:!0,className:"question",raw:t}):r()("span",{className:"question"},void 0,t),r()("i",{style:{fontSize:"0.8rem"}},void 0,y("instructions",{complete:ve})),r()("div",{className:"match-list-question-lists"},void 0,r()(A,{options:pe,onSelect:le,answers:_,active:R,shuffle:"left"===e.shuffle||"both"===e.shuffle}),r()(A,{options:de,onSelect:ue,answers:_,active:T,baseColor:"rgb(250,250,255)",shuffle:"right"===e.shuffle||"both"===e.shuffle})),r()("div",{className:"match-list-question-controls"},void 0,ce(ge),e.provideFeedback?be:null,fe>0?r()(w.a,{onClick:re,hints:e.hints,placement:e.hintPlacement}):null,e.chat?r()("div",{style:{display:"inline-block",marginLeft:"4px"}},void 0,r()(j.a,{for:v.current})):null,r()(N.a,{buttonLabel:y("answers"),info:q.yb,id:v.current,data:{type:"matches",left:e.elements.map((function(e){return e.a})),right:e.elements.map((function(e){return e.b})),question:e.question,solution:e.elements},points:e.points})),e.feedback?r()(P.a,{style:{marginTop:"5px",marginRight:"8px"},id:v.current+"_feedback"}):null,r()(C.a,{for:v.current,points:e.points}))};W.defaultProps={question:"",elements:[],hints:[],hintPlacement:"bottom",provideFeedback:!0,feedback:!0,chat:!1,colorScale:null,shuffle:"both",disableSubmitNotification:!1,submissionMsg:"You have successfully submitted your answer.",resubmissionMsg:"You have successfully re-submitted your answer.",until:null,points:10,className:"",style:{},onSubmit:function(){}};t.default=Object(R.a)(W)},423:function(e,t,n){"use strict";var i=n(406),r=n(408),o=n(409),a=n.n(o),s=n(0),c=n.n(s),l=n(411),u=n(463),f=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,s=e.size,f=e.active,b=e.className,p=e.block,d=e.type,v=e.as,m=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(l.a)(n,"btn"),y=a()(b,h,f&&"active",o&&h+"-"+o,p&&h+"-block",s&&h+"-"+s);if(m.href)return c.a.createElement(u.a,Object(i.a)({},m,{as:v,ref:t,className:a()(y,m.disabled&&"disabled")}));t&&(m.ref=t),d?m.type=d:v||(m.type="button");var O=v||"button";return c.a.createElement(O,Object(i.a)({},m,{className:y}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=f},582:function(e,t,n){"use strict";var i=n(555),r=n.n(i),o=n(0),a=n.n(o),s=(n(404),function(e){var t=e.children,n=r()(e,["children"]);return a.a.createElement("div",n,t)});s.defaultProps={className:"",style:{}},t.a=s},606:function(e,t,n){"use strict";var i=n(405),r=Object(i.a)((function(){return n.e(222).then(n.bind(null,865))}));t.a=r},690:function(e,t,n){"use strict";var i=n(405),r=Object(i.a)((function(){return n.e(407).then(n.bind(null,1017))}));t.a=r},812:function(e,t,n){"use strict";var i=n(405),r=Object(i.a)((function(){return Promise.all([n.e(0),n.e(380)]).then(n.bind(null,1355))}));t.a=r},998:function(e,t,n){"use strict";var i=n(422),r=n(640),o=n(432).isPrimitive,a=n(515),s=n(452),c=n(666).factory,l=n(1419),u=n(1420);e.exports=function(e){var t,n,f;if(t=a(l),arguments.length&&(f=u(t,e)))throw f;return n=e&&e.seed?c({seed:e.seed}):c(),i(b,"seed",n.seed),i(b,"PRNG",n),n=n.normalized,b;function b(e,i){var c,l,f,b,p,d,v,m,h,y;if(!r(e))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+e+"`.");if(arguments.length>1&&(p=u(b={},i)))throw p;for(f=b&&b.copy?b.copy:t.copy,(c=o(e))&&(e=e.split(""),f="none"),l=0,"shallow"===f?l+=1:"deep"===f&&(l+=2),m=e.length,d=a(e,l),h=m-1;h>0;h--)y=s(n()*(h+1)),v=d[h],d[h]=d[y],d[y]=v;return c&&(d=e.join("")),d}}}}]);