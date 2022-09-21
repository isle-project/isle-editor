/*! For license information please see VariableTransformerMenu.8343653f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43047],{888244:function(e,t,a){var n=a(667237);e.exports=n},667237:function(e,t,a){var n=a(294565).isPrimitive;e.exports=function(e){var t,a,r;if(!n(e))return!1;if(0===(t=e.length))return!1;for(r=0;r<t;r++)if((a=e.charCodeAt(r))<48||a>57)return!1;return!0}},532192:function(e,t,a){a.r(t),a.d(t,{default:function(){return vt}});var n=a(202784),r=a(213980),l=a.n(r),s=a(770561),o=a(690299),i=a.n(o),c=a(579553),m=a.n(c),d=a(26266),p=a(830650),u=a(10863),h=a(96904),g=a(822736),b=a(790817),E=a(458264),f=a(312594),y=a(501258),Z=a.n(y),v=a(437069),C=a.n(v),x=a(74039),w=a.n(x),k=a(224008),N=a.n(k),q=a(309765),V=a(506078),P=a(440835),$=a(369701),S=a(377174),F=a(46739),G=a(426214),H=a(194542),A=a(316305),R=a.n(A),O=a(848285),T=a(99733),z=a(356880),j=a(241091),L=a(691334),K=a(595959),D=a(387226),B=a(658392),I=a(379883),M=a(211060),Y=Object.defineProperty,W=Object.defineProperties,U=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,_=(e,t,a)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ee=(e,t)=>{for(var a in t||(t={}))J.call(t,a)&&_(e,a,t[a]);if(X)for(var a of X(t))Q.call(t,a)&&_(e,a,t[a]);return e},te=(e,t)=>W(e,U(t));const ae=i()("isle:data-explorer:variable-transformer"),ne=/shapes\[(\d)\]\.x0/,re={group:null,displayDensity:!0,densityType:"Data-driven",chooseBins:!1,nBins:null},le={clickOutsideDeactivates:!0};function se(e,t){return e-t}const oe=e=>{const t=[];for(let a=0;a<e.length;a++)t.push({type:"line",x0:e[a],y0:-100,x1:e[a],y1:100,line:{color:"red",width:3}});return t},ie=(e,t)=>{const a=new Array(t.length);t[0]?a[0]=t[0]:a[0]=`(-\u221e,${e[0]})`;for(let r=1;r<t.length;r++)t[r]?a[r]=t[r]:a[r]=`[${e[r-1]},${e[r]})`;const n=t.length-1;return t[n]?a[n]=t[n]:a[n]=`[${e[e.length-1]},\u221e)`,a},ce=e=>{const[t,a]=(0,n.useState)(""),[r,l]=(0,n.useState)(0),[o,i]=(0,n.useState)({variable:null,configHist:null,breakpoints:null,categories:null,customNames:null}),c=(0,I.Z)(t),y=()=>{const{variable:a,categories:n,breakpoints:r}=o,l=e.data[a],s=(0,B.Z)(l,n,r);e.logAction(L.O7,{name:t,variable:a,breaks:r,categories:n});const i=(0,O.Z)(t,n);e.onGenerate(i,s),e.onHide()},v=e=>{13!==e.charCode||c||y()},x=e=>{a(e.target.value)},k=e=>t=>{ae("Change break point...");const a=o.breakpoints.slice();a[e]=w()(t,-r),a.sort(se);const n=N()(o.configHist);n.layout.shapes=oe(a),i(te(ee({},o),{configHist:n,breakpoints:a,categories:ie(a,o.customNames)}))},A=e=>t=>{const a=o.categories.slice();a[e]=t;const n=o.customNames.slice();n[e]=t;const r=te(ee({},o),{categories:a,customNames:n});i(r)},Y=e=>()=>{const{breakpoints:t,categories:a,customNames:n}=o;t.splice(e,1),a.splice(e,1),n.splice(e,1);const r=ee({},o.configHist);r.layout.shapes=oe(t),i(te(ee({},o),{configHist:r,categories:a,customNames:n,breakpoints:t}))},W=e=>{const t=C()(e),a=ne.exec(t[0]);if(a){const n=a[1],l=o.breakpoints.slice();l[n]=w()(e[t[0]],-r),l.sort(se);const s=N()(o.configHist);s.layout.shapes=oe(l),i(te(ee({},o),{configHist:s,breakpoints:l,categories:ie(l,o.customNames)}))}},U=t=>{ae("Change variable to bin...");const a=ee({data:e.data,variable:t},re),n=(0,K.N)(a);n.layout.yaxis={range:[(0,z.Z)(n.data[1].y),(0,j.Z)(n.data[1].y)],fixedrange:!0},n.layout.xaxis={fixedrange:!0};let l=e.data[t];l=l.filter((e=>(0,q.isPrimitive)(e)&&!R()(e)));const s=[w()((0,T.Z)(l),-r)];n.layout.shapes=oe(s);const o=[!1,!1];i({variable:t,configHist:n,breakpoints:s,customNames:o,categories:ie(s,o)})},X=()=>{const t=o.breakpoints.slice();let a=e.data[o.variable];a=a.filter((e=>(0,q.isPrimitive)(e)&&!R()(e)));const n=Z()(.8,1.2)*(0,T.Z)(a);t.push(w()(n,-r)),t.sort(se);const l=N()(o.configHist);l.layout.shapes=oe(t);const s=o.customNames;s.push(!1);const c=te(ee({},o),{breakpoints:t,configHist:l,categories:ie(t,s)});i(c)};return n.createElement(S.Z,{cancel:".card-body",onDragStart:D.Z,style:{zIndex:1006}},n.createElement(m(),{focusTrapOptions:le},n.createElement(G.Z,{onHide:e.onHide,show:e.show,header:e.t("bin-transformer-header"),footer:n.createElement(s.Z,{onClick:y,disabled:!c},e.t("create-new-variable")),bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"},bodyClassName:"d-grid gap-3",role:"button",tabIndex:0},(()=>{const t=o.configHist,a=n.createElement(P.Z,{legend:e.t("variable-to-bin"),defaultValue:o.variable,options:e.quantitative,onChange:U,style:{maxWidth:400}});return t?n.createElement(n.Fragment,null,a,n.createElement(s.Z,{className:"insert-line-button",onClick:X},e.t("insert-break-line")),n.createElement("p",null,e.t("drag-red-bars"),"(",n.createElement(V.Z,{legend:e.t("digits-after-decimal-snap"),min:0,max:9,inline:!0,defaultValue:r,onChange:l}),")"),n.createElement("div",{style:{height:250}},n.createElement(F.Z,{data:t.data,layout:t.layout,editable:!0,fit:!0,removeButtons:!0,legendButtons:!1,onRelayout:W})),n.createElement("div",null,n.createElement(b.Z,{className:"mb-2"},n.createElement(b.Z.Header,null,e.t("choose-category-labels"),":"),n.createElement(b.Z.Body,null,(()=>{const t=[],a=o.breakpoints,r=1===a.length;if(t.push(n.createElement(E.Z,{key:"div-0"},n.createElement(f.Z,{md:7},n.createElement(H.Z,{raw:"x < "}),n.createElement(V.Z,{inline:!0,onBlur:k(0),defaultValue:a[0],step:"any"})),n.createElement(f.Z,{md:4},n.createElement($.Z,{key:0,legend:`${e.t("label")} 1`,defaultValue:o.categories[0],onChange:A(0),style:{width:200}})),n.createElement(f.Z,{md:1}))),a.length>1)for(let s=0;s<a.length-1;s++){const l=A(s+1);t.push(n.createElement(E.Z,{key:`div-${s+1}`},n.createElement(f.Z,{md:7},n.createElement(V.Z,{inline:!0,onBlur:k(s),defaultValue:a[s],step:"any"}),n.createElement(H.Z,{raw:"\\le x <"}),n.createElement(V.Z,{inline:!0,onBlur:k(s+1),defaultValue:a[s+1],step:"any"})),n.createElement(f.Z,{md:4},n.createElement($.Z,{key:1+s,legend:`${e.t("label")} ${s+2}`,defaultValue:o.categories[s+1],onChange:l,style:{width:200}})),n.createElement(f.Z,{md:1},n.createElement(M.Z,{onClick:Y(s),style:{marginTop:"5px"},disabled:r,tooltipPlacement:"right"}))))}const l=a.length;return t.push(n.createElement(E.Z,{key:`div-${l}`},n.createElement(f.Z,{md:7},n.createElement(H.Z,{raw:"x \\ge"}),n.createElement(V.Z,{inline:!0,onChange:k(l-1),defaultValue:a[l-1],step:"any"})),n.createElement(f.Z,{md:4},n.createElement($.Z,{legend:`Label ${l+1}`,defaultValue:o.categories[l],onChange:A(l),key:l,style:{width:200}})),n.createElement(f.Z,{md:1},n.createElement(M.Z,{onClick:Y(l-1),style:{marginTop:"5px"},disabled:r})))),t})()))),n.createElement(u.Z,null,n.createElement(p.Z,null,e.t("name-new-variable"),":"),n.createElement(d.Z,{type:"text",placeholder:e.t("select-name"),onChange:x,onKeyPress:v}),n.createElement(h.Z,null,e.t("new-variable-appended")))):n.createElement(n.Fragment,null,a,n.createElement(g.Z,{variant:"info"},e.t("select-variable-bin")))})())))};ce.defaultProps={logAction(){},onGenerate(){}},ce.propTypes={show:l().bool.isRequired,data:l().object.isRequired,quantitative:l().array.isRequired,logAction:l().func,onHide:l().func.isRequired,onGenerate:l().func};var me=ce,de=a(38505),pe=a(845450),ue=a(423184),he=a(482228),ge=a(153446),be=a(380408),Ee=a(156562),fe=a(701647),ye=a(430391),Ze=a(112114),ve=a(605977),Ce=a.n(ve),xe=a(287013),we=a.n(xe),ke=a(302467),Ne=a.n(ke),qe=a(818674),Ve=a(714785),Pe=Object.defineProperty,$e=(e,t,a)=>(((e,t,a)=>{t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a);const Se=/datum\.([^0-9]+)(\d+):datum\.\1(\d+)/,Fe=Ce()(0,10,1),Ge=/(?:^|\n)([^\n]*)$/,He=/^[0-9]/,Ae={clickOutsideDeactivates:!0},Re=n.forwardRef((({children:e,style:t,className:a,"aria-labelledby":r},l)=>{const[s,o]=(0,n.useState)("");return n.createElement("div",{ref:l,style:t,className:a,"aria-labelledby":r},n.createElement(d.Z,{className:"mx-3 my-2 w-auto",placeholder:"Type to filter...",onChange:e=>o(e.target.value),value:s}),n.createElement("ul",{className:"list-unstyled"},n.Children.toArray(e).filter((e=>!s||e.props.children.toLowerCase().startsWith(s)))))}));class Oe extends n.Component{constructor(e){super(e),$e(this,"handleGenerate",(()=>{let e,{code:t,name:a}=this.state;if(Se.test(t)){const e=Se.exec(t),a=e[1],n=parseInt(e[2],10),r=parseInt(e[3],10);let l="";for(let t=n;t<=r;t++)l+=`datum.${a}${t}`,l+=t<r?",":"";t=Ne()(t,e[0],l)}we()(t,"return ")||(t=Ne()(t,Ge,"\nreturn $1"));try{e=(0,qe.Z)(t,this.props.data),this.props.logAction(L.p9,{code:t,name:a}),this.state.asCategorical&&(e=e.map((e=>String(e)))),this.props.onGenerate(a,e)}catch(n){return this.props.session.addNotification({title:"Errored",message:"Encountered the following error: "+n.message,level:"error",position:"tr"})}this.props.onHide()})),$e(this,"handleNameChange",(e=>{this.setState({name:e.target.value})})),$e(this,"handleCodeChange",(e=>{this.setState({code:e})})),$e(this,"handleKeyPress",(e=>{13===e.charCode&&this.state.name.length>=2&&this.handleGenerate()})),$e(this,"insertVarFactory",(e=>()=>{let t=this.state.code.substring(0,this.state.selection),a="datum";a+=!we()(e," ")&&!we()(e,".")&&!He.test(e)?`.${e}`:`['${e}']`,t+=a,t+=this.state.code.substring(this.state.selection),this.setState({code:t,selection:this.state.selection+a.length})})),$e(this,"insertLiteralFactory",(e=>()=>{let t=this.state.code.substring(0,this.state.selection);const a=e;t+=a,t+=this.state.code.substring(this.state.selection),this.setState({code:t,selection:this.state.selection+a.length})})),$e(this,"insertFuncFactory",(e=>()=>{let t=this.state.code.substring(0,this.state.selection);const a=" "+e+"()";t+=a,t+=this.state.code.substring(this.state.selection),this.setState({code:t,selection:this.state.selection+a.length-1})})),this.state={code:e.defaultCode,selection:null,name:"",showGuide:!1,asCategorical:!1}}render(){const{t:e}=this.props,t=this.props.quantitative.map(((e,t)=>n.createElement(ge.Z.Item,{key:t,onClick:this.insertVarFactory(e),eventKey:t},e)));return n.createElement(S.Z,{cancel:".card-body",onDragStart:e=>{e.stopPropagation()},style:{zIndex:1006}},n.createElement(m(),{focusTrapOptions:Ae},n.createElement(G.Z,{show:this.props.show,onHide:this.props.onHide,header:this.props.t("formula-transformer-header"),footer:n.createElement(s.Z,{onClick:this.handleGenerate,disabled:!(0,I.Z)(this.state.name)},this.props.t("create-new-variable")),role:"button",tabIndex:0,bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"}},n.createElement("div",{className:"formula-transformer-body"},n.createElement(fe.Z,{headerClassName:"title",header:this.state.showGuide?e("hide-example-guide"):e("show-example-guide"),visible:this.state.showGuide,onClick:()=>this.setState({showGuide:!this.state.showGuide})},n.createElement("p",null,e("formula-transformer-example-intro")),n.createElement(pe.Z,{condensed:!0},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,e("type")),n.createElement("th",null,e("example")),n.createElement("th",null,e("description")))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,e("interaction"),":"),n.createElement("td",null,n.createElement("code",null,"datum.",this.props.quantitative[0]," * datum.",this.props.quantitative[1])),n.createElement("td",null,n.createElement(de.c,{i18nKey:"example-description-multiply",ns:"DataExplorer"},"Multiply values of variables ",n.createElement("code",null,{first:this.props.quantitative[0]})," and ",n.createElement("code",null,{second:this.props.quantitative[1]})))),n.createElement("tr",null,n.createElement("td",null,e("transformation"),":"),n.createElement("td",null,n.createElement("code",null,"exp( datum.",this.props.quantitative[0]," )")),n.createElement("td",null,n.createElement(de.c,{i18nKey:"example-description-exponential",ns:"DataExplorer"},"Natural exponential function of variable ",n.createElement("code",null,{variable:this.props.quantitative[0]})))),n.createElement("tr",null,n.createElement("td",null,e("function"),":"),n.createElement("td",null,n.createElement("code",null,"9/5 * ",this.props.quantitative[0]," + 32")),n.createElement("td",null,n.createElement(de.c,{i18nKey:"example-description-calculation",ns:"DataExplorer"},"Multiply values of ",n.createElement("code",null,{variable:this.props.quantitative[0]})," by ",n.createElement("code",null,"9/5")," and add ",n.createElement("code",null,"32"))))))),n.createElement("hr",null),n.createElement("div",{className:"mb-2"},n.createElement(he.Z,{style:{marginBottom:5}},n.createElement(ge.Z,{className:"mr-2"},n.createElement(ge.Z.Toggle,{variant:"light",id:"dropdown-custom-components"},e("quantitative")),n.createElement(ge.Z.Menu,{variant:"light",as:Re,id:"bg-nested-dropdown"},t)),n.createElement(ge.Z,{className:"mr-2"},n.createElement(ge.Z.Toggle,{variant:"light",id:"dropdown-custom-components"},e("categorical")),n.createElement(ge.Z.Menu,{variant:"light",as:Re,id:"bg-nested-dropdown"},this.props.categorical.map(((e,t)=>n.createElement(ge.Z.Item,{key:t,onClick:this.insertVarFactory(e),eventKey:t},e))))))),n.createElement(b.Z,{className:"mb-2"},n.createElement(b.Z.Body,null,n.createElement(he.Z,{style:{marginBottom:5}},n.createElement(ue.Z,{size:"sm",className:"mr-2"},n.createElement(Ze.Z,{placement:"top",tooltip:e("smaller-than")},n.createElement(s.Z,{variant:"light",onClick:this.insertLiteralFactory(" < ")},"<")),n.createElement(Ze.Z,{placement:"top",tooltip:e("greater-than")},n.createElement(s.Z,{variant:"light",onClick:this.insertLiteralFactory(" > ")},">")),n.createElement(Ze.Z,{placement:"top",tooltip:e("smaller-or-equal")},n.createElement(s.Z,{variant:"light",onClick:this.insertLiteralFactory(" <= ")},"<=")),n.createElement(Ze.Z,{placement:"top",tooltip:e("greater-or-equal")},n.createElement(s.Z,{variant:"light",onClick:this.insertLiteralFactory(" >= ")},">="))),n.createElement(ue.Z,{size:"sm",className:"mr-2"},n.createElement(Ze.Z,{placement:"top",tooltip:e("open-parenthesis")},n.createElement(s.Z,{variant:"light",onClick:this.insertLiteralFactory(" ( ")},"(")),n.createElement(Ze.Z,{placement:"top",tooltip:e("closing-parenthesis")},n.createElement(s.Z,{variant:"light",onClick:this.insertLiteralFactory(" ) ")},")"))),n.createElement(ue.Z,{size:"sm",className:"mr-2"},n.createElement(Ze.Z,{placement:"top",tooltip:e("addition")},n.createElement(s.Z,{variant:"light",onClick:this.insertLiteralFactory(" + ")},"+")),n.createElement(Ze.Z,{placement:"top",tooltip:e("subtraction")},n.createElement(s.Z,{variant:"light",onClick:this.insertLiteralFactory(" - ")},"-")),n.createElement(Ze.Z,{placement:"top",tooltip:e("multiplication")},n.createElement(s.Z,{variant:"light",onClick:this.insertLiteralFactory(" * ")},"*")),n.createElement(Ze.Z,{placement:"top",tooltip:e("division")},n.createElement(s.Z,{variant:"light",onClick:this.insertLiteralFactory(" / ")},"/"))),n.createElement(ue.Z,{size:"sm",className:"mr-2"},n.createElement(Ze.Z,{placement:"top",tooltip:e("boolean-and")},n.createElement(s.Z,{variant:"light",onClick:this.insertLiteralFactory(" && ")},e("and"))),n.createElement(Ze.Z,{placement:"top",tooltip:e("boolean-or")},n.createElement(s.Z,{variant:"light",onClick:this.insertLiteralFactory(" || ")},e("or"))),n.createElement(Ze.Z,{placement:"top",tooltip:e("boolean-not")},n.createElement(s.Z,{variant:"light",onClick:this.insertLiteralFactory(" !")},e("not"))))),n.createElement(he.Z,{style:{marginBottom:5}},n.createElement(ue.Z,{size:"sm",className:"mr-2"},Fe.map(((e,t)=>n.createElement(s.Z,{key:t,variant:"light",onClick:this.insertLiteralFactory(`${e}`)},e))),n.createElement(s.Z,{variant:"light",onClick:this.insertLiteralFactory(".")},"."))),n.createElement(he.Z,null,n.createElement(ue.Z,{size:"sm",className:"me-2"},Ve.map(((t,a)=>n.createElement(Ze.Z,{key:a,placement:"bottom",tooltip:e(t+"-tooltip")},n.createElement(s.Z,{variant:"light",onClick:this.insertFuncFactory(t),eventKey:a},t)))))))),n.createElement(b.Z,{className:"mb-2"},n.createElement(b.Z.Body,null,n.createElement(ye.Z,{ref:e=>{this.textarea=e},legend:`${e("expression")}:`,placeholder:e("enter-formula"),value:this.state.code,onChange:this.handleCodeChange,onBlur:e=>{const t=e.target.selectionStart;this.setState({selection:t})},rows:3}))),n.createElement(u.Z,{style:{margin:8}},n.createElement(p.Z,null,e("name-new-variable"),":"),n.createElement(d.Z,{type:"text",placeholder:e("select-name"),onChange:this.handleNameChange,onKeyPress:this.handleKeyPress}),n.createElement(h.Z,null,e("new-variable-appended"))),n.createElement(be.Z,{name:"options",onChange:e=>{this.setState({asCategorical:e})},type:"radio",size:"small",value:this.state.asCategorical,style:{padding:6}},n.createElement(Ee.Z,{id:"data-explorer-transform-toggle-quantitative",variant:"outline-secondary",value:!1},e("treat-as-quantitative")),n.createElement(Ee.Z,{id:"data-explorer-transform-toggle-categorical",variant:"outline-secondary",value:!0},e("treat-as-categorical")))))))}}Oe.defaultProps={logAction(){},onGenerate(){},defaultCode:"",session:{}},Oe.propTypes={show:l().bool.isRequired,categorical:l().array.isRequired,quantitative:l().array.isRequired,data:l().object.isRequired,defaultCode:l().string,logAction:l().func,onGenerate:l().func,onHide:l().func.isRequired,session:l().object};var Te=Oe,ze=a(257457),je=a(147777),Le=a.n(je),Ke=a(471205),De=a.n(Ke),Be=a(888244),Ie=a.n(Be),Me=a(351375),Ye=a(180109),We=a(378756),Ue=Object.defineProperty,Xe=(e,t,a)=>(((e,t,a)=>{t in e?Ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a);const Je=i()("isle:data-explorer:variable-transformer"),Qe={clickOutsideDeactivates:!0};function _e(e){return e?Ne()(e,".","[dot]"):e}function et(e){const t=C()(e);let a=!0;for(let n=0;n<t.length;n++)Ie()(e[t[n]])||(a=!1);return a}class tt extends n.Component{constructor(e){super(e),Xe(this,"handleFirstVariableChange",(e=>{const t={};let a;if(this.state.secondVar){const n=e,r=this.state.secondVar,l=this.props.data[n];a=Le()(l,De());const s=(0,We.Z)(a,n),o=(0,We.Z)(this.state.secondFreqs,r);for(let e=0;e<s.length;e++)for(let a=0;a<o.length;a++){const n=s[e]+"-"+o[a];t[_e(n)]=n}}else{const n=this.props.data[e];a=Le()(n,De());const r=(0,We.Z)(a,e);for(let e=0;e<r.length;e++)t[_e(r[e])]=r[e]}const n=et(t);this.setState({firstVar:e,firstFreqs:a,nameMappings:t,onlyNumbers:n})})),Xe(this,"handleSecondVariableChange",(e=>{if(!e){const t=this.state.firstVar,a=(0,We.Z)(this.state.firstFreqs,t),n={};for(let e=0;e<a.length;e++)n[_e(a[e])]=a[e];return this.setState({secondVar:e,nameMappings:n})}const t={},a=this.state.firstVar,n=this.props.data[e],r=Le()(n,De()),l=(0,We.Z)(this.state.firstFreqs,a),s=(0,We.Z)(r,e);for(let i=0;i<l.length;i++)for(let e=0;e<s.length;e++){const a=l[i]+"-"+s[e];t[_e(a)]=a}const o=et(t);this.setState({secondVar:e,secondFreqs:r,nameMappings:t,onlyNumbers:o})})),Xe(this,"handleKeyPress",(e=>{13===e.charCode&&(0,I.Z)(this.state.generatedName)&&this.makeNewVar()})),Xe(this,"changeFreqFactory",(e=>t=>{const a=N()(this.state.nameMappings);a[_e(e)]=t.target.value;const n=et(a);this.setState({nameMappings:a,onlyNumbers:n})})),Xe(this,"changeContingencyFactory",((e,t)=>a=>{const n=N()(this.state.nameMappings);n[_e(t)+"-"+_e(e)]=a.target.value,this.setState({nameMappings:n})})),Xe(this,"handleGeneratedNameChange",(e=>{this.setState({generatedName:e.target.value})})),Xe(this,"makeNewVar",(()=>{Je("Generating new categorical variable...");const{firstVar:e,secondVar:t,nameMappings:a,castNumeric:n}=this.state,r=(0,Ye.Z)(e,t,a,this.props.data,n);this.props.onGenerate(this.state.generatedName,r),this.props.logAction(L.nC,{name:this.state.generatedName,firstVar:e,secondVar:t,nameMappings:a,castNumeric:n}),this.props.onHide()})),Xe(this,"renderFrequencyTable",(()=>{const e=this.state.firstVar,t=this.props.data[e],a=Le()(t,De()),r=(0,We.Z)(a,e);return n.createElement(ze.Z,{bordered:!0,style:{margin:8},clickable:!1},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,this.props.t("old"),":"),r.map(((t,a)=>n.createElement("th",{key:`${e}-${a}-old`},t))))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null,this.props.t("new"),":"),r.map(((t,a)=>n.createElement("th",{key:`${e}-${a}-new`},n.createElement("input",{className:"transformer-table-input",type:"text",defaultValue:t,onChange:this.changeFreqFactory(t)}))))),n.createElement("tr",{style:{borderTop:"1px solid black"}},n.createElement("th",null,this.props.t("frequencies"),":"),r.map(((t,a)=>{const r=this.state.firstFreqs[t];return n.createElement("td",{key:`${e}-${a}-freq`},r)})))))})),Xe(this,"renderContingencyTable",(()=>{const e=this.state.secondVar,t=this.state.firstVar,a=this.props.data[e],r=this.props.data[t],l=Le()(a,De()),s=Le()(r,De()),o=(0,We.Z)(l,e),i=(0,We.Z)(s,t);return n.createElement(ze.Z,{bordered:!0,style:{margin:8}},n.createElement("tr",null,n.createElement("th",null),i.map(((e,t)=>n.createElement("th",{key:`${e}-${t}`},e)))),o.map(((e,t)=>n.createElement("tr",{key:`${e}-${t}`},n.createElement("th",null,e),i.map(((t,a)=>n.createElement("td",{key:`${e}-${t}-${a}`},n.createElement("input",{className:"transformer-table-input",type:"text",defaultValue:`${t}-${e}`,onChange:this.changeContingencyFactory(e,t)}))))))))}));const t=e.categorical[0],a=e.data[t],r=Le()(a,De()),l=(0,We.Z)(r,t),s={};for(let n=0;n<l.length;n++)s[_e(l[n])]=l[n];this.state={generatedName:"",firstVar:t,firstFreqs:r,nameMappings:s,secondVar:null,secondFreqs:null,castNumeric:!1,onlyNumbers:!1}}renderTable(){return this.state.firstVar&&this.state.secondVar?this.renderContingencyTable():this.state.firstVar||this.state.secondVar?this.renderFrequencyTable():null}render(){const{t:e}=this.props;return n.createElement(S.Z,{cancel:".card-body",onDragStart:e=>{e.stopPropagation()},style:{zIndex:1006}},n.createElement(m(),{focusTrapOptions:Qe},n.createElement(G.Z,{onHide:this.props.onHide,show:this.props.show,header:e("categorical-transformer-header"),footer:n.createElement(s.Z,{onClick:this.makeNewVar,disabled:!(0,I.Z)(this.state.generatedName)},e("create-new-variable")),bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"},role:"button",tabIndex:0},n.createElement(E.Z,null,n.createElement(f.Z,{md:4},n.createElement(P.Z,{legend:e("first-variable"),defaultValue:this.state.firstVar||"",options:this.props.categorical,onChange:this.handleFirstVariableChange})),n.createElement(f.Z,{md:4},n.createElement(P.Z,{clearable:!0,legend:e("optional-second-variable"),defaultValue:this.state.secondVar||"",options:this.props.categorical,onChange:this.handleSecondVariableChange}))),n.createElement(E.Z,{style:{overflowX:"auto",width:"100%"}},this.renderTable()),n.createElement(E.Z,null,n.createElement(Ze.Z,{tooltip:e("treat-labels-as-numbers-tooltip")},n.createElement(Me.Z,{legend:e("treat-labels-as-numbers"),defaultValue:!1,disabled:!this.state.onlyNumbers,onChange:()=>{this.setState({castNumeric:!this.state.castNumeric})}}))),n.createElement(E.Z,null,n.createElement(u.Z,{style:{margin:8}},n.createElement(p.Z,null,e("name-new-variable"),":"),n.createElement(d.Z,{type:"text",placeholder:e("select-name"),onChange:this.handleGeneratedNameChange,onKeyPress:this.handleKeyPress}),n.createElement(h.Z,null,e("new-variable-appended")))))))}}tt.defaultProps={logAction(){}},tt.propTypes={categorical:l().array.isRequired,data:l().object.isRequired,onGenerate:l().func.isRequired,logAction:l().func,onHide:l().func.isRequired,show:l().bool.isRequired};var at=tt,nt=a(240054),rt=a.n(nt),lt=a(1570),st=a.n(lt),ot=Object.defineProperty,it=(e,t,a)=>(((e,t,a)=>{t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a);const ct=i()("isle:data-explorer:group-transformer"),mt={clickOutsideDeactivates:!0};class dt extends n.Component{constructor(e){super(e),it(this,"handleGeneratedNameChange",(e=>{this.setState({generatedName:e.target.value})})),it(this,"handleGroupNumberChange",(e=>{const t=new Array(e).fill(1/e),a=new Array(e);for(let n=0;n<a.length;n++)a[n]=`${this.props.t("group")} ${n+1}`;this.setState({groupProbs:t,labels:a,nGroups:e})})),it(this,"handleKeyPress",(e=>{if(13===e.charCode){let e=0;for(let t=0;t<this.state.groupProbs.length;t++)e+=this.state.groupProbs[t];(0,I.Z)(this.state.generatedName)&&st()(e,1)<=15e-9&&this.makeNewVar()}})),it(this,"makeNewVar",(()=>{ct("Generating new categorical variable...");const e=C()(this.props.data),t=this.props.data[e[0]].length,a=rt()(this.state.labels,{size:t,probs:this.state.groupProbs,replace:!0});this.props.onGenerate(this.state.generatedName,a),this.props.logAction(L.UP,{name:this.state.generatedName,labels:this.state.labels,groupProbs:this.state.groupProbs}),this.props.onHide()})),this.state={generatedName:"",nGroups:2,groupProbs:[.5,.5],labels:["Group 1","Group 2"]}}renderTable(){const e=new Array(this.state.nGroups);for(let t=0;t<e.length;t++)e[t]=n.createElement(E.Z,{key:t},n.createElement(f.Z,null,n.createElement($.Z,{legend:`Label for Group ${t+1}`,defaultValue:this.state.labels[t],onChange:e=>{const a=this.state.labels.slice();a[t]=e,this.setState({labels:a})}})),n.createElement(f.Z,null,n.createElement(V.Z,{legend:this.props.t("group-proportion"),onChange:e=>{const a=this.state.groupProbs.slice();a[t]=e,this.setState({groupProbs:a})},defaultValue:this.state.groupProbs[t],step:.01,min:0,max:1,numbersOnly:!1})));return n.createElement(n.Fragment,null,e,n.createElement("p",null,this.props.t("proportions-sum-one")))}render(){let e=0;for(let a=0;a<this.state.groupProbs.length;a++)e+=this.state.groupProbs[a];const t=(0,I.Z)(this.state.generatedName)&&st()(e,1)<=15e-9;return n.createElement(S.Z,{cancel:".card-body",onDragStart:e=>{e.stopPropagation()},style:{zIndex:1006}},n.createElement(m(),{focusTrapOptions:mt},n.createElement(G.Z,{onHide:this.props.onHide,show:this.props.show,header:this.props.t("group-transformer-header"),footer:n.createElement(s.Z,{onClick:this.makeNewVar,disabled:!t},this.props.t("create-new-variable")),role:"button",tabIndex:0,bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"}},n.createElement(E.Z,null,n.createElement(f.Z,null,n.createElement(V.Z,{legend:this.props.t("number-of-groups"),onChange:this.handleGroupNumberChange,defaultValue:this.state.nGroups,step:1,min:1,max:99}))),this.renderTable(),n.createElement(E.Z,null,n.createElement(u.Z,{style:{margin:8}},n.createElement(p.Z,null,this.props.t("name-new-variable"),":"),n.createElement(d.Z,{type:"text",placeholder:this.props.t("select-name"),onChange:this.handleGeneratedNameChange,onKeyPress:this.handleKeyPress}),n.createElement(h.Z,null,this.props.t("new-variable-appended")))))))}}dt.defaultProps={logAction(){}},dt.propTypes={data:l().object.isRequired,onGenerate:l().func.isRequired,logAction:l().func,onHide:l().func.isRequired,show:l().bool.isRequired};var pt=dt;var ut=(0,a(217431).Z)((()=>a.e(37293).then(a.bind(a,208416)))),ht=a(376699),gt=a(915484);const bt={clickOutsideDeactivates:!0},Et={maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative",padding:"12px 36px 12px 36px"},ft=e=>{const[t,a]=(0,n.useState)(null),[r,l]=(0,n.useState)(null),[o,i]=(0,n.useState)(!1),c=C()(e.data),[g,b]=(0,n.useState)(e.data[c[0]].length),{t:f}=(0,ht.$)("learn/distribution"),y=(0,n.useCallback)((()=>{e.logAction(L.e7,{name:t,nObs:g,replace:o,variable:r});const a=rt()(e.data[r],{size:g,replace:o&&g<e.data[r].length});e.onGenerate(t,a),e.onHide()}),[r,e,t,g,o]),Z=(0,n.useCallback)((e=>{13===e.charCode&&(0,I.Z)(t)&&y()}),[y,t]),v=(0,n.useCallback)((e=>{a(e.target.value)}),[a]);return n.createElement(S.Z,{cancel:".card-body",onDragStart:e=>{e.stopPropagation()},style:{zIndex:1006}},n.createElement(m(),{focusTrapOptions:bt},n.createElement(G.Z,{onHide:e.onHide,show:e.show,header:f("data-explorer:sample-from-column"),footer:n.createElement(s.Z,{onClick:y,disabled:!r||!(0,I.Z)(t)},f("data-explorer:create-new-variable")),role:"button",tabIndex:0,bodyStyle:Et,bodyClassName:"d-grid gap-3"},n.createElement(E.Z,null,n.createElement(u.Z,null,n.createElement(p.Z,null,f("data-explorer:name-new-variable"),":"),n.createElement(d.Z,{type:"text",placeholder:f("data-explorer:select-name"),onChange:v,onKeyPress:Z}),n.createElement(h.Z,null,f("data-explorer:new-variable-appended")))),n.createElement(E.Z,null,n.createElement(u.Z,null,n.createElement(p.Z,null,f("data-explorer:column-to-sample-from"),":"),n.createElement(P.Z,{options:c,onChange:l}))),n.createElement(E.Z,null,n.createElement(u.Z,null,n.createElement(gt.Z,{type:"checkbox",onChange:e=>{i(e.target.checked)},label:f("data-explorer:sample-with-replacement"),disabled:r&&g>e.data[r].length,value:o||r&&g>=e.data[r].length}))),n.createElement(E.Z,null,n.createElement(V.Z,{legend:f("data-explorer:number-of-observations"),value:g,onChange:b,min:0,max:r&&!o?e.data[r].length:null,step:1,tooltip:f("data-explorer:number-of-observations-tooltip")})))))};ft.defaultProps={logAction(){}},ft.propTypes={data:l().object.isRequired,onGenerate:l().func.isRequired,logAction:l().func,onHide:l().func.isRequired,show:l().bool.isRequired};var yt=ft;const Zt=e=>{const{data:t,categorical:a,quantitative:r,t:l,session:o,defaultCode:i,logAction:c,onGenerate:m}=e,[d,p]=(0,n.useState)(null),u=()=>{const t="formula"===d?null:"formula";p(t),e.onActive(t)},h=()=>{const t="bin"===d?null:"bin";p(t),e.onActive(t)},g=()=>{const t="categorical"===d?null:"categorical";p(t),e.onActive(t)},b=()=>{const t="group"===d?null:"group";p(t),e.onActive(t)},E=()=>{const t="random"===d?null:"random";p(t),e.onActive(t)},f=()=>{const t="sample"===d?null:"sample";p(t),e.onActive(t)};let y;if(t)switch(d){case"bin":y=n.createElement(me,{show:!0,onHide:h,quantitative:r,logAction:c,onGenerate:m,data:t,t:l});break;case"categorical":y=n.createElement(at,{show:!0,onHide:g,categorical:a,logAction:c,onGenerate:m,data:t,t:l});break;case"formula":y=n.createElement(Te,{show:!0,onHide:u,categorical:a,quantitative:r,data:t,defaultCode:i,logAction:c,onGenerate:m,session:o,t:l});break;case"group":y=n.createElement(pt,{show:!0,onHide:b,logAction:c,onGenerate:m,data:t,t:l});break;case"random":y=n.createElement(ut,{show:!0,onHide:E,logAction:c,onGenerate:m,data:t,t:l});break;case"sample":y=n.createElement(yt,{show:!0,onHide:f,logAction:c,onGenerate:m,categorical:a,quantitative:r,data:t,t:l})}return n.createElement(n.Fragment,null,n.createElement("div",{className:"well d-grid gap-3",style:{padding:15,margin:15}},n.createElement(s.Z,{onClick:u,variant:"primary",style:{fontSize:"1.2em"}},l("interactions-functions")),n.createElement(s.Z,{onClick:h,disabled:!r||0===r.length,variant:"primary",style:{fontSize:"1.2em"}},l("bin-quantitative")),n.createElement(s.Z,{onClick:g,disabled:!a||0===a.length,variant:"primary",style:{fontSize:"1.2em"}},l("rename-or-combine")),n.createElement(s.Z,{onClick:b,variant:"primary",style:{fontSize:"1.2em"}},l("create-groups")),n.createElement(s.Z,{onClick:E,variant:"primary",style:{fontSize:"1.2em"}},l("generate-random-data")),n.createElement(s.Z,{onClick:f,variant:"primary",style:{fontSize:"1.2em"}},l("sample-from-column"))),y)};Zt.defaultProps={logAction(){},onActive(){},onGenerate(){},defaultCode:"",session:{}},Zt.propTypes={categorical:l().array.isRequired,quantitative:l().array.isRequired,data:l().object.isRequired,defaultCode:l().string,logAction:l().func,onActive:l().func,onGenerate:l().func,session:l().object};var vt=Zt},379883:function(e,t){t.Z=function(e){return e&&e.length>=1&&-1===e.indexOf(".")&&-1===e.indexOf(" ")}},387226:function(e,t){t.Z=function(e){e.stopPropagation()}},482228:function(e,t,a){var n=a(72779),r=a.n(n),l=a(202784),s=a(429658),o=a(552322);const i=l.forwardRef((({bsPrefix:e,className:t,...a},n)=>{const l=(0,s.vE)(e,"btn-toolbar");return(0,o.jsx)("div",{...a,ref:n,className:r()(t,l)})}));i.displayName="ButtonToolbar",i.defaultProps={role:"toolbar"},t.Z=i},845450:function(e,t,a){var n=a(72779),r=a.n(n),l=a(202784),s=a(429658),o=a(552322);const i=l.forwardRef((({bsPrefix:e,className:t,striped:a,bordered:n,borderless:l,hover:i,size:c,variant:m,responsive:d,...p},u)=>{const h=(0,s.vE)(e,"table"),g=r()(t,h,m&&`${h}-${m}`,c&&`${h}-${c}`,a&&`${h}-${"string"==typeof a?`striped-${a}`:"striped"}`,n&&`${h}-bordered`,l&&`${h}-borderless`,i&&`${h}-hover`),b=(0,o.jsx)("table",{...p,className:g,ref:u});if(d){let e=`${h}-responsive`;return"string"==typeof d&&(e=`${e}-${d}`),(0,o.jsx)("div",{className:e,children:b})}return b}));t.Z=i}}]);