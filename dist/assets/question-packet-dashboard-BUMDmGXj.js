import{a as y,V as I}from"./VGrid-ELKjoz3u.js";import{_ as S,f as v,u as x,g as V,o as s,e as c,w as a,d as t,c as u,F as g,W as m,X as b,b as f,J as i,V as j,a as h,t as k}from"./index-guq3Ldae.js";import{V as _,a as C,b as z,c as $}from"./VCardItem-DJf8t_bW.js";import{a as w}from"./VCard-B5wwHZuQ.js";import{V as D}from"./VChip-CcSxKIn1.js";import"./VImg-0194FxvV.js";import"./index-B6zS2ObL.js";const N={class:"me-n3",style:{padding:"20px"}},q={style:{color:"black"}},A={key:0,style:{color:"#0080ff"},class:"font-weight-semibold mb-1"},F={key:1,style:{color:"#0080ff"},class:"font-weight-semibold mb-1"},L={key:2,style:{color:"#0080ff"},href:"javascript:void(0)"},M={class:"d-flex align-center flex-wrap mb-3"},Q={__name:"QuestionDashboard",setup(B){const l=v([]),n=x();var d=localStorage.getItem("token");V(async()=>{if(d)try{const r=await y.get("https://gateway.berkompeten.com/api/student/question-packet",{headers:{Authorization:`Bearer ${d}`}});l.value=r.data.data}catch(r){r.response&&r.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),n.push("/login"))}else n.push("/login")});const o=r=>{localStorage.setItem("paket",r),n.push("/detail")};return(r,T)=>(s(),c(w,{class:"vcardtext-container"},{default:a(()=>[t(_,null,{default:a(()=>[(s(!0),u(g,null,m(l.value,e=>(s(),c(C,{cols:"6",md:"6"},{default:a(()=>[t(w,{class:"mb-4"},{default:a(()=>[t(z,null,{append:a(()=>[e.is_accessed===!0&&e.is_can_be_done===!0&&e.answer===0?(s(),c(b,{key:0,block:"",type:"submit",onClick:p=>o(e.id),color:e.is_accessed?"#0080ff":"#cccccc"},{default:a(()=>[f(" Kerjakan Sekarang ")]),_:2},1032,["onClick","color"])):i("",!0),e.is_accessed===!0&&e.is_can_be_done===!0&&e.answer>0&&e.start_date!==null&&e.finish_date===null?(s(),c(b,{key:1,block:"",type:"submit",onClick:p=>o(e.id),color:e.is_accessed?"#0080ff":"#cccccc"},{default:a(()=>[f(" Lanjutkan ")]),_:2},1032,["onClick","color"])):i("",!0)]),default:a(()=>[t(_,{align:"center",class:"d-flex flex-wrap row-item-parent"},{default:a(()=>[t(I,{color:e.is_accessed?"#0080ff":"#cccccc",rounded:"",size:"40",class:"elevation-2"},{default:a(()=>[t(j,{size:"24",icon:"ri-apps-line"})]),_:2},1032,["color"]),h("div",N,[t($,null,{default:a(()=>[h("span",q,k(e.title),1)]),_:2},1024),e.is_accessed===!0&&e.is_can_be_done===!0&&e.answer===0?(s(),u("p",A," Belum dikerjakan ")):i("",!0),e.is_accessed===!0&&e.is_can_be_done===!0&&e.answer>0&&e.start_date!==null&&e.finish_date===null?(s(),u("p",F," Mulai dikerjakan: "+k(e.start_date),1)):i("",!0),e.is_accessed===!1?(s(),u("a",L,"Silahkan upgrade membership untuk melanjutkan")):i("",!0)])]),_:2},1024)]),_:2},1024),t(_,{align:"center",class:"d-flex flex-wrap row-item"},{default:a(()=>[h("div",M,[(s(!0),u(g,null,m(e.topics,p=>(s(),c(D,{class:"d-flex flex-wrap v-item",color:e.is_accessed?"#0080ff":"#cccccc",size:"small"},{default:a(()=>[f(k(p),1)]),_:2},1032,["color"]))),256))])]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}},R=S(Q,[["__scopeId","data-v-054b931b"]]),H={__name:"question-packet-dashboard",setup(B){const l=localStorage.getItem("token"),n=v(null),d=x();return V(async()=>{if(l)try{const o=await y.get("https://gateway.berkompeten.com/api/student/profile",{headers:{Authorization:`Bearer ${l}`}});n.value=o.data}catch(o){o.response&&o.response.status===401&&d.push("/login")}else d.push("/login")}),(o,r)=>(s(),c(_,{class:"match-height"},{default:a(()=>[t(C,{cols:"12",md:"12"},{default:a(()=>[t(R)]),_:1})]),_:1}))}};export{H as default};
