!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.cheghost=t():e.cheghost=t()}(self,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>l});let o="cheghost-checkbox";function n(e){let t=e.parentNode;Array.prototype.slice.call(t.childNodes).filter((e=>"hidden"==e.type))[0].value=e.checked?"1":"0"}function l(e){!function(e){let t=document.querySelectorAll(e);for(let e=0;e<t.length;e++){let n=t[e];n.className=o;let l=n.name,r=n.id,d=document.querySelector(`[for=${r}]`),c=document.createElement("div");c.className="cheghost";let a=document.createElement("input");a.type="hidden",a.name=l,a.className="cheghost-hidden",n.removeAttribute("name"),n.parentNode.insertBefore(c,null),c.appendChild(n),c.appendChild(a),d&&c.appendChild(d)}}(e),function(){let e=document.getElementsByClassName(o);for(let t=0;t<e.length;t++)n(e[t]);for(let t=0;t<e.length;t++){let o=e[t];o.addEventListener("click",(()=>{n(o)}))}}()}return t})()));