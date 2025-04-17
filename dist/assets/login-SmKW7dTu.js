import{b as e,V as a,r as s,c as t,l as r,O as l,B as o,v as n,D as i,u,A as d,P as m,a2 as c,z as p,W as f,F as v,X as g,R as h,S as b,$ as w,a0 as y}from"./vendor-BrUfZ_qe.js";import{a as V,b as _,_ as j}from"./auth-v1-tree-BZDbnWRu.js";import{l as x}from"./berkompeten_logo-CQUigQgy.js";import{a as k,b as S}from"./auth-v1-mask-light-Dw7KYw8D.js";import{a as I}from"./axios-fZjk1EK6.js";import{_ as C,g as L}from"./index-BAywq0Ob.js";import{V as E,c as q,e as A,a as F,b as M}from"./VCard-DQMXF3Nm.js";import{V as P}from"./VImg-B_JtkRwX.js";import{V as T,a as B}from"./VForm-Cja6eDMe.js";import{a as H,V as J}from"./VList-6sqlYPPX.js";import{V as R}from"./VListItemTitle-GAILHzRm.js";import{V as D}from"./VCheckbox-0m-11Sea.js";import{V as N}from"./VDivider-Dh9aQmYu.js";import{J as O}from"./vuetify-BGzDg8SZ.js";import"./VGrid-DpcPUu2X.js";import"./index-xgti94jS.js";import"./VInput-Hwser3Zj.js";import"./forwardRefs-BiNqQvLW.js";import"./ssrBoot-B8jrVcKx.js";import"./VSelectionControl-C7nVvhp5.js";const U=e=>(w("data-v-5478884a"),e=e(),y(),e),z={class:"auth-wrapper d-flex align-center justify-center pa-4"},G={class:"d-flex"},K=["innerHTML"],W=U((()=>m("h5",{class:"text-h5 font-weight-semibold mb-1"}," Hai Selamat Datang! ",-1))),X=U((()=>m("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1))),$={class:"d-flex align-center justify-space-between flex-wrap mt-1 mb-4"},Q=U((()=>m("div",{id:"turnstile-container",class:"mb-2"},null,-1))),Y={key:0,class:"mt-2 text-danger",style:{color:"#ff5252"}},Z=U((()=>m("span",null,"New on our platform?",-1))),ee=U((()=>m("span",{class:"mx-4"},"or",-1))),ae=C({__name:"login",setup(w){const y=e(null),C=a(),U=s({email:"",password:"",remember:!1}),ae=e([]),se=O(),te=e(!1),re=e([]),le=t((()=>"light"===se.global.name.value?k:S)),oe=e(!1),ne=e(null);var ie=localStorage.getItem("token");const ue=()=>{const e=U.email.toLowerCase();re.value=ae.value.filter((a=>a.toLowerCase().includes(e)))},de=()=>{setTimeout((()=>te.value=!1),200)},me=()=>{window.turnstile?(y.value&&window.turnstile.remove(y.value),y.value=window.turnstile.render("#turnstile-container",{sitekey:"1x00000000000000000000AA",theme:"light",callback:function(e){var a;const s=document.createElement("input");s.type="hidden",s.name="cf-turnstile-response",s.value=e;const t=document.querySelector('input[name="cf-turnstile-response"]');t&&t.remove(),null==(a=document.querySelector("form"))||a.appendChild(s)},"expired-callback":()=>{me()},"error-callback":()=>{},appearance:"interaction-only"})):setTimeout(me,500)};r((async()=>{ie&&C.push("/dashboard");const e=JSON.parse(localStorage.getItem("savedEmails"))||[];ae.value=e,me()}));const ce=async()=>{var e,a;try{if(""===U.email)return void(ne.value="email is required");if(""===U.password)return void(ne.value="password is required");if(U.password.length<8)return void(ne.value="password length must be 8 character or more");const s=null==(e=document.querySelector('[name="cf-turnstile-response"]'))?void 0:e.value,t={email:U.email,password:U.password};s&&(t["cf-turnstile-response"]=s);const r=(await I.post("https://gateway.berkompeten.id/api/student/login",t)).data.token;localStorage.setItem("token",r),a=U.email,ae.value.includes(a)||(ae.value.push(a),localStorage.setItem("savedEmails",JSON.stringify(ae.value))),C.push("/dashboard")}catch(s){return s.response&&s.response.data?(ne.value=s.response.data.message,s.response.data.errors&&(ne.value=s.response.data.errors),(429===s.response.status||s.response.data.errors&&"string"==typeof s.response.data.errors&&s.response.data.errors.toLowerCase().includes("captcha"))&&(me(),ne.value="Please try again"),void(!1===s.response.data.is_exist&&(localStorage.setItem("email",U.email),C.push("/register")))):void(ne.value="An unexpected error occurred during login.")}},pe=()=>{C.push("/forgot-password")};return(e,a)=>{const s=d("RouterLink");return o(),l("div",z,[n(E,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:i((()=>[n(q,{class:"justify-center"},{prepend:i((()=>[m("div",G,[m("div",{innerHTML:u(x)},null,8,K)])])),_:1}),n(A,{class:"pt-2"},{default:i((()=>[W,X])),_:1}),n(A,null,{default:i((()=>[n(T,{onSubmit:c(ce,["prevent"])},{default:i((()=>[n(F,null,{default:i((()=>[n(M,{cols:"12"},{default:i((()=>[n(B,{modelValue:u(U).email,"onUpdate:modelValue":a[0]||(a[0]=e=>u(U).email=e),label:"Email",placeholder:"Enter your email",clearable:"",autocomplete:"off",onFocus:a[1]||(a[1]=e=>te.value=!0),onBlur:de,onInput:ue},null,8,["modelValue"]),u(te)&&u(re).length?(o(),p(H,{key:0,class:"suggestions-list"},{default:i((()=>[(o(!0),l(v,null,g(u(re),(e=>(o(),p(J,{key:e,onMousedown:c((a=>(e=>{U.email=e,te.value=!1})(e)),["prevent"])},{default:i((()=>[n(R,null,{default:i((()=>[h(b(e),1)])),_:2},1024)])),_:2},1032,["onMousedown"])))),128))])),_:1})):f("",!0)])),_:1}),n(M,{cols:"12"},{default:i((()=>[n(B,{modelValue:u(U).password,"onUpdate:modelValue":a[2]||(a[2]=e=>u(U).password=e),label:"Password",placeholder:"············",type:u(oe)?"text":"password","append-inner-icon":u(oe)?"ri-eye-off-line":"ri-eye-line","onClick:appendInner":a[3]||(a[3]=e=>oe.value=!u(oe))},null,8,["modelValue","type","append-inner-icon"]),m("div",$,[n(D,{modelValue:u(U).remember,"onUpdate:modelValue":a[4]||(a[4]=e=>u(U).remember=e),label:"Remember me"},null,8,["modelValue"]),m("a",{class:"ms-2 mb-1",onClick:pe}," Forgot Password? ")]),m("div",null,[Q,n(L,{block:"",type:"submit",color:"#0080ff"},{default:i((()=>[h(" Login ")])),_:1})]),u(ne)?(o(),l("div",Y,b(u(ne)),1)):f("",!0)])),_:1}),n(M,{cols:"12",class:"text-center text-base"},{default:i((()=>[Z,n(s,{class:"text-primary ms-2",to:"/register"},{default:i((()=>[h(" Create an account ")])),_:1})])),_:1}),n(M,{cols:"12",class:"d-flex align-center"},{default:i((()=>[n(N),ee,n(N)])),_:1}),n(M,{cols:"12",class:"text-center"},{default:i((()=>[n(j)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),n(P,{class:"auth-footer-start-tree d-none d-md-block",src:u(V),width:250},null,8,["src"]),n(P,{src:u(_),class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),n(P,{class:"auth-footer-mask d-none d-md-block",src:u(le)},null,8,["src"])])}}},[["__scopeId","data-v-5478884a"]]);export{ae as default};
