/**
 * Slides, pricing (BRL/USD), and carousels.
 * Add screenshots under assets/screenshots/<folder>/ and register them here.
 */

(function () {
  "use strict";

  const I18n = window.PortfolioI18n;
  if (!I18n) {
    console.error("PortfolioI18n missing");
    return;
  }

  const { getLocale, t, initI18n, applyI18n } = I18n;

  /** WhatsApp — digits only (DDI + DDD + number) */
  const CONTACT = {
    whatsapp: "5511999783889",
  };

  const WA_MESSAGES = {
    pt:
      "Ol\u00e1! Vi o portf\u00f3lio e tenho interesse em desenvolver um projeto (site ou sistema). Gostaria de entender o que faz mais sentido para o meu caso, alinhar escopo e prazo \u2014 e conversar sobre valores, que podemos negociar conforme a necessidade. Podemos falar?",
    en:
      "Hi! I reviewed the portfolio and I\u2019m interested in building a project (website or system). I\u2019d like to understand what fits my needs, align scope and timeline \u2014 and discuss pricing, which we can negotiate based on requirements. Can we talk?",
  };

  /**
   * Pricing rows - BRL (PT) / USD (EN). Fixed display ranges, not live FX.
   */
  const PRICING = [
    {
      id: "landing",
      label: {
        pt: "Landing page / site bem simples",
        en: "Landing page / simple site",
      },
      brl: "R$ 600\u20131.000",
      usd: "$200\u2013450",
    },
    {
      id: "institutional",
      label: {
        pt: "Site institucional",
        en: "Institutional site",
      },
      brl: "R$ 1.000\u20132.000",
      usd: "$450\u2013700",
    },
    {
      id: "institutional-full",
      label: {
        pt: "Site institucional mais completo",
        en: "Full institutional site",
      },
      brl: "R$ 2.000\u20132.500",
      usd: "$700\u20131,000",
    },
    {
      id: "site-features",
      label: {
        pt: "Site com funcionalidades espec\u00edficas",
        en: "Site with custom features",
      },
      brl: "R$ 2.500\u20135.000",
      usd: "$1,000\u20131,500",
    },
    {
      id: "scheduling",
      label: {
        pt: "Sistema de agendamento",
        en: "Scheduling system",
      },
      brl: "R$ 2.000\u20135.000",
      usd: "$1,000\u20132,000",
    },
    {
      id: "orders",
      label: {
        pt: "Sistema de pedidos / vendas",
        en: "Orders & sales system",
      },
      brl: "R$ 3.000\u20138.000",
      usd: "$1,400\u20132,500",
    },
    {
      id: "erp",
      label: {
        pt: "Sistema de gest\u00e3o / ERP / CRM",
        en: "Management / ERP / CRM system",
      },
      brl: "R$ 5.000\u201315.000",
      usd: "$2,000\u20135,000",
    },
  ];

  /**
   * 1 carousel for all sites, 1 per system.
   * Screenshots live in assets/screenshots/<pasta>/.
   */
  const SECTIONS = [
    {
      id: "sites",
      titleKey: "section.sites.title",
      descKey: "section.sites.desc",
      slides: [
        {
          src: "assets/screenshots/sites/elitium-site.png",
          caption: {
            pt: "Elitium Site \u2014 Landing do ERP",
            en: "Elitium Site \u2014 ERP landing page",
          },
        },
        {
          src: "assets/screenshots/sites/VidaPlena-site.png",
          caption: {
            pt: "Cl\u00ednica Vida Plena \u2014 Site institucional",
            en: "Clinica Vida Plena \u2014 Institutional site",
          },
        },
        {
          src: "assets/screenshots/sites/PlanAI-site.png",
          caption: {
            pt: "PlanAI \u2014 Landing do produto",
            en: "PlanAI \u2014 Product landing",
          },
        },
      ],
    },
    {
      id: "orders",
      titleKey: "section.orders.title",
      descKey: "section.orders.desc",
      slides: [
        {
          src: "assets/screenshots/pedidos/cardapio.png",
          caption: {
            pt: "Basiquinho \u2014 Card\u00e1pio e pedidos",
            en: "Basiquinho \u2014 Menu & ordering",
          },
        },
        {
          src: "assets/screenshots/pedidos/AreaPix.png",
          caption: {
            pt: "Basiquinho \u2014 Checkout e PIX",
            en: "Basiquinho \u2014 Checkout & PIX",
          },
        },
        {
          src: "assets/screenshots/pedidos/admin.png",
          caption: {
            pt: "Basiquinho \u2014 Painel admin",
            en: "Basiquinho \u2014 Admin panel",
          },
        },
      ],
    },
    {
      id: "erp",
      titleKey: "section.erp.title",
      descKey: "section.erp.desc",
      slides: [
        {
          src: "assets/screenshots/erp/dashboard.png",
          caption: {
            pt: "Elitium ERP \u2014 Dashboard de vendas",
            en: "Elitium ERP \u2014 Sales dashboard",
          },
        },
        {
          src: "assets/screenshots/erp/estoque.png",
          caption: {
            pt: "Elitium ERP \u2014 Estoque e financeiro",
            en: "Elitium ERP \u2014 Inventory & finance",
          },
        },
        {
          src: "assets/screenshots/erp/AssistenteAI.png",
          caption: {
            pt: "Elitium ERP \u2014 Analytics e assistente IA",
            en: "Elitium ERP \u2014 Analytics & AI assistant",
          },
        },
      ],
    },
    {
      id: "scheduling",
      titleKey: "section.scheduling.title",
      descKey: "section.scheduling.desc",
      slides: [
        {
          src: "assets/screenshots/agendamento/home.png",
          caption: {
            pt: "GeSis Agenda \u2014 Site do tenant (home)",
            en: "GeSis Agenda \u2014 Tenant home",
          },
        },
        {
          src: "assets/screenshots/agendamento/agenda.png",
          caption: {
            pt: "GeSis Agenda \u2014 Calend\u00e1rio de agendamento",
            en: "GeSis Agenda \u2014 Booking calendar",
          },
        },
        {
          src: "assets/screenshots/agendamento/overview.png",
          caption: {
            pt: "GeSis Agenda \u2014 Painel admin (overview)",
            en: "GeSis Agenda \u2014 Admin overview",
          },
        },
        {
          src: "assets/screenshots/agendamento/agendaADM.png",
          caption: {
            pt: "GeSis Agenda \u2014 Agenda operacional",
            en: "GeSis Agenda \u2014 Ops agenda",
          },
        },
        {
          src: "assets/screenshots/agendamento/AgendaPro.png",
          caption: {
            pt: "GeSis Agenda \u2014 Agenda do profissional",
            en: "GeSis Agenda \u2014 Pro calendar",
          },
        },
      ],
    },
    {
      id: "custom",
      titleKey: "section.custom.title",
      descKey: "section.custom.desc",
      slides: [
        {
          src: "assets/screenshots/personalizado/dashboard.png",
          caption: {
            pt: "PlanAI \u2014 Dashboard e gr\u00e1ficos",
            en: "PlanAI \u2014 Dashboard & charts",
          },
        },
        {
          src: "assets/screenshots/personalizado/copilot.png",
          caption: {
            pt: "PlanAI \u2014 Copilot e colabora\u00e7\u00e3o",
            en: "PlanAI \u2014 Copilot & collaboration",
          },
        },
      ],
    },
  ];

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderPricing() {
    const locale = getLocale();
    const tbody = document.getElementById("pricing-body");
    if (!tbody) return;
    tbody.innerHTML = PRICING.map(function (row) {
      const label = row.label[locale] || row.label.pt;
      const price = locale === "en" ? row.usd : row.brl;
      return "<tr><td>" + escapeHtml(label) + "</td><td>" + escapeHtml(price) + "</td></tr>";
    }).join("");
  }

  function buildCarousel(section) {
    const locale = getLocale();
    const slides = section.slides;
    const firstCaption = slides[0]
      ? slides[0].caption[locale] || slides[0].caption.pt
      : "";

    const slidesHtml = slides
      .map(function (slide, i) {
        const caption = slide.caption[locale] || slide.caption.pt;
        const media = slide.src
          ? '<span class="slide-media"><img src="' +
            escapeHtml(slide.src) +
            '" alt="' +
            escapeHtml(caption) +
            '" loading="lazy" decoding="async" /><span class="slide-hint"><span data-i18n="carousel.hint">' +
            escapeHtml(t("carousel.hint")) +
            '</span></span><span class="slide-tap-hint" data-i18n="carousel.hintTouch">' +
            escapeHtml(t("carousel.hintTouch")) +
            "</span></span>"
          : '<div class="slide-placeholder" aria-hidden="true"><span>' +
            escapeHtml(t(section.wip ? "carousel.wip" : "carousel.placeholder")) +
            "</span></div>";
        return (
          '<article class="cover-card' +
          (i === 0 ? " is-active" : "") +
          '" data-index="' +
          i +
          '" role="group" aria-roledescription="slide" aria-label="' +
          (i + 1) +
          " / " +
          slides.length +
          '"><button type="button" class="slide-open" data-open-lightbox data-section="' +
          section.id +
          '" data-index="' +
          i +
          '" data-i18n-aria="carousel.open" aria-label="' +
          escapeHtml(t("carousel.open")) +
          '">' +
          media +
          "</button></article>"
        );
      })
      .join("");

    const dots =
      slides.length > 1
        ? '<div class="carousel-dots" role="tablist">' +
          slides
            .map(function (_, i) {
              return (
                '<button type="button" class="dot' +
                (i === 0 ? " is-active" : "") +
                '" data-go="' +
                i +
                '" aria-label="' +
                (i + 1) +
                '" role="tab" aria-selected="' +
                (i === 0) +
                '"></button>'
              );
            })
            .join("") +
          "</div>"
        : "";

    const prevBtn =
      slides.length > 1
        ? '<button type="button" class="carousel-btn prev" data-i18n-aria="carousel.prev" aria-label="' +
          escapeHtml(t("carousel.prev")) +
          '"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 18l-6-6 6-6"/></svg></button>'
        : '<span class="carousel-btn-spacer" aria-hidden="true"></span>';

    const nextBtn =
      slides.length > 1
        ? '<button type="button" class="carousel-btn next" data-i18n-aria="carousel.next" aria-label="' +
          escapeHtml(t("carousel.next")) +
          '"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 18l6-6-6-6"/></svg></button>'
        : '<span class="carousel-btn-spacer" aria-hidden="true"></span>';

    return (
      '<section class="work-section" id="' +
      section.id +
      '" data-section="' +
      section.id +
      '"><div class="container section-head"><h2 data-i18n="' +
      section.titleKey +
      '">' +
      escapeHtml(t(section.titleKey)) +
      '</h2><p data-i18n="' +
      section.descKey +
      '">' +
      escapeHtml(t(section.descKey)) +
      '</p></div><div class="carousel" data-carousel="' +
      section.id +
      '" aria-roledescription="carousel"><div class="carousel-stage">' +
      prevBtn +
      '<div class="coverflow" aria-live="polite"><div class="coverflow-scene">' +
      slidesHtml +
      '</div></div>' +
      nextBtn +
      '</div><p class="carousel-caption">' +
      escapeHtml(firstCaption) +
      "</p>" +
      dots +
      "</div></section>"
    );
  }

  function initCarousel(root) {
    const slides = Array.prototype.slice.call(root.querySelectorAll(".cover-card"));
    const sectionId = root.getAttribute("data-carousel");
    const section = findSection(sectionId);
    let index = 0;
    const dots = Array.prototype.slice.call(root.querySelectorAll(".dot"));
    const prev = root.querySelector(".carousel-btn.prev");
    const next = root.querySelector(".carousel-btn.next");
    const captionEl = root.querySelector(".carousel-caption");
    let autoplayTimer = null;
    let touchStartX = 0;

    function layout() {
      const n = slides.length;
      const reduce = prefersReducedMotion();
      slides.forEach(function (card, i) {
        let offset = i - index;
        if (n > 2) {
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;
        }
        const abs = Math.abs(offset);
        const x = offset * (window.innerWidth < 981 ? 28 : 40);
        const z = reduce ? 0 : -abs * 90;
        const rotY = reduce ? 0 : offset * -32;
        const scale = offset === 0 ? 1 : Math.max(0.7, 1 - abs * 0.16);
        const opacity = abs > 2 ? 0 : Math.max(0.35, 1 - abs * 0.28);
        card.style.transform =
          "translate(-50%, -50%) translateX(" +
          x +
          "%) translateZ(" +
          z +
          "px) rotateY(" +
          rotY +
          "deg) scale(" +
          scale +
          ")";
        card.style.zIndex = String(200 - abs * 10);
        card.style.opacity = String(opacity);
        card.style.pointerEvents = abs <= 1 ? "auto" : "none";
        card.style.filter = abs === 0 ? "none" : "brightness(0.82)";
        card.setAttribute("aria-hidden", offset === 0 ? "false" : "true");
        card.classList.toggle("is-active", offset === 0);
      });

      dots.forEach(function (d, i) {
        d.classList.toggle("is-active", i === index);
        d.setAttribute("aria-selected", String(i === index));
      });

      if (captionEl && section && section.slides[index]) {
        const locale = getLocale();
        const slide = section.slides[index];
        const nextText = slide.caption[locale] || slide.caption.pt;
        if (captionEl.textContent === nextText) return;
        captionEl.classList.add("is-fading");
        window.setTimeout(function () {
          captionEl.textContent = nextText;
          captionEl.classList.remove("is-fading");
        }, 160);
      }
    }

    function go(to) {
      if (!slides.length) return;
      index = ((to % slides.length) + slides.length) % slides.length;
      layout();
    }

    function stopAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
      autoplayTimer = null;
    }

    function startAutoplay() {
      if (prefersReducedMotion() || slides.length <= 1) return;
      stopAutoplay();
      autoplayTimer = setInterval(function () {
        go(index + 1);
      }, 7000);
    }

    if (prev) {
      prev.addEventListener("click", function (e) {
        e.stopPropagation();
        go(index - 1);
        startAutoplay();
      });
    }
    if (next) {
      next.addEventListener("click", function (e) {
        e.stopPropagation();
        go(index + 1);
        startAutoplay();
      });
    }
    dots.forEach(function (d) {
      d.addEventListener("click", function () {
        go(Number(d.getAttribute("data-go")));
        startAutoplay();
      });
    });

    slides.forEach(function (card) {
      card.addEventListener("click", function (e) {
        const i = Number(card.getAttribute("data-index"));
        if (i !== index) {
          e.preventDefault();
          go(i);
          startAutoplay();
        }
      });
    });

    Array.prototype.forEach.call(root.querySelectorAll("[data-open-lightbox]"), function (btn) {
      btn.addEventListener("click", function (e) {
        const i = Number(btn.getAttribute("data-index"));
        if (i !== index) {
          e.preventDefault();
          go(i);
          startAutoplay();
          return;
        }
        stopAutoplay();
        openLightbox(sectionId, index);
      });
    });

    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        go(index - 1);
        startAutoplay();
      }
      if (e.key === "ArrowRight") {
        go(index + 1);
        startAutoplay();
      }
    });
    root.setAttribute("tabindex", "0");

    root.addEventListener("mouseenter", stopAutoplay);
    root.addEventListener("mouseleave", startAutoplay);
    root.addEventListener("focusin", stopAutoplay);
    root.addEventListener("focusout", function (e) {
      if (!root.contains(e.relatedTarget)) startAutoplay();
    });

    root.addEventListener(
      "touchstart",
      function (e) {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );
    root.addEventListener(
      "touchend",
      function (e) {
        const dx = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(dx) < 40) return;
        go(dx < 0 ? index + 1 : index - 1);
        startAutoplay();
      },
      { passive: true }
    );

    window.addEventListener(
      "resize",
      function () {
        layout();
      },
      { passive: true }
    );

    layout();
    startAutoplay();
  }

  /* —— Lightbox —— */
  const lightboxState = { sectionId: null, index: 0, busy: false };

  function findSection(id) {
    for (let i = 0; i < SECTIONS.length; i++) {
      if (SECTIONS[i].id === id) return SECTIONS[i];
    }
    return null;
  }

  function buildLightboxLayer(section, slide, caption) {
    const layer = document.createElement("div");
    layer.className = "lb-layer";
    if (slide.src) {
      const img = document.createElement("img");
      img.src = slide.src;
      img.alt = caption;
      layer.appendChild(img);
    } else {
      const ph = document.createElement("div");
      ph.className = "slide-placeholder";
      const span = document.createElement("span");
      span.textContent = t(section.wip ? "carousel.wip" : "carousel.placeholder");
      ph.appendChild(span);
      layer.appendChild(ph);
    }
    return layer;
  }

  function updateLightboxChrome(section, caption, opts) {
    opts = opts || {};
    const capEl = document.getElementById("lightbox-caption");
    const dotsWrap = document.getElementById("lightbox-dots");

    if (capEl && !opts.skipCaption) {
      capEl.classList.remove("is-out");
      capEl.classList.add("is-in");
      capEl.textContent = caption;
    }

    if (dotsWrap) {
      dotsWrap.innerHTML = section.slides
        .map(function (_, i) {
          return (
            '<button type="button" class="dot' +
            (i === lightboxState.index ? " is-active" : "") +
            '" data-lb-go="' +
            i +
            '" aria-label="' +
            (i + 1) +
            '"></button>'
          );
        })
        .join("");
      Array.prototype.forEach.call(dotsWrap.querySelectorAll("[data-lb-go]"), function (btn) {
        btn.addEventListener("click", function () {
          const next = Number(btn.getAttribute("data-lb-go"));
          if (next === lightboxState.index || lightboxState.busy) return;
          const dir = next >= lightboxState.index ? 1 : -1;
          lightboxState.index = next;
          renderLightboxSlide({ animate: true, dir: dir });
        });
      });
    }

    const prev = document.getElementById("lightbox-prev");
    const next = document.getElementById("lightbox-next");
    const multi = section.slides.length > 1;
    if (prev) prev.hidden = !multi;
    if (next) next.hidden = !multi;
  }

  function paintLightboxContent(section, slide, caption) {
    const media = document.getElementById("lightbox-media");
    if (media) {
      media.innerHTML = "";
      const layer = buildLightboxLayer(section, slide, caption);
      layer.classList.add("is-shown");
      media.appendChild(layer);
    }
    updateLightboxChrome(section, caption);
  }

  function animateCaption(caption) {
    const capEl = document.getElementById("lightbox-caption");
    if (!capEl) return;
    capEl.classList.remove("is-in");
    capEl.classList.add("is-out");
    window.setTimeout(function () {
      capEl.textContent = caption;
      capEl.classList.remove("is-out");
      requestAnimationFrame(function () {
        capEl.classList.add("is-in");
      });
    }, 180);
  }

  function whenLayerReady(layer, done) {
    const img = layer.querySelector("img");
    if (!img || img.complete) {
      done();
      return;
    }
    let finished = false;
    function finish() {
      if (finished) return;
      finished = true;
      img.removeEventListener("load", finish);
      img.removeEventListener("error", finish);
      done();
    }
    img.addEventListener("load", finish);
    img.addEventListener("error", finish);
    window.setTimeout(finish, 450);
  }

  function renderLightboxSlide(opts) {
    opts = opts || {};
    const section = findSection(lightboxState.sectionId);
    const lb = document.getElementById("lightbox");
    if (!section || !lb) return;

    const locale = getLocale();
    const slide = section.slides[lightboxState.index];
    if (!slide) return;

    const caption = slide.caption[locale] || slide.caption.pt;
    const media = document.getElementById("lightbox-media");
    const hasCurrent = media && media.querySelector(".lb-layer");
    const animate = opts.animate && hasCurrent;
    const dir = opts.dir || 1;

    if (!animate || prefersReducedMotion()) {
      paintLightboxContent(section, slide, caption);
      lightboxState.busy = false;
      return;
    }

    if (lightboxState.busy) return;
    lightboxState.busy = true;

    const outgoing = media.querySelector(".lb-layer.is-shown") || media.querySelector(".lb-layer");
    const incoming = buildLightboxLayer(section, slide, caption);
    incoming.classList.add(dir < 0 ? "is-enter-prev" : "is-enter-next");
    media.appendChild(incoming);

    animateCaption(caption);
    updateLightboxChrome(section, caption, { skipCaption: true });

    whenLayerReady(incoming, function () {
      void media.offsetWidth;
      requestAnimationFrame(function () {
        if (outgoing) {
          outgoing.classList.remove("is-shown");
          outgoing.classList.add(dir < 0 ? "is-leave-prev" : "is-leave-next");
        }
        incoming.classList.remove("is-enter-prev", "is-enter-next");
        incoming.classList.add("is-shown");

        window.setTimeout(function () {
          if (outgoing && outgoing.parentNode === media) outgoing.remove();
          Array.prototype.forEach.call(media.querySelectorAll(".lb-layer"), function (layer) {
            if (layer !== incoming) layer.remove();
          });
          lightboxState.busy = false;
        }, 580);
      });
    });
  }

  function openLightbox(sectionId, index) {
    const lb = document.getElementById("lightbox");
    if (!lb || !findSection(sectionId)) return;
    lightboxState.sectionId = sectionId;
    lightboxState.index = index || 0;
    lightboxState.busy = false;

    const media = document.getElementById("lightbox-media");
    if (media) media.innerHTML = "";

    renderLightboxSlide({ animate: false });
    lb.hidden = false;
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");

    requestAnimationFrame(function () {
      lb.classList.add("is-open");
      const capEl = document.getElementById("lightbox-caption");
      if (capEl) {
        capEl.classList.remove("is-out");
        capEl.classList.add("is-in");
      }
    });

    const closeBtn = lb.querySelector(".lightbox-close");
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    const lb = document.getElementById("lightbox");
    if (!lb || lb.hidden) return;
    lb.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
    window.setTimeout(function () {
      lb.hidden = true;
      lb.setAttribute("aria-hidden", "true");
      lightboxState.sectionId = null;
      lightboxState.busy = false;
    }, 420);
  }

  function lightboxStep(delta) {
    const section = findSection(lightboxState.sectionId);
    if (!section || section.slides.length < 2 || lightboxState.busy) return;
    lightboxState.index =
      (lightboxState.index + delta + section.slides.length) % section.slides.length;
    renderLightboxSlide({ animate: true, dir: delta });
  }

  function initLightbox() {
    const lb = document.getElementById("lightbox");
    if (!lb) return;

    Array.prototype.forEach.call(lb.querySelectorAll("[data-lightbox-close]"), function (el) {
      el.addEventListener("click", closeLightbox);
    });

    document.getElementById("lightbox-prev")?.addEventListener("click", function () {
      lightboxStep(-1);
    });
    document.getElementById("lightbox-next")?.addEventListener("click", function () {
      lightboxStep(1);
    });

    document.addEventListener("keydown", function (e) {
      if (lb.hidden) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxStep(-1);
      if (e.key === "ArrowRight") lightboxStep(1);
    });
  }

  function renderSections() {
    const mount = document.getElementById("works");
    if (!mount) return;
    mount.innerHTML = SECTIONS.map(buildCarousel).join("");
    Array.prototype.forEach.call(mount.querySelectorAll("[data-carousel]"), initCarousel);
  }

  function refreshCaptions() {
    const locale = getLocale();
    SECTIONS.forEach(function (section) {
      const root = document.querySelector('[data-carousel="' + section.id + '"]');
      if (!root) return;
      Array.prototype.forEach.call(root.querySelectorAll(".cover-card"), function (card, i) {
        const slide = section.slides[i];
        if (!slide) return;
        const caption = slide.caption[locale] || slide.caption.pt;
        const img = card.querySelector("img");
        if (img) img.alt = caption;
        const ph = card.querySelector(".slide-placeholder span");
        if (ph) ph.textContent = t(section.wip ? "carousel.wip" : "carousel.placeholder");
        const openBtn = card.querySelector(".slide-open");
        if (openBtn) openBtn.setAttribute("aria-label", t("carousel.open"));
        const hint = card.querySelector(".slide-hint span");
        if (hint) hint.textContent = t("carousel.hint");
        const tapHint = card.querySelector(".slide-tap-hint");
        if (tapHint) tapHint.textContent = t("carousel.hintTouch");
      });
      const active = root.querySelector(".cover-card.is-active");
      const captionEl = root.querySelector(".carousel-caption");
      if (active && captionEl) {
        const i = Number(active.getAttribute("data-index"));
        const slide = section.slides[i];
        if (slide) captionEl.textContent = slide.caption[locale] || slide.caption.pt;
      }
    });
    if (!document.getElementById("lightbox")?.hidden) renderLightboxSlide();
  }

  function wireContact() {
    const wa = document.getElementById("contact-whatsapp");
    if (!wa) return;
    const locale = getLocale();
    const text = WA_MESSAGES[locale] || WA_MESSAGES.pt;
    wa.href =
      "https://wa.me/" + CONTACT.whatsapp + "?text=" + encodeURIComponent(text);
  }

  function initNavScroll() {
    const nav = document.querySelector(".site-nav");
    if (!nav) return;
    function onScroll() {
      nav.classList.toggle("scrolled", window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initReveal() {
    document.documentElement.classList.add("js-ready");
    const revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  function boot() {
    try {
      initI18n();
      renderSections();
      renderPricing();
      wireContact();
      initNavScroll();
      initReveal();
      initLightbox();
      applyI18n(getLocale());

      document.addEventListener("localechange", function () {
        renderPricing();
        refreshCaptions();
        applyI18n(getLocale());
        wireContact();
      });
    } catch (err) {
      console.error(err);
      document.documentElement.classList.remove("js-ready");
      Array.prototype.forEach.call(document.querySelectorAll(".reveal"), function (el) {
        el.classList.add("is-visible");
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
