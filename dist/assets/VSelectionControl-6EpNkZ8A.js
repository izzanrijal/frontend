import{p as h,I as G,b6 as L,m as T,ae as Y,k as z,l as U,a0 as R,$ as _,Y as u,al as J,at as K,ag as O,s as n,B as $,d,a$ as Q,a5 as D,f as W,a1 as X,G as w,D as Z,am as p,F as ee,V as le,ao as ae,af as te,aB as I,y as oe,q as ne,aC as ue,aq as re}from"./index-PqEjC1nq.js";import{a as ie}from"./VInput-UqHQQ_Ev.js";const q=Symbol.for("vuetify:selection-control-group"),E=h({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:G,trueIcon:G,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:L},...T(),...Y(),...z()},"SelectionControlGroup"),ce=h({...E({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),me=U()({name:"VSelectionControlGroup",props:ce(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:v}=r;const l=R(e,"modelValue"),t=_(),m=u(()=>e.id||`v-selection-control-group-${t}`),c=u(()=>e.name||m.value),a=new Set;return J(q,{modelValue:l,forceUpdate:()=>{a.forEach(o=>o())},onForceUpdate:o=>{a.add(o),K(()=>{a.delete(o)})}}),O({[e.defaultsTarget]:{color:n(e,"color"),disabled:n(e,"disabled"),density:n(e,"density"),error:n(e,"error"),inline:n(e,"inline"),modelValue:l,multiple:u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:n(e,"falseIcon"),trueIcon:n(e,"trueIcon"),readonly:n(e,"readonly"),ripple:n(e,"ripple"),type:n(e,"type"),valueComparator:n(e,"valueComparator")}}),$(()=>{var o;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(o=v.default)==null?void 0:o.call(v)])}),{}}}),se=h({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...T(),...E()},"VSelectionControl");function de(e){const r=ae(q,void 0),{densityClasses:v}=te(e),l=R(e,"modelValue"),t=u(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),m=u(()=>e.falseValue!==void 0?e.falseValue:!1),c=u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=u({get(){const f=r?r.modelValue.value:l.value;return c.value?I(f).some(i=>e.valueComparator(i,t.value)):e.valueComparator(f,t.value)},set(f){if(e.readonly)return;const i=f?t.value:m.value;let s=i;c.value&&(s=f?[...I(l.value),i]:I(l.value).filter(C=>!e.valueComparator(C,t.value))),r?r.modelValue.value=s:l.value=s}}),{textColorClasses:o,textColorStyles:V}=oe(u(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:b,backgroundColorStyles:g}=ne(u(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),k=u(()=>a.value?e.trueIcon:e.falseIcon);return{group:r,densityClasses:v,trueValue:t,falseValue:m,model:a,textColorClasses:o,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:g,icon:k}}const ye=U()({name:"VSelectionControl",directives:{Ripple:Q},inheritAttrs:!1,props:se(),emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:v,slots:l}=r;const{group:t,densityClasses:m,icon:c,model:a,textColorClasses:o,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:g,trueValue:k}=de(e),f=_(),i=u(()=>e.id||`input-${f}`),s=D(!1),C=D(!1),S=W();t==null||t.onForceUpdate(()=>{S.value&&(S.value.checked=a.value)});function B(y){s.value=!0,ue(y.target,":focus-visible")!==!1&&(C.value=!0)}function F(){s.value=!1,C.value=!1}function M(y){e.readonly&&t&&re(()=>t.forceUpdate()),a.value=y.target.checked}return $(()=>{var A,P;const y=l.label?l.label({label:e.label,props:{for:i.value}}):e.label,[N,j]=X(v),x=d("input",w({ref:S,checked:a.value,disabled:!!(e.readonly||e.disabled),id:i.value,onBlur:F,onFocus:B,onInput:M,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},j),null);return d("div",w({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":s.value,"v-selection-control--focus-visible":C.value,"v-selection-control--inline":e.inline},m.value,e.class]},N,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",o.value],style:V.value},[(A=l.default)==null?void 0:A.call(l,{backgroundColorClasses:b,backgroundColorStyles:g}),Z(d("div",{class:["v-selection-control__input"]},[((P=l.input)==null?void 0:P.call(l,{model:a,textColorClasses:o,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:g,inputNode:x,icon:c.value,props:{onFocus:B,onBlur:F,id:i.value}}))??d(ee,null,[c.value&&d(le,{key:"icon",icon:c.value},null),x])]),[[p("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),y&&d(ie,{for:i.value,clickable:!0,onClick:H=>H.stopPropagation()},{default:()=>[y]})])}),{isFocused:s,input:S}}});export{ye as V,E as a,me as b,se as m};
