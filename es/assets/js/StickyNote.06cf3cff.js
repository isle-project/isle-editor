(window.webpackJsonp=window.webpackJsonp||[]).push([[1061],{2680:function(t,e,i){"use strict";var o=i(514),n=i.n(o),a=i(1081),s=i.n(a);e.a=function(t){return s()(t,"px")&&(t=parseFloat(n()(t,"px",""))),t}},3895:function(t,e,i){"use strict";i.r(e);i(421),i(437),i(433),i(438),i(439);var o,n,a=i(488),s=i.n(a),r=i(407),l=i.n(r),c=i(414),d=i.n(c),u=i(416),p=i.n(u),h=i(424),f=i.n(h),m=i(418),y=i.n(m),b=i(419),v=i.n(b),g=i(417),k=i.n(g),w=i(412),x=i.n(w),z=(i(430),i(0)),C=i.n(z),T=(i(404),i(450)),B=i.n(T),O=i(4095),N=i(445),S=i.n(N),D=i(714),R=i(459),P=i(458),j=i(2680);i(340);function E(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function I(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?E(Object(i),!0).forEach((function(e){x()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):E(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function W(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=k()(t);if(e){var n=k()(this).constructor;i=Reflect.construct(o,arguments,n)}else i=o.apply(this,arguments);return v()(this,i)}}var F=B()("isle:sticky-note"),K=function(t){y()(i,t);var e=W(i);function i(t){var n;d()(this,i),n=e.call(this,t),x()(f()(n),"handleClick",(function(){F("Handle click..."),n.state.minimized&&!n.isDragging&&(F("Maximize note..."),n.setState({minimized:!1})),n.props.onClick&&n.props.onClick(n.props.id)})),x()(f()(n),"remove",(function(t){(t.stopPropagation(),n.setState({exit:!0}),n.props.id)&&n.context.log({id:n.props.id,type:P.eb,value:!0});n.props.onDelete()})),x()(f()(n),"minimize",(function(t){t.stopPropagation(),n.setState({minimized:!0})})),x()(f()(n),"editTitle",(function(){n.setState({editTitle:!0},(function(){n.titleInputRef.current.focus()}))})),x()(f()(n),"editBody",(function(){n.setState({editBody:!0},(function(){n.textareaRef.current.focus()}))})),x()(f()(n),"showTitle",(function(){return l()("div",{role:"button",tabIndex:0,onClick:n.editTitle,onKeyPress:n.editTitle,className:"sticky-note-title editable"},void 0,n.state.title)})),x()(f()(n),"checkTitle",(function(t){if(13===t.keyCode){var e=t.target.value;if(n.props.id)n.context.log({id:n.props.id,type:P.xc,value:e});n.props.onTitleChange(e),n.setState({title:e,editTitle:!1})}})),x()(f()(n),"handleTitleBlur",(function(){n.props.id&&n.context.log({id:n.props.id,type:P.xc,value:n.state.title});n.props.onTitleChange(n.state.title),n.setState({editTitle:!1})})),x()(f()(n),"handleTitleChange",(function(t){n.setState({title:t.target.value})})),x()(f()(n),"handleDrag",(function(){n.isDragging=!0})),x()(f()(n),"handleDragStop",(function(t,e){(F("Stopped dragging..."),setTimeout((function(){n.isDragging=!1}),200),n.props.id)&&n.context.log({id:n.props.id,type:P.wc,value:{x:e.lastX,y:e.lastY}});n.props.onMove({left:e.lastX/window.innerWidth,top:e.lastY/window.innerHeight})})),x()(f()(n),"handleResizeStop",(function(t,e,i){n.props.onResize({width:Object(j.a)(i.style.width),height:Object(j.a)(i.style.height)})})),x()(f()(n),"showEditableTitle",(function(){return l()("div",{className:"sticky-note-title"},void 0,C.a.createElement("input",{className:"sticky-note-editable-title noDrag",onKeyDown:n.checkTitle,onBlur:n.handleTitleBlur,onChange:n.handleTitleChange,type:"text",name:"fname",value:n.state.title,ref:n.titleInputRef}))})),x()(f()(n),"showBody",(function(){return l()("div",{className:"sticky-note-body editable",role:"button",onClick:n.editBody,onKeyPress:n.editBody,tabIndex:0},void 0,n.state.body)})),x()(f()(n),"submitBody",(function(){var t=n.textareaRef.current.value;n.props.id&&n.context.log({id:n.props.id,type:P.vc,value:t});n.props.onBodyChange(t),n.setState({body:t,editBody:!1})})),x()(f()(n),"showEditableBody",(function(){return l()("div",{className:"sticky-note-body",style:{overflow:"hidden"}},void 0,C.a.createElement("textarea",{ref:n.textareaRef,className:"sticky-note-editable-body noDrag",cols:"28"},n.state.body),l()("input",{onClick:n.submitBody,type:"submit",value:n.props.t("save")}))})),x()(f()(n),"showEditableContent",(function(){return l()("div",{className:"sticky-note-content"},void 0,n.state.editTitle?n.showEditableTitle():n.showTitle(),n.state.editBody?n.showEditableBody():n.showBody(),n.props.watermark?l()("div",{className:"sticky-note-watermark"},void 0,n.props.t(n.props.watermark)):null)})),x()(f()(n),"removeButton",(function(){return l()("div",{className:"sticky-note-remove-button",role:"button",tabIndex:0,onClick:n.remove,onKeyPress:n.remove,title:n.props.t("click-to-remove")},void 0,o||(o=l()("i",{className:"fas fa-times"})))})),n.textareaRef=C.a.createRef(),n.titleInputRef=C.a.createRef();var a=null,s=null;return t.editable&&(s=t.title||t.t("custom-title"),a=t.body||t.t("type-in-your-note")),n.state={exit:!1,minimized:t.minimized,editBody:!1,editTitle:!1,body:a,title:s},n}return p()(i,[{key:"componentDidUpdate",value:function(t){this.props.editable&!t.editable&&this.setState({title:this.props.title||this.props.t("custom-title"),body:this.props.body||this.props.t("type-in-your-note")})}},{key:"checkTransforms",value:function(){var t=I({},this.props.style);switch(t.transform&&(!0===this.state.minimized?t.transform+=" scale(0.15)":t.transform+=" scale(1)"),this.props.color){case"blue":t.WebkitFilter="hue-rotate(166deg)",t.filter="hue-rotate(166deg)";break;case"green":t.WebkitFilter="hue-rotate(88deg) saturate(70%)",t.filter="hue-rotate(88deg) saturate(70%)";break;case"pink":t.WebkitFilter="hue-rotate(220deg) saturate(70%)",t.filter="hue-rotate(220deg) saturate(70%)";break;case"red":t.WebkitFilter="hue-rotate(290deg) saturate(70%)",t.filter="hue-rotate(290deg) saturate(70%)";break;case"orange":t.WebkitFilter="hue-rotate(320deg) saturate(70%)",t.filter="hue-rotate(320deg) saturate(70%)"}return t}},{key:"showContent",value:function(){return l()("div",{className:"sticky-note-content"},void 0,l()("div",{className:"sticky-note-title"},void 0,this.props.title),l()("div",{className:"sticky-note-date"},void 0,this.props.date),l()("div",{className:"sticky-note-body"},void 0,this.props.body),this.props.watermark?l()("div",{className:"sticky-note-watermark"},void 0,this.props.t(this.props.watermark)):null)}},{key:"render",value:function(){var t=this.checkTransforms(),e="sticky-note";!0===this.state.exit&&(e+=" sticky-note-exit"),!0===this.state.minimized&&(e+=" sticky-note-minimized"),this.props.onClick&&(e+=" sticky-note-callback");var i=l()("div",{className:"sticky-note-outer",style:t},void 0,l()("div",{onClick:this.handleClick,className:e,onKeyPress:this.handleClick,tabIndex:0,role:"button"},void 0,l()("div",{className:"sticky-note-controls"},void 0,this.props.minimizable?l()("div",{onClick:this.minimize,className:"sticky-note-minimizable",tabIndex:0,role:"button",onKeyPress:this.minimize,title:this.props.t("click-to-minimize")},void 0,n||(n=l()("i",{className:"fas fa-window-minimize"}))):null,this.props.removable?this.removeButton():null),this.props.editable?this.showEditableContent():this.showContent())),o=S()(this.props.draggable)?this.props.draggable:{};return o.default||(o.default=I({},this.props.size)),o.default.width||(o.default.width=300),o.default.width||(o.default.height=300),C.a.createElement(D.a,s()({bounds:"#Lesson",cancel:".noDrag",onStop:this.handleDragStop,onDrag:this.handleDrag,onResizeStop:this.handleResizeStop,style:{position:"absolute"},minWidth:200,minHeight:200,maxHeight:500,maxWidth:500,disabled:!this.props.draggable,resizable:!0},o),i)}}]),i}(z.Component);K.defaultProps={title:null,body:null,watermark:null,color:null,date:"",draggable:!1,editable:!1,minimizable:!1,minimized:!1,resizable:!1,size:null,style:{},onBodyChange:function(){},onClick:null,onDelete:function(){},onMove:function(){},onResize:function(){},onTitleChange:function(){},removable:!1},K.contextType=R.a,e.default=Object(O.a)("StickyNote")(K)},714:function(t,e,i){"use strict";var o=i(405),n=Object(o.a)((function(){return Promise.all([i.e(0),i.e(6),i.e(1327),i.e(296)]).then(i.bind(null,1536))}));e.a=n}}]);