// ======================================================
// SCROLL-DRIVEN FRAME ANIMATION
// Following SCROLL-ANIMATION-BEST-PRACTICES.md precisely
// ======================================================

const LANG_CODES = ['en', 'hi', 'kn', 'bho'];
const LANG_COOKIE = 'wedding_lang';
const LANG_COOKIE_MAX_AGE = 31536000; // 1 year

function getStoredLang() {
  if (typeof document === 'undefined' || !document.cookie) return 'en';
  const m = document.cookie.match(new RegExp('(?:^|;\\s*)' + LANG_COOKIE + '=([^;]*)'));
  const v = m ? m[1].trim() : '';
  return LANG_CODES.includes(v) ? v : 'en';
}

function setStoredLang(lang) {
  if (!LANG_CODES.includes(lang)) return;
  document.cookie = LANG_COOKIE + '=' + lang + '; path=/; max-age=' + LANG_COOKIE_MAX_AGE + '; SameSite=Lax';
}

let currentLang = 'en';

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
const heroCountdown = document.getElementById('hero-countdown');
const hintToast = document.getElementById('hint-toast');
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
  /* Tie lang position to music button visibility so they never overlap when scrolling up */
  document.body.classList.toggle('music-toggle-visible', musicToggle ? musicToggle.classList.contains('visible') : false);
  if (atLastFrame && !musicStarted) {
    startBgMusic();
  }

  // Hide/show seal button, intro text, and hero countdown based on scroll position
  const scrolled = progress > 0.02;
  sealBtn.classList.toggle('hidden', scrolled);
  introText.classList.toggle('hidden', scrolled);
  if (heroCountdown) heroCountdown.classList.toggle('hidden', scrolled);
  // Dismiss hint toast when user scrolls
  if (scrolled && hintToast && hintToast.classList.contains('visible')) {
    hintToast.classList.remove('visible');
    hintToast.classList.add('fade-out');
  }

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
  if (heroCountdown) heroCountdown.classList.add('hidden');
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
    document.body.classList.toggle('music-toggle-visible', musicToggle ? musicToggle.classList.contains('visible') : false);
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

