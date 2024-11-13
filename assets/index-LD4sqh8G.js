(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const ae=(e,n)=>e===n,ue=Symbol("solid-track"),P={equals:ae};let z=re;const k=1,_=2,ee={owned:null,cleanups:null,context:null,owner:null};var b=null;let j=null,ce=null,C=null,A=null,v=null,H=0;function B(e,n){const t=C,r=b,i=e.length===0,s=n===void 0?r:n,a=i?ee:{owned:null,cleanups:null,context:s?s.context:null,owner:s},o=i?e:()=>e(()=>R(()=>K(a)));b=a,C=null;try{return I(o,!0)}finally{C=t,b=r}}function F(e,n){n=n?Object.assign({},P,n):P;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},r=i=>(typeof i=="function"&&(i=i(t.value)),ie(t,i));return[te.bind(t),r]}function E(e,n,t){const r=X(e,n,!1,k);O(r)}function pe(e,n,t){z=he;const r=X(e,n,!1,k);(!t||!t.render)&&(r.user=!0),v?v.push(r):O(r)}function w(e,n,t){t=t?Object.assign({},P,t):P;const r=X(e,n,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=t.equals||void 0,O(r),te.bind(r)}function R(e){if(C===null)return e();const n=C;C=null;try{return e()}finally{C=n}}function de(e){pe(()=>R(e))}function ne(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function te(){if(this.sources&&this.state)if(this.state===k)O(this);else{const e=A;A=null,I(()=>U(this),!1),A=e}if(C){const e=this.observers?this.observers.length:0;C.sources?(C.sources.push(this),C.sourceSlots.push(e)):(C.sources=[this],C.sourceSlots=[e]),this.observers?(this.observers.push(C),this.observerSlots.push(C.sources.length-1)):(this.observers=[C],this.observerSlots=[C.sources.length-1])}return this.value}function ie(e,n,t){let r=e.value;return(!e.comparator||!e.comparator(r,n))&&(e.value=n,e.observers&&e.observers.length&&I(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],a=j&&j.running;a&&j.disposed.has(s),(a?!s.tState:!s.state)&&(s.pure?A.push(s):v.push(s),s.observers&&se(s)),a||(s.state=k)}if(A.length>1e6)throw A=[],new Error},!1)),n}function O(e){if(!e.fn)return;K(e);const n=H;fe(e,e.value,n)}function fe(e,n,t){let r;const i=b,s=C;C=b=e;try{r=e.fn(n)}catch(a){return e.pure&&(e.state=k,e.owned&&e.owned.forEach(K),e.owned=null),e.updatedAt=t+1,oe(a)}finally{C=s,b=i}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?ie(e,r):e.value=r,e.updatedAt=t)}function X(e,n,t,r=k,i){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:b,context:b?b.context:null,pure:t};return b===null||b!==ee&&(b.owned?b.owned.push(s):b.owned=[s]),s}function G(e){if(e.state===0)return;if(e.state===_)return U(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<H);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===k)O(e);else if(e.state===_){const r=A;A=null,I(()=>U(e,n[0]),!1),A=r}}function I(e,n){if(A)return e();let t=!1;n||(A=[]),v?t=!0:v=[],H++;try{const r=e();return ge(t),r}catch(r){t||(v=null),A=null,oe(r)}}function ge(e){if(A&&(re(A),A=null),e)return;const n=v;v=null,n.length&&I(()=>z(n),!1)}function re(e){for(let n=0;n<e.length;n++)G(e[n])}function he(e){let n,t=0;for(n=0;n<e.length;n++){const r=e[n];r.user?e[t++]=r:G(r)}for(n=0;n<t;n++)G(e[n])}function U(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const r=e.sources[t];if(r.sources){const i=r.state;i===k?r!==n&&(!r.updatedAt||r.updatedAt<H)&&G(r):i===_&&U(r,n)}}}function se(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=_,t.pure?A.push(t):v.push(t),t.observers&&se(t))}}function K(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),r=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const s=i.pop(),a=t.observerSlots.pop();r<i.length&&(s.sourceSlots[a]=r,i[r]=s,t.observerSlots[r]=a)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)K(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0}function ye(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function oe(e,n=b){throw ye(e)}const me=Symbol("fallback");function Y(e){for(let n=0;n<e.length;n++)e[n]()}function Ce(e,n,t={}){let r=[],i=[],s=[],a=0,o=n.length>1?[]:null;return ne(()=>Y(s)),()=>{let d=e()||[],g,l;return d[ue],R(()=>{let u=d.length,c,p,y,m,T,h,D,N,$;if(u===0)a!==0&&(Y(s),s=[],r=[],i=[],a=0,o&&(o=[])),t.fallback&&(r=[me],i[0]=B(le=>(s[0]=le,t.fallback())),a=1);else if(a===0){for(i=new Array(u),l=0;l<u;l++)r[l]=d[l],i[l]=B(f);a=u}else{for(y=new Array(u),m=new Array(u),o&&(T=new Array(u)),h=0,D=Math.min(a,u);h<D&&r[h]===d[h];h++);for(D=a-1,N=u-1;D>=h&&N>=h&&r[D]===d[N];D--,N--)y[N]=i[D],m[N]=s[D],o&&(T[N]=o[D]);for(c=new Map,p=new Array(N+1),l=N;l>=h;l--)$=d[l],g=c.get($),p[l]=g===void 0?-1:g,c.set($,l);for(g=h;g<=D;g++)$=r[g],l=c.get($),l!==void 0&&l!==-1?(y[l]=i[g],m[l]=s[g],o&&(T[l]=o[g]),l=p[l],c.set($,l)):s[g]();for(l=h;l<u;l++)l in y?(i[l]=y[l],s[l]=m[l],o&&(o[l]=T[l],o[l](l))):i[l]=B(f);i=i.slice(0,a=u),r=d.slice(0)}return i});function f(u){if(s[l]=u,o){const[c,p]=F(l);return o[l]=p,n(d[l],c)}return n(d[l])}}}function x(e,n){return R(()=>e(n||{}))}const be=e=>`Stale read from <${e}>.`;function q(e){const n="fallback"in e&&{fallback:()=>e.fallback};return w(Ce(()=>e.each,e.children,n||void 0))}function Te(e){const n=e.keyed,t=w(()=>e.when,void 0,{equals:(r,i)=>n?r===i:!r==!i});return w(()=>{const r=t();if(r){const i=e.children;return typeof i=="function"&&i.length>0?R(()=>i(n?r:()=>{if(!R(t))throw be("Show");return e.when})):i}return e.fallback},void 0,void 0)}function Ae(e,n,t){let r=t.length,i=n.length,s=r,a=0,o=0,d=n[i-1].nextSibling,g=null;for(;a<i||o<s;){if(n[a]===t[o]){a++,o++;continue}for(;n[i-1]===t[s-1];)i--,s--;if(i===a){const l=s<r?o?t[o-1].nextSibling:t[s-o]:d;for(;o<s;)e.insertBefore(t[o++],l)}else if(s===o)for(;a<i;)(!g||!g.has(n[a]))&&n[a].remove(),a++;else if(n[a]===t[s-1]&&t[o]===n[i-1]){const l=n[--i].nextSibling;e.insertBefore(t[o++],n[a++].nextSibling),e.insertBefore(t[--s],l),n[i]=t[s]}else{if(!g){g=new Map;let f=o;for(;f<s;)g.set(t[f],f++)}const l=g.get(n[a]);if(l!=null)if(o<l&&l<s){let f=a,u=1,c;for(;++f<i&&f<s&&!((c=g.get(n[f]))==null||c!==l+u);)u++;if(u>l-o){const p=n[a];for(;o<l;)e.insertBefore(t[o++],p)}else e.replaceChild(t[o++],n[a++])}else a++;else n[a++].remove()}}}const Q="_$DX_DELEGATE";function De(e,n,t,r={}){let i;return B(s=>{i=s,n===document?e():S(n,e(),n.firstChild?null:void 0,t)},r.owner),()=>{i(),n.textContent=""}}function L(e,n,t){let r;const i=()=>{const a=document.createElement("template");return a.innerHTML=e,t?a.content.firstChild.firstChild:a.content.firstChild},s=n?()=>R(()=>document.importNode(r||(r=i()),!0)):()=>(r||(r=i())).cloneNode(!0);return s.cloneNode=s,s}function Me(e,n=window.document){const t=n[Q]||(n[Q]=new Set);for(let r=0,i=e.length;r<i;r++){const s=e[r];t.has(s)||(t.add(s),n.addEventListener(s,Ne))}}function M(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function S(e,n,t,r){if(t!==void 0&&!r&&(r=[]),typeof n!="function")return W(e,n,r,t);E(i=>W(e,n(),i,t),r)}function Ne(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t;){const r=t[n];if(r&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?r.call(t,i,e):r.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function W(e,n,t,r,i){for(;typeof t=="function";)t=t();if(n===t)return t;const s=typeof n,a=r!==void 0;if(e=a&&t[0]&&t[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(n=n.toString()),a){let o=t[0];o&&o.nodeType===3?o.data!==n&&(o.data=n):o=document.createTextNode(n),t=J(e,t,r,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n;else if(n==null||s==="boolean")t=J(e,t,r);else{if(s==="function")return E(()=>{let o=n();for(;typeof o=="function";)o=o();t=W(e,o,t,r)}),()=>t;if(Array.isArray(n)){const o=[],d=t&&Array.isArray(t);if(V(o,n,t,i))return E(()=>t=W(e,o,t,r,!0)),()=>t;if(o.length===0){if(t=J(e,t,r),a)return t}else d?t.length===0?Z(e,o,r):Ae(e,t,o):(t&&J(e),Z(e,o));t=o}else if(n.nodeType){if(Array.isArray(t)){if(a)return t=J(e,t,r,n);J(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function V(e,n,t,r){let i=!1;for(let s=0,a=n.length;s<a;s++){let o=n[s],d=t&&t[s],g;if(!(o==null||o===!0||o===!1))if((g=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=V(e,o,d)||i;else if(g==="function")if(r){for(;typeof o=="function";)o=o();i=V(e,Array.isArray(o)?o:[o],Array.isArray(d)?d:[d])||i}else e.push(o),i=!0;else{const l=String(o);d&&d.nodeType===3&&d.data===l?e.push(d):e.push(document.createTextNode(l))}}return i}function Z(e,n,t=null){for(let r=0,i=n.length;r<i;r++)e.insertBefore(n[r],t)}function J(e,n,t,r){if(t===void 0)return e.textContent="";const i=r||document.createTextNode("");if(n.length){let s=!1;for(let a=n.length-1;a>=0;a--){const o=n[a];if(i!==o){const d=o.parentNode===e;!s&&!a?d?e.replaceChild(i,o):e.insertBefore(i,t):d&&o.remove()}else s=!0}}else e.insertBefore(i,t);return[i]}function we(e,n){const t=new Set,r=new Set;function i(s){if(t.has(s))return;t.add(s),r.add(s);const a=n[s];a&&a.siblings.forEach(o=>{t.has(o)||i(o)})}return i(e),r}function ve(e){const n={};for(const t in e){const r=e[t],i=new Set;r.parents.forEach(s=>{for(const a in e){const o=e[a];a!==t&&o.parents.includes(s)&&i.add(a)}}),n[t]={...r,siblings:Array.from(i)}}return n}var Re=L('<div><ul id=parents-group tabindex=0><span>Belongs to</span></ul><ul id=home tabindex=0></ul><ul id=children-group tabindex=0><span>Contains</span></ul><ul id=undo-text tabindex=0 aria-label="Pressing Undo"><span>Pressing Undo'),ke=L("<li tabindex=0><span aria-hidden=true> group"),Se=L("<li>None"),Ee=L("<li tabindex=0><span aria-hidden=true>"),xe=L("<li><span aria-hidden=true>");function $e(e){const[n,t]=F(e.nodeGraph[0].id),[r,i]=F(ve(e.nodeGraph)),[s,a]=F(["0"]),o=w(()=>n()!==null?r()[n()]:r()[0]),d=(l,f)=>{l!==f&&(a(u=>[...u,f]),t(f),setTimeout(()=>{const u=document.getElementById(`info-${f}`);u&&(u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),u.focus())},0))},g=l=>{if(l.key==="ArrowUp"&&l.shiftKey){const f=document.activeElement,u=f?.id;if(u.startsWith("parents"))f.click(),l.preventDefault();else if(u.startsWith("info-")||u==="home"){const c=document.getElementById("parents-group");c&&c.focus()}else if(u.startsWith("children")){const c=document.getElementById(`info-${n()}`);c&&c.focus()}l.preventDefault()}else if(l.key==="ArrowDown"&&l.shiftKey){if((document.activeElement?.id).startsWith("parents")){const c=document.getElementById(`info-${n()}`);c&&c.focus()}else{const c=o().children[0];if(c){t(c),a(y=>[...y,c]);const p=document.getElementById(`info-${c}`);p&&p.focus()}else{const p=document.getElementById("children-group");p&&p.focus()}}l.preventDefault()}else if(l.key==="h"){const f=document.getElementById("home"),u=s()[s().length-1],c=document.getElementById(`info-${u}`);c?c.focus():f?.focus()}else if(l.key==="Backspace")a(f=>{const u=[...f];if(u.length<=1)return u;u.pop();const c=u[u.length-1];if(c){const p=document.getElementById("undo-text");p&&p.focus(),t(c),setTimeout(()=>{const y=document.getElementById(`info-${c}`);y&&y.focus()},1e3)}return u});else if(l.key==="ArrowLeft"||l.key==="ArrowRight"||l.key==="ArrowUp"||l.key==="ArrowDown"){const f=document.activeElement,u=f?.id;if(u.startsWith("info-")||u==="home"){const c=Array.from(document.querySelectorAll("#home li")),p=c.indexOf(f);let y=p;(l.key==="ArrowLeft"||l.key==="ArrowUp")&&p>0?y=p-1:(l.key==="ArrowRight"||l.key==="ArrowDown")&&p<c.length-1&&(y=p+1);const m=c[y]?.id.split("info-")[1];m&&(t(m),a(T=>{const h=[...T];return h.pop(),h.push(m),h})),c[y]?.focus(),l.preventDefault()}else if(u.startsWith("parents")){const c=Array.from(document.querySelectorAll("#parents-group li")),p=c.indexOf(f);(l.key==="ArrowLeft"||l.key==="ArrowUp")&&p>0?(c[p-1].focus(),l.preventDefault()):((l.key==="ArrowRight"||l.key==="ArrowDown")&&p<c.length-1&&c[p+1].focus(),l.preventDefault())}}else if(l.key==="Enter"){const f=document.activeElement;f&&(f.click(),l.preventDefault())}};return de(()=>{window.addEventListener("keydown",g)}),ne(()=>{window.removeEventListener("keydown",g)}),x(Te,{get when(){return n()},get children(){return x(Je,{get node(){return o()},get nodeGraph(){return r()},onNodeClick:d})}})}function Je(e){const n=w(()=>e.node.parents.map(i=>e.nodeGraph[i]).sort((i,s)=>i.priority-s.priority));w(()=>n().map(i=>i.descriptionTokens?.label).join(", "));const t=w(()=>e.node.children.map(i=>e.nodeGraph[i]).sort((i,s)=>i.priority-s.priority));w(()=>t().map(i=>i.descriptionTokens?.label).join(", "));const r=w(()=>{const i=we(e.node.id,e.nodeGraph);return Array.from(i).map(a=>e.nodeGraph[a]).sort((a,o)=>{const d=a.priority-o.priority;return d!==0?d:Number(a.id)-Number(o.id)})});return(()=>{var i=Re(),s=i.firstChild,a=s.firstChild,o=s.nextSibling,d=o.nextSibling,g=d.firstChild,l=d.nextSibling,f=l.firstChild;return i.style.setProperty("padding","20px"),a.style.setProperty("font-weight","bold"),S(s,x(q,{get each(){return n()},children:(u,c)=>(()=>{var p=ke(),y=p.firstChild,m=y.firstChild;return p.$$click=()=>e.onNodeClick(e.node.id,u.id),S(y,()=>u.displayName,m),E(T=>{var h=`parents-${e.node.id}-${c()}`,D=`${u.displayName} group`;return h!==T.e&&M(p,"id",T.e=h),D!==T.t&&M(p,"aria-label",T.t=D),T},{e:void 0,t:void 0}),p})()}),null),S(o,x(q,{get each(){return r()},get fallback(){return(()=>{var u=Se();return u.style.setProperty("color","grey"),u})()},children:(u,c)=>(()=>{var p=Ee(),y=p.firstChild;return p.$$click=()=>e.onNodeClick(e.node.id,u.id),S(y,()=>`${u.displayName}; ${u.descriptionTokens?.longDescription}`),E(m=>{var T=`${c()+1} of ${r().length}. ${u.displayName}; ${u.descriptionTokens?.longDescription}`,h=`info-${u.id}`;return T!==m.e&&M(p,"aria-label",m.e=T),h!==m.t&&M(p,"id",m.t=h),m},{e:void 0,t:void 0}),p})()})),g.style.setProperty("font-weight","bold"),M(g,"aria-hidden",!0),S(d,x(q,{get each(){return t()},children:(u,c)=>(()=>{var p=xe(),y=p.firstChild;return p.$$click=()=>e.onNodeClick(e.node.id,u.id),S(y,()=>u.displayName),E(m=>{var T=`children-${e.node.id}-${c()}`,h=u.displayName;return T!==m.e&&M(p,"id",m.e=T),h!==m.t&&M(p,"aria-label",m.t=h),m},{e:void 0,t:void 0}),p})()}),null),f.style.setProperty("font-weight","bold"),M(f,"aria-hidden",!0),E(u=>{var c=e.node.parents.length==0?`${e.node.displayName} belongs to 0 groups`:`${e.node.displayName} belongs to ${n().length} groups`,p=e.node.children.length===0?`${e.node.displayName} contains no nodes`:`${e.node.displayName} contains ${t().length} nodes`;return c!==u.e&&M(s,"aria-label",u.e=c),p!==u.t&&M(d,"aria-label",u.t=p),u},{e:void 0,t:void 0}),i})()}Me(["click"]);const Oe={0:{id:"0",displayName:"Line Graph",description:"Monthly Average Temperature for Reggane and Tallinn. Line graph. With axes month and temperature Celsius.",descriptionTokens:{label:"Line Graph",shortDescription:"Monthly Average Temperature for Reggane and Tallinn.",longDescription:"Monthly Average Temperature for Reggane and Tallinn. Axes month and temperature Celsius."},parents:[],children:["1","2","41"],priority:0},1:{id:"1",displayName:"X-axis",description:"X Axis. Contains January to December.",descriptionTokens:{label:"X-axis",shortDescription:"Contains 12 months.",longDescription:"Contains 12 months."},parents:["0"],children:["3","4","5","6","7","8","9","10","11","12","13","14"],priority:1},2:{id:"2",displayName:"Legend",description:"Legend. Contains Reggane, Tallinn",descriptionTokens:{label:"Legend",shortDescription:"Contains 2 cities.",longDescription:"Contains 2 cities."},parents:["0"],children:["15","16"],priority:2},3:{id:"3",displayName:"January",description:"Month: January. Contains: 2 points. Temperature of Reggane, Tallinn in January",descriptionTokens:{label:"January",shortDescription:"Month: January. Contains: 2 points.",longDescription:"Contains: 2 points. Temperature of Reggane and Tallinn in January."},parents:["1"],children:["17","18"],priority:3},4:{id:"4",displayName:"February",description:"Month: February. Contains: 2 points. Temperature of Reggane, Tallinn in February.",descriptionTokens:{label:"February",shortDescription:"Month: February. Contains: 2 points.",longDescription:"Contains: 2 points. Temperature of Reggane and Tallinn in February."},parents:["1"],children:["19","20"],priority:3},5:{id:"5",displayName:"March",description:"Month: March. Contains: 2 points. Temperature of Reggane, Tallinn in March.",descriptionTokens:{label:"March",shortDescription:"Month: March. Contains: 2 points.",longDescription:"Contains: 2 points. Temperature of Reggane and Tallinn in March."},parents:["1"],children:["21","22"],priority:3},6:{id:"6",displayName:"April",description:"Month: April. Contains: 2 points. Temperature of Reggane, Tallinn in April.",descriptionTokens:{label:"April",shortDescription:"Month: April. Contains: 2 points.",longDescription:"Contains: 2 points. Temperature of Reggane and Tallinn in April."},parents:["1"],children:["23","24"],priority:3},7:{id:"7",displayName:"May",description:"Month: May. Contains: 2 points. Temperature of Reggane, Tallinn in May.",descriptionTokens:{label:"May",shortDescription:"Month: May. Contains: 2 points.",longDescription:"Contains: 2 points. Temperature of Reggane and Tallinn in May."},parents:["1"],children:["25","26"],priority:3},8:{id:"8",displayName:"June",description:"Month: June. Contains: 2 points. Temperature of Reggane, Tallinn in June.",descriptionTokens:{label:"June",shortDescription:"Month: June. Contains: 2 points.",longDescription:"Contains: 2 points. Temperature of Reggane and Tallinn in June."},parents:["1"],children:["27","28"],priority:3},9:{id:"9",displayName:"July",description:"Month: July. Contains: 2 points. Temperature of Reggane, Tallinn in July.",descriptionTokens:{label:"July",shortDescription:"Month: July. Contains: 2 points.",longDescription:"Contains: 2 points. Temperature of Reggane and Tallinn in July."},parents:["1"],children:["29","30"],priority:3},10:{id:"10",displayName:"August",description:"Month: August. Contains: 2 points. Temperature of Reggane, Tallinn in August.",descriptionTokens:{label:"August",shortDescription:"Month: August. Contains: 2 points.",longDescription:"Contains: 2 points. Temperature of Reggane and Tallinn in August."},parents:["1"],children:["31","32"],priority:3},11:{id:"11",displayName:"September",description:"Month: September. Contains: 2 points. Temperature of Reggane, Tallinn in September.",descriptionTokens:{label:"September",shortDescription:"Month: September. Contains: 2 points.",longDescription:"Contains: 2 points. Temperature of Reggane and Tallinn in September."},parents:["1"],children:["33","34"],priority:3},12:{id:"12",displayName:"October",description:"Month: October. Contains: 2 points. Temperature of Reggane, Tallinn in October.",descriptionTokens:{label:"October",shortDescription:"Month: October. Contains: 2 points.",longDescription:"Contains: 2 points. Temperature of Reggane and Tallinn in October."},parents:["1"],children:["35","36"],priority:3},13:{id:"13",displayName:"November",description:"Month: November. Contains: 2 points. Temperature of Reggane, Tallinn in November.",descriptionTokens:{label:"November",shortDescription:"Month: November. Contains: 2 points.",longDescription:"Contains: 2 points. Temperature of Reggane and Tallinn in November."},parents:["1"],children:["37","38"],priority:3},14:{id:"14",displayName:"December",description:"Month: December. Contains: 2 points. Temperature of Reggane, Tallinn in December.",descriptionTokens:{label:"December",shortDescription:"Month: December. Contains: 2 points.",longDescription:"Contains: 2 points. Temperature of Reggane and Tallinn in December."},parents:["1"],children:["39","40"],priority:3},15:{id:"15",displayName:"Reggane",description:"City: Reggane. Contains: 12 temperature points. Monthly temperature data for Reggane.",descriptionTokens:{label:"Reggane",shortDescription:"Contains: 12 temperature points.",longDescription:"Contains: 12 points. Monthly temperature data for Reggane."},parents:["2"],children:["17","19","21","23","25","27","29","31","33","35","37","39"],priority:3},16:{id:"16",displayName:"Tallinn",description:"City: Tallinn. Contains: 12 temperature points. Monthly temperature data for Tallinn.",descriptionTokens:{label:"Tallinn",shortDescription:"Contains: 12 temperature points.",longDescription:"Contains: 12 points. Monthly temperature data for Tallinn."},parents:["2"],children:["18","20","22","24","26","28","30","32","34","36","38","40"],priority:3},17:{id:"17",displayName:"Reggane in January",description:"Month: January. City: Reggane. Average temperature: 16 Celsius.",descriptionTokens:{label:"Reggane in January",shortDescription:"Month: January. City: Reggane. Average temperature: 16 Celsius.",longDescription:"16 Celsius. Data point."},parents:["3","15"],children:[],priority:4},18:{id:"18",displayName:"Tallinn in January",description:"Month: January. City: Tallinn. Average temperature: -2.9 Celsius.",descriptionTokens:{label:"Tallinn in January",shortDescription:"Month: January. City: Tallinn. Average temperature: -2.9 Celsius.",longDescription:"-2.9 Celsius. Data point."},parents:["3","16"],children:[],priority:4},19:{id:"19",displayName:"Reggane in February",description:"Month: February. City: Reggane. Average temperature: 18.2 Celsius.",descriptionTokens:{label:"Reggane in February",shortDescription:"Month: February. City: Reggane. Average temperature: 18.2 Celsius.",longDescription:"18.2 Celsius. Data point."},parents:["4","15"],children:[],priority:4},20:{id:"20",displayName:"Tallinn in February",description:"Month: February. City: Tallinn. Average temperature: -3.6 Celsius.",descriptionTokens:{label:"Tallinn in February",shortDescription:"Month: February. City: Tallinn. Average temperature: -3.6 Celsius.",longDescription:"-3.6 Celsius. Data point."},parents:["4","16"],children:[],priority:4},21:{id:"21",displayName:"Reggane in March",description:"Month: March. City: Reggane. Average temperature: 23.1 Celsius.",descriptionTokens:{label:"Reggane in March",shortDescription:"Month: March. City: Reggane. Average temperature: 23.1 Celsius.",longDescription:"23.1 Celsius. Data point."},parents:["5","15"],children:[],priority:4},22:{id:"22",displayName:"Tallinn in March",description:"Month: March. City: Tallinn. Average temperature: -0.6 Celsius.",descriptionTokens:{label:"Tallinn in March",shortDescription:"Month: March. City: Tallinn. Average temperature: -0.6 Celsius.",longDescription:"-0.6 Celsius. Data point."},parents:["5","16"],children:[],priority:4},23:{id:"23",displayName:"Reggane in April",description:"Month: April. City: Reggane. Average temperature: 27.9 Celsius.",descriptionTokens:{label:"Reggane in April",shortDescription:"Month: April. City: Reggane. Average temperature: 27.9 Celsius.",longDescription:"27.9 Celsius. Data point."},parents:["6","15"],children:[],priority:4},24:{id:"24",displayName:"Tallinn in April",description:"Month: April. City: Tallinn. Average temperature: 4.8 Celsius.",descriptionTokens:{label:"Tallinn in April",shortDescription:"Month: April. City: Tallinn. Average temperature: 4.8 Celsius.",longDescription:"4.8 Celsius. Data point."},parents:["6","16"],children:[],priority:4},25:{id:"25",displayName:"Reggane in May",description:"Month: May. City: Reggane. Average temperature: 32.2 Celsius.",descriptionTokens:{label:"Reggane in May",shortDescription:"Month: May. City: Reggane. Average temperature: 32.2 Celsius.",longDescription:"32.2 Celsius. Data point."},parents:["7","15"],children:[],priority:4},26:{id:"26",displayName:"Tallinn in May",description:"Month: May. City: Tallinn. Average temperature: 10.2 Celsius.",descriptionTokens:{label:"Tallinn in May",shortDescription:"Month: May. City: Tallinn. Average temperature: 10.2 Celsius.",longDescription:"10.2 Celsius. Data point."},parents:["7","16"],children:[],priority:4},27:{id:"27",displayName:"Reggane in June",description:"Month: June. City: Reggane. Average temperature: 36.4 Celsius.",descriptionTokens:{label:"Reggane in June",shortDescription:"Month: June. City: Reggane. Average temperature: 36.4 Celsius.",longDescription:"36.4 Celsius. Data point."},parents:["8","15"],children:[],priority:4},28:{id:"28",displayName:"Tallinn in June",description:"Month: June. City: Tallinn. Average temperature: 14.5 Celsius.",descriptionTokens:{label:"Tallinn in June",shortDescription:"Month: June. City: Tallinn. Average temperature: 14.5 Celsius.",longDescription:"14.5 Celsius. Data point."},parents:["8","16"],children:[],priority:4},29:{id:"29",displayName:"Reggane in July",description:"Month: July. City: Reggane. Average temperature: 39.8 Celsius.",descriptionTokens:{label:"Reggane in July",shortDescription:"Month: July. City: Reggane. Average temperature: 39.8 Celsius.",longDescription:"39.8 Celsius. Data point."},parents:["9","15"],children:[],priority:4},30:{id:"30",displayName:"Tallinn in July",description:"Month: July. City: Tallinn. Average temperature: 17.6 Celsius.",descriptionTokens:{label:"Tallinn in July",shortDescription:"Month: July. City: Tallinn. Average temperature: 17.6 Celsius.",longDescription:"17.6 Celsius. Data point."},parents:["9","16"],children:[],priority:4},31:{id:"31",displayName:"Reggane in August",description:"Month: August. City: Reggane. Average temperature: 38.4 Celsius.",descriptionTokens:{label:"Reggane in August",shortDescription:"Month: August. City: Reggane. Average temperature: 38.4 Celsius.",longDescription:"38.4 Celsius. Data point."},parents:["10","15"],children:[],priority:4},32:{id:"32",displayName:"Tallinn in August",description:"Month: August. City: Tallinn. Average temperature: 16.5 Celsius.",descriptionTokens:{label:"Tallinn in August",shortDescription:"Month: August. City: Tallinn. Average temperature: 16.5 Celsius.",longDescription:"16.5 Celsius. Data point."},parents:["10","16"],children:[],priority:4},33:{id:"33",displayName:"Reggane in September",description:"Month: September. City: Reggane. Average temperature: 35.5 Celsius.",descriptionTokens:{label:"Reggane in September",shortDescription:"Month: September. City: Reggane. Average temperature: 35.5 Celsius.",longDescription:"35.5 Celsius. Data point."},parents:["11","15"],children:[],priority:4},34:{id:"34",displayName:"Tallinn in September",description:"Month: September. City: Tallinn. Average temperature: 12 Celsius.",descriptionTokens:{label:"Tallinn in September",shortDescription:"Month: September. City: Tallinn. Average temperature: 12 Celsius.",longDescription:"12 Celsius. Data point."},parents:["11","16"],children:[],priority:4},35:{id:"35",displayName:"Reggane in October",description:"Month: October. City: Reggane. Average temperature: 29.2 Celsius.",descriptionTokens:{label:"Reggane in October",shortDescription:"Month: October. City: Reggane. Average temperature: 29.2 Celsius.",longDescription:"29.2 Celsius. Data point."},parents:["12","15"],children:[],priority:4},36:{id:"36",displayName:"Tallinn in October",description:"Month: October. City: Tallinn. Average temperature: 6.5 Celsius.",descriptionTokens:{label:"Tallinn in October",shortDescription:"Month: October. City: Tallinn. Average temperature: 6.5 Celsius.",longDescription:"6.5 Celsius. Data point."},parents:["12","16"],children:[],priority:4},37:{id:"37",displayName:"Reggane in November",description:"Month: November. City: Reggane. Average temperature: 22 Celsius.",descriptionTokens:{label:"Reggane in November",shortDescription:"Month: November. City: Reggane. Average temperature: 22 Celsius.",longDescription:"22 Celsius. Data point."},parents:["13","15"],children:[],priority:4},38:{id:"38",displayName:"Tallinn in November",description:"Month: November. City: Tallinn. Average temperature: 2 Celsius.",descriptionTokens:{label:"Tallinn in November",shortDescription:"Month: November. City: Tallinn. Average temperature: 2 Celsius.",longDescription:"2 Celsius. Data point."},parents:["13","16"],children:[],priority:4},39:{id:"39",displayName:"Reggane in December",description:"Month: December. City: Reggane. Average temperature: 17.8 Celsius.",descriptionTokens:{label:"Reggane in December",shortDescription:"Month: December. City: Reggane. Average temperature: 17.8 Celsius.",longDescription:"17.8 Celsius. Data point."},parents:["14","15"],children:[],priority:4},40:{id:"40",displayName:"Tallinn in December",description:"Month: December. City: Tallinn. Average temperature: -0.9 Celsius.",descriptionTokens:{label:"Tallinn in December",shortDescription:"Month: December. City: Tallinn. Average temperature: -0.9 Celsius.",longDescription:"-0.9 Celsius. Data point."},parents:["14","16"],children:[],priority:4},41:{id:"41",displayName:"Y-axis",description:"Y-axis. Label: Temperature in Celsius. Values range from -10 to 50 on a numerical scale.",descriptionTokens:{label:"Y-axis",shortDescription:"Y-axis. Temperature in Celsius",longDescription:"Label: Temperature in Celsius. Values range from -10 to 50 on a numerical scale."},parents:["0"],children:[],priority:2}},Ie=()=>x($e,{nodeGraph:Oe,showHypergraph:!1}),Le=document.getElementById("root"),Be=window.location.pathname;Be.includes("benthic");De(()=>x(Ie,{}),Le);
