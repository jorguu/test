// =====================================================================
// CONTENIDO DE LA WEB DE JOSH SALON
// Edita aquí los textos, imágenes y enlaces.
// Cambia solo lo que está entre comillas. No borres comas ni llaves.
// =====================================================================
window.SITE_CONTENT = {

  // --- Datos generales (pestaña del navegador, logo, pie de página) ---
  site: {
    name: "Josh Salon",
    pageTitle: "Josh Salon – Coiffeur in Ebikon",
    logo: "img/logo.jpg",            // Ruta o URL del logo
    logoAlt: "Logo Josh Salon Haircut"
  },

  // --- Menú superior: texto y a qué sección lleva (#id) ---
  nav: [
    { text: "Leistungen", link: "#leistungen" },
    { text: "Über uns", link: "#ueber-uns" },
    { text: "Öffnungszeiten", link: "#zeiten" },
    { text: "Kontakt", link: "#kontakt" }
  ],
  navCta: { text: "Anrufen", link: "tel:+41412120531" },

  // --- Portada (lo primero que se ve) ---
  hero: {
    eyebrow: "Coiffeur · Ebikon",
    title: "Gepflegt aussehen.\nOhne Umwege.",
    subtitle: "Präzise Haarschnitte, saubere Fades und Bartpflege an der Zentralstrasse 30 – mitten in Ebikon.",
    ctaPrimaryText: "Termin vereinbaren",
    ctaPrimaryLink: "termin.html",
    ctaSecondaryText: "So finden Sie uns",
    ctaSecondaryLink: "#kontakt",
    // Foto de fondo opcional. Déjalo vacío ("") para usar el fondo oscuro.
    backgroundImage: "",
    backgroundAlt: "Innenansicht Josh Salon"
  },

  // --- Textos del indicador "abierto / cerrado" de la portada ---
  status: {
    openText: "Jetzt geöffnet · bis {time} Uhr",   // {time} se sustituye solo
    closedText: "Zurzeit geschlossen"
  },

  // --- Servicios: una tarjeta por bloque. Puedes añadir o quitar bloques. ---
  // icon: un emoji (copia y pega uno de https://emojipedia.org)
  // id: nombre corto sin espacios (se usa en el enlace a la página de citas)
  // duration: duración aproximada que se muestra al pedir cita (ajústala)
  services: {
    eyebrow: "Leistungen",
    title: "Was wir für Sie tun",
    cardCta: "Termin buchen →",
    items: [
      { id: "haarschnitt", icon: "✂️", title: "Haarschnitt", duration: "ca. 30 Min.", description: "Klassisch oder modern – abgestimmt auf Ihren Typ und Ihren Alltag." },
      { id: "bart", icon: "🪒", title: "Bart & Rasur", duration: "ca. 20 Min.", description: "Konturen, Trimmen und Nassrasur für ein sauberes Finish." },
      { id: "fade", icon: "💈", title: "Fade & Styling", duration: "ca. 45 Min.", description: "Saubere Übergänge und Styling-Tipps für zu Hause." },
      { id: "kinder", icon: "👦", title: "Kinderhaarschnitt", duration: "ca. 20 Min.", description: "Entspannt und schnell – für die Kleinen." }
    ]
  },

  // --- Página de citas (termin.html) ---
  // Es solo una maqueta: el formulario NO envía nada todavía.
  booking: {
    pageTitle: "Termin buchen – Josh Salon",
    backText: "← Zurück zur Startseite",
    eyebrow: "Online-Termin",
    title: "Termin buchen",
    subtitle: "Wählen Sie Leistung, Tag und Uhrzeit. Wir bestätigen Ihren Termin telefonisch oder per E-Mail.",
    stepService: "Leistung",
    stepDate: "Tag",
    stepTime: "Uhrzeit",
    stepDetails: "Ihre Angaben",
    daysAhead: 14,                 // Cuántos días se pueden reservar por adelantado
    slotMinutes: 30,               // Cada cuántos minutos hay una hora libre
    noSlotsText: "An diesem Tag sind keine Termine mehr frei.",
    pickDateFirst: "Bitte zuerst einen Tag wählen.",
    fields: {
      name: "Name",
      phone: "Telefon",
      email: "E-Mail (optional)",
      note: "Bemerkung (optional)"
    },
    summaryTitle: "Ihr Termin",
    summaryEmpty: "—",
    submitText: "Termin anfragen",
    successTitle: "Vielen Dank!",
    successText: "Ihre Anfrage ist eingegangen. Wir melden uns in Kürze, um den Termin zu bestätigen.",
    successBack: "Zur Startseite",
    weekdaysShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    months: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."]
  },

  // --- Sección "Sobre nosotros" ---
  about: {
    eyebrow: "Über uns",
    title: "Ein Salon für Ebikon.",
    text: "Bei Josh Salon zählt das Ergebnis: ein Schnitt, der sitzt, und eine Beratung, die zu Ihnen passt. Kommen Sie vorbei oder rufen Sie an – wir nehmen uns Zeit.",
    languagesLabel: "Wir sprechen",
    languages: ["Deutsch"]
  },

  // --- Horario. Formato "HH:MM" en 24 h. Deja open en "" si está cerrado. ---
  hours: {
    eyebrow: "Öffnungszeiten",
    title: "Wann wir für Sie da sind",
    closedLabel: "Geschlossen",
    days: [
      { day: "Montag",     open: "09:00", close: "19:00" },
      { day: "Dienstag",   open: "09:00", close: "19:00" },
      { day: "Mittwoch",   open: "09:00", close: "19:00" },
      { day: "Donnerstag", open: "09:00", close: "19:00" },
      { day: "Freitag",    open: "09:00", close: "19:00" },
      { day: "Samstag",    open: "09:00", close: "17:00" },
      { day: "Sonntag",    open: "",      close: "" }
    ]
  },

  // --- Contacto ---
  contact: {
    eyebrow: "Kontakt",
    title: "Besuchen Sie uns",
    addressLines: ["Josh Salon", "Zentralstrasse 30", "6030 Ebikon"],
    phone: { text: "+41 41 212 05 31", link: "tel:+41412120531" },
    emails: ["josh.salon@hotmail.com", "ceger.coiffeur@gmail.com"],
    directionsText: "Route planen",
    directionsLink: "https://www.google.com/maps/search/?api=1&query=Zentralstrasse+30+6030+Ebikon",
    mapEmbed: "https://maps.google.com/maps?q=Zentralstrasse%2030%2C%206030%20Ebikon&z=16&output=embed",
    mapTitle: "Karte Josh Salon"
  },

  // --- Pie de página ---
  footer: {
    text: "Josh Salon · Zentralstrasse 30, 6030 Ebikon"
  }
};
