"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6670],{64235:function(e,t,a){a.r(t);var r=a(202784),n=a(690299),l=a.n(n),c=a(213980),o=a.n(c),s=a(376699),u=a(770561),i=a(409961),v=a.n(i),m=a(262600),f=a(476709),d=a(24551),p=a(907756),h=a(267682),b=a(382617),y=a(10206),E=l()("isle:revealer"),g=(0,d.Z)("revealer"),Z=function(e){var t=e.message,a=e.show,n=e.children,l=(0,r.useRef)(e.id||g({message:t,show:a})),c=(0,r.useContext)(h.Z),o=(0,s.$)("revealer").t,i=(0,r.useState)(a),d=i[0],Z=i[1],k=(0,r.useState)(a),w=k[0],N=k[1],C=(0,r.useState)(null),X=C[0],P=C[1];a!==w&&(Z(a),N(a)),(0,r.useEffect)((function(){var e,t=function(){if(c&&c.metadata&&c.metadata.revealer&&c.metadata.revealer[l.current]){var e=c.metadata.revealer[l.current][c.cohort];void 0===e&&(e=c.metadata.revealer[l.current].all),!0!==e&&!1!==e||Z(e)}};return c&&(t(),E("Subscribe revealer with ID: "+l),e=c.subscribe((function(e,a){if(e===y.$L)P(null);else if(e===y.KI)t();else if(e===y.Wh&&a.id===l.current){var r=a.value;E("Received action for cohort "+r+": "),!r||c.cohort&&c.cohort===r?a.type===b.X2?(E("Reveal content for "+l.current+"..."),Z(!0)):a.type===b.X_&&(E("Hide content for "+l.current+"..."),Z(!1)):X===r&&(a.type===b.X2?(E("Reveal content of "+l.current+" for cohort "+r+"..."),Z(!0)):a.type===b.X_&&(E("Hide content of "+l.current+" for cohort "+r+"..."),Z(!1)))}}))),function(){e&&e()}}),[l,X,c]);var R=function(e){var t=e.target.value;(t!==X||"all"===t&&v()(X))&&(E("Handle cohort change: "+t),P("all"===t?null:t))},S=c.cohorts||[],x=r.createElement("h3",{className:"center"},t||o("message"));return E("showChildren: "+d),r.createElement(r.Fragment,null,r.createElement(f.Z,{owner:!0,banner:null},r.createElement(m.Z,{className:"center revealer-panel"},r.createElement(u.Z,{className:"revealer-button",onClick:function(){var e,t=!d;Z(t),e=c&&c.metadata&&c.metadata.revealer&&c.metadata.revealer[l.current]?c.metadata.revealer[l.current]:{},t?(c.log({id:l.current,type:b.X2,value:X},"members"),e[X||"all"]=!0,c.updateMetadata("revealer",l.current,e)):(c.log({id:l.current,type:b.X_,value:X},"members"),e[X||"all"]=!1,c.updateMetadata("revealer",l.current,e))}},o(d?"hide":"reveal")),o("contents-of"),r.createElement("i",null,l.current)," ",o(d?"from":"to"),r.createElement("select",{className:"revealer-select",onChange:R,onBlur:R,onClick:p.Z,value:X||"all"},r.createElement("option",{value:"all"},o("all-students")),S.map((function(e,t){return r.createElement("option",{key:t,value:e.title},e.title)}))))),d?null:x,r.createElement("div",{className:"revealer outer-element",style:{display:d?"inherit":"none"}},n))};Z.defaultProps={message:null,show:!1},Z.propTypes={message:o().oneOfType([o().string,o().node]),show:o().bool},t.default=Z},907756:function(e,t){t.Z=function(e){e.stopPropagation()}},770561:function(e,t,a){var r=a(807896),n=a(231461),l=a(72779),c=a.n(l),o=a(202784),s=a(429658),u=a(482695),i=["bsPrefix","variant","size","active","className","block","type","as"],v=o.forwardRef((function(e,t){var a=e.bsPrefix,l=e.variant,v=e.size,m=e.active,f=e.className,d=e.block,p=e.type,h=e.as,b=(0,n.Z)(e,i),y=(0,s.vE)(a,"btn"),E=c()(f,y,m&&"active",l&&y+"-"+l,d&&y+"-block",v&&y+"-"+v);if(b.href)return o.createElement(u.Z,(0,r.Z)({},b,{as:h,ref:t,className:c()(E,b.disabled&&"disabled")}));t&&(b.ref=t),p?b.type=p:h||(b.type="button");var g=h||"button";return o.createElement(g,(0,r.Z)({},b,{className:E}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=v}}]);