"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87453],{340552:function(e,t,l){l.r(t);var n=l(202784),s=l(213980),o=l.n(s),c=l(690299),a=l.n(c),i=l(498614),r=l(588703),p=l.n(r),u=l(112114);const h=a()("isle:switch"),m=({active:e,tooltip:t,tooltipPos:l,className:s,style:o,onChange:c,children:a})=>{const[r,m]=(0,n.useState)(0),{t:y}=(0,i.$G)("general"),g=n.Children.map(a,((e,t)=>{const l={style:{}};return h(`Check whether idx = ${t} is equal to pos = ${r}`),l.style.display=t!==r?"none":"inline",n.cloneElement(e,l)})),k=(0,n.useCallback)((()=>{if(!p()(a))return null;const e=r+1;h("Handle click: New position is "+e),e>=a.length?(m(0),c(0)):(m(e),c(e))}),[a,r,c]);let C=e?"switch active":"switch";if(s&&(C+=" "+s),!e)return n.createElement("span",{className:C,style:o},g);const d=n.createElement("span",{role:"button",tabIndex:0,className:C,onClick:k,onKeyPress:k,style:o},g);return null===t&&(t=y("click-to-cycle-through-options")),""!==t&&e?n.createElement(u.Z,{placement:l,tooltip:t},d):d};m.propTypes={active:o().bool,tooltip:o().string,tooltipPos:o().string,className:o().string,style:o().object,onChange:o().func},m.defaultProps={active:!0,tooltip:null,tooltipPos:"top",className:"",style:{},onChange(){}},t.default=m}}]);