/*! For license information please see VariableTransformerMenu.293e27da.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[3047],{71026:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ht}});var n,r,o,i,s=a(858255),l=a(574315),c=a(202784),d=(a(213980),a(770561)),u=(a(627476),a(95767),a(694882),a(298351),a(151119)),v=(a(850110),a(898837),a(911755)),p=a.n(v),Z=a(579553),f=a.n(Z),h=a(26266),g=a(830650),m=a(10863),b=a(96904),y=a(822736),w=a(260952),C=a(458264),N=a(312594),k=a(501258),x=a.n(k),P=a(437069),V=a.n(P),F=a(74039),S=a.n(F),G=a(224008),O=a.n(G),H=a(309765),q=a(741709),A=a(927447),L=a(551769),T=a(601822),E=a(292682),R=a(462874),B=a(997354),z=a(316305),D=a.n(z),M=a(927299),K=a(821337),j=a(148820),I=a(945157),W=a(5140),Y=a(271768),J=a(921455),$=a(938036),U=a(612249);function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(Object(a),!0).forEach((function(t){(0,u.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _=p()("isle:data-explorer:variable-transformer"),ee=/shapes\[(\d)\]\.x0/,te={group:null,displayDensity:!0,densityType:"Data-driven",chooseBins:!1,nBins:null},ae={clickOutsideDeactivates:!0};function ne(e,t){return e-t}var re=function(e){for(var t=[],a=0;a<e.length;a++)t.push({type:"line",x0:e[a],y0:-100,x1:e[a],y1:100,line:{color:"red",width:3}});return t},oe=function(e,t){var a=new Array(t.length);t[0]?a[0]=t[0]:a[0]="(-\u221e,".concat(e[0],")");for(var n=1;n<t.length;n++)t[n]?a[n]=t[n]:a[n]="[".concat(e[n-1],",").concat(e[n],")");var r=t.length-1;return t[r]?a[r]=t[r]:a[r]="[".concat(e[e.length-1],",\u221e)"),a},ie=function(e){var t,a,u=(0,c.useState)(""),v=(0,l.Z)(u,2),p=v[0],Z=v[1],k=(0,c.useState)(0),P=(0,l.Z)(k,2),F=P[0],G=P[1],z=(0,c.useState)({variable:null,configHist:null,breakpoints:null,categories:null,customNames:null}),X=(0,l.Z)(z,2),ie=X[0],se=X[1],le=p.length<2,ce=function(){var t=ie.variable,a=ie.categories,n=ie.breakpoints,r=e.data[t],o=(0,$.Z)(r,a,n);e.logAction(W.dU,{name:p,variable:t,breaks:n,categories:a});var i=(0,M.Z)(p,a);e.onGenerate(i,o),e.onHide()},de=function(e){13!==e.charCode||le||ce()},ue=function(e){Z(e.target.value)},ve=function(e){return function(t){_("Change break point...");var a=ie.breakpoints.slice();a[e]=S()(t,-F),a.sort(ne);var n=O()(ie.configHist);n.layout.shapes=re(a),se(Q(Q({},ie),{},{configHist:n,breakpoints:a,categories:oe(a,ie.customNames)}))}},pe=function(e){return function(t){var a=ie.categories.slice();a[e]=t;var n=ie.customNames.slice();n[e]=t;var r=Q(Q({},ie),{},{categories:a,customNames:n});se(r)}},Ze=function(e){return function(){var t=ie.breakpoints,a=ie.categories,n=ie.customNames;t.splice(e,1),a.splice(e,1),n.splice(e,1);var r=Q({},ie.configHist);r.layout.shapes=re(t),se(Q(Q({},ie),{},{configHist:r,categories:a,customNames:n,breakpoints:t}))}},fe=function(e){var t=V()(e),a=ee.exec(t[0]);if(a){var n=a[1],r=ie.breakpoints.slice();r[n]=S()(e[t[0]],-F),r.sort(ne);var o=O()(ie.configHist);o.layout.shapes=re(r),se(Q(Q({},ie),{},{configHist:o,breakpoints:r,categories:oe(r,ie.customNames)}))}},he=function(t){_("Change variable to bin...");var a=Q({data:e.data,variable:t},te),n=(0,Y.N)(a);n.layout.yaxis={range:[(0,j.Z)(n.data[1].y),(0,I.Z)(n.data[1].y)],fixedrange:!0},n.layout.xaxis={fixedrange:!0};var r=e.data[t];r=r.filter((function(e){return(0,H.isPrimitive)(e)&&!D()(e)}));var o=[S()((0,K.Z)(r),-F)];n.layout.shapes=re(o);var i=[!1,!1];se({variable:t,configHist:n,breakpoints:o,customNames:i,categories:oe(o,i)})},ge=function(){var t=ie.breakpoints.slice(),a=e.data[ie.variable];a=a.filter((function(e){return(0,H.isPrimitive)(e)&&!D()(e)}));var n=x()(.8,1.2)*(0,K.Z)(a);t.push(S()(n,-F)),t.sort(ne);var r=O()(ie.configHist);r.layout.shapes=re(t);var o=ie.customNames;o.push(!1);var i=Q(Q({},ie),{},{breakpoints:t,configHist:r,categories:oe(t,o)});se(i)};return(0,s.Z)(T.Z,{cancel:".card-body",onDragStart:J.Z,style:{zIndex:1006}},void 0,(0,s.Z)(f(),{focusTrapOptions:ae},void 0,(0,s.Z)(R.Z,{onHide:e.onHide,show:e.show,header:e.t("bin-transformer-header"),footer:(0,s.Z)(d.Z,{onClick:ce,disabled:le},void 0,e.t("create-new-variable")),bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"},role:"button",tabIndex:0},void 0,(t=ie.configHist,a=(0,s.Z)(A.Z,{legend:e.t("variable-to-bin"),defaultValue:ie.variable,options:e.quantitative,onChange:he,style:{maxWidth:400}}),t?(0,s.Z)(c.Fragment,{},void 0,a,(0,s.Z)(d.Z,{className:"insert-line-button",onClick:ge},void 0,e.t("insert-break-line")),(0,s.Z)("p",{},void 0,e.t("drag-red-bars"),"(",(0,s.Z)(q.Z,{legend:e.t("digits-after-decimal-snap"),min:0,max:9,inline:!0,defaultValue:F,onChange:G}),")"),(0,s.Z)("div",{style:{height:250}},void 0,(0,s.Z)(E.Z,{data:t.data,layout:t.layout,editable:!0,fit:!0,removeButtons:!0,legendButtons:!1,onRelayout:fe})),(0,s.Z)("div",{},void 0,(0,s.Z)(w.Z,{className:"mb-2"},void 0,(0,s.Z)(w.Z.Header,{},void 0,e.t("choose-category-labels"),":"),(0,s.Z)(w.Z.Body,{},void 0,function(){var t=[],a=ie.breakpoints,l=1===a.length;if(t.push((0,s.Z)(C.Z,{},"div-0",(0,s.Z)(N.Z,{md:7},void 0,n||(n=(0,s.Z)(B.Z,{raw:"x < "})),(0,s.Z)(q.Z,{inline:!0,onBlur:ve(0),defaultValue:a[0],step:"any"})),(0,s.Z)(N.Z,{md:4},void 0,(0,s.Z)(L.Z,{legend:"".concat(e.t("label")," 1"),defaultValue:ie.categories[0],onChange:pe(0),style:{width:200}},0)),r||(r=(0,s.Z)(N.Z,{md:1})))),a.length>1)for(var c=0;c<a.length-1;c++){var d=pe(c+1);t.push((0,s.Z)(C.Z,{},"div-".concat(c+1),(0,s.Z)(N.Z,{md:7},void 0,(0,s.Z)(q.Z,{inline:!0,onBlur:ve(c),defaultValue:a[c],step:"any"}),o||(o=(0,s.Z)(B.Z,{raw:"\\le x <"})),(0,s.Z)(q.Z,{inline:!0,onBlur:ve(c+1),defaultValue:a[c+1],step:"any"})),(0,s.Z)(N.Z,{md:4},void 0,(0,s.Z)(L.Z,{legend:"".concat(e.t("label")," ").concat(c+2),defaultValue:ie.categories[c+1],onChange:d,style:{width:200}},1+c)),(0,s.Z)(N.Z,{md:1},void 0,(0,s.Z)(U.Z,{onClick:Ze(c),style:{marginTop:"5px"},disabled:l,tooltipPlacement:"right"}))))}var u=a.length;return t.push((0,s.Z)(C.Z,{},"div-".concat(u),(0,s.Z)(N.Z,{md:7},void 0,i||(i=(0,s.Z)(B.Z,{raw:"x \\ge"})),(0,s.Z)(q.Z,{inline:!0,onChange:ve(u-1),defaultValue:a[u-1],step:"any"})),(0,s.Z)(N.Z,{md:4},void 0,(0,s.Z)(L.Z,{legend:"Label ".concat(u+1),defaultValue:ie.categories[u],onChange:pe(u),style:{width:200}},u)),(0,s.Z)(N.Z,{md:1},void 0,(0,s.Z)(U.Z,{onClick:Ze(u-1),style:{marginTop:"5px"},disabled:l})))),t}()))),(0,s.Z)(m.Z,{style:{width:"fit-content"}},void 0,(0,s.Z)(g.Z,{},void 0,e.t("name-new-variable"),":"),(0,s.Z)(h.Z,{type:"text",placeholder:e.t("select-name"),onChange:ue,onKeyPress:de}),(0,s.Z)(b.Z,{},void 0,e.t("new-variable-appended")))):(0,s.Z)(c.Fragment,{},void 0,a,(0,s.Z)(y.Z,{variant:"info"},void 0,e.t("select-variable-bin")))))))};ie.defaultProps={logAction:function(){},onGenerate:function(){}};var se,le,ce,de=ie,ue=(a(382139),a(264659)),ve=a(904730),pe=a(673989),Ze=a(175663),fe=a(750591),he=a(575630),ge=(a(217732),a(6059),a(319371),a(387612)),me=a(845450),be=a(423184),ye=a(482228),we=a(738314),Ce=a(661599),Ne=a(304964),ke=a(150275),xe=a(605977),Pe=a.n(xe),Ve=a(287013),Fe=a.n(Ve),Se=a(302467),Ge=a.n(Se),Oe=a(693171),He=a(123950);function qe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,he.Z)(e);if(t){var r=(0,he.Z)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,fe.Z)(this,a)}}var Ae=Pe()(0,10,1),Le=/(?:^|\n)([^\n]*)$/,Te=/^[0-9]/,Ee={clickOutsideDeactivates:!0},Re=c.forwardRef((function(e,t){var a=e.children,n=e.style,r=e.className,o=e["aria-labelledby"],i=(0,c.useState)(""),d=(0,l.Z)(i,2),u=d[0],v=d[1];return c.createElement("div",{ref:t,style:n,className:r,"aria-labelledby":o},(0,s.Z)(h.Z,{className:"mx-3 my-2 w-auto",placeholder:"Type to filter...",onChange:function(e){return v(e.target.value)},value:u}),(0,s.Z)("ul",{className:"list-unstyled"},void 0,c.Children.toArray(a).filter((function(e){return!u||e.props.children.toLowerCase().startsWith(u)}))))})),Be=function(e){(0,Ze.Z)(a,e);var t=qe(a);function a(e){var n;return(0,ue.Z)(this,a),n=t.call(this,e),(0,u.Z)((0,pe.Z)(n),"handleGenerate",(function(){var e,t=n.state,a=t.code,r=t.name;Fe()(a,"return ")||(a=Ge()(a,Le,"\nreturn $1"));try{e=(0,Oe.Z)(a,n.props.data),n.props.logAction(W.gx,{code:a,name:r}),n.props.onGenerate(r,e)}catch(o){return n.props.session.addNotification({title:"Errored",message:"Encountered the following error: "+o.message,level:"error",position:"tr"})}n.props.onHide()})),(0,u.Z)((0,pe.Z)(n),"handleNameChange",(function(e){n.setState({name:e.target.value})})),(0,u.Z)((0,pe.Z)(n),"handleCodeChange",(function(e){n.setState({code:e})})),(0,u.Z)((0,pe.Z)(n),"handleKeyPress",(function(e){13===e.charCode&&n.state.name.length>=2&&n.handleGenerate()})),(0,u.Z)((0,pe.Z)(n),"insertVarFactory",(function(e){return function(){var t=n.state.code.substring(0,n.state.selection),a="datum";t+=a+=!Fe()(e," ")&&!Fe()(e,".")&&!Te.test(e)?".".concat(e):"['".concat(e,"']"),t+=n.state.code.substring(n.state.selection),n.setState({code:t,selection:n.state.selection+a.length})}})),(0,u.Z)((0,pe.Z)(n),"insertLiteralFactory",(function(e){return function(){var t=n.state.code.substring(0,n.state.selection),a=e;t+=a,t+=n.state.code.substring(n.state.selection),n.setState({code:t,selection:n.state.selection+a.length})}})),(0,u.Z)((0,pe.Z)(n),"insertFuncFactory",(function(e){return function(){var t=n.state.code.substring(0,n.state.selection),a=" "+e+"()";t+=a,t+=n.state.code.substring(n.state.selection),n.setState({code:t,selection:n.state.selection+a.length-1})}})),n.state={code:e.defaultCode,selection:null,name:"",showGuide:!1},n}return(0,ve.Z)(a,[{key:"render",value:function(){var e=this,t=this.props.t,a=this.props.quantitative.map((function(t,a){return(0,s.Z)(we.Z.Item,{onClick:e.insertVarFactory(t),eventKey:a},a,t)}));return(0,s.Z)(T.Z,{cancel:".card-body",onDragStart:function(e){e.stopPropagation()},style:{zIndex:1006}},void 0,(0,s.Z)(f(),{focusTrapOptions:Ee},void 0,(0,s.Z)(R.Z,{show:this.props.show,onHide:this.props.onHide,header:this.props.t("formula-transformer-header"),footer:(0,s.Z)(d.Z,{onClick:this.handleGenerate,disabled:this.state.name.length<2},void 0,this.props.t("create-new-variable")),role:"button",tabIndex:0,bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"}},void 0,(0,s.Z)("div",{className:"formula-transformer-body"},void 0,(0,s.Z)(Ce.Z,{headerClassName:"title",header:this.state.showGuide?t("hide-example-guide"):t("show-example-guide"),visible:this.state.showGuide,onClick:function(){return e.setState({showGuide:!e.state.showGuide})}},void 0,(0,s.Z)("p",{},void 0,t("formula-transformer-example-intro")),(0,s.Z)(me.Z,{condensed:!0},void 0,(0,s.Z)("thead",{},void 0,(0,s.Z)("tr",{},void 0,(0,s.Z)("th",{},void 0,t("type")),(0,s.Z)("th",{},void 0,t("example")),(0,s.Z)("th",{},void 0,t("description")))),(0,s.Z)("tbody",{},void 0,(0,s.Z)("tr",{},void 0,(0,s.Z)("td",{},void 0,t("interaction"),":"),(0,s.Z)("td",{},void 0,(0,s.Z)("code",{},void 0,"datum.",this.props.quantitative[0]," * datum.",this.props.quantitative[1])),(0,s.Z)("td",{},void 0,(0,s.Z)(ge.c,{i18nKey:"example-description-multiply",ns:"DataExplorer"},void 0,"Multiply values of variables ",(0,s.Z)("code",{},void 0,{first:this.props.quantitative[0]})," and ",(0,s.Z)("code",{},void 0,{second:this.props.quantitative[1]})))),(0,s.Z)("tr",{},void 0,(0,s.Z)("td",{},void 0,t("transformation"),":"),(0,s.Z)("td",{},void 0,(0,s.Z)("code",{},void 0,"exp( datum.",this.props.quantitative[0]," )")),(0,s.Z)("td",{},void 0,(0,s.Z)(ge.c,{i18nKey:"example-description-exponential",ns:"DataExplorer"},void 0,"Natural exponential function of variable ",(0,s.Z)("code",{},void 0,{variable:this.props.quantitative[0]})))),(0,s.Z)("tr",{},void 0,(0,s.Z)("td",{},void 0,t("function"),":"),(0,s.Z)("td",{},void 0,(0,s.Z)("code",{},void 0,"9/5 * ",this.props.quantitative[0]," + 32")),(0,s.Z)("td",{},void 0,(0,s.Z)(ge.c,{i18nKey:"example-description-calculation",ns:"DataExplorer"},void 0,"Multiply values of ",(0,s.Z)("code",{},void 0,{variable:this.props.quantitative[0]})," by ",se||(se=(0,s.Z)("code",{},void 0,"9/5"))," and add ",le||(le=(0,s.Z)("code",{},void 0,"32")))))))),ce||(ce=(0,s.Z)("hr",{})),(0,s.Z)("div",{className:"mb-2"},void 0,(0,s.Z)(ye.Z,{style:{marginBottom:5}},void 0,(0,s.Z)(we.Z,{className:"mr-2"},void 0,(0,s.Z)(we.Z.Toggle,{variant:"light",id:"dropdown-custom-components"},void 0,t("quantitative")),(0,s.Z)(we.Z.Menu,{variant:"light",as:Re,id:"bg-nested-dropdown"},void 0,a)),(0,s.Z)(we.Z,{className:"mr-2"},void 0,(0,s.Z)(we.Z.Toggle,{variant:"light",id:"dropdown-custom-components"},void 0,t("categorical")),(0,s.Z)(we.Z.Menu,{variant:"light",as:Re,id:"bg-nested-dropdown"},void 0,this.props.categorical.map((function(t,a){return(0,s.Z)(we.Z.Item,{onClick:e.insertVarFactory(t),eventKey:a},a,t)})))))),(0,s.Z)(w.Z,{className:"mb-2"},void 0,(0,s.Z)(w.Z.Body,{},void 0,(0,s.Z)(ye.Z,{style:{marginBottom:5}},void 0,(0,s.Z)(be.Z,{size:"sm",className:"mr-2"},void 0,(0,s.Z)(d.Z,{variant:"light",onClick:this.insertLiteralFactory(" < ")},void 0,"<"),(0,s.Z)(d.Z,{variant:"light",onClick:this.insertLiteralFactory(" > ")},void 0,">"),(0,s.Z)(d.Z,{variant:"light",onClick:this.insertLiteralFactory(" <= ")},void 0,"<="),(0,s.Z)(d.Z,{variant:"light",onClick:this.insertLiteralFactory(" >= ")},void 0,">=")),(0,s.Z)(be.Z,{size:"sm",className:"mr-2"},void 0,(0,s.Z)(ke.Z,{placement:"top",tooltip:t("open-parenthesis")},void 0,(0,s.Z)(d.Z,{variant:"light",onClick:this.insertLiteralFactory(" ( ")},void 0,"(")),(0,s.Z)(ke.Z,{placement:"top",tooltip:t("closing-parenthesis")},void 0,(0,s.Z)(d.Z,{variant:"light",onClick:this.insertLiteralFactory(" ) ")},void 0,")"))),(0,s.Z)(be.Z,{size:"sm",className:"mr-2"},void 0,(0,s.Z)(ke.Z,{placement:"top",tooltip:t("addition")},void 0,(0,s.Z)(d.Z,{variant:"light",onClick:this.insertLiteralFactory(" + ")},void 0,"+")),(0,s.Z)(ke.Z,{placement:"top",tooltip:t("subtraction")},void 0,(0,s.Z)(d.Z,{variant:"light",onClick:this.insertLiteralFactory(" - ")},void 0,"-")),(0,s.Z)(ke.Z,{placement:"top",tooltip:t("multiplication")},void 0,(0,s.Z)(d.Z,{variant:"light",onClick:this.insertLiteralFactory(" * ")},void 0,"*")),(0,s.Z)(ke.Z,{placement:"top",tooltip:t("division")},void 0,(0,s.Z)(d.Z,{variant:"light",onClick:this.insertLiteralFactory(" / ")},void 0,"/"))),(0,s.Z)(be.Z,{size:"sm",className:"mr-2"},void 0,(0,s.Z)(d.Z,{variant:"light",onClick:this.insertLiteralFactory(" && ")},void 0,t("and")),(0,s.Z)(d.Z,{variant:"light",onClick:this.insertLiteralFactory(" || ")},void 0,t("or")),(0,s.Z)(d.Z,{variant:"light",onClick:this.insertLiteralFactory(" !")},void 0,t("not"))),(0,s.Z)(be.Z,{size:"sm",className:"me-2"},void 0,He.map((function(t,a){return(0,s.Z)(d.Z,{variant:"light",onClick:e.insertFuncFactory(t),eventKey:a},a,t)})))),(0,s.Z)(ye.Z,{},void 0,(0,s.Z)(be.Z,{size:"sm",className:"mr-2"},void 0,Ae.map((function(t,a){return(0,s.Z)(d.Z,{variant:"light",onClick:e.insertLiteralFactory("".concat(t))},a,t)})),(0,s.Z)(d.Z,{variant:"light",onClick:this.insertLiteralFactory(".")},void 0,"."))))),(0,s.Z)(w.Z,{className:"mb-2"},void 0,(0,s.Z)(w.Z.Body,{},void 0,c.createElement(Ne.Z,{ref:function(t){e.textarea=t},legend:"".concat(t("expression"),":"),placeholder:t("enter-formula"),value:this.state.code,onChange:this.handleCodeChange,onBlur:function(t){var a=t.target.selectionStart;e.setState({selection:a})},rows:3}))),(0,s.Z)(m.Z,{style:{margin:8}},void 0,(0,s.Z)(g.Z,{},void 0,t("name-new-variable"),":"),(0,s.Z)(h.Z,{type:"text",placeholder:t("select-name"),onChange:this.handleNameChange,onKeyPress:this.handleKeyPress}),(0,s.Z)(b.Z,{},void 0,t("new-variable-appended")))))))}}]),a}(c.Component);Be.defaultProps={logAction:function(){},onGenerate:function(){},defaultCode:"",session:{}};var ze,De=Be,Me=a(122081),Ke=a(147777),je=a.n(Ke),Ie=a(471205),We=a.n(Ie),Ye=a(888244),Je=a.n(Ye),$e=a(785745),Ue=a(833562),Xe=a(280093);function Qe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,he.Z)(e);if(t){var r=(0,he.Z)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,fe.Z)(this,a)}}var _e=p()("isle:data-explorer:variable-transformer"),et={clickOutsideDeactivates:!0};function tt(e){return e?Ge()(e,".","[dot]"):e}function at(e){for(var t=V()(e),a=!0,n=0;n<t.length;n++)Je()(e[t[n]])||(a=!1);return a}var nt=function(e){(0,Ze.Z)(a,e);var t=Qe(a);function a(e){var n;(0,ue.Z)(this,a),n=t.call(this,e),(0,u.Z)((0,pe.Z)(n),"handleFirstVariableChange",(function(e){var t,a={};if(n.state.secondVar){var r=e,o=n.state.secondVar,i=n.props.data[r];t=je()(i,We());for(var s=(0,Xe.Z)(t,r),l=(0,Xe.Z)(n.state.secondFreqs,o),c=0;c<s.length;c++)for(var d=0;d<l.length;d++){var u=s[c]+"-"+l[d];a[tt(u)]=u}}else{var v=n.props.data[e];t=je()(v,We());for(var p=(0,Xe.Z)(t,e),Z=0;Z<p.length;Z++)a[tt(p[Z])]=p[Z]}var f=at(a);n.setState({firstVar:e,firstFreqs:t,nameMappings:a,onlyNumbers:f})})),(0,u.Z)((0,pe.Z)(n),"handleSecondVariableChange",(function(e){if(!e){for(var t=n.state.firstVar,a=(0,Xe.Z)(n.state.firstFreqs,t),r={},o=0;o<a.length;o++)r[tt(a[o])]=a[o];return n.setState({secondVar:e,nameMappings:r})}for(var i={},s=n.state.firstVar,l=n.props.data[e],c=je()(l,We()),d=(0,Xe.Z)(n.state.firstFreqs,s),u=(0,Xe.Z)(c,e),v=0;v<d.length;v++)for(var p=0;p<u.length;p++){var Z=d[v]+"-"+u[p];i[tt(Z)]=Z}var f=at(i);n.setState({secondVar:e,secondFreqs:c,nameMappings:i,onlyNumbers:f})})),(0,u.Z)((0,pe.Z)(n),"handleKeyPress",(function(e){13===e.charCode&&n.state.generatedName.length>=2&&n.makeNewVar()})),(0,u.Z)((0,pe.Z)(n),"changeFreqFactory",(function(e){return function(t){var a=O()(n.state.nameMappings);a[tt(e)]=t.target.value;var r=at(a);n.setState({nameMappings:a,onlyNumbers:r})}})),(0,u.Z)((0,pe.Z)(n),"changeContigencyFactory",(function(e,t){return function(a){var r=O()(n.state.nameMappings);r[tt(t)+"-"+tt(e)]=a.target.value,n.setState({nameMappings:r})}})),(0,u.Z)((0,pe.Z)(n),"handleGeneratedNameChange",(function(e){n.setState({generatedName:e.target.value})})),(0,u.Z)((0,pe.Z)(n),"makeNewVar",(function(){_e("Generating new categorical variable...");var e=n.state,t=e.firstVar,a=e.secondVar,r=e.nameMappings,o=e.castNumeric,i=(0,Ue.Z)(t,a,r,n.props.data,o);n.props.onGenerate(n.state.generatedName,i),n.props.logAction(W.CS,{name:n.state.generatedName,firstVar:t,secondVar:a,nameMappings:r,castNumeric:o}),n.props.onHide()})),(0,u.Z)((0,pe.Z)(n),"renderFrequencyTable",(function(){var e=n.state.firstVar,t=n.props.data[e],a=je()(t,We()),r=(0,Xe.Z)(a,e);return(0,s.Z)(Me.Z,{bordered:!0,style:{margin:8}},void 0,(0,s.Z)("thead",{},void 0,(0,s.Z)("tr",{},void 0,(0,s.Z)("th",{},void 0,n.props.t("old"),":"),r.map((function(t,a){return(0,s.Z)("th",{},"".concat(e,"-").concat(a,"-old"),t)})))),(0,s.Z)("tbody",{},void 0,(0,s.Z)("tr",{},void 0,(0,s.Z)("th",{},void 0,n.props.t("new"),":"),r.map((function(t,a){return(0,s.Z)("th",{},"".concat(e,"-").concat(a,"-new"),(0,s.Z)("input",{className:"transformer-table-input",type:"text",defaultValue:t,onChange:n.changeFreqFactory(t)}))}))),(0,s.Z)("tr",{style:{borderTop:"1px solid black"}},void 0,(0,s.Z)("th",{},void 0,n.props.t("frequencies"),":"),r.map((function(t,a){var r=n.state.firstFreqs[t];return(0,s.Z)("td",{},"".concat(e,"-").concat(a,"-freq"),r)})))))})),(0,u.Z)((0,pe.Z)(n),"renderContingencyTable",(function(){var e=n.state.secondVar,t=n.state.firstVar,a=n.props.data[e],r=n.props.data[t],o=je()(a,We()),i=je()(r,We()),l=(0,Xe.Z)(o,e),c=(0,Xe.Z)(i,t);return(0,s.Z)(Me.Z,{bordered:!0,style:{margin:8}},void 0,(0,s.Z)("tr",{},void 0,ze||(ze=(0,s.Z)("th",{})),c.map((function(e,t){return(0,s.Z)("th",{},"".concat(e,"-").concat(t),e)}))),l.map((function(e,t){return(0,s.Z)("tr",{},"".concat(e,"-").concat(t),(0,s.Z)("th",{},void 0,e),c.map((function(t,a){return(0,s.Z)("td",{},"".concat(e,"-").concat(t,"-").concat(a),(0,s.Z)("input",{className:"transformer-table-input",type:"text",defaultValue:"".concat(t,"-").concat(e),onChange:n.changeContigencyFactory(e,t)}))})))})))}));for(var r=e.categorical[0],o=e.data[r],i=je()(o,We()),l=(0,Xe.Z)(i,r),c={},d=0;d<l.length;d++)c[tt(l[d])]=l[d];return n.state={generatedName:"",firstVar:r,firstFreqs:i,nameMappings:c,secondVar:null,secondFreqs:null,castNumeric:!1,onlyNumbers:!1},n}return(0,ve.Z)(a,[{key:"renderTable",value:function(){return this.state.firstVar&&this.state.secondVar?this.renderContingencyTable():this.state.firstVar||this.state.secondVar?this.renderFrequencyTable():null}},{key:"render",value:function(){var e=this,t=this.props.t;return(0,s.Z)(T.Z,{cancel:".card-body",onDragStart:function(e){e.stopPropagation()},style:{zIndex:1006}},void 0,(0,s.Z)(f(),{focusTrapOptions:et},void 0,(0,s.Z)(R.Z,{onHide:this.props.onHide,show:this.props.show,header:t("categorical-transformer-header"),footer:(0,s.Z)(d.Z,{onClick:this.makeNewVar,disabled:this.state.generatedName.length<2},void 0,t("create-new-variable")),bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"},role:"button",tabIndex:0},void 0,(0,s.Z)(C.Z,{},void 0,(0,s.Z)(N.Z,{md:4},void 0,(0,s.Z)(A.Z,{legend:t("first-variable"),defaultValue:this.state.firstVar||"",options:this.props.categorical,onChange:this.handleFirstVariableChange})),(0,s.Z)(N.Z,{md:4},void 0,(0,s.Z)(A.Z,{clearable:!0,legend:t("optional-second-variable"),defaultValue:this.state.secondVar||"",options:this.props.categorical,onChange:this.handleSecondVariableChange}))),(0,s.Z)(C.Z,{style:{overflowX:"auto",width:"100%"}},void 0,this.renderTable()),(0,s.Z)(C.Z,{},void 0,(0,s.Z)(ke.Z,{tooltip:t("treat-labels-as-numbers-tooltip")},void 0,(0,s.Z)($e.Z,{legend:t("treat-labels-as-numbers"),defaultValue:!1,disabled:!this.state.onlyNumbers,onChange:function(){e.setState({castNumeric:!e.state.castNumeric})}}))),(0,s.Z)(C.Z,{},void 0,(0,s.Z)(m.Z,{style:{margin:8}},void 0,(0,s.Z)(g.Z,{},void 0,t("name-new-variable"),":"),(0,s.Z)(h.Z,{type:"text",placeholder:t("select-name"),onChange:this.handleGeneratedNameChange,onKeyPress:this.handleKeyPress}),(0,s.Z)(b.Z,{},void 0,t("new-variable-appended")))))))}}]),a}(c.Component);nt.defaultProps={logAction:function(){}};var rt=nt,ot=(a(448977),a(240054)),it=a.n(ot),st=a(1570),lt=a.n(st);function ct(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,he.Z)(e);if(t){var r=(0,he.Z)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,fe.Z)(this,a)}}var dt=p()("isle:data-explorer:group-transformer"),ut={clickOutsideDeactivates:!0},vt=function(e){(0,Ze.Z)(a,e);var t=ct(a);function a(e){var n;return(0,ue.Z)(this,a),n=t.call(this,e),(0,u.Z)((0,pe.Z)(n),"handleGeneratedNameChange",(function(e){n.setState({generatedName:e.target.value})})),(0,u.Z)((0,pe.Z)(n),"handleGroupNumberChange",(function(e){for(var t=new Array(e).fill(1/e),a=new Array(e),r=0;r<a.length;r++)a[r]="".concat(n.props.t("group")," ").concat(r+1);n.setState({groupProbs:t,labels:a,nGroups:e})})),(0,u.Z)((0,pe.Z)(n),"handleKeyPress",(function(e){if(13===e.charCode){for(var t=0,a=0;a<n.state.groupProbs.length;a++)t+=n.state.groupProbs[a];n.state.generatedName.length>2&&lt()(t,1)<=15e-9&&n.makeNewVar()}})),(0,u.Z)((0,pe.Z)(n),"makeNewVar",(function(){dt("Generating new categorical variable...");var e=V()(n.props.data),t=n.props.data[e[0]].length,a=it()(n.state.labels,{size:t,probs:n.state.groupProbs,replace:!0});n.props.onGenerate(n.state.generatedName,a),n.props.logAction(W.Dp,{name:n.state.generatedName,labels:n.state.labels,groupProbs:n.state.groupProbs}),n.props.onHide()})),n.state={generatedName:"",nGroups:2,groupProbs:[.5,.5],labels:["Group 1","Group 2"]},n}return(0,ve.Z)(a,[{key:"renderTable",value:function(){for(var e=this,t=new Array(this.state.nGroups),a=function(a){t[a]=(0,s.Z)(C.Z,{},a,(0,s.Z)(N.Z,{},void 0,(0,s.Z)(L.Z,{legend:"Label for Group ".concat(a+1),defaultValue:e.state.labels[a],onChange:function(t){var n=e.state.labels.slice();n[a]=t,e.setState({labels:n})}})),(0,s.Z)(N.Z,{},void 0,(0,s.Z)(q.Z,{legend:e.props.t("group-proportion"),onChange:function(t){var n=e.state.groupProbs.slice();n[a]=t,e.setState({groupProbs:n})},defaultValue:e.state.groupProbs[a],step:.01,min:0,max:1,numbersOnly:!1})))},n=0;n<t.length;n++)a(n);return(0,s.Z)(c.Fragment,{},void 0,t,(0,s.Z)("p",{},void 0,this.props.t("proportions-sum-one")))}},{key:"render",value:function(){for(var e=0,t=0;t<this.state.groupProbs.length;t++)e+=this.state.groupProbs[t];var a=this.state.generatedName.length>2&&lt()(e,1)<=15e-9;return(0,s.Z)(T.Z,{cancel:".card-body",onDragStart:function(e){e.stopPropagation()},style:{zIndex:1006}},void 0,(0,s.Z)(f(),{focusTrapOptions:ut},void 0,(0,s.Z)(R.Z,{onHide:this.props.onHide,show:this.props.show,header:this.props.t("group-transformer-header"),footer:(0,s.Z)(d.Z,{onClick:this.makeNewVar,disabled:!a},void 0,this.props.t("create-new-variable")),role:"button",tabIndex:0,bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"}},void 0,(0,s.Z)(C.Z,{},void 0,(0,s.Z)(N.Z,{},void 0,(0,s.Z)(q.Z,{legend:this.props.t("number-of-groups"),onChange:this.handleGroupNumberChange,defaultValue:this.state.nGroups,step:1,min:1,max:99}))),this.renderTable(),(0,s.Z)(C.Z,{},void 0,(0,s.Z)(m.Z,{style:{margin:8}},void 0,(0,s.Z)(g.Z,{},void 0,this.props.t("name-new-variable"),":"),(0,s.Z)(h.Z,{type:"text",placeholder:this.props.t("select-name"),onChange:this.handleGeneratedNameChange,onKeyPress:this.handleKeyPress}),(0,s.Z)(b.Z,{},void 0,this.props.t("new-variable-appended")))))))}}]),a}(c.Component);vt.defaultProps={logAction:function(){}};var pt=vt,Zt=(0,a(844601).Z)((function(){return Promise.all([a.e(6466),a.e(8226),a.e(2460),a.e(1225),a.e(9956),a.e(7293)]).then(a.bind(a,368678))})),ft=function(e){var t,a=e.data,n=e.categorical,r=e.quantitative,o=e.t,i=e.session,u=e.defaultCode,v=e.logAction,p=e.onGenerate,Z=(0,c.useState)(null),f=(0,l.Z)(Z,2),h=f[0],g=f[1],m=function(){var t="formula"===h?null:"formula";g(t),e.onActive(t)},b=function(){var t="bin"===h?null:"bin";g(t),e.onActive(t)},y=function(){var t="categorical"===h?null:"categorical";g(t),e.onActive(t)},w=function(){var t="group"===h?null:"group";g(t),e.onActive(t)},C=function(){var t="random"===h?null:"random";g(t),e.onActive(t)};if(a)switch(h){case"bin":t=(0,s.Z)(de,{show:!0,onHide:b,quantitative:r,logAction:v,onGenerate:p,data:a,t:o});break;case"categorical":t=(0,s.Z)(rt,{show:!0,onHide:y,categorical:n,logAction:v,onGenerate:p,data:a,t:o});break;case"formula":t=(0,s.Z)(De,{show:!0,onHide:m,categorical:n,quantitative:r,data:a,defaultCode:u,logAction:v,onGenerate:p,session:i,t:o});break;case"group":t=(0,s.Z)(pt,{show:!0,onHide:w,logAction:v,onGenerate:p,data:a,t:o});break;case"random":t=(0,s.Z)(Zt,{show:!0,onHide:C,logAction:v,onGenerate:p,data:a,t:o})}return(0,s.Z)(c.Fragment,{},void 0,(0,s.Z)("div",{className:"well",style:{padding:15,margin:15}},void 0,(0,s.Z)("div",{style:{padding:12}},void 0,(0,s.Z)(d.Z,{onClick:m,variant:"primary",block:!0,style:{fontSize:"1.2em"}},void 0,o("interactions-functions"))),(0,s.Z)("div",{style:{padding:12}},void 0,(0,s.Z)(d.Z,{onClick:b,disabled:!r||0===r.length,variant:"primary",block:!0,style:{fontSize:"1.2em"}},void 0,o("bin-quantitative"))),(0,s.Z)("div",{style:{padding:12}},void 0,(0,s.Z)(d.Z,{onClick:y,disabled:!n||0===n.length,variant:"primary",block:!0,style:{fontSize:"1.2em"}},void 0,o("rename-or-combine"))),(0,s.Z)("div",{style:{padding:12}},void 0,(0,s.Z)(d.Z,{onClick:w,variant:"primary",block:!0,style:{fontSize:"1.2em"}},void 0,o("create-groups"))),(0,s.Z)("div",{style:{padding:12}},void 0,(0,s.Z)(d.Z,{onClick:C,variant:"primary",block:!0,style:{fontSize:"1.2em"}},void 0,o("generate-random-data")))),t)};ft.defaultProps={logAction:function(){},onActive:function(){},onGenerate:function(){},defaultCode:"",session:{}};var ht=ft},921455:function(e,t){"use strict";t.Z=function(e){e.stopPropagation()}},217732:function(e,t,a){"use strict";var n=a(542985),r=a(410875),o=a(542094),i="startsWith",s="".startsWith;n(n.P+n.F*a(708852)(i),"String",{startsWith:function(e){var t=o(this,e,i),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return s?s.call(t,n,a):t.slice(a,a+n.length)===n}})},888244:function(e,t,a){"use strict";var n=a(667237);e.exports=n},667237:function(e,t,a){"use strict";var n=a(294565).isPrimitive;e.exports=function(e){var t,a,r;if(!n(e))return!1;if(0===(t=e.length))return!1;for(r=0;r<t;r++)if((a=e.charCodeAt(r))<48||a>57)return!1;return!0}},915521:function(e,t,a){"use strict";var n=a(501874),r=a(567359),o=a(268949),i=a(833022),s=a(213939),l=a(700601),c=a(362739),d=a(306830),u=a(149074).factory,v=a(422957),p=a(488088),Z=a(15311),f=a(583764);e.exports=function(){var e,t,a,h,g,m;if(0===arguments.length)t=u();else if(1===arguments.length){if(!i(e=arguments[0]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(l(e,"prng")){if(!s(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=u(e)}else{if(h=Z(g=arguments[0],m=arguments[1]))throw h;if(arguments.length>2){if(!i(e=arguments[2]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(l(e,"prng")){if(!s(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=u(e)}else t=u()}return n(a=void 0===g?V:P,"NAME","uniform"),e&&e.prng?(n(a,"seed",null),n(a,"seedLength",null),o(a,"state",c(null),d),n(a,"stateLength",null),n(a,"byteLength",null),n(a,"toJSON",c(null)),n(a,"PRNG",t)):(r(a,"seed",b),r(a,"seedLength",y),o(a,"state",N,k),r(a,"stateLength",w),r(a,"byteLength",C),n(a,"toJSON",x),n(a,"PRNG",t),t=t.normalized),a;function b(){return t.seed}function y(){return t.seedLength}function w(){return t.stateLength}function C(){return t.byteLength}function N(){return t.state}function k(e){t.state=e}function x(){var e={type:"PRNG"};return e.name=a.NAME,e.state=p(t.state),e.params=void 0===g?[]:[g,m],e}function P(){return f(t,g,m)}function V(e,a){return v(e)||v(a)||e>=a?NaN:f(t,e,a)}}},501258:function(e,t,a){"use strict";var n=a(501874),r=a(387944);n(r,"factory",a(915521)),e.exports=r},387944:function(e,t,a){"use strict";var n=a(915521)();e.exports=n},583764:function(e){"use strict";e.exports=function(e,t,a){var n=e();return a*n+(1-n)*t}},15311:function(e,t,a){"use strict";var n=a(309765).isPrimitive,r=a(316305);e.exports=function(e,t){return!n(e)||r(e)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+e+"`."):!n(t)||r(t)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+t+"`."):e>=t?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+e+","+t+"]`."):null}},482228:function(e,t,a){"use strict";var n=a(607560),r=a(998283),o=a(72779),i=a.n(o),s=a(202784),l=a(429658),c=["bsPrefix","className"],d=s.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,d=(0,r.Z)(e,c),u=(0,l.vE)(a,"btn-toolbar");return s.createElement("div",(0,n.Z)({},d,{ref:t,className:i()(o,u)}))}));d.displayName="ButtonToolbar",d.defaultProps={role:"toolbar"},t.Z=d},845450:function(e,t,a){"use strict";var n=a(607560),r=a(998283),o=a(72779),i=a.n(o),s=a(202784),l=a(429658),c=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=s.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,d=e.striped,u=e.bordered,v=e.borderless,p=e.hover,Z=e.size,f=e.variant,h=e.responsive,g=(0,r.Z)(e,c),m=(0,l.vE)(a,"table"),b=i()(o,m,f&&m+"-"+f,Z&&m+"-"+Z,d&&m+"-striped",u&&m+"-bordered",v&&m+"-borderless",p&&m+"-hover"),y=s.createElement("table",(0,n.Z)({},g,{className:b,ref:t}));if(h){var w=m+"-responsive";return"string"==typeof h&&(w=w+"-"+h),s.createElement("div",{className:w},y)}return y}));t.Z=d}}]);