const i18n = {
  "hero_niche": { id: `AI • TECH • MINDSET • PRODUCTIVITY`, en: `AI • TECH • MINDSET • PRODUCTIVITY` },
  "hero_desc": { id: `Edukasi teknologi dan pengembangan diri yang dibalut dalam penceritaan sinematik serta konten kuis interaktif.`, en: `Technology and self-development education wrapped in cinematic storytelling and interactive quiz content.` },
  "hero_wa": { id: `HUBUNGI VIA WHATSAPP`, en: `CONTACT VIA WHATSAPP` },
  "visual_title": { id: `VISIONARY TECH`, en: `VISIONARY TECH` },
  "stats_tag": { id: `RENAISSANCE CREATOR`, en: `RENAISSANCE CREATOR` },
  "stats_heading": { id: `SEDIKIT TENTANG GUE`, en: `A LITTLE ABOUT ME` },
  "stats_views": { id: `TOTAL VIEWS`, en: `TOTAL VIEWS` },
  "stats_followers": { id: `TOTAL FOLLOWERS`, en: `TOTAL FOLLOWERS` },
  "stats_deals": { id: `BRAND DEALS`, en: `BRAND DEALS` },
  "brands_subtitle": { id: `KOLABORASI EKSKLUSIF`, en: `EXCLUSIVE COLLABORATIONS` },
  "brands_title": { id: `PERNAH BERKOLABORASI DENGAN`, en: `HAS COLLABORATED WITH` },
  "brands_footer": { id: `DAN MASIH BANYAK LAGI 😲`, en: `AND MANY MORE 😲` },
  "works_title": { id: `KARYA TERBAIK`, en: `BEST WORKS` },
  "works_desc": { id: `Sorotan beberapa kolaborasi dan konten personal yang mencapai jutaan tayangan (TikTok). Tahu sendiri kan bakal segila apa kalo mirror ke Instagram juga`, en: `Highlights of several collaborations and personal content that reached millions of views (TikTok). Imagine the impact when mirrored to Instagram!` },
  "events_title": { id: `DOKUMENTASI EVENT &amp; SEMINAR`, en: `EVENT &amp; SEMINAR DOCUMENTATION` },
  "events_subtitle": { id: `Rekam jejak gue sebagai pembicara dan mentor.`, en: `My track record as a speaker and mentor.` },
  "events_ai_desc": { id: `Membagikan konsep dasar AI dan cara praktis pengaplikasiannya.`, en: `Sharing the fundamental concepts of AI and practical ways to apply them.` },
  "events_workshop_desc": { id: `Pelatihan langsung implementasi AI untuk membangun konten cerdas.`, en: `Hands-on training implementing AI to build smart content.` },
  "services_title": { id: `LAYANAN KOLABORASI`, en: `COLLABORATION SERVICES` },
  "serv_1": { id: `I. SOCIAL MEDIA CAMPAIGNS`, en: `I. SOCIAL MEDIA CAMPAIGNS` },
  "serv_1_a": { id: `Cross-platform campaign untuk eksposur ganda. Termasuk 1x Video, konsep &amp; script eksklusif.`, en: `Cross-platform campaign for double exposure. Includes 1x Video, exclusive concept &amp; script.` },
  "serv_1_b_title": { id: `Instagram Services`, en: `Instagram Services` },
  "serv_1_b": { id: `IG Story (aktif 24 jam dengan link), Feed, Carousel, hingga Reels bernarasi kuat.`, en: `IG Story (active 24 hrs with link), Feed, Carousel, to highly narrative Reels.` },
  "serv_1_c_title": { id: `TikTok Services`, en: `TikTok Services` },
  "serv_1_c": { id: `Video vertikal dengan hook tajam atau Carousel berorientasi edukasi dan tren.`, en: `Vertical video with sharp hooks or trend-driven educational Carousels.` },
  "serv_2": { id: `II. EVENT VISIT &amp; COVERAGE`, en: `II. EVENT VISIT &amp; COVERAGE` },
  "serv_2_a_title": { id: `Pre-Event, On-Site &amp; Post-Event`, en: `Pre-Event, On-Site &amp; Post-Event` },
  "serv_2_a": { id: `Hadir meramaikan offline event dengan teaser interaktif, liputan real-time via Stories/Reels, dan video kompilasi recap dinamis pasca-acara.`, en: `Livening up offline events with interactive teasers, real-time coverage via Stories/Reels, and dynamic recap compilation videos post-event.` },
  "serv_3": { id: `III. SPEAKER &amp; TALKSHOW`, en: `III. SPEAKER &amp; TALKSHOW` },
  "serv_3_a_title": { id: `Topik Unggulan &amp; Format`, en: `Featured Topics &amp; Formats` },
  "serv_3_a": { id: `Fundamental AI, Workshop Hands-on, Strategi Viral, &amp; Konten Visual. Tersedia untuk Event Online (Webinar/Live) maupun Offline (Seminar/Juri).`, en: `AI Fundamentals, Hands-on Workshops, Viral Strategies, &amp; Visual Content. Available for Online (Webinar/Live) and Offline (Seminar/Judge) Events.` },
  "serv_4": { id: `IV. EXCLUSIVE PARTNERSHIPS`, en: `IV. EXCLUSIVE PARTNERSHIPS` },
  "serv_4_a_title": { id: `Brand Ambassador &amp; Custom Projects`, en: `Brand Ambassador &amp; Custom Projects` },
  "serv_4_a": { id: `Kerjasama strategis 3-6 bulan atau campaign spesifik yang disesuaikan dengan brief, integrasi link, dan opsi Usage Rights.`, en: `Strategic 3-6 month partnerships or specific campaigns customized to your brief, link integration, and Usage Rights options.` },
  "testi_title": { id: `APA KATA MEREKA?`, en: `WHAT THEY SAY` },
  "testi_1": { id: `"Gokil sih, ulasan hapenya detail banget tapi tetep asyik ditonton. Retention rate-nya tinggi, engagement naik, dan pelayanan komunikasinya responsif banget. Top notch!"`, en: `"Crazy good! The phone review was highly detailed but still super fun to watch. High retention rate, increased engagement, and very responsive communication. Top notch!"` },
  "testi_2": { id: `"Kerja bareng bro satu ini gak pernah ribet. Kreatif banget bikin analogi laptop kita jadi gampang dipahami awam. Performa kontennya mantap, delivery-nya super cepet!"`, en: `"Working with this bro is never complicated. Super creative in making laptop analogies easily understood by the public. Solid content performance, super fast delivery!"` },
  "testi_3": { id: `"Gak cuma jago bikin skrip yang nge-hook, tapi profesionalitas kerjanya juara. Konversi bagus, minim revisi, dan komunikasinya bener-bener suportif. Highly recommended!"`, en: `"Not only great at writing hooking scripts, but his professionalism is top tier. Good conversions, minimal revisions, and truly supportive communication. Highly recommended!"` },
  "footer_headline": { id: `MULAI KOLABORASI`, en: `START COLLABORATION` },
  "modal_title": { id: `Flappy Chicken Arcade!`, en: `Flappy Chicken Arcade!` },
};


