import{d as e,s as t,p as l,q as a,b as n,c as r,o as s,J as i,v as o,M as u,Y as d,j as v,N as c,F as p,x as f}from"./vendor-BrUfZ_qe.js";import{b as m}from"./index-xgti94jS.js";import{p as y,q as g,o as b,t as h,g as S,e as C,aj as A,b as k,I,c as V,ak as w,m as j,a1 as B,r as O,al as L,P as x,n as M,$ as _}from"./vuetify-BGzDg8SZ.js";import{u as P}from"./ssrBoot-B8jrVcKx.js";import{t as G,m as F,R as T,D as $,B as D,h as H,i as q,j as N,k as E,b as K,n as R,F as J,e as U,p as Y,q as z,r as Q,G as W,s as X,V as Z,c as ee,u as te}from"./index-BAywq0Ob.js";import{M as le}from"./VImg-B_JtkRwX.js";import{V as ae,a as ne}from"./VListItemTitle-GAILHzRm.js";import{V as re}from"./VGrid-DpcPUu2X.js";import{V as se}from"./VDivider-Dh9aQmYu.js";const ie=Symbol.for("vuetify:list");function oe(){const a=e(ie,{hasPrepend:t(!1),updateHasPrepend:()=>null}),n={hasPrepend:t(!1),updateHasPrepend:e=>{e&&(n.hasPrepend.value=e)}};return l(ie,n),a}function ue(){return e(ie,null)}const de={open:e=>{let{id:t,value:l,opened:a,parents:n}=e;if(l){const e=new Set;e.add(t);let l=n.get(t);for(;null!=l;)e.add(l),l=n.get(l);return e}return a.delete(t),a},select:()=>null},ve={open:e=>{let{id:t,value:l,opened:a,parents:n}=e;if(l){let e=n.get(t);for(a.add(t);null!=e&&e!==t;)a.add(e),e=n.get(e);return a}return a.delete(t),a},select:()=>null},ce={open:ve.open,select:e=>{let{id:t,value:l,opened:a,parents:n}=e;if(!l)return a;const r=[];let s=n.get(t);for(;null!=s;)r.push(s),s=n.get(s);return new Set(r)}},pe=e=>{const t={select:t=>{let{id:l,value:n,selected:r}=t;if(l=a(l),e&&!n){const e=Array.from(r.entries()).reduce(((e,t)=>{let[l,a]=t;return"on"===a?[...e,l]:e}),[]);if(1===e.length&&e[0]===l)return r}return r.set(l,n?"on":"off"),r},in:(e,l,a)=>{let n=new Map;for(const r of e||[])n=t.select({id:r,value:!0,selected:new Map(n),children:l,parents:a});return n},out:e=>{const t=[];for(const[l,a]of e.entries())"on"===a&&t.push(l);return t}};return t},fe=e=>{const t=pe(e);return{select:e=>{let{selected:l,id:n,...r}=e;n=a(n);const s=l.has(n)?new Map([[n,l.get(n)]]):new Map;return t.select({...r,id:n,selected:s})},in:(e,l,a)=>{let n=new Map;return(null==e?void 0:e.length)&&(n=t.in(e.slice(0,1),l,a)),n},out:(e,l,a)=>t.out(e,l,a)}},me=Symbol.for("vuetify:nested"),ye={id:t(),root:{register:()=>null,unregister:()=>null,parents:n(new Map),children:n(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:n(new Set),selected:n(new Map),selectedValues:n([])}},ge=y({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),be=e=>{let i=!1;const o=n(new Map),u=n(new Map),d=g(e,"opened",e.opened,(e=>new Set(e)),(e=>[...e.values()])),v=r((()=>{if("object"==typeof e.selectStrategy)return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return(e=>{const t=fe(e);return{select:e=>{let{id:l,selected:n,children:r,...s}=e;return l=a(l),r.has(l)?n:t.select({id:l,selected:n,children:r,...s})},in:t.in,out:t.out}})(e.mandatory);case"leaf":return(e=>{const t=pe(e);return{select:e=>{let{id:l,selected:n,children:r,...s}=e;return l=a(l),r.has(l)?n:t.select({id:l,selected:n,children:r,...s})},in:t.in,out:t.out}})(e.mandatory);case"independent":return pe(e.mandatory);case"single-independent":return fe(e.mandatory);default:return(e=>{const t={select:t=>{let{id:l,value:n,selected:r,children:s,parents:i}=t;l=a(l);const o=new Map(r),u=[l];for(;u.length;){const e=u.shift();r.set(e,n?"on":"off"),s.has(e)&&u.push(...s.get(e))}let d=i.get(l);for(;d;){const e=s.get(d),t=e.every((e=>"on"===r.get(e))),l=e.every((e=>!r.has(e)||"off"===r.get(e)));r.set(d,t?"on":l?"off":"indeterminate"),d=i.get(d)}return e&&!n&&0===Array.from(r.entries()).reduce(((e,t)=>{let[l,a]=t;return"on"===a?[...e,l]:e}),[]).length?o:r},in:(e,l,a)=>{let n=new Map;for(const r of e||[])n=t.select({id:r,value:!0,selected:new Map(n),children:l,parents:a});return n},out:(e,t)=>{const l=[];for(const[a,n]of e.entries())"on"!==n||t.has(a)||l.push(a);return l}};return t})(e.mandatory)}})),c=r((()=>{if("object"==typeof e.openStrategy)return e.openStrategy;switch(e.openStrategy){case"list":return ce;case"single":return de;default:return ve}})),p=g(e,"selected",e.selected,(e=>v.value.in(e,o.value,u.value)),(e=>v.value.out(e,o.value,u.value)));function f(e){const t=[];let l=e;for(;null!=l;)t.unshift(l),l=u.value.get(l);return t}s((()=>{i=!0}));const m=b("nested"),y={id:t(),root:{opened:d,selected:p,selectedValues:r((()=>{const e=[];for(const[t,l]of p.value.entries())"on"===l&&e.push(t);return e})),register:(e,t,l)=>{t&&e!==t&&u.value.set(e,t),l&&o.value.set(e,[]),null!=t&&o.value.set(t,[...o.value.get(t)||[],e])},unregister:e=>{if(i)return;o.value.delete(e);const t=u.value.get(e);if(t){const l=o.value.get(t)??[];o.value.set(t,l.filter((t=>t!==e)))}u.value.delete(e),d.value.delete(e)},open:(e,t,l)=>{m.emit("click:open",{id:e,value:t,path:f(e),event:l});const a=c.value.open({id:e,value:t,opened:new Set(d.value),children:o.value,parents:u.value,event:l});a&&(d.value=a)},openOnSelect:(e,t,l)=>{const a=c.value.select({id:e,value:t,selected:new Map(p.value),opened:new Set(d.value),children:o.value,parents:u.value,event:l});a&&(d.value=a)},select:(e,t,l)=>{m.emit("click:select",{id:e,value:t,path:f(e),event:l});const a=v.value.select({id:e,value:t,selected:new Map(p.value),children:o.value,parents:u.value,event:l});a&&(p.value=a),y.root.openOnSelect(e,t,l)},children:o,parents:u}};return l(me,y),y.root},he=(t,n)=>{const i=e(me,ye),o=Symbol(h()),u=r((()=>void 0!==t.value?t.value:o)),d={...i,id:u,open:(e,t)=>i.root.open(u.value,e,t),openOnSelect:(e,t)=>i.root.openOnSelect(u.value,e,t),isOpen:r((()=>i.root.opened.value.has(u.value))),parent:r((()=>i.root.parents.value.get(u.value))),select:(e,t)=>i.root.select(u.value,e,t),isSelected:r((()=>"on"===i.root.selected.value.get(a(u.value)))),isIndeterminate:r((()=>"indeterminate"===i.root.selected.value.get(u.value))),isLeaf:r((()=>!i.root.children.value.get(u.value))),isGroupActivator:i.isGroupActivator};return!i.isGroupActivator&&i.root.register(u.value,i.id.value,n),s((()=>{!i.isGroupActivator&&i.root.unregister(u.value)})),n&&l(me,d),d},Se=A({name:"VListGroupActivator",setup(t,a){let{slots:n}=a;return(()=>{const t=e(me,ye);l(me,{...t,isGroupActivator:!0})})(),()=>{var e;return null==(e=n.default)?void 0:e.call(n)}}}),Ce=y({activeColor:String,baseColor:String,color:String,collapseIcon:{type:I,default:"$collapse"},expandIcon:{type:I,default:"$expand"},prependIcon:I,appendIcon:I,fluid:Boolean,subgroup:Boolean,title:String,value:null,...k(),...F()},"VListGroup"),Ae=S()({name:"VListGroup",props:Ce(),setup(e,t){let{slots:l}=t;const{isOpen:a,open:n,id:s}=he(i(e,"value"),!0),v=r((()=>`v-list-group--id-${String(s.value)}`)),c=ue(),{isBooted:p}=P();function f(e){n(!a.value,e)}const y=r((()=>({onClick:f,class:"v-list-group__header",id:v.value}))),g=r((()=>a.value?e.collapseIcon:e.expandIcon)),b=r((()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&g.value,appendIcon:e.appendIcon||!e.subgroup&&g.value,title:e.title,value:e.value}})));return C((()=>o(e.tag,{class:["v-list-group",{"v-list-group--prepend":null==c?void 0:c.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[l.activator&&o(G,{defaults:b.value},{default:()=>[o(Se,null,{default:()=>[l.activator({props:y.value,isOpen:a.value})]})]}),o(le,{transition:{component:m},disabled:!p.value},{default:()=>{var e;return[u(o("div",{class:"v-list-group__items",role:"group","aria-labelledby":v.value},[null==(e=l.default)?void 0:e.call(l)]),[[d,a.value]])]}})]}))),{}}}),ke=y({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:I,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:I,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:B(),onClickOnce:B(),...W(),...k(),...Q(),...z(),...Y(),...U(),...J(),...F(),...j(),...R({variant:"text"})},"VListItem"),Ie=S()({name:"VListItem",directives:{Ripple:T},props:ke(),emits:{click:e=>!0},setup(e,t){let{attrs:l,slots:a,emit:n}=t;const s=$(e,l),i=r((()=>void 0===e.value?s.href.value:e.value)),{select:d,isSelected:f,isIndeterminate:m,isGroupActivator:y,root:g,parent:b,openOnSelect:h}=he(i,!1),S=ue(),A=r((()=>{var t;return!1!==e.active&&(e.active||(null==(t=s.isActive)?void 0:t.value)||f.value)})),k=r((()=>!1!==e.link&&s.isLink.value)),I=r((()=>!e.disabled&&!1!==e.link&&(e.link||s.isClickable.value||null!=e.value&&!!S))),j=r((()=>e.rounded||e.nav)),B=r((()=>e.color??e.activeColor)),O=r((()=>({color:A.value?B.value??e.baseColor:e.baseColor,variant:e.variant})));v((()=>{var e;return null==(e=s.isActive)?void 0:e.value}),(e=>{e&&null!=b.value&&g.open(b.value,!0),e&&h(e)}),{immediate:!0});const{themeClasses:L}=V(e),{borderClasses:x}=D(e),{colorClasses:M,colorStyles:_,variantClasses:P}=H(O),{densityClasses:F}=q(e),{dimensionStyles:T}=N(e),{elevationClasses:R}=E(e),{roundedClasses:J}=K(j),U=r((()=>e.lines?`v-list-item--${e.lines}-line`:void 0)),Y=r((()=>({isActive:A.value,select:d,isSelected:f.value,isIndeterminate:m.value})));function z(t){var l;n("click",t),!y&&I.value&&(null==(l=s.navigate)||l.call(s,t),null!=e.value&&d(!f.value,t))}function Q(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),z(e))}return C((()=>{const t=k.value?"a":e.tag,l=a.title||null!=e.title,n=a.subtitle||null!=e.subtitle,r=!(!e.appendAvatar&&!e.appendIcon),i=!(!r&&!a.append),d=!(!e.prependAvatar&&!e.prependIcon),v=!(!d&&!a.prepend);return null==S||S.updateHasPrepend(v),e.activeColor&&w("active-color",["color","base-color"]),u(o(t,{class:["v-list-item",{"v-list-item--active":A.value,"v-list-item--disabled":e.disabled,"v-list-item--link":I.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!v&&(null==S?void 0:S.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&A.value},L.value,x.value,M.value,F.value,R.value,U.value,J.value,P.value,e.class],style:[_.value,T.value,e.style],href:s.href.value,tabindex:I.value?S?-2:0:void 0,onClick:z,onKeydown:I.value&&!k.value&&Q},{default:()=>{var t;return[X(I.value||A.value,"v-list-item"),v&&o("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?o(G,{key:"prepend-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var e;return[null==(e=a.prepend)?void 0:e.call(a,Y.value)]}}):o(p,null,[e.prependAvatar&&o(re,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&o(Z,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),o("div",{class:"v-list-item__spacer"},null)]),o("div",{class:"v-list-item__content","data-no-activator":""},[l&&o(ae,{key:"title"},{default:()=>{var t;return[(null==(t=a.title)?void 0:t.call(a,{title:e.title}))??e.title]}}),n&&o(ne,{key:"subtitle"},{default:()=>{var t;return[(null==(t=a.subtitle)?void 0:t.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),null==(t=a.default)?void 0:t.call(a,Y.value)]),i&&o("div",{key:"append",class:"v-list-item__append"},[a.append?o(G,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var e;return[null==(e=a.append)?void 0:e.call(a,Y.value)]}}):o(p,null,[e.appendIcon&&o(Z,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&o(re,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),o("div",{class:"v-list-item__spacer"},null)])]}}),[[c("ripple"),I.value&&e.ripple]])})),{}}}),Ve=y({color:String,inset:Boolean,sticky:Boolean,title:String,...k(),...F()},"VListSubheader"),we=S()({name:"VListSubheader",props:Ve(),setup(e,t){let{slots:l}=t;const{textColorClasses:a,textColorStyles:n}=ee(i(e,"color"));return C((()=>{const t=!(!l.default&&!e.title);return o(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:n},e.style]},{default:()=>{var a;return[t&&o("div",{class:"v-list-subheader__text"},[(null==(a=l.default)?void 0:a.call(l))??e.title])]}})})),{}}}),je=y({items:Array,returnObject:Boolean},"VListChildren"),Be=S()({name:"VListChildren",props:je(),setup(e,t){let{slots:l}=t;return oe(),()=>{var t,a;return(null==(t=l.default)?void 0:t.call(l))??(null==(a=e.items)?void 0:a.map((t=>{var a,n;let{children:r,props:s,type:i,raw:u}=t;if("divider"===i)return(null==(a=l.divider)?void 0:a.call(l,{props:s}))??o(se,s,null);if("subheader"===i)return(null==(n=l.subheader)?void 0:n.call(l,{props:s}))??o(we,s,null);const d={subtitle:l.subtitle?e=>{var t;return null==(t=l.subtitle)?void 0:t.call(l,{...e,item:u})}:void 0,prepend:l.prepend?e=>{var t;return null==(t=l.prepend)?void 0:t.call(l,{...e,item:u})}:void 0,append:l.append?e=>{var t;return null==(t=l.append)?void 0:t.call(l,{...e,item:u})}:void 0,title:l.title?e=>{var t;return null==(t=l.title)?void 0:t.call(l,{...e,item:u})}:void 0},v=Ae.filterProps(s);return r?o(Ae,f({value:null==s?void 0:s.value},v),{activator:t=>{let{props:a}=t;const n={...s,...a,value:e.returnObject?u:s.value};return l.header?l.header({props:n}):o(Ie,n,d)},default:()=>o(Be,{items:r},l)}):l.item?l.item({props:s}):o(Ie,f(s,{value:e.returnObject?u:s.value}),d)})))}}}),Oe=y({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:O}},"list-items");function Le(e,t){const l=L(t,e.itemTitle,t),a=L(t,e.itemValue,l),n=L(t,e.itemChildren),r={title:l,value:a,...!0===e.itemProps?"object"!=typeof t||null==t||Array.isArray(t)?void 0:"children"in t?x(t,["children"]):t:L(t,e.itemProps)};return{title:String(r.title??""),value:r.value,props:r,children:Array.isArray(n)?xe(e,n):void 0,raw:t}}function xe(e,t){const l=[];for(const a of t)l.push(Le(e,a));return l}function Me(e){const t=r((()=>xe(e,e.items))),l=r((()=>t.value.some((e=>null===e.value))));return{items:t,transformIn:function(a){return l.value||(a=a.filter((e=>null!==e))),a.map((l=>e.returnObject&&"string"==typeof l?Le(e,l):t.value.find((t=>e.valueComparator(l,t.value)))||Le(e,l)))},transformOut:function(t){return e.returnObject?t.map((e=>{let{raw:t}=e;return t})):t.map((e=>{let{value:t}=e;return t}))}}}function _e(e,t){const l=L(t,e.itemType,"item"),a=function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}(t)?t:L(t,e.itemTitle),n=L(t,e.itemValue,void 0),r=L(t,e.itemChildren),s={title:a,value:n,...!0===e.itemProps?x(t,["children"]):L(t,e.itemProps)};return{type:l,title:s.title,value:s.value,props:s,children:"item"===l&&r?Pe(e,r):void 0,raw:t}}function Pe(e,t){const l=[];for(const a of t)l.push(_e(e,a));return l}const Ge=y({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...ge({selectStrategy:"single-leaf",openStrategy:"list"}),...W(),...k(),...Q(),...z(),...Y(),itemType:{type:String,default:"type"},...Oe(),...U(),...F(),...j(),...R({variant:"text"})},"VList"),Fe=S()({name:"VList",props:Ge(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:a}=l;const{items:s}=function(e){return{items:r((()=>Pe(e,e.items)))}}(e),{themeClasses:u}=V(e),{backgroundColorClasses:d,backgroundColorStyles:v}=te(i(e,"bgColor")),{borderClasses:c}=D(e),{densityClasses:p}=q(e),{dimensionStyles:f}=N(e),{elevationClasses:m}=E(e),{roundedClasses:y}=K(e),{open:g,select:b}=be(e),h=r((()=>e.lines?`v-list--${e.lines}-line`:void 0)),S=i(e,"activeColor"),A=i(e,"baseColor"),k=i(e,"color");oe(),M({VListGroup:{activeColor:S,baseColor:A,color:k},VListItem:{activeClass:i(e,"activeClass"),activeColor:S,baseColor:A,color:k,density:i(e,"density"),disabled:i(e,"disabled"),lines:i(e,"lines"),nav:i(e,"nav"),slim:i(e,"slim"),variant:i(e,"variant")}});const I=t(!1),w=n();function j(e){I.value=!0}function B(e){I.value=!1}function O(e){var t;I.value||e.relatedTarget&&(null==(t=w.value)?void 0:t.contains(e.relatedTarget))||x()}function L(e){if(w.value){if("ArrowDown"===e.key)x("next");else if("ArrowUp"===e.key)x("prev");else if("Home"===e.key)x("first");else{if("End"!==e.key)return;x("last")}e.preventDefault()}}function x(e){if(w.value)return _(w.value,e)}return C((()=>o(e.tag,{ref:w,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},u.value,d.value,c.value,p.value,m.value,h.value,y.value,e.class],style:[v.value,f.value,e.style],tabindex:e.disabled||I.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:j,onFocusout:B,onFocus:O,onKeydown:L},{default:()=>[o(Be,{items:s.value,returnObject:e.returnObject},a)]}))),{open:g,select:b,focus:x}}});export{Ie as V,Fe as a,Oe as m,Me as u};
