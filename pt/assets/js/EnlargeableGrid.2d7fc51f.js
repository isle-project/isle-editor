(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{6346:function(e,r,t){"use strict";t.r(r);t(421);var n=t(407),i=t.n(n),a=t(414),l=t.n(a),s=t(416),o=t.n(s),u=t(424),c=t.n(u),g=t(418),h=t.n(g),d=t(419),f=t.n(d),p=t(417),b=t.n(p),y=t(412),v=t.n(y),R=(t(428),t(0)),m=(t(404),t(1331)),w=t.n(m),D=t(515),z=t.n(D),x=t(452),k=t.n(x);function S(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=b()(e);if(r){var i=b()(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return f()(this,t)}}var H=Object(m.WidthProvider)(w.a),P=function(e){h()(t,e);var r=S(t);function t(e){var n;l()(this,t),n=r.call(this,e),v()(c()(n),"enlargeDivFactory",(function(e){return function(){var r=z()(n.state.layout),t=z()(n.state.enlarged),i=n.props,a=i.itemHeight,l=i.enlargedHeight,s=i.isDraggable,o=i.isResizable;if(n.state.enlarged[e])for(var u=0;u<r.length;u++)r[u]={i:String(u),x:4*u%12,y:k()(u/a)*a,w:4,h:a,isDraggable:s,isResizable:o},t[u]=!1;else for(var c=0;c<r.length;c++)c<e?(r[c]={i:String(c),x:4*c%12,y:k()(c/a)*a,w:4,h:a,isDraggable:s,isResizable:o},t[c]=!1):c===e?(r[c]={i:String(c),x:0,y:k()(c/a)*a,w:12,h:l,isDraggable:s,isResizable:o},t[e]=!0):(r[c]={i:String(c),x:4*(c-e)%12,y:k()(c/a)*a+l,w:4,h:a,isDraggable:s,isResizable:o},t[c]=!1);n.setState({layout:r,enlarged:t})}}));var i=e.children.map((function(r,t){var i=n.props.itemHeight;return{i:String(t),x:4*t%12,y:k()(t/i)*i,w:4,h:i,isDraggable:e.isDraggable,isResizable:e.isResizable}}));return n.state={layout:i,enlarged:[],children:e.children},n}return o()(t,[{key:"render",value:function(){var e=this;return i()(H,{className:"layout",layout:this.state.layout,cols:12,rowHeight:30},void 0,this.props.enlargeable?this.props.children.map((function(r,t){return i()("button",{onClick:e.enlargeDivFactory(t),style:{border:"2px solid darkgray",cursor:"zoom-in",background:"none"}},t,r)})):this.props.children.map((function(e,r){return i()("div",{style:{border:"2px solid darkgray"}},r,e)})))}}],[{key:"getDerivedStateFromProps",value:function(e,r){if(e.children!==r.children){var t=e.itemHeight;return{layout:e.children.map((function(r,n){return{i:String(n),x:4*n%12,y:k()(n/t)*t,w:4,h:t,isDraggable:e.isDraggable,isResizable:e.isResizable}})),children:e.children}}return null}}]),t}(R.Component);P.defaultProps={enlargeable:!0,enlargedHeight:18,isDraggable:!1,isResizable:!1,itemHeight:9},r.default=P}}]);