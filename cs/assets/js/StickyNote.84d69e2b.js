"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94061],{377174:function(t,e,i){const s=(0,i(217431).Z)((()=>Promise.all([i.e(40532),i.e(67139),i.e(69254)]).then(i.bind(i,487482))));e.Z=s},883987:function(t,e,i){i.r(e);var s=i(202784),o=i(213980),a=i.n(o),n=i(690299),l=i.n(n),r=i(198),h=i(833022),c=i.n(h),d=i(377174),p=i(123103),m=i(691334),u=i(609512),b=i(487890),y=i(741082),g=Object.defineProperty,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,w=(t,e,i)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,C=(t,e)=>{for(var i in e||(e={}))f.call(e,i)&&w(t,i,e[i]);if(k)for(var i of k(e))v.call(e,i)&&w(t,i,e[i]);return t},z=(t,e,i)=>(w(t,"symbol"!=typeof e?e+"":e,i),i);const T=l()("isle:sticky-note");class E extends s.Component{constructor(t){super(t),z(this,"handleClick",(()=>{T("Handle click..."),this.state.minimized&&!this.isDragging&&(T("Maximize note..."),this.setState({minimized:!1})),this.props.onClick&&this.props.onClick(this.props.id)})),z(this,"remove",(t=>{t.stopPropagation(),this.setState({exit:!0}),this.props.logAction(m.yY),this.props.onDelete()})),z(this,"minimize",(t=>{t.stopPropagation(),this.setState({minimized:!0})})),z(this,"editTitle",(()=>{this.setState({editTitle:!0},(()=>{this.titleInputRef.current.focus()}))})),z(this,"editBody",(()=>{this.setState({editBody:!0},(()=>{this.textareaRef.current.focus()}))})),z(this,"showTitle",(()=>s.createElement("div",{role:"button",tabIndex:0,onClick:this.editTitle,onKeyPress:this.editTitle,className:"sticky-note-title editable"},this.state.title||this.props.t("custom-title")))),z(this,"checkTitle",(t=>{if(13===t.keyCode){const e=t.target.value;this.props.logAction(m.im,e),this.props.onTitleChange(e),this.setState({title:e,editTitle:!1})}})),z(this,"handleTitleBlur",(()=>{this.props.logAction(m.im,this.state.title),this.props.onTitleChange(this.state.title),this.setState({editTitle:!1})})),z(this,"handleTitleChange",(t=>{this.setState({title:t.target.value})})),z(this,"handleDrag",(()=>{this.isDragging=!0})),z(this,"handleDragStop",((t,e)=>{T("Stopped dragging..."),setTimeout((()=>{this.isDragging=!1}),200),this.props.logAction(m.tP,{x:e.lastX,y:e.lastY}),this.props.onMove({left:e.lastX/window.innerWidth,top:e.lastY/window.innerHeight})})),z(this,"handleResizeStop",((t,e,i)=>{this.props.onResize({width:(0,u.Z)(i.style.width),height:(0,u.Z)(i.style.height)})})),z(this,"showEditableTitle",(()=>s.createElement("div",{className:"sticky-note-title"},s.createElement("input",{className:"sticky-note-editable-title noDrag",onKeyDown:this.checkTitle,onBlur:this.handleTitleBlur,onChange:this.handleTitleChange,type:"text",name:"fname",value:this.state.title,ref:this.titleInputRef})))),z(this,"showBody",(()=>s.createElement("div",{className:"sticky-note-body editable",role:"button",onClick:this.editBody,onKeyPress:this.editBody,tabIndex:0},this.state.body||this.props.t("type-in-your-note")))),z(this,"submitBody",(()=>{const t=this.textareaRef.current.value;this.props.logAction(m.Pr,t),this.props.onBodyChange(t),this.setState({body:t,editBody:!1})})),z(this,"showEditableBody",(()=>s.createElement("div",{className:"sticky-note-body",style:{overflow:"hidden"}},s.createElement("textarea",{ref:this.textareaRef,className:"sticky-note-editable-body noDrag",cols:"28"},this.state.body),s.createElement("input",{onClick:this.submitBody,type:"submit",value:this.props.t("save")})))),z(this,"showEditableContent",(()=>s.createElement("div",{className:"sticky-note-content"},this.state.editTitle?this.showEditableTitle():this.showTitle(),this.state.editBody?this.showEditableBody():this.showBody(),this.props.watermark?s.createElement("div",{className:"sticky-note-watermark"},this.props.t(this.props.watermark)):null))),z(this,"removeButton",(()=>s.createElement("div",{className:"sticky-note-remove-button",role:"button",tabIndex:0,onClick:this.remove,onKeyPress:this.remove,title:this.props.t("click-to-remove")},s.createElement("i",{className:"fas fa-times"})))),this.textareaRef=s.createRef(),this.titleInputRef=s.createRef(),this.state={exit:!1,minimized:t.minimized,editBody:!1,editTitle:!1,body:t.body,title:t.title}}checkTransforms(){const t=C({},this.props.style);switch(t.transform&&(!0===this.state.minimized?t.transform+=" scale(0.15)":t.transform+=" scale(1)"),this.props.color){case"blue":t.WebkitFilter="hue-rotate(166deg)",t.filter="hue-rotate(166deg)";break;case"green":t.WebkitFilter="hue-rotate(88deg) saturate(70%)",t.filter="hue-rotate(88deg) saturate(70%)";break;case"pink":t.WebkitFilter="hue-rotate(220deg) saturate(70%)",t.filter="hue-rotate(220deg) saturate(70%)";break;case"red":t.WebkitFilter="hue-rotate(290deg) saturate(70%)",t.filter="hue-rotate(290deg) saturate(70%)";break;case"orange":t.WebkitFilter="hue-rotate(320deg) saturate(70%)",t.filter="hue-rotate(320deg) saturate(70%)"}return t}showContent(){return s.createElement("div",{className:"sticky-note-content"},s.createElement("div",{className:"sticky-note-title"},this.props.title),s.createElement("div",{className:"sticky-note-date"},this.props.date),s.createElement("div",{className:"sticky-note-body"},this.props.body),this.props.watermark?s.createElement("div",{className:"sticky-note-watermark"},this.props.t(this.props.watermark)):null)}render(){const t=this.checkTransforms();let e="sticky-note";!0===this.state.exit&&(e+=" sticky-note-exit"),!0===this.state.minimized&&(e+=" sticky-note-minimized"),this.props.onClick&&(e+=" sticky-note-callback");const i=s.createElement("div",{className:"sticky-note-outer",style:t},s.createElement("div",{onClick:this.handleClick,className:e,onKeyPress:this.handleClick,tabIndex:0,role:"button"},s.createElement("div",{className:"sticky-note-controls"},this.props.minimizable?s.createElement("div",{onClick:this.minimize,className:"sticky-note-minimizable",tabIndex:0,role:"button",onKeyPress:this.minimize,title:this.props.t("click-to-minimize")},s.createElement("i",{className:"fas fa-window-minimize"})):null,this.props.removable?this.removeButton():null),this.props.editable?this.showEditableContent():this.showContent())),o=c()(this.props.draggable)?this.props.draggable:{};return o.default||(o.default=C({},this.props.size)),o.default.width||(o.default.width=300),o.default.width||(o.default.height=300),s.createElement(d.Z,C({bounds:"#Lesson",cancel:".noDrag",onStop:this.handleDragStop,onDrag:this.handleDrag,onResizeStop:this.handleResizeStop,style:{position:"absolute"},minWidth:200,minHeight:200,maxHeight:500,maxWidth:500,disabled:!this.props.draggable,resizable:!0},o),i)}}E.propTypes={title:a().oneOfType([a().string,a().node]),body:a().oneOfType([a().string,a().node]),watermark:a().string,color:a().string,style:a().object,date:a().string,draggable:a().oneOfType([a().bool,a().object]),editable:a().bool,minimizable:a().bool,minimized:a().bool,resizable:a().bool,size:a().object,onBodyChange:a().func,onClick:a().func,onDelete:a().func,onMove:a().func,onResize:a().func,onTitleChange:a().func,removable:a().bool},E.defaultProps={title:null,body:null,watermark:null,color:null,date:"",draggable:!1,editable:!1,minimizable:!1,minimized:!1,resizable:!1,size:null,style:{},onBodyChange(){},onClick:null,onDelete(){},onMove(){},onResize(){},onTitleChange(){},removable:!1},E.contextType=p.Z,e.default=(0,b.D)("STICKY_NOTE")((0,r.Z)("sticky-note")((0,y.W)(E)))},609512:function(t,e,i){var s=i(302467),o=i.n(s),a=i(792424),n=i.n(a);e.Z=function(t){return n()(t,"px")&&(t=parseFloat(o()(t,"px",""))),t}}}]);