(self.webpackChunk=self.webpackChunk||[]).push([[8780],{231118:function(t,e,i){"use strict";i.r(e);i(382139);var n,r=i(858255),c=i(264659),o=i(904730),s=i(175663),u=i(750591),l=i(575630),a=i(202784);i(213980);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=(0,l.Z)(t);if(e){var r=(0,l.Z)(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return(0,u.Z)(this,i)}}var f=function(t){(0,s.Z)(i,t);var e=h(i);function i(t){var n;return(0,c.Z)(this,i),(n=e.call(this)).state={visible:!1,children:t.children},n}return(0,o.Z)(i,[{key:"componentDidMount",value:function(){this.props.active&&this.setTimer()}},{key:"componentDidUpdate",value:function(t){(this.props.children!==t.children&&this.props.active||this.props.active&&this.props.active!==t.active)&&this.setTimer()}},{key:"componentWillUnmount",value:function(){clearTimeout(this._timer)}},{key:"setTimer",value:function(){var t=this;null!==this._timer&&clearTimeout(this._timer),this._timer=setTimeout((function(){t.setState({visible:!0}),t._timer=null}),this.props.delay)}},{key:"render",value:function(){return this.state.visible?(0,r.Z)(a.Fragment,{},void 0,this.props.children):n||(n=(0,r.Z)("span",{}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.children!==e.children?{visible:!1,children:t.children}:null}}]),i}(a.Component);f.defaultProps={active:!1,delay:1e3},e.default=f}}]);