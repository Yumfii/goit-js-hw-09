import"./assets/styles-979ec523.js";const t=document.querySelector(".feedback-form"),a=t.elements.email,l=t.elements.message,m="feedback-form-state";function o(){const e={email:a.value.trim(),message:l.value.trim()};localStorage.setItem(m,JSON.stringify(e))}function s(){const e=JSON.parse(localStorage.getItem(m));e&&(a.value=e.email||"",l.value=e.message||"")}s();t.addEventListener("input",()=>{o()});t.addEventListener("submit",e=>{e.preventDefault(),a.value.trim()&&l.value.trim()?(console.log({email:a.value.trim(),message:l.value.trim()}),localStorage.removeItem(m),t.reset()):alert("Please fill out both fields.")});
//# sourceMappingURL=commonHelpers2.js.map
