import{a as g}from"./axios-G2rPRu76.js";import{u as S,f as n,g as b,o as s,e as m,w as t,H as a,S as B,d as o,J as c,X as C,b as T,t as V,c as d}from"./index-bDRdYSbl.js";import{a as h,V as k}from"./VCardItem-Tij5nU0x.js";import{a as I,V as y}from"./VCard-NhbFWMF9.js";import{V as M,a as N}from"./VTextField-acSW2q5C.js";import"./VGrid-MKyws-9Y.js";import"./VImg-NJk-b_MQ.js";import"./VInput-S_rzwoqw.js";import"./index-6fSTlydu.js";import"./forwardRefs-g5bhJaRn.js";const O={key:1,class:"mt-2 text-success"},R={key:2,class:"mt-2 text-danger",style:{color:"#ff5252"}},$={__name:"OtpVerification",setup(x){const u=S(),r=n(!1),p=n(""),i=n(""),l=n(""),f=localStorage.getItem("token");b(async()=>{try{const e=await g.get("https://gateway.berkompeten.com/api/student/change-password/status",{headers:{Authorization:`Bearer ${f}`}});r.value=e.data.data.otp_submitted}catch(e){console.log("err: ",e),e.response&&e.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),u.push("/login"))}});const v=async()=>{try{const e=await g.post("https://gateway.berkompeten.com/api/student/otp-verification",{otp:l},{headers:{Authorization:`Bearer ${f}`}});console.log("resp otp: ",e),p.value=e.data.message,u.push("/profile/security")}catch(e){console.error("reset otp:",e),i.value=e.response.data.message}};return(e,_)=>(s(),m(k,null,{default:t(()=>[o(h,{cols:"12"},{default:t(()=>[o(I,{title:"Otp"},{default:t(()=>[o(M,null,{default:t(()=>[a(r)==!0?(s(),m(y,{key:0},{default:t(()=>[o(k,null,{default:t(()=>[o(h,{cols:"12",md:"6"},{default:t(()=>[o(N,{modelValue:a(l),"onUpdate:modelValue":_[0]||(_[0]=w=>B(l)?l.value=w:null),label:"OTP",autocomplete:"on",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})):c("",!0),o(y,{class:"d-flex flex-wrap gap-4"},{default:t(()=>[a(r)==!0?(s(),m(C,{key:0,onClick:v},{default:t(()=>[T("Save changes")]),_:1})):c("",!0),a(p)?(s(),d("div",O,V(a(p)),1)):c("",!0),a(i)?(s(),d("div",R,V(a(i)),1)):c("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},j={__name:"otp",setup(x){return(u,r)=>(s(),d("div",null,[o($)]))}};export{j as default};
