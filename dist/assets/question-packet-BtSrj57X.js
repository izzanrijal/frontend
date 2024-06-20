import{p as W,l as M,$ as ne,f as _,a0 as de,N as K,a1 as me,Z as Y,G as A,B as H,d as e,a2 as pe,a3 as fe,a4 as ve,I as X,a5 as ge,a6 as _e,F as D,_ as J,u as U,M as re,g as L,a7 as Q,o as h,e as S,w as a,a as V,t as $,J as G,c as x,W as T,X as R,b as B,Q as ue,R as ie,Y as be,D as he,E as ke,H as ye}from"./index-Dp1AB7qC.js";import{a as z}from"./VGrid-Cb3xdPdY.js";import{b as N,c as j,V as w,a as k}from"./VCardItem-DnBFaLt7.js";import{V as Z}from"./VImg-B-N7Swn7.js";import{m as Ve,V as ee,a as we}from"./VInput-CP6Ekbq6.js";import{m as Ie,V as ce,a as Se,b as xe}from"./VSelectionControl-Cgr8DH0T.js";import{m as Pe,V as Ce,u as qe,a as ae}from"./VOverlay-BrW_tlle.js";import{f as $e}from"./forwardRefs-DWGaNmQL.js";import{V as O,a as F,b as Re}from"./VCard-CQPA1uDj.js";import{V as te}from"./VDivider-C_p6_aF-.js";import"./index-DpggUlG3.js";import"./lazy-CjzCzk5v.js";const Be=W({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Pe({origin:"center center",scrollStrategy:"block",transition:{component:Ce},zIndex:2400})},"VDialog"),De=M()({name:"VDialog",props:Be(),emits:{"update:modelValue":t=>!0},setup(t,s){let{slots:p}=s;const u=ne(t,"modelValue"),{scopeId:d}=qe(),r=_();function l(i){var b,c;const m=i.relatedTarget,g=i.target;if(m!==g&&((b=r.value)!=null&&b.contentEl)&&((c=r.value)!=null&&c.globalTop)&&![document,r.value.contentEl].includes(g)&&!r.value.contentEl.contains(g)){const n=fe(r.value.contentEl);if(!n.length)return;const o=n[0],y=n[n.length-1];m===o?y.focus():o.focus()}}de&&K(()=>u.value&&t.retainFocus,i=>{i?document.addEventListener("focusin",l):document.removeEventListener("focusin",l)},{immediate:!0}),K(u,async i=>{var m,g;await me(),i?(m=r.value.contentEl)==null||m.focus({preventScroll:!0}):(g=r.value.activatorEl)==null||g.focus({preventScroll:!0})});const f=Y(()=>A({"aria-haspopup":"dialog","aria-expanded":String(u.value)},t.activatorProps));return H(()=>{const i=ae.filterProps(t);return e(ae,A({ref:r,class:["v-dialog",{"v-dialog--fullscreen":t.fullscreen,"v-dialog--scrollable":t.scrollable},t.class],style:t.style},i,{modelValue:u.value,"onUpdate:modelValue":m=>u.value=m,"aria-modal":"true",activatorProps:f.value,role:"dialog"},d),{activator:p.activator,default:function(){for(var m=arguments.length,g=new Array(m),b=0;b<m;b++)g[b]=arguments[b];return e(pe,{root:"VDialog"},{default:()=>{var c;return[(c=p.default)==null?void 0:c.call(p,...g)]}})}})}),$e({},r)}}),Ee=W({...Ie({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),oe=M()({name:"VRadio",props:Ee(),setup(t,s){let{slots:p}=s;return H(()=>e(ce,A(t,{class:["v-radio",t.class],style:t.style,type:"radio"}),p)),{}}}),Ae=W({height:{type:[Number,String],default:"auto"},...Ve(),...ve(Se(),["multiple"]),trueIcon:{type:X,default:"$radioOn"},falseIcon:{type:X,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),le=M()({name:"VRadioGroup",inheritAttrs:!1,props:Ae(),emits:{"update:modelValue":t=>!0},setup(t,s){let{attrs:p,slots:u}=s;const d=ge(),r=Y(()=>t.id||`radio-group-${d}`),l=ne(t,"modelValue");return H(()=>{const[f,i]=_e(p),m=ee.filterProps(t),g=ce.filterProps(t),b=u.label?u.label({label:t.label,props:{for:r.value}}):t.label;return e(ee,A({class:["v-radio-group",t.class],style:t.style},f,m,{modelValue:l.value,"onUpdate:modelValue":c=>l.value=c,id:r.value}),{...u,default:c=>{let{id:n,messagesId:o,isDisabled:y,isReadonly:E}=c;return e(D,null,[b&&e(we,{id:n.value},{default:()=>[b]}),e(xe,A(g,{id:n.value,"aria-describedby":o.value,defaultsTarget:"VRadio",trueIcon:t.trueIcon,falseIcon:t.falseIcon,type:t.type,disabled:y.value,readonly:E.value,"aria-labelledby":b?n.value:void 0,multiple:!1},i,{modelValue:l.value,"onUpdate:modelValue":v=>l.value=v}),u)])}})}),{}}}),Qe=t=>(ue("data-v-7c638aa6"),t=t(),ie(),t),Te={style:{color:"#0080ff"}},ze={style:{color:"black"},class:"font-weight-semibold mb-1"},Ne={style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},Oe={class:"me-n3",style:{padding:"20px"}},Ue=Qe(()=>V("span",{style:{color:"#0080ff"}},"Seberapa yakin jawaban anda?",-1)),Le={class:"me-n3",style:{padding:"20px"}},Ge={__name:"Question",setup(t){const s=_({}),p=U();re();const u=_([]);var d=localStorage.getItem("token");const r=_(!1);L(async()=>{Q.on("refreshQuestion",c=>{console.log("run emit trigger: ",c.number),f.value=null,i.value=null,l()}),await l()});const l=async()=>{if(d)try{const c=localStorage.getItem("paket"),n=localStorage.getItem("number"),o=await z.get("https://gateway.berkompeten.com/api/student/question?id="+c+"&number="+n,{headers:{Authorization:`Bearer ${d}`}});s.value=o.data.data,localStorage.setItem("question_id",o.data.data.id),console.log("question: ",s);const y={label:o.data.data.option_a,value:"A",color:"#0080ff"},E={label:o.data.data.option_b,value:"B",color:"#0080ff"},v={label:o.data.data.option_c,value:"C",color:"#0080ff"},P={label:o.data.data.option_d,value:"D",color:"#0080ff"},I={label:o.data.data.option_e,value:"E",color:"#0080ff"};u.value=[y,E,v,P,I],console.log("option: ",u)}catch(c){c.response&&c.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),p.push("/login"))}else p.push("/login")},f=_(null),i=_(null),m=[{label:"Sangat Yakin",value:"yakin",color:"success"},{label:"Masih Ragu",value:"ragu",color:"warning"},{label:"Saya tidak tahu untuk jawaban soal ini",value:"tidak tahu",color:"danger"}],g=()=>{console.log("selected option: ",f.value),localStorage.setItem("answer",f.value)},b=()=>{console.log("selected option yakin: ",i.value),localStorage.setItem("answerValue",i.value)};return(c,n)=>(h(),S(O,null,{default:a(()=>[e(N,{class:"outlined-card-item"},{default:a(()=>[e(j,null,{default:a(()=>[V("span",Te,$(s.value.question_number),1)]),_:1}),s.value.image_url!=""?(h(),S(Z,{key:0,src:s.value.image_url,style:{"block-size":"350px",cursor:"pointer","inline-size":"350px"},onClick:n[0]||(n[0]=o=>r.value=!0)},null,8,["src"])):G("",!0),V("p",ze,$(s.value.scenario),1),V("p",Ne,$(s.value.question),1),V("div",Oe,[e(w,{align:"center"},{default:a(()=>[e(k,{cols:"12",md:"12"},{default:a(()=>[e(le,{modelValue:f.value,"onUpdate:modelValue":n[1]||(n[1]=o=>f.value=o),class:"mb-2",onChange:g},{default:a(()=>[(h(!0),x(D,null,T(u.value,(o,y)=>(h(),S(oe,{key:y,label:o.label,value:o.value,color:o.color},null,8,["label","value","color"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})])]),_:1}),e(N,{class:"outlined-card-item"},{default:a(()=>[e(j,null,{default:a(()=>[Ue]),_:1}),V("div",Le,[e(w,{align:"center"},{default:a(()=>[e(k,{cols:"12",md:"12"},{default:a(()=>[e(le,{modelValue:i.value,"onUpdate:modelValue":n[2]||(n[2]=o=>i.value=o),class:"mb-2",onChange:b},{default:a(()=>[(h(),x(D,null,T(m,(o,y)=>e(oe,{key:y,label:o.label,value:o.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})])]),_:1}),e(De,{modelValue:r.value,"onUpdate:modelValue":n[4]||(n[4]=o=>r.value=o),"max-width":"600px"},{default:a(()=>[e(O,null,{default:a(()=>[e(F,null,{default:a(()=>[s.value.image_url!==""?(h(),S(Z,{key:0,src:s.value.image_url,style:{"max-inline-size":"100%"}},null,8,["src"])):G("",!0)]),_:1}),e(Re,null,{default:a(()=>[e(R,{color:"primary",text:"",onClick:n[3]||(n[3]=o=>r.value=!1)},{default:a(()=>[B("Close")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},je=J(Ge,[["__scopeId","data-v-7c638aa6"]]),Fe={__name:"QuestionHeader",setup(t){const s=U();var p=localStorage.getItem("token");const u=_(window.innerWidth);L(async()=>{if(window.addEventListener("resize",d),d(),p){console.log("question packet detail run: ");try{const l=localStorage.getItem("paket");console.log("question packet detail id: ",l);const f=await axios.get("https://gateway.berkompeten.com/api/student/question-packet/detail?id="+l,{headers:{Authorization:`Bearer ${p}`}});console.log("question packet detail resp: ",f.data.data),questionsPacket.value=f.data.data,console.log("question packet detail: ",questionsPacket)}catch(l){l.response&&l.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),s.push("/login"))}}else s.push("/login")}),be(()=>{window.removeEventListener("resize",d)});const d=()=>{u.value=window.innerWidth},r=async()=>{try{s.push("/review")}catch(l){console.error("review failed:",l)}};return(l,f)=>(h(),S(O,null,{default:a(()=>[e(w,{class:"match-height"},{default:a(()=>[he(e(k,{cols:"12",md:"3"},null,512),[[ke,ye(u)>=768]]),e(k,{cols:"12",md:"9"},{default:a(()=>[e(N,null,{append:a(()=>[e(w,{class:"match-height"},{default:a(()=>[e(k,{cols:"12",md:"7"},{default:a(()=>[e(R,{block:"",type:"submit",to:"/lab-values",color:"#0080ff",variant:"outlined"},{default:a(()=>[B(" Nilai Normal Laboratorium ")]),_:1})]),_:1}),e(k,{cols:"12",md:"5"},{default:a(()=>[e(R,{block:"",type:"submit",onClick:r,color:"#0080ff"},{default:a(()=>[B(" Selesaikan Test ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},We=J(Fe,[["__scopeId","data-v-7bbdcefc"]]),Me=t=>(ue("data-v-3fd320bf"),t=t(),ie(),t),Ye=Me(()=>V("span",{style:{color:"#0080ff"}},"Soal Dikerjakan",-1)),He={class:"font-weight-semibold mb-1"},Je={style:{color:"#0080ff"}},Ke={class:"d-sm-block"},Xe={key:0,class:"mt-2 text-danger",style:{color:"#ff5252"}},se=5,Ze={__name:"QuestionOrder",setup(t){const s=_([]),p=U();re();const u=_(null),d=_(null);var r=localStorage.getItem("token");const l=_(null);L(async()=>{await n()});var f=_(null),i=_(null),m=_(null),g=_(null),b=_(null),c=_(null);const n=async()=>{if(r)try{u.value=localStorage.getItem("paket"),d.value=localStorage.getItem("number");const P=(await z.get("https://gateway.berkompeten.com/api/student/questions/orders?id="+u.value,{headers:{Authorization:`Bearer ${r}`}})).data.question_numbers;console.log("question length: ",P.length),s.value=Y(()=>{const I=[];for(let C=0;C<P.length;C+=se)I.push(P.slice(C,C+se));return console.log("result: ",I),I}),console.log("GROUP BUT: ",s)}catch(v){v.response&&v.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),p.push("/login"))}else p.push("/login")},o=async()=>{localStorage.setItem("number",m),await n(),Q.emit("refreshQuestion",{number:m})},y=async v=>{localStorage.setItem("number",v),await n(),Q.emit("refreshQuestion",{number:v})},E=async()=>{if(f=localStorage.getItem("answer"),i=localStorage.getItem("answerValue"),b=localStorage.getItem("paket"),c=localStorage.getItem("question_id"),f===null){l.value="Tolong pilih jawaban terlebih dahulu";return}if(i===null){l.value="Tolong pilih seberapa yakin jawaban anda terlebih dahulu";return}if(c===null){l.value="question id is empty. please contact your administrator";return}try{console.log("paket id: ",b),console.log("ques id: ",c),console.log("answer: ",f),console.log("answer val: ",i);const v=await z.post("https://gateway.berkompeten.com/api/student/user/answer/add",{question_packet_id:b,question_id:c,answer:f,answer_value:i},{headers:{Authorization:`Bearer ${r}`}});console.log("answer submit: ",f),console.log("answer val submit: ",i),localStorage.removeItem("answer"),localStorage.removeItem("answerValue"),m=v.data.data.before_number,g=v.data.data.next_number,console.log("prev number: ",m),console.log("next number: ",g),localStorage.setItem("previousNumber",m),localStorage.setItem("number",g),await n(),Q.emit("refreshQuestion",{number:g})}catch(v){console.error("answer failed:",v),v.response&&v.response.data?l.value=v.response.data.errors:l.value="An unexpected error occurred during login."}};return(v,P)=>(h(),S(O,null,{default:a(()=>[e(w,{"no-gutters":""},{default:a(()=>[e(k,{md:"12"},{default:a(()=>[e(N,null,{append:a(()=>[V("p",He,[V("span",Je,$(d.value),1),B(" / 200 ")])]),default:a(()=>[e(j,null,{default:a(()=>[Ye]),_:1})]),_:1}),e(te),e(F,{class:"vcardtext-container"},{default:a(()=>[(h(!0),x(D,null,T(s.value.value,(I,C)=>(h(),S(w,{key:C,class:"row-item"},{default:a(()=>[(h(!0),x(D,null,T(I,q=>(h(),x("div",{key:q.number,class:"d-flex flex-wrap v-item"},[e(R,{color:d.value===q.number?"primary":q.is_fill?"#0080ff":"",variant:q.is_fill?"tonal":"outlined",class:"mb-1",style:{"block-size":"40px","inline-size":"40px"},onClick:aa=>y(q.number)},{default:a(()=>[V("span",Ke,$(q.number),1)]),_:2},1032,["color","variant","onClick"])]))),128))]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e(te),e(F,{class:"vcardtext-container"},{default:a(()=>[l.value?(h(),x("div",Xe,$(l.value),1)):G("",!0),e(w,{class:"d-flex flex-wrap"},{default:a(()=>[e(k,{cols:"6",class:"mb-1"},{default:a(()=>[e(R,{onClick:o,color:"#0080ff",variant:"outlined"},{default:a(()=>[B("Kembali")]),_:1})]),_:1}),e(k,{cols:"6",class:"mb-1"},{default:a(()=>[e(R,{onClick:E,color:"#0080ff"},{default:a(()=>[B("Selanjutnya")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},ea=J(Ze,[["__scopeId","data-v-3fd320bf"]]),fa={__name:"question-packet",setup(t){const s=localStorage.getItem("token"),p=_(null),u=U();return L(async()=>{if(s)try{const d=await z.get("https://gateway.berkompeten.com/api/student/profile",{headers:{Authorization:`Bearer ${s}`}});p.value=d.data}catch(d){d.response&&d.response.status===401&&u.push("/login")}else u.push("/login")}),(d,r)=>(h(),x(D,null,[e(w,{class:"match-height"},{default:a(()=>[e(k,{cols:"12",md:"12"},{default:a(()=>[e(We)]),_:1})]),_:1}),e(w,{class:"match-height"},{default:a(()=>[e(k,{cols:"12",md:"9"},{default:a(()=>[e(je)]),_:1}),e(k,{cols:"12",md:"3"},{default:a(()=>[e(ea)]),_:1})]),_:1})],64))}};export{fa as default};
