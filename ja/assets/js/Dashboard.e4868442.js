"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26362],{250327:function(e,t,s){s.r(t);var n=s(202784),r=s(213980),a=s.n(r),i=s(690299),o=s.n(i),l=s(498614),p=s(770561),h=s(790817),d=s(409961),c=s.n(d),u=s(700601),m=s.n(u),y=s(351375),b=s(506078),g=s(440835),f=s(658774),C=s(369701),N=s(430391),v=s(985122),Z=s(123103),E=s(691334),x=s(741082),k=s(487890),w=Object.defineProperty,I=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,A=(e,t,s)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,$=(e,t)=>{for(var s in t||(t={}))O.call(t,s)&&A(e,s,t[s]);if(I)for(var s of I(t))S.call(t,s)&&A(e,s,t[s]);return e},P=(e,t,s)=>(A(e,"symbol"!=typeof t?t+"":t,s),s);const T=o()("isle:dashboard");class _ extends n.Component{constructor(e){super(e),P(this,"handleClick",(()=>{const e=new Array(this.nArgs);for(let t=0;t<this.nArgs;t++)e[t]=this.state[t];this.props.autoUpdate||this.props.logAction(E.ot,e),this.props.onGenerate(...e)})),P(this,"getCounter",(()=>(void 0===this._counter?this._counter=0:this._counter+=1,this._counter))),P(this,"handleFieldChange",((e,t)=>{T(`Setting ${e} to ${t}`);const s={};s[e]=t,this.setState(s,(()=>{this.props.autoUpdate&&this.handleClick()}))})),P(this,"registerChildren",((e,t)=>e?(T(`Registering ${n.Children.count(e)} children...`),n.Children.map(e,(e=>{if(n.isValidElement(e)){const t={};let s=[];if(e.type===y.Z||e.type===b.Z||e.type===g.Z||e.type===f.Z||e.type===C.Z||e.type===N.Z||e.type===v.Z||"CheckboxInput"===e.type.name||"NumberInput"===e.type.name||"SelectInput"===e.type.name||"SliderInput"===e.type.name||"TextInput"===e.type.name||"TextArea"===e.type.name||"Input"===e.type.name||"ProportionsInput"===e.type.name){T("Encountering an input element...");const s=this.getCounter();t.onChange=t=>{this.handleFieldChange(s,t),e.props.onChange(t)}}return e.props&&e.props.children&&(s=this.registerChildren(e.props.children)),T("Clone child element with new properties..."),n.cloneElement(e,t,...s)}return e}))):null));const t={};this.nArgs=0;const s=e=>{e&&n.Children.forEach(e,(e=>{c()(e)||(m()(e.props,"defaultValue")&&(t[this.nArgs]=e.props.defaultValue,this.nArgs+=1),m()(e.props,"children")&&s(e.props.children))}))};s(e.children),T("Initial state: %s",JSON.stringify(t)),this.state=t}componentDidMount(){this.props.autoStart&&this.handleClick()}render(){return this._counter=void 0,this._children=this.registerChildren(this.props.children),n.createElement(h.Z,{className:`dashboard ${this.props.className}`,style:$({maxWidth:this.props.maxWidth},this.props.style)},this.props.title?n.createElement(h.Z.Header,{as:"h4"},this.props.title):null,n.createElement(h.Z.Body,{className:this.props.bodyClassName},n.createElement("p",null,this.props.description),this._children,this.props.autoUpdate?n.createElement("span",null):n.createElement(p.Z,{variant:"primary",disabled:this.props.disabled,onClick:this.handleClick},this.props.label||this.props.t("generate"))))}}_.defaultProps={autoStart:!0,autoUpdate:!1,description:"",disabled:!1,label:null,maxWidth:600,className:"",bodyClassName:"d-grid gap-3",style:{},onGenerate(){},title:""},_.propTypes={autoStart:a().bool,autoUpdate:a().bool,description:a().oneOfType([a().string,a().node]),disabled:a().bool,label:a().string,maxWidth:a().number,className:a().string,bodyClassName:a().string,style:a().object,onGenerate:a().func,title:a().oneOfType([a().string,a().node])},_.contextType=Z.Z,t.default=(0,k.D)("dashboard")((0,l.Zh)("dashboard")((0,x.W)(_)))},770561:function(e,t,s){var n=s(72779),r=s.n(n),a=s(202784),i=s(247830),o=s(429658),l=s(552322);const p=a.forwardRef((({as:e,bsPrefix:t,variant:s,size:n,active:a,className:p,...h},d)=>{const c=(0,o.vE)(t,"btn"),[u,{tagName:m}]=(0,i.FT)({tagName:e,...h}),y=m;return(0,l.jsx)(y,{...u,...h,ref:d,className:r()(p,c,a&&"active",s&&`${c}-${s}`,n&&`${c}-${n}`,h.href&&h.disabled&&"disabled")})}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=p}}]);