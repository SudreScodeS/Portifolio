/**
 * PT / EN strings and locale switching.
 * Prices switch currency via main.js pricing render.
 */
const I18N = {
  pt: {
    "nav.works": "Trabalhos",
    "nav.pricing": "Preços",
    "nav.contact": "Contato",
    "nav.sites": "Sites",
    "nav.orders": "Pedidos",
    "nav.erp": "ERP",
    "nav.scheduling": "Agendamento",
    "nav.custom": "Personalizado",
    "hero.title": "Trabalhos recentes",
    "hero.sub": "Veja o que já entregamos — em screenshots, sem precisar abrir o sistema.",
    "hero.cta": "Ver trabalhos",
    "hero.ctaPrices": "Ver preços",
    "section.sites.title": "Sites",
    "section.sites.desc": "Landings e sites institucionais — do simples ao com funcionalidades específicas.",
    "section.orders.title": "Sistema de pedidos / vendas",
    "section.orders.desc": "Cardápio, carrinho, checkout, pagamentos e painel de pedidos.",
    "section.erp.title": "Sistema de gestão / ERP / CRM",
    "section.erp.desc": "Vendas, estoque, financeiro, clientes, relatórios e analytics.",
    "section.scheduling.title": "Sistema de agendamento",
    "section.scheduling.desc": "Reservas, horários e gestão de agenda para clínicas, salões e consultorias.",
    "section.custom.title": "Sistema muito personalizado",
    "section.custom.desc": "Produtos sob medida: dashboards, IA e fluxos específicos do negócio.",
    "pricing.title": "Preços",
    "pricing.sub": "Faixas de referência. O valor final depende do escopo.",
    "pricing.col.product": "Produto",
    "pricing.col.price": "Preço",
    "pricing.note": "Valores em reais. Em inglês, a tabela é exibida em dólares (faixas fixas).",
    "contact.title": "Vamos conversar",
    "contact.sub": "Conte o que precisa. Alinhamos escopo, prazo e investimento \u2014 com flexibilidade para negociar conforme o projeto.",
    "contact.whatsapp": "Falar no WhatsApp",
    "footer.note": "Portfólio para leads · Sem login nos sistemas",
    "carousel.prev": "Anterior",
    "carousel.next": "Próximo",
    "carousel.placeholder": "Screenshot em breve",
    "carousel.wip": "Em desenvolvimento",
    "carousel.open": "Ampliar screenshot",
    "carousel.hint": "Clique para ampliar",
    "carousel.close": "Fechar",
    "theme.toDark": "Ativar modo escuro",
    "theme.toLight": "Ativar modo claro",
  },
  en: {
    "nav.works": "Work",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.sites": "Sites",
    "nav.orders": "Orders",
    "nav.erp": "ERP",
    "nav.scheduling": "Scheduling",
    "nav.custom": "Custom",
    "hero.title": "Recent work",
    "hero.sub": "See what we’ve shipped — through screenshots, without opening the live systems.",
    "hero.cta": "View work",
    "hero.ctaPrices": "View pricing",
    "section.sites.title": "Sites",
    "section.sites.desc": "Landings and institutional sites — from simple pages to feature-rich builds.",
    "section.orders.title": "Orders & sales system",
    "section.orders.desc": "Menus, cart, checkout, payments, and an orders admin panel.",
    "section.erp.title": "Management / ERP / CRM",
    "section.erp.desc": "Sales, inventory, finance, clients, reports, and analytics.",
    "section.scheduling.title": "Scheduling system",
    "section.scheduling.desc": "Bookings, time slots, and calendar management for clinics, salons, and consultancies.",
    "section.custom.title": "Highly custom systems",
    "section.custom.desc": "Bespoke products: dashboards, AI, and business-specific workflows.",
    "pricing.title": "Pricing",
    "pricing.sub": "Reference ranges. Final quotes depend on scope.",
    "pricing.col.product": "Product",
    "pricing.col.price": "Price",
    "pricing.note": "Amounts in USD (fixed display ranges). Switch to PT for BRL.",
    "contact.title": "Let\u2019s talk",
    "contact.sub": "Tell us what you need. We\u2019ll align scope, timeline, and investment \u2014 with room to negotiate based on the project.",
    "contact.whatsapp": "Chat on WhatsApp",
    "footer.note": "Lead portfolio · No live system login required",
    "carousel.prev": "Previous",
    "carousel.next": "Next",
    "carousel.placeholder": "Screenshot coming soon",
    "carousel.wip": "In development",
    "carousel.open": "Enlarge screenshot",
    "carousel.hint": "Click to enlarge",
    "carousel.close": "Close",
    "theme.toDark": "Switch to dark mode",
    "theme.toLight": "Switch to light mode",
  },
};

const LOCALE_KEY = "portfolio-locale";
const THEME_KEY = "portfolio-theme";

function getLocale() {
  const stored = localStorage.getItem(LOCALE_KEY);
  if (stored === "pt" || stored === "en") return stored;
  return "pt";
}

function t(key, locale = getLocale()) {
  return I18N[locale]?.[key] ?? I18N.pt[key] ?? key;
}

function applyI18n(locale) {
  document.documentElement.lang = locale === "en" ? "en" : "pt-BR";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = t(key, locale);
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = value;
    } else {
      el.textContent = value;
    }
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    el.setAttribute("aria-label", t(key, locale));
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.locale === locale;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  updateThemeButtonLabel();
}

function setLocale(locale) {
  if (locale !== "pt" && locale !== "en") return;
  localStorage.setItem(LOCALE_KEY, locale);
  applyI18n(locale);
  document.dispatchEvent(new CustomEvent("localechange", { detail: { locale } }));
}

function getTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeButtonLabel();
}

function updateThemeButtonLabel() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const theme = document.documentElement.getAttribute("data-theme") || "light";
  const key = theme === "dark" ? "theme.toLight" : "theme.toDark";
  btn.setAttribute("aria-label", t(key));
  btn.setAttribute("title", t(key));
}

function setTheme(theme) {
  const next = theme === "dark" ? "dark" : "light";
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || getTheme();
  setTheme(current === "dark" ? "light" : "dark");
}

function initI18n() {
  applyTheme(getTheme());
  applyI18n(getLocale());
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLocale(btn.dataset.locale));
  });
  document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
}

window.PortfolioI18n = {
  getLocale,
  setLocale,
  t,
  applyI18n,
  initI18n,
  getTheme,
  setTheme,
  toggleTheme,
};
