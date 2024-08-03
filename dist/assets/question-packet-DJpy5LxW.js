import{p as M,l as Y,$ as ue,f as v,a0 as fe,N as Z,a1 as z,Z as J,G as A,B as K,d as e,a2 as ve,a3 as ge,a4 as _e,I as ee,a5 as be,a6 as he,F as E,_ as X,u as U,M as ie,g as G,a7 as j,o as h,e as P,w as a,a as V,t as q,J as F,c as C,W as Q,n as ce,b as $,X as D,Q as de,R as me,Y as ke,D as ye,E as we,H as Ve}from"./index-C0Hf5pKJ.js";import{a as O}from"./VGrid-PkMhsjwy.js";import{c as N,d as W,a as I,b as y,V as L,e as H,f as Ie}from"./VCard-B2ZziGhh.js";import{V as ae}from"./VImg-CFGzTJX-.js";import{m as Se,V as te,a as xe}from"./VInput-DoxAxuIS.js";import{m as Pe,V as pe,a as qe,b as Ce}from"./VSelectionControl-6cg5an-1.js";import{m as $e,V as Re,u as Be,a as oe}from"./VOverlay-CB5w734k.js";import{f as De}from"./forwardRefs-DWGaNmQL.js";import{V as le}from"./VDivider-Px9mFr2l.js";import"./index-Bm4o5WZU.js";import"./lazy-es8KNO8O.js";const Ee=M({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...$e({origin:"center center",scrollStrategy:"block",transition:{component:Re},zIndex:2400})},"VDialog"),Te=Y()({name:"VDialog",props:Ee(),emits:{"update:modelValue":t=>!0},setup(t,s){let{slots:m}=s;const i=ue(t,"modelValue"),{scopeId:l}=Be(),u=v();function n(c){var g,d;const _=c.relatedTarget,b=c.target;if(_!==b&&((g=u.value)!=null&&g.contentEl)&&((d=u.value)!=null&&d.globalTop)&&![document,u.value.contentEl].includes(b)&&!u.value.contentEl.contains(b)){const r=ge(u.value.contentEl);if(!r.length)return;const o=r[0],k=r[r.length-1];_===o?k.focus():o.focus()}}fe&&Z(()=>i.value&&t.retainFocus,c=>{c?document.addEventListener("focusin",n):document.removeEventListener("focusin",n)},{immediate:!0}),Z(i,async c=>{var _,b;await z(),c?(_=u.value.contentEl)==null||_.focus({preventScroll:!0}):(b=u.value.activatorEl)==null||b.focus({preventScroll:!0})});const p=J(()=>A({"aria-haspopup":"dialog","aria-expanded":String(i.value)},t.activatorProps));return K(()=>{const c=oe.filterProps(t);return e(oe,A({ref:u,class:["v-dialog",{"v-dialog--fullscreen":t.fullscreen,"v-dialog--scrollable":t.scrollable},t.class],style:t.style},c,{modelValue:i.value,"onUpdate:modelValue":_=>i.value=_,"aria-modal":"true",activatorProps:p.value,role:"dialog"},l),{activator:m.activator,default:function(){for(var _=arguments.length,b=new Array(_),g=0;g<_;g++)b[g]=arguments[g];return e(ve,{root:"VDialog"},{default:()=>{var d;return[(d=m.default)==null?void 0:d.call(m,...b)]}})}})}),De({},u)}}),Ae=M({...Pe({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),se=Y()({name:"VRadio",props:Ae(),setup(t,s){let{slots:m}=s;return K(()=>e(pe,A(t,{class:["v-radio",t.class],style:t.style,type:"radio"}),m)),{}}}),ze=M({height:{type:[Number,String],default:"auto"},...Se(),..._e(qe(),["multiple"]),trueIcon:{type:ee,default:"$radioOn"},falseIcon:{type:ee,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),ne=Y()({name:"VRadioGroup",inheritAttrs:!1,props:ze(),emits:{"update:modelValue":t=>!0},setup(t,s){let{attrs:m,slots:i}=s;const l=be(),u=J(()=>t.id||`radio-group-${l}`),n=ue(t,"modelValue");return K(()=>{const[p,c]=he(m),_=te.filterProps(t),b=pe.filterProps(t),g=i.label?i.label({label:t.label,props:{for:u.value}}):t.label;return e(te,A({class:["v-radio-group",t.class],style:t.style},p,_,{modelValue:n.value,"onUpdate:modelValue":d=>n.value=d,id:u.value}),{...i,default:d=>{let{id:r,messagesId:o,isDisabled:k,isReadonly:R}=d;return e(E,null,[g&&e(xe,{id:r.value},{default:()=>[g]}),e(Ce,A(b,{id:r.value,"aria-describedby":o.value,defaultsTarget:"VRadio",trueIcon:t.trueIcon,falseIcon:t.falseIcon,type:t.type,disabled:k.value,readonly:R.value,"aria-labelledby":g?r.value:void 0,multiple:!1},c,{modelValue:n.value,"onUpdate:modelValue":x=>n.value=x}),i)])}})}),{}}}),Qe=t=>(de("data-v-5edbe242"),t=t(),me(),t),Oe={style:{color:"#0080ff"}},Ne={style:{color:"black"},class:"font-weight-semibold mb-1"},Le={style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},Ue={class:"me-n3",style:{padding:"20px"}},Ge=Qe(()=>V("span",{style:{color:"#0080ff"}},"Seberapa yakin jawaban anda?",-1)),je={class:"me-n3",style:{padding:"20px"}},Fe={__name:"Question",setup(t){const s=v({}),m=U();ie();const i=v([]);var l=localStorage.getItem("token");const u=v(!1);G(async()=>{j.on("refreshQuestion",d=>{console.log("run emit trigger: ",d.number),p.value=null,c.value=null,n()}),await n()});const n=async()=>{if(l)try{const d=localStorage.getItem("paket"),r=localStorage.getItem("number"),o=await O.get("https://gateway.berkompeten.com/api/student/question?id="+d+"&number="+r,{headers:{Authorization:`Bearer ${l}`}});s.value=o.data.data,localStorage.setItem("question_id",o.data.data.id),console.log("question: ",s);const k={label:o.data.data.option_a,value:"A",color:"#0080ff"},R={label:o.data.data.option_b,value:"B",color:"#0080ff"},x={label:o.data.data.option_c,value:"C",color:"#0080ff"},f={label:o.data.data.option_d,value:"D",color:"#0080ff"},w={label:o.data.data.option_e,value:"E",color:"#0080ff"};i.value=[k,R,x,f,w],console.log("option: ",i)}catch(d){d.response&&d.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),m.push("/login"))}else m.push("/login")},p=v(null),c=v(null),_=[{label:"Sangat Yakin",value:"yakin",color:"green"},{label:"Masih Ragu",value:"ragu",color:"orange"},{label:"Saya tidak tahu untuk jawaban soal ini",value:"tidak tahu",color:"red"}],b=()=>{console.log("selected option: ",p.value),localStorage.setItem("answer",p.value)},g=()=>{console.log("selected option yakin: ",c.value),localStorage.setItem("answerValue",c.value)};return(d,r)=>(h(),P(L,null,{default:a(()=>[e(N,{class:"outlined-card-item"},{default:a(()=>[e(W,null,{default:a(()=>[V("span",Oe,q(s.value.question_number),1)]),_:1}),s.value.image_url!=""?(h(),P(ae,{key:0,src:s.value.image_url,style:{"block-size":"350px",cursor:"pointer","inline-size":"350px"},onClick:r[0]||(r[0]=o=>u.value=!0)},null,8,["src"])):F("",!0),V("p",Ne,q(s.value.scenario),1),V("p",Le,q(s.value.question),1),V("div",Ue,[e(I,{align:"center"},{default:a(()=>[e(y,{cols:"12",md:"12"},{default:a(()=>[e(ne,{modelValue:p.value,"onUpdate:modelValue":r[1]||(r[1]=o=>p.value=o),class:"mb-2",onChange:b},{default:a(()=>[(h(!0),C(E,null,Q(i.value,(o,k)=>(h(),P(se,{key:k,label:o.label,value:o.value,color:o.color},null,8,["label","value","color"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})])]),_:1}),e(N,{class:"outlined-card-item"},{default:a(()=>[e(W,null,{default:a(()=>[Ge]),_:1}),V("div",je,[e(I,{align:"center"},{default:a(()=>[e(y,{cols:"12",md:"12"},{default:a(()=>[e(ne,{modelValue:c.value,"onUpdate:modelValue":r[2]||(r[2]=o=>c.value=o),class:"mb-2",onChange:g},{default:a(()=>[(h(),C(E,null,Q(_,(o,k)=>e(se,{key:k,value:o.value,class:"custom-radio"},{label:a(()=>[V("span",{class:ce(["custom-circle",o.color])},null,2),$(" "+q(o.label),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})])]),_:1}),e(Te,{modelValue:u.value,"onUpdate:modelValue":r[4]||(r[4]=o=>u.value=o),"max-width":"600px"},{default:a(()=>[e(L,null,{default:a(()=>[e(H,null,{default:a(()=>[s.value.image_url!==""?(h(),P(ae,{key:0,src:s.value.image_url,style:{"max-inline-size":"100%"}},null,8,["src"])):F("",!0)]),_:1}),e(Ie,null,{default:a(()=>[e(D,{color:"primary",text:"",onClick:r[3]||(r[3]=o=>u.value=!1)},{default:a(()=>[$("Close")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},We=X(Fe,[["__scopeId","data-v-5edbe242"]]),He={__name:"QuestionHeader",setup(t){const s=U();var m=localStorage.getItem("token");const i=v(window.innerWidth);G(async()=>{if(window.addEventListener("resize",l),l(),m){console.log("question packet detail run: ");try{const n=localStorage.getItem("paket");console.log("question packet detail id: ",n);const p=await axios.get("https://gateway.berkompeten.com/api/student/question-packet/detail?id="+n,{headers:{Authorization:`Bearer ${m}`}});console.log("question packet detail resp: ",p.data.data),questionsPacket.value=p.data.data,console.log("question packet detail: ",questionsPacket)}catch(n){n.response&&n.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),s.push("/login"))}}else s.push("/login")}),ke(()=>{window.removeEventListener("resize",l)});const l=()=>{i.value=window.innerWidth},u=async()=>{try{s.push("/review")}catch(n){console.error("review failed:",n)}};return(n,p)=>(h(),P(L,null,{default:a(()=>[e(I,{class:"match-height"},{default:a(()=>[ye(e(y,{cols:"12",md:"3"},null,512),[[we,Ve(i)>=768]]),e(y,{cols:"12",md:"9"},{default:a(()=>[e(N,null,{append:a(()=>[e(I,{class:"match-height"},{default:a(()=>[e(y,{cols:"12",md:"7"},{default:a(()=>[e(D,{block:"",type:"submit",to:"/lab-values",color:"#0080ff",variant:"outlined"},{default:a(()=>[$(" Nilai Normal Laboratorium ")]),_:1})]),_:1}),e(y,{cols:"12",md:"5"},{default:a(()=>[e(D,{block:"",type:"submit",onClick:u,color:"#0080ff"},{default:a(()=>[$(" Selesaikan Test ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Me=X(He,[["__scopeId","data-v-7bbdcefc"]]),Ye=t=>(de("data-v-3a819b4a"),t=t(),me(),t),Je=Ye(()=>V("span",{style:{color:"#0080ff"}},"Soal Dikerjakan",-1)),Ke={class:"font-weight-semibold mb-1"},Xe={style:{color:"#0080ff"}},Ze={class:"d-sm-block"},ea={key:0,class:"mt-2 text-danger",style:{color:"#ff5252"}},re=5,aa={__name:"QuestionOrder",setup(t){const s=v([]),m=U();ie();const i=v(null),l=v(null);var u=localStorage.getItem("token");const n=v(null);G(async()=>{await r(),await z(),x()});var p=v(null),c=v(null),_=v(null);v(null);var b=v(null),g=v(null),d=v(0);const r=async()=>{if(u)try{i.value=localStorage.getItem("paket"),l.value=localStorage.getItem("number");const w=(await O.get("https://gateway.berkompeten.com/api/student/questions/orders?id="+i.value,{headers:{Authorization:`Bearer ${u}`}})).data.question_numbers;d=w.length,console.log("question length: ",w.length),s.value=J(()=>{const T=[];for(let B=0;B<w.length;B+=re)T.push(w.slice(B,B+re));return console.log("result: ",T),T}),console.log("GROUP BUT: ",s)}catch(f){f.response&&f.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),m.push("/login"))}else m.push("/login")},o=async()=>{if(p===null&&l.value!=1){console.log("previous without answer: ",+l.value-1),k(+l.value-1);return}localStorage.setItem("number",_),await r(),await z(),x(),j.emit("refreshQuestion",{number:_})},k=async f=>{localStorage.setItem("number",f),await r(),await z(),x(),j.emit("refreshQuestion",{number:f})},R=async()=>{if(p=localStorage.getItem("answer"),c=localStorage.getItem("answerValue"),b=localStorage.getItem("paket"),g=localStorage.getItem("question_id"),p===null&&l.value!=d+1){console.log("next without answer: ",+l.value+1),k(+l.value+1);return}if(c===null){n.value="Tolong pilih seberapa yakin jawaban anda terlebih dahulu";return}if(g===null){n.value="question id is empty. please contact your administrator";return}try{console.log("paket id: ",b),console.log("ques id: ",g),console.log("answer: ",p),console.log("answer val: ",c);const f=await O.post("https://gateway.berkompeten.com/api/student/user/answer/add",{question_packet_id:b,question_id:g,answer:p,answer_value:c},{headers:{Authorization:`Bearer ${u}`}});console.log("answer submit: ",p),console.log("answer val submit: ",c),localStorage.removeItem("answer"),localStorage.removeItem("answerValue"),l.value==d+1&&m.push("/review"),R()}catch(f){console.error("answer failed:",f),f.response&&f.response.data?n.value=f.response.data.errors:n.value="An unexpected error occurred during login."}},x=()=>{const f=document.querySelector(".vcardtext-container"),w=document.querySelector(".v-btn.custom-btn.active");f&&w&&(f.scrollTop=w.offsetTop-f.offsetTop-f.clientHeight/2+w.clientHeight/2)};return(f,w)=>(h(),P(L,null,{default:a(()=>[e(I,{"no-gutters":""},{default:a(()=>[e(y,{md:"12"},{default:a(()=>[e(N,null,{append:a(()=>[V("p",Ke,[V("span",Xe,q(l.value),1),$(" / 200 ")])]),default:a(()=>[e(W,null,{default:a(()=>[Je]),_:1})]),_:1}),e(le),e(H,{class:"vcardtext-container"},{default:a(()=>[(h(!0),C(E,null,Q(s.value.value,(T,B)=>(h(),P(I,{key:B,class:"row-item"},{default:a(()=>[(h(!0),C(E,null,Q(T,S=>(h(),C("div",{key:S.number,class:"d-flex flex-wrap v-item"},[e(D,{color:l.value===S.number?"primary":S.is_fill?"#0080ff":"",variant:S.is_fill?"tonal":"outlined",class:ce(["mb-1 custom-btn",{active:l.value===S.number}]),style:{"block-size":"40px","inline-size":"40px"},onClick:oa=>k(S.number),ref_for:!0,ref:"button-"+S.number},{default:a(()=>[V("span",Ze,q(S.number),1)]),_:2},1032,["color","variant","class","onClick"])]))),128))]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e(le),e(H,{class:"vcardtext-container"},{default:a(()=>[n.value?(h(),C("div",ea,q(n.value),1)):F("",!0),e(I,{class:"d-flex flex-wrap"},{default:a(()=>[e(y,{cols:"6",class:"mb-1"},{default:a(()=>[e(D,{onClick:o,color:"#0080ff",variant:"outlined",disabled:l.value==1},{default:a(()=>[$("Kembali")]),_:1},8,["disabled"])]),_:1}),e(y,{cols:"6",class:"mb-1"},{default:a(()=>[e(D,{onClick:R,color:"#0080ff"},{default:a(()=>[$("Selanjutnya")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},ta=X(aa,[["__scopeId","data-v-3a819b4a"]]),va={__name:"question-packet",setup(t){const s=localStorage.getItem("token"),m=v(null),i=U();return G(async()=>{if(s)try{const l=await O.get("https://gateway.berkompeten.com/api/student/profile",{headers:{Authorization:`Bearer ${s}`}});m.value=l.data}catch(l){l.response&&l.response.status===401&&i.push("/login")}else i.push("/login")}),(l,u)=>(h(),C(E,null,[e(I,{class:"match-height"},{default:a(()=>[e(y,{cols:"12",md:"12"},{default:a(()=>[e(Me)]),_:1})]),_:1}),e(I,{class:"match-height"},{default:a(()=>[e(y,{cols:"12",md:"9"},{default:a(()=>[e(We)]),_:1}),e(y,{cols:"12",md:"3"},{default:a(()=>[e(ta)]),_:1})]),_:1})],64))}};export{va as default};
