function e(e,t){return function(){return e.apply(t,arguments)}}const{toString:t}=Object.prototype,{getPrototypeOf:n}=Object,r=(e=>n=>{const r=t.call(n);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),o=e=>(e=e.toLowerCase(),t=>r(t)===e),s=e=>t=>typeof t===e,{isArray:i}=Array,a=s("undefined");const c=o("ArrayBuffer");const l=s("string"),u=s("function"),f=s("number"),d=e=>null!==e&&"object"==typeof e,p=e=>{if("object"!==r(e))return!1;const t=n(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},h=o("Date"),m=o("File"),y=o("Blob"),b=o("FileList"),g=o("URLSearchParams"),[w,E,R,O]=["ReadableStream","Request","Response","Headers"].map(o);function S(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),i(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function T(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,v=e=>!a(e)&&e!==A;const x=(e=>t=>e&&t instanceof e)("undefined"!=typeof Uint8Array&&n(Uint8Array)),C=o("HTMLFormElement"),N=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),j=o("RegExp"),P=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};S(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)};const U=o("AsyncFunction"),_=(F="function"==typeof setImmediate,L=u(A.postMessage),F?setImmediate:L?(B=`axios@${Math.random()}`,k=[],A.addEventListener("message",(({source:e,data:t})=>{e===A&&t===B&&k.length&&k.shift()()}),!1),e=>{k.push(e),A.postMessage(B,"*")}):e=>setTimeout(e));var F,L,B,k;const D="undefined"!=typeof queueMicrotask?queueMicrotask.bind(A):"undefined"!=typeof process&&process.nextTick||_,q={isArray:i,isArrayBuffer:c,isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&u(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||u(e.append)&&("formdata"===(t=r(e))||"object"===t&&u(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&c(e.buffer),t},isString:l,isNumber:f,isBoolean:e=>!0===e||!1===e,isObject:d,isPlainObject:p,isReadableStream:w,isRequest:E,isResponse:R,isHeaders:O,isUndefined:a,isDate:h,isFile:m,isBlob:y,isRegExp:j,isFunction:u,isStream:e=>d(e)&&u(e.pipe),isURLSearchParams:g,isTypedArray:x,isFileList:b,forEach:S,merge:function e(){const{caseless:t}=v(this)&&this||{},n={},r=(r,o)=>{const s=t&&T(n,o)||o;p(n[s])&&p(r)?n[s]=e(n[s],r):p(r)?n[s]=e({},r):i(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&S(arguments[o],r);return n},extend:(t,n,r,{allOwnKeys:o}={})=>(S(n,((n,o)=>{r&&u(n)?t[o]=e(n,r):t[o]=n}),{allOwnKeys:o}),t),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,r,o)=>{let s,i,a;const c={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],o&&!o(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==r&&n(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:r,kindOfTest:o,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(i(e))return e;let t=e.length;if(!f(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:C,hasOwnProperty:N,hasOwnProp:N,reduceDescriptors:P,freezeMethods:e=>{P(e,((t,n)=>{if(u(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];u(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return i(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:T,global:A,isContextDefined:v,isSpecCompliantForm:function(e){return!!(e&&u(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(d(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=i(e)?[]:{};return S(e,((e,t)=>{const s=n(e,r+1);!a(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:U,isThenable:e=>e&&(d(e)||u(e))&&u(e.then)&&u(e.catch),setImmediate:_,asap:D};function M(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}q.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.status}}});const I=M.prototype,z={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{z[e]={value:e}})),Object.defineProperties(M,z),Object.defineProperty(I,"isAxiosError",{value:!0}),M.from=(e,t,n,r,o,s)=>{const i=Object.create(I);return q.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),M.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};function H(e){return q.isPlainObject(e)||q.isArray(e)}function J(e){return q.endsWith(e,"[]")?e.slice(0,-2):e}function W(e,t,n){return e?e.concat(t).map((function(e,t){return e=J(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const K=q.toFlatObject(q,{},null,(function(e){return/^is[A-Z]/.test(e)}));function V(e,t,n){if(!q.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!q.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&q.isSpecCompliantForm(t);if(!q.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(q.isDate(e))return e.toISOString();if(!a&&q.isBlob(e))throw new M("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(e)||q.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(q.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(q.isArray(e)&&function(e){return q.isArray(e)&&!e.some(H)}(e)||(q.isFileList(e)||q.endsWith(n,"[]"))&&(a=q.toArray(e)))return n=J(n),a.forEach((function(e,r){!q.isUndefined(e)&&null!==e&&t.append(!0===i?W([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!H(e)||(t.append(W(o,n,s),c(e)),!1)}const u=[],f=Object.assign(K,{defaultVisitor:l,convertValue:c,isVisitable:H});if(!q.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!q.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),q.forEach(n,(function(n,s){!0===(!(q.isUndefined(n)||null===n)&&o.call(t,n,q.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t}function $(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function X(e,t){this._pairs=[],e&&V(e,this,t)}const G=X.prototype;function Q(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Z(e,t,n){if(!t)return e;const r=n&&n.encode||Q;q.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let s;if(s=o?o(t,n):q.isURLSearchParams(t)?t.toString():new X(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}G.append=function(e,t){this._pairs.push([e,t])},G.toString=function(e){const t=e?function(t){return e.call(this,t,$)}:$;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};class Y{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){q.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const ee={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},te={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:X,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ne="undefined"!=typeof window&&"undefined"!=typeof document,re="object"==typeof navigator&&navigator||void 0,oe=ne&&(!re||["ReactNative","NativeScript","NS"].indexOf(re.product)<0),se="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,ie=ne&&window.location.href||"http://localhost",ae={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ne,hasStandardBrowserEnv:oe,hasStandardBrowserWebWorkerEnv:se,navigator:re,origin:ie},Symbol.toStringTag,{value:"Module"})),...te};function ce(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&q.isArray(r)?r.length:s,a)return q.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&q.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&q.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(q.isFormData(e)&&q.isFunction(e.entries)){const n={};return q.forEachEntry(e,((e,r)=>{t(function(e){return q.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const le={transitional:ee,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=q.isObject(e);o&&q.isHTMLForm(e)&&(e=new FormData(e));if(q.isFormData(e))return r?JSON.stringify(ce(e)):e;if(q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e)||q.isReadableStream(e))return e;if(q.isArrayBufferView(e))return e.buffer;if(q.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return V(e,new ae.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ae.isNode&&q.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=q.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return V(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(q.isString(e))try{return(t||JSON.parse)(e),q.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||le.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(q.isResponse(e)||q.isReadableStream(e))return e;if(e&&q.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw M.from(o,M.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ae.classes.FormData,Blob:ae.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};q.forEach(["delete","get","head","post","put","patch"],(e=>{le.headers[e]={}}));const ue=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fe=Symbol("internals");function de(e){return e&&String(e).trim().toLowerCase()}function pe(e){return!1===e||null==e?e:q.isArray(e)?e.map(pe):String(e)}function he(e,t,n,r,o){return q.isFunction(r)?r.call(this,t,n):(o&&(t=n),q.isString(t)?q.isString(r)?-1!==t.indexOf(r):q.isRegExp(r)?r.test(t):void 0:void 0)}let me=class{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=de(t);if(!o)throw new Error("header name must be a non-empty string");const s=q.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=pe(e))}const s=(e,t)=>q.forEach(e,((e,n)=>o(e,n,t)));if(q.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(q.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ue[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(q.isHeaders(e))for(const[i,a]of e.entries())o(a,i,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=de(e)){const n=q.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(q.isFunction(t))return t.call(this,e,n);if(q.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=de(e)){const n=q.findKey(this,e);return!(!n||void 0===this[n]||t&&!he(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=de(e)){const o=q.findKey(n,e);!o||t&&!he(0,n[o],o,t)||(delete n[o],r=!0)}}return q.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!he(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return q.forEach(this,((r,o)=>{const s=q.findKey(n,o);if(s)return t[s]=pe(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=pe(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return q.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&q.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[fe]=this[fe]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=de(e);t[r]||(!function(e,t){const n=q.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return q.isArray(e)?e.forEach(r):r(e),this}};function ye(e,t){const n=this||le,r=t||n,o=me.from(r.headers);let s=r.data;return q.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function be(e){return!(!e||!e.__CANCEL__)}function ge(e,t,n){M.call(this,null==e?"canceled":e,M.ERR_CANCELED,t,n),this.name="CanceledError"}function we(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}me.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),q.reduceDescriptors(me.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),q.freezeMethods(me),q.inherits(ge,M,{__CANCEL__:!0});const Ee=(e,t,n=3)=>{let r=0;const o=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[i];o||(o=c),n[s]=a,r[s]=c;let u=i,f=0;for(;u!==s;)f+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=l&&c-l;return d?Math.round(1e3*f/d):void 0}}(50,250);return function(e,t){let n,r,o=0,s=1e3/t;const i=(t,s=Date.now())=>{o=s,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[(...e)=>{const t=Date.now(),a=t-o;a>=s?i(e,t):(n=e,r||(r=setTimeout((()=>{r=null,i(n)}),s-a)))},()=>n&&i(n)]}((n=>{const s=n.loaded,i=n.lengthComputable?n.total:void 0,a=s-r,c=o(a);r=s;e({loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:n,lengthComputable:null!=i,[t?"download":"upload"]:!0})}),n)},Re=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Oe=e=>(...t)=>q.asap((()=>e(...t))),Se=ae.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ae.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ae.origin),ae.navigator&&/(msie|trident)/i.test(ae.navigator.userAgent)):()=>!0,Te=ae.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];q.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),q.isString(r)&&i.push("path="+r),q.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Ae(e,t,n){let r=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(r||0==n)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const ve=e=>e instanceof me?{...e}:e;function xe(e,t){t=t||{};const n={};function r(e,t,n,r){return q.isPlainObject(e)&&q.isPlainObject(t)?q.merge.call({caseless:r},e,t):q.isPlainObject(t)?q.merge({},t):q.isArray(t)?t.slice():t}function o(e,t,n,o){return q.isUndefined(t)?q.isUndefined(e)?void 0:r(void 0,e,0,o):r(e,t,0,o)}function s(e,t){if(!q.isUndefined(t))return r(void 0,t)}function i(e,t){return q.isUndefined(t)?q.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t,n)=>o(ve(e),ve(t),0,!0)};return q.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);q.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Ce=e=>{const t=xe({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:c}=t;if(t.headers=a=me.from(a),t.url=Z(Ae(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),q.isFormData(r))if(ae.hasStandardBrowserEnv||ae.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(ae.hasStandardBrowserEnv&&(o&&q.isFunction(o)&&(o=o(t)),o||!1!==o&&Se(t.url))){const e=s&&i&&Te.read(i);e&&a.set(s,e)}return t},Ne="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=Ce(e);let o=r.data;const s=me.from(r.headers).normalize();let i,a,c,l,u,{responseType:f,onUploadProgress:d,onDownloadProgress:p}=r;function h(){l&&l(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let m=new XMLHttpRequest;function y(){if(!m)return;const r=me.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());we((function(e){t(e),h()}),(function(e){n(e),h()}),{data:f&&"text"!==f&&"json"!==f?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=y:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(y)},m.onabort=function(){m&&(n(new M("Request aborted",M.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new M("Network Error",M.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||ee;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new M(t,o.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,e,m)),m=null},void 0===o&&s.setContentType(null),"setRequestHeader"in m&&q.forEach(s.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),q.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),f&&"json"!==f&&(m.responseType=r.responseType),p&&([c,u]=Ee(p,!0),m.addEventListener("progress",c)),d&&m.upload&&([a,l]=Ee(d),m.upload.addEventListener("progress",a),m.upload.addEventListener("loadend",l)),(r.cancelToken||r.signal)&&(i=t=>{m&&(n(!t||t.type?new ge(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const b=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);b&&-1===ae.protocols.indexOf(b)?n(new M("Unsupported protocol "+b+":",M.ERR_BAD_REQUEST,e)):m.send(o||null)}))},je=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof M?t:new ge(t instanceof Error?t.message:t))}};let s=t&&setTimeout((()=>{s=null,o(new M(`timeout ${t} of ms exceeded`,M.ETIMEDOUT))}),t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:a}=r;return a.unsubscribe=()=>q.asap(i),a}},Pe=function*(e,t){let n=e.byteLength;if(n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Ue=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},_e=(e,t,n,r)=>{const o=async function*(e,t){for await(const n of Ue(e))yield*Pe(n,t)}(e,t);let s,i=0,a=e=>{s||(s=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return a(),void e.close();let s=r.byteLength;if(n){let e=i+=s;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw a(t),t}},cancel:e=>(a(e),o.return())},{highWaterMark:2})},Fe="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,Le=Fe&&"function"==typeof ReadableStream,Be=Fe&&("function"==typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),ke=(e,...t)=>{try{return!!e(...t)}catch(n){return!1}},De=Le&&ke((()=>{let e=!1;const t=new Request(ae.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),qe=Le&&ke((()=>q.isReadableStream(new Response("").body))),Me={stream:qe&&(e=>e.body)};var Ie;Fe&&(Ie=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Me[e]&&(Me[e]=q.isFunction(Ie[e])?t=>t[e]():(t,n)=>{throw new M(`Response type '${e}' is not supported`,M.ERR_NOT_SUPPORT,n)})})));const ze=async(e,t)=>{const n=q.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(q.isBlob(e))return e.size;if(q.isSpecCompliantForm(e)){const t=new Request(ae.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return q.isArrayBufferView(e)||q.isArrayBuffer(e)?e.byteLength:(q.isURLSearchParams(e)&&(e+=""),q.isString(e)?(await Be(e)).byteLength:void 0)})(t):n},He={http:null,xhr:Ne,fetch:Fe&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:d}=Ce(e);l=l?(l+"").toLowerCase():"text";let p,h=je([o,s&&s.toAbortSignal()],i);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let y;try{if(c&&De&&"get"!==n&&"head"!==n&&0!==(y=await ze(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(q.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=Re(y,Ee(Oe(c)));r=_e(n.body,65536,e,t)}}q.isString(f)||(f=f?"include":"omit");const o="credentials"in Request.prototype;p=new Request(t,{...d,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:o?f:void 0});let s=await fetch(p);const i=qe&&("stream"===l||"response"===l);if(qe&&(a||i&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=s[t]}));const t=q.toFiniteNumber(s.headers.get("content-length")),[n,r]=a&&Re(t,Ee(Oe(a),!0))||[];s=new Response(_e(s.body,65536,n,(()=>{r&&r(),m&&m()})),e)}l=l||"text";let b=await Me[q.findKey(Me,l)||"text"](s,e);return!i&&m&&m(),await new Promise(((t,n)=>{we(t,n,{data:b,headers:me.from(s.headers),status:s.status,statusText:s.statusText,config:e,request:p})}))}catch(b){if(m&&m(),b&&"TypeError"===b.name&&/fetch/i.test(b.message))throw Object.assign(new M("Network Error",M.ERR_NETWORK,e,p),{cause:b.cause||b});throw M.from(b,b&&b.code,e,p)}})};q.forEach(He,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const Je=e=>`- ${e}`,We=e=>q.isFunction(e)||null===e||!1===e,Ke=e=>{e=q.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!We(n)&&(r=He[(t=String(n)).toLowerCase()],void 0===r))throw new M(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new M("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(Je).join("\n"):" "+Je(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function Ve(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ge(null,e)}function $e(e){Ve(e),e.headers=me.from(e.headers),e.data=ye.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Ke(e.adapter||le.adapter)(e).then((function(t){return Ve(e),t.data=ye.call(e,e.transformResponse,t),t.headers=me.from(t.headers),t}),(function(t){return be(t)||(Ve(e),t&&t.response&&(t.response.data=ye.call(e,e.transformResponse,t.response),t.response.headers=me.from(t.response.headers))),Promise.reject(t)}))}const Xe="1.8.4",Ge={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ge[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Qe={};Ge.transitional=function(e,t,n){return(r,o,s)=>{if(!1===e)throw new M(function(e,t){return"[Axios v1.8.4] Transitional option '"+e+"'"+t+(n?". "+n:"")}(o," has been removed"+(t?" in "+t:"")),M.ERR_DEPRECATED);return t&&!Qe[o]&&(Qe[o]=!0),!e||e(r,o,s)}},Ge.spelling=function(e){return(e,t)=>!0};const Ze={assertOptions:function(e,t,n){if("object"!=typeof e)throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new M("option "+s+" must be "+n,M.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new M("Unknown option "+s,M.ERR_BAD_OPTION)}},validators:Ge},Ye=Ze.validators;let et=class{constructor(e){this.defaults=e,this.interceptors={request:new Y,response:new Y}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(r){}}throw n}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=xe(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Ze.assertOptions(n,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean)},!1),null!=r&&(q.isFunction(r)?t.paramsSerializer={serialize:r}:Ze.assertOptions(r,{encode:Ye.function,serialize:Ye.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Ze.assertOptions(t,{baseUrl:Ye.spelling("baseURL"),withXsrfToken:Ye.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&q.merge(o.common,o[t.method]);o&&q.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=me.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,f=0;if(!a){const e=[$e.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);f<u;)l=l.then(e[f++],e[f++]);return l}u=i.length;let d=t;for(f=0;f<u;){const e=i[f++],t=i[f++];try{d=e(d)}catch(p){t.call(this,p);break}}try{l=$e.call(this,d)}catch(p){return Promise.reject(p)}for(f=0,u=c.length;f<u;)l=l.then(c[f++],c[f++]);return l}getUri(e){return Z(Ae((e=xe(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}};q.forEach(["delete","get","head","options"],(function(e){et.prototype[e]=function(t,n){return this.request(xe(n||{},{method:e,url:t,data:(n||{}).data}))}})),q.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(xe(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}et.prototype[e]=t(),et.prototype[e+"Form"]=t(!0)}));const tt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(tt).forEach((([e,t])=>{tt[t]=e}));const nt=function t(n){const r=new et(n),o=e(et.prototype.request,r);return q.extend(o,et.prototype,r,{allOwnKeys:!0}),q.extend(o,r,null,{allOwnKeys:!0}),o.create=function(e){return t(xe(n,e))},o}(le);nt.Axios=et,nt.CanceledError=ge,nt.CancelToken=class e{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new ge(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e((function(e){t=e})),cancel:t}}},nt.isCancel=be,nt.VERSION=Xe,nt.toFormData=V,nt.AxiosError=M,nt.Cancel=nt.CanceledError,nt.all=function(e){return Promise.all(e)},nt.spread=function(e){return function(t){return e.apply(null,t)}},nt.isAxiosError=function(e){return q.isObject(e)&&!0===e.isAxiosError},nt.mergeConfig=xe,nt.AxiosHeaders=me,nt.formToJSON=e=>ce(q.isHTMLForm(e)?new FormData(e):e),nt.getAdapter=Ke,nt.HttpStatusCode=tt,nt.default=nt;const{Axios:rt,AxiosError:ot,CanceledError:st,isCancel:it,CancelToken:at,VERSION:ct,all:lt,Cancel:ut,isAxiosError:ft,spread:dt,toFormData:pt,AxiosHeaders:ht,HttpStatusCode:mt,formToJSON:yt,getAdapter:bt,mergeConfig:gt}=nt;export{nt as a};
