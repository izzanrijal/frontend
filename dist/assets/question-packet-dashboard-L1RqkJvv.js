import{a as y}from"./axios-G2rPRu76.js";import{_ as I,f as v,u as x,g as V,o as s,e as c,w as a,F as m,X as g,b as f,J as u,V as S,d as t,t as h,a as k,c as i,W as b}from"./index-wfqFPGSU.js";import{V as _,a as C,b as j,c as z}from"./VCardItem-JRZGF4-y.js";import{a as w}from"./VCard-t7_qmCkG.js";import{V as $}from"./VGrid-EeefJUY2.js";import{V as D}from"./VChip-AUx1NKTC.js";import"./VImg-te7sidWk.js";import"./index-71cZYfEC.js";const N={class:"me-n3",style:{padding:"20px"}},q={style:{color:"black"}},A={key:0,style:{color:"#0080ff"},class:"font-weight-semibold mb-1"},F={key:1,style:{color:"#0080ff"},class:"font-weight-semibold mb-1"},L={key:2,style:{color:"#0080ff"},href:"javascript:void(0)"},M={class:"d-flex align-center flex-wrap mb-3"},Q={__name:"QuestionDashboard",setup(B){const l=v([]),n=x();var d=localStorage.getItem("token");V(async()=>{if(d)try{const r=await y.get("https://gateway.berkompeten.com/api/student/question-packet",{headers:{Authorization:`Bearer ${d}`}});l.value=r.data.data}catch(r){r.response&&r.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),n.push("/login"))}else n.push("/login")});const o=r=>{localStorage.setItem("paket",r),n.push("/detail")};return(r,T)=>(s(),c(w,{class:"vcardtext-container"},{default:a(()=>[t(_,null,{default:a(()=>[(s(!0),i(m,null,b(l.value,e=>(s(),c(C,{cols:"6",md:"6"},{default:a(()=>[t(w,{class:"mb-4"},{default:a(()=>[t(j,null,{append:a(()=>[e.is_accessed===!0&&e.is_can_be_done===!0&&e.answer===0?(s(),c(g,{key:0,block:"",type:"submit",onClick:p=>o(e.id),color:e.is_accessed?"#0080ff":"#cccccc"},{default:a(()=>[f(" Kerjakan Sekarang ")]),_:2},1032,["onClick","color"])):u("",!0),e.is_accessed===!0&&e.is_can_be_done===!0&&e.answer>0&&e.start_date!==null&&e.finish_date===null?(s(),c(g,{key:1,block:"",type:"submit",onClick:p=>o(e.id),color:e.is_accessed?"#0080ff":"#cccccc"},{default:a(()=>[f(" Lanjutkan ")]),_:2},1032,["onClick","color"])):u("",!0)]),default:a(()=>[t(_,{align:"center",class:"d-flex flex-wrap row-item-parent"},{default:a(()=>[t($,{color:e.is_accessed?"#0080ff":"#cccccc",rounded:"",size:"40",class:"elevation-2"},{default:a(()=>[t(S,{size:"24",icon:"ri-apps-line"})]),_:2},1032,["color"]),k("div",N,[t(z,null,{default:a(()=>[k("span",q,h(e.title),1)]),_:2},1024),e.is_accessed===!0&&e.is_can_be_done===!0&&e.answer===0?(s(),i("p",A," Belum dikerjakan ")):u("",!0),e.is_accessed===!0&&e.is_can_be_done===!0&&e.answer>0&&e.start_date!==null&&e.finish_date===null?(s(),i("p",F," Mulai dikerjakan: "+h(e.start_date),1)):u("",!0),e.is_accessed===!1?(s(),i("a",L,"Silahkan upgrade membership untuk melanjutkan")):u("",!0)])]),_:2},1024)]),_:2},1024),t(_,{align:"center",class:"d-flex flex-wrap row-item"},{default:a(()=>[k("div",M,[(s(!0),i(m,null,b(e.topics,p=>(s(),c(D,{class:"d-flex flex-wrap v-item",color:e.is_accessed?"#0080ff":"#cccccc",size:"small"},{default:a(()=>[f(h(p),1)]),_:2},1032,["color"]))),256))])]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}},R=I(Q,[["__scopeId","data-v-054b931b"]]),O={__name:"question-packet-dashboard",setup(B){const l=localStorage.getItem("token"),n=v(null),d=x();return V(async()=>{if(l)try{const o=await y.get("https://gateway.berkompeten.com/api/student/profile",{headers:{Authorization:`Bearer ${l}`}});n.value=o.data}catch(o){o.response&&o.response.status===401&&d.push("/login")}else d.push("/login")}),(o,r)=>(s(),c(_,{class:"match-height"},{default:a(()=>[t(C,{cols:"12",md:"12"},{default:a(()=>[t(R)]),_:1})]),_:1}))}};export{O as default};