function renderVenueBlock(venue, showMapButton = true, seeInMapText = 'See in Map') {
  if (!venue || !venue.name) return '';
  const mapBtn = showMapButton
    ? (() => {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.name + ' ' + (venue.line || ''))}`;
        return `<a class="schedule-map-btn" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(seeInMapText)}</a>`;
      })()
    : '';
  return `
    <div class="schedule-venue">
      <div class="schedule-venue-name">${escapeHtml(venue.name)}</div>
      <div class="schedule-venue-line">${escapeHtml(venue.line || '')}</div>
      ${mapBtn}
    </div>`;
}

function renderWeddingFromData(lang) {
  const t = typeof TRANSLATIONS !== 'undefined' && lang && TRANSLATIONS[lang]
    ? TRANSLATIONS[lang]
    : (typeof WEDDING_DATA !== 'undefined' ? { events: WEDDING_DATA.events, venue: WEDDING_DATA.venue, seeInMap: 'See in Map', venueLabel: 'Venue', date: 'Date', time: 'Time' } : null);
  if (!t || !t.events || !t.venue) return;
  const { events, venue, seeInMap, venueLabel, date: dateLabel, time: timeLabel } = t;
  const dateL = dateLabel || 'Date';
  const timeL = timeLabel || 'Time';
  const venueL = venueLabel || 'Venue';
  const eventsGrid = document.getElementById('events-grid');
  const scheduleMessage = document.getElementById('schedule-message');
  const scheduleList = document.getElementById('schedule-list');
  const scheduleVenue = document.getElementById('schedule-venue');
  const scheduleEventsPage = document.getElementById('schedule-events-page');

  if (scheduleMessage && t.scheduleLine1) {
    scheduleMessage.innerHTML = `
      <span class="schedule-line">${escapeHtml(t.scheduleLine1)}</span>
      <span class="schedule-name-block">
        <span class="schedule-name-main">${escapeHtml(t.groomName)}</span>
        <span class="schedule-parent-line">${escapeHtml(t.groomParentLine)}</span>
      </span>
      <span class="schedule-name-block">
        <span class="schedule-name-main">${escapeHtml(t.brideName)}</span>
        <span class="schedule-parent-line">${escapeHtml(t.brideParentLine)}</span>
      </span>
      <span class="schedule-line schedule-line-bottom">${escapeHtml(t.scheduleLineBottom)}</span>
    `;
  }
  if (scheduleList) scheduleList.innerHTML = '';
  if (scheduleVenue && venue) {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.name + ' ' + (venue.line || ''))}`;
    scheduleVenue.innerHTML = `
      <div class="schedule-venue-name">${escapeHtml(venue.name)}</div>
      <div class="schedule-venue-line">${escapeHtml(venue.line || '')}</div>
      <a class="schedule-map-btn" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(seeInMap || 'See in Map')}</a>
    `;
  }
  if (scheduleEventsPage && events && events.length) {
    scheduleEventsPage.innerHTML = events.map(ev => renderEventBlock(ev)).join('');
  }
  if (eventsGrid && events && events.length) {
    const icons = [VEENA_ICON, DIYA_ICON, DIYA_ICON];
    eventsGrid.innerHTML = events.map((ev, i) => {
      const delay = i * 0.08;
      const icon = icons[i % icons.length];
      return `<div class="e-card reveal" style="transition-delay:${delay}s">${icon}<div class="e-name">${escapeHtml(ev.title)}</div><div class="e-detail"><strong>${escapeHtml(dateL)}</strong><br>${escapeHtml(ev.date)}<br><br><strong>${escapeHtml(timeL)}</strong><br>${escapeHtml(ev.time)}<br><br><strong>${escapeHtml(venueL)}</strong><br>${escapeHtml(venue.name)}<br>${escapeHtml(venue.line || '')}</div></div>`;
    }).join('');
    eventsGrid.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));
  }
}

