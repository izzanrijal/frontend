import{j as e,v as a,F as l,x as t,s as n,w as o,b as s,c as r,m as i,y as u,J as d,l as c,R as m,r as v,V as p,O as f,B as h,D as g,u as y,A as _,P as V,a2 as w,W as b,S as x,$ as S,a0 as k}from"./vendor-BrUfZ_qe.js";import{a as I,b as C,_ as j}from"./auth-v1-tree-BZDbnWRu.js";import{l as T}from"./berkompeten_logo-CQUigQgy.js";import{a as A,b as P}from"./auth-v1-mask-light-Dw7KYw8D.js";import{a as D}from"./axios-fZjk1EK6.js";import{j as B,q as R,V as F,t as q,_ as L,g as U}from"./index-BAywq0Ob.js";import{V as M,c as E,e as H,a as N,b as O}from"./VCard-DQMXF3Nm.js";import{m as z,V as K}from"./VImg-B_JtkRwX.js";import{a as $,m as G,V as J}from"./VForm-Cja6eDMe.js";import{u as W,a as Y}from"./VInput-Hwser3Zj.js";import{f as X}from"./forwardRefs-BiNqQvLW.js";import{g as Z,p as Q,A as ee,e as ae,b as le,L as te,W as ne,T as oe,D as se,o as re,X as ie,Y as ue,x as de,H as ce,q as me,w as ve,P as pe,Z as fe,I as he,_ as ge,J as ye}from"./vuetify-BGzDg8SZ.js";import{u as _e,m as Ve,a as we,V as be}from"./VList-6sqlYPPX.js";import{a as xe}from"./VOverlay-CJMSwVBS.js";import{V as Se}from"./VMenu-BJ1zbG9p.js";import{a as ke,V as Ie}from"./VCheckbox-0m-11Sea.js";import{V as Ce}from"./VChip-Bk4nvOx4.js";import{V as je}from"./VDivider-Dh9aQmYu.js";import"./VGrid-DpcPUu2X.js";import"./index-xgti94jS.js";import"./ssrBoot-B8jrVcKx.js";import"./VListItemTitle-GAILHzRm.js";import"./lazy-BsvUHxNO.js";import"./VSelectionControl-C7nVvhp5.js";const Te=Q({renderless:Boolean,...le()},"VVirtualScrollItem"),Ae=Z()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Te(),emits:{"update:height":e=>!0},setup(n,o){let{attrs:s,emit:r,slots:i}=o;const{resizeRef:u,contentRect:d}=ee(void 0,"border");e((()=>{var e;return null==(e=d.value)?void 0:e.height}),(e=>{null!=e&&r("update:height",e)})),ae((()=>{var e,o;return n.renderless?a(l,null,[null==(e=i.default)?void 0:e.call(i,{itemRef:u})]):a("div",t({ref:u,class:["v-virtual-scroll__item",n.class],style:n.style},s),[null==(o=i.default)?void 0:o.call(i)])}))}}),Pe=Q({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");const De=Q({items:{type:Array,default:()=>[]},renderless:Boolean,...Pe(),...le(),...R()},"VVirtualScroll"),Be=Z()({name:"VVirtualScroll",props:De(),setup(t,m){let{slots:v}=m;const p=re("VVirtualScroll"),{dimensionStyles:f}=B(t),{containerRef:h,markerRef:g,handleScroll:y,handleScrollend:_,handleItemResize:V,scrollToIndex:w,paddingTop:b,paddingBottom:x,computedItems:S}=function(a,l){const t=te(),d=n(0);o((()=>{d.value=parseFloat(a.itemHeight||0)}));const c=n(0),m=n(Math.ceil((parseInt(a.height)||t.height.value)/(d.value||16))||1),v=n(0),p=n(0),f=s(),h=s();let g=0;const{resizeRef:y,contentRect:_}=ee();o((()=>{y.value=f.value}));const V=r((()=>{var e;return f.value===document.documentElement?t.height.value:(null==(e=_.value)?void 0:e.height)||parseInt(a.height)||0})),w=r((()=>!!(f.value&&h.value&&V.value&&d.value)));let b=Array.from({length:l.value.length}),x=Array.from({length:l.value.length});const S=n(0);let k=-1;const I=ne((()=>{const e=performance.now();x[0]=0;const a=l.value.length;for(let l=1;l<=a-1;l++)x[l]=(x[l-1]||0)+(b[l-1]||d.value);S.value=Math.max(S.value,performance.now()-e)}),S),C=e(w,(e=>{e&&(C(),g=h.value.offsetTop,I.immediate(),R(),~k&&u((()=>{se&&window.requestAnimationFrame((()=>{q(k),k=-1}))})))}));function j(e){return e=oe(e,0,l.value.length-1),x[e]||0}function T(e){return function(e,a){let l=e.length-1,t=0,n=0,o=null,s=-1;if(e[l]<a)return l;for(;t<=l;)if(n=t+l>>1,o=e[n],o>a)l=n-1;else{if(!(o<a))return o===a?n:t;s=n,t=n+1}return s}(x,e)}e(V,((e,a)=>{a&&R()})),i((()=>{I.clear()}));let A=0,P=0,D=0,B=-1;function R(){cancelAnimationFrame(B),B=requestAnimationFrame(F)}function F(){if(!f.value||!V.value)return;const e=A-g,a=Math.sign(P),t=Math.max(0,e-100),n=oe(T(t),0,l.value.length),o=e+V.value+100,s=oe(T(o)+1,n+1,l.value.length);if((-1!==a||n<c.value)&&(1!==a||s>m.value)){const e=j(c.value)-j(n),a=j(s)-j(m.value);Math.max(e,a)>100?(c.value=n,m.value=s):(n<=0&&(c.value=n),s>=l.value.length&&(m.value=s))}v.value=j(c.value),p.value=j(l.value.length)-j(m.value)}function q(e){const a=j(e);!f.value||e&&!a?k=e:f.value.scrollTop=a}const L=r((()=>l.value.slice(c.value,m.value).map(((e,a)=>({raw:e,index:a+c.value})))));return e(l,(()=>{b=Array.from({length:l.value.length}),x=Array.from({length:l.value.length}),I.immediate(),R()}),{deep:!0}),{containerRef:f,markerRef:h,computedItems:L,paddingTop:v,paddingBottom:p,scrollToIndex:q,handleScroll:function(){if(!f.value||!h.value)return;const e=f.value.scrollTop,a=performance.now();a-D>500?(P=Math.sign(e-A),g=h.value.offsetTop):P=e-A,A=e,D=a,R()},handleScrollend:function(){f.value&&h.value&&(P=0,D=0,R())},handleItemResize:function(e,a){const l=b[e],t=d.value;d.value=t?Math.min(d.value,a):a,l===a&&t===d.value||(b[e]=a,I())}}}(t,d(t,"items"));return ie((()=>t.renderless),(()=>{function e(){var e,a;const l=arguments.length>0&&void 0!==arguments[0]&&arguments[0]?"addEventListener":"removeEventListener";h.value===document.documentElement?(document[l]("scroll",y,{passive:!0}),document[l]("scrollend",_)):(null==(e=h.value)||e[l]("scroll",y,{passive:!0}),null==(a=h.value)||a[l]("scrollend",_))}c((()=>{h.value=ue(p.vnode.el,!0),e(!0)})),i(e)})),ae((()=>{const e=S.value.map((e=>a(Ae,{key:e.index,renderless:t.renderless,"onUpdate:height":a=>V(e.index,a)},{default:a=>{var l;return null==(l=v.default)?void 0:l.call(v,{item:e.raw,index:e.index,...a})}})));return t.renderless?a(l,null,[a("div",{ref:g,class:"v-virtual-scroll__spacer",style:{paddingTop:de(b.value)}},null),e,a("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:de(x.value)}},null)]):a("div",{ref:h,class:["v-virtual-scroll",t.class],onScrollPassive:y,onScrollend:_,style:[f.value,t.style]},[a("div",{ref:g,class:"v-virtual-scroll__container",style:{paddingTop:de(b.value),paddingBottom:de(x.value)}},[e])])})),{scrollToIndex:w}}});function Re(a,l){const t=n(!1);let o;return{onListScroll:function(e){cancelAnimationFrame(o),t.value=!0,o=requestAnimationFrame((()=>{o=requestAnimationFrame((()=>{t.value=!1}))}))},onListKeydown:async function(n){var o,s;if("Tab"===n.key&&(null==(o=l.value)||o.focus()),!["PageDown","PageUp","Home","End"].includes(n.key))return;const r=null==(s=a.value)?void 0:s.$el;if(!r)return;"Home"!==n.key&&"End"!==n.key||r.scrollTo({top:"Home"===n.key?0:r.scrollHeight,behavior:"smooth"}),await async function(){await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),await new Promise((a=>{if(t.value){const l=e(t,(()=>{l(),a()}))}else a()}))}();const i=r.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if("PageDown"===n.key||"Home"===n.key){const e=r.getBoundingClientRect().top;for(const a of i)if(a.getBoundingClientRect().top>=e){a.focus();break}}else{const e=r.getBoundingClientRect().bottom;for(const a of[...i].reverse())if(a.getBoundingClientRect().bottom<=e){a.focus();break}}}}}const Fe=Q({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:he,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Ve({itemChildren:!1})},"Select"),qe=Q({...Fe(),...pe(G({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...z({transition:{component:xe}})},"VSelect"),Le=Z()({name:"VSelect",props:qe(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(o,i){let{slots:u}=i;const{t:d}=ce(),c=s(),v=s(),p=s(),f=me(o,"menu"),h=r({get:()=>f.value,set:e=>{var a;f.value&&!e&&(null==(a=v.value)?void 0:a.ΨopenChildren)||(f.value=e)}}),{items:g,transformIn:y,transformOut:_}=_e(o),V=me(o,"modelValue",[],(e=>y(null===e?[null]:ve(e))),(e=>{const a=_(e);return o.multiple?a:a[0]??null})),w=r((()=>"function"==typeof o.counterValue?o.counterValue(V.value):"number"==typeof o.counterValue?o.counterValue:V.value.length)),b=W(),x=r((()=>V.value.map((e=>e.value)))),S=n(!1),k=r((()=>h.value?o.closeText:o.openText));let I,C="";const j=r((()=>o.hideSelected?g.value.filter((e=>!V.value.some((a=>a===e)))):g.value)),T=r((()=>o.hideNoData&&!g.value.length||o.readonly||(null==b?void 0:b.isReadonly.value))),A=r((()=>{var e;return{...o.menuProps,activatorProps:{...(null==(e=o.menuProps)?void 0:e.activatorProps)||{},"aria-haspopup":"listbox"}}})),P=s(),{onListScroll:D,onListKeydown:B}=Re(P,c);function R(e){o.openOnClear&&(h.value=!0)}function L(){T.value||(h.value=!h.value)}function U(e){var a,l;if(!e.key||o.readonly||(null==b?void 0:b.isReadonly.value))return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(e.key)&&e.preventDefault(),["Enter","ArrowDown"," "].includes(e.key)&&(h.value=!0),["Escape","Tab"].includes(e.key)&&(h.value=!1),"Home"===e.key?null==(a=P.value)||a.focus("first"):"End"===e.key&&(null==(l=P.value)||l.focus("last"));if(o.multiple||!function(e){const a=1===e.key.length,l=!e.ctrlKey&&!e.metaKey&&!e.altKey;return a&&l}(e))return;const t=performance.now();t-I>1e3&&(C=""),C+=e.key.toLowerCase(),I=t;const n=g.value.find((e=>e.title.toLowerCase().startsWith(C)));void 0!==n&&(V.value=[n])}function M(e){if(o.multiple){const a=V.value.findIndex((a=>o.valueComparator(a.value,e.value)));if(-1===a)V.value=[...V.value,e];else{const e=[...V.value];e.splice(a,1),V.value=e}}else V.value=[e],h.value=!1}function E(e){var a;(null==(a=P.value)?void 0:a.$el.contains(e.relatedTarget))||(h.value=!1)}function H(){var e;S.value&&(null==(e=c.value)||e.focus())}function N(e){S.value=!0}function O(e){if(null==e)V.value=[];else if(fe(c.value,":autofill")||fe(c.value,":-webkit-autofill")){const a=g.value.find((a=>a.title===e));a&&M(a)}else c.value&&(c.value.value="")}return e(h,(()=>{if(!o.hideSelected&&h.value&&V.value.length){const e=j.value.findIndex((e=>V.value.some((a=>o.valueComparator(a.value,e.value)))));se&&window.requestAnimationFrame((()=>{var a;e>=0&&(null==(a=p.value)||a.scrollToIndex(e))}))}})),ae((()=>{const e=!(!o.chips&&!u.chip),n=!!(!o.hideNoData||j.value.length||u["prepend-item"]||u["append-item"]||u["no-data"]),s=V.value.length>0,r=$.filterProps(o),i=s||!S.value&&o.label&&!o.persistentPlaceholder?void 0:o.placeholder;return a($,t({ref:c},r,{modelValue:V.value.map((e=>e.props.value)).join(", "),"onUpdate:modelValue":O,focused:S.value,"onUpdate:focused":e=>S.value=e,validationValue:V.externalValue,counterValue:w.value,dirty:s,class:["v-select",{"v-select--active-menu":h.value,"v-select--chips":!!o.chips,["v-select--"+(o.multiple?"multiple":"single")]:!0,"v-select--selected":V.value.length,"v-select--selection-slot":!!u.selection},o.class],style:o.style,inputmode:"none",placeholder:i,"onClick:clear":R,"onMousedown:control":L,onBlur:E,onKeydown:U,"aria-label":d(k.value),title:d(k.value)}),{...u,default:()=>a(l,null,[a(Se,t({ref:v,modelValue:h.value,"onUpdate:modelValue":e=>h.value=e,activator:"parent",contentClass:"v-select__content",disabled:T.value,eager:o.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:o.transition,onAfterLeave:H},A.value),{default:()=>[n&&a(we,{ref:P,selected:x.value,selectStrategy:o.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onKeydown:B,onFocusin:N,onScrollPassive:D,tabindex:"-1",color:o.itemColor??o.color},{default:()=>{var e,n,s;return[null==(e=u["prepend-item"])?void 0:e.call(u),!j.value.length&&!o.hideNoData&&((null==(n=u["no-data"])?void 0:n.call(u))??a(be,{title:d(o.noDataText)},null)),a(Be,{ref:p,renderless:!0,items:j.value},{default:e=>{var n;let{item:s,index:r,itemRef:i}=e;const d=t(s.props,{ref:i,key:r,onClick:()=>M(s)});return(null==(n=u.item)?void 0:n.call(u,{item:s,index:r,props:d}))??a(be,t(d,{role:"option"}),{prepend:e=>{let{isSelected:t}=e;return a(l,null,[o.multiple&&!o.hideSelected?a(ke,{key:s.value,modelValue:t,ripple:!1,tabindex:"-1"},null):void 0,s.props.prependIcon&&a(F,{icon:s.props.prependIcon},null)])}})}}),null==(s=u["append-item"])?void 0:s.call(u)]}})]}),V.value.map(((l,n)=>{const s={"onClick:close":function(e){e.stopPropagation(),e.preventDefault(),M(l)},onMousedown(e){e.preventDefault(),e.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},r=e?!!u.chip:!!u.selection,i=r?ge(e?u.chip({item:l,index:n,props:s}):u.selection({item:l,index:n})):void 0;if(!r||i)return a("div",{key:l.value,class:"v-select__selection"},[e?u.chip?a(q,{key:"chip-defaults",defaults:{VChip:{closable:o.closableChips,size:"small",text:l.title}}},{default:()=>[i]}):a(Ce,t({key:"chip",closable:o.closableChips,size:"small",text:l.title,disabled:l.props.disabled},s),null):i??a("span",{class:"v-select__selection-text"},[l.title,o.multiple&&n<V.value.length-1&&a("span",{class:"v-select__selection-comma"},[m(",")])])])}))]),"append-inner":function(){for(var e,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return a(l,null,[null==(e=u["append-inner"])?void 0:e.call(u,...n),o.menuIcon?a(F,{class:"v-select__menu-icon",icon:o.menuIcon},null):void 0])}})})),X({isFocused:S,menu:h,select:M},c)}}),Ue=e=>(S("data-v-f5ce8659"),e=e(),k(),e),Me={class:"auth-wrapper d-flex align-center justify-center pa-4"},Ee={class:"d-flex"},He=["innerHTML"],Ne={class:"d-flex align-center mt-1 mb-4"},Oe=Ue((()=>V("span",{class:"me-1"},"I agree to",-1))),ze=Ue((()=>V("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1))),Ke={key:0,class:"mt-2 text-danger",style:{color:"#ff5252"}},$e=Ue((()=>V("span",null,"Already have an account?",-1))),Ge=Ue((()=>V("span",{class:"mx-4"},"or",-1))),Je=L({__name:"register-step-2",setup(e){const l=v({email:"",password:"",password_confirmation:"",name:"",phone_number:"",gender:"",year_of_entry:"",exam_date_id:"",university_id:"",educational_status_id:"",privacyPolicies:!1}),t=ye(),n=p(),o=s(null);(new Date).toISOString().split("T")[0];const i=e=>{const a=new Date(e);return new Intl.DateTimeFormat("en-GB").format(a)},u=r((()=>"light"===t.global.name.value?A:P)),d=async()=>{try{if(""==l.name)return void(o.value="name is required");if(""==l.gender)return void(o.value="gender is required");if(""==l.phone_number)return void(o.value="phone number is required");if(""==l.exam_date_id)return void(o.value="tahun masuk is required");if(""==l.university_id)return void(o.value="universitas is required");if(""==l.educational_status_id)return void(o.value="status edukasi is required");await D.post("https://gateway.berkompeten.id/api/student/register",{email:l.email,password:l.password,password_confirmation:l.password_confirmation,name:l.name,gender:l.gender.toLowerCase(),phone_number:l.phone_number,year_of_entry:l.year_of_entry,exam_date_id:l.exam_date_id.toString(),university_id:l.university_id.toString(),educational_status_id:l.educational_status_id.toString()});localStorage.removeItem("email"),localStorage.removeItem("password"),localStorage.removeItem("confirm_password"),n.push("/login")}catch(e){e.response&&e.response.data?o.value=e.response.data.errors:o.value="An unexpected error occurred during register."}};c((()=>{q(),L(),F();const e=localStorage.getItem("email");l.name=localStorage.getItem("name");const a=localStorage.getItem("password"),t=localStorage.getItem("confirm_password");l.email=e,l.password=a,l.password_confirmation=t}));const S=["Male","Female"],k=s([]),B=s([]),R=s([]),F=async()=>{try{const e=await D.get("https://gateway.berkompeten.id/api/student/exam-date");k.value=e.data.data.map((e=>({id:e.id,name:i(e.name)})))}catch(e){}},q=async()=>{try{const e=await D.get("https://gateway.berkompeten.id/api/student/university");B.value=e.data.data.map((e=>({id:e.id,name:e.name})))}catch(e){}},L=async()=>{try{const e=await D.get("https://gateway.berkompeten.id/api/student/educational-status");R.value=e.data.data.map((e=>({id:e.id,name:e.name})))}catch(e){}};return(e,t)=>{const n=_("RouterLink");return h(),f("div",Me,[a(M,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:g((()=>[a(E,{class:"justify-center"},{prepend:g((()=>[V("div",Ee,[V("div",{innerHTML:y(T)},null,8,He)])])),_:1}),a(H,null,{default:g((()=>[a(J,{onSubmit:w((()=>{}),["prevent"])},{default:g((()=>[a(N,null,{default:g((()=>[a(O,{cols:"12"},{default:g((()=>[a($,{modelValue:y(l).name,"onUpdate:modelValue":t[0]||(t[0]=e=>y(l).name=e),label:"Name",placeholder:"John Doe",type:"email"},null,8,["modelValue"])])),_:1}),a(O,{cols:"12"},{default:g((()=>[a(Le,{modelValue:y(l).gender,"onUpdate:modelValue":t[1]||(t[1]=e=>y(l).gender=e),label:"Gender",items:S,placeholder:"Select gender"},null,8,["modelValue"])])),_:1}),a(O,{cols:"12"},{default:g((()=>[a($,{modelValue:y(l).phone_number,"onUpdate:modelValue":t[2]||(t[2]=e=>y(l).phone_number=e),label:"Phone Number",placeholder:"Phone Number",type:"number"},null,8,["modelValue"])])),_:1}),a(O,{cols:"12"},{default:g((()=>[a($,{modelValue:y(l).year_of_entry,"onUpdate:modelValue":t[3]||(t[3]=e=>y(l).year_of_entry=e),label:"Year of entry",placeholder:"2013",type:"number"},null,8,["modelValue"])])),_:1}),a(O,{cols:"12"},{default:g((()=>[a(Le,{modelValue:y(l).exam_date_id,"onUpdate:modelValue":t[4]||(t[4]=e=>y(l).exam_date_id=e),label:"Target Exam Date",items:k.value,placeholder:"Select target exam date","item-value":"id","item-title":"name"},null,8,["modelValue","items"])])),_:1}),a(O,{cols:"12"},{default:g((()=>[a(Le,{modelValue:y(l).university_id,"onUpdate:modelValue":t[5]||(t[5]=e=>y(l).university_id=e),label:"University",items:B.value,placeholder:"Select university","item-value":"id","item-title":"name"},null,8,["modelValue","items"])])),_:1}),a(O,{cols:"12"},{default:g((()=>[a(Le,{modelValue:y(l).educational_status_id,"onUpdate:modelValue":t[6]||(t[6]=e=>y(l).educational_status_id=e),label:"Educational Status",items:R.value,placeholder:"Select educational status","item-value":"id","item-title":"name"},null,8,["modelValue","items"]),V("div",Ne,[a(Ie,{id:"privacy-policy",modelValue:y(l).privacyPolicies,"onUpdate:modelValue":t[7]||(t[7]=e=>y(l).privacyPolicies=e),inline:""},null,8,["modelValue"]),a(Y,{for:"privacy-policy",style:{opacity:"1"}},{default:g((()=>[Oe,ze])),_:1})]),a(U,{block:"",type:"submit",color:"#0080ff",onClick:d},{default:g((()=>[m(" Sign up ")])),_:1}),o.value?(h(),f("div",Ke,x(o.value),1)):b("",!0)])),_:1}),a(O,{cols:"12",class:"text-center text-base"},{default:g((()=>[$e,a(n,{class:"text-primary ms-2",to:"login"},{default:g((()=>[m(" Sign in instead ")])),_:1})])),_:1}),a(O,{cols:"12",class:"d-flex align-center"},{default:g((()=>[a(je),Ge,a(je)])),_:1}),a(O,{cols:"12",class:"text-center"},{default:g((()=>[a(j)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),a(K,{class:"auth-footer-start-tree d-none d-md-block",src:y(I),width:250},null,8,["src"]),a(K,{src:y(C),class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),a(K,{class:"auth-footer-mask d-none d-md-block",src:u.value},null,8,["src"])])}}},[["__scopeId","data-v-f5ce8659"]]);export{Je as default};
