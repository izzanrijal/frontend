import{g as e,p as a,e as l,m as s,b as t,H as n,w as i,a1 as r,f as o,q as u,t as d,X as v,u as p,I as c}from"./vuetify-BGzDg8SZ.js";import{v as f,c as g,d as y,s as m,b as V,j as h,p as b,J as S,u as I,a6 as M,o as B,l as k,y as x}from"./vendor-BrUfZ_qe.js";import{V as $,c as A,i as C,r as D}from"./index-BAywq0Ob.js";import{c as _}from"./index-xgti94jS.js";import{M as z,m as j}from"./VImg-B_JtkRwX.js";const O=a({text:String,clickable:Boolean,...t(),...s()},"VLabel"),R=e()({name:"VLabel",props:O(),setup(e,a){let{slots:s}=a;return l((()=>{var a;return f("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,null==(a=s.default)?void 0:a.call(s)])})),{}}});function w(e){const{t:a}=n();return{InputIcon:function(l){let{name:s}=l;const t={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[s],n=e[`onClick:${s}`],i=n&&t?a(`$vuetify.input.${t}`,e.label??""):void 0;return f($,{icon:e[`${s}Icon`],"aria-label":i,onClick:n},null)}}}const E=a({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...t(),...j({transition:{component:_,leaveAbsolute:!0,group:!0}})},"VMessages"),F=e()({name:"VMessages",props:E(),setup(e,a){let{slots:s}=a;const t=g((()=>i(e.messages))),{textColorClasses:n,textColorStyles:r}=A(g((()=>e.color)));return l((()=>f(z,{transition:e.transition,tag:"div",class:["v-messages",n.value,e.class],style:[r.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&t.value.map(((e,a)=>f("div",{class:"v-messages__message",key:`${a}-${t.value}`},[s.message?s.message({message:e}):e])))]}))),{}}}),H=a({focused:Boolean,"onUpdate:focused":r()},"focus");function P(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o();const l=u(e,"focused");return{focusClasses:g((()=>({[`${a}--focused`]:l.value}))),isFocused:l,focus:function(){l.value=!0},blur:function(){l.value=!1}}}const L=Symbol.for("vuetify:form"),q=a({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function J(e){const a=u(e,"modelValue"),l=g((()=>e.disabled)),s=g((()=>e.readonly)),t=m(!1),n=V([]),i=V([]);return h(n,(()=>{let e=0,l=0;const s=[];for(const a of n.value)!1===a.isValid?(l++,s.push({id:a.id,errorMessages:a.errorMessages})):!0===a.isValid&&e++;i.value=s,a.value=!(l>0)&&(e===n.value.length||null)}),{deep:!0}),b(L,{register:e=>{let{id:a,validate:l,reset:s,resetValidation:t}=e;n.value.some((e=>e.id===a)),n.value.push({id:a,validate:l,reset:s,resetValidation:t,isValid:null,errorMessages:[]})},unregister:e=>{n.value=n.value.filter((a=>a.id!==e))},update:(e,a,l)=>{const s=n.value.find((a=>a.id===e));s&&(s.isValid=a,s.errorMessages=l)},isDisabled:l,isReadonly:s,isValidating:t,isValid:a,items:n,validateOn:S(e,"validateOn")}),{errors:i,isDisabled:l,isReadonly:s,isValidating:t,isValid:a,items:n,validate:async function(){const a=[];let l=!0;i.value=[],t.value=!0;for(const s of n.value){const t=await s.validate();if(t.length>0&&(l=!1,a.push({id:s.id,errorMessages:t})),!l&&e.fastFail)break}return i.value=a,t.value=!1,{valid:l,errors:i.value}},reset:function(){n.value.forEach((e=>e.reset()))},resetValidation:function(){n.value.forEach((e=>e.resetValidation()))}}}function N(){return y(L,null)}const U=a({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...H()},"validation");const X=a({id:String,appendIcon:c,centerAffix:{type:Boolean,default:!0},prependIcon:c,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":r(),"onClick:append":r(),...t(),...D(),...U()},"VInput"),G=e()({name:"VInput",props:{...X()},emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:s,slots:t,emit:n}=a;const{densityClasses:r}=C(e),{rtlClasses:c}=p(),{InputIcon:y}=w(e),b=d(),S=g((()=>e.id||`input-${b}`)),$=g((()=>`${S.value}-messages`)),{errorMessages:A,isDirty:D,isDisabled:_,isReadonly:z,isPristine:j,isValid:O,isValidating:R,reset:E,resetValidation:H,validate:P,validationClasses:L}=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o(),l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d();const s=u(e,"modelValue"),t=g((()=>void 0===e.validationValue?s.value:e.validationValue)),n=N(),r=V([]),p=m(!0),c=g((()=>!(!i(""===s.value?null:s.value).length&&!i(""===t.value?null:t.value).length))),f=g((()=>!!(e.disabled??(null==n?void 0:n.isDisabled.value)))),y=g((()=>!!(e.readonly??(null==n?void 0:n.isReadonly.value)))),b=g((()=>{var a;return(null==(a=e.errorMessages)?void 0:a.length)?i(e.errorMessages).concat(r.value).slice(0,Math.max(0,+e.maxErrors)):r.value})),S=g((()=>{let a=(e.validateOn??(null==n?void 0:n.validateOn.value))||"input";"lazy"===a&&(a="input lazy");const l=new Set((null==a?void 0:a.split(" "))??[]);return{blur:l.has("blur")||l.has("input"),input:l.has("input"),submit:l.has("submit"),lazy:l.has("lazy")}})),$=g((()=>{var a;return!e.error&&!(null==(a=e.errorMessages)?void 0:a.length)&&(!e.rules.length||(p.value?!r.value.length&&!S.value.lazy||null:!r.value.length))})),A=m(!1),C=g((()=>({[`${a}--error`]:!1===$.value,[`${a}--dirty`]:c.value,[`${a}--disabled`]:f.value,[`${a}--readonly`]:y.value}))),D=g((()=>e.name??I(l)));function _(){s.value=null,x(z)}function z(){p.value=!0,S.value.lazy?r.value=[]:j(!0)}async function j(){let a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const l=[];A.value=!0;for(const s of e.rules){if(l.length>=+(e.maxErrors??1))break;const a="function"==typeof s?s:()=>s,n=await a(t.value);!0!==n&&(!1!==n&&"string"!=typeof n||l.push(n||""))}return r.value=l,A.value=!1,p.value=a,r.value}return M((()=>{null==n||n.register({id:D.value,validate:j,reset:_,resetValidation:z})})),B((()=>{null==n||n.unregister(D.value)})),k((async()=>{S.value.lazy||await j(!0),null==n||n.update(D.value,$.value,b.value)})),v((()=>S.value.input),(()=>{h(t,(()=>{if(null!=t.value)j();else if(e.focused){const a=h((()=>e.focused),(e=>{e||j(),a()}))}}))})),v((()=>S.value.blur),(()=>{h((()=>e.focused),(e=>{e||j()}))})),h($,(()=>{null==n||n.update(D.value,$.value,b.value)})),{errorMessages:b,isDirty:c,isDisabled:f,isReadonly:y,isPristine:p,isValid:$,isValidating:A,reset:_,resetValidation:z,validate:j,validationClasses:C}}(e,"v-input",S),q=g((()=>({id:S,messagesId:$,isDirty:D,isDisabled:_,isReadonly:z,isPristine:j,isValid:O,isValidating:R,reset:E,resetValidation:H,validate:P}))),J=g((()=>{var a;return(null==(a=e.errorMessages)?void 0:a.length)||!j.value&&A.value.length?A.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages}));return l((()=>{var a,l,s,n;const i=!(!t.prepend&&!e.prependIcon),o=!(!t.append&&!e.appendIcon),u=J.value.length>0,d=!e.hideDetails||"auto"===e.hideDetails&&(u||!!t.details);return f("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},r.value,c.value,L.value,e.class],style:e.style},[i&&f("div",{key:"prepend",class:"v-input__prepend"},[null==(a=t.prepend)?void 0:a.call(t,q.value),e.prependIcon&&f(y,{key:"prepend-icon",name:"prepend"},null)]),t.default&&f("div",{class:"v-input__control"},[null==(l=t.default)?void 0:l.call(t,q.value)]),o&&f("div",{key:"append",class:"v-input__append"},[e.appendIcon&&f(y,{key:"append-icon",name:"append"},null),null==(s=t.append)?void 0:s.call(t,q.value)]),d&&f("div",{class:"v-input__details"},[f(F,{id:$.value,active:u,messages:J.value},{message:t.message}),null==(n=t.details)?void 0:n.call(t,q.value)])])})),{reset:E,resetValidation:H,validate:P,isValid:O,errorMessages:A}}});export{G as V,R as a,P as b,H as c,w as d,J as e,q as f,X as m,N as u};
