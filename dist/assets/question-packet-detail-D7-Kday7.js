import{a as h,V as C}from"./VGrid-DwH1Aa-h.js";import{_ as T,f as V,u as q,N as z,g as B,o as r,e as m,w as e,d as t,J as f,a as o,t as I,V as j,c as b,K as u,X as y,b as w,R as $,S as D}from"./index-C3gGsb3o.js";import{a as d,b as v,V as g,c as x,d as A}from"./VCard-ClZ7l9kC.js";import"./VImg-qVwLEo-D.js";const k=_=>($("data-v-c6e53104"),_=_(),D(),_),M={style:{color:"black","font-size":"large"}},N={class:"me-n3",style:{padding:"20px"}},P={style:{color:"gray"}},Q={key:0,style:{color:"black"},href:"javascript:void(0)"},R={key:1,style:{color:"black"},href:"javascript:void(0)"},K=k(()=>o("div",{class:"d-flex align-center flex-wrap mb-3"},[o("p",null,[o("b",null,"Detail")])],-1)),J=k(()=>o("li",null,"Selesaikan paket soal ini untuk mendapatkan analisis yang dipersonalisasi khusus untuk Anda.",-1)),E=k(()=>o("li",null,"Tidak perlu terburu-buru—Anda dapat melanjutkannya kapan saja. Namun, pastikan paket selesai sebelum tes aktual dimulai. Semakin cepat selesai, semakin cepat pula hasil dan analisis Anda tersedia.",-1)),G=k(()=>o("p",null,'Perhatian: Kerjakan soal ini dengan jujur dan tanpa bantuan untuk hasil yang akurat. Jika tidak tahu jawabannya, tandai "Tidak Tahu" agar prioritas pembelajaran Anda dapat dipetakan dengan tepat.',-1)),H=k(()=>o("li",null,"Tinjau jawaban Anda dan lihat pembahasan lengkap untuk setiap soal.",-1)),L={class:"d-flex flex-column row-item",style:{padding:"10px"}},X={key:0,class:"mb-0"},F=k(()=>o("span",{style:{color:"#0080ff","margin-block-end":"0"}},"Perhatian: Halaman berikutnya akan menampilkan soal dan pembahasan dari paket ini. Gunakan sebagai bahan pembelajaran dan evaluasi untuk memahami soal-soal yang belum Anda kuasai.",-1)),O=[F],U={__name:"QuestionDetail",setup(_){const a=V({}),c=q();z();var p=localStorage.getItem("token");B(async()=>{if(p){console.log("question packet detail run: ");try{const l=localStorage.getItem("paket");console.log("question packet detail id: ",l);const n=await h.get("https://gateway.berkompeten.com/api/student/question-packet/detail?id="+l,{headers:{Authorization:`Bearer ${p}`}});console.log("question packet detail resp: ",n.data.data),a.value=n.data.data,console.log("question packet detail: ",a)}catch(l){l.response&&l.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),c.push("/login"))}}else c.push("/login")});const i=async(l,n)=>{try{const s=await h.post("https://gateway.berkompeten.com/api/student/user/do-the-test",{question_packet_id:l},{headers:{Authorization:`Bearer ${p}`}});console.log("response open: ",s),localStorage.setItem("paket",l),localStorage.setItem("number",n),localStorage.removeItem("answer"),localStorage.removeItem("answerValue"),a.is_done?c.push("/soal-review"):c.push("/soal")}catch(s){console.error("answer failed:",s),s.response&&s.response.data?errorMessage.value=s.response.data.errors:errorMessage.value="An unexpected error occurred during login."}},S=async(l,n)=>{try{const s=await h.post("https://gateway.berkompeten.com/api/student/user/do-the-test",{question_packet_id:l},{headers:{Authorization:`Bearer ${p}`}});console.log("response detail review: ",s),localStorage.setItem("paket",l),localStorage.setItem("number",n),localStorage.removeItem("answer"),localStorage.removeItem("answerValue"),c.push("/soal-review")}catch(s){console.error("answer failed:",s),s.response&&s.response.data?errorMessage.value=s.response.data.errors:errorMessage.value="An unexpected error occurred during login."}};return(l,n)=>(r(),m(f(g),{class:"vcardtext-container"},{default:e(()=>[t(d,null,{default:e(()=>[t(v,{cols:"12",md:"12"},{default:e(()=>[t(f(g),{class:"mb-4"},{default:e(()=>[t(x,null,{append:e(()=>[]),default:e(()=>[t(A,null,{default:e(()=>[o("span",M,I(a.value.name),1)]),_:1}),t(v,{cols:"12",md:"12"},{default:e(()=>[t(f(g),{class:"mb-4"},{default:e(()=>[t(x,null,{default:e(()=>[t(d,{align:"center",class:"d-flex flex-wrap row-item-parent"},{default:e(()=>[t(C,{color:"#0080ff",rounded:"",size:"40",class:"elevation-2"},{default:e(()=>[t(j,{size:"24",icon:"ri-apps-line"})]),_:1}),o("div",N,[t(A,null,{default:e(()=>[o("span",P,[o("b",null,"Total Soal: "+I(a.value.total_question),1)])]),_:1}),a.value.is_done===!1?(r(),b("p",Q,"Siapkan diri Anda untuk mengerjakan paket soal yang telah dirancang untuk menguji pemahaman Anda pada berbagai topik.")):u("",!0),a.value.is_done===!0?(r(),b("p",R,"Anda telah selesai mengerjakan soal-soal dalam paket ini. Kini saatnya untuk meninjau jawaban dan memahami pembahasan untuk meningkatkan pemahaman Anda.")):u("",!0)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(f(g),{align:"center",class:"d-flex flex-wrap row-item"},{default:e(()=>[K,a.value.is_done===!1?(r(),m(d,{key:0,align:"center",class:"d-flex flex-wrap row-item"},{default:e(()=>[J,E,G]),_:1})):u("",!0),a.value.is_done===!0?(r(),m(d,{key:1,align:"center",class:"d-flex flex-wrap row-item"},{default:e(()=>[H]),_:1})):u("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),t(d,null,{default:e(()=>[t(v,{cols:"12",md:"12"},{default:e(()=>[t(f(g),{class:"mb-4"},{default:e(()=>[t(x,null,{default:e(()=>[t(d,{class:"d-flex flex-wrap row-item-parent"},{default:e(()=>[t(j,{size:"24",icon:"ri-error-warning-line",color:"#0080ff",class:"mr-2",style:{"margin-block-start":"10px"}}),o("div",L,[a.value.is_done===!0?(r(),b("p",X,O)):u("",!0)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{align:"center",class:"d-flex flex-wrap",style:{"margin-inline":"1px","padding-block-start":"20px"}},{default:e(()=>[a.value.is_done===!1&&a.value.next_question===1?(r(),m(y,{key:0,block:"",type:"submit",onClick:n[0]||(n[0]=s=>i(a.value.id,1)),color:"#0080ff"},{default:e(()=>[w(" Mulai Test ")]),_:1})):u("",!0),a.value.is_done===!1&&a.value.next_question!==1?(r(),m(y,{key:1,block:"",type:"submit",onClick:n[1]||(n[1]=s=>i(a.value.id,a.value.next_question)),color:"#0080ff"},{default:e(()=>[w(" Lanjutkan Test ")]),_:1})):u("",!0),a.value.is_done===!0?(r(),m(y,{key:2,block:"",type:"submit",onClick:n[2]||(n[2]=s=>S(a.value.id,1)),color:"#0080ff"},{default:e(()=>[w(" Detail & Pembahasan ")]),_:1})):u("",!0)]),_:1})]),_:1}))}},W=T(U,[["__scopeId","data-v-c6e53104"]]),te={__name:"question-packet-detail",setup(_){const a=localStorage.getItem("token"),c=V(null),p=q();return B(async()=>{if(a)try{const i=await h.get("https://gateway.berkompeten.com/api/student/profile",{headers:{Authorization:`Bearer ${a}`}});c.value=i.data}catch(i){i.response&&i.response.status===401&&p.push("/login")}else p.push("/login")}),(i,S)=>(r(),m(d,{class:"match-height"},{default:e(()=>[t(v,{cols:"12",md:"12"},{default:e(()=>[t(W)]),_:1})]),_:1}))}};export{te as default};
