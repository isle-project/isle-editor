"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27529],{817070:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(202784),s=t(213980),a=t.n(s),l=t(198),o=t(123103),c=t(300198),i=t.n(c),p=t(287013),u=t.n(p);var f=function(e){return e=i()(e),u()(e,",")?e.substring(0,e.indexOf(",")):e.substring(e.lastIndexOf(" ")+1)};const h={background:"red",color:"white"};class d extends r.Component{render(){const{t:e}=this.props,n=this.context;if(!n.config.references)return r.createElement("span",{style:h},e("no-references"));const t=n.config.references[this.props.citeKey];if(!t)return r.createElement("span",{style:h},e("key-not-found"));if(!t.author)return r.createElement("span",{style:h},e("no-author"));let s=t.author.split("and"),a="";a=s.length>2?f(s[0])+" et al.":s.length>1?f(s[0])+e("and")+f(s[1]):f(s[0]);const l=this.props.label?`, ${this.props.label}`:"";return this.props.parens?r.createElement("span",null,"(",a,", ",t.year,l,")"):r.createElement("span",null,a," (",t.year,l,")")}}d.propTypes={citeKey:a().string.isRequired,parens:a().bool,label:a().string},d.defaultProps={parens:!1,label:""},d.contextType=o.Z;var b=(0,l.Z)("citation")(d)}}]);