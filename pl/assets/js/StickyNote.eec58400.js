/*! For license information please see StickyNote.eec58400.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{1553:function(t,e,i){"use strict";var n=i(1554);t.exports=n},1554:function(t,e,i){"use strict";var n=i(482).isPrimitive,o=i(442).isPrimitive;t.exports=function(t,e,i){var r,a;if(!o(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(!o(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!n(i))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+i+"`.");if(0===i)return 0===e.length;r=i<0?t.length+i:i}else r=t.length;if(0===e.length)return!0;if((r-=e.length)<0)return!1;for(a=0;a<e.length;a++)if(t.charCodeAt(r+a)!==e.charCodeAt(a))return!1;return!0}},2727:function(t,e,i){"use strict";var n=i(598),o=i.n(n),r=i(1553),a=i.n(r);e.a=function(t){return a()(t,"px")&&(t=parseFloat(o()(t,"px",""))),t}},3949:function(t,e,i){"use strict";i.r(e);i(423),i(440),i(438),i(543),i(444);var n=i(515),o=i.n(n),r=i(406),a=i.n(r),s=i(414),l=i.n(s),c=i(418),d=i.n(c),u=i(427),p=i.n(u),h=i(420),f=i.n(h),m=i(421),y=i.n(m),b=i(419),v=i.n(b),g=i(413),k=i.n(g),w=(i(528),i(0)),x=i.n(w),C=(i(404),i(453)),T=i.n(C),z=i(4097),B=i(449),O=i.n(B),N=i(854),S=i(467),P=i(473),D=i(2727);i(344);function R(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function j(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?R(Object(i),!0).forEach((function(e){k()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):R(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=v()(t);if(e){var o=v()(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return y()(this,i)}}var I=T()("isle:sticky-note"),W=a()("i",{className:"fas fa-times"}),F=a()("i",{className:"fas fa-window-minimize"}),K=function(t){f()(i,t);var e=E(i);function i(t){var n;l()(this,i),n=e.call(this,t),k()(p()(n),"handleClick",(function(){I("Handle click..."),n.state.minimized&&!n.isDragging&&(I("Maximize note..."),n.setState({minimized:!1})),n.props.onClick&&n.props.onClick(n.props.id)})),k()(p()(n),"remove",(function(t){(t.stopPropagation(),n.setState({exit:!0}),n.props.id)&&n.context.log({id:n.props.id,type:P.cb,value:!0});n.props.onDelete()})),k()(p()(n),"minimize",(function(t){t.stopPropagation(),n.setState({minimized:!0})})),k()(p()(n),"editTitle",(function(){n.setState({editTitle:!0},(function(){n.titleInputRef.current.focus()}))})),k()(p()(n),"editBody",(function(){n.setState({editBody:!0},(function(){n.textareaRef.current.focus()}))})),k()(p()(n),"showTitle",(function(){return a()("div",{role:"button",tabIndex:0,onClick:n.editTitle,onKeyPress:n.editTitle,className:"sticky-note-title editable"},void 0,n.state.title)})),k()(p()(n),"checkTitle",(function(t){if(13===t.keyCode){var e=t.target.value;if(n.props.id)n.context.log({id:n.props.id,type:P.vc,value:e});n.props.onTitleChange(e),n.setState({title:e,editTitle:!1})}})),k()(p()(n),"handleTitleBlur",(function(){n.props.id&&n.context.log({id:n.props.id,type:P.vc,value:n.state.title});n.props.onTitleChange(n.state.title),n.setState({editTitle:!1})})),k()(p()(n),"handleTitleChange",(function(t){n.setState({title:t.target.value})})),k()(p()(n),"handleDrag",(function(){n.isDragging=!0})),k()(p()(n),"handleDragStop",(function(t,e){(I("Stopped dragging..."),setTimeout((function(){n.isDragging=!1}),200),n.props.id)&&n.context.log({id:n.props.id,type:P.uc,value:{x:e.lastX,y:e.lastY}});n.props.onMove({left:e.lastX/window.innerWidth,top:e.lastY/window.innerHeight})})),k()(p()(n),"handleResizeStop",(function(t,e,i){n.props.onResize({width:Object(D.a)(i.style.width),height:Object(D.a)(i.style.height)})})),k()(p()(n),"showEditableTitle",(function(){return a()("div",{className:"sticky-note-title"},void 0,x.a.createElement("input",{className:"sticky-note-editable-title noDrag",onKeyDown:n.checkTitle,onBlur:n.handleTitleBlur,onChange:n.handleTitleChange,type:"text",name:"fname",value:n.state.title,ref:n.titleInputRef}))})),k()(p()(n),"showBody",(function(){return a()("div",{className:"sticky-note-body editable",role:"button",onClick:n.editBody,onKeyPress:n.editBody,tabIndex:0},void 0,n.state.body)})),k()(p()(n),"submitBody",(function(){var t=n.textareaRef.current.value;n.props.id&&n.context.log({id:n.props.id,type:P.tc,value:t});n.props.onBodyChange(t),n.setState({body:t,editBody:!1})})),k()(p()(n),"showEditableBody",(function(){return a()("div",{className:"sticky-note-body",style:{overflow:"hidden"}},void 0,x.a.createElement("textarea",{ref:n.textareaRef,className:"sticky-note-editable-body noDrag",cols:"28"},n.state.body),a()("input",{onClick:n.submitBody,type:"submit",value:n.props.t("save")}))})),k()(p()(n),"showEditableContent",(function(){return a()("div",{className:"sticky-note-content"},void 0,n.state.editTitle?n.showEditableTitle():n.showTitle(),n.state.editBody?n.showEditableBody():n.showBody(),n.props.watermark?a()("div",{className:"sticky-note-watermark"},void 0,n.props.t(n.props.watermark)):null)})),k()(p()(n),"removeButton",(function(){return a()("div",{className:"sticky-note-remove-button",role:"button",tabIndex:0,onClick:n.remove,onKeyPress:n.remove,title:n.props.t("click-to-remove")},void 0,W)})),n.textareaRef=x.a.createRef(),n.titleInputRef=x.a.createRef();var o=null,r=null;return t.editable&&(r=t.title||t.t("custom-title"),o=t.body||t.t("type-in-your-note")),n.state={exit:!1,minimized:t.minimized,editBody:!1,editTitle:!1,body:o,title:r},n}return d()(i,[{key:"componentDidUpdate",value:function(t){this.props.editable&!t.editable&&this.setState({title:this.props.title||this.props.t("custom-title"),body:this.props.body||this.props.t("type-in-your-note")})}},{key:"checkTransforms",value:function(){var t=j({},this.props.style);switch(t.transform&&(!0===this.state.minimized?t.transform+=" scale(0.15)":t.transform+=" scale(1)"),this.props.color){case"blue":t.WebkitFilter="hue-rotate(166deg)",t.filter="hue-rotate(166deg)";break;case"green":t.WebkitFilter="hue-rotate(88deg) saturate(70%)",t.filter="hue-rotate(88deg) saturate(70%)";break;case"pink":t.WebkitFilter="hue-rotate(220deg) saturate(70%)",t.filter="hue-rotate(220deg) saturate(70%)";break;case"red":t.WebkitFilter="hue-rotate(290deg) saturate(70%)",t.filter="hue-rotate(290deg) saturate(70%)";break;case"orange":t.WebkitFilter="hue-rotate(320deg) saturate(70%)",t.filter="hue-rotate(320deg) saturate(70%)"}return t}},{key:"showContent",value:function(){return a()("div",{className:"sticky-note-content"},void 0,a()("div",{className:"sticky-note-title"},void 0,this.props.title),a()("div",{className:"sticky-note-date"},void 0,this.props.date),a()("div",{className:"sticky-note-body"},void 0,this.props.body),this.props.watermark?a()("div",{className:"sticky-note-watermark"},void 0,this.props.t(this.props.watermark)):null)}},{key:"render",value:function(){var t=this.checkTransforms(),e="sticky-note";!0===this.state.exit&&(e+=" sticky-note-exit"),!0===this.state.minimized&&(e+=" sticky-note-minimized"),this.props.onClick&&(e+=" sticky-note-callback");var i=a()("div",{className:"sticky-note-outer",style:t},void 0,a()("div",{onClick:this.handleClick,className:e,onKeyPress:this.handleClick,tabIndex:0,role:"button"},void 0,a()("div",{className:"sticky-note-controls"},void 0,this.props.minimizable?a()("div",{onClick:this.minimize,className:"sticky-note-minimizable",tabIndex:0,role:"button",onKeyPress:this.minimize,title:this.props.t("click-to-minimize")},void 0,F):null,this.props.removable?this.removeButton():null),this.props.editable?this.showEditableContent():this.showContent())),n=O()(this.props.draggable)?this.props.draggable:{};return n.default||(n.default=j({},this.props.size)),n.default.width||(n.default.width=300),n.default.width||(n.default.height=300),x.a.createElement(N.a,o()({bounds:"#Lesson",cancel:".noDrag",onStop:this.handleDragStop,onDrag:this.handleDrag,onResizeStop:this.handleResizeStop,style:{position:"absolute"},minWidth:200,minHeight:200,maxHeight:500,maxWidth:500,disabled:!this.props.draggable,resizable:!0},n),i)}}]),i}(w.Component);K.defaultProps={title:null,body:null,watermark:null,color:null,date:"",draggable:!1,editable:!1,minimizable:!1,minimized:!1,resizable:!1,size:null,style:{},onBodyChange:function(){},onClick:null,onDelete:function(){},onMove:function(){},onResize:function(){},onTitleChange:function(){},removable:!1},K.contextType=S.a,e.default=Object(z.a)("StickyNote")(K)},854:function(t,e,i){"use strict";var n=i(408),o=Object(n.a)((function(){return Promise.all([i.e(0),i.e(10),i.e(395),i.e(166)]).then(i.bind(null,1670))}));e.a=o}}]);