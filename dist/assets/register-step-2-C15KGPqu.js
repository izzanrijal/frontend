import{p as X,m as ke,q as fe,am as Ie,O as j,C as ve,d as l,F as G,H as $,M as Be,ad as F,av as ge,f as L,Z as A,aw as Te,an as ue,ax as Ae,a3 as Oe,a2 as Ce,ay as Le,az as Me,aA as Fe,v as Ee,aB as Ue,aj as ae,g as Pe,I as He,a6 as qe,y as Ne,a1 as ye,V as _e,aC as Ke,a4 as ze,b as me,aD as $e,aE as Ve,_ as je,at as We,A as Ge,u as Je,c as we,w,J as y,o as be,a as H,$ as Xe,X as Ye,t as Ze,K as Qe,P as et,R as tt,S as at}from"./index-CFfQD6KI.js";import{_ as lt,a as nt,b as ot}from"./auth-v1-tree-QKWYtU5m.js";import{l as st}from"./berkompeten_logo-eijgBe6e.js";import{a as rt,b as it}from"./auth-v1-mask-light-Dw7KYw8D.js";import{a as le}from"./VGrid-ukUykM_g.js";import{V as ut,c as ct,e as dt,a as mt,b as O}from"./VCard-BkM11dtO.js";import{m as ft,V as ce}from"./VImg-C-Xm8kAh.js";import{m as vt,a as J,V as pt}from"./VForm-DjC494Xt.js";import{u as ht,a as gt}from"./VInput-BY6qN6On.js";import{f as yt}from"./forwardRefs-DWGaNmQL.js";import{m as _t,u as Vt,a as wt,V as Se}from"./VList-Bf7H2foI.js";import{g as bt,V as St}from"./VOverlay-ihcVdfSU.js";import{V as xt}from"./VMenu-CbEAn8X2.js";import{a as kt,V as It}from"./VCheckbox-D1nyFlBw.js";import{V as Tt}from"./VChip-BvUHWZCZ.js";import{V as xe}from"./VDivider-CbALn80v.js";import"./index-CmYAEvk7.js";import"./ssrBoot-51i722n3.js";import"./VListItemTitle-DqQtqlFs.js";import"./lazy-Bb0twQnu.js";import"./VSelectionControl-CMp7I5oB.js";const Ct=X({renderless:Boolean,...ke()},"VVirtualScrollItem"),Pt=fe()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Ct(),emits:{"update:height":e=>!0},setup(e,t){let{attrs:o,emit:f,slots:r}=t;const{resizeRef:v,contentRect:b}=Ie(void 0,"border");j(()=>{var u;return(u=b.value)==null?void 0:u.height},u=>{u!=null&&f("update:height",u)}),ve(()=>{var u,i;return e.renderless?l(G,null,[(u=r.default)==null?void 0:u.call(r,{itemRef:v})]):l("div",$({ref:v,class:["v-virtual-scroll__item",e.class],style:e.style},o),[(i=r.default)==null?void 0:i.call(r)])})}}),Dt=-1,Rt=1,de=100,Bt=X({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function At(e,t){const o=Be(),f=F(0);ge(()=>{f.value=parseFloat(e.itemHeight||0)});const r=F(0),v=F(Math.ceil((parseInt(e.height)||o.height.value)/(f.value||16))||1),b=F(0),u=F(0),i=L(),g=L();let P=0;const{resizeRef:D,contentRect:m}=Ie();ge(()=>{D.value=i.value});const x=A(()=>{var a;return i.value===document.documentElement?o.height.value:((a=m.value)==null?void 0:a.height)||parseInt(e.height)||0}),k=A(()=>!!(i.value&&g.value&&x.value&&f.value));let c=Array.from({length:t.value.length}),n=Array.from({length:t.value.length});const S=F(0);let p=-1;function Y(a){return c[a]||f.value}const M=Ae(()=>{const a=performance.now();n[0]=0;const d=t.value.length;for(let I=1;I<=d-1;I++)n[I]=(n[I-1]||0)+Y(I-1);S.value=Math.max(S.value,performance.now()-a)},S),Z=j(k,a=>{a&&(Z(),P=g.value.offsetTop,M.immediate(),E(),~p&&Oe(()=>{Ce&&window.requestAnimationFrame(()=>{te(p),p=-1})}))});j(x,(a,d)=>{d&&E()}),Te(()=>{M.clear()});function se(a,d){const I=c[a],C=f.value;f.value=C?Math.min(f.value,d):d,(I!==d||C!==f.value)&&(c[a]=d,M())}function T(a){return a=ue(a,0,t.value.length-1),n[a]||0}function Q(a){return Ot(n,a)}let q=0,N=0,W=0;function re(){if(!i.value||!g.value)return;const a=i.value.scrollTop,d=performance.now();d-W>500?(N=Math.sign(a-q),P=g.value.offsetTop):N=a-q,q=a,W=d,E()}function K(){!i.value||!g.value||(N=0,W=0,E())}let ee=-1;function E(){cancelAnimationFrame(ee),ee=requestAnimationFrame(ie)}function ie(){if(!i.value||!x.value)return;const a=q-P,d=Math.sign(N),I=Math.max(0,a-de),C=ue(Q(I),0,t.value.length),h=a+x.value+de,_=ue(Q(h)+1,C+1,t.value.length);if((d!==Dt||C<r.value)&&(d!==Rt||_>v.value)){const V=T(r.value)-T(C),B=T(_)-T(v.value);Math.max(V,B)>de?(r.value=C,v.value=_):(C<=0&&(r.value=C),_>=t.value.length&&(v.value=_))}b.value=T(r.value),u.value=T(t.value.length)-T(v.value)}function te(a){const d=T(a);!i.value||a&&!d?p=a:i.value.scrollTop=d}const s=A(()=>t.value.slice(r.value,v.value).map((a,d)=>({raw:a,index:d+r.value})));return j(t,()=>{c=Array.from({length:t.value.length}),n=Array.from({length:t.value.length}),M.immediate(),E()},{deep:!0}),{containerRef:i,markerRef:g,computedItems:s,paddingTop:b,paddingBottom:u,scrollToIndex:te,handleScroll:re,handleScrollend:K,handleItemResize:se}}function Ot(e,t){let o=e.length-1,f=0,r=0,v=null,b=-1;if(e[o]<t)return o;for(;f<=o;)if(r=f+o>>1,v=e[r],v>t)o=r-1;else if(v<t)b=r,f=r+1;else return v===t?r:f;return b}const Lt=X({items:{type:Array,default:()=>[]},renderless:Boolean,...Bt(),...ke(),...Le()},"VVirtualScroll"),Mt=fe()({name:"VVirtualScroll",props:Lt(),setup(e,t){let{slots:o}=t;const f=Me("VVirtualScroll"),{dimensionStyles:r}=Fe(e),{containerRef:v,markerRef:b,handleScroll:u,handleScrollend:i,handleItemResize:g,scrollToIndex:P,paddingTop:D,paddingBottom:m,computedItems:x}=At(e,Ee(e,"items"));return Ue(()=>e.renderless,()=>{function k(){var S,p;const n=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";v.value===document.documentElement?(document[n]("scroll",u,{passive:!0}),document[n]("scrollend",i)):((S=v.value)==null||S[n]("scroll",u,{passive:!0}),(p=v.value)==null||p[n]("scrollend",i))}Pe(()=>{v.value=bt(f.vnode.el,!0),k(!0)}),Te(k)}),ve(()=>{const k=x.value.map(c=>l(Pt,{key:c.index,renderless:e.renderless,"onUpdate:height":n=>g(c.index,n)},{default:n=>{var S;return(S=o.default)==null?void 0:S.call(o,{item:c.raw,index:c.index,...n})}}));return e.renderless?l(G,null,[l("div",{ref:b,class:"v-virtual-scroll__spacer",style:{paddingTop:ae(D.value)}},null),k,l("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ae(m.value)}},null)]):l("div",{ref:v,class:["v-virtual-scroll",e.class],onScrollPassive:u,onScrollend:i,style:[r.value,e.style]},[l("div",{ref:b,class:"v-virtual-scroll__container",style:{paddingTop:ae(D.value),paddingBottom:ae(m.value)}},[k])])}),{scrollToIndex:P}}});function Ft(e,t){const o=F(!1);let f;function r(u){cancelAnimationFrame(f),o.value=!0,f=requestAnimationFrame(()=>{f=requestAnimationFrame(()=>{o.value=!1})})}async function v(){await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>{if(o.value){const i=j(o,()=>{i(),u()})}else u()})}async function b(u){var P,D;if(u.key==="Tab"&&((P=t.value)==null||P.focus()),!["PageDown","PageUp","Home","End"].includes(u.key))return;const i=(D=e.value)==null?void 0:D.$el;if(!i)return;(u.key==="Home"||u.key==="End")&&i.scrollTo({top:u.key==="Home"?0:i.scrollHeight,behavior:"smooth"}),await v();const g=i.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(u.key==="PageDown"||u.key==="Home"){const m=i.getBoundingClientRect().top;for(const x of g)if(x.getBoundingClientRect().top>=m){x.focus();break}}else{const m=i.getBoundingClientRect().bottom;for(const x of[...g].reverse())if(x.getBoundingClientRect().bottom<=m){x.focus();break}}}return{onListScroll:r,onListKeydown:b}}const Et=X({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:He,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,..._t({itemChildren:!1})},"Select"),Ut=X({...Et(),...qe(vt({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...ft({transition:{component:St}})},"VSelect"),ne=fe()({name:"VSelect",props:Ut(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,t){let{slots:o}=t;const{t:f}=Ne(),r=L(),v=L(),b=L(),u=ye(e,"menu"),i=A({get:()=>u.value,set:s=>{var a;u.value&&!s&&((a=v.value)!=null&&a.ΨopenChildren)||(u.value=s)}}),{items:g,transformIn:P,transformOut:D}=Vt(e),m=ye(e,"modelValue",[],s=>P(s===null?[null]:$e(s)),s=>{const a=D(s);return e.multiple?a:a[0]??null}),x=A(()=>typeof e.counterValue=="function"?e.counterValue(m.value):typeof e.counterValue=="number"?e.counterValue:m.value.length),k=ht(),c=A(()=>m.value.map(s=>s.value)),n=F(!1),S=A(()=>i.value?e.closeText:e.openText);let p="",Y;const M=A(()=>e.hideSelected?g.value.filter(s=>!m.value.some(a=>a===s)):g.value),Z=A(()=>e.hideNoData&&!g.value.length||e.readonly||(k==null?void 0:k.isReadonly.value)),se=A(()=>{var s;return{...e.menuProps,activatorProps:{...((s=e.menuProps)==null?void 0:s.activatorProps)||{},"aria-haspopup":"listbox"}}}),T=L(),{onListScroll:Q,onListKeydown:q}=Ft(T,r);function N(s){e.openOnClear&&(i.value=!0)}function W(){Z.value||(i.value=!i.value)}function re(s){var h,_;if(!s.key||e.readonly||k!=null&&k.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(s.key)&&s.preventDefault(),["Enter","ArrowDown"," "].includes(s.key)&&(i.value=!0),["Escape","Tab"].includes(s.key)&&(i.value=!1),s.key==="Home"?(h=T.value)==null||h.focus("first"):s.key==="End"&&((_=T.value)==null||_.focus("last"));const a=1e3;function d(V){const B=V.key.length===1,R=!V.ctrlKey&&!V.metaKey&&!V.altKey;return B&&R}if(e.multiple||!d(s))return;const I=performance.now();I-Y>a&&(p=""),p+=s.key.toLowerCase(),Y=I;const C=g.value.find(V=>V.title.toLowerCase().startsWith(p));C!==void 0&&(m.value=[C])}function K(s){if(e.multiple){const a=m.value.findIndex(d=>e.valueComparator(d.value,s.value));if(a===-1)m.value=[...m.value,s];else{const d=[...m.value];d.splice(a,1),m.value=d}}else m.value=[s],i.value=!1}function ee(s){var a;(a=T.value)!=null&&a.$el.contains(s.relatedTarget)||(i.value=!1)}function E(){var s;n.value&&((s=r.value)==null||s.focus())}function ie(s){n.value=!0}function te(s){if(s==null)m.value=[];else if(Ve(r.value,":autofill")||Ve(r.value,":-webkit-autofill")){const a=g.value.find(d=>d.title===s);a&&K(a)}else r.value&&(r.value.value="")}return j(i,()=>{if(!e.hideSelected&&i.value&&m.value.length){const s=M.value.findIndex(a=>m.value.some(d=>e.valueComparator(d.value,a.value)));Ce&&window.requestAnimationFrame(()=>{var a;s>=0&&((a=b.value)==null||a.scrollToIndex(s))})}}),ve(()=>{const s=!!(e.chips||o.chip),a=!!(!e.hideNoData||M.value.length||o["prepend-item"]||o["append-item"]||o["no-data"]),d=m.value.length>0,I=J.filterProps(e),C=d||!n.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return l(J,$({ref:r},I,{modelValue:m.value.map(h=>h.props.value).join(", "),"onUpdate:modelValue":te,focused:n.value,"onUpdate:focused":h=>n.value=h,validationValue:m.externalValue,counterValue:x.value,dirty:d,class:["v-select",{"v-select--active-menu":i.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":m.value.length,"v-select--selection-slot":!!o.selection},e.class],style:e.style,inputmode:"none",placeholder:C,"onClick:clear":N,"onMousedown:control":W,onBlur:ee,onKeydown:re,"aria-label":f(S.value),title:f(S.value)}),{...o,default:()=>l(G,null,[l(xt,$({ref:v,modelValue:i.value,"onUpdate:modelValue":h=>i.value=h,activator:"parent",contentClass:"v-select__content",disabled:Z.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:E},se.value),{default:()=>[a&&l(wt,{ref:T,selected:c.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:h=>h.preventDefault(),onKeydown:q,onFocusin:ie,onScrollPassive:Q,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var h,_,V;return[(h=o["prepend-item"])==null?void 0:h.call(o),!M.value.length&&!e.hideNoData&&(((_=o["no-data"])==null?void 0:_.call(o))??l(Se,{title:f(e.noDataText)},null)),l(Mt,{ref:b,renderless:!0,items:M.value},{default:B=>{var he;let{item:R,index:z,itemRef:U}=B;const pe=$(R.props,{ref:U,key:z,onClick:()=>K(R)});return((he=o.item)==null?void 0:he.call(o,{item:R,index:z,props:pe}))??l(Se,$(pe,{role:"option"}),{prepend:De=>{let{isSelected:Re}=De;return l(G,null,[e.multiple&&!e.hideSelected?l(kt,{key:R.value,modelValue:Re,ripple:!1,tabindex:"-1"},null):void 0,R.props.prependIcon&&l(_e,{icon:R.props.prependIcon},null)])}})}}),(V=o["append-item"])==null?void 0:V.call(o)]}})]}),m.value.map((h,_)=>{function V(U){U.stopPropagation(),U.preventDefault(),K(h)}const B={"onClick:close":V,onMousedown(U){U.preventDefault(),U.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},R=s?!!o.chip:!!o.selection,z=R?Ke(s?o.chip({item:h,index:_,props:B}):o.selection({item:h,index:_})):void 0;if(!(R&&!z))return l("div",{key:h.value,class:"v-select__selection"},[s?o.chip?l(ze,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:h.title}}},{default:()=>[z]}):l(Tt,$({key:"chip",closable:e.closableChips,size:"small",text:h.title,disabled:h.props.disabled},B),null):z??l("span",{class:"v-select__selection-text"},[h.title,e.multiple&&_<m.value.length-1&&l("span",{class:"v-select__selection-comma"},[me(",")])])])})]),"append-inner":function(){var B;for(var h=arguments.length,_=new Array(h),V=0;V<h;V++)_[V]=arguments[V];return l(G,null,[(B=o["append-inner"])==null?void 0:B.call(o,..._),e.menuIcon?l(_e,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),yt({isFocused:n,menu:i,select:K},r)}}),oe=e=>(tt("data-v-2e95678e"),e=e(),at(),e),Ht={class:"auth-wrapper d-flex align-center justify-center pa-4"},qt={class:"d-flex"},Nt=["innerHTML"],Kt={class:"d-flex align-center mt-1 mb-4"},zt=oe(()=>H("span",{class:"me-1"},"I agree to",-1)),$t=oe(()=>H("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1)),jt={key:0,class:"mt-2 text-danger",style:{color:"#ff5252"}},Wt=oe(()=>H("span",null,"Already have an account?",-1)),Gt=oe(()=>H("span",{class:"mx-4"},"or",-1)),Jt={__name:"register-step-2",setup(e){const t=We({email:"",password:"",password_confirmation:"",name:"",phone_number:"",gender:"",year_of_entry:"",exam_date_id:"",university_id:"",educational_status_id:"",privacyPolicies:!1}),o=Ge(),f=Je(),r=L(null);new Date().toISOString().split("T")[0];const v=c=>{const n=new Date(c);return new Intl.DateTimeFormat("en-GB").format(n)},b=A(()=>o.global.name.value==="light"?rt:it),u=async()=>{try{if(t.name==""){r.value="name is required";return}if(t.gender==""){r.value="gender is required";return}if(t.phone_number==""){r.value="phone number is required";return}if(t.exam_date_id==""){r.value="tahun masuk is required";return}if(t.university_id==""){r.value="universitas is required";return}if(t.educational_status_id==""){r.value="status edukasi is required";return}console.log("form: ",t),console.log("gender: ",t.gender.toLowerCase()),console.log("university: ",t.university_id),console.log("educational: ",t.educational_status_id),console.log("name: ",t.name);const c=await le.post("/api/student/register",{email:t.email,password:t.password,password_confirmation:t.password_confirmation,name:t.name,gender:t.gender.toLowerCase(),phone_number:t.phone_number,year_of_entry:t.year_of_entry,exam_date_id:t.exam_date_id.toString(),university_id:t.university_id.toString(),educational_status_id:t.educational_status_id.toString()});console.log("register response: ",c),localStorage.removeItem("email"),localStorage.removeItem("password"),localStorage.removeItem("confirm_password"),f.push("/login")}catch(c){console.error("Register failed:",c),c.response&&c.response.data?r.value=c.response.data.errors:r.value="An unexpected error occurred during register."}};Pe(()=>{x(),k(),m();const c=localStorage.getItem("email");t.name=localStorage.getItem("name");const n=localStorage.getItem("password"),S=localStorage.getItem("confirm_password");console.log("email r 2: ",c),console.log("password r 2: ",n),console.log("confirm password r 2: ",S),t.email=c,t.password=n,t.password_confirmation=S});const i=["Male","Female"],g=L([]),P=L([]),D=L([]),m=async()=>{try{const c=await le.get("/api/student/exam-date");g.value=c.data.data.map(n=>({id:n.id,name:v(n.name)}))}catch(c){console.error("Error fetching exam date options:",c)}},x=async()=>{try{const c=await le.get("/api/student/university");P.value=c.data.data.map(n=>({id:n.id,name:n.name}))}catch(c){console.error("Error fetching university options:",c)}},k=async()=>{try{const c=await le.get("/api/student/educational-status");D.value=c.data.data.map(n=>({id:n.id,name:n.name}))}catch(c){console.error("Error fetching educational status options:",c)}};return(c,n)=>{const S=et("RouterLink");return be(),we("div",Ht,[l(ut,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:w(()=>[l(ct,{class:"justify-center"},{prepend:w(()=>[H("div",qt,[H("div",{innerHTML:y(st)},null,8,Nt)])]),_:1}),l(dt,null,{default:w(()=>[l(pt,{onSubmit:Xe(()=>{},["prevent"])},{default:w(()=>[l(mt,null,{default:w(()=>[l(O,{cols:"12"},{default:w(()=>[l(J,{modelValue:y(t).name,"onUpdate:modelValue":n[0]||(n[0]=p=>y(t).name=p),label:"Name",placeholder:"John Doe",type:"email"},null,8,["modelValue"])]),_:1}),l(O,{cols:"12"},{default:w(()=>[l(ne,{modelValue:y(t).gender,"onUpdate:modelValue":n[1]||(n[1]=p=>y(t).gender=p),label:"Gender",items:i,placeholder:"Select gender"},null,8,["modelValue"])]),_:1}),l(O,{cols:"12"},{default:w(()=>[l(J,{modelValue:y(t).phone_number,"onUpdate:modelValue":n[2]||(n[2]=p=>y(t).phone_number=p),label:"Phone Number",placeholder:"Phone Number",type:"number"},null,8,["modelValue"])]),_:1}),l(O,{cols:"12"},{default:w(()=>[l(J,{modelValue:y(t).year_of_entry,"onUpdate:modelValue":n[3]||(n[3]=p=>y(t).year_of_entry=p),label:"Year of entry",placeholder:"2013",type:"number"},null,8,["modelValue"])]),_:1}),l(O,{cols:"12"},{default:w(()=>[l(ne,{modelValue:y(t).exam_date_id,"onUpdate:modelValue":n[4]||(n[4]=p=>y(t).exam_date_id=p),label:"Target Exam Date",items:g.value,placeholder:"Select target exam date","item-value":"id","item-title":"name"},null,8,["modelValue","items"])]),_:1}),l(O,{cols:"12"},{default:w(()=>[l(ne,{modelValue:y(t).university_id,"onUpdate:modelValue":n[5]||(n[5]=p=>y(t).university_id=p),label:"University",items:P.value,placeholder:"Select university","item-value":"id","item-title":"name"},null,8,["modelValue","items"])]),_:1}),l(O,{cols:"12"},{default:w(()=>[l(ne,{modelValue:y(t).educational_status_id,"onUpdate:modelValue":n[6]||(n[6]=p=>y(t).educational_status_id=p),label:"Educational Status",items:D.value,placeholder:"Select educational status","item-value":"id","item-title":"name"},null,8,["modelValue","items"]),H("div",Kt,[l(It,{id:"privacy-policy",modelValue:y(t).privacyPolicies,"onUpdate:modelValue":n[7]||(n[7]=p=>y(t).privacyPolicies=p),inline:""},null,8,["modelValue"]),l(gt,{for:"privacy-policy",style:{opacity:"1"}},{default:w(()=>[zt,$t]),_:1})]),l(Ye,{block:"",type:"submit",color:"#0080ff",onClick:u},{default:w(()=>[me(" Sign up ")]),_:1}),r.value?(be(),we("div",jt,Ze(r.value),1)):Qe("",!0)]),_:1}),l(O,{cols:"12",class:"text-center text-base"},{default:w(()=>[Wt,l(S,{class:"text-primary ms-2",to:"login"},{default:w(()=>[me(" Sign in instead ")]),_:1})]),_:1}),l(O,{cols:"12",class:"d-flex align-center"},{default:w(()=>[l(xe),Gt,l(xe)]),_:1}),l(O,{cols:"12",class:"text-center"},{default:w(()=>[l(lt)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(ce,{class:"auth-footer-start-tree d-none d-md-block",src:y(nt),width:250},null,8,["src"]),l(ce,{src:y(ot),class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),l(ce,{class:"auth-footer-mask d-none d-md-block",src:b.value},null,8,["src"])])}}},ga=je(Jt,[["__scopeId","data-v-2e95678e"]]);export{ga as default};
