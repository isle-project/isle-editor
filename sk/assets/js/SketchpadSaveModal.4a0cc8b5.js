(self.webpackChunk=self.webpackChunk||[]).push([[2087],{428373:function(e,t,n){"use strict";n.r(t);n(382139);var o,i=n(858255),r=n(264659),s=n(904730),a=n(673989),l=n(175663),c=n(750591),d=n(575630),u=n(151119),p=(n(898837),n(6059),n(202784)),f=n(770561),h=n(81982),Z=(n(213980),n(801420)),v=n.n(Z);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,d.Z)(e);if(t){var i=(0,d.Z)(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return(0,c.Z)(this,n)}}var w=function(e){(0,l.Z)(n,e);var t=k(n);function n(e){var o;return(0,r.Z)(this,n),o=t.call(this,e),(0,u.Z)((0,a.Z)(o),"clickHide",(function(){o.props.onHide()})),(0,u.Z)((0,a.Z)(o),"handlePDFExport",(function(){o.props.saveAsPDF(),o.props.onHide()})),(0,u.Z)((0,a.Z)(o),"handlePNGExport",(function(){o.props.saveAsPNG(),o.props.onHide()})),o.state={ownerFile:null},o}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.session.getLessonOwnerFiles((function(t,n){v()(n)&&n.length>0&&(n=n.filter((function(t){return t.title===e.props.id+".pdf"})),e.setState({ownerFile:n[n.length-1]}))}))}},{key:"render",value:function(){var e,t,n=this.props.session;this.state.ownerFile&&(e=new Date(this.state.ownerFile.updatedAt),t=this.state.ownerFile.name);var r=this.props.t;return(0,i.Z)(h.Z,{onHide:this.clickHide,show:this.props.show,dialogClassName:"modal-w30"},void 0,(0,i.Z)(h.Z.Header,{closeButton:!0},void 0,(0,i.Z)(h.Z.Title,{as:"h4"},void 0,r("download"))),(0,i.Z)(h.Z.Body,{},void 0,this.props.pdf?(0,i.Z)(f.Z,{className:"sketchpad-download-link-btn",size:"large",variant:"secondary",block:!0,onClick:this.clickHide},void 0,(0,i.Z)("a",{className:"unstyled-link sketchpad-download-link",href:this.props.pdf,download:!0},void 0,r("download-original"))):null,this.state.ownerFile?(0,i.Z)(f.Z,{size:"large",variant:"secondary",block:!0,onClick:this.clickHide},void 0,(0,i.Z)("a",{className:"unstyled-link",href:n.server+"/"+this.state.ownerFile.filename,download:!0},void 0,r("download-instructor-annotations"),o||(o=(0,i.Z)("br",{})),(0,i.Z)("small",{},void 0,"(",r("last-updated"),": ",e.toDateString()+", "+e.toLocaleTimeString()," ",r("by")," ",t,")"))):null,(0,i.Z)(f.Z,{variant:"secondary",size:"large",onClick:this.handlePDFExport,block:!0},void 0,r("export-pdf")),(0,i.Z)(f.Z,{variant:"secondary",size:"large",onClick:this.handlePNGExport,block:!0},void 0,r("export-png"))))}}]),n}(p.Component);w.defaultProps={pdf:null,onHide:function(){}},t.default=w}}]);