"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78905],{960226:function(e,t,n){n.r(t);var o=n(202784),l=n(213980),i=n.n(l),s=n(498614),a=n(770561),u=n(31071),r=n(998325);const c=({disabled:e,hasHints:t,onClick:n,t:l})=>{const[i,s]=(0,o.useState)(!1),c=o.createElement(u.Z,{id:"tooltip"},l("solution-available-tooltip"),t?l("solution-available-tooltip-hints"):null,".");return e?o.createElement(r.Z,{placement:"top",positionLeft:100,overlay:c,rootClose:!0},o.createElement("div",{style:{display:"inline-block"}},o.createElement(a.Z,{className:"solution-button",variant:"warning",size:"sm",disabled:!0,style:{pointerEvents:"none"}},l("show-solution")))):o.createElement("div",{style:{display:"inline-block"}},o.createElement(a.Z,{className:"solution-button",variant:"warning",size:"sm",onClick:()=>{s(!i),n()}},l(i?"hide-solution":"show-solution")))};c.propTypes={disabled:i().bool.isRequired,hasHints:i().bool,onClick:i().func.isRequired},c.defaultProps={hasHints:!0},t.default=(0,s.Zh)("solution-button")(c)}}]);