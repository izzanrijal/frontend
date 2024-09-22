import{p as B,m as _,k as G,l as w,B as z,d as m,x as J,V as Q,Z as c,aD as P,y as W,bi as K,a0 as R,aK as A,ab as D,f as F,N as x,ap as X,s as ee,as as ae,a6 as U,H as ne,bj as te,aI as se,g as le,aB as j,a2 as ie,I as H,ai as ue,aj as re,ae as oe}from"./index-CL_KVfdD.js";import{c as de}from"./index-DGchRb15.js";import{m as ce,M as ve}from"./VImg-F-87isU7.js";const fe=B({text:String,clickable:Boolean,..._(),...G()},"VLabel"),Be=w()({name:"VLabel",props:fe(),setup(e,d){let{slots:r}=d;return z(()=>{var n;return m("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,(n=r.default)==null?void 0:n.call(r)])}),{}}});function ge(e){const{t:d}=J();function r(n){let{name:o}=n;const a={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[o],t=e[`onClick:${o}`],f=t&&a?d(`$vuetify.input.${a}`,e.label??""):void 0;return m(Q,{icon:e[`${o}Icon`],"aria-label":f,onClick:t},null)}return{InputIcon:r}}const me=B({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},..._(),...ce({transition:{component:de,leaveAbsolute:!0,group:!0}})},"VMessages"),ye=w()({name:"VMessages",props:me(),setup(e,d){let{slots:r}=d;const n=c(()=>P(e.messages)),{textColorClasses:o,textColorStyles:a}=W(c(()=>e.color));return z(()=>m(ve,{transition:e.transition,tag:"div",class:["v-messages",o.value,e.class],style:[a.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&n.value.map((t,f)=>m("div",{class:"v-messages__message",key:`${f}-${n.value}`},[r.message?r.message({message:t}):t]))]})),{}}}),he=B({focused:Boolean,"onUpdate:focused":A()},"focus");function xe(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K();const r=R(e,"focused"),n=c(()=>({[`${d}--focused`]:r.value}));function o(){r.value=!0}function a(){r.value=!1}return{focusClasses:n,isFocused:r,focus:o,blur:a}}const Y=Symbol.for("vuetify:form"),Ce=B({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function Pe(e){const d=R(e,"modelValue"),r=c(()=>e.disabled),n=c(()=>e.readonly),o=D(!1),a=F([]),t=F([]);async function f(){const s=[];let l=!0;t.value=[],o.value=!0;for(const v of a.value){const i=await v.validate();if(i.length>0&&(l=!1,s.push({id:v.id,errorMessages:i})),!l&&e.fastFail)break}return t.value=s,o.value=!1,{valid:l,errors:t.value}}function I(){a.value.forEach(s=>s.reset())}function V(){a.value.forEach(s=>s.resetValidation())}return x(a,()=>{let s=0,l=0;const v=[];for(const i of a.value)i.isValid===!1?(l++,v.push({id:i.id,errorMessages:i.errorMessages})):i.isValid===!0&&s++;t.value=v,d.value=l>0?!1:s===a.value.length?!0:null},{deep:!0}),X(Y,{register:s=>{let{id:l,validate:v,reset:i,resetValidation:p}=s;a.value.some(M=>M.id===l),a.value.push({id:l,validate:v,reset:i,resetValidation:p,isValid:null,errorMessages:[]})},unregister:s=>{a.value=a.value.filter(l=>l.id!==s)},update:(s,l,v)=>{const i=a.value.find(p=>p.id===s);i&&(i.isValid=l,i.errorMessages=v)},isDisabled:r,isReadonly:n,isValidating:o,isValid:d,items:a,validateOn:ee(e,"validateOn")}),{errors:t,isDisabled:r,isReadonly:n,isValidating:o,isValid:d,items:a,validate:f,reset:I,resetValidation:V}}function pe(){return ae(Y,null)}const Ve=B({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...he()},"validation");function be(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K(),r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:U();const n=R(e,"modelValue"),o=c(()=>e.validationValue===void 0?n.value:e.validationValue),a=pe(),t=F([]),f=D(!0),I=c(()=>!!(P(n.value===""?null:n.value).length||P(o.value===""?null:o.value).length)),V=c(()=>!!(e.disabled??(a==null?void 0:a.isDisabled.value))),s=c(()=>!!(e.readonly??(a==null?void 0:a.isReadonly.value))),l=c(()=>{var u;return(u=e.errorMessages)!=null&&u.length?P(e.errorMessages).concat(t.value).slice(0,Math.max(0,+e.maxErrors)):t.value}),v=c(()=>{let u=(e.validateOn??(a==null?void 0:a.validateOn.value))||"input";u==="lazy"&&(u="input lazy");const g=new Set((u==null?void 0:u.split(" "))??[]);return{blur:g.has("blur")||g.has("input"),input:g.has("input"),submit:g.has("submit"),lazy:g.has("lazy")}}),i=c(()=>{var u;return e.error||(u=e.errorMessages)!=null&&u.length?!1:e.rules.length?f.value?t.value.length||v.value.lazy?null:!0:!t.value.length:!0}),p=D(!1),M=c(()=>({[`${d}--error`]:i.value===!1,[`${d}--dirty`]:I.value,[`${d}--disabled`]:V.value,[`${d}--readonly`]:s.value})),k=c(()=>e.name??ne(r));te(()=>{a==null||a.register({id:k.value,validate:y,reset:C,resetValidation:S})}),se(()=>{a==null||a.unregister(k.value)}),le(async()=>{v.value.lazy||await y(!0),a==null||a.update(k.value,i.value,l.value)}),j(()=>v.value.input,()=>{x(o,()=>{if(o.value!=null)y();else if(e.focused){const u=x(()=>e.focused,g=>{g||y(),u()})}})}),j(()=>v.value.blur,()=>{x(()=>e.focused,u=>{u||y()})}),x(i,()=>{a==null||a.update(k.value,i.value,l.value)});function C(){n.value=null,ie(S)}function S(){f.value=!0,v.value.lazy?t.value=[]:y(!0)}async function y(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const g=[];p.value=!0;for(const b of e.rules){if(g.length>=+(e.maxErrors??1))break;const h=await(typeof b=="function"?b:()=>b)(o.value);if(h!==!0){if(h!==!1&&typeof h!="string"){console.warn(`${h} is not a valid value. Rule functions must return boolean true or a string.`);continue}g.push(h||"")}}return t.value=g,p.value=!1,f.value=u,t.value}return{errorMessages:l,isDirty:I,isDisabled:V,isReadonly:s,isPristine:f,isValid:i,isValidating:p,reset:C,resetValidation:S,validate:y,validationClasses:M}}const ke=B({id:String,appendIcon:H,centerAffix:{type:Boolean,default:!0},prependIcon:H,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":A(),"onClick:append":A(),..._(),...ue(),...Ve()},"VInput"),$e=w()({name:"VInput",props:{...ke()},emits:{"update:modelValue":e=>!0},setup(e,d){let{attrs:r,slots:n,emit:o}=d;const{densityClasses:a}=re(e),{rtlClasses:t}=oe(),{InputIcon:f}=ge(e),I=U(),V=c(()=>e.id||`input-${I}`),s=c(()=>`${V.value}-messages`),{errorMessages:l,isDirty:v,isDisabled:i,isReadonly:p,isPristine:M,isValid:k,isValidating:C,reset:S,resetValidation:y,validate:u,validationClasses:g}=be(e,"v-input",V),b=c(()=>({id:V,messagesId:s,isDirty:v,isDisabled:i,isReadonly:p,isPristine:M,isValid:k,isValidating:C,reset:S,resetValidation:y,validate:u})),$=c(()=>{var h;return(h=e.errorMessages)!=null&&h.length||!M.value&&l.value.length?l.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return z(()=>{var O,T,L,N;const h=!!(n.prepend||e.prependIcon),Z=!!(n.append||e.appendIcon),E=$.value.length>0,q=!e.hideDetails||e.hideDetails==="auto"&&(E||!!n.details);return m("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},a.value,t.value,g.value,e.class],style:e.style},[h&&m("div",{key:"prepend",class:"v-input__prepend"},[(O=n.prepend)==null?void 0:O.call(n,b.value),e.prependIcon&&m(f,{key:"prepend-icon",name:"prepend"},null)]),n.default&&m("div",{class:"v-input__control"},[(T=n.default)==null?void 0:T.call(n,b.value)]),Z&&m("div",{key:"append",class:"v-input__append"},[e.appendIcon&&m(f,{key:"append-icon",name:"append"},null),(L=n.append)==null?void 0:L.call(n,b.value)]),q&&m("div",{class:"v-input__details"},[m(ye,{id:s.value,active:E,messages:$.value},{message:n.message}),(N=n.details)==null?void 0:N.call(n,b.value)])])}),{reset:S,resetValidation:y,validate:u,isValid:k,errorMessages:l}}});export{$e as V,Be as a,xe as b,Ce as c,Pe as d,he as e,ge as f,ke as m,pe as u};
