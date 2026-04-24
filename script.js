// ─────────────────────────────────────────────
//  YOUR WORD LIST
//  GIFs sourced from lifeprint.com
//  ✅ = confirmed in animated GIF index
//  🔗 = links to individual sign page (gif path may need adjusting)
// ─────────────────────────────────────────────


const words = [
  // ── People ──
  { word: "Mom",         gif: "gifs/mom.gif",             note: "" },
  { word: "Dad",         gif: "gifs/dad.gif", note: "" },
  { word: "Grandma",     gif: "gifs/grandma.gif",  note: "" },
  { word: "Grandpa",     gif: "gifs/grandpa.gif",        note: "" },

  // ── Pronouns ──
  { word: "I / Me",      gif: "gifs/i.gif", note: "" },
  { word: "You",         gif: "gifs/you.gif",         note: "" },
  { word: "I Love You",  gif: "gifs/iloveyou.gif",          note: "" },

  // ── Yes / No ──
  { word: "Yes",         gif: "gifs/yes.gif",                                                        note: "" },
  { word: "No",          gif: "gifs/no.gif",                                                note: "" },

  // ── Food & Drink ──
  { word: "Eat",         gif: "gifs/eatfood.gif",            note: "" },
  { word: "Drink",       gif: "gifs/drink.gif",                                                   note: "" },
  { word: "Hungry",      gif: "gifs/hungry.gif",          note: "" },
  { word: "Thirsty",     gif: "gifs/thirsty.gif",                                                   note: "" },
  { word: "Milk",        gif: "gifs/milk.gif",  note: "" },
  { word: "Water",       gif: "gifs/water.gif",          note: "" },

  // ── Polite Words ──
  { word: "Help",        gif: "gifs/help.gif",           note: "" },
  { word: "Please",      gif: "gifs/please.gif",                                              note: "" },
  { word: "Thank You",   gif: "gifs/thankyou.gif",       note: "" },
  { word: "You're Welcome", gif: "gifs/welcome.gif", note: "" },
  { word: "Sorry",       gif: "gifs/sorry.gif",                                                      note: "" },

  // ── Actions / Requests ──
  { word: "Want",        gif: "gifs/want.gif",           note: "" },
  { word: "More",        gif: "gifs/more.gif",                                              note: "" },
  { word: "Done",        gif: "gifs/done.gif",          note: "" },
  { word: "Share",       gif: "gifs/share.gif",           note: "" },
  { word: "Stop",        gif: "gifs/stop.gif",            note: "" },
  { word: "Go",          gif: "gifs/go.gif",              note: "" },
  { word: "Stay",        gif: "gifs/stay.gif",            note: "" },

  // ── Bathroom / Hygiene ──
  { word: "Poop",        gif: "gifs/poop.gif",            note: "" },
  { word: "Pee",         gif: "gifs/pee.gif",        note: "" },
  { word: "Bath",        gif: "gifs/bath.gif",                                           note: "" },

  // ── Play & Rest ──
  { word: "Play",        gif: "gifs/play.gif",                                                       note: "" },
  { word: "Book",        gif: "gifs/book.gif",                                              note: "" },
  { word: "Sleep",       gif: "gifs/sleep.gif",                                                     note: "" },
  { word: "Music",       gif: "gifs/music.gif",                                                     note: "" },

  // ── Feelings / Body ──
  { word: "Hurt",        gif: "gifs/hurt.gif",                                                       note: "" },
  { word: "Cold",        gif: "gifs/cold.gif",            note: "" },
  { word: "Hot",         gif: "gifs/hot.gif",             note: "" },
  { word: "Good",        gif: "gifs/good.gif",            note: "" },
  { word: "Bad",         gif: "gifs/bad.gif",             note: "" },
  { word: "Happy",       gif: "gifs/happy.gif",           note: "" },
  { word: "Sad",         gif: "gifs/sad.gif",             note: "" },
  { word: "Hug",         gif: "gifs/hug.gif",             note: "" },
  { word: "Kiss",        gif: "gifs/kiss.gif",                    note: "" },
];

// ─────────────────────────────────────────────
//  Rendering
// ─────────────────────────────────────────────

const grid        = document.getElementById('word-grid');
const searchInput = document.getElementById('search');
const emptyState  = document.getElementById('empty-state');

function brokenImg() {
  return `<div class="placeholder" style="display:flex;">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3"/>
      <path d="M9 9h.01M15 9h.01M9 15c.8 1.2 5.2 1.2 6 0"/>
    </svg>
    <span>GIF not found</span>
  </div>`;
}

function placeholderSVG() {
  return `<div class="placeholder">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3"/>
      <path d="M9 9h.01M15 9h.01M9 15c.8 1.2 5.2 1.2 6 0"/>
    </svg>
    <span>GIF coming soon</span>
  </div>`;
}

function createCard(entry, index) {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.animationDelay = `${index * 0.04}s`;

  let mediaHTML;
  if (entry.gif) {
    const img = document.createElement('img');
    img.src = entry.gif;
    img.alt = `ASL sign for ${entry.word}`;
    img.loading = 'lazy';
    // Store for onerror below
    const brokenHTML = brokenImg();
    card.innerHTML = `
      <div class="card-media"></div>
      <div class="card-body">
        <div class="card-word">${entry.word}</div>
        ${entry.note ? `<div class="card-note"><a href="https://${entry.note}" target="_blank" rel="noopener">View on Lifeprint ↗</a></div>` : ''}
      </div>`;
    const mediaDiv = card.querySelector('.card-media');
    img.onerror = () => { mediaDiv.innerHTML = brokenHTML; };
    mediaDiv.appendChild(img);
    return card;
  } else {
    mediaHTML = placeholderSVG();
  }

  card.innerHTML = `
    <div class="card-media">${mediaHTML}</div>
    <div class="card-body">
      <div class="card-word">${entry.word}</div>
      ${entry.note ? `<div class="card-note"><a href="https://${entry.note}" target="_blank" rel="noopener">View on Lifeprint ↗</a></div>` : ''}
    </div>`;
  return card;
}

function render(list) {
  grid.innerHTML = '';
  if (list.length === 0) {
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;
  list.forEach((entry, i) => grid.appendChild(createCard(entry, i)));
}

render(words);

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  render(words.filter(w => w.word.toLowerCase().includes(q)));
});
