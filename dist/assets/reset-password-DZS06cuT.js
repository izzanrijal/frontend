import{_ as x,u as b,N as g,at as T,f as _,g as C,A as M,Z as N,c as m,d as s,w as a,o as c,a as p,J as P,$ as R,X as S,b as I,t as w,K as V,R as A,S as B}from"./index-CFfQD6KI.js";import{l as E}from"./berkompeten_logo-eijgBe6e.js";import{a as U,b as q}from"./auth-v1-mask-light-Dw7KYw8D.js";import{a as L}from"./VGrid-ukUykM_g.js";import{V as j,c as D,e as v,a as F,b as d}from"./VCard-BkM11dtO.js";import{V as H,a as i}from"./VForm-DjC494Xt.js";import"./VImg-C-Xm8kAh.js";import"./index-CmYAEvk7.js";import"./VInput-BY6qN6On.js";import"./forwardRefs-DWGaNmQL.js";const y=n=>(A("data-v-9133d962"),n=n(),B(),n),J={class:"auth-wrapper d-flex align-center justify-center pa-4"},K={class:"d-flex"},X=["innerHTML"],Z=y(()=>p("h5",{class:"text-h5 font-weight-semibold mb-1"},"Reset Password",-1)),$=y(()=>p("p",{class:"mb-0"},"Enter your new password",-1)),z={key:0,class:"mt-2 text-danger",style:{color:"#ff5252"}},G={key:1,class:"mt-2 text-success"},O={__name:"reset-password",setup(n){b();const f=g(),e=T({email:"",token:"",password:"",password_confirmation:""}),r=_(null),u=_(null);C(()=>{e.email=f.query.email||"",e.token=f.query.token||""});const h=async()=>{try{if(e.password===""||e.password_confirmation===""){r.value="All fields are required";return}const l=await L.post("/api/student/reset-password",{email:e.email,token:e.token,password:e.password,password_confirmation:e.password_confirmation});u.value=l.data.message,r.value=null}catch(l){l.response&&l.response.data?r.value=l.response.data.message||"An error occurred":r.value="An unexpected error occurred",u.value=null}},k=M();return N(()=>k.global.name.value==="light"?U:q),(l,o)=>(c(),m("div",J,[s(j,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:a(()=>[s(D,{class:"justify-center"},{prepend:a(()=>[p("div",K,[p("div",{innerHTML:P(E)},null,8,X)])]),_:1}),s(v,{class:"pt-2"},{default:a(()=>[Z,$]),_:1}),s(v,null,{default:a(()=>[s(H,{onSubmit:R(h,["prevent"])},{default:a(()=>[s(F,null,{default:a(()=>[s(d,{cols:"12"},{default:a(()=>[s(i,{modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=t=>e.email=t),label:"Email",type:"email",readonly:""},null,8,["modelValue"])]),_:1}),s(d,{cols:"12"},{default:a(()=>[s(i,{modelValue:e.token,"onUpdate:modelValue":o[1]||(o[1]=t=>e.token=t),label:"Token",type:"text",readonly:""},null,8,["modelValue"])]),_:1}),s(d,{cols:"12"},{default:a(()=>[s(i,{modelValue:e.password,"onUpdate:modelValue":o[2]||(o[2]=t=>e.password=t),label:"New Password",type:"password"},null,8,["modelValue"])]),_:1}),s(d,{cols:"12"},{default:a(()=>[s(i,{modelValue:e.password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=t=>e.password_confirmation=t),label:"Confirm Password",type:"password"},null,8,["modelValue"])]),_:1}),s(d,{cols:"12"},{default:a(()=>[s(S,{block:"",type:"submit",color:"#0080ff"},{default:a(()=>[I("Reset Password")]),_:1}),r.value?(c(),m("div",z,w(r.value),1)):V("",!0),u.value?(c(),m("div",G,w(u.value),1)):V("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))}},de=x(O,[["__scopeId","data-v-9133d962"]]);export{de as default};
