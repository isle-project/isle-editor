(window.webpackJsonp=window.webpackJsonp||[]).push([[755],{4058:function(t,e,n){"use strict";n.r(e);n(421);var r=n(414),o=n.n(r),i=n(416),a=n.n(i),s=n(424),c=n.n(s),u=n(418),l=n.n(u),f=n(419),d=n.n(f),p=n(417),h=n.n(p),g=n(412),y=n.n(g),m=(n(428),n(0)),v=n(404),k=n.n(v),b=n(1076),w=(n(437),n(433),n(430),n(438),n(439),n(407)),O=n.n(w),x=n(23);function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function R(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){y()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({margin:{top:20,bottom:30,left:50,right:50},xaxis:{orientation:"bottom"},yaxis:{orientation:"left"}},void 0===t?{}:t)}var D=function(t){l()(n,t);var e=P(n);function n(t){var r;return o()(this,n),(r=e.call(this,t)).opts=R(t.options),r}return a()(n,[{key:"componentDidMount",value:function(){this.chart=b.p(Object(x.findDOMNode)(this)).append("g").attr("transform","translate("+this.opts.margin.left+","+this.opts.margin.top+")"),this.initialize(this.chart,this.props.data,this.opts)}},{key:"componentDidUpdate",value:function(){this.update(this.chart,this.props.data,this.opts)}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.width,r=t.height,o=R(t.options),i="d3-plot";return e&&(i=i.concat(" ",this.props.className)),O()("svg",{className:i,width:n+o.margin.left+o.margin.right,height:r+o.margin.top+o.margin.bottom,style:{display:"block",margin:"auto"}})}}]),n}(m.Component);D.defaultProps={className:"",options:{}};var E=D,N=n(420),A=n(442);n(331);function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var T=function(t){l()(n,t);var e=B(n);function n(t){var r;return o()(this,n),r=e.call(this,t),y()(c()(r),"dragstarted",(function(t){b.d.active||r.simulation.alphaTarget(.3).restart(),t.fx=t.x,t.fy=t.y})),y()(c()(r),"dragged",(function(t){t.fx=b.d.x,t.fy=b.d.y})),y()(c()(r),"dragended",(function(t){b.d.active||r.simulation.alphaTarget(0),t.fx=null,t.fy=null})),r}return a()(n,[{key:"drawPlot",value:function(t,e){var n=t.append("g").attr("class","links").selectAll("line").data(e.links).enter().append("line").attr("stroke-width",2),r=t.append("g").attr("class","nodes").selectAll("circle").data(e.nodes).enter().append("circle").attr("r",5).call(b.c().on("start",this.dragstarted).on("drag",this.dragged).on("end",this.dragended));this.simulation.nodes(e.nodes).on("tick",(function(){n.attr("x1",(function(t){return t.source.x})).attr("y1",(function(t){return t.source.y})).attr("x2",(function(t){return t.target.x})).attr("y2",(function(t){return t.target.y})),r.attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y}))})),this.simulation.force("link").links(e.links),e.nodes=e.nodes.map((function(t){for(var n=0,r=0;r<e.links.length;r++)e.links[r].source.id!==t.id&&e.links[r].target.id!==t.id||(n+=1);return t.nEdges=n,t})),r.append("title").text((function(t){return N.c.t("Plotly:number-of-edges",{nEdges:t.nEdges})})),r.on("mouseover",(function(t){n.style("stroke-width",(function(e){return t===e.source||t===e.target?4:2})),n.style("stroke",(function(e){return t===e.source||t===e.target?"red":"#999"}))})),r.on("mouseout",(function(){n.style("stroke-width",2),n.style("stroke","#999")}))}},{key:"initialize",value:function(t,e,n){this.simulation=b.h().force("link",b.f().id((function(t){return t.id})).distance((function(){return 120}))).force("charge",b.g().strength((function(){return-10})).distanceMax((function(){return 500}))).force("center",b.e(this.props.width/2,this.props.height/2)),this.drawPlot(t,e)}},{key:"update",value:function(t,e,n){t.selectAll(".links").remove(),t.selectAll(".nodes").remove(),this.drawPlot(t,e),this.simulation.alphaTarget(.3).restart()}}]),n}(E);T.defaultProps={width:900,height:600},T.propTypes={data:k.a.shape({nodes:k.a.array,links:k.a.array}).isRequired,width:k.a.number,height:k.a.number};e.default=Object(A.a)(T)}}]);