// Öffnungszeiten werden aus der Tabelle #hours in index.html gelesen (Zeilen beginnen mit Montag)
const rows = [...document.querySelectorAll('#hours tr')];
const toNum = t => { const [H, M] = t.split(':').map(Number); return H + M / 60; };
const hours = rows.map(r => {
  const m = r.cells[1].textContent.match(/(\d{1,2}:\d{2})\s*[–-]\s*(\d{1,2}:\d{2})/);
  return m ? { from: toNum(m[1]), to: toNum(m[2]), label: m[2] } : null;
});
const now = new Date(), idx = (now.getDay() + 6) % 7; // Montag = 0
const h = now.getHours() + now.getMinutes() / 60, today = hours[idx];
const open = today && h >= today.from && h < today.to;
document.getElementById('statusDot').classList.toggle('open', !!open);
document.getElementById('statusText').textContent = open
  ? `Jetzt geöffnet · bis ${today.label} Uhr` : 'Zurzeit geschlossen';
// Heutigen Tag hervorheben
if (rows[idx]) rows[idx].classList.add('today');
document.getElementById('year').textContent = now.getFullYear();
