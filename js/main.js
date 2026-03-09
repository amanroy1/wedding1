// ======================================================
// SCROLL-DRIVEN FRAME ANIMATION
// Following SCROLL-ANIMATION-BEST-PRACTICES.md precisely
// ======================================================

const TOTAL  = 121;
const BATCH  = 20;
const FW     = 1948;
const FH     = 1060;

const canvas    = document.getElementById('frame-canvas');
const ctx       = canvas.getContext('2d');
const hero      = document.getElementById('hero');
const overlay   = document.getElementById('scroll-overlay');
const scheduleOverlay = document.getElementById('schedule-overlay');
const sealBtn   = document.getElementById('seal-btn');
const introText = document.getElementById('intro-text');
const loading   = document.getElementById('loading');
const barFill   = document.getElementById('bar-fill');
const scrollBar = document.getElementById('scroll-bar');
const musicToggle = document.getElementById('music-toggle');

// Click sound for seal button
const clickSound = new Audio('click.mp3');
// Background music (plays after scroll reaches the very end)
const bgMusic = new Audio('bg.mp3');
bgMusic.loop = true;
bgMusic.volume = 0; // start muted; we unmute at last frame
let musicPrimed = false;   // user-gesture-allowed, silently playing
let musicStarted = false;  // unmuted and audible

// Wax seal center in frame 1 (1948×1060 px)
const SEAL_FX = 990;
const SEAL_FY = 460;
// Text overlay anchor in open scroll (below mandala in lower parchment, 1948×1060)
const OV_FX = 974;
const OV_FY = 809;

const frames = new Array(TOTAL);
let currentFrame = 0;
let drawnFrame   = -1;
let isAutoScrolling = false; // true while programmatic scroll runs — we drive currentFrame ourselves

// ---- Canvas resize ----
function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  drawnFrame = -1;
}
window.addEventListener('resize', () => {
  resizeCanvas();
  positionSealBtn();
  positionOverlay();
}, { passive: true });

// ---- Scale helper: phones start contain, zoom to cover by end; landscape stays contain ----
function getScaleOffset(frameIndex = 0) {
  const portrait = canvas.height > canvas.width * 1.1;
  const containScale = Math.min(canvas.width / FW, canvas.height / FH);
  const coverScale = Math.max(canvas.width / FW, canvas.height / FH);

  let scale = containScale;
  if (portrait) {
    const progress = Math.max(0, Math.min(frameIndex / (TOTAL - 1), 1));
    // Ease-in zoom: frame starts fully visible, ends with current zoomed look.
    const zoomT = Math.pow(progress, 1.35);
    scale = containScale + (coverScale - containScale) * zoomT;
  }

  const ox = (canvas.width  - FW * scale) / 2;
  const oy = (canvas.height - FH * scale) / 2;
  return { scale, ox, oy };
}

