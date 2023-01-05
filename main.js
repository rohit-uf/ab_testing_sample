const btn = document.querySelector('#btn');

if(btn){
  btn.addEventListener('click', e=>{ alert('Hello World'); });
}

const div = document.querySelector('#container');
let delta = -1;

window.requestAnimationFrame(t=>{
  if(div){
      if(div.style.top == "0%"){
          delta *= -1;
      }
      div.style.top = `${parseInt(div.style.top) + delta}%`;
  }
})
