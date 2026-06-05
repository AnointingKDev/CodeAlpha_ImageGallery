 // ── DATA ─
  const images = [
    { id:1,  title:"Dawn in the Valley",    cat:"nature",       filter:"warm",  src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop" },
    { id:2,  title:"Steel & Glass",         cat:"urban",        filter:"cool",  src:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&auto=format&fit=crop" },
    { id:3,  title:"Chromatic Dreams",      cat:"abstract",     filter:"vivid", src:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=700&auto=format&fit=crop" },
    { id:4,  title:"The Arc",               cat:"architecture", filter:"bw",    src:"https://images.unsplash.com/photo-1467226632440-65f0b4957563?w=700&auto=format&fit=crop" },
    { id:5,  title:"Golden Hour Forest",    cat:"nature",       filter:"warm",  src:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&auto=format&fit=crop" },
    { id:6,  title:"City Lights",           cat:"urban",        filter:"cool",  src:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=700&auto=format&fit=crop" },
    { id:7,  title:"Liquid Motion",         cat:"abstract",     filter:"vivid", src:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&auto=format&fit=crop" },
    { id:8,  title:"Heritage Facade",       cat:"architecture", filter:"bw",    src:"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=700&auto=format&fit=crop" },
    { id:9,  title:"Ocean Mist",            cat:"nature",       filter:"cool",  src:"https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=700&auto=format&fit=crop" },
    { id:10, title:"Night Reflections",     cat:"urban",        filter:"cool",  src:"https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop" },
    { id:11, title:"Geometric Flow",        cat:"abstract",     filter:"vivid", src:"https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=700&auto=format&fit=crop" },
    { id:12, title:"The Colonnade",         cat:"architecture", filter:"bw",    src:"https://images.unsplash.com/photo-1630871411770-2bfa47febdf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VGhlJTIwQ29sb25uYWRlfGVufDB8fDB8fHww"},
    { id:13, title:"Friends and Family",    cat:"lifestyle",    filter:"warm",  src:"https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id:14, title:"Career",           cat:"lifestyle",    filter:"cool",    src:"https://plus.unsplash.com/premium_photo-1674675646706-8468e673b74a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id :15, title:"Shopping",        cat:"lifestyle",         filter:"cool",   src:"https://plus.unsplash.com/premium_photo-1683121263622-664434494177?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"},
    { id:16, title:"Culinary Art",        cat:"Food",         filter:"vivid",   src:"https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
      
    { id:17, title:"Culinary Art",        cat:"Food",         filter:"vivid",   src:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
       { id:18, title:"Culinary Art",        cat:"Food",         filter:"vivid", src:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D"},
  ];

  // ── STATE ───
  let activeFilter = 'all';
  let searchQuery  = '';
  let lbIndex = 0;
  let filteredImages = [...images];

  // ── RENDER ─────────
  const gallery    = document.getElementById('gallery');
  const emptyState = document.getElementById('emptyState');

  function getFiltered() {
    return images.filter(img => {
      const catOk   = activeFilter === 'all' || img.cat === activeFilter;
      const searchOk = !searchQuery || img.title.toLowerCase().includes(searchQuery) || img.cat.includes(searchQuery);
      return catOk && searchOk;
    });
  }

  function render() {
    filteredImages = getFiltered();
    gallery.innerHTML = '';

    if (!filteredImages.length) {
      emptyState.classList.add('visible');
      return;
    }
    emptyState.classList.remove('visible');

    filteredImages.forEach((img, i) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      item.dataset.filter = img.filter;
      item.dataset.index  = i;
      item.innerHTML = `
        <img src="${img.src}" alt="${img.title}" loading="lazy" />
        <div class="gallery-overlay">
          <span class="overlay-title">${img.title}</span>
          <div class="overlay-meta">
            <span class="overlay-cat">${img.cat}</span>
            <span class="overlay-expand">⤢</span>
          </div>
        </div>
      `;
      item.addEventListener('click', () => openLightbox(i));

      // Staggered fade-in
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      gallery.appendChild(item);
      requestAnimationFrame(() => {
        setTimeout(() => {
          item.style.transition = 'opacity .4s ease, transform .4s ease';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, i * 55);
      });
    });
  }

  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.cat;
      render();
    });
  });

  
  document.getElementById('searchInput').addEventListener('input', e => {
    searchQuery = e.target.value.toLowerCase().trim();
    render();
  });

  
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lb-img');
  const lbTitle  = document.getElementById('lb-title');
  const lbCat    = document.getElementById('lb-cat');
  const lbCounter= document.getElementById('lb-counter');

  function openLightbox(idx) {
    lbIndex = idx;
    updateLightbox(false);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateLightbox(animate = true) {
    const img = filteredImages[lbIndex];
    if (animate) {
      lbImg.classList.add('switching');
      setTimeout(() => {
        lbImg.src = img.src;
        lbImg.alt = img.title;
        lbImg.classList.remove('switching');
      }, 200);
    } else {
      lbImg.src = img.src;
      lbImg.alt = img.title;
    }
    lbTitle.textContent   = img.title;
    lbCat.textContent     = img.cat;
    lbCounter.textContent = `${lbIndex + 1} / ${filteredImages.length}`;
  }

  function prevImage() {
    lbIndex = (lbIndex - 1 + filteredImages.length) % filteredImages.length;
    updateLightbox();
  }

  function nextImage() {
    lbIndex = (lbIndex + 1) % filteredImages.length;
    updateLightbox();
  }

  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lb-prev').addEventListener('click', prevImage);
  document.getElementById('lb-next').addEventListener('click', nextImage);

  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  // Keyboard nav
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'ArrowLeft')  prevImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape')     closeLightbox();
  });

  // Touch / swipe support
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  lightbox.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) > 50) dx < 0 ? nextImage() : prevImage();
  });

  // ── INIT ──
  render();