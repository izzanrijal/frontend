import{a as k,V as D}from"./VGrid-DG5gGNDb.js";import{_ as z,f,u as y,g as x,Y as T,Z as g,o as r,e as m,w as t,d as a,c as d,F as L,W as N,X as R,b as W,J as p,a as n,H as A,V as F,t as _,Q as H,R as E}from"./index-CwdUT3Mc.js";import{c as w,V as b,a as V,b as $}from"./VCardItem-C8_CdzPQ.js";import{V as v}from"./VCard-MJMcA4Aw.js";import"./VImg-D0oBA4sp.js";const I=i=>(H("data-v-8c894ba7"),i=i(),E(),i),q=I(()=>n("span",{style:{color:"#0080ff"}},"Upgrade Membership",-1)),P={class:"title-container",style:{padding:"20px"}},U={style:{color:"black"}},J={class:"status-text font-weight-semibold mb-1"},Q={class:"status-text-start font-weight-semibold mb-1"},X={key:0,class:"status-text-price font-weight-semibold mb-1"},Y={key:1,class:"status-text-free font-weight-semibold mb-1"},Z=I(()=>n("b",null,"Free",-1)),j=[Z],G={key:1,class:"status-text-current font-weight-semibold mb-1"},K=["innerHTML"],O={__name:"MembershipDashboard",setup(i){const c=f(null),u=y(),l=f(window.innerWidth);var o=localStorage.getItem("token");x(async()=>{if(o)try{const s=await k.get("https://gateway.berkompeten.com/api/student/membership",{headers:{Authorization:`Bearer ${o}`}});c.value=s.data.membership,console.log("Membership: ",c)}catch(s){s.response&&s.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),u.push("/login"))}else u.push("/login");window.addEventListener("resize",h)}),T(()=>{window.removeEventListener("resize",h)});const h=()=>{l.value=window.innerWidth},S=s=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(s),M=s=>s.length>50?s.substring(0,35)+"...":s,B=g(()=>l.value<768),C=g(()=>B.value?"Current&nbsp;Membership":"Current Membership");return(s,te)=>(r(),m(v,{class:"vcardtext-container"},{default:t(()=>[a(w,null,{default:t(()=>[q]),_:1}),a(b,null,{default:t(()=>[(r(!0),d(L,null,N(c.value,e=>(r(),m(V,{cols:"12",md:"6",key:e.id,class:"question-card"},{default:t(()=>[a(v,{class:"mb-4"},{default:t(()=>[a($,null,{append:t(()=>[e.is_current===!1&&e.is_can_upgrade===!0?(r(),m(R,{key:0,block:"",type:"submit",to:{path:"/membership/detail",query:{id:e.id}},color:e.is_active?"#0080ff":"#cccccc",class:"action-button"},{default:t(()=>[W(" View ")]),_:2},1032,["to","color"])):p("",!0),e.is_current===!0?(r(),d("p",G,[n("b",{innerHTML:A(C)},null,8,K)])):p("",!0)]),default:t(()=>[a(b,{align:"center",class:"d-flex flex-wrap row-item-parent"},{default:t(()=>[a(D,{color:e.is_active?"#0080ff":"#cccccc",rounded:"",size:"40",class:"elevation-2 avatar-icon"},{default:t(()=>[a(F,{size:"24",icon:"ri-apps-line",class:"icon"})]),_:2},1032,["color"]),n("div",P,[a(w,null,{default:t(()=>[n("span",U,_(e.name),1)]),_:2},1024),n("p",J," Periode Aktivasi: "+_(e.activation_period)+" Bulan ",1),n("p",Q," Deskripsi paket: "+_(M(e.description)),1),e.price!==0?(r(),d("p",X,[n("b",null,"Harga: "+_(S(e.price)),1)])):p("",!0),e.price===0?(r(),d("p",Y,j)):p("",!0)])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}},ee=z(O,[["__scopeId","data-v-8c894ba7"]]),ce={__name:"membership-dashboard",setup(i){const c=localStorage.getItem("token"),u=f(null),l=y();return x(async()=>{if(c)try{const o=await k.get("https://gateway.berkompeten.com/api/student/profile",{headers:{Authorization:`Bearer ${c}`}});u.value=o.data}catch(o){o.response&&o.response.status===401&&l.push("/login")}else l.push("/login")}),(o,h)=>(r(),m(b,{class:"match-height"},{default:t(()=>[a(V,{cols:"12",md:"12"},{default:t(()=>[a(ee)]),_:1})]),_:1}))}};export{ce as default};
