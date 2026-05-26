/**
 * Pastoral da Caridade — galeria 3D interativa
 */
(function () {
  const ITEMS = window.GALLERY_ITEMS;
  const N = ITEMS.length;
  const ASSETS = ITEMS.map((item) => ({
    src: `./assets/${item.file}`,
    title: item.title,
    caption: item.caption,
  }));

  let activeIndex = 4;
  let autoSpin = true;
  let idleTimer = null;
  let readingTimer = null;

  const cylinder = document.getElementById("cylinder");
  const carouselRow = document.getElementById("carouselRow");
  const carouselViewport = document.querySelector(".carousel-viewport");
  const footerNote = document.getElementById("footerNote");
  const toggleBtn = document.getElementById("modeToggle");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dotsHost = document.getElementById("dots");
  const pageShellEl = document.querySelector(".page-shell");
  const galleryStageEl = document.querySelector(".gallery-stage");
  const photosHoverEl = document.querySelector(".carousel-layer");
  const heroMessage = document.getElementById("heroMessage");
  const heroToggle = document.getElementById("heroToggle");

  let slideWraps = [];

  function buildGalleryMarkup() {
    cylinder.style.setProperty("--n", N);
    cylinder.innerHTML = ITEMS.map(
      (item, i) =>
        `<img class="card" style="--i:${i}" src="./assets/${item.file}" alt="${item.title}" loading="lazy" />`
    ).join("");

    carouselRow.innerHTML = ITEMS.map(
      (item, i) => `
        <article class="slide-wrap" data-index="${i}">
          <div class="slide-frame" role="button" tabindex="0" aria-label="Ver foto: ${item.title}">
            <img src="./assets/${item.file}" alt="${item.title}" />
          </div>
          <div class="slide-caption">
            <strong>${item.title}</strong>
            <span>${item.caption}</span>
          </div>
        </article>`
    ).join("");

    slideWraps = Array.from(document.querySelectorAll(".slide-wrap"));
  }

  function buildDots() {
    dotsHost.innerHTML = "";
    ITEMS.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.className = "dot" + (i === activeIndex ? " active" : "");
      dot.setAttribute("role", "button");
      dot.setAttribute("tabindex", "0");
      dot.setAttribute("aria-label", `Ir para foto ${i + 1}`);
      dot.addEventListener("click", () => toSlide(i));
      dot.addEventListener("keydown", (e) => {
        if (e.key === "Enter") toSlide(i);
      });
      dotsHost.appendChild(dot);
    });
  }

  function setFocused(focused) {
    galleryStageEl.classList.toggle("is-focused", focused);
    pageShellEl.classList.toggle("is-focused", focused);
  }

  function setReading(reading) {
    pageShellEl.classList.toggle("is-reading", reading);
  }

  function startReadingMode() {
    setFocused(true);
    setReading(true);
    clearTimeout(readingTimer);
    readingTimer = setTimeout(() => {
      setReading(false);
      if (!photosHoverEl.matches(":hover")) setFocused(false);
    }, 6000);
  }

  function setAutoSpin(next) {
    autoSpin = next;
    cylinder.classList.toggle("auto-spin", autoSpin);
    if (autoSpin) {
      cylinder.style.transform = "";
      toggleBtn.textContent = "Pausar cilindro";
    } else {
      const angle = -(activeIndex / N) * 360;
      cylinder.style.transform = `rotateY(${angle}deg)`;
      toggleBtn.textContent = "Girar cilindro";
    }
  }

  function bumpInteraction() {
    setAutoSpin(false);
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => setAutoSpin(true), 3000);
  }

  function centerActiveSlide() {
    const active = slideWraps[activeIndex];
    if (!active || !carouselViewport) return;
    const offset =
      active.offsetLeft + active.offsetWidth / 2 - carouselViewport.clientWidth / 2;
    carouselRow.style.transform = `translateX(${-offset}px)`;
  }

  function applyUI() {
    slideWraps.forEach((wrap, i) => {
      const isActive = i === activeIndex;
      wrap.classList.toggle("active", isActive);
      const rot = (activeIndex - i) * 42;
      const scale = isActive ? 1 : 0.9;
      wrap.style.transform = `rotateY(${rot}deg) scale(${scale})`;
      wrap.style.zIndex = isActive ? 40 : 0;
    });

    requestAnimationFrame(centerActiveSlide);

    dotsHost.querySelectorAll(".dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === activeIndex);
    });

    footerNote.textContent = `${activeIndex + 1} / ${N} · ${ASSETS[activeIndex].title}`;
    prevBtn.disabled = activeIndex === 0;
    nextBtn.disabled = activeIndex === N - 1;
  }

  function toPrev() {
    activeIndex = Math.max(0, activeIndex - 1);
    applyUI();
    bumpInteraction();
    startReadingMode();
  }

  function toNext() {
    activeIndex = Math.min(N - 1, activeIndex + 1);
    applyUI();
    bumpInteraction();
    startReadingMode();
  }

  function toSlide(i) {
    activeIndex = i;
    applyUI();
    bumpInteraction();
    startReadingMode();
  }

  function bindEvents() {
    photosHoverEl.addEventListener("mouseenter", () => setFocused(true));
    photosHoverEl.addEventListener("mouseleave", () => {
      if (!pageShellEl.classList.contains("is-reading")) setFocused(false);
    });

    if ("ontouchstart" in window) {
      photosHoverEl.addEventListener("click", (e) => {
        if (e.target.closest(".slide-frame")) return;
        startReadingMode();
      });
    }

    slideWraps.forEach((wrap) => {
      const i = Number(wrap.dataset.index);
      const frame = wrap.querySelector(".slide-frame");
      frame.addEventListener("click", () => toSlide(i));
      frame.addEventListener("keydown", (e) => {
        if (e.key === "Enter") toSlide(i);
      });
    });

    toggleBtn.addEventListener("click", () => {
      clearTimeout(idleTimer);
      setAutoSpin(!autoSpin);
    });

    prevBtn.addEventListener("click", toPrev);
    nextBtn.addEventListener("click", toNext);

    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") toPrev();
      if (e.key === "ArrowRight") toNext();
    });

    window.addEventListener("resize", () => requestAnimationFrame(centerActiveSlide));

    heroToggle.addEventListener("click", () => {
      const collapsed = heroMessage.classList.toggle("is-collapsed");
      heroToggle.setAttribute("aria-expanded", String(!collapsed));
      heroToggle.textContent = collapsed ? "Ler mensagem completa" : "Recolher mensagem";
    });
  }

  function init() {
    buildGalleryMarkup();
    buildDots();
    bindEvents();
    applyUI();
    setAutoSpin(true);

    window.addEventListener("load", () => {
      requestAnimationFrame(centerActiveSlide);
      pageShellEl.classList.add("is-loaded");
    });
  }

  init();
})();
