(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const ae=(e,t)=>e===t,ue=Symbol("solid-track"),F={equals:ae};let z=re;const S=1,_=2,ee={owned:null,cleanups:null,context:null,owner:null};var b=null;let j=null,ce=null,C=null,A=null,w=null,H=0;function P(e,t){const n=C,i=b,r=e.length===0,s=t===void 0?i:t,a=r?ee:{owned:null,cleanups:null,context:s?s.context:null,owner:s},l=r?e:()=>e(()=>k(()=>K(a)));b=a,C=null;try{return I(l,!0)}finally{C=n,b=i}}function B(e,t){t=t?Object.assign({},F,t):F;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),ie(n,r));return[ne.bind(n),i]}function x(e,t,n){const i=V(e,t,!1,S);L(i)}function pe(e,t,n){z=fe;const i=V(e,t,!1,S);(!n||!n.render)&&(i.user=!0),w?w.push(i):L(i)}function N(e,t,n){n=n?Object.assign({},F,n):F;const i=V(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,L(i),ne.bind(i)}function k(e){if(C===null)return e();const t=C;C=null;try{return e()}finally{C=t}}function de(e){pe(()=>k(e))}function te(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function ne(){if(this.sources&&this.state)if(this.state===S)L(this);else{const e=A;A=null,I(()=>U(this),!1),A=e}if(C){const e=this.observers?this.observers.length:0;C.sources?(C.sources.push(this),C.sourceSlots.push(e)):(C.sources=[this],C.sourceSlots=[e]),this.observers?(this.observers.push(C),this.observerSlots.push(C.sources.length-1)):(this.observers=[C],this.observerSlots=[C.sources.length-1])}return this.value}function ie(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&I(()=>{for(let r=0;r<e.observers.length;r+=1){const s=e.observers[r],a=j&&j.running;a&&j.disposed.has(s),(a?!s.tState:!s.state)&&(s.pure?A.push(s):w.push(s),s.observers&&se(s)),a||(s.state=S)}if(A.length>1e6)throw A=[],new Error},!1)),t}function L(e){if(!e.fn)return;K(e);const t=H;ge(e,e.value,t)}function ge(e,t,n){let i;const r=b,s=C;C=b=e;try{i=e.fn(t)}catch(a){return e.pure&&(e.state=S,e.owned&&e.owned.forEach(K),e.owned=null),e.updatedAt=n+1,oe(a)}finally{C=s,b=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ie(e,i):e.value=i,e.updatedAt=n)}function V(e,t,n,i=S,r){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:b?b.context:null,pure:n};return b===null||b!==ee&&(b.owned?b.owned.push(s):b.owned=[s]),s}function G(e){if(e.state===0)return;if(e.state===_)return U(e);if(e.suspense&&k(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<H);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===S)L(e);else if(e.state===_){const i=A;A=null,I(()=>U(e,t[0]),!1),A=i}}function I(e,t){if(A)return e();let n=!1;t||(A=[]),w?n=!0:w=[],H++;try{const i=e();return he(n),i}catch(i){n||(w=null),A=null,oe(i)}}function he(e){if(A&&(re(A),A=null),e)return;const t=w;w=null,t.length&&I(()=>z(t),!1)}function re(e){for(let t=0;t<e.length;t++)G(e[t])}function fe(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:G(i)}for(t=0;t<n;t++)G(e[t])}function U(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=i.state;r===S?i!==t&&(!i.updatedAt||i.updatedAt<H)&&G(i):r===_&&U(i,t)}}}function se(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=_,n.pure?A.push(n):w.push(n),n.observers&&se(n))}}function K(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const s=r.pop(),a=n.observerSlots.pop();i<r.length&&(s.sourceSlots[a]=i,r[i]=s,n.observerSlots[i]=a)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)K(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ye(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function oe(e,t=b){throw ye(e)}const me=Symbol("fallback");function X(e){for(let t=0;t<e.length;t++)e[t]()}function Ce(e,t,n={}){let i=[],r=[],s=[],a=0,l=t.length>1?[]:null;return te(()=>X(s)),()=>{let g=e()||[],h,o;return g[ue],k(()=>{let u=g.length,p,d,m,y,T,f,M,v,$;if(u===0)a!==0&&(X(s),s=[],i=[],r=[],a=0,l&&(l=[])),n.fallback&&(i=[me],r[0]=P(le=>(s[0]=le,n.fallback())),a=1);else if(a===0){for(r=new Array(u),o=0;o<u;o++)i[o]=g[o],r[o]=P(c);a=u}else{for(m=new Array(u),y=new Array(u),l&&(T=new Array(u)),f=0,M=Math.min(a,u);f<M&&i[f]===g[f];f++);for(M=a-1,v=u-1;M>=f&&v>=f&&i[M]===g[v];M--,v--)m[v]=r[M],y[v]=s[M],l&&(T[v]=l[M]);for(p=new Map,d=new Array(v+1),o=v;o>=f;o--)$=g[o],h=p.get($),d[o]=h===void 0?-1:h,p.set($,o);for(h=f;h<=M;h++)$=i[h],o=p.get($),o!==void 0&&o!==-1?(m[o]=r[h],y[o]=s[h],l&&(T[o]=l[h]),o=d[o],p.set($,o)):s[h]();for(o=f;o<u;o++)o in m?(r[o]=m[o],s[o]=y[o],l&&(l[o]=T[o],l[o](o))):r[o]=P(c);r=r.slice(0,a=u),i=g.slice(0)}return r});function c(u){if(s[o]=u,l){const[p,d]=B(o);return l[o]=d,t(g[o],p)}return t(g[o])}}}function E(e,t){return k(()=>e(t||{}))}const be=e=>`Stale read from <${e}>.`;function q(e){const t="fallback"in e&&{fallback:()=>e.fallback};return N(Ce(()=>e.each,e.children,t||void 0))}function Te(e){const t=e.keyed,n=N(()=>e.when,void 0,{equals:(i,r)=>t?i===r:!i==!r});return N(()=>{const i=n();if(i){const r=e.children;return typeof r=="function"&&r.length>0?k(()=>r(t?i:()=>{if(!k(n))throw be("Show");return e.when})):r}return e.fallback},void 0,void 0)}function Ae(e,t,n){let i=n.length,r=t.length,s=i,a=0,l=0,g=t[r-1].nextSibling,h=null;for(;a<r||l<s;){if(t[a]===n[l]){a++,l++;continue}for(;t[r-1]===n[s-1];)r--,s--;if(r===a){const o=s<i?l?n[l-1].nextSibling:n[s-l]:g;for(;l<s;)e.insertBefore(n[l++],o)}else if(s===l)for(;a<r;)(!h||!h.has(t[a]))&&t[a].remove(),a++;else if(t[a]===n[s-1]&&n[l]===t[r-1]){const o=t[--r].nextSibling;e.insertBefore(n[l++],t[a++].nextSibling),e.insertBefore(n[--s],o),t[r]=n[s]}else{if(!h){h=new Map;let c=l;for(;c<s;)h.set(n[c],c++)}const o=h.get(t[a]);if(o!=null)if(l<o&&o<s){let c=a,u=1,p;for(;++c<r&&c<s&&!((p=h.get(t[c]))==null||p!==o+u);)u++;if(u>o-l){const d=t[a];for(;l<o;)e.insertBefore(n[l++],d)}else e.replaceChild(n[l++],t[a++])}else a++;else t[a++].remove()}}}const Q="_$DX_DELEGATE";function Me(e,t,n,i={}){let r;return P(s=>{r=s,t===document?e():R(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function O(e,t,n){let i;const r=()=>{const a=document.createElement("template");return a.innerHTML=e,n?a.content.firstChild.firstChild:a.content.firstChild},s=t?()=>k(()=>document.importNode(i||(i=r()),!0)):()=>(i||(i=r())).cloneNode(!0);return s.cloneNode=s,s}function ve(e,t=window.document){const n=t[Q]||(t[Q]=new Set);for(let i=0,r=e.length;i<r;i++){const s=e[i];n.has(s)||(n.add(s),t.addEventListener(s,De))}}function D(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function R(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return W(e,t,i,n);x(r=>W(e,t(),r,n),i)}function De(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const i=n[t];if(i&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?i.call(n,r,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function W(e,t,n,i,r){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,a=i!==void 0;if(e=a&&n[0]&&n[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),a){let l=n[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=J(e,n,i,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||s==="boolean")n=J(e,n,i);else{if(s==="function")return x(()=>{let l=t();for(;typeof l=="function";)l=l();n=W(e,l,n,i)}),()=>n;if(Array.isArray(t)){const l=[],g=n&&Array.isArray(n);if(Y(l,t,n,r))return x(()=>n=W(e,l,n,i,!0)),()=>n;if(l.length===0){if(n=J(e,n,i),a)return n}else g?n.length===0?Z(e,l,i):Ae(e,n,l):(n&&J(e),Z(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(a)return n=J(e,n,i,t);J(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Y(e,t,n,i){let r=!1;for(let s=0,a=t.length;s<a;s++){let l=t[s],g=n&&n[s],h;if(!(l==null||l===!0||l===!1))if((h=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))r=Y(e,l,g)||r;else if(h==="function")if(i){for(;typeof l=="function";)l=l();r=Y(e,Array.isArray(l)?l:[l],Array.isArray(g)?g:[g])||r}else e.push(l),r=!0;else{const o=String(l);g&&g.nodeType===3&&g.data===o?e.push(g):e.push(document.createTextNode(o))}}return r}function Z(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function J(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let s=!1;for(let a=t.length-1;a>=0;a--){const l=t[a];if(r!==l){const g=l.parentNode===e;!s&&!a?g?e.replaceChild(r,l):e.insertBefore(r,n):g&&l.remove()}else s=!0}}else e.insertBefore(r,n);return[r]}function Ne(e,t){const n=new Set,i=new Set;function r(s){if(n.has(s))return;n.add(s),i.add(s);const a=t[s];a&&a.siblings.forEach(l=>{n.has(l)||r(l)})}return r(e),i}function we(e){const t={};for(const n in e){const i=e[n],r=new Set;i.parents.forEach(s=>{for(const a in e){const l=e[a];a!==n&&l.parents.includes(s)&&r.add(a)}}),t[n]={...i,siblings:Array.from(r)}}return t}var Re=O("<div><button id=hidden-focus aria-hidden=true>Pressing Undo"),ke=O("<div><ul id=home tabindex=0></ul><ul id=parents-group tabindex=0><span>Belongs to</span></ul><ul id=children-group tabindex=0><span>Contains"),Se=O("<li>None"),xe=O("<li tabindex=0><span aria-hidden=true>"),Ee=O("<li tabindex=0><span aria-hidden=true> group"),$e=O("<li><span aria-hidden=true>");function Je(e){const[t,n]=B(e.nodeGraph[0].id),[i,r]=B(we(e.nodeGraph)),[s,a]=B(["0"]),l=N(()=>t()!==null?i()[t()]:i()[0]),g=(o,c)=>{a(u=>[...u,c]),n(c),setTimeout(()=>{const u=document.getElementById(`info-${c}`);u&&(u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),u.focus())},0)},h=o=>{if(o.key==="ArrowUp"&&o.shiftKey){const c=document.activeElement,u=c?.id;if(u.startsWith("parents"))c.click(),o.preventDefault();else if(u.startsWith("info-")||u==="home"){const p=document.getElementById("parents-group");p&&p.focus()}else if(u.startsWith("children")){const p=document.getElementById(`info-${t()}`);p&&p.focus()}o.preventDefault()}else if(o.key==="ArrowDown"&&o.shiftKey){const c=l().children[0];if(c){n(c),a(p=>[...p,c]);const u=document.getElementById(`info-${c}`);u&&u.focus()}else{const u=document.getElementById("children-group");u&&u.focus()}o.preventDefault()}else if(o.key==="h"){const c=document.getElementById("home"),u=s()[s().length-1],p=document.getElementById(`info-${u}`);p?p.focus():c?.focus()}else if(o.key==="Backspace")a(c=>{const u=[...c];if(u.length<=1)return u;u.pop();const p=u[u.length-1];if(p){const d=document.getElementById("hidden-focus");d&&d.focus(),n(p),setTimeout(()=>{const m=document.getElementById(`info-${p}`);m&&m.focus()},700)}return u});else if(o.key==="ArrowLeft"||o.key==="ArrowRight"||o.key==="ArrowUp"||o.key==="ArrowDown"){const c=document.activeElement,u=c?.id;if(u.startsWith("info-")||u==="home"){const p=Array.from(document.querySelectorAll("#home li")),d=p.indexOf(c);let m=d;(o.key==="ArrowLeft"||o.key==="ArrowUp")&&d>0?m=d-1:(o.key==="ArrowRight"||o.key==="ArrowDown")&&d<p.length-1&&(m=d+1);const y=p[m]?.id.split("info-")[1];y&&(n(y),a(T=>{const f=[...T];return f.pop(),f.push(y),f})),p[m]?.focus(),o.preventDefault()}else if(u.startsWith("parents")){const p=Array.from(document.querySelectorAll("#parents-group li")),d=p.indexOf(c);(o.key==="ArrowLeft"||o.key==="ArrowUp")&&d>0?(p[d-1].focus(),o.preventDefault()):((o.key==="ArrowRight"||o.key==="ArrowDown")&&d<p.length-1&&p[d+1].focus(),o.preventDefault())}}else if(o.key==="Enter"){const c=document.activeElement;c&&(c.click(),o.preventDefault())}};return de(()=>{window.addEventListener("keydown",h)}),te(()=>{window.removeEventListener("keydown",h)}),(()=>{var o=Re(),c=o.firstChild;return c.style.setProperty("position","absolute"),c.style.setProperty("width","1px"),c.style.setProperty("height","1px"),c.style.setProperty("margin","-1px"),c.style.setProperty("padding","0"),c.style.setProperty("border","0"),c.style.setProperty("clip","rect(0, 0, 0, 0)"),c.style.setProperty("overflow","hidden"),c.style.setProperty("white-space","nowrap"),R(o,E(Te,{get when(){return t()},get children(){return E(Oe,{get node(){return l()},get nodeGraph(){return i()},onNodeClick:g})}}),null),o})()}function Oe(e){const t=N(()=>e.node.parents.map(a=>e.nodeGraph[a]).sort((a,l)=>a.priority-l.priority)),n=N(()=>t().map(a=>a.descriptionTokens?.label).join(", ")),i=N(()=>e.node.children.map(a=>e.nodeGraph[a]).sort((a,l)=>a.priority-l.priority)),r=N(()=>i().map(a=>a.descriptionTokens?.label).join(", ")),s=N(()=>{const a=Ne(e.node.id,e.nodeGraph);return Array.from(a).map(g=>e.nodeGraph[g]).sort((g,h)=>{const o=g.priority-h.priority;return o!==0?o:Number(g.id)-Number(h.id)})});return(()=>{var a=ke(),l=a.firstChild,g=l.nextSibling,h=g.firstChild,o=g.nextSibling,c=o.firstChild;return a.style.setProperty("padding","20px"),R(l,E(q,{get each(){return s()},get fallback(){return(()=>{var u=Se();return u.style.setProperty("color","grey"),u})()},children:(u,p)=>(()=>{var d=xe(),m=d.firstChild;return d.$$click=()=>e.onNodeClick(e.node.id,u.id),R(m,()=>`${u.displayName}; ${u.descriptionTokens?.longDescription}`),x(y=>{var T=`Node ${p()+1} of ${s().length}; ${u.displayName}; ${u.descriptionTokens?.longDescription}`,f=`info-${u.id}`;return T!==y.e&&D(d,"aria-label",y.e=T),f!==y.t&&D(d,"id",y.t=f),y},{e:void 0,t:void 0}),d})()})),h.style.setProperty("font-weight","bold"),R(g,E(q,{get each(){return t()},children:(u,p)=>(()=>{var d=Ee(),m=d.firstChild,y=m.firstChild;return d.$$click=()=>e.onNodeClick(e.node.id,u.id),R(m,()=>u.displayName,y),x(T=>{var f=`parents-${e.node.id}-${p()}`,M=`${u.displayName} group`;return f!==T.e&&D(d,"id",T.e=f),M!==T.t&&D(d,"aria-label",T.t=M),T},{e:void 0,t:void 0}),d})()}),null),c.style.setProperty("font-weight","bold"),D(c,"aria-hidden",!0),R(o,E(q,{get each(){return i()},children:(u,p)=>(()=>{var d=$e(),m=d.firstChild;return d.$$click=()=>e.onNodeClick(e.node.id,u.id),R(m,()=>u.displayName),x(y=>{var T=`children-${e.node.id}-${p()}`,f=u.displayName;return T!==y.e&&D(d,"id",y.e=T),f!==y.t&&D(d,"aria-label",y.t=f),y},{e:void 0,t:void 0}),d})()}),null),x(u=>{var p=e.node.parents.length==0?`${e.node.displayName} belongs to 0 groups`:`${e.node.displayName} belongs to (${n()})`,d=e.node.children.length===0?`${e.node.displayName} contains no nodes`:`${e.node.displayName} contains (${r()})`;return p!==u.e&&D(g,"aria-label",u.e=p),d!==u.t&&D(o,"aria-label",u.t=d),u},{e:void 0,t:void 0}),a})()}ve(["click"]);const Le={0:{id:"0",displayName:"Line Graph",description:"Monthly Average Temperature for Reggane and Tallinn. Line graph. With axes month and temperature Celsius.",descriptionTokens:{label:"Line Graph",shortDescription:"Monthly Average Temperature for Reggane and Tallinn.",longDescription:"Monthly Average Temperature for Reggane and Tallinn. Line graph. With axes month and temperature Celsius."},parents:[],children:["1","2","41"],priority:0},1:{id:"1",displayName:"X-axis",description:"X Axis. Contains January to December.",descriptionTokens:{label:"X-axis",shortDescription:"Contains 12 months.",longDescription:"Contains 12 months. January to December."},parents:["0"],children:["3","4","5","6","7","8","9","10","11","12","13","14"],priority:1},2:{id:"2",displayName:"Legend",description:"Legend. Contains Reggane, Tallinn",descriptionTokens:{label:"Legend",shortDescription:"Contains 2 cities.",longDescription:"Contains Reggane, Tallinn"},parents:["0"],children:["15","16"],priority:2},3:{id:"3",displayName:"January",description:"Month: January. Contains: 2 points. Temperature of Reggane, Tallinn in January",descriptionTokens:{label:"January",shortDescription:"Month: January. Contains: 2 points.",longDescription:"Month: January. Contains: 2 points. Temperature of Reggane, Tallinn in January."},parents:["1"],children:["17","18"],priority:3},4:{id:"4",displayName:"February",description:"Month: February. Contains: 2 points. Temperature of Reggane, Tallinn in February.",descriptionTokens:{label:"February",shortDescription:"Month: February. Contains: 2 points.",longDescription:"Month: February. Contains: 2 points. Temperature of Reggane, Tallinn in February."},parents:["1"],children:["19","20"],priority:3},5:{id:"5",displayName:"March",description:"Month: March. Contains: 2 points. Temperature of Reggane, Tallinn in March.",descriptionTokens:{label:"March",shortDescription:"Month: March. Contains: 2 points.",longDescription:"Month: March. Contains: 2 points. Temperature of Reggane, Tallinn in March."},parents:["1"],children:["21","22"],priority:3},6:{id:"6",displayName:"April",description:"Month: April. Contains: 2 points. Temperature of Reggane, Tallinn in April.",descriptionTokens:{label:"April",shortDescription:"Month: April. Contains: 2 points.",longDescription:"Month: April. Contains: 2 points. Temperature of Reggane, Tallinn in April."},parents:["1"],children:["23","24"],priority:3},7:{id:"7",displayName:"May",description:"Month: May. Contains: 2 points. Temperature of Reggane, Tallinn in May.",descriptionTokens:{label:"May",shortDescription:"Month: May. Contains: 2 points.",longDescription:"Month: May. Contains: 2 points. Temperature of Reggane, Tallinn in May."},parents:["1"],children:["25","26"],priority:3},8:{id:"8",displayName:"June",description:"Month: June. Contains: 2 points. Temperature of Reggane, Tallinn in June.",descriptionTokens:{label:"June",shortDescription:"Month: June. Contains: 2 points.",longDescription:"Month: June. Contains: 2 points. Temperature of Reggane, Tallinn in June."},parents:["1"],children:["27","28"],priority:3},9:{id:"9",displayName:"July",description:"Month: July. Contains: 2 points. Temperature of Reggane, Tallinn in July.",descriptionTokens:{label:"July",shortDescription:"Month: July. Contains: 2 points.",longDescription:"Month: July. Contains: 2 points. Temperature of Reggane, Tallinn in July."},parents:["1"],children:["29","30"],priority:3},10:{id:"10",displayName:"August",description:"Month: August. Contains: 2 points. Temperature of Reggane, Tallinn in August.",descriptionTokens:{label:"August",shortDescription:"Month: August. Contains: 2 points.",longDescription:"Month: August. Contains: 2 points. Temperature of Reggane, Tallinn in August."},parents:["1"],children:["31","32"],priority:3},11:{id:"11",displayName:"September",description:"Month: September. Contains: 2 points. Temperature of Reggane, Tallinn in September.",descriptionTokens:{label:"September",shortDescription:"Month: September. Contains: 2 points.",longDescription:"Month: September. Contains: 2 points. Temperature of Reggane, Tallinn in September."},parents:["1"],children:["33","34"],priority:3},12:{id:"12",displayName:"October",description:"Month: October. Contains: 2 points. Temperature of Reggane, Tallinn in October.",descriptionTokens:{label:"October",shortDescription:"Month: October. Contains: 2 points.",longDescription:"Month: October. Contains: 2 points. Temperature of Reggane, Tallinn in October."},parents:["1"],children:["35","36"],priority:3},13:{id:"13",displayName:"November",description:"Month: November. Contains: 2 points. Temperature of Reggane, Tallinn in November.",descriptionTokens:{label:"November",shortDescription:"Month: November. Contains: 2 points.",longDescription:"Month: November. Contains: 2 points. Temperature of Reggane, Tallinn in November."},parents:["1"],children:["37","38"],priority:3},14:{id:"14",displayName:"December",description:"Month: December. Contains: 2 points. Temperature of Reggane, Tallinn in December.",descriptionTokens:{label:"December",shortDescription:"Month: December. Contains: 2 points.",longDescription:"Month: December. Contains: 2 points. Temperature of Reggane, Tallinn in December."},parents:["1"],children:["39","40"],priority:3},15:{id:"15",displayName:"Reggane",description:"City: Reggane. Contains: 12 temperature points. Monthly temperature data for Reggane.",descriptionTokens:{label:"Reggane",shortDescription:"Contains: 12 temperature points.",longDescription:"City: Reggane. Contains: 12 temperature points. Monthly temperature data for Reggane."},parents:["2"],children:["17","19","21","23","25","27","29","31","33","35","37","39"],priority:3},16:{id:"16",displayName:"Tallinn",description:"City: Tallinn. Contains: 12 temperature points. Monthly temperature data for Tallinn.",descriptionTokens:{label:"Tallinn",shortDescription:"Contains: 12 temperature points.",longDescription:"City: Tallinn. Contains: 12 temperature points. Monthly temperature data for Tallinn."},parents:["2"],children:["18","20","22","24","26","28","30","32","34","36","38","40"],priority:3},17:{id:"17",displayName:"January, Reggane, 16 Celsius",description:"Month: January. City: Reggane. Average temperature: 16 Celsius.",descriptionTokens:{label:"16 Celsius",shortDescription:"Month: January. City: Reggane. Average temperature: 16 Celsius.",longDescription:"Month: January. City: Reggane. Average temperature: 16 Celsius."},parents:["3","15"],children:[],priority:4},18:{id:"18",displayName:"January, Tallinn, -2.9 Celsius",description:"Month: January. City: Tallinn. Average temperature: -2.9 Celsius.",descriptionTokens:{label:"-2.9 Celsius",shortDescription:"Month: January. City: Tallinn. Average temperature: -2.9 Celsius.",longDescription:"Month: January. City: Tallinn. Average temperature: -2.9 Celsius."},parents:["3","16"],children:[],priority:4},19:{id:"19",displayName:"February, Reggane, 18.2 Celsius",description:"Month: February. City: Reggane. Average temperature: 18.2 Celsius.",descriptionTokens:{label:"18.2 Celsius",shortDescription:"Month: February. City: Reggane. Average temperature: 18.2 Celsius.",longDescription:"Month: February. City: Reggane. Average temperature: 18.2 Celsius."},parents:["4","15"],children:[],priority:4},20:{id:"20",displayName:"February, Tallinn, -3.6 Celsius",description:"Month: February. City: Tallinn. Average temperature: -3.6 Celsius.",descriptionTokens:{label:"-3.6 Celsius",shortDescription:"Month: February. City: Tallinn. Average temperature: -3.6 Celsius.",longDescription:"Month: February. City: Tallinn. Average temperature: -3.6 Celsius."},parents:["4","16"],children:[],priority:4},21:{id:"21",displayName:"March, Reggane, 23.1 Celsius",description:"Month: March. City: Reggane. Average temperature: 23.1 Celsius.",descriptionTokens:{label:"23.1 Celsius",shortDescription:"Month: March. City: Reggane. Average temperature: 23.1 Celsius.",longDescription:"Month: March. City: Reggane. Average temperature: 23.1 Celsius."},parents:["5","15"],children:[],priority:4},22:{id:"22",displayName:"March, Tallinn, -0.6 Celsius",description:"Month: March. City: Tallinn. Average temperature: -0.6 Celsius.",descriptionTokens:{label:"-0.6 Celsius",shortDescription:"Month: March. City: Tallinn. Average temperature: -0.6 Celsius.",longDescription:"Month: March. City: Tallinn. Average temperature: -0.6 Celsius."},parents:["5","16"],children:[],priority:4},23:{id:"23",displayName:"April, Reggane, 27.9 Celsius",description:"Month: April. City: Reggane. Average temperature: 27.9 Celsius.",descriptionTokens:{label:"27.9 Celsius",shortDescription:"Month: April. City: Reggane. Average temperature: 27.9 Celsius.",longDescription:"Month: April. City: Reggane. Average temperature: 27.9 Celsius."},parents:["6","15"],children:[],priority:4},24:{id:"24",displayName:"April, Tallinn, 4.8 Celsius",description:"Month: April. City: Tallinn. Average temperature: 4.8 Celsius.",descriptionTokens:{label:"4.8 Celsius",shortDescription:"Month: April. City: Tallinn. Average temperature: 4.8 Celsius.",longDescription:"Month: April. City: Tallinn. Average temperature: 4.8 Celsius."},parents:["6","16"],children:[],priority:4},25:{id:"25",displayName:"May, Reggane, 32.2 Celsius",description:"Month: May. City: Reggane. Average temperature: 32.2 Celsius.",descriptionTokens:{label:"32.2 Celsius",shortDescription:"Month: May. City: Reggane. Average temperature: 32.2 Celsius.",longDescription:"Month: May. City: Reggane. Average temperature: 32.2 Celsius."},parents:["7","15"],children:[],priority:4},26:{id:"26",displayName:"May, Tallinn, 10.2 Celsius",description:"Month: May. City: Tallinn. Average temperature: 10.2 Celsius.",descriptionTokens:{label:"10.2 Celsius",shortDescription:"Month: May. City: Tallinn. Average temperature: 10.2 Celsius.",longDescription:"Month: May. City: Tallinn. Average temperature: 10.2 Celsius."},parents:["7","16"],children:[],priority:4},27:{id:"27",displayName:"June, Reggane, 36.4 Celsius",description:"Month: June. City: Reggane. Average temperature: 36.4 Celsius.",descriptionTokens:{label:"36.4 Celsius",shortDescription:"Month: June. City: Reggane. Average temperature: 36.4 Celsius.",longDescription:"Month: June. City: Reggane. Average temperature: 36.4 Celsius."},parents:["8","15"],children:[],priority:4},28:{id:"28",displayName:"June, Tallinn, 14.5 Celsius",description:"Month: June. City: Tallinn. Average temperature: 14.5 Celsius.",descriptionTokens:{label:"14.5 Celsius",shortDescription:"Month: June. City: Tallinn. Average temperature: 14.5 Celsius.",longDescription:"Month: June. City: Tallinn. Average temperature: 14.5 Celsius."},parents:["8","16"],children:[],priority:4},29:{id:"29",displayName:"July, Reggane, 39.8 Celsius",description:"Month: July. City: Reggane. Average temperature: 39.8 Celsius.",descriptionTokens:{label:"39.8 Celsius",shortDescription:"Month: July. City: Reggane. Average temperature: 39.8 Celsius.",longDescription:"Month: July. City: Reggane. Average temperature: 39.8 Celsius."},parents:["9","15"],children:[],priority:4},30:{id:"30",displayName:"July, Tallinn, 17.6 Celsius",description:"Month: July. City: Tallinn. Average temperature: 17.6 Celsius.",descriptionTokens:{label:"17.6 Celsius",shortDescription:"Month: July. City: Tallinn. Average temperature: 17.6 Celsius.",longDescription:"Month: July. City: Tallinn. Average temperature: 17.6 Celsius."},parents:["9","16"],children:[],priority:4},31:{id:"31",displayName:"August, Reggane, 38.4 Celsius",description:"Month: August. City: Reggane. Average temperature: 38.4 Celsius.",descriptionTokens:{label:"38.4 Celsius",shortDescription:"Month: August. City: Reggane. Average temperature: 38.4 Celsius.",longDescription:"Month: August. City: Reggane. Average temperature: 38.4 Celsius."},parents:["10","15"],children:[],priority:4},32:{id:"32",displayName:"August, Tallinn, 16.5 Celsius",description:"Month: August. City: Tallinn. Average temperature: 16.5 Celsius.",descriptionTokens:{label:"16.5 Celsius",shortDescription:"Month: August. City: Tallinn. Average temperature: 16.5 Celsius.",longDescription:"Month: August. City: Tallinn. Average temperature: 16.5 Celsius."},parents:["10","16"],children:[],priority:4},33:{id:"33",displayName:"September, Reggane, 35.5 Celsius",description:"Month: September. City: Reggane. Average temperature: 35.5 Celsius.",descriptionTokens:{label:"35.5 Celsius",shortDescription:"Month: September. City: Reggane. Average temperature: 35.5 Celsius.",longDescription:"Month: September. City: Reggane. Average temperature: 35.5 Celsius."},parents:["11","15"],children:[],priority:4},34:{id:"34",displayName:"September, Tallinn, 12 Celsius",description:"Month: September. City: Tallinn. Average temperature: 12 Celsius.",descriptionTokens:{label:"12 Celsius",shortDescription:"Month: September. City: Tallinn. Average temperature: 12 Celsius.",longDescription:"Month: September. City: Tallinn. Average temperature: 12 Celsius."},parents:["11","16"],children:[],priority:4},35:{id:"35",displayName:"October, Reggane, 29.2 Celsius",description:"Month: October. City: Reggane. Average temperature: 29.2 Celsius.",descriptionTokens:{label:"29.2 Celsius",shortDescription:"Month: October. City: Reggane. Average temperature: 29.2 Celsius.",longDescription:"Month: October. City: Reggane. Average temperature: 29.2 Celsius."},parents:["12","15"],children:[],priority:4},36:{id:"36",displayName:"October, Tallinn, 6.5 Celsius",description:"Month: October. City: Tallinn. Average temperature: 6.5 Celsius.",descriptionTokens:{label:"6.5 Celsius",shortDescription:"Month: October. City: Tallinn. Average temperature: 6.5 Celsius.",longDescription:"Month: October. City: Tallinn. Average temperature: 6.5 Celsius."},parents:["12","16"],children:[],priority:4},37:{id:"37",displayName:"November, Reggane, 22 Celsius",description:"Month: November. City: Reggane. Average temperature: 22 Celsius.",descriptionTokens:{label:"22 Celsius",shortDescription:"Month: November. City: Reggane. Average temperature: 22 Celsius.",longDescription:"Month: November. City: Reggane. Average temperature: 22 Celsius."},parents:["13","15"],children:[],priority:4},38:{id:"38",displayName:"November, Tallinn, 2 Celsius",description:"Month: November. City: Tallinn. Average temperature: 2 Celsius.",descriptionTokens:{label:"2 Celsius",shortDescription:"Month: November. City: Tallinn. Average temperature: 2 Celsius.",longDescription:"Month: November. City: Tallinn. Average temperature: 2 Celsius."},parents:["13","16"],children:[],priority:4},39:{id:"39",displayName:"December, Reggane, 17.8 Celsius",description:"Month: December. City: Reggane. Average temperature: 17.8 Celsius.",descriptionTokens:{label:"17.8 Celsius",shortDescription:"Month: December. City: Reggane. Average temperature: 17.8 Celsius.",longDescription:"Month: December. City: Reggane. Average temperature: 17.8 Celsius."},parents:["14","15"],children:[],priority:4},40:{id:"40",displayName:"December, Tallinn, -0.9 Celsius",description:"Month: December. City: Tallinn. Average temperature: -0.9 Celsius.",descriptionTokens:{label:"-0.9 Celsius",shortDescription:"Month: December. City: Tallinn. Average temperature: -0.9 Celsius.",longDescription:"Month: December. City: Tallinn. Average temperature: -0.9 Celsius."},parents:["14","16"],children:[],priority:4},41:{id:"41",displayName:"Y-axis",description:"Y-axis. Label: Temperature in Celsius. Values range from -10 to 50 on a numerical scale.",descriptionTokens:{label:"Y-axis",shortDescription:"Y-axis. Temperature in Celsius",longDescription:"Y-axis. Label: Temperature in Celsius. Values range from -10 to 50 on a numerical scale."},parents:["0"],children:[],priority:2}},Ie=()=>E(Je,{nodeGraph:Le,showHypergraph:!1}),Pe=document.getElementById("root"),Be=window.location.pathname;Be.includes("benthic");Me(()=>E(Ie,{}),Pe);
