(self.webpackChunk=self.webpackChunk||[]).push([[1572],{293933:function(e,r,t){"use strict";t.r(r);t(382139);var i=t(858255),n=t(264659),a=t(904730),l=t(673989),s=t(175663),o=t(750591),u=t(575630),c=t(151119),g=(t(319371),t(202784)),h=(t(213980),t(166244)),f=t.n(h),d=t(800562),b=t.n(d),p=t(737535),y=t.n(p);function v(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=(0,u.Z)(e);if(r){var n=(0,u.Z)(this).constructor;t=Reflect.construct(i,arguments,n)}else t=i.apply(this,arguments);return(0,o.Z)(this,t)}}var R=(0,h.WidthProvider)(f()),m=function(e){(0,s.Z)(t,e);var r=v(t);function t(e){var i;(0,n.Z)(this,t),i=r.call(this,e),(0,c.Z)((0,l.Z)(i),"enlargeDivFactory",(function(e){return function(){var r=b()(i.state.layout),t=b()(i.state.enlarged),n=i.props,a=n.itemHeight,l=n.enlargedHeight,s=n.isDraggable,o=n.isResizable;if(i.state.enlarged[e])for(var u=0;u<r.length;u++)r[u]={i:String(u),x:4*u%12,y:y()(u/a)*a,w:4,h:a,isDraggable:s,isResizable:o},t[u]=!1;else for(var c=0;c<r.length;c++)c<e?(r[c]={i:String(c),x:4*c%12,y:y()(c/a)*a,w:4,h:a,isDraggable:s,isResizable:o},t[c]=!1):c===e?(r[c]={i:String(c),x:0,y:y()(c/a)*a,w:12,h:l,isDraggable:s,isResizable:o},t[e]=!0):(r[c]={i:String(c),x:4*(c-e)%12,y:y()(c/a)*a+l,w:4,h:a,isDraggable:s,isResizable:o},t[c]=!1);i.setState({layout:r,enlarged:t})}}));var a=e.children.map((function(r,t){var n=i.props.itemHeight;return{i:String(t),x:4*t%12,y:y()(t/n)*n,w:4,h:n,isDraggable:e.isDraggable,isResizable:e.isResizable}}));return i.state={layout:a,enlarged:[],children:e.children},i}return(0,a.Z)(t,[{key:"render",value:function(){var e=this;return(0,i.Z)(R,{className:"layout",layout:this.state.layout,cols:12,rowHeight:30},void 0,this.props.enlargeable?this.props.children.map((function(r,t){return(0,i.Z)("button",{onClick:e.enlargeDivFactory(t),style:{border:"2px solid darkgray",cursor:"zoom-in",background:"none"}},t,r)})):this.props.children.map((function(e,r){return(0,i.Z)("div",{style:{border:"2px solid darkgray"}},r,e)})))}}],[{key:"getDerivedStateFromProps",value:function(e,r){if(e.children!==r.children){var t=e.itemHeight;return{layout:e.children.map((function(r,i){return{i:String(i),x:4*i%12,y:y()(i/t)*t,w:4,h:t,isDraggable:e.isDraggable,isResizable:e.isResizable}})),children:e.children}}return null}}]),t}(g.Component);m.defaultProps={enlargeable:!0,enlargedHeight:18,isDraggable:!1,isResizable:!1,itemHeight:9},r.default=m}}]);