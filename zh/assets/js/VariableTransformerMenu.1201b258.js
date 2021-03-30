/*! For license information please see VariableTransformerMenu.1201b258.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1151],{1333:function(e,t,a){"use strict";var n=a(422),r=a(574),o=a(601),i=a(445),s=a(476),l=a(425),c=a(470),d=a(573),u=a(666).factory,p=a(415),v=a(602),f=a(2635),h=a(2636);e.exports=function(){var e,t,a,g,m,b;if(0===arguments.length)t=u();else if(1===arguments.length){if(!i(e=arguments[0]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(l(e,"prng")){if(!s(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=u(e)}else{if(g=f(m=arguments[0],b=arguments[1]))throw g;if(arguments.length>2){if(!i(e=arguments[2]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(l(e,"prng")){if(!s(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=u(e)}else t=u()}return n(a=void 0===m?P:V,"NAME","uniform"),e&&e.prng?(n(a,"seed",null),n(a,"seedLength",null),o(a,"state",c(null),d),n(a,"stateLength",null),n(a,"byteLength",null),n(a,"toJSON",c(null)),n(a,"PRNG",t)):(r(a,"seed",y),r(a,"seedLength",w),o(a,"state",x,k),r(a,"stateLength",N),r(a,"byteLength",C),n(a,"toJSON",O),n(a,"PRNG",t),t=t.normalized),a;function y(){return t.seed}function w(){return t.seedLength}function N(){return t.stateLength}function C(){return t.byteLength}function x(){return t.state}function k(e){t.state=e}function O(){var e={type:"PRNG"};return e.name=a.NAME,e.state=v(t.state),e.params=void 0===m?[]:[m,b],e}function V(){return h(t,m,b)}function P(e,a){return p(e)||p(a)||e>=a?NaN:h(t,e,a)}}},2629:function(e,t,a){"use strict";var n=a(2630);e.exports=n},2630:function(e,t,a){"use strict";var n=a(432).isPrimitive;e.exports=function(e){var t,a,r;if(!n(e))return!1;if(0===(t=e.length))return!1;for(r=0;r<t;r++)if((a=e.charCodeAt(r))<48||a>57)return!1;return!0}},2633:function(e,t,a){"use strict";var n=a(422),r=a(2634);n(r,"factory",a(1333)),e.exports=r},2634:function(e,t,a){"use strict";var n=a(1333)();e.exports=n},2635:function(e,t,a){"use strict";var n=a(429).isPrimitive,r=a(455);e.exports=function(e,t){return!n(e)||r(e)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+e+"`."):!n(t)||r(t)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+t+"`."):e>=t?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+e+","+t+"]`."):null}},2636:function(e,t,a){"use strict";e.exports=function(e,t,a){var n=e();return a*n+(1-n)*t}},2685:function(e,t,a){"use strict";t.a=function(e){e.stopPropagation()}},2712:function(e,t,a){"use strict";var n=a(406),r=a(408),o=a(409),i=a.n(o),s=a(0),l=a.n(s),c=a(411),d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.striped,d=e.bordered,u=e.borderless,p=e.hover,v=e.size,f=e.variant,h=e.responsive,g=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(c.a)(a,"table"),b=i()(o,m,f&&m+"-"+f,v&&m+"-"+v,s&&m+"-striped",d&&m+"-bordered",u&&m+"-borderless",p&&m+"-hover"),y=l.a.createElement("table",Object(n.a)({},g,{className:b,ref:t}));if(h){var w=m+"-responsive";return"string"==typeof h&&(w=w+"-"+h),l.a.createElement("div",{className:w},y)}return y}));t.a=d},4006:function(e,t,a){"use strict";var n=a(491),r=a(549),o=a(1032),i="startsWith",s="".startsWith;n(n.P+n.F*a(1033)(i),"String",{startsWith:function(e){var t=o(this,e,i),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return s?s.call(t,n,a):t.slice(a,a+n.length)===n}})},6329:function(e,t,a){"use strict";a.r(t);var n,r,o,i,s=a(407),l=a.n(s),c=a(448),d=a.n(c),u=a(0),p=a.n(u),v=(a(404),a(423)),f=(a(437),a(433),a(438),a(439),a(412)),h=a.n(f),g=(a(465),a(430),a(450)),m=a.n(g),b=a(658),y=a(687),w=a(589),N=a(1101),C=a(454),x=a(464),k=a(477),O=a(490),V=a(2633),P=a.n(V),F=a(480),j=a.n(F),S=a(474),G=a.n(S),H=a(515),q=a.n(H),L=a(429),A=a(487),R=a(506),T=a(745),E=a(714),B=a(504),z=a(518),M=a(492),K=a(455),D=a.n(K),I=a(493),W=a(585),J=a(632),Y=a(618),$=a(458),X=a(1078),Q=a(2685),U=a(4110),Z=a(4107);a(396);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var te=m()("isle:data-explorer:variable-transformer"),ae=/shapes\[(\d)\]\.x0/,ne={group:null,displayDensity:!0,densityType:"Data-driven",chooseBins:!1,nBins:null};function re(e,t){return e-t}var oe=function(e){for(var t=[],a=0;a<e.length;a++)t.push({type:"line",x0:e[a],y0:-100,x1:e[a],y1:100,line:{color:"red",width:3}});return t},ie=function(e,t){var a=new Array(t.length);t[0]?a[0]=t[0]:a[0]="(-\u221e,".concat(e[0],")");for(var n=1;n<t.length;n++)t[n]?a[n]=t[n]:a[n]="[".concat(e[n-1],",").concat(e[n],")");var r=t.length-1;return t[r]?a[r]=t[r]:a[r]="[".concat(e[e.length-1],",\u221e)"),a},se=function(e){var t,a,s=Object(u.useState)(""),c=d()(s,2),p=c[0],f=c[1],h=Object(u.useState)(0),g=d()(h,2),m=g[0],V=g[1],F=Object(u.useState)({variable:null,configHist:null,breakpoints:null,categories:null,customNames:null}),S=d()(F,2),H=S[0],K=S[1],_=p.length<2,se=function(){var t=H.variable,a=H.categories,n=H.breakpoints,r=e.data[t],o=Object(U.a)(r,a,n);e.logAction($.f,{name:p,variable:t,breaks:n,categories:a});var i=Object(I.a)(p,a);e.onGenerate(i,o),e.onHide()},le=function(e){13!==e.charCode||_||se()},ce=function(e){f(e.target.value)},de=function(e){return function(t){te("Change break point...");var a=H.breakpoints.slice();a[e]=G()(t,-m),a.sort(re);var n=q()(H.configHist);n.layout.shapes=oe(a),K(ee(ee({},H),{},{configHist:n,breakpoints:a,categories:ie(a,H.customNames)}))}},ue=function(e){return function(t){var a=H.categories.slice();a[e]=t;var n=H.customNames.slice();n[e]=t;var r=ee(ee({},H),{},{categories:a,customNames:n});K(r)}},pe=function(e){return function(){var t=H.breakpoints,a=H.categories,n=H.customNames;t.splice(e,1),a.splice(e,1),n.splice(e,1);var r=ee({},H.configHist);r.layout.shapes=oe(t),K(ee(ee({},H),{},{configHist:r,categories:a,customNames:n,breakpoints:t}))}},ve=function(e){var t=j()(e),a=ae.exec(t[0]);if(a){var n=a[1],r=H.breakpoints.slice();r[n]=G()(e[t[0]],-m),r.sort(re);var o=q()(H.configHist);o.layout.shapes=oe(r),K(ee(ee({},H),{},{configHist:o,breakpoints:r,categories:ie(r,H.customNames)}))}},fe=function(t){te("Change variable to bin...");var a=ee({data:e.data,variable:t},ne),n=Object(X.b)(a);n.layout.yaxis={range:[Object(J.a)(n.data[1].y),Object(Y.a)(n.data[1].y)],fixedrange:!0},n.layout.xaxis={fixedrange:!0};var r=e.data[t];r=r.filter((function(e){return Object(L.isPrimitive)(e)&&!D()(e)}));var o=[G()(Object(W.a)(r),-m)];n.layout.shapes=oe(o);var i=[!1,!1];K({variable:t,configHist:n,breakpoints:o,customNames:i,categories:ie(o,i)})},he=function(){var t=H.breakpoints.slice(),a=e.data[H.variable];a=a.filter((function(e){return Object(L.isPrimitive)(e)&&!D()(e)}));var n=P()(.8,1.2)*Object(W.a)(a);t.push(G()(n,-m)),t.sort(re);var r=q()(H.configHist);r.layout.shapes=oe(t);var o=H.customNames;o.push(!1);var i=ee(ee({},H),{},{breakpoints:t,configHist:r,categories:ie(t,o)});K(i)};return l()(E.a,{cancel:".card-body",onDragStart:Q.a,style:{zIndex:1006}},void 0,l()(z.a,{onHide:e.onHide,show:e.show,header:e.t("bin-transformer-header"),footer:l()(v.a,{onClick:se,disabled:_},void 0,e.t("create-new-variable")),bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"},role:"button",tabIndex:0},void 0,(t=H.configHist,a=l()(R.a,{legend:e.t("variable-to-bin"),defaultValue:H.variable,options:e.quantitative,onChange:fe,style:{maxWidth:400}}),t?l()(u.Fragment,{},void 0,a,l()(v.a,{className:"insert-line-button",onClick:he},void 0,e.t("insert-break-line")),l()("p",{},void 0,e.t("drag-red-bars"),"(",l()(A.b,{legend:e.t("digits-after-comma-snap"),min:0,max:9,inline:!0,defaultValue:m,onChange:V}),")"),l()("div",{style:{height:250}},void 0,l()(B.a,{data:t.data,layout:t.layout,editable:!0,fit:!0,removeButtons:!0,legendButtons:!1,onRelayout:ve})),l()("div",{},void 0,l()(x.a,{className:"mb-2"},void 0,l()(x.a.Header,{},void 0,e.t("choose-category-labels"),":"),l()(x.a.Body,{},void 0,function(){var t=[],a=H.breakpoints,s=1===a.length;if(t.push(l()(k.a,{},"div-0",l()(O.a,{md:7},void 0,n||(n=l()(M.a,{raw:"x < "})),l()(A.b,{inline:!0,onBlur:de(0),defaultValue:a[0],step:"any"})),l()(O.a,{md:4},void 0,l()(T.a,{legend:"".concat(e.t("label")," 1"),defaultValue:H.categories[0],onChange:ue(0),style:{width:200}},0)),r||(r=l()(O.a,{md:1})))),a.length>1)for(var c=0;c<a.length-1;c++){var d=ue(c+1);t.push(l()(k.a,{},"div-".concat(c+1),l()(O.a,{md:7},void 0,l()(A.b,{inline:!0,onBlur:de(c),defaultValue:a[c],step:"any"}),o||(o=l()(M.a,{raw:"\\le x <"})),l()(A.b,{inline:!0,onBlur:de(c+1),defaultValue:a[c+1],step:"any"})),l()(O.a,{md:4},void 0,l()(T.a,{legend:"".concat(e.t("label")," ").concat(c+2),defaultValue:H.categories[c+1],onChange:d,style:{width:200}},1+c)),l()(O.a,{md:1},void 0,l()(Z.a,{onClick:pe(c),style:{marginTop:"5px"},disabled:s,tooltipPlacement:"right"}))))}var u=a.length;return t.push(l()(k.a,{},"div-".concat(u),l()(O.a,{md:7},void 0,i||(i=l()(M.a,{raw:"x \\ge"})),l()(A.b,{inline:!0,onChange:de(u-1),defaultValue:a[u-1],step:"any"})),l()(O.a,{md:4},void 0,l()(T.a,{legend:"Label ".concat(u+1),defaultValue:H.categories[u],onChange:ue(u),style:{width:200}},u)),l()(O.a,{md:1},void 0,l()(Z.a,{onClick:pe(u-1),style:{marginTop:"5px"},disabled:s})))),t}()))),l()(w.a,{style:{width:"fit-content"}},void 0,l()(y.a,{},void 0,e.t("name-new-variable"),":"),l()(b.a,{type:"text",placeholder:e.t("select-name"),onChange:ce,onKeyPress:le}),l()(N.a,{},void 0,e.t("new-variable-appended")))):l()(u.Fragment,{},void 0,a,l()(C.a,{variant:"info"},void 0,e.t("select-variable-bin"))))))};se.defaultProps={logAction:function(){},onGenerate:function(){}};var le,ce,de,ue=se,pe=(a(421),a(414)),ve=a.n(pe),fe=a(416),he=a.n(fe),ge=a(424),me=a.n(ge),be=a(418),ye=a.n(be),we=a(419),Ne=a.n(we),Ce=a(417),xe=a.n(Ce),ke=(a(4006),a(482),a(428),a(4096)),Oe=a(2712),Ve=a(556),Pe=a(734),Fe=a(1077),je=a(1102),Se=a(772),Ge=a(483),He=a(661),qe=a.n(He),Le=a(471),Ae=a.n(Le),Re=a(514),Te=a.n(Re),Ee=a(4108),Be=a(4109);a(397);function ze(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=xe()(e);if(t){var r=xe()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Ne()(this,a)}}var Me=qe()(0,10,1),Ke=/(?:^|\n)([^\n]*)$/,De=/^[0-9]/,Ie=p.a.forwardRef((function(e,t){var a=e.children,n=e.style,r=e.className,o=e["aria-labelledby"],i=Object(u.useState)(""),s=d()(i,2),c=s[0],v=s[1];return p.a.createElement("div",{ref:t,style:n,className:r,"aria-labelledby":o},l()(b.a,{className:"mx-3 my-2 w-auto",placeholder:"Type to filter...",onChange:function(e){return v(e.target.value)},value:c}),l()("ul",{className:"list-unstyled"},void 0,p.a.Children.toArray(a).filter((function(e){return!c||e.props.children.toLowerCase().startsWith(c)}))))})),We=function(e){ye()(a,e);var t=ze(a);function a(e){var n;return ve()(this,a),n=t.call(this,e),h()(me()(n),"handleGenerate",(function(){var e,t=n.state,a=t.code,r=t.name;Ae()(a,"return ")||(a=Te()(a,Ke,"\nreturn $1"));try{e=Object(Ee.a)(a,n.props.data),n.props.logAction($.cb,{code:a,name:r}),n.props.onGenerate(r,e)}catch(o){return n.props.session.addNotification({title:"Errored",message:"Encountered the following error: "+o.message,level:"error",position:"tr"})}n.props.onHide()})),h()(me()(n),"handleNameChange",(function(e){n.setState({name:e.target.value})})),h()(me()(n),"handleCodeChange",(function(e){n.setState({code:e})})),h()(me()(n),"handleKeyPress",(function(e){13===e.charCode&&n.state.name.length>=2&&n.handleGenerate()})),h()(me()(n),"insertVarFactory",(function(e){return function(){var t=n.state.code.substring(0,n.state.selection),a="datum";t+=a+=!Ae()(e," ")&&!Ae()(e,".")&&!De.test(e)?".".concat(e):"['".concat(e,"']"),t+=n.state.code.substring(n.state.selection),n.setState({code:t,selection:n.state.selection+a.length})}})),h()(me()(n),"insertLiteralFactory",(function(e){return function(){var t=n.state.code.substring(0,n.state.selection),a=e;t+=a,t+=n.state.code.substring(n.state.selection),n.setState({code:t,selection:n.state.selection+a.length})}})),h()(me()(n),"insertFuncFactory",(function(e){return function(){var t=n.state.code.substring(0,n.state.selection),a=" "+e+"()";t+=a,t+=n.state.code.substring(n.state.selection),n.setState({code:t,selection:n.state.selection+a.length-1})}})),n.state={code:e.defaultCode,selection:null,name:"",showGuide:!1},n}return he()(a,[{key:"render",value:function(){var e=this,t=this.props.t,a=this.props.quantitative.map((function(t,a){return l()(Fe.a.Item,{onClick:e.insertVarFactory(t),eventKey:a},a,t)}));return l()(E.a,{cancel:".card-body",onDragStart:function(e){e.stopPropagation()},style:{zIndex:1006}},void 0,l()(z.a,{show:this.props.show,onHide:this.props.onHide,header:this.props.t("formula-transformer-header"),footer:l()(v.a,{onClick:this.handleGenerate,disabled:this.state.name.length<2},void 0,this.props.t("create-new-variable")),role:"button",tabIndex:0,bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"}},void 0,l()("div",{className:"formula-transformer-body"},void 0,l()(je.a,{headerClassName:"title",header:this.state.showGuide?t("hide-example-guide"):t("show-example-guide"),visible:this.state.showGuide,onClick:function(){return e.setState({showGuide:!e.state.showGuide})}},void 0,l()("p",{},void 0,t("formula-transformer-example-intro")),l()(Oe.a,{condensed:!0},void 0,l()("thead",{},void 0,l()("tr",{},void 0,l()("th",{},void 0,t("type")),l()("th",{},void 0,t("example")),l()("th",{},void 0,t("description")))),l()("tbody",{},void 0,l()("tr",{},void 0,l()("td",{},void 0,t("interaction"),":"),l()("td",{},void 0,l()("code",{},void 0,"datum.",this.props.quantitative[0]," * datum.",this.props.quantitative[1])),l()("td",{},void 0,l()(ke.a,{i18nKey:"example-description-multiply",ns:"DataExplorer"},void 0,"Multiply values of variables ",l()("code",{},void 0,{first:this.props.quantitative[0]})," and ",l()("code",{},void 0,{second:this.props.quantitative[1]})))),l()("tr",{},void 0,l()("td",{},void 0,t("transformation"),":"),l()("td",{},void 0,l()("code",{},void 0,"exp( datum.",this.props.quantitative[0]," )")),l()("td",{},void 0,l()(ke.a,{i18nKey:"example-description-exponential",ns:"DataExplorer"},void 0,"Natural exponential function of variable ",l()("code",{},void 0,{variable:this.props.quantitative[0]})))),l()("tr",{},void 0,l()("td",{},void 0,t("function"),":"),l()("td",{},void 0,l()("code",{},void 0,"9/5 * ",this.props.quantitative[0]," + 32")),l()("td",{},void 0,l()(ke.a,{i18nKey:"example-description-calculation",ns:"DataExplorer"},void 0,"Multiply values of ",l()("code",{},void 0,{variable:this.props.quantitative[0]})," by ",le||(le=l()("code",{},void 0,"9/5"))," and add ",ce||(ce=l()("code",{},void 0,"32")))))))),de||(de=l()("hr",{})),l()("div",{className:"mb-2"},void 0,l()(Pe.a,{style:{marginBottom:5}},void 0,l()(Fe.a,{className:"mr-2"},void 0,l()(Fe.a.Toggle,{variant:"light",id:"dropdown-custom-components"},void 0,t("quantitative")),l()(Fe.a.Menu,{variant:"light",as:Ie,id:"bg-nested-dropdown"},void 0,a)),l()(Fe.a,{className:"mr-2"},void 0,l()(Fe.a.Toggle,{variant:"light",id:"dropdown-custom-components"},void 0,t("categorical")),l()(Fe.a.Menu,{variant:"light",as:Ie,id:"bg-nested-dropdown"},void 0,this.props.categorical.map((function(t,a){return l()(Fe.a.Item,{onClick:e.insertVarFactory(t),eventKey:a},a,t)})))))),l()(x.a,{className:"mb-2"},void 0,l()(x.a.Body,{},void 0,l()(Pe.a,{style:{marginBottom:5}},void 0,l()(Ve.a,{size:"sm",className:"mr-2"},void 0,l()(v.a,{variant:"light",onClick:this.insertLiteralFactory(" < ")},void 0,"<"),l()(v.a,{variant:"light",onClick:this.insertLiteralFactory(" > ")},void 0,">"),l()(v.a,{variant:"light",onClick:this.insertLiteralFactory(" <= ")},void 0,"<="),l()(v.a,{variant:"light",onClick:this.insertLiteralFactory(" >= ")},void 0,">=")),l()(Ve.a,{size:"sm",className:"mr-2"},void 0,l()(Ge.a,{placement:"top",tooltip:t("open-parenthesis")},void 0,l()(v.a,{variant:"light",onClick:this.insertLiteralFactory(" ( ")},void 0,"(")),l()(Ge.a,{placement:"top",tooltip:t("closing-parenthesis")},void 0,l()(v.a,{variant:"light",onClick:this.insertLiteralFactory(" ) ")},void 0,")"))),l()(Ve.a,{size:"sm",className:"mr-2"},void 0,l()(Ge.a,{placement:"top",tooltip:t("addition")},void 0,l()(v.a,{variant:"light",onClick:this.insertLiteralFactory(" + ")},void 0,"+")),l()(Ge.a,{placement:"top",tooltip:t("subtraction")},void 0,l()(v.a,{variant:"light",onClick:this.insertLiteralFactory(" - ")},void 0,"-")),l()(Ge.a,{placement:"top",tooltip:t("multiplication")},void 0,l()(v.a,{variant:"light",onClick:this.insertLiteralFactory(" * ")},void 0,"*")),l()(Ge.a,{placement:"top",tooltip:t("division")},void 0,l()(v.a,{variant:"light",onClick:this.insertLiteralFactory(" / ")},void 0,"/"))),l()(Ve.a,{size:"sm",className:"mr-2"},void 0,l()(v.a,{variant:"light",onClick:this.insertLiteralFactory(" && ")},void 0,t("and")),l()(v.a,{variant:"light",onClick:this.insertLiteralFactory(" || ")},void 0,t("or")),l()(v.a,{variant:"light",onClick:this.insertLiteralFactory(" !")},void 0,t("not"))),l()(Ve.a,{size:"sm",className:"me-2"},void 0,Be.map((function(t,a){return l()(v.a,{variant:"light",onClick:e.insertFuncFactory(t),eventKey:a},a,t)})))),l()(Pe.a,{},void 0,l()(Ve.a,{size:"sm",className:"mr-2"},void 0,Me.map((function(t,a){return l()(v.a,{variant:"light",onClick:e.insertLiteralFactory("".concat(t))},a,t)})),l()(v.a,{variant:"light",onClick:this.insertLiteralFactory(".")},void 0,"."))))),l()(x.a,{className:"mb-2"},void 0,l()(x.a.Body,{},void 0,p.a.createElement(Se.a,{ref:function(t){e.textarea=t},legend:"".concat(t("expression"),":"),placeholder:t("enter-formula"),value:this.state.code,onChange:this.handleCodeChange,onBlur:function(t){var a=t.target.selectionStart;e.setState({selection:a})},rows:3}))),l()(w.a,{style:{margin:8}},void 0,l()(y.a,{},void 0,t("name-new-variable"),":"),l()(b.a,{type:"text",placeholder:t("select-name"),onChange:this.handleNameChange,onKeyPress:this.handleKeyPress}),l()(N.a,{},void 0,t("new-variable-appended"))))))}}]),a}(u.Component);We.defaultProps={logAction:function(){},onGenerate:function(){},defaultCode:"",session:{}};var Je,Ye=We,$e=a(680),Xe=a(665),Qe=a.n(Xe),Ue=a(628),Ze=a.n(Ue),_e=a(2629),et=a.n(_e),tt=a(553),at=a(4111),nt=a(590);a(398);function rt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=xe()(e);if(t){var r=xe()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Ne()(this,a)}}var ot=m()("isle:data-explorer:variable-transformer");function it(e){return e?Te()(e,".","[dot]"):e}function st(e){for(var t=j()(e),a=!0,n=0;n<t.length;n++)et()(e[t[n]])||(a=!1);return a}var lt=function(e){ye()(a,e);var t=rt(a);function a(e){var n;ve()(this,a),n=t.call(this,e),h()(me()(n),"handleFirstVariableChange",(function(e){var t,a={};if(n.state.secondVar){var r=e,o=n.state.secondVar,i=n.props.data[r];t=Qe()(i,Ze.a);for(var s=Object(nt.a)(t,r),l=Object(nt.a)(n.state.secondFreqs,o),c=0;c<s.length;c++)for(var d=0;d<l.length;d++){var u=s[c]+"-"+l[d];a[it(u)]=u}}else{var p=n.props.data[e];t=Qe()(p,Ze.a);for(var v=Object(nt.a)(t,e),f=0;f<v.length;f++)a[it(v[f])]=v[f]}var h=st(a);n.setState({firstVar:e,firstFreqs:t,nameMappings:a,onlyNumbers:h})})),h()(me()(n),"handleSecondVariableChange",(function(e){if(!e){for(var t=n.state.firstVar,a=Object(nt.a)(n.state.firstFreqs,t),r={},o=0;o<a.length;o++)r[it(a[o])]=a[o];return n.setState({secondVar:e,nameMappings:r})}for(var i={},s=n.state.firstVar,l=n.props.data[e],c=Qe()(l,Ze.a),d=Object(nt.a)(n.state.firstFreqs,s),u=Object(nt.a)(c,e),p=0;p<d.length;p++)for(var v=0;v<u.length;v++){var f=d[p]+"-"+u[v];i[it(f)]=f}var h=st(i);n.setState({secondVar:e,secondFreqs:c,nameMappings:i,onlyNumbers:h})})),h()(me()(n),"handleKeyPress",(function(e){13===e.charCode&&n.state.generatedName.length>=2&&n.makeNewVar()})),h()(me()(n),"changeFreqFactory",(function(e){return function(t){var a=q()(n.state.nameMappings);a[it(e)]=t.target.value;var r=st(a);n.setState({nameMappings:a,onlyNumbers:r})}})),h()(me()(n),"changeContigencyFactory",(function(e,t){return function(a){var r=q()(n.state.nameMappings);r[it(t)+"-"+it(e)]=a.target.value,n.setState({nameMappings:r})}})),h()(me()(n),"handleGeneratedNameChange",(function(e){n.setState({generatedName:e.target.value})})),h()(me()(n),"makeNewVar",(function(){ot("Generating new categorical variable...");var e=n.state,t=e.firstVar,a=e.secondVar,r=e.nameMappings,o=e.castNumeric,i=Object(at.a)(t,a,r,n.props.data,o);n.props.onGenerate(n.state.generatedName,i),n.props.logAction($.h,{name:n.state.generatedName,firstVar:t,secondVar:a,nameMappings:r,castNumeric:o}),n.props.onHide()})),h()(me()(n),"renderFrequencyTable",(function(){var e=n.state.firstVar,t=n.props.data[e],a=Qe()(t,Ze.a),r=Object(nt.a)(a,e);return l()($e.a,{bordered:!0,style:{margin:8}},void 0,l()("thead",{},void 0,l()("tr",{},void 0,l()("th",{},void 0,n.props.t("old"),":"),r.map((function(t,a){return l()("th",{},"".concat(e,"-").concat(a,"-old"),t)})))),l()("tbody",{},void 0,l()("tr",{},void 0,l()("th",{},void 0,n.props.t("new"),":"),r.map((function(t,a){return l()("th",{},"".concat(e,"-").concat(a,"-new"),l()("input",{className:"transformer-table-input",type:"text",defaultValue:t,onChange:n.changeFreqFactory(t)}))}))),l()("tr",{style:{borderTop:"1px solid black"}},void 0,l()("th",{},void 0,n.props.t("frequencies"),":"),r.map((function(t,a){var r=n.state.firstFreqs[t];return l()("td",{},"".concat(e,"-").concat(a,"-freq"),r)})))))})),h()(me()(n),"renderContingencyTable",(function(){var e=n.state.secondVar,t=n.state.firstVar,a=n.props.data[e],r=n.props.data[t],o=Qe()(a,Ze.a),i=Qe()(r,Ze.a),s=Object(nt.a)(o,e),c=Object(nt.a)(i,t);return l()($e.a,{bordered:!0,style:{margin:8}},void 0,l()("tr",{},void 0,Je||(Je=l()("th",{})),c.map((function(e,t){return l()("th",{},"".concat(e,"-").concat(t),e)}))),s.map((function(e,t){return l()("tr",{},"".concat(e,"-").concat(t),l()("th",{},void 0,e),c.map((function(t,a){return l()("td",{},"".concat(e,"-").concat(t,"-").concat(a),l()("input",{className:"transformer-table-input",type:"text",defaultValue:"".concat(t,"-").concat(e),onChange:n.changeContigencyFactory(e,t)}))})))})))}));for(var r=e.categorical[0],o=e.data[r],i=Qe()(o,Ze.a),s=Object(nt.a)(i,r),c={},d=0;d<s.length;d++)c[it(s[d])]=s[d];return n.state={generatedName:"",firstVar:r,firstFreqs:i,nameMappings:c,secondVar:null,secondFreqs:null,castNumeric:!1,onlyNumbers:!1},n}return he()(a,[{key:"renderTable",value:function(){return this.state.firstVar&&this.state.secondVar?this.renderContingencyTable():this.state.firstVar||this.state.secondVar?this.renderFrequencyTable():null}},{key:"render",value:function(){var e=this,t=this.props.t;return l()(E.a,{cancel:".card-body",onDragStart:function(e){e.stopPropagation()},style:{zIndex:1006}},void 0,l()(z.a,{onHide:this.props.onHide,show:this.props.show,header:t("categorical-transformer-header"),footer:l()(v.a,{onClick:this.makeNewVar,disabled:this.state.generatedName.length<2},void 0,t("create-new-variable")),bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"},role:"button",tabIndex:0},void 0,l()(k.a,{},void 0,l()(O.a,{md:4},void 0,l()(R.a,{legend:t("first-variable"),defaultValue:this.state.firstVar||"",options:this.props.categorical,onChange:this.handleFirstVariableChange})),l()(O.a,{md:4},void 0,l()(R.a,{clearable:!0,legend:t("optional-second-variable"),defaultValue:this.state.secondVar||"",options:this.props.categorical,onChange:this.handleSecondVariableChange}))),l()(k.a,{style:{overflowX:"auto",width:"100%"}},void 0,this.renderTable()),l()(k.a,{},void 0,l()(Ge.a,{tooltip:t("treat-labels-as-numbers-tooltip")},void 0,l()(tt.a,{legend:t("treat-labels-as-numbers"),defaultValue:!1,disabled:!this.state.onlyNumbers,onChange:function(){e.setState({castNumeric:!e.state.castNumeric})}}))),l()(k.a,{},void 0,l()(w.a,{style:{margin:8}},void 0,l()(y.a,{},void 0,t("name-new-variable"),":"),l()(b.a,{type:"text",placeholder:t("select-name"),onChange:this.handleGeneratedNameChange,onKeyPress:this.handleKeyPress}),l()(N.a,{},void 0,t("new-variable-appended"))))))}}]),a}(u.Component);lt.defaultProps={logAction:function(){}};var ct=lt,dt=(a(837),a(758)),ut=a.n(dt),pt=a(950),vt=a.n(pt);function ft(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=xe()(e);if(t){var r=xe()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Ne()(this,a)}}var ht=m()("isle:data-explorer:group-transformer"),gt=function(e){ye()(a,e);var t=ft(a);function a(e){var n;return ve()(this,a),n=t.call(this,e),h()(me()(n),"handleGeneratedNameChange",(function(e){n.setState({generatedName:e.target.value})})),h()(me()(n),"handleGroupNumberChange",(function(e){for(var t=new Array(e).fill(1/e),a=new Array(e),r=0;r<a.length;r++)a[r]="".concat(n.props.t("group")," ").concat(r+1);n.setState({groupProbs:t,labels:a,nGroups:e})})),h()(me()(n),"handleKeyPress",(function(e){if(13===e.charCode){for(var t=0,a=0;a<n.state.groupProbs.length;a++)t+=n.state.groupProbs[a];n.state.generatedName.length>2&&vt()(t,1)<=15e-9&&n.makeNewVar()}})),h()(me()(n),"makeNewVar",(function(){ht("Generating new categorical variable...");var e=j()(n.props.data),t=n.props.data[e[0]].length,a=ut()(n.state.labels,{size:t,probs:n.state.groupProbs,replace:!0});n.props.onGenerate(n.state.generatedName,a),n.props.logAction($.n,{name:n.state.generatedName,labels:n.state.labels,groupProbs:n.state.groupProbs}),n.props.onHide()})),n.state={generatedName:"",nGroups:2,groupProbs:[.5,.5],labels:["Group 1","Group 2"]},n}return he()(a,[{key:"renderTable",value:function(){for(var e=this,t=new Array(this.state.nGroups),a=function(a){t[a]=l()(k.a,{},a,l()(O.a,{},void 0,l()(T.a,{legend:"Label for Group ".concat(a+1),defaultValue:e.state.labels[a],onChange:function(t){var n=e.state.labels.slice();n[a]=t,e.setState({labels:n})}})),l()(O.a,{},void 0,l()(A.b,{legend:e.props.t("group-proportion"),onChange:function(t){var n=e.state.groupProbs.slice();n[a]=t,e.setState({groupProbs:n})},defaultValue:e.state.groupProbs[a],step:.01,min:0,max:1,numbersOnly:!1})))},n=0;n<t.length;n++)a(n);return l()(u.Fragment,{},void 0,t,l()("p",{},void 0,this.props.t("proportions-sum-one")))}},{key:"render",value:function(){for(var e=0,t=0;t<this.state.groupProbs.length;t++)e+=this.state.groupProbs[t];var a=this.state.generatedName.length>2&&vt()(e,1)<=15e-9;return l()(E.a,{cancel:".card-body",onDragStart:function(e){e.stopPropagation()},style:{zIndex:1006}},void 0,l()(z.a,{onHide:this.props.onHide,show:this.props.show,header:this.props.t("group-transformer-header"),footer:l()(v.a,{onClick:this.makeNewVar,disabled:!a},void 0,this.props.t("create-new-variable")),role:"button",tabIndex:0,bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"}},void 0,l()(k.a,{},void 0,l()(O.a,{},void 0,l()(A.b,{legend:this.props.t("number-of-groups"),onChange:this.handleGroupNumberChange,defaultValue:this.state.nGroups,step:1,min:1,max:99}))),this.renderTable(),l()(k.a,{},void 0,l()(w.a,{style:{margin:8}},void 0,l()(y.a,{},void 0,this.props.t("name-new-variable"),":"),l()(b.a,{type:"text",placeholder:this.props.t("select-name"),onChange:this.handleGeneratedNameChange,onKeyPress:this.handleKeyPress}),l()(N.a,{},void 0,this.props.t("new-variable-appended"))))))}}]),a}(u.Component);gt.defaultProps={logAction:function(){}};var mt=gt,bt=function(e){var t,a=e.data,n=e.categorical,r=e.quantitative,o=e.t,i=e.session,s=e.defaultCode,c=e.logAction,p=e.onGenerate,f=Object(u.useState)(null),h=d()(f,2),g=h[0],m=h[1],b=function(){var t="formula"===g?null:"formula";m(t),e.onActive(t)},y=function(){var t="bin"===g?null:"bin";m(t),e.onActive(t)},w=function(){var t="categorical"===g?null:"categorical";m(t),e.onActive(t)},N=function(){var t="group"===g?null:"group";m(t),e.onActive(t)};if(a)switch(g){case"bin":t=l()(ue,{show:!0,onHide:y,quantitative:r,logAction:c,onGenerate:p,data:a,t:o});break;case"categorical":t=l()(ct,{show:!0,onHide:w,categorical:n,logAction:c,onGenerate:p,data:a,t:o});break;case"formula":t=l()(Ye,{show:!0,onHide:b,categorical:n,quantitative:r,data:a,defaultCode:s,logAction:c,onGenerate:p,session:i,t:o});break;case"group":t=l()(mt,{show:!0,onHide:N,logAction:c,onGenerate:p,data:a,t:o})}return l()(u.Fragment,{},void 0,l()("div",{className:"well",style:{padding:15,margin:15}},void 0,l()("div",{style:{padding:12}},void 0,l()(v.a,{onClick:b,variant:"primary",block:!0,style:{fontSize:"1.2em"}},void 0,o("interactions-functions"))),l()("div",{style:{padding:12}},void 0,l()(v.a,{onClick:y,disabled:!r||0===r.length,variant:"primary",block:!0,style:{fontSize:"1.2em"}},void 0,o("bin-quantitative"))),l()("div",{style:{padding:12}},void 0,l()(v.a,{onClick:w,disabled:!n||0===n.length,variant:"primary",block:!0,style:{fontSize:"1.2em"}},void 0,o("rename-or-combine"))),l()("div",{style:{padding:12}},void 0,l()(v.a,{onClick:N,variant:"primary",block:!0,style:{fontSize:"1.2em"}},void 0,o("create-groups")))),t)};bt.defaultProps={logAction:function(){},onActive:function(){},onGenerate:function(){},defaultCode:"",session:{}};t.default=bt},734:function(e,t,a){"use strict";var n=a(406),r=a(408),o=a(409),i=a.n(o),s=a(0),l=a.n(s),c=a(411),d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=Object(r.a)(e,["bsPrefix","className"]),d=Object(c.a)(a,"btn-toolbar");return l.a.createElement("div",Object(n.a)({},s,{ref:t,className:i()(o,d)}))}));d.displayName="ButtonToolbar",d.defaultProps={role:"toolbar"},t.a=d}}]);