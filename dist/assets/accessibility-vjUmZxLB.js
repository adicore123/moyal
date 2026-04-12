const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./aos-DvB2Xm2x.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const Z="modulepreload",K=function(e,t){return new URL(e,t).href},T={},R=function(t,a,o){let n=Promise.resolve();if(a&&a.length>0){const c=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),g=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));n=Promise.allSettled(a.map(f=>{if(f=K(f,o),f in T)return;T[f]=!0;const m=f.endsWith(".css"),v=m?'[rel="stylesheet"]':"";if(!!o)for(let d=c.length-1;d>=0;d--){const s=c[d];if(s.href===f&&(!m||s.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${v}`))return;const h=document.createElement("link");if(h.rel=m?"stylesheet":Z,m||(h.as="script"),h.crossOrigin="",h.href=f,g&&h.setAttribute("nonce",g),document.head.appendChild(h),m)return new Promise((d,s)=>{h.addEventListener("load",d),h.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return n.then(c=>{for(const l of c||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=(e,t,a=[])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(n=>{o.setAttribute(n,String(t[n]))}),a.length&&a.forEach(n=>{const i=V(...n);o.appendChild(i)}),o};var W=([e,t,a])=>V(e,t,a);/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=e=>Array.from(e.attributes).reduce((t,a)=>(t[a.name]=a.value,t),{}),Q=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",ee=e=>e.flatMap(Q).map(a=>a.trim()).filter(Boolean).filter((a,o,n)=>n.indexOf(a)===o).join(" "),te=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,a,o)=>a.toUpperCase()+o.toLowerCase()),q=(e,{nameAttr:t,icons:a,attrs:o})=>{var d;const n=e.getAttribute(t);if(n==null)return;const i=te(n),c=a[i];if(!c)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const l=J(e),[g,f,m]=c,v={...f,"data-lucide":n,...o,...l},b=ee(["lucide",`lucide-${n}`,l,o]);b&&Object.assign(v,{class:b});const h=W([g,v,m]);return(d=e.parentNode)==null?void 0:d.replaceChild(h,e)};/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=["svg",r,[["circle",{cx:"16",cy:"4",r:"1"}],["path",{d:"m18 19 1-7-6 1"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=["svg",r,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=["svg",r,[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=["svg",r,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=["svg",r,[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M12 13h4"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1"}],["path",{d:"M12 8h8"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2"}],["circle",{cx:"16",cy:"13",r:".5"}],["circle",{cx:"18",cy:"3",r:".5"}],["circle",{cx:"20",cy:"21",r:".5"}],["circle",{cx:"20",cy:"8",r:".5"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=["svg",r,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=["svg",r,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=["svg",r,[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"}],["path",{d:"m13 12-3 5h4l-3 5"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=["svg",r,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=["svg",r,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=["svg",r,[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=["svg",r,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"}],["path",{d:"m18 15-2-2"}],["path",{d:"m15 18-2-2"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=["svg",r,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=["svg",r,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=["svg",r,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=["svg",r,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=["svg",r,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=["svg",r,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=["svg",r,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=["svg",r,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=["svg",r,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=["svg",r,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=["svg",r,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=["svg",r,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=({icons:e={},nameAttr:t="data-lucide",attrs:a={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const o=document.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(n=>q(n,{nameAttr:t,icons:e,attrs:a})),t==="data-lucide"){const n=document.querySelectorAll("[icon-name]");n.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(n).forEach(i=>q(i,{nameAttr:"icon-name",icons:e,attrs:a})))}},Ce={Menu:pe,X:Se,ArrowLeft:ae,HeartHandshake:he,Focus:ue,Check:re,GraduationCap:fe,BookOpen:ce,Award:oe,Sparkles:Ae,ShieldAlert:Me,CloudLightning:le,Clock:ie,Users:we,CloudRain:de,BrainCircuit:se,Layers:ge,Target:Le,Shield:Ee,MessageCircle:ye,PhoneCall:ve,MapPin:me,ShieldCheck:be,Accessibility:ne};function $(){ke({icons:Ce})}const H=document.getElementById("year");H&&(H.textContent=String(new Date().getFullYear()));$();const A=window.matchMedia("(prefers-reduced-motion: reduce)");function _(){document.documentElement.classList.toggle("reduce-motion",A.matches)}_();typeof A.addEventListener=="function"?A.addEventListener("change",_):typeof A.addListener=="function"&&A.addListener(_);async function xe(){if(!document.querySelector("[data-aos]"))return;await R(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url);const{default:e}=await R(async()=>{const{default:t}=await import("./aos-CIt2re7Y.js").then(a=>a.a);return{default:t}},[],import.meta.url);e.init({disable:A.matches,duration:700,once:!0,offset:60,easing:"ease-out-cubic"})}xe();const z=document.getElementById("mobile-menu-btn"),F=document.getElementById("mobile-menu"),N=document.getElementById("menu-icon-open"),P=document.getElementById("menu-icon-close");let B=!1;function D(){!F||!N||!P||(B=!B,B?(F.classList.remove("opacity-0","pointer-events-none","-translate-y-4"),N.classList.add("hidden"),P.classList.remove("hidden")):(F.classList.add("opacity-0","pointer-events-none","-translate-y-4"),N.classList.remove("hidden"),P.classList.add("hidden")),$())}z&&z.addEventListener("click",D);document.querySelectorAll(".mobile-link").forEach(e=>{e.addEventListener("click",D)});const L=document.querySelector("nav");L&&window.addEventListener("scroll",()=>{window.scrollY>20?(L.classList.add("shadow-md"),L.style.background="rgba(255, 255, 255, 0.95)"):(L.classList.remove("shadow-md"),L.style.background="rgba(255, 255, 255, 0.5)")});const w="moyal-a11y-",u={fontScale:w+"font-scale",grayscale:w+"grayscale",highContrast:w+"high-contrast",readableFont:w+"readable-font",linksHighlight:w+"links-highlight"},U=.85,G=1.35,k=.05,M=1,O={grayscale:"a11y-grayscale","high-contrast":"a11y-high-contrast","readable-font":"a11y-readable-font","links-highlight":"a11y-links-highlight"};function p(e){return document.getElementById(e)}function Oe(){return document.getElementById("site-content")}function C(e){try{return sessionStorage.getItem(e)==="1"}catch{return!1}}function y(e,t){try{sessionStorage.setItem(e,t?"1":"0")}catch{}}function X(){try{const e=sessionStorage.getItem(u.fontScale);if(e==null)return M;const t=parseFloat(e);return Number.isNaN(t)?M:Math.min(G,Math.max(U,t))}catch{return M}}function Ie(e){try{sessionStorage.setItem(u.fontScale,String(e))}catch{}}function x(e){const t=document.documentElement;if(Math.abs(e-M)<.001){t.style.removeProperty("font-size"),t.removeAttribute("data-a11y-font-scale");try{sessionStorage.removeItem(u.fontScale)}catch{}}else t.style.fontSize=`${e*100}%`,t.setAttribute("data-a11y-font-scale",String(e))}function S(e,t,a){const o=O[t];!o||!e||e.classList.toggle(o,a)}function Y(e){document.querySelectorAll("[data-a11y-toggle]").forEach(function(t){const a=t.getAttribute("data-a11y-toggle"),o=O[a];if(!o||!e)return;const n=e.classList.contains(o);t.setAttribute("aria-pressed",n?"true":"false")})}function Fe(e){x(X()),S(e,"grayscale",C(u.grayscale)),S(e,"high-contrast",C(u.highContrast)),S(e,"readable-font",C(u.readableFont)),S(e,"links-highlight",C(u.linksHighlight)),Y(e)}function Ne(e){try{sessionStorage.removeItem(u.fontScale)}catch{}x(M),Object.keys(O).forEach(function(t){S(e,t,!1)}),y(u.grayscale,!1),y(u.highContrast,!1),y(u.readableFont,!1),y(u.linksHighlight,!1),Y(e)}function j(){const e=Oe(),t=p("a11y-panel"),a=p("a11y-fab"),o=p("a11y-backdrop"),n=p("a11y-close"),i=p("a11y-root");if(!e||!t||!a)return;let c=!1,l=null;function g(d){if(c=d,t.classList.toggle("is-open",c),a.setAttribute("aria-expanded",c?"true":"false"),a.setAttribute("aria-label",c?"סגור תפריט נגישות":"פתח תפריט נגישות"),t.setAttribute("aria-hidden",c?"false":"true"),o&&(o.classList.toggle("is-visible",c),o.setAttribute("aria-hidden",c?"false":"true")),c){l=document.activeElement;const s=n||t.querySelector("button");s&&typeof s.focus=="function"&&requestAnimationFrame(function(){s.focus()})}else l&&typeof l.focus=="function"&&(l.focus(),l=null)}a.addEventListener("click",function(){g(!c)}),n&&n.addEventListener("click",function(){g(!1)}),document.addEventListener("keydown",function(d){d.key==="Escape"&&c&&(d.preventDefault(),g(!1))}),document.addEventListener("mousedown",function(d){if(!c)return;const s=d.target;i&&i.contains(s)||t.contains(s)||a.contains(s)||g(!1)});function f(d){let s=X();s=Math.round((s+d)/k)*k,s=Math.min(G,Math.max(U,s)),x(s),Math.abs(s-M)>=.001&&Ie(s)}const m=p("a11y-font-down"),v=p("a11y-font-up"),b=p("a11y-font-reset");m&&m.addEventListener("click",function(){f(-k)}),v&&v.addEventListener("click",function(){f(k)}),b&&b.addEventListener("click",function(){try{sessionStorage.removeItem(u.fontScale)}catch{}x(M)}),document.querySelectorAll("[data-a11y-toggle]").forEach(function(d){d.addEventListener("click",function(){const s=d.getAttribute("data-a11y-toggle"),I=O[s];if(!I||!e)return;const E=!e.classList.contains(I);e.classList.toggle(I,E),s==="grayscale"&&y(u.grayscale,E),s==="high-contrast"&&y(u.highContrast,E),s==="readable-font"&&y(u.readableFont,E),s==="links-highlight"&&y(u.linksHighlight,E),d.setAttribute("aria-pressed",E?"true":"false")})});const h=p("a11y-reset-all");h&&h.addEventListener("click",function(){Ne(e),g(!1)}),Fe(e)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",j):j();
