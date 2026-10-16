(() => {
  'use strict';

  const doc = document;
  const body = doc.body;
  const header = doc.querySelector('.site-header');
  const progress = doc.querySelector('.scroll-progress span');
  const menuToggle = doc.querySelector('.menu-toggle');
  const mobileNav = doc.querySelector('.mobile-nav');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header + progress bar
  const onScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle('scrolled', y > 32);
    if (progress) {
      const max = doc.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(y / max, 1) : 0;
      progress.style.transform = `scaleX(${ratio})`;
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const closeMenu = () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    mobileNav?.classList.remove('open');
    body.classList.remove('menu-open');
  };
  menuToggle?.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    mobileNav?.classList.toggle('open', !open);
    body.classList.toggle('menu-open', !open);
  });
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 820) closeMenu(); });

  // Scroll reveal
  const revealEls = doc.querySelectorAll('.reveal');
  if (reducedMotion) {
    revealEls.forEach(el => el.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13, rootMargin: '0px 0px -4% 0px' });
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
      observer.observe(el);
    });
  }

  // Active navigation section
  const sections = [...doc.querySelectorAll('main section[id]')];
  const navLinks = [...doc.querySelectorAll('.desktop-nav a')];
  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-38% 0px -54% 0px', threshold: 0 });
    sections.forEach(section => sectionObserver.observe(section));
  }

  // Subtle parallax that never alters the image's intrinsic ratio
  if (!reducedMotion && window.matchMedia('(min-width: 821px)').matches) {
    const parallaxItems = [...doc.querySelectorAll('[data-parallax]')];
    let ticking = false;
    const updateParallax = () => {
      const vh = window.innerHeight;
      parallaxItems.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return;
        const factor = Number(el.dataset.parallax || .03);
        const centerDelta = rect.top + rect.height / 2 - vh / 2;
        el.style.transform = `translate3d(0, ${centerDelta * -factor}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    }, { passive: true });
    updateParallax();
  }

  // FAQ accordion
  doc.querySelectorAll('.faq-item').forEach(item => {
    const button = item.querySelector('button');
    button?.addEventListener('click', () => {
      const willOpen = !item.classList.contains('open');
      doc.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('button')?.setAttribute('aria-expanded', 'false');
        }
      });
      item.classList.toggle('open', willOpen);
      button.setAttribute('aria-expanded', String(willOpen));
    });
  });

  // Gallery lightbox
  const lightbox = doc.querySelector('.lightbox');
  const lightboxImage = lightbox?.querySelector('img');
  const closeLightboxButton = lightbox?.querySelector('.lightbox-close');
  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.hidden = true;
    body.style.overflow = '';
  };
  doc.querySelectorAll('[data-lightbox]').forEach(item => {
    item.addEventListener('click', () => {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = item.dataset.lightbox;
      lightboxImage.alt = item.querySelector('img')?.alt || 'Imagem ampliada';
      lightbox.hidden = false;
      body.style.overflow = 'hidden';
      closeLightboxButton?.focus();
    });
  });
  closeLightboxButton?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  doc.addEventListener('keydown', e => { if (e.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox(); });

  // Mild 3D card movement on pointer devices
  if (!reducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    doc.querySelectorAll('[data-tilt]').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `perspective(800px) rotateX(${y * -3}deg) rotateY(${x * 3}deg) translateY(-2px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });

    doc.querySelectorAll('.magnetic').forEach(button => {
      button.addEventListener('pointermove', e => {
        const r = button.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        button.style.transform = `translate(${dx * .07}px, ${dy * .08}px)`;
      });
      button.addEventListener('pointerleave', () => { button.style.transform = ''; });
    });
  }

  const year = doc.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
