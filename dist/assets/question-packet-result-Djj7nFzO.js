import{a as v,V as S}from"./VGrid-ELKjoz3u.js";import{_ as M,f as m,u as A,M as q,g as R,o as p,c as h,a,d as e,w as t,X as $,b as I,V,t as u,F as b,W as z,e as B,Q as j,R as D}from"./index-guq3Ldae.js";import{b as k,V as c,a as g,c as y}from"./VCardItem-DJf8t_bW.js";import{a as x}from"./VCard-B5wwHZuQ.js";import{V as N}from"./VChip-CcSxKIn1.js";import"./VImg-0194FxvV.js";import"./index-B6zS2ObL.js";const f=d=>(j("data-v-bb0cc96e"),d=d(),D(),d),T={style:{"max-block-size":"300px","overflow-y":"auto"}},L={class:"me-n3",style:{padding:"20px"}},F={class:"me-n3",style:{display:"flex","flex-grow":"1",padding:"20px"}},E={style:{color:"#0080ff"}},W=f(()=>a("p",{style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},"Passing grade:",-1)),X=f(()=>a("p",{style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},[a("b",null,"66")],-1)),G=f(()=>a("p",{style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},"Soal yang dikerjakan:",-1)),H={style:{color:"#0080ff","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},J={style:{"max-block-size":"300px","overflow-y":"auto"}},K=f(()=>a("span",{style:{color:"#0080ff"}},"Analisis & Advice",-1)),O={class:"me-n3",style:{padding:"20px"}},U=f(()=>a("span",{style:{color:"black"}},"List topik/diagnosis yang sebaiknya Anda tingkatkan pada latihan ini",-1)),Y={class:"d-flex align-center flex-wrap mb-3"},Z={style:{"max-block-size":"300px","overflow-y":"auto"}},ee={class:"me-n3",style:{padding:"10px"}},te={style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},ae={__name:"QuestionResult",setup(d){const r=m({}),_=m([]),l=A();q(),m([]);var o=localStorage.getItem("token");const w=["Reparasi Paru","Reproduksi"];R(async()=>{await P(),await Q()});const P=async()=>{if(o)try{const s=localStorage.getItem("paket"),n=await v.get("https://gateway.berkompeten.com/api/student/user/test/result?id="+s,{headers:{Authorization:`Bearer ${o}`}});r.value=n.data.data}catch(s){s.response&&s.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),l.push("/login"))}else l.push("/login")},Q=async()=>{if(o)try{const s=localStorage.getItem("paket"),n=await v.get("https://gateway.berkompeten.com/api/student/user/skip/questions?id="+s,{headers:{Authorization:`Bearer ${o}`}});_.value=n.data.data}catch(s){s.response&&s.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),l.push("/login"))}else l.push("/login")},C=async()=>{if(question_packet_id=localStorage.getItem("paket"),answer===null){errorMessage.value="Tolong pilih jawaban terlebih dahulu";return}if(answerValue===null){errorMessage.value="Tolong pilih seberapa yakin jawaban anda terlebih dahulu";return}if(question_id===null){errorMessage.value="question id is empty. please contact your administrator";return}try{l.push("/dashboard")}catch(s){console.error("answer failed:",s),s.response&&s.response.data?errorMessage.value=s.response.data.errors:errorMessage.value="An unexpected error occurred during login."}};return(s,n)=>(p(),h(b,null,[a("div",T,[e(x,{class:"mb-4"},{default:t(()=>[e(k,{class:"text-left"},{append:t(()=>[e($,{block:"",type:"submit",onClick:n[0]||(n[0]=i=>C()),color:"#0080ff"},{default:t(()=>[I("Lihat Pembahasan Soal")]),_:1})]),default:t(()=>[a("div",L,[e(c,{align:"center",class:"d-flex flex-wrap row-item-parent"},{default:t(()=>[e(S,{color:"#0080ff",rounded:"",size:"40",class:"elevation-2"},{default:t(()=>[e(V,{size:"32",icon:"ri-apps-line"})]),_:1}),a("div",F,[e(g,{cols:"6",md:"6"},{default:t(()=>[e(y,null,{default:t(()=>[a("span",E,[a("b",null,"Nilai Anda "+u(r.value.score),1)])]),_:1}),e(c,{align:"left",style:{"justify-content":"flex-start"}},{default:t(()=>[e(g,{cols:"6",md:"6"},{default:t(()=>[W,X]),_:1}),e(g,{cols:"6",md:"6"},{default:t(()=>[G,a("p",H,u(r.value.total_answered)+" Soal",1)]),_:1})]),_:1})]),_:1})])]),_:1})])]),_:1})]),_:1})]),a("div",J,[e(x,{class:"mb-4"},{default:t(()=>[e(k,null,{default:t(()=>[e(y,null,{default:t(()=>[K]),_:1}),e(c,{align:"center",class:"d-flex flex-wrap row-item-parent"},{default:t(()=>[e(S,{color:"#0080ff",rounded:"",size:"40",class:"elevation-2"},{default:t(()=>[e(V,{size:"24",icon:"ri-apps-line"})]),_:1}),a("div",O,[e(y,null,{default:t(()=>[U]),_:1})])]),_:1})]),_:1}),e(c,{align:"center",class:"d-flex flex-wrap row-item"},{default:t(()=>[a("div",Y,[(p(),h(b,null,z(w,i=>e(N,{class:"d-flex flex-wrap v-item",color:"#0080ff",size:"small"},{default:t(()=>[I(u(i),1)]),_:2},1024)),64))])]),_:1})]),_:1})]),e(x,null,{default:t(()=>[a("div",Z,[(p(!0),h(b,null,z(_.value,(i,oe)=>(p(),B(k,{key:i.id,class:"outlined-card-item"},{default:t(()=>[a("div",ee,[e(c,{align:"center"},{default:t(()=>[a("p",te,u(i.question_number)+" "+u(i.question),1)]),_:2},1024)])]),_:2},1024))),128))])]),_:1})],64))}},se=M(ae,[["__scopeId","data-v-bb0cc96e"]]),pe={__name:"question-packet-result",setup(d){const r=localStorage.getItem("token"),_=m(null),l=A();return R(async()=>{if(r)try{const o=await v.get("https://gateway.berkompeten.com/api/student/profile",{headers:{Authorization:`Bearer ${r}`}});_.value=o.data}catch(o){o.response&&o.response.status===401&&l.push("/login")}else l.push("/login")}),(o,w)=>(p(),B(c,{class:"match-height"},{default:t(()=>[e(g,{cols:"12",md:"12"},{default:t(()=>[e(se)]),_:1})]),_:1}))}};export{pe as default};
