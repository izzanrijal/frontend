import{p as M,l as W,Y as ue,f as _,Z as de,N as Z,$ as me,a0 as Y,G as T,B as H,d as e,a1 as pe,a2 as fe,a3 as ge,I as ee,a4 as ve,a5 as _e,F as D,_ as J,u as U,M as ie,g as G,a6 as Q,o as h,e as S,w as a,a as k,t as R,J as L,c as x,W as N,X as B,b as P,Q as K,R as X,a7 as be,D as he,E as ke}from"./index-CPYb7Qps.js";import{a as O}from"./VGrid-E4kBuooo.js";import{b as A,c as j,V as w,a as y}from"./VCardItem-Ck5lCZY3.js";import{V as ae}from"./VImg-DCLJNXyk.js";import{m as ye,V as te,a as Ve}from"./VInput-6GP6enRq.js";import{m as we,V as ce,a as Ie,b as Se}from"./VSelectionControl-DMagpdJz.js";import{m as xe,V as Pe,u as Ce,a as oe}from"./VOverlay-B8fBVhQ-.js";import{f as $e}from"./forwardRefs-DWGaNmQL.js";import{a as z,V as F,b as qe}from"./VCard-UkF3KIuG.js";import{V as le}from"./VDivider-DG95TKTp.js";import"./index-IS5s_cH8.js";import"./lazy-DDulqXvV.js";const Re=M({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...xe({origin:"center center",scrollStrategy:"block",transition:{component:Pe},zIndex:2400})},"VDialog"),Be=W()({name:"VDialog",props:Re(),emits:{"update:modelValue":t=>!0},setup(t,l){let{slots:m}=l;const u=ue(t,"modelValue"),{scopeId:r}=Ce(),s=_();function f(i){var v,c;const d=i.relatedTarget,g=i.target;if(d!==g&&((v=s.value)!=null&&v.contentEl)&&((c=s.value)!=null&&c.globalTop)&&![document,s.value.contentEl].includes(g)&&!s.value.contentEl.contains(g)){const n=fe(s.value.contentEl);if(!n.length)return;const o=n[0],V=n[n.length-1];d===o?V.focus():o.focus()}}de&&Z(()=>u.value&&t.retainFocus,i=>{i?document.addEventListener("focusin",f):document.removeEventListener("focusin",f)},{immediate:!0}),Z(u,async i=>{var d,g;await me(),i?(d=s.value.contentEl)==null||d.focus({preventScroll:!0}):(g=s.value.activatorEl)==null||g.focus({preventScroll:!0})});const b=Y(()=>T({"aria-haspopup":"dialog","aria-expanded":String(u.value)},t.activatorProps));return H(()=>{const i=oe.filterProps(t);return e(oe,T({ref:s,class:["v-dialog",{"v-dialog--fullscreen":t.fullscreen,"v-dialog--scrollable":t.scrollable},t.class],style:t.style},i,{modelValue:u.value,"onUpdate:modelValue":d=>u.value=d,"aria-modal":"true",activatorProps:b.value,role:"dialog"},r),{activator:m.activator,default:function(){for(var d=arguments.length,g=new Array(d),v=0;v<d;v++)g[v]=arguments[v];return e(pe,{root:"VDialog"},{default:()=>{var c;return[(c=m.default)==null?void 0:c.call(m,...g)]}})}})}),$e({},s)}}),De=M({...we({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),se=W()({name:"VRadio",props:De(),setup(t,l){let{slots:m}=l;return H(()=>e(ce,T(t,{class:["v-radio",t.class],style:t.style,type:"radio"}),m)),{}}}),Ee=M({height:{type:[Number,String],default:"auto"},...ye(),...ge(Ie(),["multiple"]),trueIcon:{type:ee,default:"$radioOn"},falseIcon:{type:ee,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),ne=W()({name:"VRadioGroup",inheritAttrs:!1,props:Ee(),emits:{"update:modelValue":t=>!0},setup(t,l){let{attrs:m,slots:u}=l;const r=ve(),s=Y(()=>t.id||`radio-group-${r}`),f=ue(t,"modelValue");return H(()=>{const[b,i]=_e(m),d=te.filterProps(t),g=ce.filterProps(t),v=u.label?u.label({label:t.label,props:{for:s.value}}):t.label;return e(te,T({class:["v-radio-group",t.class],style:t.style},b,d,{modelValue:f.value,"onUpdate:modelValue":c=>f.value=c,id:s.value}),{...u,default:c=>{let{id:n,messagesId:o,isDisabled:V,isReadonly:E}=c;return e(D,null,[v&&e(Ve,{id:n.value},{default:()=>[v]}),e(Se,T(g,{id:n.value,"aria-describedby":o.value,defaultsTarget:"VRadio",trueIcon:t.trueIcon,falseIcon:t.falseIcon,type:t.type,disabled:V.value,readonly:E.value,"aria-labelledby":v?n.value:void 0,multiple:!1},i,{modelValue:f.value,"onUpdate:modelValue":p=>f.value=p}),u)])}})}),{}}}),Te=t=>(K("data-v-7c638aa6"),t=t(),X(),t),Ae={style:{color:"#0080ff"}},Qe={style:{color:"black"},class:"font-weight-semibold mb-1"},Ne={style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},Oe={class:"me-n3",style:{padding:"20px"}},ze=Te(()=>k("span",{style:{color:"#0080ff"}},"Seberapa yakin jawaban anda?",-1)),Ue={class:"me-n3",style:{padding:"20px"}},Ge={__name:"Question",setup(t){const l=_({}),m=U();ie();const u=_([]);var r=localStorage.getItem("token");const s=_(!1);G(async()=>{Q.on("refreshQuestion",c=>{console.log("run emit trigger: ",c.number),b.value=null,i.value=null,f()}),await f()});const f=async()=>{if(r)try{const c=localStorage.getItem("paket"),n=localStorage.getItem("number"),o=await O.get("https://gateway.berkompeten.com/api/student/question?id="+c+"&number="+n,{headers:{Authorization:`Bearer ${r}`}});l.value=o.data.data,localStorage.setItem("question_id",o.data.data.id),console.log("question: ",l);const V={label:o.data.data.option_a,value:"A",color:"#0080ff"},E={label:o.data.data.option_b,value:"B",color:"#0080ff"},p={label:o.data.data.option_c,value:"C",color:"#0080ff"},C={label:o.data.data.option_d,value:"D",color:"#0080ff"},I={label:o.data.data.option_e,value:"E",color:"#0080ff"};u.value=[V,E,p,C,I],console.log("option: ",u)}catch(c){c.response&&c.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),m.push("/login"))}else m.push("/login")},b=_(null),i=_(null),d=[{label:"Sangat Yakin",value:"yakin",color:"success"},{label:"Masih Ragu",value:"ragu",color:"warning"},{label:"Saya tidak tahu untuk jawaban soal ini",value:"tidak tahu",color:"danger"}],g=()=>{console.log("selected option: ",b.value),localStorage.setItem("answer",b.value)},v=()=>{console.log("selected option yakin: ",i.value),localStorage.setItem("answerValue",i.value)};return(c,n)=>(h(),S(z,null,{default:a(()=>[e(A,{class:"outlined-card-item"},{default:a(()=>[e(j,null,{default:a(()=>[k("span",Ae,R(l.value.question_number),1)]),_:1}),l.value.image_url!=""?(h(),S(ae,{key:0,src:l.value.image_url,style:{"block-size":"350px",cursor:"pointer","inline-size":"350px"},onClick:n[0]||(n[0]=o=>s.value=!0)},null,8,["src"])):L("",!0),k("p",Qe,R(l.value.scenario),1),k("p",Ne,R(l.value.question),1),k("div",Oe,[e(w,{align:"center"},{default:a(()=>[e(y,{cols:"12",md:"12"},{default:a(()=>[e(ne,{modelValue:b.value,"onUpdate:modelValue":n[1]||(n[1]=o=>b.value=o),class:"mb-2",onChange:g},{default:a(()=>[(h(!0),x(D,null,N(u.value,(o,V)=>(h(),S(se,{key:V,label:o.label,value:o.value,color:o.color},null,8,["label","value","color"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})])]),_:1}),e(A,{class:"outlined-card-item"},{default:a(()=>[e(j,null,{default:a(()=>[ze]),_:1}),k("div",Ue,[e(w,{align:"center"},{default:a(()=>[e(y,{cols:"12",md:"12"},{default:a(()=>[e(ne,{modelValue:i.value,"onUpdate:modelValue":n[2]||(n[2]=o=>i.value=o),class:"mb-2",onChange:v},{default:a(()=>[(h(),x(D,null,N(d,(o,V)=>e(se,{key:V,label:o.label,value:o.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})])]),_:1}),e(Be,{modelValue:s.value,"onUpdate:modelValue":n[4]||(n[4]=o=>s.value=o),"max-width":"600px"},{default:a(()=>[e(z,null,{default:a(()=>[e(F,null,{default:a(()=>[l.value.image_url!==""?(h(),S(ae,{key:0,src:l.value.image_url,style:{"max-inline-size":"100%"}},null,8,["src"])):L("",!0)]),_:1}),e(qe,null,{default:a(()=>[e(B,{color:"primary",text:"",onClick:n[3]||(n[3]=o=>s.value=!1)},{default:a(()=>[P("Close")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},Le=J(Ge,[["__scopeId","data-v-7c638aa6"]]),je=t=>(K("data-v-93b4c8d1"),t=t(),X(),t),Fe=je(()=>k("p",{style:{color:"black"},class:"font-weight-semibold mb-1"},[P(" \\ Topic \\ "),k("span",{style:{color:"#0080ff"}},"Test")],-1)),Me={__name:"QuestionHeader",setup(t){const l=U();var m=localStorage.getItem("token");G(async()=>{if(m){console.log("question packet detail run: ");try{const r=localStorage.getItem("paket");console.log("question packet detail id: ",r);const s=await axios.get("https://gateway.berkompeten.com/api/student/question-packet/detail?id="+r,{headers:{Authorization:`Bearer ${m}`}});console.log("question packet detail resp: ",s.data.data),questionsPacket.value=s.data.data,console.log("question packet detail: ",questionsPacket)}catch(r){r.response&&r.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),l.push("/login"))}}else l.push("/login")}),be(()=>{window.removeEventListener("resize",updateScreenWidth)});const u=async()=>{try{l.push("/review")}catch(r){console.error("review failed:",r)}};return(r,s)=>(h(),S(z,null,{default:a(()=>[e(w,{class:"match-height"},{default:a(()=>[he(e(y,{cols:"12",md:"3"},{default:a(()=>[e(A,{class:"outlined-card-item"},{default:a(()=>[Fe]),_:1})]),_:1},512),[[ke,r.screenWidth>=768]]),e(y,{cols:"12",md:"9"},{default:a(()=>[e(A,null,{append:a(()=>[e(w,{class:"match-height"},{default:a(()=>[e(y,{cols:"12",md:"7"},{default:a(()=>[e(B,{block:"",type:"submit",to:"/lab-values",color:"#0080ff",variant:"outlined"},{default:a(()=>[P(" Nilai Normal Laboratorium ")]),_:1})]),_:1}),e(y,{cols:"12",md:"5"},{default:a(()=>[e(B,{block:"",type:"submit",onClick:u,color:"#0080ff"},{default:a(()=>[P(" Selesaikan Test ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},We=J(Me,[["__scopeId","data-v-93b4c8d1"]]),Ye=t=>(K("data-v-2e74da60"),t=t(),X(),t),He=Ye(()=>k("span",{style:{color:"#0080ff"}},"Soal Dikerjakan",-1)),Je={class:"font-weight-semibold mb-1"},Ke={style:{color:"#0080ff"}},Xe={class:"d-sm-block"},Ze={key:0,class:"mt-2 text-danger",style:{color:"#ff5252"}},re=5,ea={__name:"QuestionOrder",setup(t){const l=_([]),m=U();ie();const u=_(null),r=_(null);var s=localStorage.getItem("token");const f=_(null);G(async()=>{await n()});var b=_(null),i=_(null),d=_(null),g=_(null),v=_(null),c=_(null);const n=async()=>{if(s)try{u.value=localStorage.getItem("paket"),r.value=localStorage.getItem("number");const C=(await O.get("https://gateway.berkompeten.com/api/student/questions/orders?id="+u.value,{headers:{Authorization:`Bearer ${s}`}})).data.question_numbers;console.log("question length: ",C.length),l.value=Y(()=>{const I=[];for(let $=0;$<C.length;$+=re)I.push(C.slice($,$+re));return console.log("result: ",I),I}),console.log("GROUP BUT: ",l)}catch(p){p.response&&p.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),m.push("/login"))}else m.push("/login")},o=async()=>{localStorage.setItem("number",d),await n(),Q.emit("refreshQuestion",{number:d})},V=async p=>{localStorage.setItem("number",p),await n(),Q.emit("refreshQuestion",{number:p})},E=async()=>{if(b=localStorage.getItem("answer"),i=localStorage.getItem("answerValue"),v=localStorage.getItem("paket"),c=localStorage.getItem("question_id"),b===null){f.value="Tolong pilih jawaban terlebih dahulu";return}if(i===null){f.value="Tolong pilih seberapa yakin jawaban anda terlebih dahulu";return}if(c===null){f.value="question id is empty. please contact your administrator";return}try{console.log("paket id: ",v),console.log("ques id: ",c),console.log("answer: ",b),console.log("answer val: ",i);const p=await O.post("https://gateway.berkompeten.com/api/student/user/answer/add",{question_packet_id:v,question_id:c,answer:b,answer_value:i},{headers:{Authorization:`Bearer ${s}`}});console.log("answer submit: ",b),console.log("answer val submit: ",i),localStorage.removeItem("answer"),localStorage.removeItem("answerValue"),d=p.data.data.before_number,g=p.data.data.next_number,console.log("prev number: ",d),console.log("next number: ",g),localStorage.setItem("previousNumber",d),localStorage.setItem("number",g),await n(),Q.emit("refreshQuestion",{number:g})}catch(p){console.error("answer failed:",p),p.response&&p.response.data?f.value=p.response.data.errors:f.value="An unexpected error occurred during login."}};return(p,C)=>(h(),S(z,null,{default:a(()=>[e(w,{"no-gutters":""},{default:a(()=>[e(y,{md:"12"},{default:a(()=>[e(A,null,{append:a(()=>[k("p",Je,[k("span",Ke,R(r.value),1),P(" / 200 ")])]),default:a(()=>[e(j,null,{default:a(()=>[He]),_:1})]),_:1}),e(le),e(F,{class:"vcardtext-container"},{default:a(()=>[(h(!0),x(D,null,N(l.value.value,(I,$)=>(h(),S(w,{key:$,class:"row-item"},{default:a(()=>[(h(!0),x(D,null,N(I,q=>(h(),x("div",{key:q.number,class:"d-flex flex-wrap v-item"},[e(B,{color:q.is_current?"primary":q.is_fill?"#0080ff":"",variant:q.is_fill?"tonal":"outlined",class:"mb-1",style:{"block-size":"40px","inline-size":"40px"},onClick:ta=>V(q.number)},{default:a(()=>[k("span",Xe,R(q.number),1)]),_:2},1032,["color","variant","onClick"])]))),128))]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e(le),e(F,{class:"vcardtext-container"},{default:a(()=>[f.value?(h(),x("div",Ze,R(f.value),1)):L("",!0),e(w,{class:"d-flex flex-wrap"},{default:a(()=>[e(y,{cols:"6",class:"mb-1"},{default:a(()=>[e(B,{onClick:o,color:"#0080ff",variant:"outlined"},{default:a(()=>[P("Kembali")]),_:1})]),_:1}),e(y,{cols:"6",class:"mb-1"},{default:a(()=>[e(B,{onClick:E,color:"#0080ff"},{default:a(()=>[P("Selanjutnya")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},aa=J(ea,[["__scopeId","data-v-2e74da60"]]),ga={__name:"question-packet",setup(t){const l=localStorage.getItem("token"),m=_(null),u=U();return G(async()=>{if(l)try{const r=await O.get("https://gateway.berkompeten.com/api/student/profile",{headers:{Authorization:`Bearer ${l}`}});m.value=r.data}catch(r){r.response&&r.response.status===401&&u.push("/login")}else u.push("/login")}),(r,s)=>(h(),x(D,null,[e(w,{class:"match-height"},{default:a(()=>[e(y,{cols:"12",md:"12"},{default:a(()=>[e(We)]),_:1})]),_:1}),e(w,{class:"match-height"},{default:a(()=>[e(y,{cols:"12",md:"9"},{default:a(()=>[e(Le)]),_:1}),e(y,{cols:"12",md:"3"},{default:a(()=>[e(aa)]),_:1})]),_:1})],64))}};export{ga as default};
