import{a as v,V as B}from"./VGrid-CPnHHgB5.js";import{_ as D,f,u as y,g as V,Y as C,o as r,e as h,w as t,d as a,c as u,F as z,W as M,X as N,b as R,J as p,V as W,a as n,t as _,Q as A,R as F}from"./index-BzSAjW4c.js";import{c as w,V as b,a as x,b as E}from"./VCardItem-CriPEkRZ.js";import{V as k}from"./VCard-ZSa02kXq.js";import"./VImg-BSrRv7hL.js";const g=i=>(A("data-v-acd1bd88"),i=i(),F(),i),L=g(()=>n("span",{style:{color:"#0080ff"}},"Upgrade Membership",-1)),T={class:"title-container",style:{padding:"20px"}},$={style:{color:"black"}},q={class:"status-text font-weight-semibold mb-1"},P={class:"status-text-start font-weight-semibold mb-1"},U={key:0,class:"status-text-price font-weight-semibold mb-1"},H={key:1,class:"status-text-free font-weight-semibold mb-1"},J=g(()=>n("b",null,"Free",-1)),Q=[J],X={key:1,class:"status-text-current font-weight-semibold mb-1 line-break"},Y=g(()=>n("b",null,"Current Membership",-1)),j=[Y],G={__name:"MembershipDashboard",setup(i){const c=f(null),l=y(),d=f(window.innerWidth);var o=localStorage.getItem("token");V(async()=>{if(o)try{const s=await v.get("https://gateway.berkompeten.com/api/student/membership",{headers:{Authorization:`Bearer ${o}`}});c.value=s.data.membership,console.log("Membership: ",c)}catch(s){s.response&&s.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),l.push("/login"))}else l.push("/login");window.addEventListener("resize",m)}),C(()=>{window.removeEventListener("resize",m)});const m=()=>{d.value=window.innerWidth},I=s=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(s),S=s=>s.length>50?s.substring(0,35)+"...":s;return(s,O)=>(r(),h(k,{class:"vcardtext-container"},{default:t(()=>[a(w,null,{default:t(()=>[L]),_:1}),a(b,null,{default:t(()=>[(r(!0),u(z,null,M(c.value,e=>(r(),h(x,{cols:"12",md:"6",key:e.id,class:"question-card"},{default:t(()=>[a(k,{class:"mb-4"},{default:t(()=>[a(E,null,{append:t(()=>[e.is_current===!1&&e.is_can_upgrade===!0?(r(),h(N,{key:0,block:"",type:"submit",to:{path:"/membership/detail",query:{id:e.id}},color:e.is_active?"#0080ff":"#cccccc",class:"action-button"},{default:t(()=>[R(" View ")]),_:2},1032,["to","color"])):p("",!0),e.is_current===!0?(r(),u("p",X,j)):p("",!0)]),default:t(()=>[a(b,{align:"center",class:"d-flex flex-wrap row-item-parent"},{default:t(()=>[a(B,{color:e.is_active?"#0080ff":"#cccccc",rounded:"",size:"40",class:"elevation-2 avatar-icon"},{default:t(()=>[a(W,{size:"24",icon:"ri-apps-line",class:"icon"})]),_:2},1032,["color"]),n("div",T,[a(w,null,{default:t(()=>[n("span",$,_(e.name),1)]),_:2},1024),n("p",q," Periode Aktivasi: "+_(e.activation_period)+" Bulan ",1),n("p",P," Deskripsi paket: "+_(S(e.description)),1),e.price!==0?(r(),u("p",U,[n("b",null,"Harga: "+_(I(e.price)),1)])):p("",!0),e.price===0?(r(),u("p",H,Q)):p("",!0)])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}},K=D(G,[["__scopeId","data-v-acd1bd88"]]),oe={__name:"membership-dashboard",setup(i){const c=localStorage.getItem("token"),l=f(null),d=y();return V(async()=>{if(c)try{const o=await v.get("https://gateway.berkompeten.com/api/student/profile",{headers:{Authorization:`Bearer ${c}`}});l.value=o.data}catch(o){o.response&&o.response.status===401&&d.push("/login")}else d.push("/login")}),(o,m)=>(r(),h(b,{class:"match-height"},{default:t(()=>[a(x,{cols:"12",md:"12"},{default:t(()=>[a(K)]),_:1})]),_:1}))}};export{oe as default};
