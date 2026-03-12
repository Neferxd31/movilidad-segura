/* ================================================================
   MOVILIDAD SEGURA — JavaScript Principal
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar: hamburger + scroll effect ── */
  const hamburger = document.querySelector('.hamburger');
  const menu      = document.querySelector('.navbar__menu');
  const navbar    = document.querySelector('.navbar');

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('open');
      hamburger.classList.toggle('is-open');
    });
    menu.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        hamburger.classList.remove('is-open');
      });
    });
  }

  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Marcar link activo ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link').forEach(link => {
    const href = link.getAttribute('href')?.split('/').pop();
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Fade-in al scroll ── */
  const fadeObserver = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        fadeObserver.unobserve(e.target);
      }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

  /* ── Lightbox para galería ── */
  const galleryImgs = document.querySelectorAll('.gallery-grid img, .gallery-item[data-src]');
  if (galleryImgs.length) {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <div class="lightbox-box">
        <button class="lightbox-close" aria-label="Cerrar">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <img src="" alt="Foto actividad" class="lightbox-img"/>
        <p class="lightbox-caption"></p>
      </div>`;
    document.body.appendChild(overlay);

    const lbImg     = overlay.querySelector('.lightbox-img');
    const lbCaption = overlay.querySelector('.lightbox-caption');
    const lbClose   = overlay.querySelector('.lightbox-close');
    let allSrcs     = [];
    let currentIdx  = 0;

    const openLightbox = (src, caption, idx) => {
      lbImg.src = src;
      lbCaption.textContent = caption || '';
      currentIdx = idx;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    };

    galleryImgs.forEach((item, i) => {
      const src = item.tagName === 'IMG' ? item.src : item.dataset.src;
      const caption = item.alt || item.dataset.caption || '';
      allSrcs.push({ src, caption });

      // Envolver imgs en gallery-item si no lo están
      if (item.tagName === 'IMG' && !item.closest('.gallery-item')) {
        item.parentElement.style.cursor = 'pointer';
      }

      item.style.cursor = 'pointer';
      item.addEventListener('click', () => openLightbox(src, caption, i));
    });

    overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });
    lbClose.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', e => {
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && allSrcs.length > 1) {
        const next = (currentIdx + 1) % allSrcs.length;
        openLightbox(allSrcs[next].src, allSrcs[next].caption, next);
      }
      if (e.key === 'ArrowLeft' && allSrcs.length > 1) {
        const prev = (currentIdx - 1 + allSrcs.length) % allSrcs.length;
        openLightbox(allSrcs[prev].src, allSrcs[prev].caption, prev);
      }
    });
  }

  /* ── Smooth scroll anclas ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Contador animado en stats ── */
  document.querySelectorAll('.stat__number[data-target]').forEach(el => {
    const statsObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const target  = +el.dataset.target;
        const suffix  = el.dataset.suffix || '';
        const duration = 1200;
        const step    = 16;
        const steps   = duration / step;
        let current   = 0;
        const inc     = target / steps;
        const timer   = setInterval(() => {
          current += inc;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = Math.floor(current) + suffix;
        }, step);
        statsObs.unobserve(el);
      });
    }, { threshold: 0.5 });
    statsObs.observe(el);
  });

  /* ── Stagger de cards dentro de grids ── */
  document.querySelectorAll('.grid .card, .grid--3 .card, .grid--4 .card').forEach((card, i) => {
    if (!card.classList.contains('fade-in')) {
      card.style.transitionDelay = `${(i % 4) * 80}ms`;
    }
  });
});