function escapeHtml(s) {
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

function getLangDisplayName(lang) {
  const shortCodes = { en: 'EN', hi: 'HI', kn: 'KN', bho: 'BH' };
  return shortCodes[lang] || (lang === 'bho' ? 'BH' : lang.toUpperCase());
}

function applyLanguage(langCode) {
  if (!LANG_CODES.includes(langCode) || typeof TRANSLATIONS === 'undefined' || !TRANSLATIONS[langCode]) return;
  currentLang = langCode;
  const t = TRANSLATIONS[langCode];

  document.documentElement.lang = langCode;
  document.documentElement.classList.remove('lang-en', 'lang-hi', 'lang-kn', 'lang-bho');
  document.documentElement.classList.add('lang-' + langCode);

  const loadingText = document.getElementById('loading-text');
  if (loadingText && t.loadingMessages && t.loadingMessages.length) {
    loadingText.textContent = t.loadingMessages[Math.floor(Math.random() * t.loadingMessages.length)];
  } else if (loadingText && t.loadingDefault) {
    loadingText.textContent = t.loadingDefault;
  }

  const titleEl = document.querySelector('title');
  if (titleEl && t.pageTitle) titleEl.textContent = t.pageTitle;
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && t.ogDescription) ogDesc.setAttribute('content', t.ogDescription);
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc && t.ogDescription) twDesc.setAttribute('content', t.ogDescription);

  const setText = (id, text) => { const el = document.getElementById(id); if (el && text != null) el.textContent = text; };
  const setHtml = (id, html) => { const el = document.getElementById(id); if (el && html != null) el.innerHTML = html; };

  setText('intro-invited', t.introInvited);
  setText('intro-names', t.introNames);
  setText('hint-toast', t.hintToast);
  const sealLabel = document.getElementById('seal-label');
  if (sealLabel && t.sealLabel) sealLabel.textContent = t.sealLabel;
  const sealBtn = document.getElementById('seal-btn');
  if (sealBtn && t.sealAria) sealBtn.setAttribute('aria-label', t.sealAria);

  setText('ov-blessing', t.ovBlessing);
  setText('ov-names', t.ovNames);
  setText('ov-date', t.ovDate);
  setText('ov-location', t.ovLocation);

  setText('schedule-ganesh', t.ganeshMantra);
  setHtml('schedule-note', t.dressNote);

  setText('contact-label-groom', t.forLadke);
  setText('contact-label-bride', t.forLadki);
  const lineGroom = document.getElementById('contact-line-groom');
  if (lineGroom && t.contactGroomLine) lineGroom.innerHTML = t.contactGroomLine + '<span class="schedule-contact-number">+91&nbsp;91564&nbsp;51159</span>';
  const lineBride = document.getElementById('contact-line-bride');
  if (lineBride && t.contactBrideLine) lineBride.innerHTML = t.contactBrideLine + '<span class="schedule-contact-number">+91&nbsp;94804&nbsp;10721</span>';

  document.querySelectorAll('.schedule-contact-call').forEach(el => { if (t.call) el.textContent = t.call; });
  document.querySelectorAll('.schedule-contact-wa').forEach(el => { if (t.whatsApp) el.textContent = t.whatsApp; });

  const navEvents = document.getElementById('nav-btn-events');
  if (navEvents && t.tabEvents) navEvents.textContent = t.tabEvents;
  const navAttire = document.getElementById('nav-btn-attire');
  if (navAttire && t.tabAttire) navAttire.textContent = t.tabAttire;
  const navSchedule = document.getElementById('nav-btn-schedule');
  if (navSchedule && t.ariaSchedule) navSchedule.setAttribute('aria-label', t.ariaSchedule);
  const navContact = document.getElementById('nav-btn-contact');
  if (navContact && t.ariaContact) navContact.setAttribute('aria-label', t.ariaContact);

  setText('footer-blessing-kn', t.blessingKn);
  setText('footer-blessing-hi', t.blessingHi);
  setText('footer-names', t.introNames);
  const fSub = document.getElementById('f-sub');
  if (fSub && t.withLoveBlessings != null && t.monthYear != null) fSub.innerHTML = escapeHtml(t.withLoveBlessings) + '<br>' + escapeHtml(t.monthYear);

  const langToggleLabel = document.getElementById('lang-toggle-label');
  if (langToggleLabel) langToggleLabel.textContent = getLangDisplayName(langCode);

  const musicToggleEl = document.getElementById('music-toggle');
  if (musicToggleEl && t.ariaPauseMusic && t.ariaPlayMusic) {
    musicToggleEl.setAttribute('aria-label', musicToggleEl.classList.contains('visible') && !bgMusic.paused ? t.ariaPauseMusic : t.ariaPlayMusic);
  }

  renderWeddingFromData(langCode);
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
  currentLang = getStoredLang();
  applyLanguage(currentLang);

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

  let sealTapped = false;
  // Wire up seal button
  sealBtn.addEventListener('click', () => {
    sealTapped = true;
    if (toastTimeoutId) {
      clearTimeout(toastTimeoutId);
      toastTimeoutId = null;
    }
    if (hintToast && hintToast.classList.contains('visible')) {
      hintToast.classList.remove('visible');
      hintToast.classList.add('fade-out');
    }
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
    primeBgMusic();
    autoScrollHero();
  });

  // Fade out loading screen
  loading.style.opacity = '0';
  setTimeout(() => { loading.style.display = 'none'; }, 950);

  // Show hint toast only if user hasn't tapped the seal within 3 seconds
  let toastTimeoutId = null;
  function showHintToast() {
    if (!hintToast || sealTapped) return;
    hintToast.classList.remove('fade-out');
    hintToast.classList.add('visible');
    setTimeout(function() {
      hintToast.classList.remove('visible');
      hintToast.classList.add('fade-out');
    }, 5000);
  }
  toastTimeoutId = setTimeout(showHintToast, 5000);

  // Language switcher: toggle dropdown, close on outside click or option select
  const langToggle = document.getElementById('lang-toggle');
  const langDropdown = document.getElementById('lang-dropdown');
  if (langToggle && langDropdown) {
    langToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = langDropdown.classList.toggle('open');
      langToggle.setAttribute('aria-expanded', open);
      langDropdown.setAttribute('aria-hidden', !open);
    });
    document.addEventListener('click', () => {
      langDropdown.classList.remove('open');
      langToggle.setAttribute('aria-expanded', 'false');
      langDropdown.setAttribute('aria-hidden', 'true');
    });
    langDropdown.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = opt.getAttribute('data-lang');
        if (LANG_CODES.includes(lang)) {
          setStoredLang(lang);
          applyLanguage(lang);
          langDropdown.classList.remove('open');
          langToggle.setAttribute('aria-expanded', 'false');
          langDropdown.setAttribute('aria-hidden', 'true');
        }
      });
    });
  }

  // Hero countdown: running timer to wedding day (22 June 2026, 9:00 AM IST); two parts for mobile (line1: days·hrs·mins, line2: secs)
  const heroCountdownMain = document.getElementById('hero-countdown-main');
  const heroCountdownSecs = document.getElementById('hero-countdown-secs');
  if (heroCountdown && heroCountdownMain && heroCountdownSecs) {
    const weddingDate = new Date(Date.UTC(2026, 5, 22, 3, 30, 0));
    function updateCountdown() {
      const t = typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang] ? TRANSLATIONS[currentLang] : null;
      const dayL = t ? (t.countdownDay || 'day') : 'day';
      const daysL = t ? (t.countdownDays || 'days') : 'days';
      const hrL = t ? (t.countdownHr || 'hr') : 'hr';
      const hrsL = t ? (t.countdownHrs || 'hrs') : 'hrs';
      const minL = t ? (t.countdownMin || 'min') : 'min';
      const minsL = t ? (t.countdownMins || 'mins') : 'mins';
      const secL = t ? (t.countdownSec || 'sec') : 'sec';
      const secsL = t ? (t.countdownSecs || 'secs') : 'secs';
      const leftL = t ? (t.countdownLeft || 'left') : 'left';
      const todayL = t ? (t.countdownToday || 'Today is the day.') : 'Today is the day.';

      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();
      if (diff <= 0) {
        heroCountdownMain.textContent = todayL;
        heroCountdownSecs.textContent = '';
        return;
      }
      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (24 * 60 * 60));
      const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      const mainParts = [];
      if (days > 0) mainParts.push(`${days} ${days === 1 ? dayL : daysL}`);
      mainParts.push(`${hours} ${hours === 1 ? hrL : hrsL}`);
      mainParts.push(`${minutes} ${minutes === 1 ? minL : minsL}`);
      heroCountdownMain.textContent = mainParts.join(' · ');
      heroCountdownSecs.textContent = `${seconds} ${seconds === 1 ? secL : secsL} ${leftL}`;
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

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

  // Music toggle: play/pause, SVG icons (always white via currentColor)
  const iconPause = document.querySelector('.music-icon-pause');
  const iconPlay = document.querySelector('.music-icon-play');
  if (musicToggle) {
    musicToggle.addEventListener('click', () => {
      const t = typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang] ? TRANSLATIONS[currentLang] : null;
      const pauseLabel = t && t.ariaPauseMusic ? t.ariaPauseMusic : 'Pause background music';
      const playLabel = t && t.ariaPlayMusic ? t.ariaPlayMusic : 'Play background music';
      if (bgMusic.paused) {
        bgMusic.volume = 0.6;
        bgMusic.play().catch(() => {});
        if (iconPause) iconPause.style.display = '';
        if (iconPlay) iconPlay.style.display = 'none';
        musicToggle.setAttribute('aria-label', pauseLabel);
      } else {
        bgMusic.pause();
        if (iconPause) iconPause.style.display = 'none';
        if (iconPlay) iconPlay.style.display = '';
        musicToggle.setAttribute('aria-label', playLabel);
      }
    });
  }
});
