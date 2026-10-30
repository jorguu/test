// Rellena la página con los datos de content.js y añade las interacciones.
// Para cambiar textos o imágenes NO hace falta tocar este archivo: usa content.js.
document.addEventListener("DOMContentLoaded", () => {
  const c = window.SITE_CONTENT;
  if (!c) return;

  const $ = (id) => document.getElementById(id);
  const setText = (id, value) => { const node = $(id); if (node && value != null) node.textContent = value; };
  const setLink = (id, text, href) => { const node = $(id); if (!node) return; node.textContent = text; node.href = href; };
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };

  /* ---------- General ---------- */
  document.title = c.site.pageTitle;
  $("favicon").href = c.site.logo;
  ["brand-logo", "hero-logo"].forEach((id) => { $(id).src = c.site.logo; $(id).alt = c.site.logoAlt; });
  setText("brand-name", c.site.name);

  /* ---------- Menú ---------- */
  const navList = $("nav-list");
  c.nav.forEach(({ text, link }) => {
    const li = el("li");
    const a = el("a", null, text);
    a.href = link;
    li.appendChild(a);
    navList.appendChild(li);
  });
  setLink("nav-cta", c.navCta.text, c.navCta.link);

  /* ---------- Hero ---------- */
  const { hero } = c;
  setText("hero-eyebrow", hero.eyebrow);
  setText("hero-title", hero.title);
  setText("hero-subtitle", hero.subtitle);
  setLink("hero-cta", hero.ctaPrimaryText, hero.ctaPrimaryLink);
  setLink("hero-cta2", hero.ctaSecondaryText, hero.ctaSecondaryLink);
  if (hero.backgroundImage) {
    const section = $("hero");
    section.style.backgroundImage = `url("${hero.backgroundImage}")`;
    section.classList.add("has-image");
    section.setAttribute("aria-label", hero.backgroundAlt || "");
  }

  /* ---------- Servicios (una tarjeta por servicio) ---------- */
  setText("services-eyebrow", c.services.eyebrow);
  setText("services-title", c.services.title);
  const servicesList = $("services-list");
  c.services.items.forEach(({ id, icon, title, description }) => {
    // Cada tarjeta es un enlace a la página de citas con el servicio ya elegido
    const card = el("a", "service reveal");
    card.href = "termin.html?service=" + encodeURIComponent(id);
    const iconEl = el("span", "service__icon", icon);
    iconEl.setAttribute("aria-hidden", "true");
    card.append(iconEl, el("h3", "service__title", title), el("p", "service__text", description), el("span", "service__cta", c.services.cardCta));
    servicesList.appendChild(card);
  });

  /* ---------- Über uns ---------- */
  setText("about-eyebrow", c.about.eyebrow);
  setText("about-title", c.about.title);
  setText("about-text", c.about.text);
  setText("about-langs-label", c.about.languagesLabel + ":");
  setText("about-langs", c.about.languages.join(", "));

  /* ---------- Horario + estado abierto/cerrado ---------- */
  setText("hours-eyebrow", c.hours.eyebrow);
  setText("hours-title", c.hours.title);
  const now = new Date();
  const todayIndex = (now.getDay() + 6) % 7; // 0 = lunes
  const toMinutes = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
  const hoursList = $("hours-list");
  c.hours.days.forEach(({ day, open, close }, i) => {
    const closed = !open;
    const row = el("li", "hours__row" + (closed ? " is-closed" : "") + (i === todayIndex ? " is-today" : ""));
    row.append(el("span", null, day), el("span", null, closed ? c.hours.closedLabel : `${open} – ${close}`));
    hoursList.appendChild(row);
  });

  const today = c.hours.days[todayIndex];
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const isOpen = Boolean(today && today.open && nowMin >= toMinutes(today.open) && nowMin < toMinutes(today.close));
  $("status").classList.toggle("is-open", isOpen);
  setText("status-text", isOpen ? c.status.openText.replace("{time}", today.close) : c.status.closedText);

  /* ---------- Contacto ---------- */
  const ct = c.contact;
  setText("contact-eyebrow", ct.eyebrow);
  setText("contact-title", ct.title);
  const address = $("contact-address");
  ct.addressLines.forEach((line, i) => {
    if (i) address.appendChild(el("br"));
    address.appendChild(document.createTextNode(line));
  });
  const links = $("contact-links");
  const addLink = (text, href, cls) => {
    const li = el("li", cls);
    const a = el("a", null, text);
    a.href = href;
    li.appendChild(a);
    links.appendChild(li);
  };
  addLink(ct.phone.text, ct.phone.link, "is-phone");
  ct.emails.forEach((mail) => addLink(mail, "mailto:" + mail));
  setLink("contact-directions", ct.directionsText, ct.directionsLink);
  $("contact-map").src = ct.mapEmbed;
  $("contact-map").title = ct.mapTitle;

  /* ---------- Footer ---------- */
  setText("footer-year", now.getFullYear());
  setText("footer-text", c.footer.text);

  /* ---------- Menú móvil ---------- */
  const toggle = $("menu-toggle");
  const nav = $("nav");
  const setMenu = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  /* ---------- Header más opaco al hacer scroll ---------- */
  const header = $("header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Animación de entrada al hacer scroll ---------- */
  document.querySelectorAll(".section__title, .about__text, .hours, .contact__map").forEach((n) => n.classList.add("reveal"));
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach((n) => io.observe(n));
  } else {
    reveals.forEach((n) => n.classList.add("is-visible"));
  }
});
