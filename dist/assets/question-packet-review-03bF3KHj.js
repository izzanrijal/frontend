import{a as m}from"./axios-G2rPRu76.js";import{_ as z,f as _,u as x,M as Q,g as S,o as g,e as k,w as e,H as R,d as t,t as c,a,X as y,b as h,F as j,W as A,c as C,Q as P,R as q}from"./index-bDRdYSbl.js";import{b as v,c as M,V as d,a as p}from"./VCardItem-Tij5nU0x.js";import{V as T}from"./VImg-NJk-b_MQ.js";import{a as $}from"./VCard-NhbFWMF9.js";import"./VGrid-MKyws-9Y.js";const N="/assets/review-wTFXgN6Z.png",b=i=>(P("data-v-26343e36"),i=i(),q(),i),D=b(()=>a("span",{style:{color:"#0080ff","font-size":"larger"}},[a("b",null,"Review kembali hasil pengerjaan test Anda")],-1)),F={class:"me-n3",style:{padding:"20px"}},L=b(()=>a("p",{style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"}," Soal yang telah dikerjakan: ",-1)),X={style:{color:"#0080ff","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},E=b(()=>a("p",{style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"}," Soal yang belum dikerjakan: ",-1)),H={style:{color:"red","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},K={style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},W={style:{color:"#0080ff"}},Z={style:{"max-block-size":"300px","overflow-y":"auto"}},G={class:"me-n3",style:{padding:"10px"}},J={style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},O={__name:"QuestionReview",setup(i){const n=_({}),u=_([]),l=x();Q(),_([]);var o=localStorage.getItem("token");S(async()=>{await w(),await I()});const w=async()=>{if(o)try{const s=localStorage.getItem("paket"),r=await m.get("https://gateway.berkompeten.com/api/student/user/test/review?id="+s,{headers:{Authorization:`Bearer ${o}`}});n.value=r.data.data}catch(s){s.response&&s.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),l.push("/login"))}else l.push("/login")},I=async()=>{if(o)try{const s=localStorage.getItem("paket"),r=await m.get("https://gateway.berkompeten.com/api/student/user/skip/questions?id="+s,{headers:{Authorization:`Bearer ${o}`}});u.value=r.data.data}catch(s){s.response&&s.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),l.push("/login"))}else l.push("/login")},V=()=>{l.push("/soal")},B=async()=>{const s=localStorage.getItem("paket");try{console.log("paket id: ",s);const r=await m.post("https://gateway.berkompeten.com/api/student/user/finish-the-test",{question_packet_id:s},{headers:{Authorization:`Bearer ${o}`}});l.push("/result")}catch(r){console.error("answer failed:",r),r.response&&r.response.data?errorMessage.value=r.response.data.errors:errorMessage.value="An unexpected error occurred during login."}};return(s,r)=>(g(),k($,null,{default:e(()=>[t(v,{class:"text-center"},{default:e(()=>[t(T,{src:R(N),style:{"block-size":"150px","inline-size":"150px"},class:"mx-auto"},null,8,["src"]),t(M,null,{default:e(()=>[D]),_:1}),a("div",F,[t(d,{align:"center"},{default:e(()=>[t(p,{cols:"6",md:"6"},{default:e(()=>[L,a("p",X,c(n.value.total_answered),1)]),_:1}),t(p,{cols:"6",md:"6"},{default:e(()=>[E,a("p",H,c(n.value.total_skip),1)]),_:1})]),_:1}),t(d,{class:"justify-center"},{default:e(()=>[t(p,{cols:"6",class:"mb-1"},{default:e(()=>[t(y,{onClick:B,color:"#0080ff",block:""},{default:e(()=>[h("Selesaikan Tes")]),_:1})]),_:1}),t(p,{cols:"6",class:"mb-1"},{default:e(()=>[t(y,{onClick:V,color:"#0080ff",variant:"outlined",block:""},{default:e(()=>[h(" Kembali Mengerjakan ")]),_:1})]),_:1})]),_:1}),t(d,{class:"d-flex flex-wrap justify-center"},{default:e(()=>[a("p",K,[h(" Berikut di bawah ini adalah soal-soal yang belum diberikan jawaban : "),a("span",W,"Ada "+c(n.value.total_skip)+" Soal",1)])]),_:1})])]),_:1}),a("div",Z,[(g(!0),C(j,null,A(u.value,(f,Y)=>(g(),k(v,{key:f.id,class:"outlined-card-item"},{default:e(()=>[a("div",G,[t(d,{align:"center"},{default:e(()=>[a("p",J,c(f.question_number)+" "+c(f.question),1)]),_:2},1024)])]),_:2},1024))),128))])]),_:1}))}},U=z(O,[["__scopeId","data-v-26343e36"]]),le={__name:"question-packet-review",setup(i){const n=localStorage.getItem("token"),u=_(null),l=x();return S(async()=>{if(n)try{const o=await m.get("https://gateway.berkompeten.com/api/student/profile",{headers:{Authorization:`Bearer ${n}`}});u.value=o.data}catch(o){o.response&&o.response.status===401&&l.push("/login")}else l.push("/login")}),(o,w)=>(g(),k(d,{class:"match-height"},{default:e(()=>[t(p,{cols:"12",md:"12"},{default:e(()=>[t(U)]),_:1})]),_:1}))}};export{le as default};
