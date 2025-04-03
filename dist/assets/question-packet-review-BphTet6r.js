import{a as e}from"./axios-fZjk1EK6.js";import{c as a,J as s,v as t,x as l,b as o,V as r,l as n,O as i,B as c,D as d,P as u,u as p,R as v,S as m,Y as g,F as y,W as f,$ as h,a0 as k,z as b}from"./vendor-B8wJr56A.js";import{h as _,i as w,j as S,k as C,d as I,l as x,b as j,c as q,n as V,m as z,e as B,o as A,f as M,p as $,q as L,r as R,s as D,V as F,t as O,g as E,_ as G}from"./index-BybbEtVx.js";import{c as H,d as J,a as K,b as P,V as Q}from"./VCard-BTRoFlXY.js";import{V as T}from"./VImg-BQNpmpCN.js";import{M as W,g as Y,p as N,q as U,c as X,H as Z,m as ee,b as ae,I as se}from"./vuetify-C3ORsIgB.js";import"./VGrid-BNFjx_dy.js";const te=W("v-alert-title"),le=["success","info","warning","error"],oe=N({border:{type:[Boolean,String],validator:e=>"boolean"==typeof e||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:se,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>le.includes(e)},...ae(),...R(),...L(),...$(),...M(),...A(),...B(),...z(),...ee(),...V({variant:"flat"})},"VAlert"),re=Y()({name:"VAlert",props:oe(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{emit:r,slots:n}=o;const i=U(e,"modelValue"),c=a((()=>{if(!1!==e.icon)return e.type?e.icon??`$${e.type}`:e.icon})),d=a((()=>({color:e.color??e.type,variant:e.variant}))),{themeClasses:u}=X(e),{colorClasses:p,colorStyles:v,variantClasses:m}=_(d),{densityClasses:g}=w(e),{dimensionStyles:y}=S(e),{elevationClasses:f}=C(e),{locationStyles:h}=I(e),{positionClasses:k}=x(e),{roundedClasses:b}=j(e),{textColorClasses:V,textColorStyles:z}=q(s(e,"borderColor")),{t:B}=Z(),A=a((()=>({"aria-label":B(e.closeLabel),onClick(e){i.value=!1,r("click:close",e)}})));return()=>{const a=!(!n.prepend&&!c.value),s=!(!n.title&&!e.title),o=!(!n.close&&!e.closable);return i.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${!0===e.border?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},u.value,p.value,g.value,f.value,k.value,b.value,m.value,e.class],style:[v.value,y.value,h.value,e.style],role:"alert"},{default:()=>{var r,i;return[D(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",V.value],style:z.value},null),a&&t("div",{key:"prepend",class:"v-alert__prepend"},[n.prepend?t(O,{key:"prepend-defaults",disabled:!c.value,defaults:{VIcon:{density:e.density,icon:c.value,size:e.prominent?44:28}}},n.prepend):t(F,{key:"prepend-icon",density:e.density,icon:c.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[s&&t(te,{key:"title"},{default:()=>{var a;return[(null==(a=n.title)?void 0:a.call(n))??e.title]}}),(null==(r=n.text)?void 0:r.call(n))??e.text,null==(i=n.default)?void 0:i.call(n)]),n.append&&t("div",{key:"append",class:"v-alert__append"},[n.append()]),o&&t("div",{key:"close",class:"v-alert__close"},[n.close?t(O,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var e;return[null==(e=n.close)?void 0:e.call(n,{props:A.value})]}}):t(E,l({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},A.value),null)])]}})}}}),ne=e=>(h("data-v-9aa466d8"),e=e(),k(),e),ie={class:"review-page-container"},ce={class:"image-container"},de={class:"stats-card"},ue=ne((()=>u("div",{class:"stats-label"},"Soal yang telah dikerjakan",-1))),pe={class:"stats-value completed"},ve={class:"stats-card"},me=ne((()=>u("div",{class:"stats-label"},"Soal yang belum dikerjakan",-1))),ge={class:"stats-value pending"},ye={class:"section-title"},fe={class:"title-container"},he={class:"title-text"},ke={class:"highlight"},be={class:"questions-list-container"},_e={key:0,class:"no-questions"},we=["onClick","onMouseenter","onMouseleave"],Se={class:"question-content"},Ce={class:"question-number"},Ie={class:"question-text"},xe=G({__name:"QuestionReview",setup(a){const s=o({}),l=o([]),h=r();var k=localStorage.getItem("token");const b=o([]);n((async()=>{await _(),await w()}));const _=async()=>{if(k)try{const a=localStorage.getItem("paket"),t=await e.get("https://gateway.berkompeten.id/api/student/user/test/review?id="+a,{headers:{Authorization:`Bearer ${k}`}});s.value=t.data.data}catch(a){S(a)}else h.push("/login")},w=async()=>{if(k)try{const a=localStorage.getItem("paket"),s=await e.get("https://gateway.berkompeten.id/api/student/user/skip/questions?id="+a,{headers:{Authorization:`Bearer ${k}`}});l.value=s.data.data}catch(a){S(a)}else h.push("/login")},S=e=>{e.response&&401===e.response.status&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),h.push("/login"))},C=()=>{h.push("/soal")},I=async()=>{const a=localStorage.getItem("paket");try{await e.post("https://gateway.berkompeten.id/api/student/user/finish-the-test",{question_packet_id:a},{headers:{Authorization:`Bearer ${k}`}});h.push("/result")}catch(s){S(s),s.response&&s.response.data&&(errorMessage.value=s.response.data.errors)}},x=(e,a)=>{b.value[e]&&(a?b.value[e].classList.add("hovered"):b.value[e].classList.remove("hovered"))};return(e,a)=>(c(),i("div",ie,[t(Q,{class:"review-card"},{default:d((()=>[t(H,{class:"header-section"},{default:d((()=>[u("div",ce,[t(T,{src:p("/assets/review-DBMVeA3p.png"),class:"review-image",width:"120",height:"120",contain:"",alt:"Review Illustration"},null,8,["src"])]),t(J,{class:"review-title"},{default:d((()=>[v(" Review kembali hasil pengerjaan test Anda ")])),_:1}),t(K,{dense:"",class:"stats-section ma-0"},{default:d((()=>[t(P,{cols:"12",sm:"6",class:"pa-2"},{default:d((()=>[u("div",de,[ue,u("div",pe,m(s.value.total_answered),1)])])),_:1}),t(P,{cols:"12",sm:"6",class:"pa-2"},{default:d((()=>[u("div",ve,[me,u("div",ge,m(s.value.total_skip),1)])])),_:1})])),_:1}),t(K,{dense:"",class:"button-row ma-0"},{default:d((()=>[t(P,{cols:"12",sm:"6",class:"pa-2"},{default:d((()=>[t(E,{color:"primary",block:"",variant:"elevated",height:"40",elevation:"1",onClick:I},{default:d((()=>[t(F,{icon:"ri-check-line",size:"18",class:"mr-2"}),v(" Selesaikan Tes ")])),_:1})])),_:1}),t(P,{cols:"12",sm:"6",class:"pa-2"},{default:d((()=>[t(E,{variant:"outlined",color:"primary",block:"",height:"40",onClick:C},{default:d((()=>[t(F,{icon:"ri-arrow-left-line",size:"18",class:"mr-2"}),v(" Kembali Mengerjakan ")])),_:1})])),_:1})])),_:1})])),_:1}),t(H,{class:"skipped-questions-section"},{default:d((()=>[u("div",ye,[u("div",fe,[t(F,{icon:"ri-error-warning-line",color:"warning",size:"20",class:"mr-2"}),u("span",he,[v(" Soal-soal yang belum diberikan jawaban: "),u("span",ke,"Ada "+m(s.value.total_skip)+" Soal",1)])])]),u("div",be,[0===l.value.length?(c(),i("div",_e,[t(re,{type:"success",variant:"tonal",border:"start",density:"comfortable"},{default:d((()=>[v(" Semua soal telah dikerjakan, selamat! ")])),_:1})])):g("",!0),(c(!0),i(y,null,f(l.value,((e,a)=>(c(),i("div",{key:e.id,class:"question-card",onClick:a=>(async e=>{try{localStorage.setItem("number",e),h.push("/soal")}catch(a){a.response&&a.response.data?errorMessage.value=a.response.data.errors:errorMessage.value="An unexpected error occurred during login."}})(e.question_number),onMouseenter:e=>x(a,!0),onMouseleave:e=>x(a,!1),ref_for:!0,ref_key:"cardItems",ref:b},[u("div",Se,[u("div",Ce,m(e.question_number),1),u("div",Ie,m(e.question),1)])],40,we)))),128))])])),_:1})])),_:1})]))}},[["__scopeId","data-v-9aa466d8"]]),je={__name:"question-packet-review",setup(a){const s=localStorage.getItem("token"),l=o(null),i=r();return n((async()=>{if(s)try{const a=await e.get("https://gateway.berkompeten.id/api/student/profile",{headers:{Authorization:`Bearer ${s}`}});l.value=a.data}catch(a){a.response&&401===a.response.status&&i.push("/login")}else i.push("/login")})),(e,a)=>(c(),b(K,{class:"match-height"},{default:d((()=>[t(P,{cols:"12",md:"12"},{default:d((()=>[t(xe)])),_:1})])),_:1}))}};export{je as default};
