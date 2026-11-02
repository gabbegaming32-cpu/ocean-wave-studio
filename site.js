(()=>{
 const doc=document.documentElement,body=document.body,header=document.querySelector('.header');
 const btn=document.querySelector('.menu-button'),menu=document.querySelector('.mobile-nav');
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const setMenu=(open)=>{
  if(!btn||!menu)return;
  btn.setAttribute('aria-expanded',String(open));
  btn.setAttribute('aria-label',open?'Close menu':'Open menu');
  menu.classList.toggle('open',open);
  body.classList.toggle('menu-open',open);
  if(open)menu.querySelector('a')?.focus({preventScroll:true});else btn.focus({preventScroll:true});
 };
 btn?.addEventListener('click',()=>setMenu(btn.getAttribute('aria-expanded')!=='true'));
 menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(a.getAttribute('href')===location.pathname.split('/').pop())setMenu(false)}));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&btn?.getAttribute('aria-expanded')==='true')setMenu(false)});
 window.addEventListener('resize',()=>{if(innerWidth>850&&btn?.getAttribute('aria-expanded')==='true')setMenu(false)});
 let ticking=false;
 const update=()=>{header?.classList.toggle('is-scrolled',scrollY>35);let denom=doc.scrollHeight-innerHeight;doc.style.setProperty('--scroll',(denom>0?100*scrollY/denom:0)+'%');ticking=false};
 addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(update);ticking=true}},{passive:true});update();
 if(reduced||!('IntersectionObserver' in window))document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in-view'));
 else{const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}})},{rootMargin:'0px 0px -55px 0px',threshold:.08});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));}
 // Subtle light motion with device pointer. Decorative; no input or user data stored.
 if(!reduced&&matchMedia('(pointer:fine)').matches){const hero=document.querySelector('.hero-backdrop');if(hero){let x=0,y=0,px=0,py=0;window.addEventListener('pointermove',e=>{x=e.clientX/innerWidth-.5;y=e.clientY/innerHeight-.5},{passive:true});const animate=()=>{px+=(x-px)*.03;py+=(y-py)*.03;hero.style.transform=`translate3d(${px*12}px,${py*8}px,0) scale(1.02)`;requestAnimationFrame(animate)};animate()}}
})();
