import{a as v,V as S}from"./VGrid-B8R8YNtT.js";import{_ as q,f as g,u as A,N as M,g as R,o as p,c as k,a,d as e,w as t,X as N,b as I,V,t as u,F as b,h as z,e as B,R as $,S as j}from"./index-fhlnk4Mi.js";import{c as m,a as c,b as h,d as y,V as x}from"./VCard-Cs1JgbPP.js";import{V as D}from"./VChip-CMlxLwxF.js";import"./VImg-D_j0YhmE.js";import"./index-BGCj-zmm.js";const f=d=>($("data-v-79c6a267"),d=d(),j(),d),T={style:{"max-block-size":"300px","overflow-y":"auto"}},L={class:"me-n3",style:{padding:"20px"}},F={class:"me-n3",style:{display:"flex","flex-grow":"1",padding:"20px"}},E={style:{color:"#0080ff"}},X=f(()=>a("p",{style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},"Passing grade:",-1)),G=f(()=>a("p",{style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},[a("b",null,"66")],-1)),H=f(()=>a("p",{style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},"Soal yang dikerjakan:",-1)),J={style:{color:"#0080ff","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},K={style:{"max-block-size":"300px","overflow-y":"auto"}},O=f(()=>a("span",{style:{color:"#0080ff"}},"Analisis & Advice",-1)),U={class:"me-n3",style:{padding:"20px"}},W={class:"me-n3",style:{padding:"20px"}},Y=f(()=>a("span",{style:{color:"black"}},"List topik/diagnosis yang sebaiknya Anda tingkatkan pada latihan ini",-1)),Z={class:"d-flex align-center flex-wrap mb-3"},ee={class:"me-n3",style:{padding:"10px"}},te={style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},ae={__name:"QuestionResult",setup(d){const r=g({}),_=g([]),l=A();M(),g([]);var o=localStorage.getItem("token");const w=["Reparasi Paru","Reproduksi"];R(async()=>{await P(),await C()});const P=async()=>{if(o)try{const s=localStorage.getItem("paket"),n=await v.get("https://gateway.berkompeten.com/api/student/user/test/result?id="+s,{headers:{Authorization:`Bearer ${o}`}});r.value=n.data.data}catch(s){s.response&&s.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),l.push("/login"))}else l.push("/login")},C=async()=>{if(o)try{const s=localStorage.getItem("paket"),n=await v.get("https://gateway.berkompeten.com/api/student/user/skip/questions?id="+s,{headers:{Authorization:`Bearer ${o}`}});_.value=n.data.data}catch(s){s.response&&s.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),l.push("/login"))}else l.push("/login")},Q=async()=>{if(question_packet_id=localStorage.getItem("paket"),answer===null){errorMessage.value="Tolong pilih jawaban terlebih dahulu";return}if(answerValue===null){errorMessage.value="Tolong pilih seberapa yakin jawaban anda terlebih dahulu";return}if(question_id===null){errorMessage.value="question id is empty. please contact your administrator";return}try{l.push("/dashboard")}catch(s){console.error("answer failed:",s),s.response&&s.response.data?errorMessage.value=s.response.data.errors:errorMessage.value="An unexpected error occurred during login."}};return(s,n)=>(p(),k(b,null,[a("div",T,[e(x,{class:"outlined-card-item mb-4"},{default:t(()=>[e(m,{class:"text-left"},{append:t(()=>[e(N,{block:"",type:"submit",onClick:n[0]||(n[0]=i=>Q()),color:"#0080ff"},{default:t(()=>[I("Lihat Pembahasan Soal")]),_:1})]),default:t(()=>[a("div",L,[e(c,{align:"center",class:"d-flex flex-wrap row-item-parent"},{default:t(()=>[e(S,{color:"#0080ff",rounded:"",size:"40",class:"elevation-2"},{default:t(()=>[e(V,{size:"32",icon:"ri-apps-line"})]),_:1}),a("div",F,[e(h,{cols:"6",md:"6"},{default:t(()=>[e(y,null,{default:t(()=>[a("span",E,[a("b",null,"Nilai Anda "+u(r.value.score),1)])]),_:1}),e(c,{align:"left",style:{"justify-content":"flex-start"}},{default:t(()=>[e(h,{cols:"6",md:"6"},{default:t(()=>[X,G]),_:1}),e(h,{cols:"6",md:"6"},{default:t(()=>[H,a("p",J,u(r.value.total_answered)+" Soal",1)]),_:1})]),_:1})]),_:1})])]),_:1})])]),_:1})]),_:1})]),a("div",K,[e(x,{class:"outlined-card-item mb-4"},{default:t(()=>[e(m,null,{default:t(()=>[e(y,null,{default:t(()=>[O]),_:1}),a("div",U,[e(c,{align:"center",class:"d-flex flex-wrap row-item-parent"},{default:t(()=>[e(S,{color:"#0080ff",rounded:"",size:"40",class:"elevation-2"},{default:t(()=>[e(V,{size:"24",icon:"ri-apps-line"})]),_:1}),a("div",W,[e(y,null,{default:t(()=>[Y]),_:1})])]),_:1})])]),_:1}),e(c,{align:"center",class:"d-flex flex-wrap row-item"},{default:t(()=>[a("div",Z,[(p(),k(b,null,z(w,i=>e(D,{class:"d-flex flex-wrap v-item",color:"#0080ff",size:"small"},{default:t(()=>[I(u(i),1)]),_:2},1024)),64))])]),_:1})]),_:1})]),a("div",null,[e(x,{class:"outlined-card-item mb-4"},{default:t(()=>[e(m,{style:{"max-block-size":"300px","overflow-y":"auto"}},{default:t(()=>[(p(!0),k(b,null,z(_.value,(i,oe)=>(p(),B(m,{key:i.id,class:"outlined-card-item"},{default:t(()=>[a("div",ee,[e(c,{align:"center"},{default:t(()=>[a("p",te,u(i.question_number)+" "+u(i.question),1)]),_:2},1024)])]),_:2},1024))),128))]),_:1})]),_:1})])],64))}},se=q(ae,[["__scopeId","data-v-79c6a267"]]),ue={__name:"question-packet-result",setup(d){const r=localStorage.getItem("token"),_=g(null),l=A();return R(async()=>{if(r)try{const o=await v.get("https://gateway.berkompeten.com/api/student/profile",{headers:{Authorization:`Bearer ${r}`}});_.value=o.data}catch(o){o.response&&o.response.status===401&&l.push("/login")}else l.push("/login")}),(o,w)=>(p(),B(c,{class:"match-height"},{default:t(()=>[e(h,{cols:"12",md:"12"},{default:t(()=>[e(se)]),_:1})]),_:1}))}};export{ue as default};
