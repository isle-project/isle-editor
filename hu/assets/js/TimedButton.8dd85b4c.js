"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9253],{339974:function(t,e,i){i.r(e);var n=i(497326),a=i(894578),s=i(202784),r=i(213980),o=i.n(r),l=i(690299),c=i.n(l),u=i(770561),d=i(557106),p=i.n(d),m=Object.defineProperty,f=function(t,e,i){return function(t,e,i){e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i}(t,"symbol"!=typeof e?e+"":e,i),i},h=c()("isle:timed-button"),b=function(t){function e(e){var i;return i=t.call(this,e)||this,f((0,n.Z)(i),"refDimensions",(function(t){if(t){h("Show dimensions...");var e=t.getBoundingClientRect().width;i.setState({width:e})}})),f((0,n.Z)(i),"trigger",(function(){i.props.autoActivate?(i.props.onClick(),i.setState({waiting:!0}),i.start()):i.props.onClick((function(t){!1!==t&&(i.setState({waiting:!0}),i.start())}))})),i.state={timeLeft:e.duration,waiting:!e.disabled,width:100},i}(0,a.Z)(e,t);var i=e.prototype;return i.componentDidMount=function(){!1===this.state.waiting&&this.start()},i.componentWillUnmount=function(){clearInterval(this.countdown)},i.start=function(){var t=this;this.setState({waiting:!1}),this.countdown=setInterval((function(){t.setState({timeLeft:p()(0,t.state.timeLeft-1)}),0===t.state.timeLeft&&(clearInterval(t.countdown),t.setState({waiting:!0,timeLeft:t.props.duration}))}),1e3)},i.render=function(){var t=this.props.disabled||!this.state.waiting,e={marginLeft:3,width:this.state.width},i={marginLeft:(1-this.state.timeLeft/this.props.duration)*this.state.width};return s.createElement("div",{className:"timed-button-container"},this.props.disabled?null:s.createElement("div",{style:e,className:"timed-button-remaining"},s.createElement("div",{className:"timed-button-bar"},s.createElement("div",{style:i,className:"timed-button-bar-overlay"}))),s.createElement("div",{className:this.props.block?"d-grid":""},s.createElement(u.Z,{className:this.props.className,size:this.props.size,type:this.props.type,ref:this.refDimensions,disabled:t,onClick:this.trigger,variant:this.props.variant,style:this.props.style},this.props.children)))},e}(s.Component);b.propTypes={block:o().bool,duration:o().number,className:o().string,disabled:o().bool,onClick:o().func,size:o().string,type:o().string,variant:o().string,autoActivate:o().bool,style:o().object},b.defaultProps={block:!1,className:"",disabled:!1,duration:3,onClick:function(){},size:null,type:null,variant:null,autoActivate:!0,style:{}},e.default=b},770561:function(t,e,i){var n=i(72779),a=i.n(n),s=i(202784),r=i(247830),o=i(429658),l=i(552322);const c=s.forwardRef((({as:t,bsPrefix:e,variant:i,size:n,active:s,className:c,...u},d)=>{const p=(0,o.vE)(e,"btn"),[m,{tagName:f}]=(0,r.FT)({tagName:t,...u}),h=f;return(0,l.jsx)(h,{...m,...u,ref:d,className:a()(c,p,s&&"active",i&&`${p}-${i}`,n&&`${p}-${n}`,u.href&&u.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=c}}]);