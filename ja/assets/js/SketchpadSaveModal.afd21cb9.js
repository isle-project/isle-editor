(window.webpackJsonp=window.webpackJsonp||[]).push([[1009],{6431:function(n,e,t){"use strict";t.r(e);t(421);var o,i=t(407),a=t.n(i),r=t(414),s=t.n(r),l=t(416),d=t.n(l),c=t(424),p=t.n(c),u=t(418),f=t.n(u),h=t(419),v=t.n(h),w=t(417),k=t.n(w),y=t(412),g=t.n(y),m=(t(430),t(482),t(0)),F=t(423),H=t(594),b=(t(404),t(447)),P=t.n(b);function x(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,o=k()(n);if(e){var i=k()(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return v()(this,t)}}var N=function(n){f()(t,n);var e=x(t);function t(n){var o;return s()(this,t),o=e.call(this,n),g()(p()(o),"clickHide",(function(){o.props.onHide()})),g()(p()(o),"handlePDFExport",(function(){o.props.saveAsPDF(),o.props.onHide()})),g()(p()(o),"handlePNGExport",(function(){o.props.saveAsPNG(),o.props.onHide()})),o.state={ownerFile:null},o}return d()(t,[{key:"componentDidMount",value:function(){var n=this;this.props.session.getLessonOwnerFiles((function(e,t){P()(t)&&t.length>0&&(t=t.filter((function(e){return e.title===n.props.id+".pdf"})),n.setState({ownerFile:t[t.length-1]}))}))}},{key:"render",value:function(){var n,e,t=this.props.session;this.state.ownerFile&&(n=new Date(this.state.ownerFile.updatedAt),e=this.state.ownerFile.name);var i=this.props.t;return a()(H.a,{onHide:this.clickHide,show:this.props.show,dialogClassName:"modal-w30"},void 0,a()(H.a.Header,{closeButton:!0},void 0,a()(H.a.Title,{as:"h4"},void 0,i("download"))),a()(H.a.Body,{},void 0,this.props.pdf?a()(F.a,{className:"sketchpad-download-link-btn",size:"large",variant:"secondary",block:!0,onClick:this.clickHide},void 0,a()("a",{className:"unstyled-link sketchpad-download-link",href:this.props.pdf,download:!0},void 0,i("download-original"))):null,this.state.ownerFile?a()(F.a,{size:"large",variant:"secondary",block:!0,onClick:this.clickHide},void 0,a()("a",{className:"unstyled-link",href:t.server+"/"+this.state.ownerFile.filename,download:!0},void 0,i("download-instructor-annotations"),o||(o=a()("br",{})),a()("small",{},void 0,"(",i("last-updated"),": ",n.toDateString()+", "+n.toLocaleTimeString()," ",i("by")," ",e,")"))):null,a()(F.a,{variant:"secondary",size:"large",onClick:this.handlePDFExport,block:!0},void 0,i("export-pdf")),a()(F.a,{variant:"secondary",size:"large",onClick:this.handlePNGExport,block:!0},void 0,i("export-png"))))}}]),t}(m.Component);N.defaultProps={pdf:null,onHide:function(){}},e.default=N}}]);