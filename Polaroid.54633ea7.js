(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{6591:function(t,e,o){"use strict";o.r(e);o(413),o(410),o(397),o(396),o(408),o(377),o(368),o(378);var r=o(366),i=o.n(r),n=o(370),s=o.n(n),a=o(371),c=o.n(a),u=o(388),h=o.n(u),p=o(375),l=o.n(p),d=o(376),f=o.n(d),g=o(374),v=o.n(g),w=o(372),y=o.n(w),b=o(0),m=(o(358),o(969)),O=o.n(m);o(300);function k(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=v()(t);if(e){var i=v()(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return f()(this,o)}}var j=i()("div",{className:"polaroid-stain"}),D=i()("div",{className:"polaroid-pin"}),S=function(t){l()(o,t);var e=P(o);function o(t){var r;return s()(this,o),r=e.call(this,t),y()(h()(r),"trigger",(function(){r.props.onClick&&r.props.onClick(r.props.id)})),y()(h()(r),"touch",(function(){r.setState({touched:!0})})),y()(h()(r),"untouch",(function(){r.setState({touched:!1})})),r.state={height:"100%",width:"auto",touched:!1},r}return c()(o,[{key:"componentDidMount",value:function(){var t=this;if(this.props.image){var e=new Image;e.src=this.props.image,e.onload=function(){this.height>this.width?t.setFormat("high"):t.setFormat("wide")}}}},{key:"setFormat",value:function(t){var e="100%",o="auto";"wide"===t&&(e="auto",o="100%"),this.setState({width:e,height:o})}},{key:"render",value:function(){var t=this.state.width+" "+this.state.height,e={backgroundImage:"url("+this.props.image+")",backgroundSize:t,backgroundPosition:"center"},o="polaroid";this.props.onClick&&(o+=" clickable-polaroid");var r="polaroid-image";!0===this.state.touched&&(r="polaroid-image polaroid-touched");var n=function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?k(Object(o),!0).forEach((function(e){y()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):k(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},this.props.style);n.width=this.props.width,n.height=1.1*n.width;var s=i()("div",{id:this.props.id,role:"button",tabIndex:0,onMouseOver:this.touch,onFocus:this.touch,onMouseOut:this.untouch,onBlur:this.untouch,onClick:this.trigger,onKeyPress:this.trigger,style:n,className:o},void 0,i()("div",{className:"polaroid-wrapper"},void 0,this.props.stain?j:null,i()("div",{style:e,className:r}),this.props.showPin?D:null));return this.props.draggable?i()(O.a,{},void 0,s):s}}]),o}(b.Component);S.defaultProps={image:null,draggable:!1,showPin:!1,width:350,style:{},onClick:null},e.default=S}}]);