let currentLang = localStorage.getItem('yochef_lang') || 'id';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('yochef_lang', lang);
  document.getElementById('lang-switch').textContent = lang.toUpperCase();
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[key] && i18n[key][lang]) {
      el.innerHTML = i18n[key][lang];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('lang-switch');
  if (btn) {
    btn.addEventListener('click', () => {
      setLanguage(currentLang === 'id' ? 'en' : 'id');
    });
  }
  setLanguage(currentLang);
});
window.addEventListener('DOMContentLoaded', () => {
  // 1. REGISTER GSAP PLUGINS
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // 2. HIGH-PERFORMANCE CHROMA KEY ENGINE USING OFFSCREEN TEMPORARY CANVAS
  function processChromaKey(src, canvas, options = {}) {
    if (!canvas) {
      if (options.onComplete) options.onComplete();
      return;
    }
    const img = new Image();
    img.src = src;

    img.onload = () => {
      try {
        let w = img.naturalWidth || 800;
        let h = img.naturalHeight || 800;

        // Downsample max dimension to 1000px for instant load and high DPI efficiency
        const maxDim = 1000;
        if (w > maxDim || h > maxDim) {
          const ratio = Math.min(maxDim / w, maxDim / h);
          w = Math.round(w * ratio);
          h = Math.round(h * ratio);
        }

        // Temporary offscreen canvas for pixel processing (preserves GPU acceleration on DOM canvas)
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = w;
        tempCanvas.height = h;
        const tempCtx = tempCanvas.getContext('2d', { willReadFrequently: true });

        tempCtx.drawImage(img, 0, 0, w, h);
        const imgData = tempCtx.getImageData(0, 0, w, h);
        const data = imgData.data;
        const isMan = options.isMan || false;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Green screen chroma keying (#00FF00 background removal)
          const isGreen = (g > 45) && (g > r * 1.05) && (g > b * 1.05);
          if (isGreen) {
            const maxRB = Math.max(r, b);
            const greenDiff = g - maxRB;

            if (greenDiff > 10) {
              data[i + 3] = 0; // Pure transparency
            } else {
              data[i + 1] = maxRB;
              data[i + 3] = Math.max(0, 255 - greenDiff * 15);
            }
          }
        }

        tempCtx.putImageData(imgData, 0, 0);

        // Render to DOM canvas using clean GPU hardware-accelerated context
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(tempCanvas, 0, 0);

      } catch (err) {
        console.warn('Canvas chroma key fallback for ' + src, err);
        const ctx = canvas.getContext('2d');
        const w = img.naturalWidth || 800;
        const h = img.naturalHeight || 800;
        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(img, 0, 0, w, h);
      }
      if (options.onComplete) options.onComplete();
    };

    img.onerror = () => {
      console.warn('Could not load image: ' + src);
      if (options.onComplete) options.onComplete();
    };
  }

  // PROCESS CHROMA KEY GREEN CANVASES (GRIFFIN, FOOTER HAND, EGG TRIGGER)
  const cutouts = [
    { src: 'assets/cutout_griffin.webp', canvas: document.getElementById('canvas-griffin') },
    { src: 'assets/cutout_hand_footer.webp', canvas: document.getElementById('canvas-hand-footer') },
    { src: 'assets/egg_trigger.webp', canvas: document.getElementById('canvas-egg-trigger') }
  ];

  let loadedCount = 0;
  cutouts.forEach(item => {
    processChromaKey(item.src, item.canvas, { 
      onComplete: () => {
        loadedCount++;
        if (loadedCount === cutouts.length && typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      }
    });
  });


  // 3. GSAP SCROLLTRIGGER MASTER ARCHITECTURE (DATA URI TEXTURED MASK ENGINE)
  let animInitialized = false;
  function initScrollAnimations() {
    if (animInitialized || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    animInitialized = true;

    const root = document.documentElement; 

    const getTrackWidth = () => {
      const track = document.getElementById("works-track");
      return track ? -(track.scrollWidth - window.innerWidth * 0.9) : -1000;
    };

    // 1. INIT HIDE ALL SECTIONS
    gsap.set("#visual-showcase, #stats, #brands, #works, #events, #layanan-visual, #layanan, #testimonials, #footer", { autoAlpha: 0 });
    
    // 2. INITIAL OFF-SCREEN POSITIONS FOR SPATIAL CAMERA
    gsap.set("#events", { y: "100vh" });
    gsap.set("#slide-1", { y: "100vh" });
    gsap.set("#slide-2", { x: "-100vw" });
    gsap.set("#slide-3", { x: "-100vw" });
    gsap.set("#slide-4", { y: "-100vh" });
    gsap.set("#testimonials", { y: "100vh" });

    let masterTl = gsap.timeline({
      scrollTrigger: { trigger: "#pin-master", start: "top top", end: "+=2400%", scrub: 1, pin: true, invalidateOnRefresh: true }
    });

    // STAGE 1: Hero Parallax (0 to 1)
    masterTl.to("#hero .hero-typo-container", { x: "-10vw", opacity: 0, ease: "none", duration: 1 }, 0);
    masterTl.to("#hero .subject-man", { scale: 1.3, transformOrigin: "bottom center", ease: "none", duration: 1 }, 0);
    masterTl.to("#hero .bg-deep", { y: "15vh", ease: "none", duration: 1 }, 0);
    masterTl.to("#hero .sun-flare", { y: "15vh", ease: "none", duration: 1 }, 0); // Preserved from existing
    masterTl.to("#hero .griffin", { y: "-30vh", x: "10vw", ease: "none", duration: 1 }, 0);
    masterTl.to("#hero .ruins", { scale: 1.2, ease: "none", duration: 1 }, 0);

    // STAGE 2: Visual Showcase (1 to 2)
    masterTl.set("#visual-showcase", { autoAlpha: 1 }, 1);
    masterTl.to(root, { "--visual-size": "300%", ease: "power2.inOut", duration: 1 }, 1);
    masterTl.fromTo("#visual-showcase .visual-bg", { scale: 1 }, { scale: 1.15, ease: "none", duration: 2 }, 1);
    masterTl.fromTo("#visual-showcase .visual-text", { y: "5vh" }, { y: "-5vh", ease: "none", duration: 2 }, 1); // Preserved from existing

    // STAGE 3: Stats (2 to 3)
    masterTl.set("#stats", { autoAlpha: 1 }, 2);
    masterTl.to(root, { "--stats-pos": "100%", ease: "power2.inOut", duration: 1 }, 2);
    masterTl.fromTo("#stats img", { scale: 1 }, { scale: 1.15, ease: "none", duration: 2 }, 2);

    // STAGE 4: Brands (3 to 4)
    masterTl.set("#brands", { autoAlpha: 1 }, 3);
    masterTl.to(root, { "--brands-pos": "0%", ease: "power2.inOut", duration: 1 }, 3);
    masterTl.fromTo("#brands .logo-grid", { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, ease: "power1.out", duration: 2 }, 3); // Preserved from existing
    
    // STAGE 5: Works Reveal (4 to 5)
    masterTl.set("#works", { autoAlpha: 1 }, 4);
    masterTl.to(root, { "--works-pos": "0%", ease: "power2.inOut", duration: 1 }, 4);

    // STAGE 6: Horizontal Scroll Works (5 to 7)
    masterTl.to("#works-track", { x: getTrackWidth, ease: "none", duration: 2 }, 5);

    // STAGE 7: Events Section Slides Up (7 to 8)
    masterTl.set("#events", { autoAlpha: 1 }, 7);
    masterTl.to("#events", { y: "0vh", ease: "power2.inOut", duration: 1 }, 7);

    // STAGE 8: Layanan Visual Ink Drop (8 to 9)
    masterTl.set("#layanan-visual", { autoAlpha: 1 }, 8);
    masterTl.fromTo("#layanan-visual", { webkitMaskSize: "0%", maskSize: "0%" }, { webkitMaskSize: "300%", maskSize: "300%", ease: "power2.inOut", duration: 1 }, 8);
    masterTl.fromTo("#layanan-visual .visual-bg", { scale: 1 }, { scale: 1.15, ease: "none", duration: 2 }, 8);

    // STAGE 9: Layanan Slide 1 Up (10 to 11)
    masterTl.set("#layanan", { autoAlpha: 1 }, 10); 
    masterTl.to("#slide-1", { y: "0vh", ease: "power2.inOut", duration: 1 }, 10);

    // STAGE 10: Layanan Slide 2 Right (11 to 12)
    masterTl.to("#slide-1", { x: "100vw", ease: "power2.inOut", duration: 1 }, 11);
    masterTl.to("#slide-2", { x: "0vw", ease: "power2.inOut", duration: 1 }, 11);

    // STAGE 11: Layanan Slide 3 Right (12 to 13)
    masterTl.to("#slide-2", { x: "100vw", ease: "power2.inOut", duration: 1 }, 12);
    masterTl.to("#slide-3", { x: "0vw", ease: "power2.inOut", duration: 1 }, 12);

    // STAGE 12: Layanan Slide 4 Down (13 to 14)
    masterTl.to("#slide-3", { y: "100vh", ease: "power2.inOut", duration: 1 }, 13);
    masterTl.to("#slide-4", { y: "0vh", ease: "power2.inOut", duration: 1 }, 13);

    // STAGE 13: TESTIMONIALS REVEAL (14 to 15) -> FIXED Z-INDEX & TRANSITION
    masterTl.set("#testimonials", { autoAlpha: 1 }, 14);
    masterTl.to("#slide-4", { y: "-100vh", ease: "power2.inOut", duration: 1 }, 14); 
    masterTl.to("#testimonials", { y: "0vh", ease: "power2.inOut", duration: 1 }, 14); 
    masterTl.fromTo(".bust-left", { y: "30vh" }, { y: "-5vh", ease: "none", duration: 2 }, 14);
    masterTl.fromTo(".bust-center", { y: "15vh" }, { y: "10vh", ease: "none", duration: 2 }, 14);
    masterTl.fromTo(".bust-right", { y: "40vh" }, { y: "-15vh", ease: "none", duration: 2 }, 14);

    // STAGE 14: Footer Ink Drop (15 to 16)
    masterTl.set("#footer", { autoAlpha: 1 }, 15);
    masterTl.fromTo("#footer", { webkitMaskSize: "0%", maskSize: "0%" }, { webkitMaskSize: "300%", maskSize: "300%", ease: "power2.inOut", duration: 1 }, 15);
    masterTl.fromTo("#footer .footer-hand", { y: "15vh", scale: 0.9 }, { y: "-5vh", scale: 1, ease: "power1.out", duration: 1 }, 15);

    ScrollTrigger.refresh();
  }

  // Continuous Auto-Play & Mute Engine for ALL videos (including mobile Safari / WebKit portrait)
  const allVideos = document.querySelectorAll('video');
  const playAllVideos = () => {
    allVideos.forEach(video => {
      video.muted = true;
      video.playsInline = true;
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {});
      }
    });
  };

  playAllVideos();
  ['touchstart', 'touchend', 'click', 'scroll', 'pointerdown'].forEach(evt => {
    window.addEventListener(evt, playAllVideos, { passive: true });
  });

  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const vid = entry.target;
          vid.muted = true;
          vid.play().catch(() => {});
        }
      });
    }, { threshold: 0.05 });

    allVideos.forEach(vid => videoObserver.observe(vid));
  }

  // Initialize ScrollTrigger animations
  initScrollAnimations();
  window.addEventListener('load', () => {
    playAllVideos();
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  });


  // 4. HIDDEN EASTER EGG MECHANIC & MODAL
  const eggContainer = document.getElementById('egg-trigger-container');
  const modal = document.getElementById('easter-egg-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (eggContainer) {
    // Randomize position to 1 of 4 screen corners on load
    const corners = [
      { top: '30px', left: '30px', bottom: 'auto', right: 'auto' },
      { top: '30px', right: '30px', bottom: 'auto', left: 'auto' },
      { bottom: '30px', left: '30px', top: 'auto', right: 'auto' },
      { bottom: '30px', right: '30px', top: 'auto', left: 'auto' }
    ];
    const chosenCorner = corners[Math.floor(Math.random() * corners.length)];
    Object.assign(eggContainer.style, chosenCorner);

    // Click trigger toggles modal
    eggContainer.addEventListener('click', () => {
      modal.classList.add('flex-active');
      document.querySelectorAll('.tilt-shift-overlay, .dreamy-overlay').forEach(el => el.style.display = 'none');
      initFlappyGame();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('flex-active');
      document.querySelectorAll('.tilt-shift-overlay, .dreamy-overlay').forEach(el => el.style.display = 'block');
      if (flappyLoopId) {
        cancelAnimationFrame(flappyLoopId);
        flappyLoopId = null;
      }
    });
  }


  // 5. FLAPPY CHICKEN ARCADE GAME ENGINE
  let flappyLoopId = null;
    function initFlappyGame() {
    const fCanvas = document.getElementById('flappy-canvas');
    if (!fCanvas) return;
    const fCtx = fCanvas.getContext('2d');
    const container = document.getElementById('flappy-canvas-container');

    fCanvas.width = 320;
    fCanvas.height = 500;

    let state = 'START'; // START, PLAYING, GAMEOVER, COOLDOWN, WON
    let score = 0;
    let birdY = fCanvas.height / 2;
    let birdVelocity = 0;
    const gravity = 0.35;
    const jump = -6.0;
    const pipeSpeed = 2.0;

    const pipes = [];
    const clouds = [];
    const trees = [];
    let pipeTimer = 0;
    let gameLoopOffset = 0;

    const scoreDisplay = document.getElementById('flappy-score');
    const couponBox = document.getElementById('coupon-box');
    const jumpBtn = document.getElementById('flappy-jump-btn');

    // Storage logic
    let attempts = parseInt(localStorage.getItem('yochef_flappy_attempts'));
    if (isNaN(attempts)) attempts = 3;
    let lastFailTime = parseInt(localStorage.getItem('yochef_flappy_failtime') || '0');
    
    function checkCooldown() {
      if (attempts <= 0) {
        const now = Date.now();
        const cooldownMs = 24 * 60 * 60 * 1000;
        if (now - lastFailTime >= cooldownMs) {
          attempts = 3;
          localStorage.setItem('yochef_flappy_attempts', attempts);
          return false;
        }
        return true;
      }
      return false;
    }

    if (checkCooldown()) state = 'COOLDOWN';
    if (localStorage.getItem('yochef_voucher')) state = 'WON'; // Already won before

    function getOrGenerateVoucher() {
      let code = localStorage.getItem('yochef_voucher');
      if (!code) {
         const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
         code = 'YOS-';
         for(let i=0; i<4; i++) code += chars.charAt(Math.floor(Math.random()*chars.length));
         code += '-';
         for(let i=0; i<4; i++) code += chars.charAt(Math.floor(Math.random()*chars.length));
         localStorage.setItem('yochef_voucher', code);
      }
      return code;
    }

    // Init Parallax Backgrounds
    for(let i=0; i<4; i++) {
      clouds.push({ x: Math.random() * fCanvas.width, y: Math.random() * (fCanvas.height/2), speed: 0.2 + Math.random()*0.3, scale: 0.5 + Math.random()*0.8 });
    }
    for(let i=0; i<5; i++) {
      trees.push({ x: i * 80, height: 40 + Math.random()*60 });
    }

    function spawnPipe() {
      const gap = 120;
      const minHeight = 50;
      const maxHeight = fCanvas.height - gap - minHeight;
      const topHeight = Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight;

      pipes.push({
        x: fCanvas.width,
        top: topHeight,
        bottom: fCanvas.height - topHeight - gap,
        passed: false
      });
    }

    function handleJump() {
      if (state === 'COOLDOWN' || state === 'WON') return;
      
      if (state === 'START') {
        state = 'PLAYING';
        birdVelocity = jump;
        return;
      }
      
      if (state === 'GAMEOVER') {
        if (checkCooldown()) {
           state = 'COOLDOWN';
           return;
        }
        score = 0;
        birdY = fCanvas.height / 2;
        birdVelocity = jump;
        pipes.length = 0;
        pipeTimer = 0;
        state = 'PLAYING';
        if (scoreDisplay) scoreDisplay.textContent = '0';
        if (couponBox) couponBox.style.display = 'none';
        return;
      }
      
      if (state === 'PLAYING') {
        birdVelocity = jump;
      }
    }

    if (jumpBtn) jumpBtn.onclick = handleJump;
    fCanvas.onclick = handleJump;
    window.onkeydown = (e) => {
      if (e.code === 'Space' && modal.classList.contains('flex-active')) {
        e.preventDefault();
        handleJump();
      }
    };

    function update() {
      if (state !== 'PLAYING') return;

      gameLoopOffset++;
      birdVelocity += gravity;
      birdY += birdVelocity;

      if (birdY > fCanvas.height - 20) {
        birdY = fCanvas.height - 20;
        die();
      }
      if (birdY < 15) {
        birdY = 15;
        birdVelocity = 0;
      }

      // Update Parallax
      clouds.forEach(c => {
        c.x -= c.speed;
        if(c.x < -100) { c.x = fCanvas.width + 50; c.y = Math.random() * (fCanvas.height/2); }
      });
      trees.forEach(t => {
        t.x -= pipeSpeed * 0.5;
        if(t.x < -60) { t.x = fCanvas.width; t.height = 40 + Math.random()*60; }
      });

      pipeTimer++;
      if (pipeTimer > 100) {
        spawnPipe();
        pipeTimer = 0;
      }

      for (let i = pipes.length - 1; i >= 0; i--) {
        const p = pipes[i];
        p.x -= pipeSpeed;

        const birdX = 60;
        const birdRadius = 14;

        if (birdX + birdRadius > p.x && birdX - birdRadius < p.x + 45) {
          if (birdY - birdRadius < p.top || birdY + birdRadius > fCanvas.height - p.bottom) {
            die();
          }
        }

        if (!p.passed && p.x + 45 < birdX) {
          p.passed = true;
          score++;
          if (scoreDisplay) scoreDisplay.textContent = score;

          if (score >= 35) {
            state = 'WON';
            const code = getOrGenerateVoucher();
            if (couponBox) couponBox.style.display = 'block';
          }
        }

        if (p.x < -60) pipes.splice(i, 1);
      }
    }
    
    function die() {
      state = 'GAMEOVER';
      attempts--;
      localStorage.setItem('yochef_flappy_attempts', attempts);
      if (attempts <= 0) {
        lastFailTime = Date.now();
        localStorage.setItem('yochef_flappy_failtime', lastFailTime);
      }
    }

    function drawCloud(ctx, x, y, scale) {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.beginPath();
      ctx.arc(0, 0, 20, 0, Math.PI * 2);
      ctx.arc(25, -10, 25, 0, Math.PI * 2);
      ctx.arc(50, 0, 20, 0, Math.PI * 2);
      ctx.arc(25, 10, 25, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    
    function drawRomanPillar(ctx, x, y, w, h, isTop) {
       ctx.fillStyle = 'rgba(20, 20, 25, 0.9)';
       ctx.strokeStyle = '#d4af37';
       ctx.lineWidth = 1.5;
       
       // Shaft
       ctx.fillRect(x, y, w, h);
       ctx.strokeRect(x, y, w, h);
       
       // Fluting lines
       ctx.beginPath();
       ctx.moveTo(x + w*0.3, y); ctx.lineTo(x + w*0.3, y + h);
       ctx.moveTo(x + w*0.7, y); ctx.lineTo(x + w*0.7, y + h);
       ctx.stroke();
       
       // Capitals/Bases
       if (isTop) {
         ctx.fillRect(x - 5, y + h - 15, w + 10, 15);
         ctx.strokeRect(x - 5, y + h - 15, w + 10, 15);
       } else {
         ctx.fillRect(x - 5, y, w + 10, 15);
         ctx.strokeRect(x - 5, y, w + 10, 15);
       }
    }

    function render() {
      fCtx.clearRect(0, 0, fCanvas.width, fCanvas.height);
      
      // Draw background elements (parallax)
      clouds.forEach(c => drawCloud(fCtx, c.x, c.y, c.scale));
      
      fCtx.fillStyle = 'rgba(10, 10, 15, 0.7)';
      trees.forEach(t => {
         fCtx.beginPath();
         fCtx.moveTo(t.x, fCanvas.height);
         fCtx.lineTo(t.x + 15, fCanvas.height - t.height);
         fCtx.lineTo(t.x + 30, fCanvas.height);
         fCtx.fill();
      });

      // Draw Pillars
      pipes.forEach(p => {
        drawRomanPillar(fCtx, p.x, 0, 45, p.top, true);
        drawRomanPillar(fCtx, p.x, fCanvas.height - p.bottom, 45, p.bottom, false);
      });

      // Draw Bird
      fCtx.save();
      fCtx.translate(60, birdY);
      if(state === 'PLAYING' || state === 'GAMEOVER') {
         fCtx.rotate(Math.min(Math.PI / 4, Math.max(-Math.PI / 4, birdVelocity * 0.08)));
      }
      
      // Bird Body
      fCtx.fillStyle = '#ffffff';
      fCtx.strokeStyle = '#d4af37';
      fCtx.lineWidth = 2;
      fCtx.beginPath();
      fCtx.ellipse(0, 0, 14, 18, 0, 0, Math.PI * 2);
      fCtx.fill();
      fCtx.stroke();

      // Wing (flapping if playing)
      fCtx.fillStyle = '#d4af37';
      fCtx.beginPath();
      const wingY = (state === 'PLAYING' && gameLoopOffset % 10 < 5) ? -22 : -18;
      fCtx.arc(0, wingY, 5, 0, Math.PI * 2);
      fCtx.fill();

      // Eye
      fCtx.fillStyle = '#000';
      fCtx.fillRect(6, -4, 3, 3);
      // Beak
      fCtx.fillStyle = '#d4af37';
      fCtx.beginPath();
      fCtx.moveTo(12, -2);
      fCtx.lineTo(18, 1);
      fCtx.lineTo(12, 4);
      fCtx.fill();
      fCtx.restore();

      // Draw UI Overlays
      if (state === 'START') {
        fCtx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        fCtx.fillRect(0, 0, fCanvas.width, fCanvas.height);
        fCtx.fillStyle = '#d4af37';
        fCtx.font = '700 24px "Playfair Display", serif';
        fCtx.textAlign = 'center';
        fCtx.fillText('FLAPPY CHICKEN', fCanvas.width / 2, fCanvas.height / 2 - 15);
        fCtx.fillStyle = '#fff';
        fCtx.font = '14px "Inter", sans-serif';
        fCtx.fillText('Tap/Space untuk Mulai', fCanvas.width / 2, fCanvas.height / 2 + 15);
      } 
      else if (state === 'GAMEOVER') {
        fCtx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        fCtx.fillRect(0, 0, fCanvas.width, fCanvas.height);
        fCtx.fillStyle = '#d4af37';
        fCtx.font = '700 26px "Playfair Display", serif';
        fCtx.textAlign = 'center';
        fCtx.fillText('GAME OVER', fCanvas.width / 2, fCanvas.height / 2 - 25);
        fCtx.fillStyle = '#fff';
        fCtx.font = '14px "Inter", sans-serif';
        fCtx.fillText(`Sisa Nyawa: ${attempts}`, fCanvas.width / 2, fCanvas.height / 2 + 5);
        if (attempts > 0) {
           fCtx.fillStyle = '#b0ab9e';
           fCtx.fillText('Tap untuk mencoba lagi', fCanvas.width / 2, fCanvas.height / 2 + 30);
        }
      }
      else if (state === 'COOLDOWN') {
        fCtx.fillStyle = 'rgba(0, 0, 0, 0.85)';
        fCtx.fillRect(0, 0, fCanvas.width, fCanvas.height);
        fCtx.fillStyle = '#d4af37';
        fCtx.font = '700 20px "Playfair Display", serif';
        fCtx.textAlign = 'center';
        fCtx.fillText('COOLDOWN AKTIF', fCanvas.width / 2, fCanvas.height / 2 - 25);
        fCtx.fillStyle = '#fff';
        fCtx.font = '14px "Inter", sans-serif';
        const now = Date.now();
        const cooldownMs = 24 * 60 * 60 * 1000;
        let remaining = Math.max(0, cooldownMs - (now - lastFailTime));
        let h = Math.floor(remaining / (1000 * 60 * 60));
        let m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        fCtx.fillText(`Kembali dalam ${h}j ${m}m`, fCanvas.width / 2, fCanvas.height / 2 + 5);
      }
      else if (state === 'WON') {
        fCtx.fillStyle = 'rgba(0, 0, 0, 0.85)';
        fCtx.fillRect(0, 0, fCanvas.width, fCanvas.height);
        fCtx.fillStyle = '#d4af37';
        fCtx.font = '700 24px "Playfair Display", serif';
        fCtx.textAlign = 'center';
        fCtx.fillText('YOU WON!', fCanvas.width / 2, fCanvas.height / 2 - 40);
        
        fCtx.fillStyle = '#fff';
        fCtx.font = '12px "Inter", sans-serif';
        fCtx.fillText('Screenshot ini & kirim ke Admin', fCanvas.width / 2, fCanvas.height / 2 - 15);
        
        fCtx.fillStyle = '#222';
        fCtx.fillRect(fCanvas.width/2 - 90, fCanvas.height/2 + 5, 180, 40);
        fCtx.strokeStyle = '#d4af37';
        fCtx.strokeRect(fCanvas.width/2 - 90, fCanvas.height/2 + 5, 180, 40);
        
        fCtx.fillStyle = '#d4af37';
        fCtx.font = '600 16px "Inter", sans-serif';
        fCtx.fillText(getOrGenerateVoucher(), fCanvas.width / 2, fCanvas.height / 2 + 31);
      }
    }

    if (flappyLoopId) cancelAnimationFrame(flappyLoopId);
    function loop() {
      if (!modal || !modal.classList.contains('flex-active')) {
        flappyLoopId = null;
        return;
      }
      update();
      render();
      flappyLoopId = requestAnimationFrame(loop);
    }
    loop();
  }


  // 4. GOTHIC CATHEDRAL DUST MOTES PARTICLE SYSTEM
  const dustCanvas = document.getElementById('canvas-dust');
  if (dustCanvas) {
    const dustCtx = dustCanvas.getContext('2d');
    let dWidth = dustCanvas.width = window.innerWidth;
    let dHeight = dustCanvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      dWidth = dustCanvas.width = window.innerWidth;
      dHeight = dustCanvas.height = window.innerHeight;
    });

    const particlesCount = 75;
    const dustParticles = [];

    for (let i = 0; i < particlesCount; i++) {
      dustParticles.push({
        x: Math.random() * dWidth,
        y: Math.random() * dHeight,
        radius: Math.random() * 2.5 + 0.8,
        opacity: Math.random() * 0.7 + 0.2,
        speedX: (Math.random() - 0.4) * 0.4,
        speedY: -(Math.random() * 0.5 + 0.15),
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.01
      });
    }

      let dustAnimId = null;
      function animateDust() {
        dustCtx.clearRect(0, 0, dWidth, dHeight);

        for (let i = 0; i < dustParticles.length; i++) {
          const p = dustParticles[i];
          p.x += p.speedX + Math.sin(p.pulse) * 0.3;
          p.y += p.speedY;
          p.pulse += p.pulseSpeed;

          if (p.y < -10) {
            p.y = dHeight + 10;
            p.x = Math.random() * dWidth;
          }
          if (p.x < -10) p.x = dWidth + 10;
          if (p.x > dWidth + 10) p.x = -10;

          const currentOpacity = Math.max(0, p.opacity * (0.6 + Math.sin(p.pulse) * 0.4));

          dustCtx.beginPath();
          dustCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          dustCtx.fillStyle = `rgba(255, 235, 180, ${currentOpacity})`;
          dustCtx.shadowBlur = 8;
          dustCtx.shadowColor = 'rgba(255, 215, 120, 0.8)';
          dustCtx.fill();
        }

        dustAnimId = requestAnimationFrame(animateDust);
      }

      // Optimization: Only animate dust when visible
      const dustObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!dustAnimId) animateDust();
          } else {
            if (dustAnimId) {
              cancelAnimationFrame(dustAnimId);
              dustAnimId = null;
            }
          }
        });
      }, { threshold: 0 });
      dustObserver.observe(dustCanvas);

      // 3D Parallax Mouse Move for Layanan Visual
      const layananVis = document.getElementById("layanan-visual");
      const layananVisInner = layananVis ? layananVis.querySelector(".layanan-visual-inner") : null;
      
      if (layananVis && layananVisInner) {
        layananVis.addEventListener("mousemove", (e) => {
          const rect = layananVis.getBoundingClientRect();
          // Calculate mouse position relative to center (-0.5 to +0.5)
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          
          gsap.to(layananVisInner, {
            rotateY: x * 15,
            rotateX: -y * 15,
            duration: 0.5,
            ease: "power2.out"
          });
        });
        
        layananVis.addEventListener("mouseleave", () => {
          gsap.to(layananVisInner, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.8,
            ease: "power2.out"
          });
        });
      }
    }
});

