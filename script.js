// Öffnungszeiten: [Start, Ende] in Stunden, Index 0 = Sonntag
const hours = [null,[9,19],[9,19],[9,19],[9,19],[9,19],[9,17]];
const now = new Date(), day = now.getDay(), h = now.getHours() + now.getMinutes()/60;
const today = hours[day];
const open = today && h >= today[0] && h < today[1];
document.getElementById('statusDot').classList.toggle('open', !!open);
document.getElementById('statusText').textContent = open
  ? `Jetzt geöffnet · bis ${today[1]}:00 Uhr` : 'Zurzeit geschlossen';
// Heutigen Tag hervorheben (Tabelle beginnt mit Montag)
document.querySelectorAll('#hours tr')[(day + 6) % 7].classList.add('today');
document.getElementById('year').textContent = now.getFullYear();
