import{a as f}from"./axios-G2rPRu76.js";import{p as b,m as v,ae as g,j as x,k,l as y,ak as V,af as B,B as T,d as r,ai as C,f as N,u as w,g as S,o as c,e as _,w as i,F,t as n,a,c as p,W as P}from"./index-PqEjC1nq.js";import{V as I,a as D}from"./VCardItem-UCKjAzrc.js";import{a as L}from"./VCard-qgUEiKC7.js";import"./VGrid-XMvTdHW4.js";import"./VImg-pQM36n5i.js";const R=b({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...v(),...g(),...x(),...k()},"VTable"),H=y()({name:"VTable",props:R(),setup(t,l){let{slots:e,emit:u}=l;const{themeClasses:s}=V(t),{densityClasses:d}=B(t);return T(()=>r(t.tag,{class:["v-table",{"v-table--fixed-height":!!t.height,"v-table--fixed-header":t.fixedHeader,"v-table--fixed-footer":t.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom,"v-table--hover":t.hover},s.value,d.value,t.class],style:t.style},{default:()=>{var o,m,h;return[(o=e.top)==null?void 0:o.call(e),e.default?r("div",{class:"v-table__wrapper",style:{height:C(t.height)}},[r("table",null,[e.default()])]):(m=e.wrapper)==null?void 0:m.call(e),(h=e.bottom)==null?void 0:h.call(e)]}})),{}}}),$=a("thead",null,[a("tr",null,[a("th",{class:"text-uppercase"}," Kategori "),a("th",{class:"text-uppercase text-center"}," Indikator "),a("th",{class:"text-uppercase text-center"}," Satuan "),a("th",{class:"text-uppercase text-center"}," Nilai Normal ")])],-1),j={class:"text-center"},z={class:"text-center"},A={class:"text-center"},E={__name:"LabValuesTable",setup(t){const l=N(null),e=w();var u=localStorage.getItem("token");return S(async()=>{if(u)try{const s=await f.get("/api/student/lab-values",{headers:{Authorization:`Bearer ${u}`}});l.value=s.data.data}catch(s){s.response&&s.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),e.push("/login"))}else e.push("/login")}),(s,d)=>(c(),_(H,null,{default:i(()=>[$,a("tbody",null,[(c(!0),p(F,null,P(l.value,o=>(c(),p("tr",{key:o.category_lab.name},[a("td",null,n(o.category_lab.name),1),a("td",j,n(o.indicator),1),a("td",z,n(o.unit),1),a("td",A,n(o.reference_value),1)]))),128))])]),_:1}))}},J={__name:"lab-values",setup(t){return(l,e)=>(c(),_(I,null,{default:i(()=>[r(D,{cols:"12"},{default:i(()=>[r(L,{title:"Nilai Normal Laboratorium",style:{color:"#0080ff"}},{default:i(()=>[r(E)]),_:1})]),_:1})]),_:1}))}};export{J as default};
