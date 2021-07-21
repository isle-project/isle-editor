/*! For license information please see MatchListQuestion.5419c2cc.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[5008],{956780:function(e,t,n){"use strict";var i=(0,n(844601).Z)((function(){return n.e(112).then(n.bind(n,198164))}));t.Z=i},812383:function(e,t,n){"use strict";var i=n(454530),r=n(202784),o=(n(213980),["children"]),s=function(e){var t=e.children,n=(0,i.Z)(e,o);return r.createElement("div",n,t)};s.defaultProps={className:"",style:{}},t.Z=s},912740:function(e,t,n){"use strict";var i=(0,n(844601).Z)((function(){return n.e(6131).then(n.bind(n,357459))}));t.Z=i},810035:function(e,t,n){"use strict";var i=(0,n(844601).Z)((function(){return Promise.all([n.e(532),n.e(4507)]).then(n.bind(n,149764))}));t.Z=i},357849:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});n(627476),n(95767),n(694882),n(298351);var i=n(858255),r=n(151119),o=n(574315),s=(n(850110),n(319371),n(898837),n(202784)),a=(n(213980),n(911755)),l=n.n(a),u=n(376699),c=n(822736),f=n(770561),p=n(294565),b=n(42111),v=n(744902),d=n(912740),m=n(956780),h=n(150275),y=n(812383),Z=n(228856),g=n(592864),w=n(810035),k=n(741319),N=n(5140),P=n(432261),C=n(418823),O=n.n(C),S=n(805312);var q=function(e){for(var t=S.BYU().domain([1,e]).interpolate(S.YrV).range([S.B8C("violet"),S.B8C("yellow")]),n=new Array(e),i=0;i<e;i++)n[i]=t(i);return O()(n)},x=(n(382139),n(264659)),j=n(904730),E=n(175663),R=n(750591),B=n(575630);function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,B.Z)(e);if(t){var r=(0,B.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,R.Z)(this,n)}}var z=function(e){(0,E.Z)(n,e);var t=T(n);function n(e){return(0,x.Z)(this,n),t.call(this,e)}return(0,j.Z)(n,[{key:"render",value:function(){var e=this,t=this.props.shuffle?O()(this.props.options):this.props.options;this.options=this.options||t;var n=this.props,r=n.active,o=n.onSelect,s=n.answers;return(0,i.Z)("ul",{className:"match-list-question-ul"},void 0,this.options.map((function(t,n){if(!t)return null;var a=s.filter((function(e){return e.a===t||e.b===t})),l={};a[0]?l.backgroundColor=a[0].color:l.backgroundColor=t===r?"gainsboro":e.props.baseColor;var u=function(){return o(t)};return(0,i.Z)("div",{role:"button",tabIndex:0,onClick:u,onKeyPress:u},n,(0,i.Z)("li",{className:"match-list-question-item",style:l},void 0,t))})))}}]),n}(s.Component);z.defaultProps={active:null,baseColor:"transparent"};var D=z;function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V=l()("isle:match-list-question"),Y=(0,b.Z)("match-list-question"),F=function(e){var t=e.question,n=e.elements,r=e.hints,a=e.submissionMsg,l=e.resubmissionMsg,b=e.disableSubmitNotification,P=e.onSubmit,C=e.until,O=(0,s.useRef)(e.id||Y(e)),S=(0,s.useContext)(k.Z),x=(0,u.$)("questions/match-list").t,j=(0,s.useState)(null),E=(0,o.Z)(j,2),R=E[0],B=E[1],T=(0,s.useState)(null),z=(0,o.Z)(T,2),L=z[0],F=z[1],X=(0,s.useState)(e.colorScale?e.colorScale:q(2*n.length)),U=(0,o.Z)(X,2),_=U[0],A=U[1],G=(0,s.useState)([]),I=(0,o.Z)(G,2),J=I[0],K=I[1],W=(0,s.useState)(null),$=(0,o.Z)(W,2),H=$[0],Q=$[1],ee=(0,s.useState)(!1),te=(0,o.Z)(ee,2),ne=te[0],ie=te[1];(0,s.useEffect)((function(){if(R&&L){var e=J.slice(),t=_.slice();e.push({a:R,b:L,color:t.pop()}),B(null),F(null),K(e),A(t)}}),[R,L,J,_]);var re=(0,s.useCallback)((function(e){V("Logging hint..."),S.log({id:O.current,type:N.Uq,value:e})}),[S]),oe=(0,s.useCallback)((function(){ne?S.addNotification({title:x("answer-resubmitted"),message:l,level:"info"}):S.addNotification({title:x("answer-submitted"),message:a,level:"info"})}),[S,a,l,ne,x]),se=(0,s.useCallback)((function(){var t,n=e.elements,i=e.colorScale;t=i||q(2*n.length),S.log({id:O.current,type:N.Xl,value:null}),H?(Q(null),K(H)):(Q(J),K(n.map((function(e,n){return e.a&&e.b?M(M({},e),{},{color:t[n]}):e}))))}),[e,H,J,S]),ae=(0,s.useCallback)((function(){b||oe(),ie(!0);var e=J.map((function(e){return{a:e.a,b:e.b}}));S.log({id:O.current,type:N.Xe,value:JSON.stringify(e)}),P(e)}),[J,b,S,oe,P]),le=(0,s.useCallback)((function(e){return C&&S.startTime>C?(0,i.Z)("span",{className:"title",style:{marginLeft:4}},void 0,x("question-closed")):(0,i.Z)(h.Z,{id:"".concat(O.current,"_tooltip"),tooltip:x("submit-tooltip")},void 0,(0,i.Z)("div",{style:{display:"inline-block"}},void 0,(0,i.Z)(f.Z,{className:"submit-button",variant:"primary",size:"sm",onClick:ae,style:{pointerEvents:e?"none":null},disabled:e},void 0,x(ne?"resubmit":"submit"))))}),[S,ae,ne,x,C]),ue=(0,s.useCallback)((function(e){var t=_.slice();K(J.filter((function(n){return n.a!==e&&n.b!==e||t.push(n.color),n.a!==e&&n.b!==e}))),A(t),B(e)}),[J,_]),ce=(0,s.useCallback)((function(e){var t=_.slice();K(J.filter((function(n){return n.a!==e&&n.b!==e||t.push(n.color),n.a!==e&&n.b!==e}))),A(t),F(e)}),[J,_]);if(n.some((function(e){return!e.a&&!e.b})))return(0,i.Z)(c.Z,{variant:"danger"},void 0,x("expect-a-or-b-for-each-element"));for(var fe=r.length,pe=(0,i.Z)(v.Z,{onClick:se,disabled:!ne}),be=[],ve=[],de=0,me=0;me<n.length;me++){var he=n[me],ye=he.a,Ze=he.b;be.push(ye||null),ve.push(Ze||null),ye&&Ze&&(de+=1)}var ge=J.length!==de;return(0,i.Z)("div",{id:O.current,className:"match-list-question-container ".concat(e.className),style:e.style},void 0,(0,p.isPrimitive)(t)?(0,i.Z)(g.Z,{inline:!0,className:"question",raw:t}):(0,i.Z)("span",{className:"question"},void 0,t),(0,i.Z)("i",{style:{fontSize:"0.8rem"}},void 0,x("instructions",{complete:de})),(0,i.Z)("div",{className:"match-list-question-lists"},void 0,(0,i.Z)(D,{options:be,onSelect:ue,answers:J,active:R,shuffle:"left"===e.shuffle||"both"===e.shuffle}),(0,i.Z)(D,{options:ve,onSelect:ce,answers:J,active:L,baseColor:"rgb(250,250,255)",shuffle:"right"===e.shuffle||"both"===e.shuffle})),(0,i.Z)("div",{className:"match-list-question-controls"},void 0,le(ge),e.provideFeedback?pe:null,fe>0?(0,i.Z)(m.Z,{onClick:re,hints:e.hints,placement:e.hintPlacement}):null,e.chat?(0,i.Z)("div",{style:{display:"inline-block",marginLeft:"4px"}},void 0,(0,i.Z)(d.Z,{for:O.current})):null,(0,i.Z)(y.Z,{buttonLabel:x("answers"),info:N.Xe,id:O.current,data:{type:"matches",left:e.elements.map((function(e){return e.a})),right:e.elements.map((function(e){return e.b})),question:e.question,solution:e.elements},points:e.points})),e.feedback?(0,i.Z)(Z.Z,{style:{marginTop:"5px",marginRight:"8px"},id:O.current+"_feedback"}):null,(0,i.Z)(w.Z,{for:O.current,points:e.points}))};F.defaultProps={question:"",elements:[],hints:[],hintPlacement:"bottom",provideFeedback:!0,feedback:!0,chat:!1,colorScale:null,shuffle:"both",disableSubmitNotification:!1,submissionMsg:"You have successfully submitted your answer.",resubmissionMsg:"You have successfully re-submitted your answer.",until:null,points:10,className:"",style:{},onSubmit:function(){}};var X=(0,P.W)(F)},744902:function(e,t,n){"use strict";var i=(0,n(844601).Z)((function(){return n.e(8905).then(n.bind(n,912358))}));t.Z=i},61367:function(e){"use strict";e.exports={copy:"shallow"}},900134:function(e,t,n){"use strict";var i=n(501874),r=n(89596),o=n(994133),s=n(294565).isPrimitive,a=n(224008),l=n(295943),u=n(149074).factory,c=n(61367),f=n(216804);e.exports=function(e){var t,n,p;if(t=a(c),arguments.length&&(p=f(t,e)))throw p;return n=e&&e.seed?u({seed:e.seed}):u(),i(b,"seed",n.seed),i(b,"PRNG",n),n=n.normalized,b;function b(e,i){var u,c,p,b,v,d,m,h,y,Z;if(!r(e)&&!o(e))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+e+"`.");if(arguments.length>1&&(v=f(b={},i)))throw v;for(p=b&&b.copy?b.copy:t.copy,(u=s(e))&&(e=e.split(""),p="none"),c=0,"shallow"===p?c+=1:"deep"===p&&(c+=2),h=e.length,d=a(e,c),y=h-1;y>0;y--)Z=l(n()*(y+1)),m=d[y],d[y]=d[Z],d[Z]=m;return u&&(d=e.join("")),d}}},418823:function(e,t,n){"use strict";var i=n(501874),r=n(973489);i(r,"factory",n(900134)),e.exports=r},973489:function(e,t,n){"use strict";var i=n(900134)();e.exports=i},216804:function(e,t,n){"use strict";var i=n(700601),r=n(294565).isPrimitive,o=n(833022);e.exports=function(e,t){if(!o(t))return new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(i(t,"copy")){if(e.copy=t.copy,!r(e.copy))return new TypeError("invalid option. `copy` option must be a string primitive. Option: `"+e.copy+"`.");if("deep"!==e.copy&&"shallow"!==e.copy&&"none"!==e.copy)return new TypeError("invalid option. `copy` option must be `deep`, `shallow` or `none`. Value: `"+e.copy+"`.")}return null}},770561:function(e,t,n){"use strict";var i=n(607560),r=n(998283),o=n(72779),s=n.n(o),a=n(202784),l=n(429658),u=n(482695),c=["bsPrefix","variant","size","active","className","block","type","as"],f=a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,f=e.size,p=e.active,b=e.className,v=e.block,d=e.type,m=e.as,h=(0,r.Z)(e,c),y=(0,l.vE)(n,"btn"),Z=s()(b,y,p&&"active",o&&y+"-"+o,v&&y+"-block",f&&y+"-"+f);if(h.href)return a.createElement(u.Z,(0,i.Z)({},h,{as:m,ref:t,className:s()(Z,h.disabled&&"disabled")}));t&&(h.ref=t),d?h.type=d:m||(h.type="button");var g=m||"button";return a.createElement(g,(0,i.Z)({},h,{className:Z}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=f}}]);