function drawFrame(img, frameIndex = 0) {
  const { scale, ox, oy } = getScaleOffset(frameIndex);
  // Shift first frame up on medium viewports so intro text at bottom sits on darker parchment (fixes e.g. 14" laptop)
  const vh = canvas.height;
  const isMediumViewport = vh >= 600 && vh <= 900;
  const shiftUp = (frameIndex === 0 && isMediumViewport) ? vh * 0.09 : (frameIndex === 0 ? vh * 0.05 : 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#030512';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, ox, oy - shiftUp, FW * scale, FH * scale);
}

function primeBgMusic() {
  if (musicPrimed) return;
  bgMusic.volume = 0;
  bgMusic.play().then(() => {
    musicPrimed = true;
  }).catch(() => {
    // Autoplay blocked; we'll just skip background music gracefully.
  });
}

function startBgMusic() {
  if (musicStarted || !musicPrimed) return;
  bgMusic.currentTime = 0;
  bgMusic.volume = 0.6;
  musicStarted = true;
  if (musicToggle) musicToggle.classList.add('visible');
}

// ---- rAF render loop — ONLY draws when frame changes ----
function tick() {
  if (frames[currentFrame] && currentFrame !== drawnFrame) {
    drawFrame(frames[currentFrame], currentFrame);
    drawnFrame = currentFrame;
  }
  requestAnimationFrame(tick);
}

// ---- Scroll handler — ONLY sets state, never draws (skipped during auto-scroll; we set currentFrame in step()) ----
window.addEventListener('scroll', () => {
  if (isAutoScrolling) return;

  const rect = hero.getBoundingClientRect();
  const progress = Math.max(0, Math.min(1,
    -rect.top / (rect.height - window.innerHeight)
  ));

  currentFrame = Math.min(Math.floor(progress * TOTAL), TOTAL - 1);

  // Overlay appears when scroll is fully open (~83%)
  overlay.classList.toggle('visible', progress >= 0.83);
  // Schedule fades in over last frame when scroll nears end (~90%)
  const atLastFrame = progress >= 0.90;
  if (scheduleOverlay) scheduleOverlay.classList.toggle('visible', atLastFrame);
  const scheduleNavEl = document.getElementById('schedule-nav');
  if (scheduleNavEl) scheduleNavEl.classList.toggle('visible', atLastFrame);
  document.body.classList.toggle('at-last-frame', atLastFrame);
  if (atLastFrame && !musicStarted) {
    startBgMusic();
  }

  // Hide/show seal button and intro text based on scroll position
  const scrolled = progress > 0.02;
  sealBtn.classList.toggle('hidden', scrolled);
  introText.classList.toggle('hidden', scrolled);

  // Global progress bar
  const pg = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  scrollBar.style.width = (Math.min(pg, 1) * 100) + '%';

}, { passive: true });

// ---- Frame-to-canvas coordinate mapping ----
function frameToCanvas(fx, fy, frameIndex = 0) {
  const { scale, ox, oy } = getScaleOffset(frameIndex);
  return { x: ox + fx * scale, y: oy + fy * scale };
}

function positionSealBtn() {
  const pos = frameToCanvas(SEAL_FX, SEAL_FY, 0);
  sealBtn.style.left = pos.x + 'px';
  sealBtn.style.top  = pos.y + 'px';
}

function positionOverlay() {
  const pos = frameToCanvas(OV_FX, OV_FY, TOTAL - 1);
  overlay.style.left = pos.x + 'px';
  overlay.style.top  = pos.y + 'px';
  overlay.style.transform = 'translate(-50%, -50%)';
}

// ---- Cinematic auto-scroll through hero ----
function autoScrollHero() {
  sealBtn.classList.add('hidden');
  introText.classList.add('hidden');
  isAutoScrolling = true;
  const startY  = window.scrollY;
  const endY    = hero.offsetTop + hero.offsetHeight - window.innerHeight;
  const dist    = endY - startY;
  const duration = 6500; // ms — slow, cinematic
  const startT  = performance.now();

  // Ease-out cubic: fast start (no stall), smooth slow-down at end
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function step(now) {
    const elapsed = now - startT;
    const t = Math.min(elapsed / duration, 1);
    const progress = easeOutCubic(t);
    const scrollY = startY + dist * progress;
    window.scrollTo(0, scrollY);
    // Drive currentFrame ourselves so canvas stays in sync (no scroll-event delay)
    currentFrame = Math.min(Math.floor(progress * TOTAL), TOTAL - 1);
    // Keep UI in sync during auto-scroll (scroll handler is skipped when isAutoScrolling)
    overlay.classList.toggle('visible', progress >= 0.83);
    const atLastFrame = progress >= 0.90;
    if (scheduleOverlay) scheduleOverlay.classList.toggle('visible', atLastFrame);
    const scheduleNavEl = document.getElementById('schedule-nav');
    if (scheduleNavEl) scheduleNavEl.classList.toggle('visible', atLastFrame);
    document.body.classList.toggle('at-last-frame', atLastFrame);
    if (atLastFrame && !musicStarted) {
      startBgMusic();
    }
    scrollBar.style.width = (scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
    if (t >= 1) isAutoScrolling = false;
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ---- Batched frame loader ----
function loadFrame(i) {
  return new Promise(resolve => {
    const img = new Image();
    img.src = `./frames/frame_${String(i + 1).padStart(4, '0')}.jpg`;
    img.onload  = () => { frames[i] = img; resolve(); };
    img.onerror = () => { resolve(); }; // skip missing frame gracefully
  });
}

async function loadAllFrames() {
  for (let i = 0; i < TOTAL; i += BATCH) {
    const batch = [];
    for (let j = i; j < Math.min(i + BATCH, TOTAL); j++) {
      batch.push(loadFrame(j));
    }
    await Promise.all(batch);
    barFill.style.width = (Math.min((i + BATCH) / TOTAL, 1) * 100) + '%';
  }
}

// ---- Custom cursor — lerp lag ----
const cursor = document.getElementById('cursor');
let cx = -20, cy = -20, tx = -20, ty = -20;

document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });

function moveCursor() {
  cx += (tx - cx) * 0.12;
  cy += (ty - cy) * 0.12;
  cursor.style.left = cx + 'px';
  cursor.style.top  = cy + 'px';
  requestAnimationFrame(moveCursor);
}

// ---- Intersection Observer — scroll-reveal ----
const revealIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealIO.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));

