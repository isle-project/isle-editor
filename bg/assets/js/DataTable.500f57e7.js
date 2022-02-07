"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5538],{203371:function(e,t,n){n.r(t),n.d(t,{default:function(){return bt}});var a=n(497326),o=n(894578),r=n(867855),l=n(202784),i=n(213980),s=n.n(i),u=n(928316),c=n(690299),d=n.n(c),p=n(198),f=n(973777),h=n(320231),m=n.n(h),g=n(822736),b=n(482228),v=n(770561),w=n(431882),y=n(708579),E=n(313054),C=n.n(E),S=n(888244),O=n.n(S),Z=n(536892),N=n.n(Z),I=n(287013),T=n.n(I),x=n(777628),P=n.n(x),k=n(295943),D=n.n(k),V=n(521536),M=n.n(V),R=n(838060),B=n.n(R),j=n(308669),L=n.n(j),F=n(623102),H=n.n(F),A=n(830324),z=n.n(A),U=n(588703),W=n.n(U),_=n(309765),q=n(409961),J=n.n(q),G=n(437069),K=n.n(G),Y=n(630132),Q=n(292169),X=n(24551),$=n(675252),ee=n(267682),te=n(382617),ne=n(395465),ae=n.n(ne),oe=n(941695),re=n(392218),le=n(31071),ie=n(259893),se=n(189263),ue=n(224008),ce=n.n(ue),de=JSON.parse('[{"target":".data-table-title-button","content":"On top of the data table you find the name of the data set. Clicking on it will open a modal window with a detailed description.","placement":"bottom","placementBeacon":"bottom"},{"target":".ReactTable","content":"Tabular display of the data set, with rows corresponding to individual records and columns to the different variables.","placement":"bottom","placementBeacon":"bottom"},{"target":".-header","content":"Variable names. Hovering over the names with your mouse opens a tooltip with the description of the respective variable. Clicking on any column orders the rows of the data table by the values of the chosen column. You can also select multiple columns by holding down the \\"Shift\\" key to sort by multiple columns","placement":"bottom","placementBeacon":"bottom"},{"target":".-filter","content":"Filter out rows by adjusting the filters for any column.","placement":"top","placementBeacon":"top"},{"target":".label-number-rows","content":"The number of currently displayed rows, i.e. the rows matching the specified filters, and in parentheses the total number of rows in the table.","placement":"top","placementBeacon":"top"},{"target":".reset-button","content":"Clicking on the reset button will clear all currently active filters and return the ordering of the rows to its default.","placement":"top","placementBeacon":"top"},{"target":".variable-descriptions-button","content":"The descriptions for each variable can also be accessed by clicking on this button.","placement":"top","placementBeacon":"top"}]'),pe=Object.defineProperty,fe=function(e,t,n){return function(e,t,n){t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=typeof t?t+"":t,n),n},he=function(e){function t(t){var n;return n=e.call(this,t)||this,fe((0,a.Z)(n),"startTour",(function(){n.setState({running:!n.state.running})})),n.state={running:!1},n.stepsWithId=ce()(de,2).map((function(e){return e.target="#"+t.id+" "+e.target,e})),n}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this;return l.createElement(l.Fragment,null,l.createElement(ie.Z,{placement:"bottom",overlay:l.createElement(le.Z,null,this.props.t(this.state.running?"close-tutorial":"show-tutorial"))},l.createElement(v.Z,{"aria-label":this.props.t("show-tutorial"),className:"help-button",variant:"light",onClick:this.startTour},l.createElement("div",{className:"fa fa-question"}))),l.createElement(se.ZP,{steps:this.stepsWithId,disableScrolling:!0,showProgress:!0,run:this.state.running,callback:function(t){t.type===se.FP.TOUR_END&&(e.setState({running:!1}),e.props.onTutorialCompletion())}}))},t}(l.Component);he.propTypes={onTutorialCompletion:s().func.isRequired};var me=he,ge=n(875084),be=Object.defineProperty,ve=Object.defineProperties,we=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,Se=function(e,t,n){return t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Oe=function(e,t){for(var n in t||(t={}))Ee.call(t,n)&&Se(e,n,t[n]);if(ye)for(var a,o=(0,r.Z)(ye(t));!(a=o()).done;){n=a.value;Ce.call(t,n)&&Se(e,n,t[n])}return e},Ze=function(e,t,n){return Se(e,"symbol"!=typeof t?t+"":t,n),n},Ne=function(e){function t(t){var n;return n=e.call(this,t)||this,Ze((0,a.Z)(n),"showTooltip",(function(){n.setState({showTooltip:!0})})),Ze((0,a.Z)(n),"hideTooltip",(function(){n.setState({showTooltip:!1})})),n.state={showTooltip:!1},n}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this;return l.createElement(l.Fragment,null,l.createElement(ge.Z,{show:this.state.showTooltip,target:this.title},(function(t){var n,a,o=t,i=(o.placement,o.scheduleUpdate,o.arrowProps,o.outOfBoundaries,o.show,function(e,t){var n={};for(var a in e)Ee.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&ye)for(var o,l=(0,r.Z)(ye(e));!(o=l()).done;)a=o.value,t.indexOf(a)<0&&Ce.call(e,a)&&(n[a]=e[a]);return n}(o,["placement","scheduleUpdate","arrowProps","outOfBoundaries","show"]));return l.createElement("div",(n=Oe({},i),a={style:Oe({backgroundColor:"rgba(10, 10, 10,0.9)",padding:"2px 10px",color:"white",borderRadius:3,maxWidth:"300px",marginBottom:"10px"},i.style)},ve(n,we(a))),e.props.tooltip)})),l.createElement("span",{ref:function(t){e.title=t},onMouseOver:this.showTooltip,onFocus:this.showTooltip,onMouseOut:this.hideTooltip,onBlur:this.hideTooltip},this.props.title))},t}(l.Component);Ne.propTypes={title:s().string.isRequired,tooltip:s().string},Ne.defaultProps={tooltip:""};var Ie=Ne,Te=n(579553),xe=n.n(Te),Pe=n(439917),ke=n.n(Pe),De=n(195065),Ve=n(686605),Me=n.n(Ve),Re=Object.defineProperty,Be=Object.defineProperties,je=Object.getOwnPropertyDescriptors,Le=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,Ae=function(e,t,n){return t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},ze=function(e,t){for(var n in t||(t={}))Fe.call(t,n)&&Ae(e,n,t[n]);if(Le)for(var a,o=(0,r.Z)(Le(t));!(a=o()).done;){n=a.value;He.call(t,n)&&Ae(e,n,t[n])}return e},Ue=function(e,t,n){return Ae(e,"symbol"!=typeof t?t+"":t,n),n},We=function(e){function t(t){var n;return n=e.call(this,t)||this,Ue((0,a.Z)(n),"showRangeInput",(function(){n.setState({showRangeInput:!0})})),Ue((0,a.Z)(n),"hideRangeInput",(function(){n.setState({showRangeInput:!1})})),Ue((0,a.Z)(n),"handleBlur",(function(){n.props.onChange(n.state.currentValue)})),n.state={currentValue:t.defaultValue,defaultValue:t.defaultValue,showRangeInput:!1},n}return(0,o.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.defaultValue!==t.defaultValue?{currentValue:e.defaultValue,defaultValue:e.defaultValue}:null},t.prototype.render=function(){var e=this,t=this.state.currentValue;return l.createElement("div",{className:"input-range-wrapper",ref:function(t){e.inputRange=t}},l.createElement(ke(),{ariaLabelledby:this.props.ariaLabelledby,ariaControls:this.props.ariaControls,allowSameValues:!0,maxValue:this.props.maxValue,minValue:this.props.minValue,value:t,onChange:function(t){e.setState({currentValue:t})},onChangeComplete:function(t){e.props.onChange(t)},formatLabel:function(t){return l.createElement("span",{className:"input-range-clickable-label",role:"button",tabIndex:0,onKeyPress:e.showRangeInput,onClick:e.showRangeInput,title:e.props.t("click-to-set-value")},Me()(t))},style:{float:"left"}}),l.createElement(ge.Z,{show:this.state.showRangeInput,target:this.inputRange,placement:"right"},(function(n){var a,o,i=n,s=(i.placement,i.scheduleUpdate,i.arrowProps,i.outOfBoundaries,i.show,function(e,t){var n={};for(var a in e)Fe.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&Le)for(var o,l=(0,r.Z)(Le(e));!(o=l()).done;)a=o.value,t.indexOf(a)<0&&He.call(e,a)&&(n[a]=e[a]);return n}(i,["placement","scheduleUpdate","arrowProps","outOfBoundaries","show"]));return l.createElement(xe(),{active:e.state.showRangeInput},l.createElement("div",(a=ze({className:"input-range-number-entry"},s),o={style:ze({},s.style)},Be(a,je(o))),l.createElement(De.Z,{inline:!0,value:t.min,min:e.props.minValue,max:t.max,onChange:function(t){var n={min:Number(t),max:e.state.currentValue.max};e.setState({currentValue:n})},onBlur:e.handleBlur,step:.1}),l.createElement(De.Z,{inline:!0,value:t.max,min:t.min,max:e.props.maxValue,onChange:function(t){var n={min:e.state.currentValue.min,max:Number(t)};e.setState({currentValue:n})},onBlur:e.handleBlur,step:.1}),l.createElement(v.Z,{"aria-label":e.props.t("close"),variant:"outline-secondary",size:"sm",onClick:e.hideRangeInput},l.createElement("i",{className:"fas fa-times"}))))})))},t}(l.Component);We.propTypes={defaultValue:s().object.isRequired,maxValue:s().number.isRequired,minValue:s().number.isRequired,onChange:s().func.isRequired};var _e=We,qe=n(615558),Je=Object.defineProperty,Ge=Object.defineProperties,Ke=Object.getOwnPropertyDescriptors,Ye=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,$e=function(e,t,n){return t in e?Je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},et=function(e,t){for(var n in t||(t={}))Qe.call(t,n)&&$e(e,n,t[n]);if(Ye)for(var a,o=(0,r.Z)(Ye(t));!(a=o()).done;){n=a.value;Xe.call(t,n)&&$e(e,n,t[n])}return e},tt=function(e,t){return Ge(e,Ke(t))},nt=function(e,t,n){return $e(e,"symbol"!=typeof t?t+"":t,n),n},at=C()({html:!0,xhtmlOut:!0,breaks:!0,typographer:!1}),ot=d()("isle:data-table"),rt=(0,X.Z)("data-table"),lt=new Intl.Collator("en",{numeric:!0,sensitivity:"base"}),it=/[0-9.,]+/;function st(e,t){return(e=null==e||"NA"===e?ae():e)-(t=null==t||"NA"===t?ae():t)}function ut(e,t){return e=null==e||"NA"===e?ae():e,t=null==t||"NA"===t?ae():t,lt.compare(e,t)}function ct(e,t){var n=t[e.id];return!(!n&&e.value)&&(W()(e.value)?T()(e.value,n):T()(P()(n),P()(e.value)))}function dt(e,t){var n=t[e.id];return n>=e.value.min&&n<=e.value.max}function pt(e,t,n){if(!e.value||L()(e.value))return!0;var a=e.pivotId||e.id;return void 0===t[a]||(W()(e.value)?T()(e.value,String(t[a])):String(t[a])===e.value)}function ft(e){if(H()(e))return[];for(var t=K()(e),n=function(e,t){for(var n=0,a=0;a<t.length;a++){var o=e[t[a]];W()(o)&&o.length>n&&(n=o.length)}return n}(e,t),a=new Array(n),o=0;o<n;o++){a[o]={};for(var r=0;r<t.length;r++){var l=t[r];a[o][l]=e[l][o]}}return a}var ht=function(){return l.createElement("div",null)};function mt(e){e.target.style.width=e.target.value.length+1+"ch"}var gt=function(e){function t(t){var o;o=e.call(this,t)||this,nt((0,a.Z)(o),"renderEditable",(function(e){return l.createElement("div",{style:{backgroundColor:"#fafafa"},contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(t){var n=[].concat(o.state.rows),a=t.target.innerHTML;n[e.index][e.column.id]=it.test(a)?Number(a):a,o.setState({rows:n},(function(){o.props.onEdit(n)}))},dangerouslySetInnerHTML:{__html:o.state.rows[e.index][e.column.id]}})})),nt((0,a.Z)(o),"renderCheckboxRemovable",(function(e){return l.createElement("input",{id:"checkBox",type:"checkbox",key:e.index+"-"+e.column.id+"-"+o.state.rows.length,onClick:function(t){var n=[].concat(o.state.rows);n[e.index][e.column.id]=t.target.checked,o.setState({rows:n}),o.props.onClickRemove(n)}})})),nt((0,a.Z)(o),"handleFilterChange",(function(e,t){(0,u.findDOMNode)(o.table).getElementsByClassName("rt-tbody")[0].scrollTop=0,o.context.log({id:o.id,type:te.Uc,value:t.id}),o.setState({filtered:e},(function(){o.props.onFilteredChange(o.state.filtered.filter((function(e){return!J()(e.value)})))}))})),nt((0,a.Z)(o),"handleSortedChange",(function(e,t){o.context.log({id:o.id,type:te.mk,value:t.id}),o.setState({sorted:e})})),nt((0,a.Z)(o),"showDescriptions",(function(){o.setState({showVarModal:!0})})),nt((0,a.Z)(o),"reset",(function(){o.context.log({id:o.id,type:te.Di,value:""}),o.setState({filtered:[],sorted:[]},(function(){o.props.onFilteredChange(o.state.filtered)}))})),nt((0,a.Z)(o),"showInfo",(function(){ot("Show dataset information..."),o.setState({showInfo:!0})})),nt((0,a.Z)(o),"toggleSaveModal",(function(){o.setState({showSaveModal:!o.state.showSaveModal})})),nt((0,a.Z)(o),"saveJSON",(function(){var e,t=new Blob([JSON.stringify(o.state.data)],{type:"application/json"}),n=o.props.dataInfo;e=n&&n.name?n.name:"dataset.json",(0,$.Z)(t,e)})),nt((0,a.Z)(o),"saveCSV",(function(){var e=o.context;Promise.all([n.e(4851),n.e(7561),n.e(8671)]).then(n.t.bind(n,596823,23)).then((function(t){(0,t.default)(o.state.rows,{header:!0},(function(t,n){if(t)return e.addNotification({title:o.props.t("error-encountered"),message:o.props.t("error-csv")+t.message,level:"error",position:"tl"});var a,r=new Blob([n],{type:"text/csv;charset=utf-8;"}),l=o.props.dataInfo;a=l&&l.name?l.name+".csv":"dataset.csv",(0,$.Z)(r,a)}))}))})),nt((0,a.Z)(o),"handleSaveCSV",(function(){o.saveCSV(),o.toggleSaveModal()})),nt((0,a.Z)(o),"handleSaveJSON",(function(){o.saveJSON(),o.toggleSaveModal()})),nt((0,a.Z)(o),"hideVarModal",(function(){o.setState({showVarModal:!1})})),nt((0,a.Z)(o),"hideInfoModal",(function(){o.setState({showInfo:!1})})),nt((0,a.Z)(o),"handleTableProps",(function(){return{onScroll:function(e){for(var t=e.target.scrollLeft>0?e.target.scrollLeft:0,n=0;n<o.frozenElems.length;n++)o.frozenElems[n].style.left=t+"px"}}})),nt((0,a.Z)(o),"handleTrProps",(function(e,t,n,a){var r;return(r=o.props.getTrProps?o.props.getTrProps(e,t,n,a):{}).style||(r.style={}),r.style.width="max-content !important",r})),ot("Constructor is invoked..."),o.id=t.id||rt(t);var r=t.dataInfo||{};return o.dragged=null,o.reorder=[],o.state={showInfo:!!r.showOnStartup,dataInfo:{info:r.info||[],name:r.name||"",variables:r.variables||null,showOnStartup:r.showOnStartup||null},showSaveModal:!1,id:o.id},o}(0,o.Z)(t,e),t.getDerivedStateFromProps=function(e,t){ot("Generating derived state...");var n=null;if(e.data!==t.data){var a,o;ot("Data is new...");var r=W()(e.data);if(r||z()(e.data)){if(r?(a=e.data.slice(),o=K()(a[0])):(a=ft(e.data),o=K()(e.data)),ot("Created a `rows` array of length: "+a.length),T()(o,"id"))for(var i=0;i<a.length;i++)e.showRemove&&!a[i].remove&&(a[i].remove=!1);else{for(var s=0;s<a.length;s++)e.showRemove&&!a[s].remove&&(a[s].remove=!1),a[s].id=s+1;o.push("id")}(n={}).rows=a,n.keys=o,n.filtered=e.filters,n.showTooltip=!1,n.data=e.data,n.columns=function(e,t){ot("Create columns...");var n=e.t;return t.keys.filter((function(e){return"id"!==e})).map((function(a,o){var r,i=a,s=e.dataInfo&&e.dataInfo.variables&&e.dataInfo.variables[a],u={id:a,accessor:function(e){return J()(e[a])?"NA":String(e[a])},minWidth:s?125:150};if(s?i=l.createElement(Ie,{title:a,tooltip:e.dataInfo.variables[a]}):e.deletable&&!T()(e.undeletableVars,a)&&(i=l.createElement("div",{style:{backgroundColor:"papayawhip"}},l.createElement(y.Z,{placement:"left",tooltip:n("rename-variable")},l.createElement("span",null,l.createElement("input",{type:"text",className:"header-text-input",style:{width:a.length+1+"ch"},defaultValue:a,onBlur:function(t){var n=t.target.value;document.getElementById("header-"+a).setAttribute("draggable",!0),n.length>0&&a!==n&&e.onColumnNameChange(a,n)},onMouseEnter:function(e){document.getElementById("header-"+a).setAttribute("draggable",!1)},onChange:mt,onClick:function(e){e.stopPropagation()}}))),l.createElement(y.Z,{placement:"left",tooltip:n("remove-variable")},l.createElement("button",{"aria-label":n("remove-variable"),className:"fa fa-times delete-button",onClick:function(t){t.stopPropagation(),e.onColumnDelete(a)}})))),u.Header=i,W()(e.data)){r=new Array(t.rows.length);for(var c=0;c<t.rows.length;c++)r[c]=e.data[c][a]}else r=e.data[a].slice();if(e.filterable){var d,p=!1;if(N()(r))p=!0,d=r;else{r=r.filter((function(e){return!J()(e)&&""!==e&&"NA"!==e})),d=m()(r);var f=e.filters.filter((function(e){return e.id===a}))[0];p=!!(f&&(0,_.isPrimitive)(f.value.min)&&(0,_.isPrimitive)(f.value.max))||B()(r)&&d.length>2}p?(u.filterMethod=dt,u.sortMethod=st,u.style={textAlign:"right"},u.Filter=function(e){var o=e.filter,r=e.onChange,i=M()((0,Q.Z)(d)),s=D()((0,Y.Z)(d)),u={max:i,min:s};return l.createElement(_e,{ariaLabelledby:"header-"+a,ariaControls:t.id,defaultValue:o?o.value:u,onChange:r,maxValue:i,minValue:s,t:n})}):d.length<=50?(d=d.map((function(e){return String(e)})).sort(ut),O()(d[0])&&(u.style={textAlign:"right"}),u.filterMethod=pt,u.sortMethod=ut,u.Filter=function(e){var t=e.filter,a=e.onChange;return l.createElement(oe.Z,{onChange:function(e){e&&e.length>0&&d.length>3?u.minWidth=300:u.minWidth=125,a(e)},style:{width:"100%"},value:t?t.value:null,searchable:!1,options:d,menuPlacement:"auto",multi:!0,placeholder:n("show-all"),components:{DropdownIndicator:ht,MultiValueLabel:function(e){var t=function(){a(d.filter((function(t){return t!==e.children})))};return l.createElement(y.Z,{tooltip:n("select-others"),placement:"bottom"},l.createElement("span",{role:"button",tabIndex:0,onClick:t,onKeyPress:t,onMouseDown:function(e){e.preventDefault(),e.stopPropagation()},style:{cursor:"cursor"}},l.createElement(re.c.MultiValueLabel,et({},e))))}},escapeClearsValue:!0,closeMenuOnSelect:d.length<=2,menuPortalTarget:document.body,styles:{menuPortal:function(e){return tt(et({},e),{zIndex:9999})}}})}):(u.filterMethod=ct,u.sortMethod=ut)}return u}))}(e,n)}}return e.dataInfo&&t.dataInfo&&e.dataInfo.name!==t.dataInfo.name&&(ot("Data information has changed..."),n||(n={}),n.dataInfo={info:e.dataInfo.info||[],name:e.dataInfo.name||"",variables:e.dataInfo.variables||null,showOnStartup:e.dataInfo.showOnStartup||null}),n};var r=t.prototype;return r.componentDidMount=function(){if(ot("Component has mounted..."),this.table){var e=(0,u.findDOMNode)(this.table).getElementsByClassName("rt-thead")[0],t=(0,u.findDOMNode)(this.table).getElementsByClassName("rt-thead")[1],n=(0,u.findDOMNode)(this.table).getElementsByClassName("rt-tbody")[0];n.addEventListener("scroll",(function(){e.scrollLeft=n.scrollLeft,t.scrollLeft=n.scrollLeft}))}},r.componentDidUpdate=function(e,t){ot("Component has updated...");var n={};if(!this.props.filters||this.props.filters===e.filters&&this.props.filters.length===e.filters.length||(ot("Data table now has "+this.props.filters.length+" filters..."),n.filtered=this.props.filters),this.props.data!==e.data&&this.state.keys.length!==t.keys.length){var a=(0,u.findDOMNode)(this.table).getElementsByClassName("rt-thead")[0],o=(0,u.findDOMNode)(this.table).getElementsByClassName("rt-thead")[1],r=(0,u.findDOMNode)(this.table).getElementsByClassName("rt-tbody")[0];a.scrollLeft=a.scrollWidth,o.scrollLeft=o.scrollWidth,r.scrollLeft=r.scrollWidth}H()(n)||(ot("Trigger a state change after update..."),this.setState(n))},r.render=function(){var e=this;ot("Rendering component");var t=this.state,n=t.rows,a=t.dataInfo;if(!n)return l.createElement(g.Z,{variant:"danger"},this.props.t("no-data"));var o,r=null;this.state.showVarModal?r=l.createElement(w.Z,{dialogClassName:"modal-50w",show:this.state.showVarModal,onHide:this.hideVarModal},l.createElement(w.Z.Header,{closeButton:!0},l.createElement(w.Z.Title,null,this.props.t("variables"))),l.createElement(w.Z.Body,null,function(e,t){for(var n=K()(e),a=new Array(n.length),o=0;o<n.length;o++){var r=n[o];a[o]=l.createElement("tr",{key:r+"-"+o},l.createElement("td",null,""+r),l.createElement("td",null,e[r]))}return l.createElement("table",{className:"table-bordered table-condensed",style:{width:"100%"}},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,t("name")),l.createElement("th",null,t("description")))),l.createElement("tbody",null,a))}(a.variables,this.props.t))):this.state.showInfo&&(ot("Rendering dataset information modal..."),r=l.createElement(w.Z,{show:this.state.showInfo,dialogClassName:"modal-50w",onHide:this.hideInfoModal},l.createElement(w.Z.Header,{closeButton:!0},l.createElement(w.Z.Title,null,a.name," ",this.props.t("description"))),l.createElement(w.Z.Body,{dangerouslySetInnerHTML:{__html:at.render(W()(a.info)?a.info.join("\n"):a.info)}}))),o=this.props.editable.length>0?this.state.columns.map((function(t){return T()(e.props.editable,t.id)&&(t.Cell=e.renderEditable),t})):this.state.columns.slice(),this.reorder.forEach((function(e){o[e.a]=o.splice(e.b,1,o[e.a])[0]})),o=o.map((function(t,n){return"id"===t.Header?t:tt(et({},t),{Header:l.createElement("span",{className:"draggable-header",id:"header-"+t.id,draggable:"true",onDragStart:function(t){t.stopPropagation(),t.dataTransfer.setData("Text",n),e.dragged=n},onDrag:function(e){return e.stopPropagation},onDragEnd:function(t){t.stopPropagation(),setTimeout((function(){e.dragged=null}),100)},onDragOver:function(e){e.preventDefault(),e.dataTransfer.dropEffect="move"},onDrop:function(t){t.preventDefault();var a=n,o=e.dragged,r=e.state.columns.map((function(e){return e.id}));r.shift();var l=r[a];r[a]=r[o],r[o]=l,e.props.onColumnDrag(r),e.reorder.push({a:a,b:o}),e.forceUpdate()}},t.Header)})})),this.props.showIdColumn&&o.unshift({Header:"id",accessor:"id",className:"frozen",headerClassName:"frozen",filterable:!1,resizable:!1,width:50}),this.props.showRemove&&o.push({Header:this.props.t("remove"),accessor:"remove",Cell:this.renderCheckboxRemovable,filterable:!1}),o.push({Header:"",className:"table_last_col",filterable:!1,sortable:!1,resizable:!1,width:30});var i=l.createElement(y.Z,{placement:"bottom",tooltip:this.props.disableDownload?this.props.t("download-disabled"):this.props.t("download-data")},l.createElement(v.Z,{"aria-label":this.props.t("download-data"),className:"save-button",variant:"light",onClick:this.toggleSaveModal,disabled:this.props.disableDownload},l.createElement("i",{className:"fas fa-download"})));return l.createElement(l.Fragment,null,l.createElement("div",{className:"data-table-wrapper",id:this.id,style:this.props.style},l.createElement("div",{className:"data-table-header-wrapper"},l.createElement(y.Z,{placement:"bottom",tooltip:this.props.t("open-description"),show:a.info.length>0},l.createElement(v.Z,{variant:"light",disabled:0===a.info.length,onClick:this.showInfo,className:"data-table-title-button",style:{cursor:a.info.length>0?"pointer":"inherit"}},a.name?a.name:this.props.t("data"))),i,l.createElement(me,{id:this.id,session:this.context,onTutorialCompletion:this.props.onTutorialCompletion,t:this.props.t})),l.createElement(f.Z,{id:this.id,data:n,columns:o,showPagination:!0,sortable:!0,resizable:!0,filterable:this.props.filterable,filtered:this.state.filtered,sorted:this.state.sorted,showPageSizeOptions:!1,defaultPageSize:50,onFilteredChange:this.handleFilterChange,onSortedChange:this.handleSortedChange,style:this.props.style,getTableProps:this.handleTableProps,getTrProps:this.handleTrProps,previousText:this.props.t("previous"),nextText:this.props.t("next"),loadingText:this.props.t("loading"),noDataText:this.props.t("no-rows-found"),pageText:this.props.t("page"),ofText:this.props.t("of"),rowsText:this.props.t("rows")},(function(t,o,r){var i=t.sortedData.length;return l.createElement("div",{ref:function(t){t&&(e.table=t,e.frozenElems=(0,u.findDOMNode)(e.table).getElementsByClassName("frozen"))}},l.createElement(b.Z,{className:"data-table-header-toolbar"},a.variables?l.createElement(y.Z,{placement:"right",tooltip:e.props.t("variable-descriptions-tooltip")},l.createElement(v.Z,{onClick:e.showDescriptions,variant:"light",size:"xsmall",className:"variable-descriptions-button"},e.props.t("variable-descriptions"))):null,i!==n.length||e.state.sorted&&e.state.sorted.length>0?l.createElement(y.Z,{placement:"left",tooltip:e.props.t("reset-display-tooltip")},l.createElement(v.Z,{onClick:e.reset,variant:"light",size:"xsmall",className:"reset-button"},e.props.t("reset-display"))):null),o(),l.createElement("label",{className:"label-number-rows"},l.createElement("i",null,e.props.t("number-rows"),": ",i," (",e.props.t("total"),": ",n.length,")")))}))),r,this.state.showSaveModal?l.createElement(w.Z,{show:this.state.showSaveModal,onHide:this.toggleSaveModal},l.createElement(w.Z.Header,{closeButton:!0},l.createElement(w.Z.Title,null,this.props.t("download-data"))),l.createElement(w.Z.Body,null,this.props.t("download-data-body")),l.createElement(w.Z.Footer,null,l.createElement(v.Z,{onClick:this.handleSaveCSV},this.props.t("save-csv")),l.createElement(v.Z,{onClick:this.handleSaveJSON},this.props.t("save-json")))):null)},t}(l.Component);gt.defaultProps={dataInfo:{info:[],name:"",variables:null,showOnStartup:!1},deletable:!1,undeletableVars:[],filterable:!0,editable:[],getTrProps:void 0,onColumnDrag:function(){},onColumnDelete:function(){},onColumnNameChange:function(){},onClickRemove:function(){},onEdit:function(){},onFilteredChange:function(){},onTutorialCompletion:function(){},filters:[],showRemove:!1,showIdColumn:!0,disableDownload:!1,className:"",style:{}},gt.propTypes={data:s().oneOfType([s().array,s().object]).isRequired,dataInfo:s().object,deletable:s().bool,undeletableVars:s().arrayOf(s().string),filterable:s().bool,editable:s().array,getTrProps:s().func,onColumnDrag:s().func,onColumnDelete:s().func,onColumnNameChange:s().func,onClickRemove:s().func,onEdit:s().func,onTutorialCompletion:s().func,filters:s().array,onFilteredChange:s().func,showRemove:s().bool,showIdColumn:s().bool,disableDownload:s().bool,className:s().string,style:s().object},gt.contextType=ee.Z;var bt=(0,p.Z)("data-table")((0,qe.W)(gt))},675252:function(e,t){var n=/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i;function a(e){setImmediate((function(){throw e}),0)}function o(e){return n.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}var r=function(e){if(!(void 0===e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t,n=e.document,r=!1;n&&n.createElementNS&&(t=n.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in t);var l=/constructor/i.test(e.HTMLElement)||e.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent),s=e.setImmediate||e.setTimeout,u=p.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=o(e)),navigator.msSaveOrOpenBlob(e,t)}:(u.abort=function(){},u.readyState=u.INIT=0,u.WRITING=1,u.DONE=2,u.error=null,u.onwritestart=null,u.onprogress=null,u.onwrite=null,u.onabort=null,u.onerror=null,u.onwriteend=null,function(e,t,n){return new p(e,t||e.name||"download",n)})}function c(){return e.URL||e.webkitURL||e}function d(e){setTimeout((function(){"string"==typeof e?c().revokeObjectURL(e):e.remove()}),4e4)}function p(n,u,p){p||(n=o(n));var f,h=this,m="application/octet-stream"===n.type;function g(){!function(e,t,n){for(var o=(t=[].concat(t)).length;o--;){var r=e["on"+t[o]];if("function"==typeof r)try{r.call(e,n||e)}catch(l){a(l)}}}(h,"writestart progress write writeend".split(" "))}if(h.readyState=h.INIT,r)return f=c().createObjectURL(n),void s((function(){var e,n;t.href=f,t.download=u,e=t,n=new MouseEvent("click"),e.dispatchEvent(n),g(),d(f),h.readyState=h.DONE}),0);!function(){if((i||m&&l)&&e.FileReader){var t=new FileReader;return t.onloadend=function(){var n=i?t.result:t.result.replace(/^data:[^;]*;/,"data:attachment/file;");e.open(n,"_blank")||(e.location.href=n),n=void 0,h.readyState=h.DONE,g()},t.readAsDataURL(n),void(h.readyState=h.INIT)}f||(f=c().createObjectURL(n)),m?e.location.href=f:e.open(f,"_blank")||(e.location.href=f),h.readyState=h.DONE,g(),d(f)}()}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||(void 0).content);t.Z=r}}]);