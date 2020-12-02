/*! For license information please see dll.Polaroid.js.LICENSE.txt */
(window.webpackJsonp_name_dll=window.webpackJsonp_name_dll||[]).push([[101],{2894:function(t,e,n){"use strict";n.r(e);var i=n(22),o=n.n(i),r=n(2895),a={insert:"head",singleton:!1};o()(r.default,a);e.default=r.default.locals||{}},2895:function(t,e,n){"use strict";n.r(e);var i=n(23),o=n.n(i)()(!1);o.push([t.i,".polaroid {\n\tbackground-image: url(https://isle.heinz.cmu.edu/Summertime_lp_PolaroidFrame.png);\n\tbackground-size: 100% auto;\n\ttransform: rotate(1.7deg);\n\tz-index: 10;\n}\n\n.polaroid-wrapper {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.polaroid-image {\n\tposition: absolute;\n\tleft: 5.7%;\n\ttop: 4.5%;\n\twidth: 88.6%;\n\theight: 79%;\n\tbox-shadow: inset 0 0 3px 1px rgba(0, 0, 0, 0.5);\n\toverflow: hidden;\n\tfilter: sepia(80%);\n\ttransition: filter 0.5s;\n}\n\n.polaroid-touched {\n\tfilter: sepia(0);\n}\n\n.polaroid img {\n\tdisplay: block;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n\n.clickable-polaroid {\n\tfilter: sepia(0);\n\tcursor: pointer;\n}\n\n.polaroid-pin {\n\tposition: absolute;\n\tleft: 40%;\n\ttop: -18px;\n\twidth: 64px;\n\theight: 64px;\n\tbackground-size: 100% 100%;\n\tbackground-image: url(https://isle.heinz.cmu.edu/Summertime_Pin-PNG-Picture.png);\n}\n\n.polaroid-stain {\n\tposition: absolute;\n\tleft: 45%;\n\ttop: 16%;\n\topacity: 0.5;\n\twidth: 160px;\n\theight: 160px;\n\tbackground-image: url(https://isle.heinz.cmu.edu/Summertime_lp_kaffee3.png);\n\tbackground-size: 100% auto;\n\tz-index: 5;\n\tfilter: saturate(20%);\n\ttransform: rotate(20deg);\n}\n",""]),e.default=o},901:function(t,e,n){"use strict";n.r(e);var i=n(14),o=n.n(i),r=n(13),a=n.n(r),s=n(10),u=n.n(s),l=n(15),c=n.n(l),p=n(16),h=n.n(p),d=n(8),g=n.n(d),f=n(7),m=n.n(f),b=n(0),w=n.n(b),v=n(1),y=n.n(v),k=n(817),O=n.n(k);n(2894);function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=g()(t);if(e){var o=g()(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return h()(this,n)}}var x=function(t){c()(n,t);var e=j(n);function n(t){var i;return o()(this,n),i=e.call(this,t),m()(u()(i),"trigger",(function(){i.props.onClick&&i.props.onClick(i.props.id)})),m()(u()(i),"touch",(function(){i.setState({touched:!0})})),m()(u()(i),"untouch",(function(){i.setState({touched:!1})})),i.state={height:"100%",width:"auto",touched:!1},i}return a()(n,[{key:"componentDidMount",value:function(){var t=this;if(this.props.image){var e=new Image;e.src=this.props.image,e.onload=function(){this.height>this.width?t.setFormat("high"):t.setFormat("wide")}}}},{key:"setFormat",value:function(t){var e="100%",n="auto";"wide"===t&&(e="auto",n="100%"),this.setState({width:e,height:n})}},{key:"render",value:function(){var t=this.state.width+" "+this.state.height,e={backgroundImage:"url("+this.props.image+")",backgroundSize:t,backgroundPosition:"center"},n="polaroid";this.props.onClick&&(n+=" clickable-polaroid");var i="polaroid-image";!0===this.state.touched&&(i="polaroid-image polaroid-touched");var o=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){m()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.props.style);o.width=this.props.width,o.height=1.1*o.width;var r=w.a.createElement("div",{id:this.props.id,role:"button",tabIndex:0,onMouseOver:this.touch,onFocus:this.touch,onMouseOut:this.untouch,onBlur:this.untouch,onClick:this.trigger,onKeyPress:this.trigger,style:o,className:n},w.a.createElement("div",{className:"polaroid-wrapper"},this.props.stain?w.a.createElement("div",{className:"polaroid-stain"}):null,w.a.createElement("div",{style:e,className:i}),this.props.showPin?w.a.createElement("div",{className:"polaroid-pin"}):null));return this.props.draggable?w.a.createElement(O.a,null,r):r}}]),n}(b.Component);x.propTypes={image:y.a.string,draggable:y.a.bool,showPin:y.a.bool,width:y.a.number,style:y.a.object,onClick:y.a.func},x.defaultProps={image:null,draggable:!1,showPin:!1,width:350,style:{},onClick:null},e.default=x}}]);