(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{3953:function(e,t,r){"use strict";r.r(t);r(423);var n=r(406),s=r.n(n),o=r(414),i=r.n(o),a=r(418),l=r.n(a),c=r(427),p=r.n(c),u=r(420),f=r.n(u),v=r(421),d=r.n(v),h=r(419),m=r.n(h),y=r(413),g=r.n(y),w=(r(681),r(528),r(0)),b=(r(404),r(867)),x=r.n(b),k=r(922),N=r.n(k),C=r(630),O=r.n(C),L=r(448);r(354);function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m()(e);if(t){var s=m()(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return d()(this,r)}}function R(e){return x()(e*O.a/180)}function S(e){return N()(e*O.a/180)}var A=s()("div",{className:"seal-outer-border"}),E=s()("div",{className:"seal-fine-border"}),I=s()("div",{className:"seal-logo"}),P=s()("div",{className:"seal-lower-logo"}),B=function(e){f()(r,e);var t=T(r);function r(e){var n;return i()(this,r),n=t.call(this,e),g()(p()(n),"curvedText",(function(e,t,r,n){var o=r/((e=e.split("")).length-1),i=184-r/2*-1;i-=n;var a=[],l=t/2;return e.forEach((function(e){var t=R(i),r=S(i),n=-1*i-180,c={position:"absolute",left:l*t+l+4,top:l*r+l,transformOrigin:"0% 0%",transform:n="rotate("+n+"deg)"},p=s()("p",{style:c},void 0,e);a.push(p),i-=o})),a})),g()(p()(n),"curvedInvertedText",(function(e,t,r,n){var o=r/((e=e.split("")).length-1),i=0-r/2,a=[],l=t/2;return e.forEach((function(e){var t=R(i),r=S(i),n=-1*i,c={position:"absolute",left:l*t+l+4,top:l*r+l,transformOrigin:"50% 50%",transform:n="rotate("+n+"deg)"},p=s()("p",{style:c},void 0,e);a.push(p),i+=o})),a})),g()(p()(n),"getUpperLine",(function(){var e=n.curvedText(n.props.upper,195,n.props.upperArc,0);return s()("div",{},void 0,e)})),g()(p()(n),"getLowerLine",(function(){var e=n.curvedInvertedText(n.props.lower,180,n.props.lowerArc,0);return s()("div",{},void 0,e)})),g()(p()(n),"triggerClick",(function(){n.props.onClick(),n.props.removable&&n.setState({exit:!0})})),n.state={exit:!1},n}return l()(r,[{key:"getStyle",value:function(){var e=this.props.style||{};return this.props.removable&&(this.state.exit?e.pointerEvents="none":e.cursor="pointer"),this.props.active?(e.opacity=1,e.filter="grayscale(0%)",e.WebkitFilter="grayscale(0%)",this.props.scale&&(e.transform?e.transform+="scale("+this.props.scale+")":e.transform="scale("+this.props.scale+")")):(e.WebkitFilter="grayscale(100%)",e.filter="grayscale(100%)",e.opacity=.3,this.props.scale&&(e.transform?e.transform+="scale("+this.props.scale+")":e.transform="scale("+this.props.scale+")")),e}},{key:"render",value:function(){var e=this.getStyle(),t=this.props.innerStyle,r="seal-container";return this.state.exit&&(r+=" seal-exit"),s()("div",{role:"button",tabIndex:0,onClick:this.triggerClick,onKeyPress:this.triggerClick,style:e,className:r},void 0,A,E,s()("div",{style:t,className:"seal-inner-circle"}),this.props.noOrnaments?null:I,this.props.noOrnaments?null:P,s()("div",{className:"seal-wrapper"},void 0,s()("div",{className:"seal-title"},void 0,this.props.title)),s()("div",{className:"seal-lower-line"},void 0,this.getLowerLine()),s()("div",{className:"seal-upper"},void 0,this.getUpperLine()))}}]),r}(w.Component);B.defaultProps={active:!0,onClick:function(){},scale:null,lower:"The lower text",lowerArc:150,removable:!1,style:null,innerStyle:{},upper:"The upper text",upperArc:150,title:"Enter a title",noOrnaments:!1},t.default=Object(L.a)(B)}}]);