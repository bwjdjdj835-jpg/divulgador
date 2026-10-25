document.getElementById('y').textContent=new Date().getFullYear();
const L=window.ABELHA_LINKS||{};
document.querySelectorAll('[data-produto]').forEach(a=>{
  const u=L[a.dataset.produto];
  if(u){a.href=u;a.target='_blank';a.rel='noopener';a.classList.remove('soon');if(a.textContent==='Em breve')a.textContent='Saber mais';}
  else a.addEventListener('click',e=>{e.preventDefault();a.textContent='Em breve';});
});
