(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{4054:function(t,e,r){"use strict";r.r(e);r(421),r(437),r(433),r(430),r(438),r(439);var n=r(407),o=r.n(n),c=r(414),i=r.n(c),a=r(416),u=r.n(a),s=r(424),f=r.n(s),p=r(418),l=r.n(p),d=r(419),y=r.n(d),g=r(417),v=r.n(g),O=r(412),b=r.n(O),h=(r(465),r(428),r(0)),m=(r(404),r(1332)),j=r.n(m),w=r(4115),P=r(1061),D=r.n(P),x=r(6324),C=r(6325),R=r(573),k=r.n(R),S=r(23),B=r(4607),E=r(4608);function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(Object(r),!0).forEach((function(e){b()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=v()(t);if(e){var o=v()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y()(this,r)}}var J={border:"1px dashed gray",padding:"0.5rem 1rem",marginBottom:".5rem",backgroundColor:"white",cursor:"move"},M={hover:function(t,e,r){var n=e.getItem().index,o=t.index;if(n!==o){var c=Object(S.findDOMNode)(r).getBoundingClientRect(),i=(c.bottom-c.top)/2,a=e.getClientOffset().y-c.top;n<o&&a<i||n>o&&a>i||(t.moveCard(n,o),e.getItem().index=o)}}},W=function(t){l()(r,t);var e=T(r);function r(){return i()(this,r),e.apply(this,arguments)}return u()(r,[{key:"render",value:function(){var t=this.props,e=t.text,r=t.isDragging?0:1;return(0,t.connectDragSource)((0,t.connectDropTarget)(o()("div",{style:N(N({},J),{},{opacity:r})},void 0,e)))}}]),r}(h.Component),q=Object(B.a)("card",{beginDrag:function(t){return{id:t.id,index:t.index}}},(function(t,e){return{connectDragSource:t.dragSource(),isDragging:e.isDragging()}}))(Object(E.a)("card",M,(function(t){return{connectDropTarget:t.dropTarget()}}))(W));function z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?z(Object(r),!0).forEach((function(e){b()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function F(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=v()(t);if(e){var o=v()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y()(this,r)}}var G=D()()?C.a:x.a,H=function(t){l()(r,t);var e=F(r);function r(t){var n;return i()(this,r),n=e.call(this,t),b()(f()(n),"moveCard",(function(t,e){var r=n.state.cards.slice(),o=r[t];r.splice(t,1),r.splice(e,0,o),n.setState({cards:r},(function(){n.props.onChange(n.state.cards)}))})),n.state={cards:t.shuffle?j()(n.props.data):n.props.data},n}return u()(r,[{key:"componentDidMount",value:function(){this.props.onInit(this.state.cards)}},{key:"render",value:function(){var t=this,e=this.state.cards;return o()(w.a,{backend:G},void 0,o()("div",{className:this.props.className,style:A({maxWidth:"600px",margin:"0 auto 10px"},this.props.style)},void 0,e.map((function(e,r){return e?o()(q,{index:r,id:e.id,text:e.text,moveCard:t.props.disabled?k.a:t.moveCard},e.id):null}))))}}]),r}(h.Component);H.defaultProps={onChange:function(){},onInit:function(){},shuffle:!1,disabled:!1,className:"",style:{}};e.default=H}}]);