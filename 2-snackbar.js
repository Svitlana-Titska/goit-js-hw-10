import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as m}from"./assets/vendor-njWUcVeN.js";const s=document.querySelector(".form");s.addEventListener("submit",e=>{e.preventDefault();const r=Number(s.elements.delay.value),i=s.elements.state.value;o(r,i).then(t=>{m.success({title:"✅ Success",message:`Fulfilled promise in ${t}ms`})}).catch(t=>{m.error({title:"❌ Error",message:`Rejected promise in ${t}ms`})}),s.reset()});function o(e,r){return new Promise((i,t)=>{setTimeout(()=>{r==="fulfilled"?i(e):t(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map
