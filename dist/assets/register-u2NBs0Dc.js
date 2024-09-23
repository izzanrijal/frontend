import{_ as C,at as T,z as P,u as R,M as E,Z as M,f as p,g as q,c as V,d as s,w as o,H as f,o as y,a as i,$ as N,X as L,b as x,t as $,J as B,O as D,Q as F,R as H}from"./index-3Yd3gIS-.js";import{_ as U,a as j,b as O}from"./auth-v1-tree-BFL_b9hw.js";import{l as z}from"./berkompeten_logo-eijgBe6e.js";import{a as A,b as J}from"./auth-v1-mask-light-Dw7KYw8D.js";import{a as Q}from"./VGrid-n_RvbKpF.js";import{V as X,c as Z,e as G,a as K,b as l}from"./VCard-CaZx3-fR.js";import{V as _}from"./VImg-7mT7OgbZ.js";import{V as W,a as w}from"./VForm-CaCzDNts.js";import{V as b}from"./VDivider-B6fAT5Io.js";import"./index-C7URfLFt.js";import"./VInput-BPlmo2ow.js";import"./forwardRefs-DWGaNmQL.js";const v=d=>(F("data-v-99e164fb"),d=d(),H(),d),Y={class:"auth-wrapper d-flex align-center justify-center pa-4"},ee={class:"d-flex"},ae=["innerHTML"],se=v(()=>i("div",{class:"d-flex align-center mt-1 mb-4"},null,-1)),oe={key:0,class:"mt-2 text-danger",style:{color:"#ff5252"}},re=v(()=>i("span",null,"Already have an account?",-1)),te=v(()=>i("span",{class:"mx-4"},"or",-1)),le={__name:"register",setup(d){const a=T({username:"",email:"",password:"",confirm_password:"",privacyPolicies:!1}),k=P(),g=R(),h=E(),I=M(()=>k.global.name.value==="light"?A:J),m=p(!1),c=p(!1),r=p(null),S=async()=>{if(r.value="",a.email==""){r.value="email is required";return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email)){r.value="Invalid email format";return}if(a.password==""){r.value="password is required";return}if(a.password.length<8){r.value="password length must be 8 character or more";return}if(a.confirm_password==""){r.value="confirm password is required";return}if(a.confirm_password.length<8){r.value="confirm password length must be 8 character or more";return}if(a.password!==a.confirm_password){console.error("Password and confirm password do not match"),r.value="Password and confirm password do not match";return}try{const e=await Q.post("https://gateway.berkompeten.com/api/student/register/step/1",{email:a.email,password:a.password});console.log("RESPONSE STEP 1: ",e),localStorage.setItem("email",a.email),localStorage.setItem("password",a.password),localStorage.setItem("confirm_password",a.confirm_password),g.push("/register-step-2")}catch(e){if(console.error("Login failed:",e),e.response&&e.response.data){if(e.response.data.errors.email){r.value=e.response.data.errors.email[0];return}r.value=e.response.data.errors}}};return q(()=>{const n=localStorage.getItem("email"),e=h.query.email,u=h.query.name;e&&(console.log("email get route: ",e),a.email=e,localStorage.setItem("email",a.email),localStorage.setItem("name",u),g.push("/register")),console.log("email: ",n),n&&(a.email=n)}),(n,e)=>{const u=D("RouterLink");return y(),V("div",Y,[s(X,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:o(()=>[s(Z,{class:"justify-center"},{prepend:o(()=>[i("div",ee,[i("div",{innerHTML:f(z)},null,8,ae)])]),_:1}),s(G,null,{default:o(()=>[s(W,{onSubmit:N(()=>{},["prevent"])},{default:o(()=>[s(K,null,{default:o(()=>[s(l,{cols:"12"},{default:o(()=>[s(w,{modelValue:a.email,"onUpdate:modelValue":e[0]||(e[0]=t=>a.email=t),label:"Email",placeholder:"example@email.com",type:"email"},null,8,["modelValue"])]),_:1}),s(l,{cols:"12"},{default:o(()=>[s(w,{modelValue:a.password,"onUpdate:modelValue":e[1]||(e[1]=t=>a.password=t),label:"Password",placeholder:"············",type:m.value?"text":"password","append-inner-icon":m.value?"ri-eye-off-line":"ri-eye-line","onClick:appendInner":e[2]||(e[2]=t=>m.value=!m.value)},null,8,["modelValue","type","append-inner-icon"])]),_:1}),s(l,{cols:"12"},{default:o(()=>[s(w,{modelValue:a.confirm_password,"onUpdate:modelValue":e[3]||(e[3]=t=>a.confirm_password=t),label:"Confirm Password",placeholder:"············",type:c.value?"text":"password","append-inner-icon":c.value?"ri-eye-off-line":"ri-eye-line","onClick:appendInner":e[4]||(e[4]=t=>c.value=!c.value)},null,8,["modelValue","type","append-inner-icon"]),se,s(L,{block:"",type:"submit",color:"#0080ff",onClick:S},{default:o(()=>[x(" Next ")]),_:1}),r.value?(y(),V("div",oe,$(r.value),1)):B("",!0)]),_:1}),s(l,{cols:"12",class:"text-center text-base"},{default:o(()=>[re,s(u,{class:"text-primary ms-2",to:"login"},{default:o(()=>[x(" Sign in instead ")]),_:1})]),_:1}),s(l,{cols:"12",class:"d-flex align-center"},{default:o(()=>[s(b),te,s(b)]),_:1}),s(l,{cols:"12",class:"text-center"},{default:o(()=>[s(U)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(_,{class:"auth-footer-start-tree d-none d-md-block",src:f(j),width:250},null,8,["src"]),s(_,{src:f(O),class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),s(_,{class:"auth-footer-mask d-none d-md-block",src:I.value},null,8,["src"])])}}},he=C(le,[["__scopeId","data-v-99e164fb"]]);export{he as default};
