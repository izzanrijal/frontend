import{a as b}from"./VGrid-B1zQc1GJ.js";import{p as g,m as x,ag as v,j as k,k as y,l as V,am as B,ah as T,B as C,d as s,ak as w,f as N,u as p,g as I,o as u,e as f,w as n,a,c as h,F as S,W as F,t as i,_ as P,b as z,X as D,V as L}from"./index-DsvoQyog.js";import{V as R,c as $,a as j}from"./VCardItem-YBvThzs1.js";import{a as H}from"./VCard-Be--pGNW.js";import"./VImg-5c_635YS.js";const A=g({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...x(),...v(),...k(),...y()},"VTable"),E=V()({name:"VTable",props:A(),setup(t,r){let{slots:e,emit:c}=r;const{themeClasses:o}=B(t),{densityClasses:d}=T(t);return C(()=>s(t.tag,{class:["v-table",{"v-table--fixed-height":!!t.height,"v-table--fixed-header":t.fixedHeader,"v-table--fixed-footer":t.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom,"v-table--hover":t.hover},o.value,d.value,t.class],style:t.style},{default:()=>{var l,m,_;return[(l=e.top)==null?void 0:l.call(e),e.default?s("div",{class:"v-table__wrapper",style:{height:w(t.height)}},[s("table",null,[e.default()])]):(m=e.wrapper)==null?void 0:m.call(e),(_=e.bottom)==null?void 0:_.call(e)]}})),{}}}),K=a("thead",null,[a("tr",null,[a("th",{class:"text-uppercase"}," Kategori "),a("th",{class:"text-uppercase text-center"}," Indikator "),a("th",{class:"text-uppercase text-center"}," Satuan "),a("th",{class:"text-uppercase text-center"}," Nilai Normal ")])],-1),M={class:"text-center"},U={class:"text-center"},W={class:"text-center"},X={__name:"LabValuesTable",setup(t){const r=N(null),e=p();var c=localStorage.getItem("token");return I(async()=>{if(c)try{const o=await b.get("https://gateway.berkompeten.com/api/student/lab-values",{headers:{Authorization:`Bearer ${c}`}});r.value=o.data.data}catch(o){o.response&&o.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),e.push("/login"))}else e.push("/login")}),(o,d)=>(u(),f(E,null,{default:n(()=>[K,a("tbody",null,[(u(!0),h(S,null,F(r.value,l=>(u(),h("tr",{key:l.category_lab.name},[a("td",null,i(l.category_lab.name),1),a("td",M,i(l.indicator),1),a("td",U,i(l.unit),1),a("td",W,i(l.reference_value),1)]))),128))])]),_:1}))}},q={class:"d-flex justify-between align-right",style:{padding:"10px"}},G={__name:"lab-values",setup(t){const r=p(),e=()=>{r.go(-1)};return(c,o)=>(u(),f(R,null,{default:n(()=>[s(j,{cols:"12"},{default:n(()=>[s(H,{style:{color:"#0080ff"}},{default:n(()=>[a("div",q,[s($,{class:"col-md-11"},{default:n(()=>[z("Nilai Normal Laboratorium")]),_:1}),s(D,{onClick:e,class:"mb-1",variant:"outlined",style:{"block-size":"40px","inline-size":"40px","text-align":"end"}},{default:n(()=>[s(L,{size:"24",icon:"ri-close-fill"})]),_:1})]),s(X)]),_:1})]),_:1})]),_:1}))}},ee=P(G,[["__scopeId","data-v-89ba77b7"]]);export{ee as default};
