"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7820],{155022:function(e,t,n){n.r(t);var o=n(497326),r=n(894578),s=n(55196),a=n(202784),c=n(92601),l=n(213980),i=n.n(l),p=n(690299),f=n.n(p),u=Object.defineProperty,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,d=function(e,t,n){return t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},g=f()("isle:beacon-tooltip"),v=function(e){function t(t){var n,r,s,a;return n=e.call(this,t)||this,r=(0,o.Z)(n),a=function(e,t){g("Received action: "+e),n.props.onChange(e,t)},d(r,"symbol"!=typeof(s="handleChange")?s+"":s,a),n.state={show:!1},n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;setTimeout((function(){e.show()}),5e3)},n.show=function(){this.setState({show:!0})},n.render=function(){return this.state.show?a.createElement(a.Fragment,null,this.props.children,a.createElement(c.Z,function(e,t){for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(h)for(var o,r=(0,s.Z)(h(t));!(o=r()).done;)n=o.value,b.call(t,n)&&d(e,n,t[n]);return e}({callback:this.handleChange,content:this.props.content,event:this.props.event,placement:this.props.placement,title:this.props.title,showCloseButton:"click"===this.props.event,offset:this.props.offset,wrapperOptions:{offset:-22,placement:"top",position:!0}},this.props),a.createElement("button",{"aria-label":"Tooltip Beacon Button",className:"beacon-button"},a.createElement("span",{className:"beacon-inner"}),a.createElement("span",{className:"beacon-outer"})))):null},t}(a.Component);v.defaultProps={title:null,content:"`content` comes here...",event:"click",placement:"left",target:"",offset:15,onChange:function(){}},v.propTypes={title:i().oneOfType([i().string,i().node]),content:i().oneOfType([i().string,i().node]),event:i().oneOf(["click","hover"]),placement:i().oneOf(["top","top-start","top-end","bottom","bottom-end","left","left-start","left-end","right","right-start","right-end","auto","center"]),target:i().string,offset:i().number,onChange:i().func},t.default=v}}]);