/*! For license information please see VariableTransformerMenu.4470d0a2.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3047],{234506:function(e,t,a){a.r(t),a.d(t,{default:function(){return vt}});var n=a(202784),r=a(213980),l=a.n(r),o=a(770561),i=a(55196),s=a(690299),c=a.n(s),u=a(579553),m=a.n(u),d=a(26266),p=a(830650),h=a(10863),f=a(96904),g=a(822736),v=a(260952),b=a(458264),E=a(312594),y=a(501258),Z=a.n(y),C=a(437069),k=a.n(C),w=a(74039),N=a.n(w),x=a(224008),q=a.n(x),V=a(309765),P=a(929321),F=a(656278),S=a(586318),G=a(473861),H=a(584443),A=a(262600),R=a(837898),T=a(316305),O=a.n(T),z=a(412042),L=a(519907),j=a(630132),K=a(292169),B=a(382617),D=a(147282),M=a(907756),I=a(80674),Y=a(153225),W=Object.defineProperty,$=Object.defineProperties,U=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,_=function(e,t,a){return t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a},ee=function(e,t){for(var a in t||(t={}))J.call(t,a)&&_(e,a,t[a]);if(X)for(var n,r=(0,i.Z)(X(t));!(n=r()).done;){a=n.value;Q.call(t,a)&&_(e,a,t[a])}return e},te=function(e,t){return $(e,U(t))},ae=c()("isle:data-explorer:variable-transformer"),ne=/shapes\[(\d)\]\.x0/,re={group:null,displayDensity:!0,densityType:"Data-driven",chooseBins:!1,nBins:null},le={clickOutsideDeactivates:!0};function oe(e,t){return e-t}var ie=function(e){for(var t=[],a=0;a<e.length;a++)t.push({type:"line",x0:e[a],y0:-100,x1:e[a],y1:100,line:{color:"red",width:3}});return t},se=function(e,t){var a=new Array(t.length);t[0]?a[0]=t[0]:a[0]="(-\u221e,"+e[0]+")";for(var n=1;n<t.length;n++)t[n]?a[n]=t[n]:a[n]="["+e[n-1]+","+e[n]+")";var r=t.length-1;return t[r]?a[r]=t[r]:a[r]="["+e[e.length-1]+",\u221e)",a},ce=function(e){var t,a,r=(0,n.useState)(""),l=r[0],i=r[1],s=(0,n.useState)(0),c=s[0],u=s[1],y=(0,n.useState)({variable:null,configHist:null,breakpoints:null,categories:null,customNames:null}),C=y[0],w=y[1],x=l.length<2,T=function(){var t=C.variable,a=C.categories,n=C.breakpoints,r=e.data[t],o=(0,I.Z)(r,a,n);e.logAction(B.dU,{name:l,variable:t,breaks:n,categories:a});var i=(0,z.Z)(l,a);e.onGenerate(i,o),e.onHide()},W=function(e){13!==e.charCode||x||T()},$=function(e){i(e.target.value)},U=function(e){return function(t){ae("Change break point...");var a=C.breakpoints.slice();a[e]=N()(t,-c),a.sort(oe);var n=q()(C.configHist);n.layout.shapes=ie(a),w(te(ee({},C),{configHist:n,breakpoints:a,categories:se(a,C.customNames)}))}},X=function(e){return function(t){var a=C.categories.slice();a[e]=t;var n=C.customNames.slice();n[e]=t;var r=te(ee({},C),{categories:a,customNames:n});w(r)}},J=function(e){return function(){var t=C.breakpoints,a=C.categories,n=C.customNames;t.splice(e,1),a.splice(e,1),n.splice(e,1);var r=ee({},C.configHist);r.layout.shapes=ie(t),w(te(ee({},C),{configHist:r,categories:a,customNames:n,breakpoints:t}))}},Q=function(e){var t=k()(e),a=ne.exec(t[0]);if(a){var n=a[1],r=C.breakpoints.slice();r[n]=N()(e[t[0]],-c),r.sort(oe);var l=q()(C.configHist);l.layout.shapes=ie(r),w(te(ee({},C),{configHist:l,breakpoints:r,categories:se(r,C.customNames)}))}},_=function(t){ae("Change variable to bin...");var a=ee({data:e.data,variable:t},re),n=(0,D.N)(a);n.layout.yaxis={range:[(0,j.Z)(n.data[1].y),(0,K.Z)(n.data[1].y)],fixedrange:!0},n.layout.xaxis={fixedrange:!0};var r=e.data[t];r=r.filter((function(e){return(0,V.isPrimitive)(e)&&!O()(e)}));var l=[N()((0,L.Z)(r),-c)];n.layout.shapes=ie(l);var o=[!1,!1];w({variable:t,configHist:n,breakpoints:l,customNames:o,categories:se(l,o)})},ce=function(){var t=C.breakpoints.slice(),a=e.data[C.variable];a=a.filter((function(e){return(0,V.isPrimitive)(e)&&!O()(e)}));var n=Z()(.8,1.2)*(0,L.Z)(a);t.push(N()(n,-c)),t.sort(oe);var r=q()(C.configHist);r.layout.shapes=ie(t);var l=C.customNames;l.push(!1);var o=te(ee({},C),{breakpoints:t,configHist:r,categories:se(t,l)});w(o)};return n.createElement(G.Z,{cancel:".card-body",onDragStart:M.Z,style:{zIndex:1006}},n.createElement(m(),{focusTrapOptions:le},n.createElement(A.Z,{onHide:e.onHide,show:e.show,header:e.t("bin-transformer-header"),footer:n.createElement(o.Z,{onClick:T,disabled:x},e.t("create-new-variable")),bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"},role:"button",tabIndex:0},(t=C.configHist,a=n.createElement(F.Z,{legend:e.t("variable-to-bin"),defaultValue:C.variable,options:e.quantitative,onChange:_,style:{maxWidth:400}}),t?n.createElement(n.Fragment,null,a,n.createElement(o.Z,{className:"insert-line-button",onClick:ce},e.t("insert-break-line")),n.createElement("p",null,e.t("drag-red-bars"),"(",n.createElement(P.Z,{legend:e.t("digits-after-decimal-snap"),min:0,max:9,inline:!0,defaultValue:c,onChange:u}),")"),n.createElement("div",{style:{height:250}},n.createElement(H.Z,{data:t.data,layout:t.layout,editable:!0,fit:!0,removeButtons:!0,legendButtons:!1,onRelayout:Q})),n.createElement("div",null,n.createElement(v.Z,{className:"mb-2"},n.createElement(v.Z.Header,null,e.t("choose-category-labels"),":"),n.createElement(v.Z.Body,null,function(){var t=[],a=C.breakpoints,r=1===a.length;if(t.push(n.createElement(b.Z,{key:"div-0"},n.createElement(E.Z,{md:7},n.createElement(R.Z,{raw:"x < "}),n.createElement(P.Z,{inline:!0,onBlur:U(0),defaultValue:a[0],step:"any"})),n.createElement(E.Z,{md:4},n.createElement(S.Z,{key:0,legend:e.t("label")+" 1",defaultValue:C.categories[0],onChange:X(0),style:{width:200}})),n.createElement(E.Z,{md:1}))),a.length>1)for(var l=0;l<a.length-1;l++){var o=X(l+1);t.push(n.createElement(b.Z,{key:"div-"+(l+1)},n.createElement(E.Z,{md:7},n.createElement(P.Z,{inline:!0,onBlur:U(l),defaultValue:a[l],step:"any"}),n.createElement(R.Z,{raw:"\\le x <"}),n.createElement(P.Z,{inline:!0,onBlur:U(l+1),defaultValue:a[l+1],step:"any"})),n.createElement(E.Z,{md:4},n.createElement(S.Z,{key:1+l,legend:e.t("label")+" "+(l+2),defaultValue:C.categories[l+1],onChange:o,style:{width:200}})),n.createElement(E.Z,{md:1},n.createElement(Y.Z,{onClick:J(l),style:{marginTop:"5px"},disabled:r,tooltipPlacement:"right"}))))}var i=a.length;return t.push(n.createElement(b.Z,{key:"div-"+i},n.createElement(E.Z,{md:7},n.createElement(R.Z,{raw:"x \\ge"}),n.createElement(P.Z,{inline:!0,onChange:U(i-1),defaultValue:a[i-1],step:"any"})),n.createElement(E.Z,{md:4},n.createElement(S.Z,{legend:"Label "+(i+1),defaultValue:C.categories[i],onChange:X(i),key:i,style:{width:200}})),n.createElement(E.Z,{md:1},n.createElement(Y.Z,{onClick:J(i-1),style:{marginTop:"5px"},disabled:r})))),t}()))),n.createElement(h.Z,{style:{width:"fit-content"}},n.createElement(p.Z,null,e.t("name-new-variable"),":"),n.createElement(d.Z,{type:"text",placeholder:e.t("select-name"),onChange:$,onKeyPress:W}),n.createElement(f.Z,null,e.t("new-variable-appended")))):n.createElement(n.Fragment,null,a,n.createElement(g.Z,{variant:"info"},e.t("select-variable-bin")))))))};ce.defaultProps={logAction:function(){},onGenerate:function(){}},ce.propTypes={show:l().bool.isRequired,data:l().object.isRequired,quantitative:l().array.isRequired,logAction:l().func,onHide:l().func.isRequired,onGenerate:l().func};var ue=ce,me=a(497326),de=a(894578),pe=a(387612),he=a(845450),fe=a(423184),ge=a(482228),ve=a(738314),be=a(380408),Ee=a(156562),ye=a(298166),Ze=a(584195),Ce=a(708579),ke=a(605977),we=a.n(ke),Ne=a(287013),xe=a.n(Ne),qe=a(302467),Ve=a.n(qe),Pe=a(271743),Fe=a(714785),Se=Object.defineProperty,Ge=function(e,t,a){return function(e,t,a){t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a}(e,"symbol"!=typeof t?t+"":t,a),a},He=/datum\.([^0-9]+)(\d+):datum\.\1(\d+)/,Ae=we()(0,10,1),Re=/(?:^|\n)([^\n]*)$/,Te=/^[0-9]/,Oe={clickOutsideDeactivates:!0},ze=n.forwardRef((function(e,t){var a=e.children,r=e.style,l=e.className,o=e["aria-labelledby"],i=(0,n.useState)(""),s=i[0],c=i[1];return n.createElement("div",{ref:t,style:r,className:l,"aria-labelledby":o},n.createElement(d.Z,{className:"mx-3 my-2 w-auto",placeholder:"Type to filter...",onChange:function(e){return c(e.target.value)},value:s}),n.createElement("ul",{className:"list-unstyled"},n.Children.toArray(a).filter((function(e){return!s||e.props.children.toLowerCase().startsWith(s)}))))})),Le=function(e){function t(t){var a;return a=e.call(this,t)||this,Ge((0,me.Z)(a),"handleGenerate",(function(){var e,t=a.state,n=t.code,r=t.name;if(He.test(n)){for(var l=He.exec(n),o=l[1],i=parseInt(l[2],10),s=parseInt(l[3],10),c="",u=i;u<=s;u++)c+="datum."+o+u,c+=u<s?",":"";n=Ve()(n,l[0],c)}xe()(n,"return ")||(n=Ve()(n,Re,"\nreturn $1"));try{e=(0,Pe.Z)(n,a.props.data),a.props.logAction(B.gx,{code:n,name:r}),a.state.asCategorical&&(e=e.map((function(e){return String(e)}))),a.props.onGenerate(r,e)}catch(m){return a.props.session.addNotification({title:"Errored",message:"Encountered the following error: "+m.message,level:"error",position:"tr"})}a.props.onHide()})),Ge((0,me.Z)(a),"handleNameChange",(function(e){a.setState({name:e.target.value})})),Ge((0,me.Z)(a),"handleCodeChange",(function(e){a.setState({code:e})})),Ge((0,me.Z)(a),"handleKeyPress",(function(e){13===e.charCode&&a.state.name.length>=2&&a.handleGenerate()})),Ge((0,me.Z)(a),"insertVarFactory",(function(e){return function(){var t=a.state.code.substring(0,a.state.selection),n="datum";t+=n+=!xe()(e," ")&&!xe()(e,".")&&!Te.test(e)?"."+e:"['"+e+"']",t+=a.state.code.substring(a.state.selection),a.setState({code:t,selection:a.state.selection+n.length})}})),Ge((0,me.Z)(a),"insertLiteralFactory",(function(e){return function(){var t=a.state.code.substring(0,a.state.selection),n=e;t+=n,t+=a.state.code.substring(a.state.selection),a.setState({code:t,selection:a.state.selection+n.length})}})),Ge((0,me.Z)(a),"insertFuncFactory",(function(e){return function(){var t=a.state.code.substring(0,a.state.selection),n=" "+e+"()";t+=n,t+=a.state.code.substring(a.state.selection),a.setState({code:t,selection:a.state.selection+n.length-1})}})),a.state={code:t.defaultCode,selection:null,name:"",showGuide:!1,asCategorical:!1},a}return(0,de.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props.t,a=this.props.quantitative.map((function(t,a){return n.createElement(ve.Z.Item,{key:a,onClick:e.insertVarFactory(t),eventKey:a},t)}));return n.createElement(G.Z,{cancel:".card-body",onDragStart:function(e){e.stopPropagation()},style:{zIndex:1006}},n.createElement(m(),{focusTrapOptions:Oe},n.createElement(A.Z,{show:this.props.show,onHide:this.props.onHide,header:this.props.t("formula-transformer-header"),footer:n.createElement(o.Z,{onClick:this.handleGenerate,disabled:this.state.name.length<2},this.props.t("create-new-variable")),role:"button",tabIndex:0,bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"}},n.createElement("div",{className:"formula-transformer-body"},n.createElement(ye.Z,{headerClassName:"title",header:this.state.showGuide?t("hide-example-guide"):t("show-example-guide"),visible:this.state.showGuide,onClick:function(){return e.setState({showGuide:!e.state.showGuide})}},n.createElement("p",null,t("formula-transformer-example-intro")),n.createElement(he.Z,{condensed:!0},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,t("type")),n.createElement("th",null,t("example")),n.createElement("th",null,t("description")))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,t("interaction"),":"),n.createElement("td",null,n.createElement("code",null,"datum.",this.props.quantitative[0]," * datum.",this.props.quantitative[1])),n.createElement("td",null,n.createElement(pe.c,{i18nKey:"example-description-multiply",ns:"DataExplorer"},"Multiply values of variables ",n.createElement("code",null,{first:this.props.quantitative[0]})," and ",n.createElement("code",null,{second:this.props.quantitative[1]})))),n.createElement("tr",null,n.createElement("td",null,t("transformation"),":"),n.createElement("td",null,n.createElement("code",null,"exp( datum.",this.props.quantitative[0]," )")),n.createElement("td",null,n.createElement(pe.c,{i18nKey:"example-description-exponential",ns:"DataExplorer"},"Natural exponential function of variable ",n.createElement("code",null,{variable:this.props.quantitative[0]})))),n.createElement("tr",null,n.createElement("td",null,t("function"),":"),n.createElement("td",null,n.createElement("code",null,"9/5 * ",this.props.quantitative[0]," + 32")),n.createElement("td",null,n.createElement(pe.c,{i18nKey:"example-description-calculation",ns:"DataExplorer"},"Multiply values of ",n.createElement("code",null,{variable:this.props.quantitative[0]})," by ",n.createElement("code",null,"9/5")," and add ",n.createElement("code",null,"32"))))))),n.createElement("hr",null),n.createElement("div",{className:"mb-2"},n.createElement(ge.Z,{style:{marginBottom:5}},n.createElement(ve.Z,{className:"mr-2"},n.createElement(ve.Z.Toggle,{variant:"light",id:"dropdown-custom-components"},t("quantitative")),n.createElement(ve.Z.Menu,{variant:"light",as:ze,id:"bg-nested-dropdown"},a)),n.createElement(ve.Z,{className:"mr-2"},n.createElement(ve.Z.Toggle,{variant:"light",id:"dropdown-custom-components"},t("categorical")),n.createElement(ve.Z.Menu,{variant:"light",as:ze,id:"bg-nested-dropdown"},this.props.categorical.map((function(t,a){return n.createElement(ve.Z.Item,{key:a,onClick:e.insertVarFactory(t),eventKey:a},t)})))))),n.createElement(v.Z,{className:"mb-2"},n.createElement(v.Z.Body,null,n.createElement(ge.Z,{style:{marginBottom:5}},n.createElement(fe.Z,{size:"sm",className:"mr-2"},n.createElement(Ce.Z,{placement:"top",tooltip:t("smaller-than")},n.createElement(o.Z,{variant:"light",onClick:this.insertLiteralFactory(" < ")},"<")),n.createElement(Ce.Z,{placement:"top",tooltip:t("greater-than")},n.createElement(o.Z,{variant:"light",onClick:this.insertLiteralFactory(" > ")},">")),n.createElement(Ce.Z,{placement:"top",tooltip:t("smaller-or-equal")},n.createElement(o.Z,{variant:"light",onClick:this.insertLiteralFactory(" <= ")},"<=")),n.createElement(Ce.Z,{placement:"top",tooltip:t("greater-or-equal")},n.createElement(o.Z,{variant:"light",onClick:this.insertLiteralFactory(" >= ")},">="))),n.createElement(fe.Z,{size:"sm",className:"mr-2"},n.createElement(Ce.Z,{placement:"top",tooltip:t("open-parenthesis")},n.createElement(o.Z,{variant:"light",onClick:this.insertLiteralFactory(" ( ")},"(")),n.createElement(Ce.Z,{placement:"top",tooltip:t("closing-parenthesis")},n.createElement(o.Z,{variant:"light",onClick:this.insertLiteralFactory(" ) ")},")"))),n.createElement(fe.Z,{size:"sm",className:"mr-2"},n.createElement(Ce.Z,{placement:"top",tooltip:t("addition")},n.createElement(o.Z,{variant:"light",onClick:this.insertLiteralFactory(" + ")},"+")),n.createElement(Ce.Z,{placement:"top",tooltip:t("subtraction")},n.createElement(o.Z,{variant:"light",onClick:this.insertLiteralFactory(" - ")},"-")),n.createElement(Ce.Z,{placement:"top",tooltip:t("multiplication")},n.createElement(o.Z,{variant:"light",onClick:this.insertLiteralFactory(" * ")},"*")),n.createElement(Ce.Z,{placement:"top",tooltip:t("division")},n.createElement(o.Z,{variant:"light",onClick:this.insertLiteralFactory(" / ")},"/"))),n.createElement(fe.Z,{size:"sm",className:"mr-2"},n.createElement(Ce.Z,{placement:"top",tooltip:t("boolean-and")},n.createElement(o.Z,{variant:"light",onClick:this.insertLiteralFactory(" && ")},t("and"))),n.createElement(Ce.Z,{placement:"top",tooltip:t("boolean-or")},n.createElement(o.Z,{variant:"light",onClick:this.insertLiteralFactory(" || ")},t("or"))),n.createElement(Ce.Z,{placement:"top",tooltip:t("boolean-not")},n.createElement(o.Z,{variant:"light",onClick:this.insertLiteralFactory(" !")},t("not"))))),n.createElement(ge.Z,{style:{marginBottom:5}},n.createElement(fe.Z,{size:"sm",className:"mr-2"},Ae.map((function(t,a){return n.createElement(o.Z,{key:a,variant:"light",onClick:e.insertLiteralFactory(""+t)},t)})),n.createElement(o.Z,{variant:"light",onClick:this.insertLiteralFactory(".")},"."))),n.createElement(ge.Z,null,n.createElement(fe.Z,{size:"sm",className:"me-2"},Fe.map((function(a,r){return n.createElement(Ce.Z,{key:r,placement:"bottom",tooltip:t(a+"-tooltip")},n.createElement(o.Z,{variant:"light",onClick:e.insertFuncFactory(a),eventKey:r},a))})))))),n.createElement(v.Z,{className:"mb-2"},n.createElement(v.Z.Body,null,n.createElement(Ze.Z,{ref:function(t){e.textarea=t},legend:t("expression")+":",placeholder:t("enter-formula"),value:this.state.code,onChange:this.handleCodeChange,onBlur:function(t){var a=t.target.selectionStart;e.setState({selection:a})},rows:3}))),n.createElement(h.Z,{style:{margin:8}},n.createElement(p.Z,null,t("name-new-variable"),":"),n.createElement(d.Z,{type:"text",placeholder:t("select-name"),onChange:this.handleNameChange,onKeyPress:this.handleKeyPress}),n.createElement(f.Z,null,t("new-variable-appended"))),n.createElement(be.Z,{name:"options",onChange:function(t){e.setState({asCategorical:t})},type:"radio",size:"small",value:this.state.asCategorical,style:{padding:6}},n.createElement(Ee.Z,{variant:"outline-secondary",value:!1},t("treat-as-quantitative")),n.createElement(Ee.Z,{variant:"outline-secondary",value:!0},t("treat-as-categorical")))))))},t}(n.Component);Le.defaultProps={logAction:function(){},onGenerate:function(){},defaultCode:"",session:{}},Le.propTypes={show:l().bool.isRequired,categorical:l().array.isRequired,quantitative:l().array.isRequired,data:l().object.isRequired,defaultCode:l().string,logAction:l().func,onGenerate:l().func,onHide:l().func.isRequired,session:l().object};var je=Le,Ke=a(43649),Be=a(147777),De=a.n(Be),Me=a(471205),Ie=a.n(Me),Ye=a(888244),We=a.n(Ye),$e=a(413262),Ue=a(378176),Xe=a(151127),Je=Object.defineProperty,Qe=function(e,t,a){return function(e,t,a){t in e?Je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a}(e,"symbol"!=typeof t?t+"":t,a),a},_e=c()("isle:data-explorer:variable-transformer"),et={clickOutsideDeactivates:!0};function tt(e){return e?Ve()(e,".","[dot]"):e}function at(e){for(var t=k()(e),a=!0,n=0;n<t.length;n++)We()(e[t[n]])||(a=!1);return a}var nt=function(e){function t(t){var a;a=e.call(this,t)||this,Qe((0,me.Z)(a),"handleFirstVariableChange",(function(e){var t,n={};if(a.state.secondVar){var r=e,l=a.state.secondVar,o=a.props.data[r];t=De()(o,Ie());for(var i=(0,Xe.Z)(t,r),s=(0,Xe.Z)(a.state.secondFreqs,l),c=0;c<i.length;c++)for(var u=0;u<s.length;u++){var m=i[c]+"-"+s[u];n[tt(m)]=m}}else{var d=a.props.data[e];t=De()(d,Ie());for(var p=(0,Xe.Z)(t,e),h=0;h<p.length;h++)n[tt(p[h])]=p[h]}var f=at(n);a.setState({firstVar:e,firstFreqs:t,nameMappings:n,onlyNumbers:f})})),Qe((0,me.Z)(a),"handleSecondVariableChange",(function(e){if(!e){for(var t=a.state.firstVar,n=(0,Xe.Z)(a.state.firstFreqs,t),r={},l=0;l<n.length;l++)r[tt(n[l])]=n[l];return a.setState({secondVar:e,nameMappings:r})}for(var o={},i=a.state.firstVar,s=a.props.data[e],c=De()(s,Ie()),u=(0,Xe.Z)(a.state.firstFreqs,i),m=(0,Xe.Z)(c,e),d=0;d<u.length;d++)for(var p=0;p<m.length;p++){var h=u[d]+"-"+m[p];o[tt(h)]=h}var f=at(o);a.setState({secondVar:e,secondFreqs:c,nameMappings:o,onlyNumbers:f})})),Qe((0,me.Z)(a),"handleKeyPress",(function(e){13===e.charCode&&a.state.generatedName.length>=2&&a.makeNewVar()})),Qe((0,me.Z)(a),"changeFreqFactory",(function(e){return function(t){var n=q()(a.state.nameMappings);n[tt(e)]=t.target.value;var r=at(n);a.setState({nameMappings:n,onlyNumbers:r})}})),Qe((0,me.Z)(a),"changeContigencyFactory",(function(e,t){return function(n){var r=q()(a.state.nameMappings);r[tt(t)+"-"+tt(e)]=n.target.value,a.setState({nameMappings:r})}})),Qe((0,me.Z)(a),"handleGeneratedNameChange",(function(e){a.setState({generatedName:e.target.value})})),Qe((0,me.Z)(a),"makeNewVar",(function(){_e("Generating new categorical variable...");var e=a.state,t=e.firstVar,n=e.secondVar,r=e.nameMappings,l=e.castNumeric,o=(0,Ue.Z)(t,n,r,a.props.data,l);a.props.onGenerate(a.state.generatedName,o),a.props.logAction(B.CS,{name:a.state.generatedName,firstVar:t,secondVar:n,nameMappings:r,castNumeric:l}),a.props.onHide()})),Qe((0,me.Z)(a),"renderFrequencyTable",(function(){var e=a.state.firstVar,t=a.props.data[e],r=De()(t,Ie()),l=(0,Xe.Z)(r,e);return n.createElement(Ke.Z,{bordered:!0,style:{margin:8},clickable:!1},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,a.props.t("old"),":"),l.map((function(t,a){return n.createElement("th",{key:e+"-"+a+"-old"},t)})))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null,a.props.t("new"),":"),l.map((function(t,r){return n.createElement("th",{key:e+"-"+r+"-new"},n.createElement("input",{className:"transformer-table-input",type:"text",defaultValue:t,onChange:a.changeFreqFactory(t)}))}))),n.createElement("tr",{style:{borderTop:"1px solid black"}},n.createElement("th",null,a.props.t("frequencies"),":"),l.map((function(t,r){var l=a.state.firstFreqs[t];return n.createElement("td",{key:e+"-"+r+"-freq"},l)})))))})),Qe((0,me.Z)(a),"renderContingencyTable",(function(){var e=a.state.secondVar,t=a.state.firstVar,r=a.props.data[e],l=a.props.data[t],o=De()(r,Ie()),i=De()(l,Ie()),s=(0,Xe.Z)(o,e),c=(0,Xe.Z)(i,t);return n.createElement(Ke.Z,{bordered:!0,style:{margin:8}},n.createElement("tr",null,n.createElement("th",null),c.map((function(e,t){return n.createElement("th",{key:e+"-"+t},e)}))),s.map((function(e,t){return n.createElement("tr",{key:e+"-"+t},n.createElement("th",null,e),c.map((function(t,r){return n.createElement("td",{key:e+"-"+t+"-"+r},n.createElement("input",{className:"transformer-table-input",type:"text",defaultValue:t+"-"+e,onChange:a.changeContigencyFactory(e,t)}))})))})))}));for(var r=t.categorical[0],l=t.data[r],o=De()(l,Ie()),i=(0,Xe.Z)(o,r),s={},c=0;c<i.length;c++)s[tt(i[c])]=i[c];return a.state={generatedName:"",firstVar:r,firstFreqs:o,nameMappings:s,secondVar:null,secondFreqs:null,castNumeric:!1,onlyNumbers:!1},a}(0,de.Z)(t,e);var a=t.prototype;return a.renderTable=function(){return this.state.firstVar&&this.state.secondVar?this.renderContingencyTable():this.state.firstVar||this.state.secondVar?this.renderFrequencyTable():null},a.render=function(){var e=this,t=this.props.t;return n.createElement(G.Z,{cancel:".card-body",onDragStart:function(e){e.stopPropagation()},style:{zIndex:1006}},n.createElement(m(),{focusTrapOptions:et},n.createElement(A.Z,{onHide:this.props.onHide,show:this.props.show,header:t("categorical-transformer-header"),footer:n.createElement(o.Z,{onClick:this.makeNewVar,disabled:this.state.generatedName.length<2},t("create-new-variable")),bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"},role:"button",tabIndex:0},n.createElement(b.Z,null,n.createElement(E.Z,{md:4},n.createElement(F.Z,{legend:t("first-variable"),defaultValue:this.state.firstVar||"",options:this.props.categorical,onChange:this.handleFirstVariableChange})),n.createElement(E.Z,{md:4},n.createElement(F.Z,{clearable:!0,legend:t("optional-second-variable"),defaultValue:this.state.secondVar||"",options:this.props.categorical,onChange:this.handleSecondVariableChange}))),n.createElement(b.Z,{style:{overflowX:"auto",width:"100%"}},this.renderTable()),n.createElement(b.Z,null,n.createElement(Ce.Z,{tooltip:t("treat-labels-as-numbers-tooltip")},n.createElement($e.Z,{legend:t("treat-labels-as-numbers"),defaultValue:!1,disabled:!this.state.onlyNumbers,onChange:function(){e.setState({castNumeric:!e.state.castNumeric})}}))),n.createElement(b.Z,null,n.createElement(h.Z,{style:{margin:8}},n.createElement(p.Z,null,t("name-new-variable"),":"),n.createElement(d.Z,{type:"text",placeholder:t("select-name"),onChange:this.handleGeneratedNameChange,onKeyPress:this.handleKeyPress}),n.createElement(f.Z,null,t("new-variable-appended")))))))},t}(n.Component);nt.defaultProps={logAction:function(){}},nt.propTypes={categorical:l().array.isRequired,data:l().object.isRequired,onGenerate:l().func.isRequired,logAction:l().func,onHide:l().func.isRequired,show:l().bool.isRequired};var rt=nt,lt=a(240054),ot=a.n(lt),it=a(1570),st=a.n(it),ct=Object.defineProperty,ut=function(e,t,a){return function(e,t,a){t in e?ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a}(e,"symbol"!=typeof t?t+"":t,a),a},mt=c()("isle:data-explorer:group-transformer"),dt={clickOutsideDeactivates:!0},pt=function(e){function t(t){var a;return a=e.call(this,t)||this,ut((0,me.Z)(a),"handleGeneratedNameChange",(function(e){a.setState({generatedName:e.target.value})})),ut((0,me.Z)(a),"handleGroupNumberChange",(function(e){for(var t=new Array(e).fill(1/e),n=new Array(e),r=0;r<n.length;r++)n[r]=a.props.t("group")+" "+(r+1);a.setState({groupProbs:t,labels:n,nGroups:e})})),ut((0,me.Z)(a),"handleKeyPress",(function(e){if(13===e.charCode){for(var t=0,n=0;n<a.state.groupProbs.length;n++)t+=a.state.groupProbs[n];a.state.generatedName.length>2&&st()(t,1)<=15e-9&&a.makeNewVar()}})),ut((0,me.Z)(a),"makeNewVar",(function(){mt("Generating new categorical variable...");var e=k()(a.props.data),t=a.props.data[e[0]].length,n=ot()(a.state.labels,{size:t,probs:a.state.groupProbs,replace:!0});a.props.onGenerate(a.state.generatedName,n),a.props.logAction(B.Dp,{name:a.state.generatedName,labels:a.state.labels,groupProbs:a.state.groupProbs}),a.props.onHide()})),a.state={generatedName:"",nGroups:2,groupProbs:[.5,.5],labels:["Group 1","Group 2"]},a}(0,de.Z)(t,e);var a=t.prototype;return a.renderTable=function(){for(var e=this,t=new Array(this.state.nGroups),a=function(a){t[a]=n.createElement(b.Z,{key:a},n.createElement(E.Z,null,n.createElement(S.Z,{legend:"Label for Group "+(a+1),defaultValue:e.state.labels[a],onChange:function(t){var n=e.state.labels.slice();n[a]=t,e.setState({labels:n})}})),n.createElement(E.Z,null,n.createElement(P.Z,{legend:e.props.t("group-proportion"),onChange:function(t){var n=e.state.groupProbs.slice();n[a]=t,e.setState({groupProbs:n})},defaultValue:e.state.groupProbs[a],step:.01,min:0,max:1,numbersOnly:!1})))},r=0;r<t.length;r++)a(r);return n.createElement(n.Fragment,null,t,n.createElement("p",null,this.props.t("proportions-sum-one")))},a.render=function(){for(var e=0,t=0;t<this.state.groupProbs.length;t++)e+=this.state.groupProbs[t];var a=this.state.generatedName.length>2&&st()(e,1)<=15e-9;return n.createElement(G.Z,{cancel:".card-body",onDragStart:function(e){e.stopPropagation()},style:{zIndex:1006}},n.createElement(m(),{focusTrapOptions:dt},n.createElement(A.Z,{onHide:this.props.onHide,show:this.props.show,header:this.props.t("group-transformer-header"),footer:n.createElement(o.Z,{onClick:this.makeNewVar,disabled:!a},this.props.t("create-new-variable")),role:"button",tabIndex:0,bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"}},n.createElement(b.Z,null,n.createElement(E.Z,null,n.createElement(P.Z,{legend:this.props.t("number-of-groups"),onChange:this.handleGroupNumberChange,defaultValue:this.state.nGroups,step:1,min:1,max:99}))),this.renderTable(),n.createElement(b.Z,null,n.createElement(h.Z,{style:{margin:8}},n.createElement(p.Z,null,this.props.t("name-new-variable"),":"),n.createElement(d.Z,{type:"text",placeholder:this.props.t("select-name"),onChange:this.handleGeneratedNameChange,onKeyPress:this.handleKeyPress}),n.createElement(f.Z,null,this.props.t("new-variable-appended")))))))},t}(n.Component);pt.defaultProps={logAction:function(){}},pt.propTypes={data:l().object.isRequired,onGenerate:l().func.isRequired,logAction:l().func,onHide:l().func.isRequired,show:l().bool.isRequired};var ht=pt,ft=(0,a(525263).Z)((function(){return Promise.all([a.e(8941),a.e(8226),a.e(1634),a.e(1225),a.e(9956),a.e(7293)]).then(a.bind(a,147335))})),gt=function(e){var t,a=e.data,r=e.categorical,l=e.quantitative,i=e.t,s=e.session,c=e.defaultCode,u=e.logAction,m=e.onGenerate,d=(0,n.useState)(null),p=d[0],h=d[1],f=function(){var t="formula"===p?null:"formula";h(t),e.onActive(t)},g=function(){var t="bin"===p?null:"bin";h(t),e.onActive(t)},v=function(){var t="categorical"===p?null:"categorical";h(t),e.onActive(t)},b=function(){var t="group"===p?null:"group";h(t),e.onActive(t)},E=function(){var t="random"===p?null:"random";h(t),e.onActive(t)};if(a)switch(p){case"bin":t=n.createElement(ue,{show:!0,onHide:g,quantitative:l,logAction:u,onGenerate:m,data:a,t:i});break;case"categorical":t=n.createElement(rt,{show:!0,onHide:v,categorical:r,logAction:u,onGenerate:m,data:a,t:i});break;case"formula":t=n.createElement(je,{show:!0,onHide:f,categorical:r,quantitative:l,data:a,defaultCode:c,logAction:u,onGenerate:m,session:s,t:i});break;case"group":t=n.createElement(ht,{show:!0,onHide:b,logAction:u,onGenerate:m,data:a,t:i});break;case"random":t=n.createElement(ft,{show:!0,onHide:E,logAction:u,onGenerate:m,data:a,t:i})}return n.createElement(n.Fragment,null,n.createElement("div",{className:"well",style:{padding:15,margin:15}},n.createElement("div",{style:{padding:12}},n.createElement(o.Z,{onClick:f,variant:"primary",block:!0,style:{fontSize:"1.2em"}},i("interactions-functions"))),n.createElement("div",{style:{padding:12}},n.createElement(o.Z,{onClick:g,disabled:!l||0===l.length,variant:"primary",block:!0,style:{fontSize:"1.2em"}},i("bin-quantitative"))),n.createElement("div",{style:{padding:12}},n.createElement(o.Z,{onClick:v,disabled:!r||0===r.length,variant:"primary",block:!0,style:{fontSize:"1.2em"}},i("rename-or-combine"))),n.createElement("div",{style:{padding:12}},n.createElement(o.Z,{onClick:b,variant:"primary",block:!0,style:{fontSize:"1.2em"}},i("create-groups"))),n.createElement("div",{style:{padding:12}},n.createElement(o.Z,{onClick:E,variant:"primary",block:!0,style:{fontSize:"1.2em"}},i("generate-random-data")))),t)};gt.defaultProps={logAction:function(){},onActive:function(){},onGenerate:function(){},defaultCode:"",session:{}},gt.propTypes={categorical:l().array.isRequired,quantitative:l().array.isRequired,data:l().object.isRequired,defaultCode:l().string,logAction:l().func,onActive:l().func,onGenerate:l().func,session:l().object};var vt=gt},907756:function(e,t){t.Z=function(e){e.stopPropagation()}},888244:function(e,t,a){var n=a(667237);e.exports=n},667237:function(e,t,a){var n=a(294565).isPrimitive;e.exports=function(e){var t,a,r;if(!n(e))return!1;if(0===(t=e.length))return!1;for(r=0;r<t;r++)if((a=e.charCodeAt(r))<48||a>57)return!1;return!0}},482228:function(e,t,a){var n=a(807896),r=a(231461),l=a(72779),o=a.n(l),i=a(202784),s=a(429658),c=["bsPrefix","className"],u=i.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,u=(0,r.Z)(e,c),m=(0,s.vE)(a,"btn-toolbar");return i.createElement("div",(0,n.Z)({},u,{ref:t,className:o()(l,m)}))}));u.displayName="ButtonToolbar",u.defaultProps={role:"toolbar"},t.Z=u},845450:function(e,t,a){var n=a(807896),r=a(231461),l=a(72779),o=a.n(l),i=a(202784),s=a(429658),c=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=i.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,u=e.striped,m=e.bordered,d=e.borderless,p=e.hover,h=e.size,f=e.variant,g=e.responsive,v=(0,r.Z)(e,c),b=(0,s.vE)(a,"table"),E=o()(l,b,f&&b+"-"+f,h&&b+"-"+h,u&&b+"-striped",m&&b+"-bordered",d&&b+"-borderless",p&&b+"-hover"),y=i.createElement("table",(0,n.Z)({},v,{className:E,ref:t}));if(g){var Z=b+"-responsive";return"string"==typeof g&&(Z=Z+"-"+g),i.createElement("div",{className:Z},y)}return y}));t.Z=u}}]);