// ---- Wedding data: events + schedule canvas (from data/wedding-data.js) ----
const VEENA_ICON = `<svg class="e-icon" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="11" cy="25" rx="8.5" ry="6.5" stroke="#c9a84c" stroke-width="0.9" fill="none"/><ellipse cx="11" cy="25" rx="4.5" ry="3" stroke="#c9a84c" stroke-width="0.45" fill="none" opacity="0.5"/><line x1="11" y1="18.5" x2="27" y2="4" stroke="#c9a84c" stroke-width="1.1"/><circle cx="27" cy="4" r="2.8" stroke="#c9a84c" stroke-width="0.8" fill="none"/><line x1="8.5" y1="21" x2="24.5" y2="7" stroke="#c9a84c" stroke-width="0.35" opacity="0.55"/><line x1="11.5" y1="19.5" x2="27.5" y2="5.5" stroke="#c9a84c" stroke-width="0.35" opacity="0.55"/><line x1="14" y1="21" x2="28" y2="7" stroke="#c9a84c" stroke-width="0.35" opacity="0.45"/><line x1="17" y1="15" x2="21" y2="11" stroke="#c9a84c" stroke-width="0.55" opacity="0.5"/><line x1="21" y1="11" x2="25" y2="7" stroke="#c9a84c" stroke-width="0.55" opacity="0.5"/></svg>`;
const DIYA_ICON = `<svg class="e-icon" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17,3 C17,3 13,8.5 13,12.5 C13,15.5 15,16.5 17,16.5 C19,16.5 21,15.5 21,12.5 C21,8.5 17,3 17,3 Z" stroke="#c9a84c" stroke-width="0.85" fill="rgba(201,168,76,0.07)"/><path d="M17,7.5 C17,7.5 15.2,10 15.2,12 C15.2,13.5 16,14 17,14 C18,14 18.8,13.5 18.8,12 C18.8,10 17,7.5 17,7.5 Z" stroke="#c9a84c" stroke-width="0.45" fill="rgba(201,168,76,0.1)" opacity="0.6"/><path d="M9,19 Q9,27.5 17,27.5 Q25,27.5 25,19 Z" stroke="#c9a84c" stroke-width="0.9" fill="rgba(201,168,76,0.05)"/><line x1="9" y1="19" x2="25" y2="19" stroke="#c9a84c" stroke-width="0.9"/><line x1="17" y1="16.5" x2="17" y2="19" stroke="#c9a84c" stroke-width="0.75"/><path d="M25,23 Q31,23 31,19" stroke="#c9a84c" stroke-width="0.9" fill="none"/></svg>`;

function renderEventBlock(ev) {
  return `<div class="schedule-event-block">
    <div class="schedule-event-block-title">${escapeHtml(ev.title)}</div>
    <div class="schedule-event-block-meta">${escapeHtml(ev.date)} · ${escapeHtml(ev.time)}</div>
  </div>`;
}

function renderVenueBlock(venue, showMapButton = true) {
  if (!venue || !venue.name) return '';
  const mapBtn = showMapButton
    ? (() => {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.name + ' ' + (venue.line || ''))}`;
        return `<a class="schedule-map-btn" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">See in Map</a>`;
      })()
    : '';
  return `
    <div class="schedule-venue">
      <div class="schedule-venue-name">${escapeHtml(venue.name)}</div>
      <div class="schedule-venue-line">${escapeHtml(venue.line || '')}</div>
      ${mapBtn}
    </div>`;
}

