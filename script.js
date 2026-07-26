// ---------- Nav toggle (mobile) ----------
document.querySelectorAll('.navtoggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelector('.navlinks').classList.toggle('open');
  });
});

// ---------- Scroll reveal ----------
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// ---------- Countdown ----------
// Usage: buildCountdown('#el', new Date('2026-08-20T09:00:00'))
function buildCountdown(selector, targetDate){
  const el = document.querySelector(selector);
  if(!el) return;
  function tick(){
    const now = new Date();
    let diff = targetDate - now;
    if(diff <= 0){
      el.innerHTML = `<div class="box"><div class="n">IT'S</div><div class="l">Draft Day</div></div>`;
      clearInterval(timer);
      return;
    }
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff / (1000*60*60)) % 24);
    const m = Math.floor((diff / (1000*60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    el.innerHTML = `
      <div class="box"><div class="n">${d}</div><div class="l">Days</div></div>
      <div class="box"><div class="n">${String(h).padStart(2,'0')}</div><div class="l">Hours</div></div>
      <div class="box"><div class="n">${String(m).padStart(2,'0')}</div><div class="l">Minutes</div></div>
      <div class="box"><div class="n">${String(s).padStart(2,'0')}</div><div class="l">Seconds</div></div>
    `;
  }
  tick();
  const timer = setInterval(tick, 1000);
}
