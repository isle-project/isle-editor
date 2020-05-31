/*! For license information please see dll.4.js.LICENSE.txt */
(window.webpackJsonp_name_hash_=window.webpackJsonp_name_hash_||[]).push([[4],{3679:function(e,t,n){"use strict";n.r(t),function(e){var o=n(5),a=n.n(o),i=n(6),s=n.n(i),r=n(3),l=n.n(r),c=n(7),u=n.n(c),d=n(8),f=n.n(d),p=n(4),h=n.n(p),m=n(2),g=n.n(m),v=n(0),y=n.n(v),x=n(1),C=n.n(x),b=n(3680),E=n.n(b),S=n(359),T=n(1024),R=n.n(T),w=n(1666),N=n(108),I=n(30),k=n(14),_=n(55),M=n(3708),O=n(3709);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return f()(this,n)}}var L={Containers:{tc:{margin:"30px auto 0px auto"}},NotificationItem:{info:{border:"solid 8px #007bff",borderRadius:6,padding:20},success:{boxShadow:"1px 1px 3px 1px darkslategrey"}},Title:{success:{color:"#3c763d"}}},A=function(t){u()(o,t);var n=D(o);function o(e){var t;return a()(this,o),t=n.call(this,e),g()(l()(t),"restoreNotes",(function(e){for(var n=e.lesson,o=0;o<n.length;o++){var a=n[o];if(a.type===k.INSERT_STICKY_NOTE){var i=a.value,s=i.left,r=i.top,l=i.noteID,c=!1,u=0,d=0,f=null,p=null,h=e[l];if(h)for(var m=h.length-1;m>=0;m--)switch(h[m].type){case k.DELETE_STICKY_NOTE:c=!0;break;case k.STICKY_NOTE_TITLE:p=h[m].value;break;case k.STICKY_NOTE_BODY:f=h[m].value;break;case k.STICKY_NOTE_MOVE:u+=h[m].value.x,d+=h[m].value.y}s+=u,r+=d,c||t.addNote({left:s,top:r,noteID:l,title:p,body:f})}}})),g()(l()(t),"addNote",(function(e){var n=e.left,o=e.top,a=e.noteID,i=e.body,s=e.title;a||(a=Object(N.default)(3),t.context.log({id:"lesson",type:k.INSERT_STICKY_NOTE,value:{top:o,left:n,noteID:a}}));var r=y.a.createElement(w.default,{id:a,color:"green",editable:!0,minimizable:!0,removable:!0,key:t.state.notes.length,draggable:{default:{x:n,y:o}},title:s,body:i}),l=t.state.notes.slice();l.push(r),t.setState({notes:l})})),t.state={visible:!0,notes:[]},t}return s()(o,[{key:"componentDidMount",value:function(){var e=this,t=this.context;t.onLessonMount(),this.unsubscribe=t.subscribe((function(n,o){if(n===_.RETRIEVED_CURRENT_USER_ACTIONS){var a=o;R()(a.lesson)&&e.restoreNotes(a)}else n!==_.RECEIVED_LESSON_INFO&&n!==_.RECEIVED_USER_RIGHTS||e.setState({visible:t.isActive()||t.isOwner()})}))}},{key:"render",value:function(){return this.state.visible?y.a.createElement(v.Fragment,null,y.a.createElement(S.ContextMenuTrigger,{attributes:{className:"contextmenu-fullscreen"},holdToDisplay:-1,disableIfShiftIsPressed:!0,id:"lessonWindow"},y.a.createElement("div",{id:"Lesson",className:this.props.className,style:this.props.style},this.props.children,this.state.notes)),y.a.createElement(M.default,{addNote:this.addNote,session:this.context}),y.a.createElement(E.a,{ref:function(t){e.notificationSystemISLE=t},allowHTML:!0,style:L})):y.a.createElement(O.default,null)}}]),o}(v.Component);A.propTypes={className:C.a.string,style:C.a.object},A.defaultProps={className:"",style:{}},A.contextType=I.SessionContext,t.default=A}.call(this,n(94))},3708:function(e,t,n){"use strict";n.r(t);var o=n(5),a=n.n(o),i=n(6),s=n.n(i),r=n(3),l=n.n(r),c=n(7),u=n.n(c),d=n(8),f=n.n(d),p=n(4),h=n.n(p),m=n(2),g=n.n(m),v=n(0),y=n.n(v),x=n(1),C=n.n(x),b=n(359),E=n(22),S=n.n(E),T=n(85),R=n.n(T),w=n(346),N=n.n(w);function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return f()(this,n)}}var k=S()("isle:lesson:contextmenu"),_=["input","textarea"];var M=function(e){u()(n,e);var t=I(n);function n(e){var o;return a()(this,n),o=t.call(this,e),g()(l()(o),"handleSelectionChange",(function(e){if(!o.state.contextMenuIsOpen){var t,n=window.getSelection(),a=(t=document.activeElement)&&~_.indexOf(t.tagName.toLowerCase())?!t.readOnly&&!t.disabled:(t=getSelection().anchorNode)?(t=t.parentNode).isContentEditable:void 0,i=document.activeElement;if(-1!==_.indexOf(i.tagName.toLowerCase())){var s=i.value.slice(i.selectionStart,i.selectionEnd);return o.setState({lastText:s,lastActive:i,editable:a})}if(n.isCollapsed&&"Range"!==n.type)setTimeout((function(){o.forceUpdate()}),150);else if(o.lastSelection=n,n.getRangeAt&&n.rangeCount){var r=n.getRangeAt(0),l=n.toString();o.setState({lastActive:i,lastRange:r,lastText:l,editable:a})}}})),g()(l()(o),"highlightText",(function(e){k("Highlight the selected text..."),document.designMode="on";var t=window.getSelection();t.removeAllRanges(),t.addRange(o.state.lastRange),document.execCommand("styleWithCSS",!1,!0),document.execCommand("backColor",!1,"yellow"),document.designMode="off"})),g()(l()(o),"removeHighlight",(function(e){k("Highlight the selected text...");var t=window.getSelection();t.removeAllRanges(),t.addRange(o.state.lastRange),document.designMode="on",document.execCommand("styleWithCSS",!1,!0),document.execCommand("backColor",!1,"inherit"),document.designMode="off"})),g()(l()(o),"cutSelection",(function(){var e=o.state.lastActive;if(-1!==_.indexOf(e.tagName.toLowerCase()))return e.value=R()(e.value,o.state.lastText,""),navigator.clipboard.writeText(o.state.lastText);var t=window.getSelection();t.removeAllRanges(),t.addRange(o.state.lastRange),document.execCommand("cut")})),g()(l()(o),"copyToClipboard",(function(e){k("Copying selection to clipboard... "),navigator.clipboard.writeText(o.state.lastText)})),g()(l()(o),"copyFromClipboard",(function(){navigator.clipboard.readText().then((function(e){if(!e)return o.props.session.addNotification({title:"Clipboard is empty",message:"Failed to insert text. The clipboard is currently empty.",level:"error",position:"tr"});var t=o.state.lastActive;t&&t.focus(),document.execCommand("insertText",!1,e)}))})),g()(l()(o),"textToSpeech",(function(){var e=o.state.lastText;k("Read aloud: "+e);var t=o.props.session;if(N()(window.speechSynthesis.getVoices()))return t.addNotification({title:"Not supported.",message:"The text-to-speech functionality is currently not supported on your browser. Please try Google Chrome.",level:"error",position:"tr"});var n=new SpeechSynthesisUtterance(e);n.lang=t.config.language||"en-US",window.speechSynthesis.speak(n)})),o.state={lastRange:null,lastText:"",contextMenuIsOpen:!1,editable:!1},o}return s()(n,[{key:"componentDidMount",value:function(){document.addEventListener("selectionchange",this.handleSelectionChange)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("selectionchange",this.handleSelectionChange)}},{key:"render",value:function(){var e=this,t=[],n=window.getSelection(),o=document.activeElement,a=o&&-1!==_.indexOf(o.tagName.toLowerCase());if((!n.isCollapsed||"Range"===n.type)&&(this.state.editable&&t.push(y.a.createElement(b.MenuItem,{key:0,onClick:this.cutSelection},"Cut")),t.push(y.a.createElement(b.MenuItem,{key:1,onClick:this.copyToClipboard},"Copy")),t.push(y.a.createElement(b.MenuItem,{key:2,onClick:this.textToSpeech},"Read aloud")),!a&&!o.isContentEditable&&(t.push(y.a.createElement(b.MenuItem,{key:3,onClick:this.highlightText},"Highlight")),n&&n.focusNode))){var i=n.focusNode.parentElement;i&&"yellow"===i.style.backgroundColor&&t.push(y.a.createElement(b.MenuItem,{key:4,onClick:this.removeHighlight},"Remove Highlight"))}return a?t.push(y.a.createElement(b.MenuItem,{key:5,onClick:this.copyFromClipboard},"Paste")):o.isContentEditable||t.push(y.a.createElement(b.MenuItem,{key:6,onClick:function(t){e.props.addNote({left:t.pageX,top:t.pageY})}},"Add Note")),y.a.createElement(b.ContextMenu,{id:"lessonWindow",onShow:function(){k("Context menu has been opened..."),e.setState({contextMenuIsOpen:!0})},onHide:function(){k("Context menu has been closed..."),e.setState({contextMenuIsOpen:!1})}},t)}}]),n}(v.Component);M.propTypes={addNote:C.a.func.isRequired,session:C.a.object.isRequired},t.default=M},3709:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o);n(3710);t.default=function(){return a.a.createElement("div",{className:"forbidden-wrapper"},a.a.createElement("h3",{className:"forbidden-header"},"Lesson not available (yet)"))}},3710:function(e,t,n){var o=n(37),a=n(3711);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};o(a,i);e.exports=a.locals||{}},3711:function(e,t,n){(t=n(38)(!1)).push([e.i,".forbidden-wrapper {\n\ttext-align: center;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tmargin: auto;\n\twidth: 400px;\n\theight: 200px;\n}\n\n.forbidden-header {\n\tfont-family: Courier New, Courier, monospace;\n}\n",""]),e.exports=t}}]);