function renderWeddingFromData() {
  if (typeof WEDDING_DATA === 'undefined') return;
  const { events, venue } = WEDDING_DATA;
  const eventsGrid = document.getElementById('events-grid');
  const scheduleMessage = document.getElementById('schedule-message');
  const scheduleList = document.getElementById('schedule-list');
  const scheduleVenue = document.getElementById('schedule-venue');
  const scheduleEventsPage = document.getElementById('schedule-events-page');

  if (eventsGrid && events && events.length) {
    const icons = [VEENA_ICON, DIYA_ICON, DIYA_ICON];
    eventsGrid.innerHTML = events.map((ev, i) => {
      const delay = i * 0.08;
      const icon = icons[i % icons.length];
      return `<div class="e-card reveal" style="transition-delay:${delay}s">${icon}<div class="e-name">${escapeHtml(ev.title)}</div><div class="e-detail"><strong>Date</strong><br>${escapeHtml(ev.date)}<br><br><strong>Time</strong><br>${escapeHtml(ev.time)}<br><br><strong>Venue</strong><br>${escapeHtml(venue.name)}<br>${escapeHtml(venue.line)}</div></div>`;
    }).join('');
    eventsGrid.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));
  }

  if (scheduleMessage) {
    scheduleMessage.innerHTML = `
      <span class="schedule-line">
        With full hearts, we invite you to share the moment where two stories and two families become one.
      </span>
      <span class="schedule-name-block">
        <span class="schedule-name-main">Aman Roy</span>
        <span class="schedule-parent-line">S/O Manoj Kumar Roy &amp; Suneeta Roy</span>
      </span>
      <span class="schedule-name-block">
        <span class="schedule-name-main">Sonali Hanchinamani</span>
        <span class="schedule-parent-line">D/O Chandrashekhar H. &amp; Nagalakshmi H.</span>
      </span>
      <span class="schedule-line schedule-line-bottom">
        Your presence and blessings will mean the world to us as we begin this new chapter together.
      </span>
    `;
  }
  // Schedule page: keep high-level invitation only; detailed events live in Events tab.
  if (scheduleList) {
    scheduleList.innerHTML = '';
  }
  if (scheduleVenue && venue) {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.name + ' ' + venue.line)}`;
    scheduleVenue.innerHTML = `
      <div class="schedule-venue-name">${escapeHtml(venue.name)}</div>
      <div class="schedule-venue-line">${escapeHtml(venue.line)}</div>
      <a class="schedule-map-btn" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">See in Map</a>
    `;
  }

  if (scheduleEventsPage && events && events.length) {
    scheduleEventsPage.innerHTML = events.map(ev => renderEventBlock(ev)).join('');
  }
}

function escapeHtml(s) {
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

// SVG divider draw-in
const dividerIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      dividerIO.unobserve(e.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('.svg-divider').forEach(el => dividerIO.observe(el));

// ---- Init ----
window.addEventListener('DOMContentLoaded', async () => {
  resizeCanvas();
  tick();
  moveCursor();

  if (window.location.protocol === 'file:') {
    console.warn('⚠️ Serve via HTTP for frames to load: python3 -m http.server 8080');
  }

  await loadAllFrames();

  // Draw first frame and position UI over it
  if (frames[0]) { drawFrame(frames[0], 0); drawnFrame = 0; }
  positionSealBtn();
  positionOverlay();

  // Wire up seal button
  sealBtn.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
    primeBgMusic();
    autoScrollHero();
  });

  // Fade out loading screen
  loading.style.opacity = '0';
  setTimeout(() => { loading.style.display = 'none'; }, 950);

  renderWeddingFromData();

  // Helper: run ink reveal on active schedule page
  function runInkReveal(targetPage) {
    const pages = document.querySelectorAll('.schedule-page');
    pages.forEach(p => p.classList.remove('ink-reveal'));
    if (!targetPage) return;
    // Force reflow so animation can restart when switching tabs
    // eslint-disable-next-line no-unused-expressions
    void targetPage.offsetWidth;
    targetPage.classList.add('ink-reveal');
  }

  const defaultPage = document.querySelector('.schedule-page[data-page="schedule"]');
  if (defaultPage) runInkReveal(defaultPage);

  // Schedule overlay page switcher
  const scheduleNav = document.querySelector('.schedule-nav');
  if (scheduleNav) {
    const pages = document.querySelectorAll('.schedule-page');
    const buttons = scheduleNav.querySelectorAll('.schedule-nav-btn');
    scheduleNav.addEventListener('click', (e) => {
      const btn = e.target.closest('.schedule-nav-btn');
      if (!btn) return;
      const target = btn.getAttribute('data-target');
      if (!target) return;

      let activePage = null;
      pages.forEach(page => {
        const isActive = page.getAttribute('data-page') === target;
        page.classList.toggle('schedule-page--active', isActive);
        if (isActive) activePage = page;
      });
      buttons.forEach(b => b.classList.toggle('is-active', b === btn));

      if (activePage) runInkReveal(activePage);
    });
  }

  // Music toggle button
  if (musicToggle) {
    musicToggle.addEventListener('click', () => {
      bgMusic.pause();
      musicPrimed = false;
      musicStarted = false;
      musicToggle.classList.remove('visible');
    });
  }
});
