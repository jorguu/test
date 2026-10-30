// Página de citas (termin.html). Solo interfaz: no envía ni guarda nada.
// Los textos se cambian en content.js, en el bloque "booking".
document.addEventListener("DOMContentLoaded", () => {
  const c = window.SITE_CONTENT;
  if (!c) return;
  const b = c.booking;

  const $ = (id) => document.getElementById(id);
  const setText = (id, value) => { const node = $(id); if (node && value != null) node.textContent = value; };
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };
  const pad = (n) => String(n).padStart(2, "0");
  const toMinutes = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
  const toTime = (min) => `${pad(Math.floor(min / 60))}:${pad(min % 60)}`;
  const formatDate = (d) => `${b.weekdaysShort[d.getDay()]}, ${d.getDate()}. ${b.months[d.getMonth()]}`;

  /* ---------- Textos fijos ---------- */
  document.title = b.pageTitle;
  $("favicon").href = c.site.logo;
  $("brand-logo").src = c.site.logo;
  $("brand-logo").alt = c.site.logoAlt;
  setText("brand-name", c.site.name);
  setText("back-link", b.backText);
  setText("booking-eyebrow", b.eyebrow);
  setText("booking-title", b.title);
  setText("booking-subtitle", b.subtitle);
  setText("step-service-text", b.stepService);
  setText("step-date-text", b.stepDate);
  setText("step-time-text", b.stepTime);
  setText("step-details-text", b.stepDetails);
  ["name", "phone", "email", "note"].forEach((f) => setText("l-" + f, b.fields[f]));
  setText("summary-title", b.summaryTitle);
  setText("sum-service-label", b.stepService);
  setText("sum-date-label", b.stepDate);
  setText("sum-time-label", b.stepTime);
  setText("submit-btn", b.submitText);
  setText("footer-year", new Date().getFullYear());
  setText("footer-text", c.footer.text);

  /* ---------- Estado de la selección ---------- */
  const params = new URLSearchParams(location.search);
  const state = {
    service: c.services.items.find((s) => s.id === params.get("service")) || null,
    date: null,
    time: null
  };

  // Marca como pulsado solo el botón elegido dentro de un grupo
  const select = (container, button) => {
    container.querySelectorAll(".choice").forEach((x) => x.setAttribute("aria-pressed", String(x === button)));
  };

  /* ---------- 1. Servicios ---------- */
  const serviceBox = $("service-options");
  c.services.items.forEach((s) => {
    const btn = el("button", "choice service-option");
    btn.type = "button";
    btn.setAttribute("aria-pressed", String(state.service === s));
    const icon = el("span", "service-option__icon", s.icon);
    icon.setAttribute("aria-hidden", "true");
    const text = el("span");
    text.append(el("strong", null, s.title), el("small", null, s.duration));
    btn.append(icon, text);
    btn.addEventListener("click", () => {
      state.service = s;
      select(serviceBox, btn);
      history.replaceState(null, "", "?service=" + encodeURIComponent(s.id));
      update();
    });
    serviceBox.appendChild(btn);
  });

  /* ---------- 2. Días (cerrados = desactivados) ---------- */
  // content.hours.days empieza en lunes; getDay() empieza en domingo
  const hoursFor = (d) => c.hours.days[(d.getDay() + 6) % 7];
  const dayBox = $("day-options");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < b.daysAhead; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const btn = el("button", "choice day-option");
    btn.type = "button";
    btn.setAttribute("aria-pressed", "false");
    btn.append(el("span", null, b.weekdaysShort[d.getDay()]), el("strong", null, d.getDate()), el("span", null, b.months[d.getMonth()]));
    btn.disabled = !hoursFor(d).open || availableSlots(d).length === 0;
    btn.addEventListener("click", () => {
      state.date = d;
      state.time = null;
      select(dayBox, btn);
      renderTimes();
      update();
    });
    dayBox.appendChild(btn);
  }

  /* ---------- 3. Horas ---------- */
  function availableSlots(d) {
    const h = hoursFor(d);
    if (!h.open) return [];
    const slots = [];
    const now = new Date();
    const isToday = d.toDateString() === now.toDateString();
    const nowMin = now.getHours() * 60 + now.getMinutes();
    for (let m = toMinutes(h.open); m + b.slotMinutes <= toMinutes(h.close); m += b.slotMinutes) {
      if (!isToday || m > nowMin) slots.push(toTime(m));
    }
    return slots;
  }

  const timeBox = $("time-options");
  function renderTimes() {
    timeBox.replaceChildren();
    if (!state.date) { timeBox.appendChild(el("p", "hint", b.pickDateFirst)); return; }
    const slots = availableSlots(state.date);
    if (!slots.length) { timeBox.appendChild(el("p", "hint", b.noSlotsText)); return; }
    slots.forEach((t) => {
      const btn = el("button", "choice time-option", t);
      btn.type = "button";
      btn.setAttribute("aria-pressed", "false");
      btn.addEventListener("click", () => {
        state.time = t;
        select(timeBox, btn);
        update();
      });
      timeBox.appendChild(btn);
    });
  }
  renderTimes();

  /* ---------- Resumen y botón ---------- */
  const form = $("booking-form");
  const nameInput = $("f-name");
  const phoneInput = $("f-phone");
  function update() {
    setText("sum-service", state.service ? state.service.title : b.summaryEmpty);
    setText("sum-date", state.date ? formatDate(state.date) : b.summaryEmpty);
    setText("sum-time", state.time || b.summaryEmpty);
    $("submit-btn").disabled = !(state.service && state.date && state.time && nameInput.value.trim() && phoneInput.value.trim());
  }
  form.addEventListener("input", update);
  update();

  /* ---------- Envío (simulado) ---------- */
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ($("submit-btn").disabled) return;
    const box = el("div", "success");
    const icon = el("div", "success__icon", "✓");
    icon.setAttribute("aria-hidden", "true");
    const dl = el("dl");
    [[b.stepService, state.service.title], [b.stepDate, formatDate(state.date)], [b.stepTime, state.time], [b.fields.name, nameInput.value.trim()]]
      .forEach(([k, v]) => dl.append(el("dt", null, k), el("dd", null, v)));
    const back = el("a", "btn", b.successBack);
    back.href = "index.html";
    box.append(icon, el("h2", null, b.successTitle), el("p", null, b.successText), dl, el("br"), back);
    $("booking-root").replaceChildren(box);
    window.scrollTo(0, 0);
  });
});
