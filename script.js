(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els = document.querySelectorAll('[data-speed]');
  let ticking = false;
  function update() {
    const y = window.scrollY || 0;
    els.forEach(el => {
      const s = parseFloat(el.dataset.speed) || 0;
      el.style.transform = `translateY(${y * s}px)`;
    });
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  update();
})();
