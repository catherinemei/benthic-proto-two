(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const ce=(e,t)=>e===t,pe=Symbol("solid-track"),_={equals:ce};let ee=oe;const B=1,j=2,te={owned:null,cleanups:null,context:null,owner:null};var T=null;let q=null,de=null,C=null,b=null,P=null,W=0;function I(e,t){const n=C,i=T,r=e.length===0,o=t===void 0?i:t,a=r?te:{owned:null,cleanups:null,context:o?o.context:null,owner:o},l=r?e:()=>e(()=>S(()=>R(a)));T=a,C=null;try{return F(l,!0)}finally{C=n,T=i}}function O(e,t){t=t?Object.assign({},_,t):_;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),re(n,r));return[ie.bind(n),i]}function N(e,t,n){const i=Q(e,t,!1,B);U(i)}function ue(e,t,n){ee=me;const i=Q(e,t,!1,B);(!n||!n.render)&&(i.user=!0),P?P.push(i):U(i)}function k(e,t,n){n=n?Object.assign({},_,n):_;const i=Q(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,U(i),ie.bind(i)}function S(e){if(C===null)return e();const t=C;C=null;try{return e()}finally{C=t}}function fe(e){ue(()=>S(e))}function ne(e){return T===null||(T.cleanups===null?T.cleanups=[e]:T.cleanups.push(e)),e}function ie(){if(this.sources&&this.state)if(this.state===B)U(this);else{const e=b;b=null,F(()=>H(this),!1),b=e}if(C){const e=this.observers?this.observers.length:0;C.sources?(C.sources.push(this),C.sourceSlots.push(e)):(C.sources=[this],C.sourceSlots=[e]),this.observers?(this.observers.push(C),this.observerSlots.push(C.sources.length-1)):(this.observers=[C],this.observerSlots=[C.sources.length-1])}return this.value}function re(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&F(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r],a=q&&q.running;a&&q.disposed.has(o),(a?!o.tState:!o.state)&&(o.pure?b.push(o):P.push(o),o.observers&&se(o)),a||(o.state=B)}if(b.length>1e6)throw b=[],new Error},!1)),t}function U(e){if(!e.fn)return;R(e);const t=W;he(e,e.value,t)}function he(e,t,n){let i;const r=T,o=C;C=T=e;try{i=e.fn(t)}catch(a){return e.pure&&(e.state=B,e.owned&&e.owned.forEach(R),e.owned=null),e.updatedAt=n+1,le(a)}finally{C=o,T=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?re(e,i):e.value=i,e.updatedAt=n)}function Q(e,t,n,i=B,r){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:T,context:T?T.context:null,pure:n};return T===null||T!==te&&(T.owned?T.owned.push(o):T.owned=[o]),o}function G(e){if(e.state===0)return;if(e.state===j)return H(e);if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<W);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===B)U(e);else if(e.state===j){const i=b;b=null,F(()=>H(e,t[0]),!1),b=i}}function F(e,t){if(b)return e();let n=!1;t||(b=[]),P?n=!0:P=[],W++;try{const i=e();return ye(n),i}catch(i){n||(P=null),b=null,le(i)}}function ye(e){if(b&&(oe(b),b=null),e)return;const t=P;P=null,t.length&&F(()=>ee(t),!1)}function oe(e){for(let t=0;t<e.length;t++)G(e[t])}function me(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:G(i)}for(t=0;t<n;t++)G(e[t])}function H(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=i.state;r===B?i!==t&&(!i.updatedAt||i.updatedAt<W)&&G(i):r===j&&H(i,t)}}}function se(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=j,n.pure?b.push(n):P.push(n),n.observers&&se(n))}}function R(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),a=n.observerSlots.pop();i<r.length&&(o.sourceSlots[a]=i,r[i]=o,n.observerSlots[i]=a)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)R(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ge(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function le(e,t=T){throw ge(e)}const Ce=Symbol("fallback");function J(e){for(let t=0;t<e.length;t++)e[t]()}function Te(e,t,n={}){let i=[],r=[],o=[],a=0,l=t.length>1?[]:null;return ne(()=>J(o)),()=>{let f=e()||[],h,s;return f[pe],S(()=>{let c=f.length,u,d,g,y,w,m,L,D,x;if(c===0)a!==0&&(J(o),o=[],i=[],r=[],a=0,l&&(l=[])),n.fallback&&(i=[Ce],r[0]=I(ae=>(o[0]=ae,n.fallback())),a=1);else if(a===0){for(r=new Array(c),s=0;s<c;s++)i[s]=f[s],r[s]=I(p);a=c}else{for(g=new Array(c),y=new Array(c),l&&(w=new Array(c)),m=0,L=Math.min(a,c);m<L&&i[m]===f[m];m++);for(L=a-1,D=c-1;L>=m&&D>=m&&i[L]===f[D];L--,D--)g[D]=r[L],y[D]=o[L],l&&(w[D]=l[L]);for(u=new Map,d=new Array(D+1),s=D;s>=m;s--)x=f[s],h=u.get(x),d[s]=h===void 0?-1:h,u.set(x,s);for(h=m;h<=L;h++)x=i[h],s=u.get(x),s!==void 0&&s!==-1?(g[s]=r[h],y[s]=o[h],l&&(w[s]=l[h]),s=d[s],u.set(x,s)):o[h]();for(s=m;s<c;s++)s in g?(r[s]=g[s],o[s]=y[s],l&&(l[s]=w[s],l[s](s))):r[s]=I(p);r=r.slice(0,a=c),i=f.slice(0)}return r});function p(c){if(o[s]=c,l){const[u,d]=O(s);return l[s]=d,t(f[s],u)}return t(f[s])}}}function $(e,t){return S(()=>e(t||{}))}const be=e=>`Stale read from <${e}>.`;function Y(e){const t="fallback"in e&&{fallback:()=>e.fallback};return k(Te(()=>e.each,e.children,t||void 0))}function we(e){const t=e.keyed,n=k(()=>e.when,void 0,{equals:(i,r)=>t?i===r:!i==!r});return k(()=>{const i=n();if(i){const r=e.children;return typeof r=="function"&&r.length>0?S(()=>r(t?i:()=>{if(!S(n))throw be("Show");return e.when})):r}return e.fallback},void 0,void 0)}function Ae(e,t,n){let i=n.length,r=t.length,o=i,a=0,l=0,f=t[r-1].nextSibling,h=null;for(;a<r||l<o;){if(t[a]===n[l]){a++,l++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===a){const s=o<i?l?n[l-1].nextSibling:n[o-l]:f;for(;l<o;)e.insertBefore(n[l++],s)}else if(o===l)for(;a<r;)(!h||!h.has(t[a]))&&t[a].remove(),a++;else if(t[a]===n[o-1]&&n[l]===t[r-1]){const s=t[--r].nextSibling;e.insertBefore(n[l++],t[a++].nextSibling),e.insertBefore(n[--o],s),t[r]=n[o]}else{if(!h){h=new Map;let p=l;for(;p<o;)h.set(n[p],p++)}const s=h.get(t[a]);if(s!=null)if(l<s&&s<o){let p=a,c=1,u;for(;++p<r&&p<o&&!((u=h.get(t[p]))==null||u!==s+c);)c++;if(c>s-l){const d=t[a];for(;l<s;)e.insertBefore(n[l++],d)}else e.replaceChild(n[l++],t[a++])}else a++;else t[a++].remove()}}}const Z="_$DX_DELEGATE";function Le(e,t,n,i={}){let r;return I(o=>{r=o,t===document?e():v(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function M(e,t,n){let i;const r=()=>{const a=document.createElement("template");return a.innerHTML=e,n?a.content.firstChild.firstChild:a.content.firstChild},o=t?()=>S(()=>document.importNode(i||(i=r()),!0)):()=>(i||(i=r())).cloneNode(!0);return o.cloneNode=o,o}function De(e,t=window.document){const n=t[Z]||(t[Z]=new Set);for(let i=0,r=e.length;i<r;i++){const o=e[i];n.has(o)||(n.add(o),t.addEventListener(o,Ne))}}function A(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function v(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return K(e,t,i,n);N(r=>K(e,t(),r,n),i)}function Ne(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const i=n[t];if(i&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?i.call(n,r,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function K(e,t,n,i,r){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,a=i!==void 0;if(e=a&&n[0]&&n[0].parentNode||e,o==="string"||o==="number")if(o==="number"&&(t=t.toString()),a){let l=n[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=E(e,n,i,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||o==="boolean")n=E(e,n,i);else{if(o==="function")return N(()=>{let l=t();for(;typeof l=="function";)l=l();n=K(e,l,n,i)}),()=>n;if(Array.isArray(t)){const l=[],f=n&&Array.isArray(n);if(X(l,t,n,r))return N(()=>n=K(e,l,n,i,!0)),()=>n;if(l.length===0){if(n=E(e,n,i),a)return n}else f?n.length===0?z(e,l,i):Ae(e,n,l):(n&&E(e),z(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(a)return n=E(e,n,i,t);E(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function X(e,t,n,i){let r=!1;for(let o=0,a=t.length;o<a;o++){let l=t[o],f=n&&n[o],h;if(!(l==null||l===!0||l===!1))if((h=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))r=X(e,l,f)||r;else if(h==="function")if(i){for(;typeof l=="function";)l=l();r=X(e,Array.isArray(l)?l:[l],Array.isArray(f)?f:[f])||r}else e.push(l),r=!0;else{const s=String(l);f&&f.nodeType===3&&f.data===s?e.push(f):e.push(document.createTextNode(s))}}return r}function z(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function E(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let o=!1;for(let a=t.length-1;a>=0;a--){const l=t[a];if(r!==l){const f=l.parentNode===e;!o&&!a?f?e.replaceChild(r,l):e.insertBefore(r,n):f&&l.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}function ke(e,t){const n=new Set,i=new Set;function r(o){if(n.has(o))return;n.add(o),i.add(o);const a=t[o];a&&a.siblings.forEach(l=>{n.has(l)||r(l)})}return r(e),i}function Pe(e){const t={};for(const n in e){const i=e[n],r=new Set;i.parents.forEach(o=>{for(const a in e){const l=e[a];a!==n&&l.parents.includes(o)&&r.add(a)}}),t[n]={...i,siblings:Array.from(r)}}return t}var ve=M("<div><button id=hidden-focus aria-hidden=true>Pressing Undo"),Se=M("<div><div id=home tabindex=0></div><div id=parents-group tabindex=0><span>Parents </span></div><div id=children-group tabindex=0><span>Children "),Be=M('<span aria-label="There are no adjacent nodes"id=info-none> None'),V=M("<button><span>"),$e=M('<span aria-label="There are no parent nodes"> None'),xe=M('<span aria-label="There are no children nodes"> None');function Ee(e){const[t,n]=O(e.nodeGraph[0].id),[i,r]=O(Pe(e.nodeGraph)),[o,a]=O(["0"]),l=k(()=>t()!==null?i()[t()]:i()[0]),f=(s,p)=>{a(c=>[...c,p]),n(p),setTimeout(()=>{const c=document.getElementById(`info-${p}`);c&&(c.hasAttribute("tabindex")||c.setAttribute("tabindex","0"),c.focus())},0)},h=s=>{if(s.key==="ArrowUp"&&s.shiftKey){const p=document.getElementById("parents-group");p&&p.focus(),s.preventDefault()}else if(s.key==="ArrowDown"&&s.shiftKey){const p=l().children[0];if(p){n(p),a(u=>[...u,p]);const c=document.getElementById(`info-${p}`);c&&c.focus()}else{const c=document.getElementById("children-group");c&&c.focus()}s.preventDefault()}else if(s.key==="h"){const p=document.getElementById("home"),c=o()[o().length-1],u=document.getElementById(`info-${c}`);u?u.focus():p?.focus()}else if(s.key==="Backspace")a(p=>{const c=[...p];if(c.length<=1)return c;c.pop();const u=c[c.length-1];if(u){const d=document.getElementById("hidden-focus");d&&d.focus(),n(u),setTimeout(()=>{const g=document.getElementById(`info-${u}`);g&&g.focus()},700)}return c});else if(s.key==="ArrowLeft"||s.key==="ArrowRight"||s.key==="ArrowUp"||s.key==="ArrowDown"){const p=document.activeElement,c=p?.id;if(c.startsWith("info-")||c==="home"){const u=Array.from(document.querySelectorAll("#home button")),d=u.indexOf(p);let g=d;(s.key==="ArrowLeft"||s.key==="ArrowUp")&&d>0?g=d-1:(s.key==="ArrowRight"||s.key==="ArrowDown")&&d<u.length-1&&(g=d+1);const y=u[g]?.id.split("info-")[1];y&&(n(y),a(w=>{const m=[...w];return m.pop(),m.push(y),m})),u[g]?.focus(),s.preventDefault()}else if(c.startsWith("parents")){const u=Array.from(document.querySelectorAll("#parents-group button")),d=u.indexOf(p);(s.key==="ArrowLeft"||s.key==="ArrowUp")&&d>0?(u[d-1].focus(),s.preventDefault()):((s.key==="ArrowRight"||s.key==="ArrowDown")&&d<u.length-1&&u[d+1].focus(),s.preventDefault())}}else if(s.key==="Enter"){const p=document.activeElement;p&&p.tagName==="BUTTON"&&(p.click(),s.preventDefault())}};return fe(()=>{window.addEventListener("keydown",h)}),ne(()=>{window.removeEventListener("keydown",h)}),(()=>{var s=ve(),p=s.firstChild;return p.style.setProperty("position","absolute"),p.style.setProperty("width","1px"),p.style.setProperty("height","1px"),p.style.setProperty("margin","-1px"),p.style.setProperty("padding","0"),p.style.setProperty("border","0"),p.style.setProperty("clip","rect(0, 0, 0, 0)"),p.style.setProperty("overflow","hidden"),p.style.setProperty("white-space","nowrap"),v(s,$(we,{get when(){return t()},get children(){return $(Me,{get node(){return l()},get nodeGraph(){return i()},onNodeClick:f})}}),null),s})()}function Me(e){const t=k(()=>e.node.parents.map(a=>e.nodeGraph[a]).sort((a,l)=>a.priority-l.priority)),n=k(()=>t().map(a=>a.descriptionTokens?.label).join(", ")),i=k(()=>e.node.children.map(a=>e.nodeGraph[a]).sort((a,l)=>a.priority-l.priority)),r=k(()=>i().map(a=>a.descriptionTokens?.label).join(", ")),o=k(()=>{const a=ke(e.node.id,e.nodeGraph);return Array.from(a).map(f=>e.nodeGraph[f]).sort((f,h)=>{const s=f.priority-h.priority;return s!==0?s:f.id.localeCompare(h.id)})});return(()=>{var a=Se(),l=a.firstChild,f=l.nextSibling,h=f.firstChild,s=f.nextSibling,p=s.firstChild;return a.style.setProperty("padding","20px"),v(l,$(Y,{get each(){return o()},get fallback(){return(()=>{var c=Be();return c.style.setProperty("color","grey"),c})()},children:(c,u)=>(()=>{var d=V(),g=d.firstChild;return d.$$click=()=>e.onNodeClick(e.node.id,c.id),d.style.setProperty("margin-right","5px"),A(g,"aria-hidden",!0),v(g,()=>c.displayName),N(y=>{var w=`Node ${u()+1} of ${o().length}; ${c.displayName}; ${c.descriptionTokens?.longDescription}`,m=`info-${c.id}`;return w!==y.e&&A(d,"aria-label",y.e=w),m!==y.t&&A(d,"id",y.t=m),y},{e:void 0,t:void 0}),d})()})),f.style.setProperty("margin-top","10px"),h.style.setProperty("font-weight","bold"),A(h,"aria-hidden",!0),v(f,$(Y,{get each(){return t()},get fallback(){return(()=>{var c=$e();return c.style.setProperty("color","grey"),N(()=>A(c,"id",`parents-${e.node.id}-0`)),c})()},children:(c,u)=>(()=>{var d=V(),g=d.firstChild;return d.$$click=()=>e.onNodeClick(e.node.id,c.id),d.style.setProperty("margin-right","5px"),A(g,"aria-hidden",!0),v(g,()=>c.displayName),N(y=>{var w=`Parent ${u()+1} of ${t().length}; ${c.displayName}`,m=`parents-${e.node.id}-${u()}`;return w!==y.e&&A(d,"aria-label",y.e=w),m!==y.t&&A(d,"id",y.t=m),y},{e:void 0,t:void 0}),d})()}),null),s.style.setProperty("margin-top","10px"),p.style.setProperty("font-weight","bold"),A(p,"aria-hidden",!0),v(s,$(Y,{get each(){return i()},get fallback(){return(()=>{var c=xe();return c.style.setProperty("color","grey"),N(()=>A(c,"id",`children-${e.node.id}-0`)),c})()},children:(c,u)=>(()=>{var d=V(),g=d.firstChild;return d.$$click=()=>e.onNodeClick(e.node.id,c.id),d.style.setProperty("margin-right","5px"),A(g,"aria-hidden",!0),v(g,()=>c.displayName),N(y=>{var w=`Child ${u()+1} of ${i().length}; ${c.displayName}`,m=`children-${e.node.id}-${u()}`;return w!==y.e&&A(d,"aria-label",y.e=w),m!==y.t&&A(d,"id",y.t=m),y},{e:void 0,t:void 0}),d})()}),null),N(c=>{var u=`${e.node.parents.length} parent relations; ${n()}`,d=`${e.node.children.length} child relations; ${r()}`;return u!==c.e&&A(f,"aria-label",c.e=u),d!==c.t&&A(s,"aria-label",c.t=d),c},{e:void 0,t:void 0}),a})()}De(["click"]);const Ue={0:{id:"0",displayName:"Stacked Bar Chart",description:"Major Trophies for some English teams. Stacked bar chart. With axes team and sum trophies.",descriptionTokens:{label:"Stacked Bar Chart",shortDescription:"Major Trophies for some English teams.",longDescription:"Major Trophies for some English teams. Stacked bar chart. With axes team and sum trophies."},parents:[],children:["1","2","22"],priority:0},1:{id:"1",displayName:"X-axis",description:"X Axis. Arsenal, Chelsea, Liverpool, Manchester United.",descriptionTokens:{label:"X-axis",shortDescription:"Contains 4 teams.",longDescription:"Contains Arsenal, Chelsea, Liverpool, Manchester United."},parents:["0"],children:["3","4","5","6"],priority:1},2:{id:"2",displayName:"Legend",description:"Legend. Contest included: BPL, FA Cup, CL.",descriptionTokens:{label:"Legend",shortDescription:"Contains 3 contests.",longDescription:"Contains BPL, FA Cup, CL."},parents:["0"],children:["7","8","9"],priority:2},3:{id:"3",displayName:"Arsenal",description:"Team: Arsenal. Total trophies: 17. Contains: 3 contests. Bar representing the number of trophies won by Arsenal.",descriptionTokens:{label:"Arsenal",shortDescription:"Contains: 3 contests. Total trophies: 17.",longDescription:"Team: Arsenal. Total trophies: 17. Contains: 3 contests. Bar representing the number of trophies won by Arsenal."},parents:["1"],children:["10","11","12"],priority:2},4:{id:"4",displayName:"Chelsea",description:"Team: Chelsea. Total trophies: 15. Contains: 3 contests. Bar representing the number of trophies won by Chelsea.",descriptionTokens:{label:"Chelsea",shortDescription:"Contains: 3 contests. Total trophies: 15.",longDescription:"Team: Chelsea. Total trophies: 15. Contains: 3 contests. Bar representing the number of trophies won by Chelsea."},parents:["1"],children:["13","14","15"],priority:2},5:{id:"5",displayName:"Liverpool",description:"Team: Liverpool. Total trophies: 15. Contains: 3 contests. Bar representing the number of trophies won by Liverpool",descriptionTokens:{label:"Liverpool",shortDescription:"Contains: 3 contests. Total trophies: 15.",longDescription:"Team: Liverpool. Total trophies: 15. Contains: 3 contests. Bar representing the number of trophies won by Liverpool"},parents:["1"],children:["16","17","18"],priority:2},6:{id:"6",displayName:"Manchester",description:"Team: Manchester United. Total trophies: 28. Contains: 3 contests. Bar representing the number of trophies won by Manchester United.",descriptionTokens:{label:"Manchester United",shortDescription:"Contains: 3 contests. Total trophies: 28.",longDescription:"Team: Manchester United. Total trophies: 28. Contains: 3 contests. Bar representing the number of trophies won by Manchester United."},parents:["1"],children:["19","20","21"],priority:2},7:{id:"7",displayName:"BPL",description:"Contest: BPL. Total trophies: 22. Contains: 4 teams. Legend grouping for the BPL competition.",descriptionTokens:{label:"BPL",shortDescription:"Contains: 4 teams. Total trophies: 22.",longDescription:"Contest: BPL. Total trophies: 22. Contains: 4 teams. Legend grouping for the BPL competition."},parents:["2"],children:["10","13","16","19"],priority:3},8:{id:"8",displayName:"FA Cup",description:"Contest: FA Cup. Total trophies: 42. Contains: 4 teams. Legend grouping for the FA Cup competition.",descriptionTokens:{label:"FA Cup",shortDescription:"Contains: 4 teams. Total trophies: 42.",longDescription:"Contest: FA Cup. Total trophies: 42. Contains: 4 teams. Legend grouping for the FA Cup competition."},parents:["2"],children:["11","14","17","20"],priority:3},9:{id:"9",displayName:"CL",description:"Contest: CL. Total trophies: 11. Contains: 4 teams. Legend grouping for the CL competition.",descriptionTokens:{label:"CL",shortDescription:"Contains: 4 teams. Total trophies: 11.",longDescription:"Contest: CL. Total trophies: 11. Contains: 4 teams. Legend grouping for the CL competition."},parents:["2"],children:["12","15","18","21"],priority:3},10:{id:"10",displayName:"Arsenal BPL",description:"Team: Arsenal. Contest: BPL. Trophies: 3. Data point.",descriptionTokens:{label:"Arsenal BPL",shortDescription:"Trophies: 3.",longDescription:"Team: Arsenal. Contest: BPL. Trophies: 3. Data point."},parents:["3","7"],children:[],priority:4},11:{id:"11",displayName:"Arsenal FA Cup",description:"Team: Arsenal. Contest: FA Cup. Trophies: 14. Data point.",descriptionTokens:{label:"Arsenal FA Cup",shortDescription:"Trophies: 14.",longDescription:"Team: Arsenal. Contest: FA Cup. Trophies: 14. Data point."},parents:["3","8"],children:[],priority:4},12:{id:"12",displayName:"Arsenal CL",description:"Team: Arsenal. Contest: CL. Trophies: 0. Data point.",descriptionTokens:{label:"Arsenal CL",shortDescription:"Trophies: 0.",longDescription:"Team: Arsenal. Contest: CL. Trophies: 0. Data point."},parents:["3","9"],children:[],priority:4},13:{id:"13",displayName:"Chelsea BPL",description:"Team: Chelsea. Contest: BPL. Trophies: 5. Data point.",descriptionTokens:{label:"Chelsea BPL",shortDescription:"Trophies: 5.",longDescription:"Team: Chelsea. Contest: BPL. Trophies: 5. Data point."},parents:["4","7"],children:[],priority:4},14:{id:"14",displayName:"Chelsea FA Cup",description:"Team: Chelsea. Contest: FA Cup. Trophies: 8. Data point.",descriptionTokens:{label:"Chelsea FA Cup",shortDescription:"Trophies: 8.",longDescription:"Team: Chelsea. Contest: FA Cup. Trophies: 8. Data point."},parents:["4","8"],children:[],priority:4},15:{id:"15",displayName:"Chelsea CL",description:"Team: Chelsea. Contest: CL. Trophies: 2. Data point.",descriptionTokens:{label:"Chelsea CL",shortDescription:"Trophies: 2.",longDescription:"Team: Chelsea. Contest: CL. Trophies: 2. Data point."},parents:["4","9"],children:[],priority:4},16:{id:"16",displayName:"Liverpool BPL",description:"Team: Liverpool. Contest: BPL. Trophies: 1. Data point.",descriptionTokens:{label:"Liverpool BPL",shortDescription:"Trophies: 1.",longDescription:"Team: Liverpool. Contest: BPL. Trophies: 1. Data point."},parents:["5","7"],children:[],priority:4},17:{id:"17",displayName:"Liverpool FA Cup",description:"Team: Liverpool. Contest: FA Cup. Trophies: 8. Data point.",descriptionTokens:{label:"Liverpool FA Cup",shortDescription:"Trophies: 8.",longDescription:"Team: Liverpool. Contest: FA Cup. Trophies: 8. Data point."},parents:["5","8"],children:[],priority:4},18:{id:"18",displayName:"Liverpool CL",description:"Team: Liverpool. Contest: CL. Trophies: 6. Data point.",descriptionTokens:{label:"Liverpool CL",shortDescription:"Trophies: 6.",longDescription:"Team: Liverpool. Contest: CL. Trophies: 6. Data point."},parents:["5","9"],children:[],priority:4},19:{id:"19",displayName:"Manchester BPL",description:"Team: Manchester United. Contest: BPL. Trophies: 13. Data point.",descriptionTokens:{label:"Manchester United BPL",shortDescription:"Trophies: 13.",longDescription:"Team: Manchester United. Contest: BPL. Trophies: 13. Data point."},parents:["6","7"],children:[],priority:4},20:{id:"20",displayName:"Manchester FA Cup",description:"Team: Manchester United. Contest: FA Cup. Trophies: 12. Data point.",descriptionTokens:{label:"Manchester United FA Cup",shortDescription:"Trophies: 12.",longDescription:"Team: Manchester United. Contest: FA Cup. Trophies: 12. Data point."},parents:["6","8"],children:[],priority:4},21:{id:"21",displayName:"Manchester United CL",description:"Team: Manchester United. Contest: CL. Trophies: 3. Data point.",descriptionTokens:{label:"Manchester United CL",shortDescription:"Trophies: 3.",longDescription:"Team: Manchester United. Contest: CL. Trophies: 3. Data point."},parents:["6","9"],children:[],priority:4},22:{id:"22",displayName:"Y-axis",description:"Y-axis. Label: count trophies. Values range from 0 to 30 on a numerical scale.",descriptionTokens:{label:"Y-axis",shortDescription:"Y-axis. Count trophies.",longDescription:"Y-axis. Label: count trophies. Values range from 0 to 30 on a numerical scale."},parents:["0"],children:[],priority:2}},Fe=()=>$(Ee,{nodeGraph:Ue,showHypergraph:!1}),Ie=document.getElementById("root"),Oe=window.location.pathname;Oe.includes("benthic");Le(()=>$(Fe,{}),Ie);
