(() => {
  'use strict';
  const doc = document;
  const body = doc.body;
  const header = doc.querySelector('.site-header');
  const toggle = doc.querySelector('.menu-toggle');
  const nav = doc.querySelector('.mobile-nav');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 32);
  onScroll();
  window.addEventListener('scroll', onScroll, {passive: true});
  const setMenu = open => {
    toggle?.setAttribute('aria-expanded', String(open));
    toggle?.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav?.classList.toggle('open', open);
    if (nav) nav.inert = !open;
    body.classList.toggle('menu-open', open);
  };
  setMenu(false);
  doc.documentElement.classList.add('js');
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    setMenu(false);
    const href = a.getAttribute('href');
    if (href?.startsWith('#')) {
      const section = doc.getElementById(href.slice(1));
      if (section) {section.tabIndex = -1; section.focus({preventScroll: true});}
    }
  }));
  window.addEventListener('resize', () => {if (window.innerWidth > 820) setMenu(false);});
  doc.addEventListener('click', e => {
    if (toggle?.getAttribute('aria-expanded') === 'true' && !header.contains(e.target)) setMenu(false);
  });
  // Content remains visible if this API or JavaScript is unavailable.
  let observer;
  if ('IntersectionObserver' in window && !motion.matches) {
    observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-pending');
        observer.unobserve(entry.target);
      }
    }), {threshold: 0, rootMargin: '0px 0px 30px 0px'});
    doc.querySelectorAll('.reveal').forEach(el => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add('reveal-pending'); observer.observe(el);
      }
    });
  }
  motion.addEventListener?.('change', () => {
    if (motion.matches) {
      observer?.disconnect();
      doc.querySelectorAll('.reveal-pending').forEach(el => el.classList.remove('reveal-pending'));
    }
  });
  const lightbox = doc.querySelector('.lightbox');
  const image = lightbox?.querySelector('img');
  const close = lightbox?.querySelector('.lightbox-close');
  let opener;
  let background = [];
  const closeLightbox = () => {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    background.forEach(([el, wasInert]) => {el.inert = wasInert;});
    background = [];
    body.classList.remove('lightbox-open');
    opener?.focus();
  };
  doc.querySelectorAll('[data-lightbox]').forEach(item => item.addEventListener('click', e => {
    if (!lightbox || !image) return;
    e.preventDefault();
    opener = item;
    image.src = item.dataset.lightbox;
    image.alt = item.querySelector('img')?.alt || 'Imagem ampliada';
    lightbox.hidden = false;
    background = [...body.children].filter(el => el !== lightbox && el.tagName !== 'SCRIPT').map(el => [el, el.inert]);
    background.forEach(([el]) => {el.inert = true;});
    body.classList.add('lightbox-open');
    close?.focus();
  }));
  close?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => {if (e.target === lightbox) closeLightbox();});
  doc.addEventListener('keydown', e => {
    if (lightbox && !lightbox.hidden) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'Tab') {e.preventDefault(); close?.focus();}
    } else if (toggle?.getAttribute('aria-expanded') === 'true') {
      if (e.key === 'Escape') {setMenu(false); toggle.focus();}
      if (e.key === 'Tab') {
        const items = [toggle, ...nav.querySelectorAll('a')];
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && doc.activeElement === first) {e.preventDefault();last.focus();}
        if (!e.shiftKey && doc.activeElement === last) {e.preventDefault();first.focus();}
      }
    }
  });
  const year = doc.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
