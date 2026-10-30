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
    ctaPrimaryLink: "tel:+41412120531",
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

  // --- Servicios. El primero sale destacado. Puedes añadir o quitar bloques. ---
  services: {
    eyebrow: "Leistungen",
    title: "Handwerk, das man sieht.",
    items: [
      { number: "01", title: "Haarschnitt", description: "Klassisch oder modern – abgestimmt auf Ihren Typ, Ihre Haarstruktur und Ihren Alltag." },
      { number: "02", title: "Fade & Übergänge", description: "Saubere Skin- oder Low-Fades mit präzisen Konturen." },
      { number: "03", title: "Bart & Rasur", description: "Trimmen, Konturen und Nassrasur für ein gepflegtes Finish." },
      { number: "04", title: "Kinderhaarschnitt", description: "Entspannt und schnell – für die Kleinen." }
    ]
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
